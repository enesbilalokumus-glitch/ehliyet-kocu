(function () {
  const Data = window.EhliyetData;
  const Engine = window.EhliyetEngine;
  const Coach = window.EhliyetCoach;
  const root = document.getElementById("app");
  const STORAGE_KEY = "ehliyet-koc-v1";
  const SESSION_KEY = "ehliyet-koc-quiz";

  const ui = {
    view: "home",
    lessonTopic: "trafik",
    lessonSection: null,
    showCorrect: false,
    dailyOpen: false,
    modal: null,
  };
  let quiz = null;
  let timerHandle = null;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function rich(text) {
    return esc(text).replace(/\n/g, "<br>");
  }

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!raw || raw.version !== 1) throw new Error("empty");
      raw.log = raw.log || [];
      raw.wrongIds = raw.wrongIds || [];
      raw.sessions = raw.sessions || [];
      raw.chat = raw.chat || [];
      return raw;
    } catch (err) {
      return { version: 1, log: [], wrongIds: [], sessions: [], chat: [] };
    }
  }

  function save(store) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function pad(n) { return String(n).padStart(2, "0"); }
  function clock(ms) {
    const total = Math.ceil(ms / 1000);
    return pad(Math.floor(total / 60)) + ":" + pad(total % 60);
  }
  function duration(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + " dk " + s + " sn";
  }

  function dailyQuestion() {
    const key = new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    return Data.questions[hash % Data.questions.length];
  }

  function saveSession() {
    if (!quiz) return;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      mode: quiz.mode,
      topic: quiz.topic,
      section: quiz.section,
      startedAt: quiz.startedAt,
      endsAt: quiz.endsAt,
      ids: quiz.items.map(function (q) { return q.id; }),
      index: quiz.index,
      picks: quiz.picks,
      revealed: quiz.revealed,
    }));
  }

  function readSession() {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null"); }
    catch (err) { return null; }
  }

  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
  }

  function startTimer() {
    stopTimer();
    const tick = function () {
      if (!quiz || !quiz.endsAt) return;
      const left = quiz.endsAt - Date.now();
      const el = document.getElementById("timer");
      if (el) {
        el.textContent = clock(Math.max(0, left));
        el.classList.toggle("warn", left < 5 * 60 * 1000);
      }
      if (left <= 0) finishQuiz(true);
    };
    tick();
    timerHandle = setInterval(tick, 500);
  }

  function startQuiz(opts) {
    const store = load();
    const items = Engine.buildQuiz(Data.questions, {
      data: Data,
      mode: opts.mode,
      topic: opts.topic || null,
      section: opts.section || null,
      count: opts.count || 10,
      wrongIds: store.wrongIds,
    });
    if (!items.length) return;
    quiz = {
      mode: opts.mode,
      topic: opts.topic || null,
      section: opts.section || null,
      items: items,
      index: 0,
      picks: {},
      revealed: {},
      startedAt: Date.now(),
      endsAt: opts.mode === "exam" ? Date.now() + Data.EXAM_MINUTES * 60 * 1000 : null,
      done: false,
    };
    ui.view = "quiz";
    saveSession();
    if (quiz.endsAt) startTimer();
    else stopTimer();
    paint();
  }

  function resumeQuiz() {
    const raw = readSession();
    if (!raw) return;
    const items = raw.ids.map(function (id) { return Data.byId[id]; }).filter(Boolean);
    if (!items.length) {
      sessionStorage.removeItem(SESSION_KEY);
      return;
    }
    quiz = {
      mode: raw.mode,
      topic: raw.topic,
      section: raw.section,
      items: items,
      index: raw.index || 0,
      picks: raw.picks || {},
      revealed: raw.revealed || {},
      startedAt: raw.startedAt,
      endsAt: raw.endsAt,
      done: false,
    };
    ui.view = "quiz";
    if (quiz.endsAt) startTimer();
    paint();
  }

  function finishQuiz(auto) {
    if (!quiz || quiz.done) return;
    quiz.done = true;
    stopTimer();
    const graded = Engine.grade(quiz.items, quiz.picks);
    const store = load();
    const now = Date.now();
    graded.detail.forEach(function (row) {
      store.log.push({
        id: row.id,
        topic: row.topic,
        tags: row.tags,
        ok: row.ok,
        blank: row.blank,
        at: now,
        mode: quiz.mode,
      });
      if (row.blank) return;
      if (row.ok) store.wrongIds = store.wrongIds.filter(function (id) { return id !== row.id; });
      else if (store.wrongIds.indexOf(row.id) === -1) store.wrongIds.push(row.id);
    });
    store.log = store.log.slice(-600);
    store.sessions.unshift({
      id: "s" + now,
      at: now,
      mode: quiz.mode,
      topic: quiz.topic,
      section: quiz.section,
      durationSec: Math.max(1, Math.round((now - quiz.startedAt) / 1000)),
      ids: quiz.items.map(function (q) { return q.id; }),
      picks: quiz.picks,
    });
    store.sessions = store.sessions.slice(0, 20);
    save(store);
    sessionStorage.removeItem(SESSION_KEY);
    ui.showCorrect = false;
    ui.view = "result";
    ui.resultId = store.sessions[0].id;
    quiz = null;
    paint();
  }

  function currentSession() {
    const store = load();
    return store.sessions.filter(function (s) { return s.id === ui.resultId; })[0] || store.sessions[0];
  }

  function ask(message, okLabel) {
    return new Promise(function (resolve) {
      ui.modal = { message: message, okLabel: okLabel || "Evet", resolve: resolve };
      paint();
    });
  }

  function closeModal(answer) {
    const modal = ui.modal;
    ui.modal = null;
    paint();
    if (modal) modal.resolve(answer);
  }

  function signSvg(shape) {
    const open = '<svg viewBox="0 0 64 64" aria-hidden="true">';
    if (shape === "triangle") return open + '<polygon points="32,6 58,56 6,56" fill="#fffaf3" stroke="#c2412d" stroke-width="4"/></svg>';
    if (shape === "octagon") return open + '<polygon points="20,6 44,6 58,20 58,44 44,58 20,58 6,44 6,20" fill="#c2412d"/><text x="32" y="38" text-anchor="middle" fill="white" font-size="14" font-family="Outfit,sans-serif">DUR</text></svg>';
    if (shape === "yield") return open + '<polygon points="32,58 6,8 58,8" fill="#fffaf3" stroke="#c2412d" stroke-width="4"/></svg>';
    if (shape === "ban") return open + '<circle cx="32" cy="32" r="24" fill="#fffaf3" stroke="#c2412d" stroke-width="4"/><line x1="16" y1="48" x2="48" y2="16" stroke="#c2412d" stroke-width="4"/></svg>';
    if (shape === "must") return open + '<circle cx="32" cy="32" r="24" fill="#1e4f86"/><path d="M32 18 v20 M24 30 h16" stroke="white" stroke-width="4" fill="none"/></svg>';
    return open + '<rect x="8" y="16" width="48" height="32" rx="4" fill="#1e4f86"/></svg>';
  }

  function barsHtml(rec) {
    return '<div class="bars">' + rec.items.map(function (item) {
      const pct = item.asked ? Math.round(item.acc * 100) : 0;
      const weak = item.weakSections[0]
        ? '<p class="weak-line muted">Çok kaçan: ' + esc(item.weakSections[0].title) +
          ' <button class="btn small ghost" data-act="lesson" data-topic="' + item.id + '" data-section="' + item.weakSections[0].id + '">Oku</button></p>'
        : "";
      return '<div><div class="bar-head"><span>' + esc(item.label) + ' · sınavda ' + item.exam + '</span><span>' +
        (item.asked ? pct + "% · " + Engine.statusLabel(item) : "henüz yok") +
        '</span></div><div class="track"><i style="width:' + pct + '%"></i><b class="mark" style="left:70%"></b></div>' + weak + "</div>";
    }).join("") + "</div>";
  }

  function navIcon(name) {
    const paths = {
      home: '<path d="M4 11.2 12 4l8 7.2V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1z"/>',
      exam: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4.5l3 2"/>',
      practice: '<path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z"/>',
      wrongs: '<circle cx="12" cy="12" r="8"/><path d="M9 9l6 6M15 9l-6 6"/>',
      lessons: '<path d="M5 5.5h9.5A3.5 3.5 0 0 1 18 9v10.5H8.2A3.2 3.2 0 0 0 5 22.5z"/><path d="M5 5.5v17"/>',
      coach: '<path d="M6 16.5V7.5A2.5 2.5 0 0 1 8.5 5h7A2.5 2.5 0 0 1 18 7.5v6A2.5 2.5 0 0 1 15.5 16H10l-4 3z"/>',
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round">' + paths[name] + "</svg>";
  }

  function shell(active, body) {
    const links = [
      ["home", "Bugün", "home"],
      ["exam", "Deneme", "exam"],
      ["practice", "Konu çöz", "practice"],
      ["wrongs", "Yanlışlar", "wrongs"],
      ["lessons", "Anlatım", "lessons"],
      ["coach", "Koç", "coach"],
    ];
    const nav = links.map(function (link) {
      return '<button class="nav-link' + (active === link[0] ? " active" : "") + '" data-act="nav" data-view="' + link[0] + '">' +
        navIcon(link[2]) + "<span>" + link[1] + "</span></button>";
    }).join("");
    const modal = ui.modal
      ? '<div class="modal-back"><div class="modal" role="dialog"><p>' + esc(ui.modal.message) + '</p><div class="row"><button class="btn primary" data-act="modal-yes">' +
        esc(ui.modal.okLabel) + '</button><button class="btn ghost" data-act="modal-no">Vazgeç</button></div></div></div>'
      : "";
    return '<div class="shell"><aside class="nav"><div class="brand"><span class="mark">35</span><span><strong>Ehliyet Koçu</strong><small>Teorik sınav</small></span></div><nav class="nav-links">' +
      nav + '</nav><div class="nav-foot"><b>Geçme çizgisi</b>50 soru · 45 dk · 35 doğru</div></aside><div class="stage"><main class="main">' + body +
      '</main><p class="footer-mini">Sürüm 0.3 · Özgün çalışma soruları. MEB soru bankasının kopyası değildir.</p></div></div>' + modal;
  }

  function viewHome() {
    const store = load();
    const rec = Engine.recommend(store.log, Data);
    const exams = store.sessions.filter(function (s) { return s.mode === "exam"; });
    const last = exams[0];
    const lastGraded = last ? Engine.grade(last.ids.map(function (id) { return Data.byId[id]; }).filter(Boolean), last.picks) : null;
    const correctAll = store.log.filter(function (row) { return row.ok; }).length;
    const answered = store.log.filter(function (row) { return !row.blank; }).length;
    const rate = answered ? Math.round((correctAll / store.log.length) * 100) : 0;
    const pending = readSession();
    const daily = dailyQuestion();
    const banner = pending
      ? '<div class="banner"><span>Yarım kalan bir oturumun var.</span><button class="btn small" data-act="resume">Devam et</button></div>'
      : "";
    const dailyHtml = '<article class="daily"><span class="pill">Günün sorusu</span><h2 style="font-size:26px;margin:8px 0">' + esc(daily.q) + "</h2>" +
      (ui.dailyOpen
        ? "<p><strong>Doğru:</strong> " + esc(daily.choices[daily.a]) + "</p><p>" + esc(daily.exp) + "</p>"
        : '<button class="btn small" data-act="daily">Cevabı gör</button>') +
      "</article>";
    const history = store.sessions.slice(0, 4).map(function (session) {
      const graded = Engine.grade(session.ids.map(function (id) { return Data.byId[id]; }).filter(Boolean), session.picks);
      const label = session.mode === "exam" ? "Deneme" : "Çalışma";
      return '<button class="session" data-act="open-result" data-id="' + session.id + '"><span>' + label + " · " +
        new Date(session.at).toLocaleDateString("tr-TR") + "</span><strong>" + graded.correct + "/" + graded.total + "</strong></button>";
    }).join("") || '<p class="muted">Henüz bitmiş oturum yok.</p>';
    return banner +
      '<section class="hero"><div><p class="eyebrow">Teorik e-sınav</p><h1>35 doğru yeter.</h1><p class="lede">50 soru, 45 dakika, 70 puan. Yanlış, doğruyu götürmez. Her yanlışın altında nedeni yazar; sonda hangi derse gömüleceğini söyleriz.</p><div class="actions"><button class="btn primary" data-act="nav" data-view="exam">Deneme sınavı</button><button class="btn" data-act="start" data-mode="mix" data-count="10">10 soruluk ısınma</button></div></div>' +
      '<div class="hero-aside" aria-hidden="true"><div class="hero-ring"><b>70</b><span>puan</span></div><p>35 doğru yeter</p></div></section>' +
      '<section class="stats"><div class="stat"><span>Çözülen soru</span><b>' + store.log.length + '</b></div><div class="stat"><span>İsabet</span><b>' + (store.log.length ? rate + "%" : "—") + '</b></div><div class="stat"><span>Son deneme</span><b>' + (lastGraded ? lastGraded.correct * 2 : "—") + '</b></div></section>' +
      '<section class="grid-2"><article class="card"><h2>Koç notu</h2><p>' + esc(rec.headline) + "</p>" + barsHtml(rec) + '</article><div class="stack">' + dailyHtml +
      '<article class="card"><h2>Son oturumlar</h2>' + history + "</article></div></section>" +
      '<p class="footer-mini"><button class="btn small ghost" data-act="reset">İlerlemeyi sil</button></p>';
  }

  function viewExam() {
    return '<header class="page-head"><p class="eyebrow">Deneme</p><h1>Gerçek düzen.</h1><p class="lede">Sorular karışık gelir. Süre 45 dakikadır. Bitirmeden doğruyu göstermem; sonunda her yanlışın açıklaması açılır.</p></header>' +
      '<article class="card"><table><caption>e-Sınav dağılımı</caption><thead><tr><th>Ders</th><th>Soru</th><th>Puan</th></tr></thead><tbody>' +
      Data.TOPIC_ORDER.map(function (id) {
        const topic = Data.TOPICS[id];
        return "<tr><td>" + esc(topic.label) + "</td><td>" + topic.exam + "</td><td>" + topic.exam * 2 + "</td></tr>";
      }).join("") +
      "<tr><td><strong>Toplam</strong></td><td><strong>50</strong></td><td><strong>100</strong></td></tr></tbody></table>" +
      '<p class="note">Geçme çizgisi 35 doğru. Boş soru puan getirmez. Bu bankadaki cümleler özgün çalışmadır; gerçek sınavın ifadesi birebir aynı olmayabilir, kural ve tuzak aynı müfredattandır.</p>' +
      '<button class="btn primary" data-act="start" data-mode="exam">Denemeyi başlat</button></article>';
  }

  function viewPractice() {
    const cards = Data.TOPIC_ORDER.map(function (id) {
      const topic = Data.TOPICS[id];
      const total = Data.questions.filter(function (q) { return q.topic === id; }).length;
      return '<article class="topic-card"><span class="pill ' + topic.tone + '">' + topic.exam + " sınav sorusu</span><h2>" + esc(topic.label) + "</h2><p>" + esc(topic.blurb) + " Bankada " + total + ' soru var.</p><div class="row"><button class="btn small" data-act="start" data-mode="topic" data-topic="' + id + '" data-count="10">10</button><button class="btn small" data-act="start" data-mode="topic" data-topic="' + id + '" data-count="20">20</button><button class="btn small" data-act="start" data-mode="topic" data-topic="' + id + '" data-count="' + total + '">Tümü</button></div></article>';
    }).join("");
    return '<header class="page-head"><p class="eyebrow">Konu çöz</p><h1>Hemen gör, hemen anla.</h1><p class="lede">Bu modda şıkkı işaretleyince doğru ve açıklama açılır. Deneme modunda açıklama sonda gelir.</p></header><div class="topic-grid">' + cards +
      '<article class="topic-card"><span class="pill">Karışık</span><h2>Sınav oranı</h2><p>10 veya 20 soruyu, gerçek sınavdaki ders ağırlığına yakın seçerim.</p><div class="row"><button class="btn small primary" data-act="start" data-mode="mix" data-count="10">10 soru</button><button class="btn small" data-act="start" data-mode="mix" data-count="20">20 soru</button></div></article></div>';
  }

  function viewQuiz() {
    const q = quiz.items[quiz.index];
    const topic = Data.TOPICS[q.topic];
    const picked = Object.prototype.hasOwnProperty.call(quiz.picks, q.id) ? quiz.picks[q.id] : null;
    const revealed = !!quiz.revealed[q.id];
    const letters = ["A", "B", "C", "D"];
    const choices = q.choices.map(function (choice, index) {
      let cls = "choice";
      if (!revealed && picked === index) cls += " picked";
      if (revealed && index === q.a) cls += " good";
      if (revealed && picked === index && index !== q.a) cls += " bad";
      return '<button type="button" class="' + cls + '" data-act="pick" data-choice="' + index + '"' + (revealed ? " disabled" : "") + '><span class="letter">' + letters[index] + "</span><span>" + esc(choice) + "</span></button>";
    }).join("");
    const map = quiz.items.map(function (item, index) {
      let cls = "cell";
      if (index === quiz.index) cls += " now";
      const known = !!quiz.revealed[item.id];
      const choice = Object.prototype.hasOwnProperty.call(quiz.picks, item.id) ? quiz.picks[item.id] : null;
      if (known) cls += choice === item.a ? " good" : " bad";
      else if (choice !== null) cls += " filled";
      return '<button class="' + cls + '" data-act="jump" data-index="' + index + '">' + (index + 1) + "</button>";
    }).join("");
    let explain = "";
    if (revealed) {
      const right = picked === q.a;
      explain = '<div class="explain ' + (right ? "good" : "bad") + '"><strong>' + (right ? "Doğru." : "Yanlış. Doğru cevap " + letters[q.a] + ".") + "</strong><p>" + esc(q.exp) + '</p><div class="row"><button class="btn small" data-act="lesson" data-topic="' + q.topic + '" data-section="' + q.tags[0] + '">Konuyu aç</button><button class="btn small" data-act="discuss" data-qid="' + q.id + '">Koça sor</button></div></div>';
    }
    const atEnd = quiz.index === quiz.items.length - 1;
    const nextLabel = quiz.mode === "exam" ? (atEnd ? "Sınavı bitir" : "Sonraki") : (revealed && atEnd ? "Sonucu gör" : "Sonraki");
    const nextAct = quiz.mode === "exam" && atEnd ? "finish" : (quiz.mode !== "exam" && revealed && atEnd ? "finish" : "next");
    const nextDisabled = quiz.mode !== "exam" && picked === null;
    const timer = quiz.endsAt ? '<div class="timer" id="timer">' + clock(Math.max(0, quiz.endsAt - Date.now())) + "</div>" : "<div></div>";
    return '<div class="quiz-layout"><section class="quiz-panel"><div class="quiz-top"><div><span class="pill ' + topic.tone + '">' + esc(topic.label) + '</span><p class="quiz-count">Soru ' + (quiz.index + 1) + " / " + quiz.items.length + "</p></div>" + timer + "</div>" +
      '<div class="progress"><span style="width:' + Math.round(((quiz.index + (picked !== null ? 1 : 0)) / quiz.items.length) * 100) + '%"></span></div>' +
      '<h1 class="question" id="soru">' + esc(q.q) + "</h1><div class=\"choices\">" + choices + "</div>" + explain +
      '<div class="quiz-actions"><button class="btn ghost" data-act="prev"' + (quiz.index === 0 ? " disabled" : "") + '>Önceki</button><button class="btn primary" data-act="' + nextAct + '"' + (nextDisabled ? " disabled" : "") + ">" + nextLabel + "</button>" +
      (nextAct !== "finish" ? '<button class="btn" data-act="finish">Bitir</button>' : "") + "</div></section>" +
      '<aside class="quiz-side"><div class="map-card"><p class="map-title">Soru haritası</p><div class="map" aria-label="Soru haritası">' + map + '</div><p class="hint">A–D veya 1–4 ile işaretle. Ok tuşları soruyu değiştirir.</p></div></aside></div>';
  }

  function viewResult() {
    const session = currentSession();
    if (!session) return "<p>Gösterilecek sonuç yok.</p>";
    const items = session.ids.map(function (id) { return Data.byId[id]; }).filter(Boolean);
    const graded = Engine.grade(items, session.picks);
    const exam = session.mode === "exam" && graded.total === 50;
    const passed = exam && graded.correct >= Data.PASS_CORRECT;
    const rec = Engine.recommend(load().log, Data);
    const scoreMain = exam ? graded.correct * 2 : graded.correct + "/" + graded.total;
    const scoreSub = exam ? graded.correct + " doğru · " + graded.wrong + " yanlış · " + graded.blank + " boş" : "Doğru " + graded.correct + " · yanlış " + graded.wrong + " · boş " + graded.blank;
    const misses = graded.detail.filter(function (row) { return !row.ok; });
    const hits = graded.detail.filter(function (row) { return row.ok; });
    function block(row) {
      const q = Data.byId[row.id];
      if (!q) return "";
      const yours = row.blank ? "Boş bıraktın." : "Senin işaretin: " + q.choices[row.chosen];
      return '<article class="review-item"><span class="pill ' + Data.TOPICS[q.topic].tone + '">' + esc(Data.TOPICS[q.topic].label) + "</span><h3>" + esc(q.q) + '</h3><p class="mine">' + esc(yours) + '</p><p class="right">Doğru: ' + esc(q.choices[q.a]) + "</p><p>" + esc(q.exp) + '</p><button class="btn small" data-act="lesson" data-topic="' + q.topic + '" data-section="' + q.tags[0] + '">Bu başlığı çalış</button></article>';
    }
    const review = misses.map(block).join("") || "<p>Bu oturumda kaçırdığın soru yok.</p>";
    const correctBlock = ui.showCorrect ? '<div class="review-list">' + hits.map(block).join("") + "</div>" : "";
    return '<section class="result-banner"><div><p class="eyebrow">' + (exam ? "Deneme sonucu" : "Çalışma sonucu") + '</p><div class="score">' + scoreMain + '</div><p class="score-sub">' + scoreSub + " · " + duration(session.durationSec) + "</p></div>" +
      (exam ? '<div class="stamp ' + (passed ? "ok" : "no") + '">' + (passed ? "GEÇTİ" : "KALDI") + "</div>" : "") + "</section>" +
      '<article class="card"><h2>Nereye çalışmalısın?</h2><p>' + esc(rec.headline) + "</p>" + barsHtml(rec) +
      '<div class="row"><button class="btn primary" data-act="start" data-mode="topic" data-topic="' + rec.items[0].id + '" data-count="10">Önce ' + esc(rec.items[0].label) + '</button><button class="btn" data-act="nav" data-view="wrongs">Yanlışları çöz</button><button class="btn ghost" data-act="nav" data-view="coach">Koça sor</button></div></article>' +
      '<h2 class="block-title">Kaçırdıkların</h2><div class="review-list">' + review + "</div>" +
      (hits.length ? '<button class="btn small" data-act="toggle-correct">' + (ui.showCorrect ? "Doğruları gizle" : "Doğruları da göster") + "</button>" + correctBlock : "");
  }

  function viewWrongs() {
    const store = load();
    if (!store.wrongIds.length) {
      return '<header class="page-head"><p class="eyebrow">Yanlışlar</p><h1>Liste boş.</h1><p class="lede">Yanlış bildiğin soru burada birikir. Sonra doğrusunu bilirsen listeden düşer.</p></header><button class="btn primary" data-act="start" data-mode="mix" data-count="10">Bir tur başlat</button>';
    }
    const cards = store.wrongIds.map(function (id) {
      const q = Data.byId[id];
      if (!q) return "";
      return '<article class="review-item"><span class="pill ' + Data.TOPICS[q.topic].tone + '">' + esc(Data.TOPICS[q.topic].label) + "</span><h3>" + esc(q.q) + '</h3><button class="btn small" data-act="discuss" data-qid="' + q.id + '">Açıklamayı iste</button></article>';
    }).join("");
    return '<header class="page-head"><p class="eyebrow">Yanlışlar</p><h1>' + store.wrongIds.length + ' soru açıkta.</h1></header><div class="row"><button class="btn primary" data-act="start" data-mode="wrongs">Hepsini çöz</button></div><div class="review-list">' + cards + "</div>";
  }

  function viewLessons() {
    const cards = Data.TOPIC_ORDER.map(function (id) {
      const topic = Data.TOPICS[id];
      const count = Data.LESSONS[id].sections.length;
      return '<button class="topic-card" data-act="lesson" data-topic="' + id + '" data-section="' + Data.LESSONS[id].sections[0].id + '"><span class="pill ' + topic.tone + '">' + count + ' bölüm</span><h2>' + esc(topic.label) + "</h2><p>" + esc(topic.blurb) + "</p></button>";
    }).join("");
    return '<header class="page-head"><p class="eyebrow">Konu anlatımı</p><h1>Kısa, sınav ağzıyla.</h1><p class="lede">Her bölümün sonunda tuzak cümlesi var. Koç da aynı metinlere bakarak cevap verir.</p></header><div class="topic-grid">' + cards + "</div>";
  }

  function viewLesson() {
    const lesson = Data.LESSONS[ui.lessonTopic];
    const topic = Data.TOPICS[ui.lessonTopic];
    const sections = lesson.sections.map(function (section) {
      const open = ui.lessonSection === section.id ? " id=\"bolum\"" : "";
      const gallery = (section.gallery || []).map(function (sign) {
        return '<div class="sign">' + signSvg(sign.shape) + "<b>" + esc(sign.name) + "</b><span>" + esc(sign.note) + "</span></div>";
      }).join("");
      const table = section.table
        ? "<table><caption>" + esc(section.table.caption) + "</caption><thead><tr>" + section.table.headers.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
          section.table.rows.map(function (row) { return "<tr>" + row.map(function (cell) { return "<td>" + esc(cell) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>"
        : "";
      const paras = section.body.split("\n\n").map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
      return '<section class="section"' + open + "><h3>" + esc(section.title) + "</h3>" + paras + table +
        (gallery ? '<div class="signs">' + gallery + "</div>" : "") +
        (section.callout ? '<div class="callout">' + esc(section.callout) + "</div>" : "") +
        '<div class="row"><button class="btn small" data-act="start" data-mode="topic" data-topic="' + ui.lessonTopic + '" data-section="' + section.id + '" data-count="8">Bu başlıktan 8 soru</button></div></section>';
    }).join("");
    const jumps = lesson.sections.map(function (section) {
      return '<button class="btn small ghost" data-act="lesson" data-topic="' + ui.lessonTopic + '" data-section="' + section.id + '">' + esc(section.title) + "</button>";
    }).join("");
    return '<header class="page-head"><p class="eyebrow">' + esc(topic.label) + '</p><div class="lesson"><h2>' + esc(lesson.title) + "</h2></div></header><div class=\"chips\">" + jumps + "</div>" + sections;
  }

  function viewCoach() {
    const store = load();
    const bubbles = store.chat.length
      ? store.chat.map(function (msg, index) {
        const actions = (msg.actions || []).map(function (action, actionIndex) {
          return '<button class="btn small" data-act="chat-action" data-msg="' + index + '" data-action="' + actionIndex + '">' + esc(action.label) + "</button>";
        }).join("");
        return '<div class="bubble ' + (msg.role === "user" ? "user" : "bot") + '">' + rich(msg.text) + (actions ? '<div class="chips">' + actions + "</div>" : "") + "</div>";
      }).join("")
      : '<div class="bubble bot">Ben Koç. Çözdüğün sorulara ve buradaki konu anlatımına bakarım. Serbest gezen bir sohbet değilim; uydurmamak için müfredatın dışına çıkmam.\n\nSor: takip mesafesi, turnike, yağ lambası, feragat. Ya da “nerem zayıf?” de.</div>';
    const chips = ["Nerem zayıf?", "Hız sınırları", "Turnike nedir?", "Kaç doğruyla geçilir?", "Yanlışlarım"].map(function (chip) {
      return '<button class="btn small ghost" data-act="chip" data-text="' + esc(chip) + '">' + esc(chip) + "</button>";
    }).join("");
    return '<header class="page-head"><p class="eyebrow">Koç</p><h1>Soru sor.</h1></header><div class="chat" id="chat">' + bubbles + '</div><div class="chips">' + chips + '</div><form class="composer" id="chat-form"><input name="q" id="chat-input" autocomplete="off" placeholder="Örneğin: ABS ne işe yarar?" /><button class="btn primary" type="submit">Gönder</button></form>';
  }

  function paint() {
    let body = "";
    if (!Data || !Data.questions.length) {
      root.innerHTML = "<p>Soru bankası yüklenemedi.</p>";
      return;
    }
    if (ui.view === "home") body = viewHome();
    else if (ui.view === "exam") body = viewExam();
    else if (ui.view === "practice") body = viewPractice();
    else if (ui.view === "quiz" && quiz) body = viewQuiz();
    else if (ui.view === "result") body = viewResult();
    else if (ui.view === "wrongs") body = viewWrongs();
    else if (ui.view === "lessons") body = viewLessons();
    else if (ui.view === "lesson") body = viewLesson();
    else if (ui.view === "coach") body = viewCoach();
    else body = viewHome();
    const active = ui.view === "lesson" ? "lessons" : ui.view === "result" ? "home" : ui.view === "quiz" ? (quiz && quiz.mode === "exam" ? "exam" : "practice") : ui.view;
    root.innerHTML = shell(active, body);
    const chat = document.getElementById("chat");
    if (chat) chat.scrollTop = chat.scrollHeight;
    const input = document.getElementById("chat-input");
    if (input && ui.view === "coach") input.focus();
    const bolum = document.getElementById("bolum");
    if (bolum) bolum.scrollIntoView({ block: "start" });
    if (quiz && quiz.endsAt && ui.view === "quiz") startTimer();
  }

  async function leaveQuiz(next) {
    if (!quiz) {
      ui.view = next;
      paint();
      return;
    }
    const ok = await ask("Oturum duraklayacak. Ana sayfadan devam edebilirsin.");
    if (!ok) return;
    saveSession();
    stopTimer();
    quiz = null;
    ui.view = next;
    paint();
  }

  function pushChat(role, payload) {
    const store = load();
    store.chat.push({
      role: role,
      text: payload.text || payload,
      actions: payload.actions || [],
      at: Date.now(),
    });
    store.chat = store.chat.slice(-40);
    save(store);
  }

  function sendChat(text) {
    const clean = String(text || "").trim();
    if (!clean) return;
    pushChat("user", { text: clean });
    const store = load();
    const answer = Coach.reply(clean, { data: Data, log: store.log, wrongIds: store.wrongIds });
    pushChat("assistant", answer);
    ui.view = "coach";
    paint();
  }

  function runAction(action) {
    if (!action) return;
    if (action.act === "lesson") {
      ui.lessonTopic = action.topic;
      ui.lessonSection = action.section;
      ui.view = "lesson";
      paint();
      return;
    }
    if (action.act === "quiz") {
      startQuiz({
        mode: action.mode,
        topic: action.topic,
        section: action.section,
        count: Number(action.count || 10),
      });
    }
  }

  async function onClick(event) {
    const el = event.target.closest("[data-act]");
    if (!el || (ui.modal && el.dataset.act !== "modal-yes" && el.dataset.act !== "modal-no")) return;
    const act = el.dataset.act;
    if (act === "modal-yes") return closeModal(true);
    if (act === "modal-no") return closeModal(false);
    if (act === "nav") {
      const view = el.dataset.view;
      if (quiz && view !== "quiz") return leaveQuiz(view);
      stopTimer();
      ui.view = view;
      paint();
      return;
    }
    if (act === "start") {
      startQuiz({
        mode: el.dataset.mode,
        topic: el.dataset.topic || null,
        section: el.dataset.section || null,
        count: Number(el.dataset.count || 10),
      });
      return;
    }
    if (act === "resume") return resumeQuiz();
    if (act === "daily") { ui.dailyOpen = true; paint(); return; }
    if (act === "toggle-correct") { ui.showCorrect = !ui.showCorrect; paint(); return; }
    if (act === "open-result") { ui.resultId = el.dataset.id; ui.view = "result"; ui.showCorrect = false; paint(); return; }
    if (act === "reset") {
      const ok = await ask("Çözüm geçmişin, yanlış listen ve koç sohbetin silinecek.");
      if (!ok) return;
      localStorage.removeItem(STORAGE_KEY);
      paint();
      return;
    }
    if (act === "lesson") {
      if (quiz) {
        const ok = await ask("Oturum duraklayacak. Ana sayfadan devam edebilirsin.");
        if (!ok) return;
        saveSession();
        stopTimer();
        quiz = null;
      }
      ui.lessonTopic = el.dataset.topic;
      ui.lessonSection = el.dataset.section;
      ui.view = "lesson";
      paint();
      return;
    }
    if (act === "discuss") {
      const q = Data.byId[el.dataset.qid];
      if (!q) return;
      if (quiz) {
        const ok = await ask("Soruyu koça götürmek için oturumu duraklatacağım.");
        if (!ok) return;
        saveSession();
        stopTimer();
        quiz = null;
      }
      pushChat("user", { text: q.q });
      pushChat("assistant", Coach.explainQuestion(q));
      ui.view = "coach";
      paint();
      return;
    }
    if (act === "chip") return sendChat(el.dataset.text);
    if (act === "chat-action") {
      const store = load();
      const msg = store.chat[Number(el.dataset.msg)];
      const action = msg && msg.actions[Number(el.dataset.action)];
      runAction(action);
      return;
    }
    if (!quiz) return;
    if (act === "pick") {
      const q = quiz.items[quiz.index];
      if (quiz.revealed[q.id]) return;
      quiz.picks[q.id] = Number(el.dataset.choice);
      if (quiz.mode !== "exam") quiz.revealed[q.id] = true;
      saveSession();
      paint();
      return;
    }
    if (act === "jump") { quiz.index = Number(el.dataset.index); saveSession(); paint(); return; }
    if (act === "prev") {
      if (quiz.index > 0) quiz.index -= 1;
      saveSession();
      paint();
      return;
    }
    if (act === "next") {
      const q = quiz.items[quiz.index];
      if (quiz.mode !== "exam" && !quiz.revealed[q.id]) {
        if (quiz.picks[q.id] == null) return;
        quiz.revealed[q.id] = true;
        saveSession();
        paint();
        return;
      }
      if (quiz.index < quiz.items.length - 1) {
        quiz.index += 1;
        saveSession();
        paint();
      }
      return;
    }
    if (act === "finish") {
      const graded = Engine.grade(quiz.items, quiz.picks);
      const message = graded.blank
        ? graded.blank + " soru boş. Boşlar puan getirmez. Bitirilsin mi?"
        : "Oturum bitirilsin mi?";
      const ok = await ask(message, "Bitir");
      if (!ok) return;
      finishQuiz(false);
    }
  }

  function onKey(event) {
    if (ui.modal) {
      if (event.key === "Escape") closeModal(false);
      return;
    }
    if (ui.view !== "quiz" || !quiz) return;
    if (event.target && event.target.matches && event.target.matches("input, textarea")) return;
    const key = event.key.toLowerCase();
    const map = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      const q = quiz.items[quiz.index];
      if (!quiz.revealed[q.id]) {
        quiz.picks[q.id] = map[key];
        if (quiz.mode !== "exam") quiz.revealed[q.id] = true;
        saveSession();
        paint();
      }
      event.preventDefault();
      return;
    }
    if (event.key === "ArrowRight") {
      if (quiz.index < quiz.items.length - 1) {
        quiz.index += 1;
        saveSession();
        paint();
      }
    }
    if (event.key === "ArrowLeft" && quiz.index > 0) {
      quiz.index -= 1;
      saveSession();
      paint();
    }
  }

  function onSubmit(event) {
    const form = event.target.closest && event.target.closest("#chat-form");
    if (!form) return;
    event.preventDefault();
    const input = form.querySelector("input");
    const text = input.value;
    input.value = "";
    sendChat(text);
  }

  root.addEventListener("click", onClick);
  root.addEventListener("submit", onSubmit);
  document.addEventListener("keydown", onKey);
  paint();
})();
