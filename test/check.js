const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const context = { console: console };
context.globalThis = context;
vm.createContext(context);

[
  "js/bank/ilk-yardim.js",
  "js/bank/ilk-yardim-2.js",
  "js/bank/trafik.js",
  "js/bank/trafik-2.js",
  "js/bank/motor.js",
  "js/bank/motor-2.js",
  "js/bank/adap.js",
  "js/bank/adap-2.js",
  "js/data.js",
  "js/engine.js",
  "js/coach.js",
].forEach(function (file) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
});

const data = context.EhliyetData;
const engine = context.EhliyetEngine;
const coach = context.EhliyetCoach;
const errors = [];

function fail(msg) { errors.push(msg); }

const ids = new Set();
const stems = new Set();
const counts = {};
data.questions.forEach(function (q) {
  if (ids.has(q.id)) fail("Tekrarlayan id: " + q.id);
  ids.add(q.id);
  if (stems.has(q.q)) fail("Tekrarlayan soru: " + q.id);
  stems.add(q.q);
  if (!data.TOPICS[q.topic]) fail("Konu yok: " + q.id);
  if (!Array.isArray(q.choices) || q.choices.length !== 4) fail("Şık sayısı: " + q.id);
  if (new Set(q.choices).size !== 4) fail("Aynı şık: " + q.id);
  if (q.a < 0 || q.a > 3) fail("Cevap aralığı: " + q.id);
  if (!q.exp || q.exp.length < 40) fail("Açıklama kısa: " + q.id);
  q.tags.forEach(function (tag) {
    const lesson = data.LESSONS[q.topic];
    if (!lesson.sections.some(function (s) { return s.id === tag; })) fail("Etiket yok " + q.id + " " + tag);
  });
  counts[q.topic] = (counts[q.topic] || 0) + 1;
});

data.TOPIC_ORDER.forEach(function (topic) {
  if ((counts[topic] || 0) < data.TOPICS[topic].exam) {
    fail("Sınav için soru yetmiyor: " + topic);
  }
});

const exam = engine.buildQuiz(data.questions, { data: data, mode: "exam" });
if (exam.length !== 50) fail("Deneme 50 değil: " + exam.length);
const examCounts = {};
exam.forEach(function (q) { examCounts[q.topic] = (examCounts[q.topic] || 0) + 1; });
data.TOPIC_ORDER.forEach(function (topic) {
  if (examCounts[topic] !== data.TOPICS[topic].exam) fail("Dağılım bozuk: " + topic + " " + examCounts[topic]);
});

const picks = {};
exam.forEach(function (q, i) { if (i % 2 === 0) picks[q.id] = q.a; });
const graded = engine.grade(exam, picks);
if (graded.correct + graded.wrong + graded.blank !== 50) fail("Puanlama toplamı bozuk");
if (graded.blank !== 25) fail("Boş sayısı bozuk: " + graded.blank);

const mixed = engine.buildQuiz(data.questions, { data: data, mode: "mix", count: 10 });
if (mixed.length !== 10) fail("Karışık 10 değil");

const empty = engine.recommend([], data);
if (!empty.headline) fail("Boş öneri yok");
const log = data.questions.filter(function (q) { return q.topic === "trafik"; }).slice(0, 8).map(function (q) {
  return { topic: q.topic, tags: q.tags, ok: false, blank: false };
});
const rec = engine.recommend(log, data);
if (rec.items[0].id !== "trafik") fail("Zayıf ders trafik çıkmadı: " + rec.items[0].id);

function must(query, needle) {
  const answer = coach.reply(query, { data: data, log: log, wrongIds: [] });
  if (engine.fold(answer.text).indexOf(engine.fold(needle)) === -1) {
    fail("Koç '" + query + "' içinde '" + needle + "' yok");
  }
}
must("takip mesafesi nedir", "yarısı");
must("turnike nedir", "son çare");
must("hız sınırları", "50");
must("feragat ne demek", "hak");
must("nerem zayıf", "Trafik");
must("kaç doğruyla geçilir", "35");

function answerIs(id, needle) {
  const q = data.byId[id];
  if (!q || q.choices[q.a].indexOf(needle) === -1) fail(id + " cevap anahtarı kaymış");
}
answerIs("IY08", "30");
answerIs("TR02", "Sağdan");
answerIs("TR05", "50");
answerIs("TR21", "0,50");
answerIs("MO01", "Emme");
answerIs("MO11", "vites kutusu");
answerIs("MO14", "kilitlenmesini");
answerIs("AD03", "Feragat");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Tamam. Soru: " + data.questions.length + " · deneme dağılımı doğru · koç cevap verdi.");
console.log(counts);
