(function (root) {
  const engine = root.EhliyetEngine;

  function tokens(folded) {
    const stop = {
      bir: 1, ve: 1, ile: 1, icin: 1, bu: 1, su: 1, da: 1, de: 1, mi: 1, mu: 1,
      ne: 1, nasil: 1, nedir: 1, kadar: 1, olan: 1, olarak: 1, daha: 1, cok: 1,
      hangi: 1, hangisi: 1, neden: 1, niye: 1, bana: 1, benim: 1, var: 1, yok: 1,
      eder: 1, edilir: 1, ama: 1, veya: 1, gibi: 1, sonra: 1, once: 1, midir: 1,
      mudur: 1, neler: 1, anlat: 1, soyle: 1, kisa: 1, konu: 1, ders: 1, hakkinda: 1,
    };
    return folded.split(" ").filter(function (word) {
      return word.length > 2 && !stop[word];
    });
  }

  function scoreText(queryTokens, text) {
    const hay = engine.fold(text);
    const words = hay.split(" ");
    let score = 0;
    queryTokens.forEach(function (token) {
      if (hay.indexOf(token) !== -1) score += 2;
      else if (token.length >= 5) {
        const stem = token.slice(0, 5);
        if (words.some(function (word) { return word.indexOf(stem) === 0; })) score += 1;
      }
    });
    return score;
  }

  function clip(text, max) {
    if (text.length <= max) return text;
    const cut = text.slice(0, max);
    const last = cut.lastIndexOf(" ");
    return (last > 200 ? cut.slice(0, last) : cut) + "…";
  }

  function detectTopic(folded) {
    if (/adab|adap|feragat|empati|digerkam|hosgor/.test(folded)) return "adap";
    if (/ilk yardim|ilkyardim|heimlich|turnike|kanama|kirik|yanik|suni solunum/.test(folded)) return "ilk_yardim";
    if (/motor|debiryaj|debriyaj|alternator|lastik|abs\b|hararet|yag lamb|diferansiyel|antifriz/.test(folded)) return "motor";
    if (/trafik|kavsak|levha|hiz sin|otoyol|takip mesafe|alkol|promil|sollama/.test(folded)) return "trafik";
    return null;
  }

  function lessonActions(topic, section) {
    return [{ label: "Anlatımı aç", act: "lesson", topic: topic, section: section }];
  }

  function overview(topic, ctx) {
    const lesson = ctx.data.LESSONS[topic];
    const lines = lesson.sections.map(function (section) {
      return "• " + section.title;
    }).join("\n");
    return {
      text: lesson.title + " başlıkları:\n" + lines + "\n\nHangisini açayım? İstersen bu dersten 10 soru da çözebilirsin.",
      actions: [
        { label: lesson.title + " anlatımı", act: "lesson", topic: topic, section: lesson.sections[0].id },
        { label: "10 soru çöz", act: "quiz", mode: "topic", topic: topic, count: 10 },
      ],
    };
  }

  function analysis(ctx) {
    const rec = engine.recommend(ctx.log, ctx.data);
    if (!rec.asked) {
      return {
        text: "Henüz baktığım bir çözümün yok. On soruluk karışık bir ısınma açarsan, hangi derste açık olduğunu söyleyebilirim. İstersen doğrudan 50 soruluk denemeye de girebilirsin. Geçmek için 35 doğru, yani 70 puan gerekir.",
        actions: [
          { label: "10 soruluk ısınma", act: "quiz", mode: "mix", count: 10 },
          { label: "Deneme sınavı", act: "quiz", mode: "exam" },
        ],
      };
    }
    const lines = rec.items.map(function (item) {
      const pct = item.acc === null ? "—" : "%" + Math.round(item.acc * 100);
      const weak = item.weakSections.length
        ? " Kaçan başlık: " + item.weakSections.map(function (s) { return s.title; }).join(", ") + "."
        : "";
      return item.label + ": " + item.correct + "/" + item.asked + " (" + pct + ", sınavda " + item.exam + " soru)." + weak;
    }).join("\n");
    const top = rec.items[0];
    const actions = [
      { label: top.label + " sorusu çöz", act: "quiz", mode: "topic", topic: top.id, count: 10 },
    ];
    if (top.weakSections[0]) {
      actions.push({
        label: "“" + top.weakSections[0].title + "” anlat",
        act: "lesson",
        topic: top.id,
        section: top.weakSections[0].id,
      });
    }
    return { text: rec.headline + "\n\n" + lines, actions: actions };
  }

  function examInfo() {
    return {
      text: "e-Sınav 50 soru ve 45 dakikadır. Her doğru 2 puandır, yanlış doğruyu götürmez, boş da puan yazmaz. Geçmek için 35 doğru, yani 70 puan gerekir.\n\nDağılım: İlk Yardım 12, Trafik ve Çevre 23, Araç Tekniği 9, Trafik Adabı 6.\n\nEn çok puan trafiktedir. Adap az sorulur ama kısadır, boş bırakılacak ders değildir.",
      actions: [{ label: "Deneme gibi çöz", act: "quiz", mode: "exam" }],
    };
  }

  function wrongs(ctx) {
    const ids = ctx.wrongIds || [];
    if (!ids.length) {
      return {
        text: "Kayıtlı yanlışın yok. Ya henüz çözmedin ya da kaçırdıklarını sonradan doğru bildin. İstersen karışık bir tur açalım.",
        actions: [{ label: "Karışık 10 soru", act: "quiz", mode: "mix", count: 10 }],
      };
    }
    const sample = ids.slice(0, 3).map(function (id) {
      const q = ctx.data.byId[id];
      return q ? "• " + q.q : "";
    }).filter(Boolean).join("\n");
    return {
      text: "Açıkta " + ids.length + " yanlış var. Doğru bilince listeden düşer.\n" + sample,
      actions: [{ label: "Yanlışları çöz", act: "quiz", mode: "wrongs" }],
    };
  }

  function lessonReply(hit) {
    const body = clip(hit.sec.body, 700);
    const extra = hit.sec.callout ? "\n\nAklında kalsın: " + hit.sec.callout : "";
    return {
      text: hit.sec.title + "\n\n" + body + extra,
      actions: lessonActions(hit.topic, hit.sec.id).concat([
        { label: "Bu başlıktan soru", act: "quiz", mode: "topic", topic: hit.topic, section: hit.sec.id, count: 8 },
      ]),
    };
  }

  function questionReply(q) {
    return {
      text: "Bu, bankadaki bir soruyla aynı yere düşüyor.\n\n" + q.q + "\n\nDoğru cevap: " + q.choices[q.a] + "\n\n" + q.exp,
      actions: lessonActions(q.topic, q.tags[0]),
    };
  }

  function search(folded, ctx) {
    const queryTokens = tokens(folded);
    if (!queryTokens.length) return null;
    let bestLesson = null;
    let bestLessonScore = 0;
    ctx.data.TOPIC_ORDER.forEach(function (topic) {
      ctx.data.LESSONS[topic].sections.forEach(function (sec) {
        const blob = sec.title + " " + (sec.keywords || []).join(" ") + " " + sec.body + " " + (sec.callout || "");
        const score = scoreText(queryTokens, blob);
        if (score > bestLessonScore) {
          bestLessonScore = score;
          bestLesson = { topic: topic, sec: sec };
        }
      });
    });
    let bestQuestion = null;
    let bestQuestionScore = 0;
    ctx.data.questions.forEach(function (q) {
      const score = scoreText(queryTokens, q.q + " " + q.exp + " " + q.tags.join(" ") + " " + q.choices.join(" "));
      if (score > bestQuestionScore) {
        bestQuestionScore = score;
        bestQuestion = q;
      }
    });
    if (bestLessonScore < 2 && bestQuestionScore < 2) return null;
    if (bestLesson && bestLessonScore >= bestQuestionScore) return lessonReply(bestLesson);
    return questionReply(bestQuestion);
  }

  function reply(raw, ctx) {
    const text = String(raw || "").trim();
    if (!text) {
      return { text: "Bir şey yaz. Örneğin: turnike nedir, hız sınırları, nerem zayıf?" };
    }
    const folded = engine.fold(text);
    if (/^(merhaba|selam|hey|gunaydin)\b/.test(folded)) {
      const rec = engine.recommend(ctx.log, ctx.data);
      return {
        text: rec.asked
          ? "Buradayım. " + rec.headline
          : "Buradayım. Soru sorabilir, “nerem zayıf?” diyebilir veya küçük bir tur açabilirsin.",
        actions: rec.asked ? [] : [{ label: "10 soruluk ısınma", act: "quiz", mode: "mix", count: 10 }],
      };
    }
    if (/zayif|nerem|nereye calis|analiz|durumum|oneri|acigim|neye calis/.test(folded)) {
      return analysis(ctx);
    }
    if (/kac soru|gecme|baraj|kac dakika|kac puan|dagilim|kac dogru/.test(folded)) {
      return examInfo();
    }
    if (/yanlislarim|hatalarim|yanlislar/.test(folded)) {
      return wrongs(ctx);
    }
    if (/soru sor|test et|quiz/.test(folded)) {
      const rec = engine.recommend(ctx.log, ctx.data);
      const topic = rec.asked ? rec.items[0].id : null;
      return {
        text: topic
          ? "En açık dersin " + ctx.data.TOPICS[topic].label + ". Oradan kısa bir tur açıyorum, hazır olunca başlat."
          : "Karışık kısa bir tur iyi bir başlangıç.",
        actions: [
          topic
            ? { label: "Başlat", act: "quiz", mode: "topic", topic: topic, count: 8 }
            : { label: "Başlat", act: "quiz", mode: "mix", count: 8 },
        ],
      };
    }
    if (/^(ilk yardim|trafik|trafik ve cevre|arac teknigi|motor|trafik adabi|adap)$/.test(folded)) {
      return overview(detectTopic(folded), ctx);
    }
    const found = search(folded, ctx);
    if (found) return found;
    return {
      text: "Bunu müfredattaki bir başlığa net bağlayamadım. Şöyle sor: takip mesafesi, turnike, yağ lambası, feragat, hız sınırları, ABS. Çözdüğün sorulara bakmamı istersen “nerem zayıf?” de.",
    };
  }

  function explainQuestion(q) {
    return {
      text: q.q + "\n\nDoğru cevap: " + q.choices[q.a] + "\n\n" + q.exp,
      actions: lessonActions(q.topic, q.tags[0]).concat([
        { label: "Bu başlıktan soru çöz", act: "quiz", mode: "topic", topic: q.topic, section: q.tags[0], count: 8 },
      ]),
    };
  }

  root.EhliyetCoach = {
    reply: reply,
    explainQuestion: explainQuestion,
  };
})(typeof window !== "undefined" ? window : globalThis);
