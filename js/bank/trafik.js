(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "trafik";

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
    "TR01",
    "oncelik",
    "Kavşakta trafik polisi kırmızı ışık yanarken size geç işareti veriyorsa ne yaparsınız?",
    [
      "Işık kırmızı olduğu için beklerim",
      "Polisin işaretine uyarım",
      "Korna çalıp diğer sürücülere sorarım",
      "Levha yoksa sağdan gelene yol veririm",
    ],
    1,
    "Öncelik sırası nettir: trafik polisi, sonra ışıklı işaret, sonra levha, en sonda genel kural. Yetkili kişinin işareti kırmızı ışığın da levhanın da önündedir. Polis “geç” diyorsa ışık kırmızı olsa bile geçilir, “dur” diyorsa yeşil olsa bile durulur."
  );

  q(
    "TR02",
    "kavsak",
    "Işığı, polisi ve levhası olmayan, eşdeğer iki yolun kavşağında geçiş hakkı kimindir?",
    [
      "Daha hızlı gelenin",
      "Soldan yaklaşanın",
      "Sağdan yaklaşanın",
      "Büyük olan aracın",
    ],
    2,
    "Kontrolsüz ve eşdeğer kavşakta sağınızdaki araca yol verirsiniz. Bu kural ancak polis, ışık veya levha yoksa devreye girer. Hız, korna veya araç büyüklüğü hak doğurmaz."
  );

  q(
    "TR03",
    "kavsak",
    "Dönel kavşağa girerken, aksine bir işaret yoksa kime yol verirsiniz?",
    [
      "Arkadan gelen motosiklete",
      "Kavşak içinde seyreden araca",
      "Sadece kornayla uyaran araca",
      "Hiç kimseye, giren her zaman önceliklidir",
    ],
    1,
    "Dönel kavşakta içeride dönmekte olan araç önceliklidir. Giren sürücü hızını keser ve boşluğu bekler. “Ben sağdayım, herkes bana yol verir” düşüncesi dönel kavşakta çalışmaz."
  );

  q(
    "TR04",
    "kavsak",
    "Ana yoldan gelen sürücü ile tali yoldan gelen sürücüden hangisi önce geçer?",
    [
      "Tali yoldaki, çünkü sağdadır",
      "Ana yoldaki",
      "Hangisi korna çalarsa",
      "İkisi aynı anda",
    ],
    1,
    "Ana yol-tali yol ayrımı varken sağdan gelen kuralı tali yoldakine hak vermez. Tali yoldaki sürücü durur veya yol verir, ana yoldaki geçer. Önce levhayı oku, sonra genel kurala bak."
  );

  q(
    "TR05",
    "hiz",
    "Aksi bir levha yoksa otomobilin yerleşim yeri içindeki azami hızı kaç km/saattir?",
    [
      "30",
      "50",
      "70",
      "90",
    ],
    1,
    "Otomobil için temel basamaklar: yerleşim yeri içi 50, şehirlerarası çift yönlü yol 90, bölünmüş yol 110 km/saattir. Levha varsa levhadaki sayı genel kuralın önüne geçer. 30 çoğu zaman okul çevresi gibi özel bir levhadır, her yerleşim yerinin otomatik sınırı değildir."
  );

  q(
    "TR06",
    "hiz",
    "Şehirlerarası iki yönlü karayolda, aksi işaretlenmemişse otomobil azami kaç km/saat yapabilir?",
    [
      "50",
      "82",
      "90",
      "120",
    ],
    2,
    "Çift yönlü şehirlerarası yolda otomobil sınırı 90 km/saattir. 50 yerleşim yeridir, 110 bölünmüş yol, otoyol ise ayrı sınıftır. Soruda “iki yönlü” veya “çift yönlü” geçiyorsa 90’ı ara."
  );

  q(
    "TR07",
    "hiz",
    "Bölünmüş karayolda, aksi işaretlenmemişse otomobilin azami hızı kaç km/saattir?",
    [
      "90",
      "100",
      "110",
      "140",
    ],
    2,
    "Bölünmüş yolda otomobil azami hızı 110 km/saattir. Bölünmüş yol ile otoyol aynı şey değildir. Otoyolda 2022’den beri uygulamada KGM işletimindeki yollarda 130, yap-işlet-devret otoyollarında 140 km/saat vardır; eski metinlerde 120 de geçer. 50-90-110 üçlüsü tartışmasızdır."
  );

  q(
    "TR08",
    "hiz",
    "Römork takılmış bir otomobilin azami hızı, aynı yoldaki römorksuz otomobile göre nasıldır?",
    [
      "10 km/saat daha düşüktür",
      "10 km/saat daha yüksektir",
      "Aynıdır",
      "Yarıya iner",
    ],
    0,
    "Römorklu araç, aynı cinsteki römorksuz aracın o yoldaki azami hızından 10 km/saat daha yavaş gitmek zorundadır. Römork, fren mesafesini ve savrulmayı artırdığı için sınır düşürülür."
  );

  q(
    "TR09",
    "sollama",
    "90 km/saat hızla giden bir otomobilin kuru havada bırakması öğretilen asgari takip mesafesi kaç metredir?",
    [
      "20",
      "30",
      "45",
      "90",
    ],
    2,
    "Kurs formülü: takip mesafesi, saatteki hızın en az yarısı kadar metredir. 90’ın yarısı 45 metredir. Yağmur, sis, yük ve yorgunlukta bu mesafe yetmez, daha da açılır. “İki saniye kuralı” da aynı işi görür; sınav çoğu zaman hızın yarısını sorar."
  );

  q(
    "TR10",
    "sollama",
    "Taşıtlar hangi taraftan sollanır?",
    [
      "Sağdan",
      "Soldan",
      "Kaldırımdan",
      "Banketten",
    ],
    1,
    "Türkiye’de trafik sağdan akar, sollama soldan yapılır. Sağdan sollamak yasaktır. Öndeki araç sola dönüş için şeridin soluna çekilmişse ve sağda güvenli boşluk varsa sağından ilerlemek, klasik “sağdan sollama” yasağının istisnası olarak öğretilir; varsayılan cevap yine soldur."
  );

  q(
    "TR11",
    "sollama",
    "Aşağıdaki yerlerin hangisinde sollama yapmak yasaktır?",
    [
      "Görüşün yeterli olduğu düz ve uzun bir yolda",
      "Tepe üstü, dönemeç, yaya geçidi ve kavşağa yaklaşırken",
      "Gidişe ayrılmış iki şeritli açık yolda",
      "Öndeki araç size yol verdiğinde",
    ],
    1,
    "Görüşün kapandığı yerde karşıdan gelen görünmez. Tepe üstü, dönemeç, kavşak, yaya ve okul geçidi, hemzemin geçit, köprü ve tünel yaklaşımında sollama yasaktır. Sollamadan önce arkayı, karşıyı ve öndekinin sinyalini okumak gerekir."
  );

  q(
    "TR12",
    "sollama",
    "Şerit çizgisiyle ilgili hangisi doğrudur?",
    [
      "Kesik çizgi, şerit değiştirmeye izin verir",
      "Devamlı çizgi, istediğin zaman geçilir",
      "Çift devamlı çizgi yalnızca sollarken geçilir",
      "Çizgilerin rengi ne olursa olsun anlamı yoktur",
    ],
    0,
    "Kesik boyuna çizgi şerit değiştirmeye elverişlidir. Devamlı çizgi “bu çizgiyi terk etme” der. Aracınızın yanında devamlı, öteki yanda kesik çizgi varsa yalnızca kesik olan taraftaki sürücü şerit değiştirebilir. Çift devamlı çizgi geçilmez."
  );

  q(
    "TR13",
    "levha",
    "Tehlike uyarı işaretlerinin şekli hangisidir?",
    [
      "Kırmızı sekizgen",
      "Eşkenar üçgen",
      "Mavi daire",
      "Ters üçgen",
    ],
    1,
    "Tehlike uyarı levhaları kırmızı çerçeveli eşkenar üçgendir. Sekizgen yalnızca DUR’dur. Ters üçgen “yol ver”dir. Mavi daire emir ve zorunluluktur. Şekli görünce okumadan sınıfını tanıman sınavda zaman kazandırır."
  );

  q(
    "TR14",
    "levha",
    "DUR levhasının şekli hangisidir?",
    [
      "Sekizgen",
      "Daire",
      "Kare",
      "Eşkenar üçgen",
    ],
    0,
    "DUR, kırmızı sekizgendir ve tam duruş ister; sonra yol müsaitse kalkılır. “Yol ver” ise ters üçgendir, tam durmak şart olmayabilir ama geçen araca yol verilir. İkisini karıştırmak klasik tuzaktır."
  );

  q(
    "TR15",
    "levha",
    "Mavi zeminli daire şeklindeki levha ne bildirir?",
    [
      "Bir yasağı",
      "Bir tehlikeyi",
      "Uyman gereken bir zorunluluğu",
      "Otoyolun bittiğini",
    ],
    2,
    "Mavi daire emirdir: sağa dön, bisiklet yolu, zincir tak gibi. Yasaklar kırmızı çerçeveli dairedir; kırmızı çerçeve ve eğik kırmızı bant “bu yapılamaz” der. Tehlike üçgen, bilgi ise çoğunlukla mavi dikdörtgendir."
  );

  q(
    "TR16",
    "levha",
    "Sarı ışık yanıp sönen bir kavşakta ne yapılır?",
    [
      "Durup 112 beklenir",
      "Hızlanıp kavşak boşaltılır",
      "Yavaşlanır, dikkatle ve varsa yol ver levhasına uyarak geçilir",
      "Işık arızalı sayılır, kurallar askıya alınır",
    ],
    2,
    "Yanıp sönen sarı, “dikkat, kontrollü geç” demektir. Yanıp sönen kırmızı ise dur, yolu kontrol et, uygunsa geç demektir. İkisi birbirinin tersi gibi ezberlenir: sarı dikkat, kırmızı dur."
  );

  q(
    "TR17",
    "levha",
    "Kırmızı ışık yanarken yeşil ok yoksa sağa dönülebilir mi?",
    [
      "Korna çalarak dönülür",
      "Hayır, yeşil ok veya görevli izni yoksa dönülmez",
      "Yaya yoksa her zaman dönülür",
      "Yalnızca gece dönülür",
    ],
    1,
    "Türkiye’de kırmızı ışıkta sağa dönüş serbest değildir. Dönüş için yeşil ok yanmalı veya trafik polisi geç işareti vermelidir. “Amerika’da dönülüyor” bilgisi bu sınavda yanlış şıktır."
  );

  q(
    "TR18",
    "kavsak",
    "Yeşil ışıkta sağa dönerken yaya geçidinde yaya varsa ne yapılır?",
    [
      "Yayaya yol verilir",
      "Yaya ışığı senin yeşilinden sonra gelir",
      "Selektör yapıp geçilir",
      "Yaya kaldırıma çekilmek zorundadır",
    ],
    0,
    "Yeşil ışık, yayayı ve dönüş yönündeki diğer akışı yok sayma hakkı vermez. Dönüşte yaya geçidini kullanan yaya önceliklidir. Işık sana “güvenliyse ilerle” der, “herkese rağmen bas” demez."
  );

  q(
    "TR19",
    "park",
    "Trafik zorunluluğu yüzünden, örneğin kırmızı ışıkta beklemeye ne denir?",
    [
      "Durma",
      "Park etme",
      "Duraklama",
      "Terkiye",
    ],
    0,
    "Durma, trafik zorunluluğu veya işaret nedeniyle kısa süreli bekleyiştir; ışık, sıkışıklık, polisin dur işareti böyledir. Duraklama, yolcu indirip bindirmek veya yük alıp vermek için sürücünün araç başında olduğu kısa bekleyiştir. Park etme, bunların dışındaki bekleyiş ve aracın terk edilmesidir."
  );

  q(
    "TR20",
    "park",
    "Aşağıdaki yerlerin hangisinde park etmek yasaktır?",
    [
      "Park seridi çizilmiş uygun bir cepte",
      "Yaya geçidi, kavşak, dönemeç ve tepe üstünde",
      "Otopark levhası olan alanda",
      "Evinin garajında",
    ],
    1,
    "Görüşü kapatan ve yayayı gömen yerde park yasaktır: yaya geçidi, kavşak ve bağlantılarına yakın yer, dönemeç, tepe üstü, köprü, tünel, durak ve engelli rampası. Kaldırım da araç yolu değildir; kaldırıma çıkmak park çözümü sayılmaz."
  );

  q(
    "TR21",
    "belge",
    "Hususi otomobil sürücüsü için yasal alkol sınırı kaç promildir?",
    [
      "0,00",
      "0,20",
      "0,50",
      "1,00",
    ],
    2,
    "Hususi otomobilde yasal sınır 0,50 promildir. Ticari araç, resmi araç ve toplu taşıma gibi diğer sürücülerde sınır 0,20 promildir. Sınırın altı “güvenli içki” demek değildir; refleks yine körelir. Sınav iki sayıyı ayırt etmeni ister: 0,50 hususi, 0,20 diğer."
  );

  q(
    "TR22",
    "belge",
    "Taksi, kamyon veya otobüs kullanan sürücüde yasal alkol sınırı kaç promildir?",
    [
      "0,20",
      "0,50",
      "0,80",
      "1,50",
    ],
    0,
    "Hususi otomobil dışındaki araçlarda sınır 0,20 promildir. 0,50 yalnızca hususi otomobil içindir. “Ticari de 0,50’dir” şıkkı en sık işaretlenen yanlış cevaptır."
  );

  q(
    "TR23",
    "belge",
    "Zorunlu mali sorumluluk sigortası (trafik sigortası) neyi karşılar?",
    [
      "Sürücünün kendi aracının kaportasını",
      "Üçüncü kişilerin bedeni ve maddi zararını",
      "Aracın içindeki değerli eşyayı her koşulda",
      "Sadece lastik patlamasını",
    ],
    1,
    "Trafik sigortası zorunludur ve karşı tarafa verilen zararı karşılamak içindir. Kendi aracının hasarı için isteğe bağlı kasko yapılır. “Kasko zorunlu, trafik isteğe bağlı” diyen şık terse çevrilmiştir."
  );

  q(
    "TR24",
    "belge",
    "Hususi bir otomobilin ilk muayenesi, tescilden itibaren ne zaman yapılır ve sonrası nasıl devam eder?",
    [
      "Her yıl",
      "İlk muayene 3. yılın sonunda, sonrası 2 yılda bir",
      "10 yıl boyunca muayene yok",
      "Yalnızca kaza yapınca",
    ],
    1,
    "Hususi otomobiller tescilden sonra 3 yıl muayeneden muaftır, ilk muayene üçüncü yılın sonunda yapılır, ardından her iki yılda bir yenilenir. Ticari araçlarda periyot daha sıktır, genellikle yılda birdir. “Hepsi her yıl muayeneye girer” yanlıştır."
  );

  q(
    "TR25",
    "belge",
    "Araç kullanırken bulundurulması gereken belgelerden hangisi doğrudur?",
    [
      "Yalnızca kimlik kartı yeter",
      "Sürücü belgesi, tescil belgesi ve zorunlu trafik sigortası",
      "Sadece kasko poliçesi",
      "Noter satış sözleşmesi tek başına yeter",
    ],
    1,
    "Sürücü belgesi senin kullanma hakkını, tescil belgesi (ruhsat) aracın kime ait olduğunu, zorunlu mali sorumluluk sigortası üçüncü kişi güvencesini gösterir. Üçü birden gereklidir. Kasko bunların yerine geçmez."
  );

  q(
    "TR26",
    "otoyol",
    "Aşağıdakilerden hangisi otoyola giremez?",
    [
      "Otomobil",
      "Motosiklet (hız sınırı uygun olan)",
      "Lastik tekerlekli traktör",
      "Panelvan",
    ],
    2,
    "Otoyola yaya, hayvan, bisiklet, motorlu bisiklet ve lastik tekerlekli traktör giremez. İş makineleri izinsiz giremez. Bu araçlar hız farkı yüzünden otoyolda tehlike yaratır. Azami hız tablosunda da traktörün otoyol hanesi kapalıdır."
  );

  q(
    "TR27",
    "otoyol",
    "Otoyolda emniyet şeridi ne için kullanılır?",
    [
      "Hızlı araçların sollaması için",
      "Arıza, kaza ve geçiş üstünlüğü olan araçlar gibi zorunlu haller için",
      "Normal seyir için en rahat şerit diye",
      "Mola vermek için piknik alanı diye",
    ],
    1,
    "Emniyet şeridi sürekli gidilecek bir şerit değildir. Arıza, kaza, acil duruş ve geçiş üstünlüklü araçların ilerlemesi için boş tutulur. Oradan sollamak ve orada uyumak hem kural ihlalidir hem arkadan gelen için ölümcüldür."
  );

  q(
    "TR28",
    "otoyol",
    "Okul taşıtı DUR lambasını yakınca ne yapılır?",
    [
      "Hızlanıp çocuk inmeden geçilir",
      "Taşıtın durduğu yönde araçlar durur, çocukların iniş binişi bitene kadar beklenir",
      "Yalnızca korna çalınır",
      "Sadece yaya geçidi varsa durulur",
    ],
    1,
    "Okul taşıtının DUR işareti, çocuk iniyor veya biniyor demektir. O yöndeki sürücüler durur. Çocuk kapıdan iner inmez görünmez olabilir; ayna ve kapı kör noktası yüzünden “yol boş” sanıp geçmek klasik kazadır."
  );

  q(
    "TR29",
    "levha",
    "Yerleşim yeri dışında, dönüşten ne kadar önce sinyal verilmesi öğretilir?",
    [
      "Hemen dönüş anında",
      "En az 150 metre önce",
      "5 metre önce yeter",
      "Sinyal yalnızca şehir içinde zorunludur",
    ],
    1,
    "Dönüş ve şerit değiştirme sinyali, yerleşim yeri dışında en az 150 metre, yerleşim yeri içinde en az 30 metre önce verilir. Aynı 30 ve 150 rakamı, arıza üçgeninin konulacağı mesafe için de kullanılır: şehir içi 30, şehir dışı 150 metre geride."
  );

  q(
    "TR30",
    "otoyol",
    "Arızalanan araçta, yerleşim yeri içinde reflektör üçgen nereye konur?",
    [
      "Aracın içine, torpido üzerine",
      "Aracın yaklaşık 30 metre gerisine, diğer sürücülerin göreceği yere",
      "200 metre ileriye",
      "Yalnızca bagaj kapağına yapışık",
    ],
    1,
    "Üçgen, arkadan gelenin durmasına zaman bırakmalıdır. Yerleşim yeri içinde yaklaşık 30 metre, dışında yaklaşık 150 metre geriye konur. Aynı anda dörtlü flaşör yakılır. Üçgeni bagajda bırakmak, gece gelen sürücü için görünmez bir engel demektir."
  );

  q(
    "TR31",
    "cevre",
    "Sisli havada hangi aydınlatma doğrudur?",
    [
      "Uzun far, çünkü daha uzağı gösterir",
      "Kısa far ve varsa sis lambası; uzun far kullanılmaz",
      "Hiç ışık yakmamak",
      "Yalnızca tavan lambası",
    ],
    1,
    "Uzun far sisin içinde geri yansır ve senin görüşünü kapatır. Sisleyken kısa far ve sis lambası kullanılır. Sis kalkınca sis lambası kapatılır; açık unutulan arka sis lambası arkadaki sürücüyü kör eder."
  );

  q(
    "TR32",
    "cevre",
    "Karşıdan gelen araç varken uzun far için doğru olan hangisidir?",
    [
      "Karşıdaki selektör yapana kadar uzun far açık kalır",
      "Kısa fara geçilir ki karşı sürücü kör olmasın",
      "İki araç da dörtlü yakar",
      "Farlar tamamen kapatılır",
    ],
    1,
    "Karşılaşma ve bir aracı yakından takip etme anında kısa far kullanılır. Uzun far, karşıdakinin gece görüşünü sıfırlayıp kendi şeridinden çıkmasına yol açar. Uyarı gerekiyorsa kısa bir selektör yeter, sürekli yakmak hem kurala hem adaba aykırıdır."
  );

  q(
    "TR33",
    "belge",
    "Seyir halinde elde cep telefonu kullanmak neden yasaktır?",
    [
      "Sadece konuşma ücreti yüzünden",
      "Dikkati ve aracı tek elle kontrol etmeyi bozduğu için",
      "Yalnızca şehir dışında yasaktır",
      "Bluetooth da aynı şekilde yasaktır",
    ],
    1,
    "Telefonu elle tutmak hem dikkati böler hem direksiyon hâkimiyetini azaltır. Yasak seyir halindedir. Eller serbest sistemle konuşmak bu yasağın dışında tutulur. “Kısa mesaj bir saniye sürer” diye bakmak da aynı ihlaldir."
  );

  q(
    "TR34",
    "belge",
    "Emniyet kemeri ile ilgili hangisi doğrudur?",
    [
      "Yalnızca sürücü takar, arka koltuk serbesttir",
      "Şehir içinde 50 km/saatin altında zorunlu değildir",
      "Sürücü ve yolcular, oturdukları koltukta kemer bağlar",
      "Kısa yolda takılmaz",
    ],
    2,
    "Kemer sürücü dahil kullanılan her koltukta zorunludur. Hava yastığı kemerin yerine geçmez, kemerle birlikte çalışır. Çocuk, boy ve kilo ölçütüne göre koltukta kemerle değil çocuk bağlama sistemiyle oturur: kurs ölçütü boyu 150 santimetreden kısa ve ağırlığı 36 kilogramdan az olan çocuklardır."
  );

  q(
    "TR35",
    "otoyol",
    "Yaralanmalı bir trafik kazasında sürücünün ilk sorumlulukları hangisidir?",
    [
      "Olay yerini hemen terk edip sigortayı evden aramak",
      "Durmak, güvenliği sağlamak, 112’yi aramak ve ilk yardımı başlatmak",
      "Araçları fotoğraf için yolun ortasında bırakıp uzaklaşmak",
      "Kusuru yüksek sesle tartışmak",
    ],
    1,
    "Durmak zorundasın. Sonra dörtlü ve üçgenle arkadan geleni koru, yaralı varsa 112’yi ara, bildiğin ilk yardımı yap ve olay yerini izinsiz terk etme. Yalnızca maddi hasarda, tutanak tutulabiliyorsa araçlar güvenli yere alınabilir. Kaçmak suçu büyütür."
  );

  q(
    "TR36",
    "cevre",
    "Aşağıdakilerden hangisi hem trafik güvenliğini hem çevreyi bozar?",
    [
      "Düzenli bakım ve doğru lastik basıncı",
      "Egzozdan yoğun duman ve camdan çöp atmak",
      "Gereksiz rölantiyi kapatmak",
      "Katalitik konvertörün çalışır durumda olması",
    ],
    1,
    "Yanmamış egzoz ve yola savrulan çöp hem insan sağlığını hem yolu bozar. Yağ ve akünün toprağa dökülmesi, gereksiz korna ve saatlerce rölanti de çevre başlığının sorularıdır. Bakımlı motor daha az yakar ve daha az zehirler."
  );

  q(
    "TR37",
    "oncelik",
    "Geçiş üstünlüğü olan bir ambulansla ilgili hangisi doğrudur?",
    [
      "Yalnızca tepe lambası veya yalnızca siren yetmez; görev sırasında sesli ve ışıklı uyarı birlikte gerekir ve yol verilir",
      "Ambulans kırmızı ışıkta bekler, kimse yol vermez",
      "Sadece otoyolda yol verilir",
      "Geçiş üstünlüğü cenaze konvoyuna da her zaman aittir",
    ],
    0,
    "Can ve mal kurtarmaya giden, suç takip eden veya trafiği koruyan görev araçları, hem sesli hem ışıklı ihbarı açıkken geçiş üstünlüğüne sahiptir. Diğer sürücüler yolu açar. Sirensiz ve ışıksız bir araç bu hakkı kullanıyor sayılamaz. Cenaze konvoyu bu sınıfın otomatik üyesi değildir."
  );

  q(
    "TR38",
    "belge",
    "B sınıfı sürücü belgesiyle ilgili hangisi doğrudur?",
    [
      "18 yaşını dolduran, azami yüklü ağırlığı 3500 kg’ı geçmeyen otomobil ve kamyonet kullanabilir",
      "16 yaşında otobüs kullanma hakkıdır",
      "Yalnızca traktör içindir",
      "24 yaşından önce hiçbir aracı kapsamaz",
    ],
    0,
    "B sınıfı 18 yaşındadır. Otomobil ve kamyonet gibi azami yüklü ağırlığı 3500 kilograma kadar olan, sürücü dışında en çok 8 kişilik araçları kapsar. 750 kilograma kadar römork takılabilir. Traktör F, iş makinesi G sınıfıdır. A sınıfı motosiklet yaşı daha yüksektir: 24, ya da 20 yaş ve en az iki yıl A2."
  );

  q(
    "TR39",
    "levha",
    "Hemzemin geçitte kırmızı ışık yanıp zil çalıyorsa ne yapılır?",
    [
      "Bariyer inmeden hızlanıp geçilir",
      "Durulur, tren geçene ve işaret kapanana kadar beklenir",
      "Yalnızca vites boşa alınıp inilir",
      "Korna çalıp trene yol verdirilir",
    ],
    1,
    "Tren her zaman önceliklidir. Işık, zil veya inen bariyer varken geçilmez; bariyerin etrafından dolaşılmaz. Araç geçitte arızalanırsa herkes dışarı alınır, mümkünse araç itilir ve demiryolu görevlisine haber verilir."
  );

  q(
    "TR40",
    "park",
    "Yerleşim yeri içinde gereksiz yere korna çalmak neden yasaktır?",
    [
      "Aküyü boşalttığı için",
      "Gürültü rahatsızlığı yarattığı ve sahte bir alarm gibi dikkati dağıttığı için",
      "Yalnızca gece yasaktır, gündüz serbesttir",
      "Korna sadece otoyolda çalışır",
    ],
    1,
    "Korna bir selamlaşma aracı değildir; ani ve yakın bir tehlikeyi haber vermek içindir. Yerleşim yerinde gereksiz korna gürültü sayılır. Gece, şehir içinde korna yerine mümkünse kısa selektör tercih edilir. Israrcı korna hem çevre hem adap sorusudur."
  );
})();
