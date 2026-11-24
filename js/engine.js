(function (root) {
  const PASS_CORRECT = 35;

  function shuffle(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function take(pool, count) {
    if (!count || count <= 0) return [];
    return shuffle(pool).slice(0, Math.min(count, pool.length));
  }

  function specFrom(data) {
    const spec = {};
    data.TOPIC_ORDER.forEach(function (id) {
      spec[id] = data.TOPICS[id].exam;
    });
    return spec;
  }

  function allocate(total, spec) {
    const keys = Object.keys(spec);
    const sum = keys.reduce(function (acc, key) {
      return acc + spec[key];
    }, 0);
    const rows = keys.map(function (key) {
      const exact = (spec[key] / sum) * total;
      return { key: key, floor: Math.floor(exact), frac: exact - Math.floor(exact) };
    });
    let used = rows.reduce(function (acc, row) {
      return acc + row.floor;
    }, 0);
    rows.sort(function (a, b) {
      return b.frac - a.frac;
    });
    let index = 0;
    while (used < total) {
      rows[index % rows.length].floor += 1;
      used += 1;
      index += 1;
    }
    const out = {};
    rows.forEach(function (row) {
      out[row.key] = row.floor;
    });
    return out;
  }

  function buildQuiz(all, opts) {
    const data = opts.data;
    const spec = specFrom(data);
    const mode = opts.mode;
    const count = opts.count || 10;

    if (mode === "exam") {
      const items = [];
      data.TOPIC_ORDER.forEach(function (topic) {
        items.push.apply(items, take(all.filter(function (q) { return q.topic === topic; }), spec[topic]));
      });
      return shuffle(items);
    }

    if (mode === "wrongs") {
      const ids = new Set(opts.wrongIds || []);
      return shuffle(all.filter(function (q) { return ids.has(q.id); }));
    }

    if (opts.topic && opts.section) {
      const primary = all.filter(function (q) {
        return q.topic === opts.topic && q.tags.indexOf(opts.section) !== -1;
      });
      const rest = all.filter(function (q) {
        return q.topic === opts.topic && q.tags.indexOf(opts.section) === -1;
      });
      const picked = take(primary, count);
      if (picked.length < count) {
        picked.push.apply(picked, take(rest, count - picked.length));
      }
      return shuffle(picked);
    }

    if (opts.topic) {
      return take(all.filter(function (q) { return q.topic === opts.topic; }), count);
    }

    const plan = allocate(count, spec);
    const mixed = [];
    Object.keys(plan).forEach(function (topic) {
      mixed.push.apply(mixed, take(all.filter(function (q) { return q.topic === topic; }), plan[topic]));
    });
    return shuffle(mixed);
  }

  function grade(items, picks) {
    const byTopic = {};
    const detail = [];
    let correct = 0;
    let wrong = 0;
    let blank = 0;

    items.forEach(function (q) {
      if (!byTopic[q.topic]) {
        byTopic[q.topic] = { asked: 0, correct: 0, wrong: 0, blank: 0 };
      }
      const bucket = byTopic[q.topic];
      bucket.asked += 1;
      const hasPick = picks && Object.prototype.hasOwnProperty.call(picks, q.id) && picks[q.id] !== null && picks[q.id] !== undefined;
      const chosen = hasPick ? picks[q.id] : null;
      const isBlank = chosen === null;
      const ok = !isBlank && chosen === q.a;
      if (isBlank) {
        blank += 1;
        bucket.blank += 1;
      } else if (ok) {
        correct += 1;
        bucket.correct += 1;
      } else {
        wrong += 1;
        bucket.wrong += 1;
      }
      detail.push({
        id: q.id,
        topic: q.topic,
        tags: q.tags,
        chosen: chosen,
        a: q.a,
        ok: ok,
        blank: isBlank,
      });
    });

    return {
      correct: correct,
      wrong: wrong,
      blank: blank,
      total: items.length,
      byTopic: byTopic,
      detail: detail,
    };
  }

  function fold(value) {
    return String(value || "")
      .toLocaleLowerCase("tr-TR")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function recommend(log, data) {
    const topics = {};
    data.TOPIC_ORDER.forEach(function (id) {
      topics[id] = { asked: 0, correct: 0, misses: {} };
    });
    log.slice(-300).forEach(function (row) {
      const bucket = topics[row.topic];
      if (!bucket || row.blank) return;
      bucket.asked += 1;
      if (row.ok) bucket.correct += 1;
      else {
        (row.tags || []).forEach(function (tag) {
          bucket.misses[tag] = (bucket.misses[tag] || 0) + 1;
        });
      }
    });

    const items = data.TOPIC_ORDER.map(function (id) {
      const bucket = topics[id];
      const acc = bucket.asked ? bucket.correct / bucket.asked : null;
      const gap = acc === null ? 0.45 : 1 - acc;
      const boost = bucket.asked < 4 ? 1.2 : 1;
      const weakSections = Object.keys(bucket.misses)
        .map(function (sec) { return { id: sec, n: bucket.misses[sec], title: data.sectionTitle(id, sec) }; })
        .sort(function (a, b) { return b.n - a.n; })
        .slice(0, 2);
      return {
        id: id,
        label: data.TOPICS[id].label,
        exam: data.TOPICS[id].exam,
        tone: data.TOPICS[id].tone,
        asked: bucket.asked,
        correct: bucket.correct,
        acc: acc,
        priority: data.TOPICS[id].exam * gap * boost,
        weakSections: weakSections,
      };
    }).sort(function (a, b) {
      return b.priority - a.priority;
    });

    const asked = items.reduce(function (sum, item) { return sum + item.asked; }, 0);
    const strong = items.every(function (item) { return item.asked >= 4 && item.acc >= 0.85; });
    let headline;
    if (!asked) {
      headline = "Henüz çözüm yok. On soruluk bir ısınma, nerede zorlandığını gösterir. Asıl puan trafikte: 23 soru.";
    } else if (strong) {
      headline = "Son çözümlerin rahat. Yine de sınavın yarısına yakını trafik ve çevre. Orayı soğutma.";
    } else {
      const top = items[0];
      const pct = top.acc === null ? 0 : Math.round(top.acc * 100);
      if (top.asked < 4) {
        headline = top.label + " az denendi. Sınavda bu dersten " + top.exam + " soru geliyor.";
      } else if (top.acc < 0.7) {
        headline = top.label + " %" + pct + ". Geçme çizgisinin altı. Önce burayı kapat.";
      } else {
        headline = top.label + " %" + pct + ". Geçer gibi ama payın dar. Bir tur daha at.";
      }
    }

    return { asked: asked, strong: strong, headline: headline, items: items };
  }

  function statusLabel(item) {
    if (item.asked < 4) return "Az denendi";
    if (item.acc >= 0.85) return "Rahat";
    if (item.acc >= 0.7) return "Sınırda";
    return "Açık var";
  }

  root.EhliyetEngine = {
    shuffle: shuffle,
    allocate: allocate,
    buildQuiz: buildQuiz,
    grade: grade,
    fold: fold,
    recommend: recommend,
    statusLabel: statusLabel,
    PASS_CORRECT: PASS_CORRECT,
  };
})(typeof window !== "undefined" ? window : globalThis);
