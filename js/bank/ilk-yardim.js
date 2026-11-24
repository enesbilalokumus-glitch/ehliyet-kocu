(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "ilk_yardim";

  function q(id, tags, text, choices, a, exp) {
    list.push({
      id,
      topic,
      tags: Array.isArray(tags) ? tags : [tags],
      q: text,
      choices,
      a,
      exp,
    });
  }

  q(
    "IY01",
    "tanim",
    "İlk yardım için hangisi doğrudur?",
    [
      "Hastanede, ilaç ve tıbbi aletle yapılan tedavidir",
      "Yalnızca hekimin olay yerine gelmesiyle başlar",
      "Olay yerinde, eldeki imkânlarla ve ilaç kullanılmadan yapılır",
      "Tanı koyup ilaç yazmayı da kapsar",
    ],
    2,
    "İlk yardım; hasta veya yaralının durumu kötüleşmesin diye olay yerinde, elde bulunan malzemeyle ve ilaçsız yapılan müdahaledir. Amaç yaşatmak, kötüleşmeyi önlemek ve iyileşmeyi kolaylaştırmaktır. İlaç, serum, dikiş ve teşhis acil tedavinin işidir."
  );

  q(
    "IY02",
    "abc",
    "İlk yardımın ABC’sinde harfler neyi anlatır?",
    [
      "A hava yolu, B solunum, C dolaşım",
      "A ateş, B basınç, C cerrahi",
      "A ambulans, B bandaj, C cam",
      "A alçı, B burun, C çene",
    ],
    0,
    "ABC, kazazedeye bakış sırasıdır. A (airway) hava yolunun açık olması, B (breathing) solunumun varlığı, C (circulation) nabız ve kanama yani dolaşımdır. Önce hava yolu kapalıysa solunum da dolaşım da işe yaramaz."
  );

  q(
    "IY03",
    "olay",
    "Bir trafik kazasında ilk yardımın ilk adımı hangisidir?",
    [
      "Yaralıya hemen su içirmek",
      "Kendi güvenliğin ve olay yerinin güvenliği",
      "Kırıkları yerine oturtmak",
      "Araçları olay yerinden hemen uzaklaştırmak",
    ],
    1,
    "Müdahale eden de ikinci kazazede olmasın diye önce ortam güvenli mi bakılır: akan trafik, yangın, elektrik, devrilme riski. Sonra 112 aranır ve değerlendirme başlar. Su içirmek, kırığı çekmek ve aracı rastgele çekmek yararı değil zararı büyütür."
  );

  q(
    "IY04",
    "abc",
    "Yaşam bulgularından sayılmayan hangisidir?",
    [
      "Bilinç",
      "Solunum",
      "Saç ve göz rengi",
      "Dolaşım",
    ],
    2,
    "Yaşam bulguları bilinç, solunum, dolaşım (nabız), vücut ısısı ve kan basıncıdır. Saç ya da göz rengi kimliği tarif eder, yaşamsal durumu ölçmez. Sınavda liste sorularında konuya ait olmayan şıkkı ele."
  );

  q(
    "IY05",
    "abc",
    "Dinlenme halindeki sağlıklı bir yetişkinde dakikadaki solunum sayısı kabaca hangi aralıktadır?",
    [
      "4 ile 8",
      "12 ile 20",
      "40 ile 60",
      "80 ile 100",
    ],
    1,
    "Yetişkinde normal solunum dakikada yaklaşık 12-20’dir. Çok seyrek solunum ya da hiç olmaması acildir. Bebek ve çocukta sayı yetişkinden yüksektir; bu yüzden yetişkin rakamını çocuğa yapıştırma."
  );

  q(
    "IY06",
    "abc",
    "Yetişkinde nabız kontrolü için en uygun yer hangisidir?",
    [
      "Şah damarı (boyun, soluk borusunun yanı)",
      "Başparmak ucu",
      "Topuk",
      "Saç dipleri",
    ],
    0,
    "Yetişkinde nabız, gırtlağın yanında şah damarından (karotis) bakılır. Bebekte boyuna sert basmak tehlikeli olduğu için nabız kolun iç yüzünden, dirsek ile omuz arasından (brakiyal) alınır. Başparmakta kendi nabzın hissedilebileceği için kontrol parmağı olarak kullanılmaz."
  );

  q(
    "IY07",
    "abc",
    "Bebekte nabız nereye bakılarak kontrol edilir?",
    [
      "Ayak bileği",
      "Şah damarına sert bastırılarak",
      "Kolun iç yüzü, dirsek ile omuz arası",
      "Alın",
    ],
    2,
    "Bebekte nabız brakiyal arterden, yani kolun iç yüzünden bakılır. Boyundaki şah damarına yetişkindeki gibi bastırmak bebekte uygun değildir. Bu, sınavın sık ayırdığı bir farktır."
  );

  q(
    "IY08",
    "tyd",
    "Solunumu ve dolaşımı durmuş bir yetişkinde tek kurtarıcının uygulayacağı temel yaşam desteği ritmi hangisidir?",
    [
      "5 göğüs basısı, 1 solunum",
      "15 göğüs basısı, 5 solunum",
      "30 göğüs basısı, 2 solunum",
      "Yalnızca suni solunum, bası yok",
    ],
    2,
    "Tek kurtarıcı yetişkinde 30 göğüs basısından sonra 2 kurtarıcı solunum verir ve bunu kesmeden sürdürür. Bası hızı dakikada 100-120, derinlik yaklaşık 5-6 santimetredir. Sert ve düz zemin gerekir; yumuşak koltuk basıyı yer."
  );

  q(
    "IY09",
    "tyd",
    "Yetişkinde göğüs basısının hızı ne kadar olmalıdır?",
    [
      "Dakikada 100-120 bası",
      "Dakikada 40-50 bası",
      "On saniyede bir bası",
      "Nabız gelene kadar iki dakikada bir",
    ],
    0,
    "Güncel temel yaşam desteğinde göğüs basısı dakikada 100-120’dir. Daha yavaş bası organlara kanı yetiştirmez. Her basıdan sonra göğsün tamamen kalkmasına izin verilir, aralıksız ve mümkün olduğunca az kesintiyle devam edilir."
  );

  q(
    "IY10",
    "tyd",
    "Göğüs basısı nerede uygulanır?",
    [
      "Karnın ortasına",
      "Köprücük kemiğinin üstüne",
      "Göğüs kemiğinin alt yarısına, sert bir zeminde",
      "Sırtın tam ortasına",
    ],
    2,
    "Bası yeri göğüs kemiğinin alt yarısıdır. Kişi sert ve düz zeminde sırtüstü olmalıdır. Karna basmak, kaburga uçlarına vurmak veya yumuşak yatakta basmak hem etkisizdir hem zarar verir."
  );

  q(
    "IY11",
    "tikama",
    "Yemek yerken konuşamayan, öksüremeyen ve boynu tutarak moraran bir yetişkinde ne yapılır?",
    [
      "Sırtına sertçe vurulup su içirilir",
      "Kısmi tıkanma sayılır, sadece izlenir",
      "Heimlich manevrası uygulanır",
      "Ağzına parmak sokulup körlemesine aranır",
    ],
    2,
    "Konuşamama, öksürememe, sessiz boğulma ve morarma tam tıkanmadır. Yetişkinde göbek deliği ile göğüs kemiği arasına yumruk koyup içeri ve yukarı bastırarak Heimlich uygulanır. Kısmi tıkanmada kişi öksürebiliyorsa dokunulmaz, öksürmesi teşvik edilir. Körlemesine parmak, cismi daha derine iter."
  );

  q(
    "IY12",
    "tikama",
    "Solunum yolu kısmen tıkanmış, öksürüp konuşabilen kişide doğru davranış hangisidir?",
    [
      "Öksürmeye teşvik edilir, müdahale edilmez",
      "Hemen Heimlich uygulanır",
      "Sırtüstü yatırılıp suni solunum yapılır",
      "Ağzına yumrukla vurulur",
    ],
    0,
    "Öksürük ve konuşma varsa hava yolu tamamen kapanmamıştır. Öksürük, cismi çıkarmak için en iyi doğal yoldur. Bu sırada sırta rastgele vurmak veya Heimlich, kısmi tıkanmayı tam tıkanmaya çevirebilir."
  );

  q(
    "IY13",
    "tikama",
    "Solunum yolu tamamen tıkanan bir bebekte (bir yaşından küçük) doğru uygulama hangisidir?",
    [
      "Yetişkin gibi karından Heimlich",
      "Beş sırt vuruşu ve beş göğüs basısı",
      "Ayaklarından tutup sallamak",
      "Su içirerek yıkamak",
    ],
    1,
    "Bebeğin karın organları hassas olduğu için karından Heimlich yapılmaz. Yüzü aşağı bakacak şekilde beş kez sırta vurulur, sonra beş göğüs basısı yapılır; cisim çıkana veya bebek bilinç kaybedene kadar dönüşümlü sürdürülür. Bilinç kapanırsa temel yaşam desteğine geçilir."
  );

  q(
    "IY14",
    "kanama",
    "Atardamar kanamasını hangisi tarif eder?",
    [
      "Açık kırmızı kanın kalp ritmiyle fışkırması",
      "Koyu kırmızı kanın yavaş ve sürekli sızması",
      "Çizikten pembe sızıntı",
      "Morluk olup dışarı kan çıkmaması",
    ],
    0,
    "Atardamar kanı oksijenli olduğu için açık kırmızıdır ve kalbin her atımında fışkırır; bu yüzden en hızlı kan kaybıdır. Toplardamar kanı daha koyudur ve sürekli akar. Kılcal kanama sızma şeklindedir. Morluk ve şok, dışarı çıkmayan iç kanamayı düşündürür."
  );

  q(
    "IY15",
    "kanama",
    "Dış kanamada ilk ve en doğru uygulama hangisidir?",
    [
      "Yaraya turnike sarmak",
      "Kanayan yere doğrudan temiz bezle basınç uygulamak",
      "Yarayı çeşme altında ovuşturmak",
      "Kanayan uzva sıcak su dökmek",
    ],
    1,
    "Önce temiz bir bezle doğrudan basınç uygulanır. Bez ıslanırsa kaldırılmaz, üzerine ikinci bez konur; kaldırmak oluşan pıhtıyı bozar. Uzuv, kırık yoksa kalp seviyesinin üstüne alınır. Turnike ilk tercih değildir, basınçla durmayan hayati kanama ve uzuv kopmasında son çaredir."
  );

  q(
    "IY16",
    "kanama",
    "Turnike ile ilgili hangisi doğrudur?",
    [
      "Her burun kanamasında önce turnike yapılır",
      "İnce ip veya tel ile eklemin tam üzerine sıkılır",
      "Basınçla durmayan hayati kanama ve uzuv kopmasında, geniş malzemeyle son çare olarak uygulanır",
      "Kanayan yerin kalpten uzak tarafına bağlanır",
    ],
    2,
    "Turnike son çaredir. Geniş bir bez veya özel turnike, yara ile gövde arasında, eklemin üzerine gelmeyecek şekilde sıkılır. Uygulama saati yazılır. İnce ip ve tel dokuyu keser. Burun kanaması turnike işi değildir."
  );

  q(
    "IY17",
    "kanama",
    "Burun kanamasında doğru tutuş hangisidir?",
    [
      "Baş hafif öne eğilir, burun kanatları sıkılır",
      "Baş arkaya atılır ki kan yutulsun",
      "Kişi sırtüstü yatırılıp burna pamuk tıkaç derin itilir",
      "Baş aşağı sarkıtılır ve çırpılır",
    ],
    0,
    "Baş hafif öne alınır ve burun kanatlarına yaklaşık 5-10 dakika bastırılır. Başın arkaya atılması kanın yutağa kaçmasına, bulantıya ve asıl miktarın gizlenmesine yol açar. Çocuklarda bu tuzak çok sevilir: geriye atmak yanlıştır."
  );

  q(
    "IY18",
    "sok",
    "Şok, sınav diliyle en doğru nasıl tanımlanır?",
    [
      "Sadece korkup bayılmaktır",
      "Yaşamsal organlara yeterince kan gidememesidir",
      "Her zaman yüksek ateşle seyreder",
      "Yalnızca elektrik çarpmasında olur",
    ],
    1,
    "Şok bir dolaşım yetmezliğidir: beyin, kalp ve böbrek gibi organlar yeterince kan alamaz. Kanama, ağır yanık, alerji veya sıvı kaybı yol açabilir. Belirtiler hızlı ve zayıf nabız, soluk-soğuk-nemli deri, huzursuzluk ve hızlı solunumdur."
  );

  q(
    "IY19",
    "sok",
    "Omurga yaralanması şüphesi olmayan, bilinci açık bir şoklu kazazedeye hangi pozisyon uygundur?",
    [
      "Yüzüstü, eller başın altında",
      "Sırtüstü, bacaklar yaklaşık 30 cm yükseltilmiş",
      "Ayakta yürütülerek ısıtılır",
      "Başı dizlerin arasına eğik oturtulur",
    ],
    1,
    "Şok pozisyonunda kişi sırtüstü yatırılır, bacaklar yaklaşık 30 santimetre kaldırılarak kan hayati organlara yönlendirilir. Ağızdan yiyecek ve içecek verilmez. Kafa, omurga, göğüs veya bacak kırığı şüphesinde bacaklar kaldırılmaz; o zaman hareket ettirmeden beklenir."
  );

  q(
    "IY20",
    "sok",
    "Bilinci kapalı, solunumu olan ve omurga yaralanmasından şüphe edilmeyen kişi nasıl yatırılır?",
    [
      "Yan yatış (koma / kurtarıcı pozisyonu)",
      "Sırtüstü, başın altına iki yastık",
      "Dik oturur",
      "Yüzüstü, ağız yere kapalı",
    ],
    0,
    "Bilinci kapalı ama soluyan kişide dil ve kusmuk hava yolunu tıkayabilir. Omurga şüphesi yoksa yan yatırılır; bu pozisyona koma pozisyonu veya kurtarıcı pozisyonu denir. Sırtüstü bırakmak, kusmuğun akciğere kaçmasına yol açar."
  );

  q(
    "IY21",
    "sok",
    "Bayılan, kısa süre sonra kendine gelen bir kişide ilk uygun pozisyon hangisidir?",
    [
      "Ayağa kaldırıp yürütmek",
      "Sırtüstü yatırıp bacakları yükseltmek",
      "Yüzüne soğuk su çarpmak ve sarsmak",
      "Hemen acı yiyecek vermek",
    ],
    1,
    "Bayılma, beyne kısa süre az kan gitmesidir. Kişi sırtüstü yatırılır, bacaklar yükseltilir, sıkı giysiler gevşetilir, hava akışı sağlanır. Sarsmak, tokatlamak ve ayıltmak için bir şey yedirmek yanlıştır. Kendine gelmezse 112 ve ABC değerlendirmesi gerekir."
  );

  q(
    "IY22",
    "sok",
    "Sara (epilepsi) nöbetinde hangisi yapılır?",
    [
      "Çırpınmayı durdurmak için kol ve bacaklar sıkıca tutulur",
      "Ağız açılır, kaşık veya bez sokulur",
      "Çevre güvenli hale getirilir, ağıza bir şey sokulmaz, nöbet bitince yan yatırılır",
      "Üzerine su dökülüp ayıltılır",
    ],
    2,
    "Nöbet sırasında kişi zapt edilmez; çevredeki sert eşya uzaklaştırılır, başın altına yumuşak bir şey konabilir. Ağıza kaşık, bez veya parmak sokmak diş kırar ve parmağı ısırır. Nöbet bitince solunumu kontrol edilir, kusmaya karşı yan yatırılır ve süre uzunsa 112 aranır."
  );

  q(
    "IY23",
    "yaralanma",
    "Kırık şüphesinde doğru uygulama hangisidir?",
    [
      "Kemik ucu içeri itilir ve yerine oturtulur",
      "Kırık bölge, altındaki ve üstündeki eklemlerle birlikte tespit edilir",
      "Kişi yürütülerek ısınması sağlanır",
      "Şişsin diye sıcak su torbası konur",
    ],
    1,
    "Kırığı yerine oturtmaya çalışmak damar ve siniri keser. Bölge hareket ettirilmez; tespit, kırığın bir alt ve bir üst eklemini de içine alacak şekilde yapılır. Açık kırıkta yara temiz bir bezle örtülür, çıkan kemik içeri sokulmaz."
  );

  q(
    "IY24",
    "yaralanma",
    "Çıkık ile burkulmayı ayıran temel fark hangisidir?",
    [
      "Çıkık kemiktedir, burkulma damardadır",
      "Çıkıkta eklem yüzleri kalıcı ayrılır, burkulma eklem bağlarının zorlanmasıdır",
      "Burkulma yalnızca kafada olur",
      "İkisi de aynı şeydir, ikisine de sıcak uygulanır",
    ],
    1,
    "Kırık kemik bütünlüğünün bozulmasıdır. Çıkık, eklem yüzlerinin birbirinden ayrılmasıdır ve yerine oturtulmaz. Burkulma, eklemin zorlanıp bağların gerilmesidir. İlk saatlerde istirahat, soğuk, bandaj ve yükseltme uygulanır; ilk anda sıcak, şişi artırır."
  );

  q(
    "IY25",
    "yaralanma",
    "Vücuda saplanmış bir bıçak veya demir için doğru olan hangisidir?",
    [
      "Hemen çekilip yara sıkılır",
      "Cisim yerinde bırakılır, oynatmadan sabitlenir",
      "İçeri doğru biraz daha itilir",
      "Üzerine merhem sürülüp kapatılır",
    ],
    1,
    "Saplanan cisim, deliği tıkadığı için bir miktar kanamayı da tutuyor olabilir. Çıkarmak iç kanamayı açar. Cisim hareket etmeyecek şekilde çevresinden desteklenir ve 112 beklenir. Gözdeki yabancı cisimde de aynı kural geçerlidir: çıkarılmaz, ovuşturulmaz."
  );

  q(
    "IY26",
    "yaralanma",
    "Sıcak su yanığında ilk uygulama hangisidir?",
    [
      "Diş macunu, yoğurt veya salça sürmek",
      "Yanığı en az 15-20 dakika ılık akan suyun altında tutmak",
      "Su toplayan kabarcıkları patlatmak",
      "Yanan yere buz yapıştırmak",
    ],
    1,
    "Isıyı uzaklaştırmak için yanık ılık, mümkünse akan su altında 15-20 dakika tutulur. Diş macunu, yoğurt, yağ ve kolonya yarayı kirletir ve derinleştirir. Kabarcık derinin doğal örtüsüdür, patlatılmaz. Buz doğrudan cilde yapışır ve donuk ekler."
  );

  q(
    "IY27",
    "yaralanma",
    "Asit veya çamaşır suyu gibi kimyasal bir madde cilde dökülünce ne yapılır?",
    [
      "Sirke veya karbonatla nötralize edilir",
      "Bol suyla uzun süre yıkanır, nötralize etmeye çalışılmaz",
      "Madde bir bezle ovularak kurutulur",
      "Hemen sıkı bandajla kapatılır",
    ],
    1,
    "Kimyasal yanıkta madde bol suyla seyreltilip uzaklaştırılır. Üzerine başka kimyasal dökerek nötralize etmek ısı ve yeni yanık üretir. Toz kimyasalsa önce fırçalanıp sonra yıkanması, suyla tepkimeyi azaltır. Giysi yapışmışsa zorla soyulmaz."
  );

  q(
    "IY28",
    "yaralanma",
    "Elektrik çarpmasında ilk iş hangisidir?",
    [
      "Akımı kesmek, akım kesilmeden kazazedeye dokunmamak",
      "Islak elle tutup çekmek",
      "Hemen ağızdan şekerli su vermek",
      "Yaraya merhem sürüp yürütmek",
    ],
    0,
    "Akım kesilmeden dokunmak kurtarıcıyı da çarpar. Sigorta, şalter veya tahta saplı kuru bir malzeme ile kaynak ayrılır. Elektrik yanığında dışarıdaki küçük iz, içerideki kalp ve kas hasarını göstermeyebilir; bu yüzden 112 şarttır."
  );

  q(
    "IY29",
    "kanama",
    "İç kanamadan şüphelenilen, karnı hassas ve şok belirtileri olan kişiye ne verilir?",
    [
      "Bol su ve tuzlu ayran",
      "Ağrı kesici",
      "Ağızdan hiçbir şey verilmez",
      "Sıcak çorba",
    ],
    2,
    "İç kanamada kan dışarı çıkmaz ama şok gelişir: solukluk, susama, hızlı nabız, karında hassasiyet veya morluk. Ağızdan su, yiyecek ve ilaç verilmez; kusma ve ameliyat riskini artırır. Kişi hareket ettirilmez, ısıtılarak değil örtülerek bekletilir ve 112 aranır."
  );

  q(
    "IY30",
    "tasima",
    "Kazazedeyi olay yerinden taşımak ne zaman doğrudur?",
    [
      "Merak edenler rahat izlesin diye hemen",
      "Yangın, patlama, zehirli gaz veya akan trafik gibi hayati bir tehlike varsa",
      "Her kırıkta yürüyerek hastaneye gitsin diye",
      "Bilinci kapalı herkeste, omurga düşünülmeden",
    ],
    1,
    "Taşımak omurga ve kırıkları kötüleştirir. Kural, yerinde bırakıp 112’yi beklemektir. Taşıma ancak yangın, patlama, çökme, zehirli gaz veya kontrol edilemeyen trafik gibi ikinci bir ölüm riski varsa yapılır."
  );

  q(
    "IY31",
    "tasima",
    "Rentek manevrası ne işe yarar?",
    [
      "Kırık kemiği yerine oturtmaya",
      "Araç içindeki kazazedeyi omurga eksenini koruyarak çıkarmaya",
      "Turnikeyi gevşetmeye",
      "Bebekte Heimlich yerine",
    ],
    1,
    "Rentek, araçtaki yaralıyı baş-boyun-gövde hizasını bozmadan çıkarmak için öğretilen tek kişilik manevradır. Amaç omuriliği bükmemektir. Keyfi taşıma yöntemi değildir; yangın gibi bir tehlike veya zorunlu çıkarma varsa kullanılır."
  );

  q(
    "IY32",
    "tanim",
    "Kapalı garajda çalışan aracın egzozuna uzun süre maruz kalan kişide baş ağrısı ve uyku hali varsa akla hangisi gelir?",
    [
      "Karbonmonoksit zehirlenmesi",
      "Basit burun kanaması",
      "Sadece açlık",
      "Güneş çarpması",
    ],
    0,
    "Egzozdaki karbonmonoksit kokusuzdur, kana oksijenden daha sıkı bağlanır. Kapalı ortamda baş ağrısı, baş dönmesi, bulantı ve uyku hali zehirlenmedir. Kişi temiz havaya çıkarılır, kapalı yerde araç çalıştırılmaz ve 112 aranır. Bilinci kapalıysa ağızdan bir şey verilmez."
  );

  q(
    "IY33",
    "yaralanma",
    "Kopan bir parmak nasıl korunur?",
    [
      "Doğrudan buzun içine gömülür",
      "Temiz beze sarılır, poşete konur, bu poşet soğuk suyun içinde tutulur ve kişiyle birlikte hastaneye gider",
      "Sıcak suda bekletilir",
      "Yerine bantla yapıştırılır",
    ],
    1,
    "Kopan parça temiz, nemli bir beze sarılır ve su geçirmez poşete konur. Poşet, içinde su ve buz olan ikinci bir kaba yerleştirilir; parça doğrudan buza yapışmaz. Parça, kazazedeyle aynı araca gider. Köküne gelişigüzel yapıştırmak enfeksiyon ve doku kaybı yaratır."
  );

  q(
    "IY34",
    "sok",
    "Nefes darlığı çeken ve göğüs ağrısı olan bilinci açık kişiye şok pozisyonu yerine hangisi daha uygundur?",
    [
      "Yarı oturur pozisyon",
      "Yüzüstü yatış",
      "Ayakları 30 cm yukarıda düz yatış",
      "Baş aşağı sarkıtma",
    ],
    0,
    "Nefes darlığı ve kalple ilgili ağrıda düz yatırmak nefes almayı zorlaştırır. Kişi yarı oturur tutulur, sıkı kravat ve kemer gevşetilir. Bacakları kaldırılan şok pozisyonu, kafa-omurga yaralanması olmayan kanamalı şok içindir; herkese aynı pozisyon verilmez."
  );
})();
