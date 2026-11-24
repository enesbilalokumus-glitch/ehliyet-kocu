(function (root) {
  const questions = root.EHLIYET_QUESTIONS || [];

  const TOPIC_ORDER = ["ilk_yardim", "trafik", "motor", "adap"];

  const TOPICS = {
    ilk_yardim: {
      id: "ilk_yardim",
      label: "İlk Yardım",
      exam: 12,
      tone: "red",
      blurb: "İlaçsız müdahale, ABC, kanama, şok ve taşıma. Sınavın 12 sorusu.",
    },
    trafik: {
      id: "trafik",
      label: "Trafik ve Çevre",
      exam: 23,
      tone: "blue",
      blurb: "Hız, kavşak, levha, takip ve belge. Sınavın neredeyse yarısı.",
    },
    motor: {
      id: "motor",
      label: "Araç Tekniği",
      exam: 9,
      tone: "amber",
      blurb: "Motor, yağ, fren, lastik ve ikaz lambaları. 9 soru.",
    },
    adap: {
      id: "adap",
      label: "Trafik Adabı",
      exam: 6,
      tone: "green",
      blurb: "Saygı, feragat, empati, korna ve öfke. 6 soru, kolay puan.",
    },
  };

  const LESSONS = {
    ilk_yardim: {
      title: "İlk Yardım",
      sections: [
        {
          id: "tanim",
          title: "İlk yardım ne değildir?",
          keywords: ["ilaç", "acil tedavi", "tanı", "serum"],
          body: "İlk yardım, olay yerinde, eldeki malzemeyle ve ilaç kullanmadan yapılan müdahaledir. Amacı yaşatmak, durumun kötüleşmesini önlemek ve iyileşmeyi kolaylaştırmaktır.\n\nİlaç vermek, serum bağlamak, dikiş atmak ve teşhis koymak acil tedavidir. Onu sağlık personeli yapar. Soru “hangisi ilk yardımdır?” diyorsa ilaç geçen şıkkı ele.",
          callout: "İlaç geçen şık neredeyse her zaman yanlıştır.",
        },
        {
          id: "olay",
          title: "Olay yerinde sıra",
          keywords: ["112", "güvenlik", "kaza yeri"],
          body: "Önce kendi güvenliğin: akan trafik, yangın, elektrik, devrilme. Sonra 112. Ardından değerlendirme ve müdahale.\n\nYaralıya hemen su içirmek, kırığı çekmek veya aracı rastgele yoldan almak bu sıranın dışındadır. Kazazedeyi taşımak ancak yangın, patlama, zehirli gaz veya kontrol edilemeyen trafik gibi ikinci bir ölüm riski varsa doğrudur.",
          callout: "Önce sen güvende ol, sonra 112, sonra ABC.",
        },
        {
          id: "abc",
          title: "ABC ve yaşam bulguları",
          keywords: ["hava yolu", "solunum", "dolaşım", "nabız", "şah damarı", "brakiyal", "bilinç"],
          body: "A hava yolunun açık olması, B solunum, C dolaşımdır. Hava yolu kapalıysa gerisi işlemez. Bilinci açık insan konuşuyorsa hava yolu kabaca açıktır.\n\nYaşam bulguları: bilinç, solunum, dolaşım, vücut ısısı, kan basıncı. Saç rengi ve göz rengi bunlardan değildir.\n\nYetişkinde solunum dakikada yaklaşık 12-20, nabız yaklaşık 60-100’dür. Yetişkinde nabız boyundaki şah damarından bakılır. Bebekte boyuna sert basılmaz; nabız kolun iç yüzünden, dirsek ile omuz arasından alınır.",
          callout: "Yetişkin şah damarı, bebek kol içi.",
        },
        {
          id: "tyd",
          title: "Temel yaşam desteği",
          keywords: ["kalp masajı", "göğüs basısı", "30", "suni solunum", "sert zemin"],
          body: "Solunum ve dolaşım durmuşsa temel yaşam desteği başlar. Tek kurtarıcı yetişkinde 30 göğüs basısı, ardından 2 solunum uygular.\n\nBası dakikada 100-120, derinlik yaklaşık 5-6 santimetredir. Yer göğüs kemiğinin alt yarısıdır. Kişi sert ve düz zemindedir. Yumuşak koltuk basıyı yer. Her basıdan sonra göğsün kalkmasına izin verilir.",
          callout: "30’a 2. Yüz-yüz yirmi bası. Sert zemin.",
        },
        {
          id: "tikama",
          title: "Solunum yolu tıkanması",
          keywords: ["heimlich", "öksürük", "kısmi", "tam tıkanma", "bebek"],
          body: "Kişi öksürüp konuşabiliyorsa tıkanma kısmidir. Dokunulmaz, öksürmesi istenir. Sırta rastgele vurmak kısmi tıkanmayı tam tıkanmaya çevirebilir.\n\nKonuşamıyor, öksüremiyor, ses çıkaramıyor ve morarıyorsa tıkanma tamdır. Yetişkinde Heimlich uygulanır: yumruk göbek ile göğüs kemiği arasında, baskı içeri ve yukarı. Ağza körlemesine parmak sokulmaz.\n\nBir yaşından küçük bebekte karından bastırılmaz. Beş sırt vuruşu, beş göğüs basısı dönüşümlü yapılır.",
          callout: "Öksürüyorsa karışma. Öksüremiyorsa Heimlich. Bebekte karın yok.",
        },
        {
          id: "kanama",
          title: "Kanama ve turnike",
          keywords: ["atardamar", "toplardamar", "basınç", "burun", "turnike", "iç kanama"],
          body: "Atardamar kanı açık kırmızıdır ve kalp ritmiyle fışkırır. Toplardamar kanı daha koyudur, sürekli akar. Kılcal kanama sızar.\n\nÖnce temiz bezle doğrudan basınç. Bez ıslanırsa kaldırılmaz, üzerine yenisi konur. Kırık yoksa uzuv yukarı alınır.\n\nTurnike son çaredir: basınçla durmayan hayati kanama ve uzuv kopması. Geniş malzeme, yara ile gövde arasında, eklemin üzerine değil. Saat yazılır. İnce ip ve tel dokuyu keser. Burun kanamasında turnike yok; baş hafif öne eğilir, burun kanatları sıkılır. Başı geriye atmak kanı yutturur.\n\nİç kanamada dışarı kan görünmez; şok, susama, karında hassasiyet olabilir. Ağızdan su ve ilaç verilmez.",
          callout: "Önce basınç. Turnike en sonda. Burun kanamasında baş öne.",
        },
        {
          id: "sok",
          title: "Şok, bayılma, koma, sara",
          keywords: ["şok", "bayılma", "koma", "sara", "epilepsi", "pozisyon", "nefes darlığı"],
          body: "Şok, yaşamsal organlara yeterince kan gidememesidir. Hızlı ve zayıf nabız, soluk soğuk nemli deri, huzursuzluk görülür. Omurga ve bacak kırığı yoksa sırtüstü yatırılır, bacaklar yaklaşık 30 santimetre kaldırılır. Ağızdan bir şey verilmez.\n\nNefes darlığı ve göğüs ağrısında bacak kaldırmak yerine yarı oturur pozisyon daha uygundur.\n\nBayılan kişi sırtüstü yatırılır, bacakları yükseltilir. Sarsılmaz.\n\nBilinci kapalı ama soluyan, omurga şüphesi olmayan kişi yan yatırılır. Buna koma veya kurtarıcı pozisyonu denir. Amaç kusmuğun ve dilin hava yolunu kapatmamasıdır.\n\nSara nöbetinde kol bacak zapt edilmez, ağza kaşık sokulmaz. Çevre boşaltılır, nöbet bitince yan yatırılır.",
          callout: "Her bilinç kaybına aynı pozisyon verilmez.",
        },
        {
          id: "yaralanma",
          title: "Kırık, yanık, saplanan cisim",
          keywords: ["kırık", "çıkık", "burkulma", "yanık", "kimyasal", "elektrik", "kabarcık"],
          body: "Kırıkta kemik yerine oturtulmaz. Tespit, bir alt ve bir üst eklemi de içine alır. Açık kırıkta kemik içeri itilmez, yara örtülür.\n\nÇıkık eklemdedir, o da yerine oturtulmaz. Burkulma bağ zorlanmasıdır. İlk saatlerde soğuk uygulanır, sıcak şişi artırır. Buz doğrudan cilde yapışmaz.\n\nSaplanan bıçak veya demir çıkarılmaz, sabitlenir. Gözdeki cisim de çıkarılmaz, göz ovuşturulmaz.\n\nIsı yanığında 15-20 dakika ılık su. Diş macunu, yoğurt ve yağ yok. Kabarcık patlatılmaz.\n\nKimyasal yanıkta bol su. Sirke veya karbonatla nötralize etmek yoktur.\n\nElektrikte önce akım kesilir, kesilmeden dokunulmaz. Dışarıdaki küçük yanık içerdeki kalp hasarını göstermez.\n\nKopan parmak temiz beze, sonra poşete sarılır; poşet soğuk suyun içine konur, parça doğrudan buza gömülmez ve kişiyle birlikte gider.",
          callout: "Cismi çıkarma, kabarcığı patlatma, kemiği itme.",
        },
        {
          id: "tasima",
          title: "Taşıma ve Rentek",
          keywords: ["rentek", "taşıma", "omurga", "karbonmonoksit"],
          body: "Hayati bir ikinci tehlike yoksa kazazede yerinde bekler. Taşımak omurgayı ve kırığı bozar.\n\nRentek, araç içindeki yaralıyı baş-boyun-gövde hizasını bozmadan çıkarmak için kullanılan manevradır. Keyfi taşıma yöntemi değildir.\n\nKapalı garajda çalışan motorun egzozu karbonmonoksit biriktirir. Gaz kokusuzdur. Baş ağrısı, sersemlik ve uyku hali zehirlenmedir. Kişi temiz havaya çıkarılır, kapalı yerde araç çalıştırılmaz.",
          callout: "Yerinde bırak. Tehlike varsa ekseni bozmadan çıkar.",
        },
      ],
    },
    trafik: {
      title: "Trafik ve Çevre",
      sections: [
        {
          id: "oncelik",
          title: "Kimin sözü dinlenir?",
          keywords: ["polis", "ışık", "levha", "ambulans", "geçiş üstünlüğü", "siren"],
          body: "Öncelik sırası: trafik polisi, ışıklı işaret, levha, en sonda genel kural. Polis kırmızıda geç diyorsa geçilir, yeşilde dur diyorsa durulur.\n\nGeçiş üstünlüğü, can ve mal kurtaran veya suç takip eden görev araçlarınındır. Hem sesli hem ışıklı uyarı açıkken yol verilir. Yalnızca siren veya yalnızca tepe lambası bu hakkı tek başına anlatmaz. Cenaze konvoyu bu listenin otomatik üyesi değildir.\n\nAmbulansa yol vermek hem yasal zorunluluk hem trafik adabıdır.",
          callout: "Polis, ışık, levha, kural. Bu sırayı ters çeviren şık yanlıştır.",
        },
        {
          id: "hiz",
          title: "Hız sınırları",
          keywords: ["50", "90", "110", "otoyol", "130", "140", "römork"],
          body: "Aksi bir levha yoksa otomobil için yerleşim yeri içi 50, şehirlerarası iki yönlü yol 90, bölünmüş yol 110 km/saattir. Levha, genel sınırın önüne geçer.\n\nOtoyol ayrıdır. Yönetmelik metninde uzun süre 120 yazıyordu. 2022’den beri uygulamada Karayolları Genel Müdürlüğünün işlettiği otoyolda 130, yap-işlet-devret otoyollarında 140 km/saattir. Soru cümlesi hangi yolu kastettiğini söylemiyorsa 50-90-110 dışındaki şıkka acele etme.\n\nRömork takılıysa aynı yoldaki sınırdan 10 km/saat düşülür.",
          callout: "Ezber: 50, 90, 110. Römork varsa eksi 10.",
          table: {
            caption: "Otomobil, levha yokken",
            headers: ["Yol", "Azami hız"],
            rows: [
              ["Yerleşim yeri içi", "50 km/sa"],
              ["Şehirlerarası çift yönlü", "90 km/sa"],
              ["Bölünmüş yol", "110 km/sa"],
              ["Otoyol, KGM / yap-işlet-devret", "Uygulamada 130 / 140"],
            ],
          },
        },
        {
          id: "kavsak",
          title: "Kavşak ve geçiş",
          keywords: ["sağdan", "dönel", "ana yol", "tali yol", "yaya", "kırmızı ok", "yeşil"],
          body: "Polis, ışık ve levha yoksa, eşdeğer kavşakta sağdan gelene yol verilir. Hız ve araç büyüklüğü hak doğurmaz.\n\nAna yol, tali yola göre önceliklidir. Tali yol sağda diye ana yolu kesemez.\n\nDönel kavşakta, aksine işaret yoksa içeride dönen araç önceliklidir. Giren bekler.\n\nKırmızı ışıkta, yeşil ok veya polis izni yoksa sağa dönülmez. Yeşil ışık da yayayı silmez: dönüşte yaya geçidindeki yaya önceliklidir.\n\nHemzemin geçitte tren her zaman önceliklidir. Işık, zil veya inen bariyer varken geçilmez, bariyerin etrafından dolaşılmaz.",
          callout: "Önce kontrol var mı bak. Yoksa sağ. Dönel kavşakta içerdeki.",
        },
        {
          id: "levha",
          title: "Levha şekilleri ve ışıklar",
          keywords: ["üçgen", "sekizgen", "daire", "mavi", "dur", "yol ver", "sarı", "sinyal", "30", "150"],
          body: "Tehlike uyarısı kırmızı çerçeveli eşkenar üçgendir. DUR kırmızı sekizgendir ve tam duruş ister. Yol ver ters üçgendir. Yasaklar kırmızı çerçeveli dairedir. Zorunluluk mavi dairedir. Bilgi levhaları çoğunlukla mavi dikdörtgendir.\n\nYanıp sönen sarı: yavaşla, dikkatle geç. Yanıp sönen kırmızı: dur, yol uygunsa devam et.\n\nDönüş sinyali yerleşim yeri içinde en az 30 metre, dışında en az 150 metre önce verilir. Arıza üçgeni de aynı mesafelere, aracın gerisine konur.",
          callout: "Sarı yanıp sönerse dikkat. Kırmızı yanıp sönerse dur.",
          gallery: [
            { shape: "triangle", name: "Tehlike", note: "Üçgen" },
            { shape: "octagon", name: "Dur", note: "Sekizgen" },
            { shape: "yield", name: "Yol ver", note: "Ters üçgen" },
            { shape: "ban", name: "Yasak", note: "Kırmızı daire" },
            { shape: "must", name: "Zorunlu", note: "Mavi daire" },
            { shape: "info", name: "Bilgi", note: "Mavi dikdörtgen" },
          ],
        },
        {
          id: "sollama",
          title: "Şerit, sollama, takip",
          keywords: ["takip mesafesi", "soldan", "sağdan", "kesik çizgi", "devamlı çizgi"],
          body: "Trafik sağdan akar, sollama soldan yapılır. Sağdan sollamak yasaktır. Tepe üstü, dönemeç, kavşak, yaya ve okul geçidi, hemzemin geçit, köprü ve tünel yaklaşımında sollama yapılmaz.\n\nKesik çizgi şerit değiştirmeye elverişlidir. Devamlı çizgi terk edilmez. Çift devamlı çizgi geçilmez.\n\nTakip mesafesi, kuru havada saatteki hızın en az yarısı kadar metredir. 90 km/saat için 45 metre. Yağmur, sis ve yorgunlukta mesafe büyür.\n\nSinyal niyet bildirir, hak yaratmaz. Ayna ve ölü nokta kontrolünden sonra şerit değişilir.",
          callout: "Hızın yarısı metre. 80 km/saat ise en az 40 metre.",
        },
        {
          id: "park",
          title: "Durma, duraklama, park",
          keywords: ["durma", "duraklama", "park", "kaldırım", "yaya geçidi"],
          body: "Durma, ışık veya sıkışıklık gibi trafik zorunluluğuyla bekleyiştir. Duraklama, yolcu veya yük için, sürücü araç başındayken yapılan kısa bekleyiştir. Park, bunların dışında bekleyiş ve aracın terk edilmesidir.\n\nYaya geçidi, kavşak, dönemeç, tepe üstü, köprü, tünel, durak ve engelli rampasında park edilmez. Kaldırım yaya yeridir, araç yolu gibi kullanılmaz.",
          callout: "Işıkta beklemek park etmek değildir, durmadır.",
        },
        {
          id: "belge",
          title: "Alkol, belge, sigorta, muayene",
          keywords: ["promil", "0,50", "0,20", "kasko", "sigorta", "muayene", "kemer", "telefon", "ehliyet", "B sınıfı"],
          body: "Hususi otomobilde yasal alkol sınırı 0,50 promil, diğer araçlarda 0,20 promildir. Sınırın altı güvenli sürüş demek değildir.\n\nAraçta sürücü belgesi, tescil belgesi ve zorunlu trafik sigortası bulunur. Trafik sigortası karşı tarafa verilen zararı karşılar. Kendi aracının hasarı için kasko yapılır; kasko zorunlu değildir.\n\nHususi otomobilde ilk muayene üçüncü yılın sonundadır, sonrası iki yılda birdir. Ticari araçta periyot daha sıktır.\n\nKemer, kullanılan her koltukta zorunludur. Boyu 150 santimetreden kısa ve 36 kilogramdan hafif çocuk, çocuk bağlama sistemiyle taşınır. Hava yastıklı ön koltuğa ters bebek koltuğu bağlanmaz.\n\nSeyir halinde telefon elde tutulmaz.\n\nB sınıfı 18 yaşındadır: azami yüklü ağırlığı 3500 kilograma kadar otomobil ve kamyonet. A sınıfı motosiklet 24 yaş, ya da 20 yaş ve en az iki yıl A2 deneyimidir.",
          callout: "0,50 hususi. 0,20 ticari ve diğer. Kasko ile trafik sigortasını ters çevirme.",
        },
        {
          id: "otoyol",
          title: "Otoyol, okul taşıtı, kaza",
          keywords: ["emniyet şeridi", "traktör", "okul", "dur lambası", "üçgen", "kaza"],
          body: "Otoyola yaya, hayvan, bisiklet, motorlu bisiklet ve lastik tekerlekli traktör giremez.\n\nEmniyet şeridi normal seyir ve sollama şeridi değildir. Arıza, kaza ve geçiş üstünlüklü araçlar için boş durur.\n\nOkul taşıtı DUR yakınca o yöndeki araçlar durur, çocuk inip binmesi bitene kadar beklenir.\n\nArızada dörtlü yakılır, üçgen şehir içinde yaklaşık 30, dışında yaklaşık 150 metre geriye konur.\n\nYaralanmalı kazada durulur, yer güvenliğe alınır, 112 aranır, bilinen ilk yardım yapılır, olay yeri izinsiz terk edilmez.",
          callout: "Emniyet şeridi bir sollama kısayolu değildir.",
        },
        {
          id: "cevre",
          title: "Işık, korna, çevre",
          keywords: ["sis", "uzun far", "kısa far", "korna", "egzoz", "çöp"],
          body: "Siste uzun far geri yansır. Kısa far ve sis lambası kullanılır, sis bitince sis lambası kapatılır.\n\nKarşıdan gelen veya yakından takip edilen araç varken kısa fara geçilir. Israrcı selektör hem görüşü bozar hem adaba uymaz.\n\nKorna yakın bir tehlikeyi haber vermek içindir. Yerleşim yerinde gereksiz korna gürültüdür. Gece, şehir içinde mümkünse kısa selektör tercih edilir.\n\nYoğun egzoz, camdan atılan çöp, toprağa dökülen yağ ve saatlerce rölanti çevre sorusudur. Bakımlı motor daha az yakar.",
          callout: "Siste uzun far yok. Kornanın işi selamlaşmak değildir.",
        },
      ],
    },
    motor: {
      title: "Araç Tekniği",
      sections: [
        {
          id: "calisma",
          title: "Motor nasıl çalışır?",
          keywords: ["dört zaman", "emme", "sıkıştırma", "egzoz", "dizel", "buji", "kızdırma", "katalitik", "hava filtresi"],
          body: "Dört zamanlı motorda sıra emme, sıkıştırma, iş (ateşleme) ve egzozdur.\n\nBenzinli motorda karışımı buji ateşler. Dizelde buji yoktur; hava sıkışınca ısınır, yakıt bu sıcak havaya püskürtülünce tutuşur. Kızdırma bujisi kıvılcım üretmez, soğuk motorda ilk çalışmayı kolaylaştırmak için ortamı ısıtır.\n\nKirli hava filtresi motora giden havayı keser, çekiş düşer, yakıt artabilir.\n\nKatalitik konvertör egzozdaki zararlı gazları daha az zararlı hale getirmeye çalışır. Delik egzoz sesi büyütür ve gazı kabine kaçırabilir.",
          callout: "Sıra: emme, sıkıştırma, iş, egzoz. Dizelde ateşleme bujisi yok.",
        },
        {
          id: "yag",
          title: "Yağ, hararet, soğutma",
          keywords: ["yağ lambası", "hararet", "antifriz", "termostat", "radyatör"],
          body: "Motor yağı yağlar, ısının bir kısmını taşır, aşınmayı azaltır. Yakıtın yerine geçmez. Seviye, araç düz ve motor durmuşken yağ çubuğuyla bakılır.\n\nKırmızı yağ lambası basınç düştü demektir. Güvenli yerde durulur, motor kapatılır. Böyle giderse motor sıkışır.\n\nHararette de durulur. Sıcak radyatör kapağı açılmaz, kızgın motora buz gibi su boca edilmez.\n\nAntifriz yalnızca kışlık değildir: donmayı geciktirir, kaynamayı yükseltir, pası önler.\n\nTermostat, motor çalışma sıcaklığına gelene kadar suyun büyük devresini tutar, ısınınca radyatöre yol verir.",
          callout: "Yağ lambası veya hararet kırmızıya çıktıysa yoluna devam etmek yoktur.",
        },
        {
          id: "elektrik",
          title: "Akü, alternatör, marş",
          keywords: ["akü", "alternatör", "marş", "şarj", "kayış"],
          body: "Akü elektriği depolar. Marş motoru, motoru ilk çeviren elektrik motorudur; aracı yolda yürüten parça değildir. Motor çalışınca alternatör elektrik üretir ve aküyü doldurur.\n\nAkü lambası kontak açılınca yanar, motor çalışınca söner. Seyirde yanık kalırsa şarj yok demektir: çoğu zaman alternatör ya da kayışı.",
          callout: "Depolar akü. Üretir alternatör. İlk çeviren marş.",
        },
        {
          id: "aktarma",
          title: "Debriyaj, vites, diferansiyel",
          keywords: ["debriyaj", "vites", "diferansiyel", "motor freni"],
          body: "Debriyaj, motor ile vites kutusu arasındaki bağı geçici keser. Basılı tutulursa balata ısınır ve kaçırır: devir yükselir, araç hızlanmaz.\n\nVites kutusu çekiş ile hızı değiştirir. Düşük vites güçlü çeker. Uzun inişte düşük vites motor freni sağlar. Kontağı kapatıp boşa almak iniş yöntemi değildir; direksiyon ve fren desteği gider.\n\nDiferansiyel, virajda dış tekerleğin daha hızlı dönmesini sağlar. İki tekerlek aynı yolu çizmez.",
          callout: "Virajda diferansiyel. İnişte motor freni. Debriyaj ayak dayanağı değildir.",
        },
        {
          id: "fren",
          title: "Fren, ABS, lastik",
          keywords: ["abs", "hidrolik", "diş derinliği", "1,6", "balans", "rot", "amortisör", "hava yastığı"],
          body: "Hidrolik frende sıvı basıncı iletir. Sisteme hava girerse pedal sünger gibi dibe gider.\n\nABS, fren sırasında tekerleğin kilitlenmesini önler ki direksiyon hâlâ işlesin. Her zeminde mesafeyi yarıya indirme sözü değildir. ABS arızasında normal fren çoğu zaman durur ama kilitlenme koruması gider.\n\nYasal diş derinliği 1,6 milimetredir. Basınç düşükse lastik omuzdan aşınır ve yakıt artar. Basınç yüksekse orta sırt aşınır. Ölçüm lastik soğukken yapılır.\n\nBelirli hızda titreme balans bozukluğunu düşündürür. Araç bir yana çekiyor ve lastik tek omuzdan yiyorsa rot, yani ön düzen akla gelir. Amortisör, yayın salınımını söndürür; bitikse araç dalıp kalkar.\n\nHava yastığı kemerin yerine geçmez. İkisi birlikte çalışır.",
          callout: "ABS kilitlenmeyi önler. Diş tabanı 1,6 mm. Balans titretir, rot çeker.",
        },
        {
          id: "ikaz",
          title: "İkaz lambaları",
          keywords: ["kırmızı lamba", "sarı lamba", "yeşil", "gösterge"],
          body: "Kırmızı lamba hemen ilgilenilecek tehlikedir: yağ, hararet, şarj, fren. Güvenli yerde durup anlamadan yola devam edilmez.\n\nSarı veya turuncu lamba “sistemde arıza var, ilk fırsatta bak” der. Motor arıza ve ABS lambaları bu gruptadır.\n\nYeşil ve mavi daha çok far, sinyal gibi bilgilendirmedir. Kontak açılınca birçok kırmızı lamba kısa süre yanıp sönmesi, sistemin kendini yoklamasıdır. Motor çalışınca sönmeleri gerekir.",
          callout: "Kırmızı dur. Sarı bak. Yeşil bilgi.",
        },
      ],
    },
    adap: {
      title: "Trafik Adabı",
      sections: [
        {
          id: "fark",
          title: "Kural başka, adap başka",
          keywords: ["ceza", "yasal", "ahlak", "ambulans"],
          body: "Kural yaptırıma bağlıdır. Adap, ceza olmasa da başkasının hakkını ve huzurunu gözetmektir. Bir davranış ikisi birden olabilir.\n\n“Yalnızca ceza yememek için uyuyorum” cümlesi adabı anlatmaz. Denetim yokken de doğru davranmak istenir.\n\nAmbulansa yol vermek yalnızca nezaket değildir; sesli ve ışıklı uyarı açıkken yasal zorunluluktur. Adap da bunu destekler. Soru “sadece adap mıdır?” diyorsa cevap hayırdır.",
          callout: "Ceza korkusu adap değildir. Ambulans hem kural hem adaptır.",
        },
        {
          id: "deger",
          title: "Feragat, empati, sorumluluk",
          keywords: ["feragat", "empati", "diğerkâmlık", "sorumluluk", "saygı", "yardım"],
          body: "Feragat, geçiş hakkı sende olduğu halde o haktan vazgeçebilmektir. Sıkışan araca yol vermek klasik örnektir.\n\nEmpati, kendini yayanın veya yeni sürücünün yerine koymaktır. Diğerkâmlık, başkasının yararını kendi aceleciliğinin önüne almaktır.\n\nSorumluluk, hatanın sonucunda olay yerinde kalmak ve sonucu üstlenmektir. Feragat ile karıştırma: birinde vazgeçme, diğerinde üstlenme vardır.\n\nSaygı, sabır, hoşgörü, yardımlaşma da bu listededir. Üstünlük taslamak ve “yol benim” demek listede yoktur.\n\nYolda kalana yardım, üçgen ve güvenli cep ile yapılır. Yolun ortasında iyi niyet ikinci kaza üretir.",
          callout: "Hak sende, yine de bırakıyorsan feragat.",
        },
        {
          id: "iletisim",
          title: "Sinyal, korna, selektör",
          keywords: ["korna", "selektör", "sinyal", "iletişim", "otobüs"],
          body: "Trafikte iletişim büyük ölçüde sözsüzdür. Karşıdaki niyeti sinyalden, konumdan ve hızdan okur.\n\nSinyal bir haberdir, geçiş hakkı üretmez. Geç verilirse arkadaki mesafe hesabı şaşar.\n\nKorna selam, ritim veya ceza aracı değildir. Yakın tehlikede kısa çalınır. Yerleşim yerinde gereksiz korna gürültüdür.\n\nKısa selektör “buradayım” diyebilir. Uzun süre yakıp öndekini itmek göz alır ve öfke büyütür.\n\nDuraktan çıkan otobüse yer açmak hem akışı hızlandırır hem adaba uyar. Durağın önüne park etmek yolcuyu yola indirir.",
          callout: "Sinyal haber verir, hak vermez. Korna kısa ve gerekçelidir.",
        },
        {
          id: "ofke",
          title: "Öfke ve hoşgörü",
          keywords: ["öfke", "intikam", "hoşgörü", "sabır", "yaşlı", "engelli"],
          body: "Hatalı şerit değiştirene tampon dayamak, cam açıp bağırmak ve aynı hatayı iade etmek ikinci kazanın bahanesi olur. Doğru tutum mesafe açmak ve olayı büyütmemektir.\n\nHoşgörü, küçük kusuru kavga konusu yapmamaktır. Hız sınırını yok saymak hoşgörü değil ihlaldir.\n\nYaşlı, engelli, çocuk ve hamile yaya daha yavaştır. Onları korna ile acele ettirmek adabın sorulduğu olumsuz şıktır.",
          callout: "İntikam şeridi diye bir şerit yok.",
        },
      ],
    },
  };

  function sectionTitle(topicId, sectionId) {
    const lesson = LESSONS[topicId];
    if (!lesson) return sectionId;
    const found = lesson.sections.find(function (section) {
      return section.id === sectionId;
    });
    return found ? found.title : sectionId;
  }

  const byId = {};
  questions.forEach(function (question) {
    byId[question.id] = question;
  });

  root.EhliyetData = {
    questions: questions,
    byId: byId,
    TOPICS: TOPICS,
    TOPIC_ORDER: TOPIC_ORDER,
    LESSONS: LESSONS,
    sectionTitle: sectionTitle,
    PASS_CORRECT: 35,
    EXAM_MINUTES: 45,
    POINT: 2,
  };
})(typeof window !== "undefined" ? window : globalThis);
