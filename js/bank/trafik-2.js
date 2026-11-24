(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "trafik";

  function q(id, tags, text, choices, a, exp) {
    list.push({
      id: id,
      topic: topic,
      tags: Array.isArray(tags) ? tags : [tags],
      q: text,
      choices: choices,
      a: a,
      exp: exp,
    });
  }

  q("TR41", "hiz", "Minibüsün, aksi bir levha yokken şehirlerarası iki yönlü yoldaki azami hızı kaç km/saattir?", [
    "110",
    "80",
    "130",
    "50",
  ], 1, "Minibüs otomobil değildir. Şehirlerarası çift yönlü yolda 80, bölünmüş yolda 90, otoyolda 100 km/saattir. Yerleşim yeri içinde yine 50’dir. Soruda araç cinsi değişince tablo da değişir.");

  q("TR42", "hiz", "Motosikletin (L3) otoyoldaki azami hızı, aksi işaret yoksa kaç km/saattir?", [
    "140",
    "100",
    "80",
    "Otoyola giremez",
  ], 1, "L3 motosiklet otoyola girer ve azami hızı 100 km/saattir. Şehirlerarası çift yönlü yolda 80, bölünmüş yolda 90’dır. Motorlu bisiklet ise otoyola giremez; ikisini karıştırma.");

  q("TR43", "hiz", "Motorlu bisikletin yerleşim yeri içindeki azami hızı kaç km/saattir?", [
    "50",
    "30",
    "70",
    "90",
  ], 1, "Motorlu bisiklet yerleşim yerinde 30, dışında 45 km/saatle sınırlıdır. Otoyola giremez. 50, otomobil ve çoğu motorlu aracın yerleşim yeri sınırıdır.");

  q("TR44", "hiz", "Motorlu bisiklet otoyola girebilir mi?", [
    "Evet, 80 km/saatle",
    "Hayır, giremez",
    "Evet, sadece gündüz",
    "Evet, emniyet şeridinden",
  ], 1, "Otoyola yaya, bisiklet, motorlu bisiklet, hayvan ve lastik tekerlekli traktör giremez. Hız farkı bu araçları otoyolda görünmez bir engele çevirir.");

  q("TR45", "hiz", "Kamyonun otoyoldaki azami hızı, aksi işaret yoksa kaç km/saattir?", [
    "130",
    "90",
    "110",
    "140",
  ], 1, "Kamyon ve çekici otoyolda 90 km/saatle sınırlıdır. Otomobilin otoyol uygulaması bunun çok üstündedir. Araç cinsini okumadan 130 işaretlemek klasik hatadır.");

  q("TR46", "hiz", "Yolda 70 yazar bir hız levhası varken genel kural 90 ise hangisine uyulur?", [
    "Genel kural her zaman kazanır",
    "Levhadaki 70’e uyulur",
    "İkisinin ortası olan 80’e",
    "Sadece gece 70, gündüz 90",
  ], 1, "Levha, o kesim için konmuş özel karardır ve genel hız tablosunun önüne geçer. 70 görüyorsan 90’lık genel sınır seni kurtarmaz.");

  q("TR47", "sollama", "80 km/saat hızla giden bir aracın kuru havada bırakması öğretilen asgari takip mesafesi kaç metredir?", [
    "20",
    "40",
    "80",
    "160",
  ], 1, "Formül hızın yarısı kadar metredir. 80’in yarısı 40’tır. 90’da 45, 100’de 50 metre olur. Yağmur ve yorgunlukta bu taban yetmez, mesafe büyür.");

  q("TR48", "sollama", "Yağmurlu havada takip mesafesi kuru havaya göre nasıl olmalıdır?", [
    "Kısaltılmalıdır, çünkü herkes yavaşlar",
    "Artırılmalıdır",
    "Sıfıra inmelidir",
    "Değişmez, yağmur fren mesafesini etkilemez",
  ], 1, "Islak zeminde lastik tutunmaz, fren uzar. Hızın yarısı kuru hava için öğretilen tabandır. Yağmur, sis ve yük bu mesafeyi büyütür.");

  q("TR49", "hiz", "Hız iki katına çıkınca fren mesafesi kabaca ne olur?", [
    "Aynı kalır",
    "Yaklaşık dört katına çıkar",
    "Yarıya iner",
    "ABS varsa hiç değişmez",
  ], 1, "Fren mesafesi hızla düz orantılı değildir, hızın karesine yakın artar. 50 yerine 100 gitmek, durma mesafesini kabaca dört katına çıkarır. ABS bu fizik kuralını silmez.");

  q("TR50", "levha", "Kavşağa yaklaşırken sabit sarı ışık yandıysa ne yapılır?", [
    "Hızlanıp kavşağa dalınır",
    "Güvenle durabiliyorsan durursun, duramayacak kadar yaklaştıysan geçişi tamamlarsın",
    "Geri vitese takılır",
    "Korna çalıp geçilir",
  ], 1, "Sabit sarı, kırmızının habercisidir. Uzaktaysan dur. Çizgiye o kadar yakınsan ki sert fren arkadakini vurduracaksa geçişi bitir. Sarı, “gaza bas” demek değildir.");

  q("TR51", "levha", "Kırmızı ışık yanıp sönüyorsa ne yapılır?", [
    "Hiç durmadan dikkatle geçilir",
    "Durulur, yol kontrol edilir, uygunsa geçilir",
    "Sadece sola dönülür",
    "Polis gelene kadar araç terk edilir",
  ], 1, "Yanıp sönen kırmızı, dur işaretine benzer: önce dur, sonra uygunsa geç. Yanıp sönen sarı ise durmadan, dikkatle ve levhaya uyarak geçmektir. İkisini ters ezberleme.");

  q("TR52", "levha", "Yol ver levhasının şekli hangisidir?", [
    "Kırmızı sekizgen",
    "Ters üçgen",
    "Mavi daire",
    "Sarı baklava",
  ], 1, "Yol ver ters üçgendir. DUR ise sekizgendir ve tam duruş ister. Yol ver levhasında tam durmak her zaman şart olmayabilir ama geçen araca yol vermek şarttır.");

  q("TR53", "levha", "Yasaklama levhalarının genel şekli hangisidir?", [
    "Kırmızı çerçeveli eşkenar üçgen",
    "Kırmızı çerçeveli daire",
    "Mavi dikdörtgen",
    "Sarı baklava",
  ], 1, "Yasaklar dairededir ve kırmızı çerçeve “yapma” der. Üçgen tehlike, mavi daire emir, mavi dikdörtgen bilgidir. Sarı baklava ana yol önceliğidir.");

  q("TR54", "levha", "Ana yol levhası hangi biçimde tanınır?", [
    "Kırmızı sekizgen",
    "Sarı zeminli baklava, yani eşkenar dörtgen",
    "Mavi daire",
    "Ters üçgen",
  ], 1, "Sarı baklava, üzerinde bulunduğun yolun ana yol olduğunu söyler. Tali yoldan gelen sana yol verir. Levhanın sonunu, üzerine çizgi çekilmiş hali bildirir.");

  q("TR55", "kavsak", "Işıklar sönmüş, levha ve polis de yoksa eşdeğer kavşakta kim önce geçer?", [
    "Daha hızlı gelen",
    "Sağdan gelen",
    "Soldan gelen",
    "Kornayı önce çalan",
  ], 1, "Kontrol kalkınca genel kurala dönülür: sağınızdaki araca yol verirsiniz. Işık arızası “kurallar bitti” demek değildir.");

  q("TR56", "kavsak", "Park yerinden veya garajdan yola çıkan sürücü kime yol verir?", [
    "Kimseye, çıkan her zaman önceliklidir",
    "Yolda seyreden araçlara",
    "Sadece kornayla uyaranlara",
    "Sadece soldan gelen yayaya, araçlara değil",
  ], 1, "Yola sonradan katılan, yoldakine yol verir. Park, garaj ve akaryakıt istasyonu çıkışı böyledir. Korna bu hakkı üretmez.");

  q("TR57", "kavsak", "Sen sola döneceksin, karşıdan bir araç düz gidiyor. Hangisi doğrudur?", [
    "Sola dönen her zaman önceliklidir",
    "Karşıdan düz gelene yol verirsin",
    "Büyük olan araç önce geçer",
    "Yaya yoksa sola dönen geçer",
  ], 1, "Dönüş, düz giden akışı keser. Karşıdan gelenin geçmesini beklersin. Sağdan gelen kuralı, ışıklı veya öncelikli bir akış varken tek başına işlemez.");

  q("TR58", "kavsak", "Işığın yeşil ama kavşağın ötesi tıkalıysa ne yapılır?", [
    "Kavşağın ortasında beklenir",
    "Karşıya geçemeyeceksen kavşağa girilmez",
    "Korna ile araçlar dağıtılır",
    "Kaldırıma çıkılarak dolanılır",
  ], 1, "Ortada kalmak her yönü kilitler. Yeşil, boşluk varsa ilerle demektir. Bu hem kural hem trafik adabı sorusudur.");

  q("TR59", "sollama", "Sollanan sürücü sollama sırasında ne yapmamalıdır?", [
    "Hızını artırarak sollamayı engellememelidir",
    "Hızını artırıp yarışmalıdır",
    "Sağ şeride kırmadan soldan kaçmalıdır",
    "Selektörü sürekli açık tutmalıdır",
  ], 0, "Sollanan araç şeridini korur ve hızlanarak engel olmaz. Sollayan da sollamayı bitirince sağa döner. İki tarafın inadı karşı şeritte çarpışmadır.");

  q("TR60", "sollama", "Sinyal vermek geçiş hakkı doğurur mu?", [
    "Evet, sinyal yanınca herkes durmak zorundadır",
    "Hayır, sinyal yalnızca niyet bildirir",
    "Evet, ama sadece şehir dışında",
    "Hayır, çünkü sinyal zaten yasaktır",
  ], 1, "Sinyal “şerit değiştireceğim” der, “çekil” demez. Yer açılmışsa ve ayna temizse değişilir. Sinyali erken vermek haberdir, hak değil.");

  q("TR61", "sollama", "Şerit değiştirmeden hemen önce hangi kontrol gerekir?", [
    "Sadece korna",
    "Ayna ve ölü açı",
    "Sadece hız göstergesi",
    "Gözleri kısa süre kapatmak",
  ], 1, "Ayna arkayı, omuz bakışı aynanın görmediği ölü açıyı tarar. İkisi olmadan sinyal yakmak, orada duran motosikleti yok saymaktır.");

  q("TR62", "sollama", "Çift devamlı şerit çizgisi hakkında hangisi doğrudur?", [
    "Sollarken geçilebilir",
    "Geçilemez",
    "Sadece gece geçilebilir",
    "Sadece motosiklet geçebilir",
  ], 1, "Çift devamlı çizgi, iki yönün de çizgiyi terk etmesini yasaklar. Kesik çizgi ise şerit değiştirmeye elverişlidir. Çizgiyi “bir kerelik” diye delmek sınavda yanlış şıktır.");

  q("TR63", "sollama", "Senin tarafındaki çizgi devamlı, karşı tarafınki kesikse kim şerit değiştirebilir?", [
    "Sen",
    "Kesik çizgi olan taraftaki sürücü",
    "İkiniz de",
    "Hiç kimse, çizgilerin anlamı yoktur",
  ], 1, "Kural senin tekerleğinin yanındaki çizgiye bakar. Yanında devamlı çizgi varsa sen geçemezsin. Karşıdaki kesik çizginin yanındaysa o geçebilir.");

  q("TR64", "levha", "Yerleşim yeri içinde dönüş sinyali en az ne kadar önce verilir?", [
    "150 metre",
    "30 metre",
    "5 metre",
    "500 metre",
  ], 1, "Şehir içi 30, şehir dışı 150 metredir. Aynı iki sayı reflektör üçgeni için de geçerlidir: içerde 30, dışarıda 150 metre geriye. Sinyali dönüş anında yakmak geç kalmaktır.");

  q("TR65", "otoyol", "Yerleşim yeri dışında arızalanan aracın reflektör üçgeni yaklaşık nereye konur?", [
    "30 metre geriye",
    "150 metre geriye",
    "5 metre ileriye",
    "Bagajın içinde bırakılır",
  ], 1, "Şehir dışında hız yüksektir, üçgen daha geride durmalıdır. Yerleşim yeri içinde bu mesafe yaklaşık 30 metredir. Üçgen bagajda kalırsa arkadan gelen seni görmez.");

  q("TR66", "otoyol", "Otoyolda geri gitmek ve U dönüş yapmak serbest midir?", [
    "Evet, emniyet şeridinden",
    "Hayır, ikisi de yasaktır",
    "Evet, sadece gece",
    "Evet, çıkışa 1 km kala",
  ], 1, "Otoyolda geri manevra ve ortadaki açıklıktan dönmek karşı akışın içine çıkmaktır. Çıkışı kaçırdıysan bir sonrakine kadar devam edilir.");

  q("TR67", "otoyol", "Bisiklet otoyola girebilir mi?", [
    "Evet, en sağ şeritten",
    "Hayır",
    "Evet, sadece yarış bisikleti",
    "Evet, kaldırım varsa",
  ], 1, "Bisiklet, motorlu bisiklet, yaya ve traktör otoyola giremez. Otoyolun kenarı kaldırım değildir. Hız farkı bu kullanıcıları korumasız bırakır.");

  q("TR68", "otoyol", "Yaya otoyolda yürüyebilir mi?", [
    "Evet, emniyet şeridi yürüme yoludur",
    "Hayır",
    "Evet, gece yansıtıcılıysa",
    "Evet, kısa mesafe için",
  ], 1, "Emniyet şeridi yürüyüş bandı değildir. Arıza ve acil durum için boş tutulur. Yayanın otoyola girmesi yasaktır.");

  q("TR69", "otoyol", "Otoyol ile bölünmüş karayolu arasındaki temel fark hangisidir?", [
    "İkisi aynı yoldur, sadece adı değişir",
    "Otoyolun erişimi kontrollüdür, hemzemin kavşağı yoktur; yaya ve traktör giremez",
    "Bölünmüş yolda hız her zaman 50’dir",
    "Otoyolda tren hemzemin geçer",
  ], 1, "Bölünmüş yolda otomobil sınırı 110’dur ve yan yollar kavuşabilir. Otoyol kavşaksız ve erişim kontrollüdür, bazı araçlara kapalıdır. İkisini aynı hız ve aynı kural sanmak yanlıştır.");

  q("TR70", "park", "Kaldırıma çıkarak park etmek neden yasaktır?", [
    "Kaldırım da bir şerittir, serbesttir",
    "Kaldırım yaya yeridir, taşıt yolu gibi kullanılamaz",
    "Sadece gece yasaktır",
    "Sadece kamyonlara yasaktır",
  ], 1, "Yaya, araçtan kaçmak için yola inmek zorunda kalır. Kaldırım park yeri değildir. Engelci rampası ve yaya geçidi de aynı mantıkla boş bırakılır.");

  q("TR71", "park", "Engelli rampasının hemen önüne park etmek serbest midir?", [
    "Kısa süre için evet",
    "Hayır",
    "Sadece motosiklet için evet",
    "Korna çalınırsa evet",
  ], 1, "Rampa, tekerlekli sandalyenin kaldırıma çıkacağı yerdir. Önünü kapatmak o kişiyi yolun ortasına indirir. Bu hem park yasağı hem saygı sorusudur.");

  q("TR72", "park", "Otobüs durağının önüne park etmek neden sakıncalıdır?", [
    "Otobüs yolcuyu yola indirmek zorunda kalır",
    "Durağın önü zaten ayrılmış park yeridir",
    "Sadece kamyonlar için sakıncalıdır",
    "Bir dakika bekleyince park sayılmaz ve serbesttir",
  ], 0, "Durak, yolcunun kaldırımla otobüs arasında güvenle geçeceği yerdir. Önüne park, yolcuyu aracın önünden dolaştırır. Durakta duraklama ve park yasağı bu yüzden vardır.");

  q("TR73", "park", "Kavşağa ne kadar yakında park etmek yasaktır?", [
    "50 metreden yakın serbesttir",
    "5 metreden yakın park yasaktır",
    "Hiçbir mesafe yoktur",
    "Sadece dönel kavşakta yasaktır",
  ], 1, "Kavşak görüşünün içine park, sağdan geleni ve yayayı gizler. Öğretilen mesafe kavşağa 5 metreden yakındır. Dönemeç ve tepe üstü zaten görüş kapalı diye yasaktır.");

  q("TR74", "belge", "Otomobilde bulundurulması öğretilen ekipman üçlüsü hangisidir?", [
    "Çekme halatı, nargile ve stepne",
    "İlk yardım çantası, reflektör üçgen ve yangın söndürücü",
    "Sadece kasko poliçesi",
    "Sadece stepne",
  ], 1, "Çanta, üçgen ve söndürücü araçla birlikte taşınır. Çekme halatı bunların yerine geçmez. Belge olarak da ehliyet, ruhsat ve zorunlu trafik sigortası ayrı bir üçlüdür.");

  q("TR75", "belge", "Aşağıdakilerden hangisi otomobilde zorunlu ekipman diye öğretilenler arasında değildir?", [
    "İlk yardım çantası",
    "Reflektör üçgen",
    "Yangın söndürücü",
    "Çekme halatı",
  ], 3, "Çekme halatı işe yarar ama çanta, üçgen ve söndürücünün yerine konmaz. Soru “hangisi değildir” diyorsa halatı seç. Üçgenin bagajda unutulması da arıza anında işe yaramaz.");

  q("TR76", "belge", "Ticari taşıtların muayene periyodu hususi otomobile göre nasıldır?", [
    "Daha seyrektir, on yılda birdir",
    "Daha sıktır, genellikle her yıl",
    "Hiç muayene gerekmez",
    "Hususi otomobille aynıdır, ilk üç yıldan sonra iki yılda bir",
  ], 1, "Hususi otomobilde ilk muayene üçüncü yılın sonundadır, sonra iki yılda bir yenilenir. Yolcu ve yük taşıyan ticari araçlarda periyot kısalır, çoğunlukla yılda birdir.");

  q("TR77", "belge", "A sınıfı sürücü belgesi için yaş koşulu hangisidir?", [
    "16 yaş",
    "24 yaş, ya da 20 yaş ve en az iki yıl A2 deneyimi",
    "18 yaşında her motosiklet",
    "14 yaş",
  ], 1, "A1 16, A2 18 yaşındadır. Sınırsız A ise 24 yaşında, ya da 20 yaşında olup en az iki yıldır A2 kullanmakla alınır. B sınıfının 18 yaşı bu motosiklet basamağını karşılamaz.");

  q("TR78", "belge", "A1 sınıfı sürücü belgesi neyi kapsar?", [
    "24 yaşında 1000 cc motosiklet",
    "16 yaşında, 125 cc ve 11 kW’ı geçmeyen motosiklet",
    "Yalnızca traktör",
    "18 yaşında otobüs",
  ], 1, "A1 küçük motosiklettir: silindir hacmi 125 cc’ye kadar, güç 11 kW’ı geçmez, yaş 16’dır. Daha güçlü makineler A2 veya A ister. Traktör F sınıfıdır.");

  q("TR79", "belge", "Çocuk bağlama sistemi hangi ölçüyle öğretilir?", [
    "12 yaşından küçük her çocuk, boyu ne olursa olsun",
    "Boyu 150 cm’den kısa ve ağırlığı 36 kg’dan az olan çocuk",
    "Yalnızca 100 cm’den kısa bebek",
    "Sadece ön koltukta oturan yetişkin",
  ], 1, "Kurs ölçütü boy ve kilodur, tek başına yaş değildir. Bu çocuklar çocuk koltuğu veya yükselticiyle taşınır. Hava yastıklı ön koltuğa, yastığa dönük ters bebek koltuğu bağlanmaz.");

  q("TR80", "belge", "Birkaç yüz metrelik bir yolda emniyet kemeri takılır mı?", [
    "Hayır, kısa yolda gerek yoktur",
    "Evet, mesafe kısa olsa da takılır",
    "Hayır, sadece otoyolda takılır",
    "Hayır, sadece sürücü takar",
  ], 1, "Kazanın önemli bir kısmı kısa yolculukta ve düşük hızda olur. Kemer, kullanılan her koltukta ve her mesafede zorunludur. “Köşeye kadar” gerekçesi sınavda yanlıştır.");

  q("TR81", "cevre", "Kaldırım yoksa yaya taşıt yolunun hangi tarafını kullanır?", [
    "Araçlarla aynı yönde, yolun sağını",
    "Kendi gidiş yönüne göre solunu, yani karşıdan gelen araçları görecek şekilde",
    "Yolun tam ortasını",
    "Emniyet şeridini",
  ], 1, "Türkiye’de araçlar sağdan gider. Yaya sola yürürse karşıdan geleni görür ve kenara çekilebilir. Emniyet şeridi ve yol ortası yürüme yeri değildir.");

  q("TR82", "cevre", "Yaya geçidini kullanmaya başlamış bir yaya varken sürücü ne yapar?", [
    "Korna çalıp geçer",
    "Durur ve geçişin bitmesini bekler",
    "Yaya geri çekilmek zorundadır",
    "Sadece ışık yeşilse durur, geçitte ışık yoksa durmaz",
  ], 1, "Yaya geçidi, yayanın öncelik aldığı yerdir. Işık olmasa da geçide girmiş veya girmek üzere olan yaya için durulur. Korna bu önceliği kaldırmaz.");

  q("TR83", "oncelik", "Trafik polisinin göğsü veya sırtı sana dönükse ne anlarsın?", [
    "Geç",
    "Dur",
    "Sadece sola dön",
    "Işık yeşilse polisi yok say",
  ], 1, "Polisin göğsü veya sırtı sana bakıyorsa duruş işaretidir. Koluyla gösterdiği yöne akış verilir. Bu işaret, yanan ışıktan önce gelir.");

  q("TR84", "oncelik", "Görev halindeki itfaiye aracının geçiş üstünlüğü için hangisi doğrudur?", [
    "İtfaiyenin geçiş üstünlüğü yoktur",
    "Sesli ve ışıklı uyarı birlikte açıksa yol verilir",
    "İtfaiye kırmızı ışıkta her zaman bekler",
    "Sadece orman yolunda önceliği vardır",
  ], 1, "İtfaiye, ambulans ve polis gibi can ve mal kurtaran araçlar, hem siren hem tepe lambasıyla geçiş üstünlüğü kullanır. İkisinden biri kapalıysa bu hakkı kullanıyor sayılmazlar.");

  q("TR85", "hiz", "Lastik tekerlekli traktörün yerleşim yeri içindeki azami hızı kaç km/saattir?", [
    "50",
    "20",
    "40",
    "90",
  ], 1, "Traktör yerleşim yerinde 20, şehirlerarası çift yönlü yolda 30, bölünmüş yolda 40 km/saattir. Otoyola giremez. 50’yi her araca yapıştırmak yanlıştır.");

  q("TR86", "hiz", "Lastik tekerlekli traktör bölünmüş yolda en çok kaç km/saat yapabilir?", [
    "110",
    "40",
    "90",
    "70",
  ], 1, "Bölünmüş yoldaki 110 otomobile aittir. Traktörün sınırı 40’tır. Aynı yolda iki aracın limiti bir değildir.");

  q("TR87", "sollama", "Bölünmüş yolda refüjün üzerinden karşı yöne geçmek serbest midir?", [
    "Evet, sollarken",
    "Hayır",
    "Evet, gece",
    "Evet, U dönüş levhası olmasa da",
  ], 1, "Refüj iki yönü ayırır. Üzerinden geçmek karşı akışın içine çıkmaktır. Dönüş, ancak bunun için ayrılmış açıklık ve levha varsa yapılır.");

  q("TR88", "otoyol", "Banket ne için kullanılmaz?", [
    "Arıza anında kısa süreli korunmak için",
    "Normal seyir şeridi gibi sürekli gitmek için",
    "Üçgeni görünür koymak için",
    "Arızada dörtlü yakmak için",
  ], 1, "Banket yolun kenarındaki destektir, üçüncü bir şerit değildir. Sürekli oradan gitmek hem lastiği hem arkadan geleni tehlikeye atar. Arıza ayrı, seyir ayrıdır.");

  q("TR89", "cevre", "Atık motor yağı nereye dökülmemelidir?", [
    "Toprağa, mazgala ve suya",
    "Yetkili toplama noktasına",
    "Servisin atık kabına",
    "Kapalı bir bidona, sonra teslim etmek üzere",
  ], 0, "Bir litre yağ çok geniş bir su yüzeyini kirletir. Toprak ve mazgal bunu temizlemez. Yağ, yetkili atık noktasına verilir. Bu, trafik ve çevre dersinin klasik sorusudur.");

  q("TR90", "belge", "Araçtaki yük için hangisi doğrudur?", [
    "Görüşü kapatabilir, işaret gerekmez",
    "Sabitlenir, görüşü kapatmaz, dışarı taşıyorsa işaretlenir",
    "Üst sınır yoktur",
    "Bagaj kapağı açık gitmek her zaman uygundur",
  ], 1, "Kaymayan yük hem senin dengenizi hem arkadan gelenin camını tehdit eder. Taşan yük yansıtıcıyla belli edilir. Kapağın görüşü kapatması da kusurdur.");

  q("TR91", "belge", "Ruhsatta yazan oturma sayısından fazla yolcu alınabilir mi?", [
    "Kısa yolda evet",
    "Hayır",
    "Sadece şehir dışında evet",
    "Çocuklar sayılmaz, evet",
  ], 1, "Her koltuğun kemeri ve araçtaki fren hesabı o sayıya göredir. Fazla yolcu hem belge hem güvenlik sorunudur. Çocuk da yolcudur, koltuk hakkını yer.");

  q("TR92", "levha", "Kaygan yol, dönemeç gibi bir tehlikeyi önceden bildiren levha hangi biçimdedir?", [
    "Mavi daire",
    "Kırmızı çerçeveli üçgen",
    "Sekizgen",
    "Sarı baklava",
  ], 1, "Tehlike üçgendir. Mavi daire emirdir, sekizgen DUR’dur, sarı baklava ana yoldur. Kaygan yol levhasını görünce hız, o andaki limite değil tutunmaya göre de kesilir.");

  q("TR93", "kavsak", "Sağa dönüş hangi şeritten yapılır?", [
    "Karşı yönün şeridinden",
    "Gidiş yönünün en sağındaki uygun şeritten",
    "Kaldırımdan",
    "Sol şeritten, sağa kırarak",
  ], 1, "Sağa dönüş sağa yanaşarak, sola dönüş sola yanaşarak yapılır. Son anda çapraz kırarak dönmek, yanındaki şeritteki aracı kör noktada bırakır.");

  q("TR94", "kavsak", "Sola dönüşten önce sürücü nereye yanaşır?", [
    "En sağ şeride",
    "Gidişe ayrılmış yolun solundaki uygun şeride",
    "Kaldırıma",
    "Karşı yöndeki şeride, dönüşten çok önce",
  ], 1, "Sola dönüş, gidiş yönünün solundan hazırlanır. Karşı şeride erkenden çıkmak sollama değil ihlaldir. Sinyal, bu yanaşmadan önce verilir.");

  q("TR95", "otoyol", "Otoyolda arızalanınca ilk doğru yerleşim hangisidir?", [
    "Olduğun hızlı şeritte kalıp kaputu açmak",
    "Emniyet şeridine almak, dörtlü yakmak, üçgeni geriye koymak",
    "Geri giderek bir önceki çıkışa dönmek",
    "Orta şeritte el freniyle beklemek",
  ], 1, "Hızlı şerit arıza yeri değildir. Araç emniyet şeridine alınır, dörtlü yakılır, üçgen geride görünür olur. İnsanlar mümkünse bariyerin dışında bekler.");

  q("TR96", "cevre", "Bir aracı yakından takip ederken uzun far neden kapatılır?", [
    "Takip ederken uzun far açık kalmalıdır",
    "Öndeki sürücünün aynadan kör olmaması için kısa fara geçilir",
    "Farlar tamamen söndürülür",
    "Sis lambası sürekli açık bırakılır",
  ], 1, "Uzun farın aynadan yansıması öndekinin gözünü alır. Karşılaşmada ve yakından takipte kısa far kullanılır. Kısa bir selektör uyarı olabilir, sürekli yakmak değil.");

  q("TR97", "levha", "Yerleşim yeri başlangıç levhasını geçince, başka hız levhası yoksa otomobil en çok kaç km/saat yapar?", [
    "90",
    "50",
    "110",
    "30",
  ], 1, "Yerleşim yeri levhası, tabla sınırını başlatır: otomobil için 50. İçeride 30 veya 70 yazan ayrı bir levha varsa o sayı geçerlidir. Çıkış levhasıyla birlikte 50 bitebilir.");

  q("TR98", "belge", "0,50 promil ifadesi ne anlama gelir?", [
    "Kandaki alkolün yüzde elli olduğu",
    "100 mililitre kanda yaklaşık 50 miligram alkol olduğu, yüzde elli olmadığı",
    "Güvenli sürüşün garantilendiği",
    "Yalnızca ticari araç sınırı olduğu",
  ], 1, "Promil binde birlik bir orandır. 0,50, halk arasındaki “yüzde elli sarhoş” değildir. Hususi otomobilde yasal tavan budur; ticari araçta tavan 0,20’dir. Altında olmak da refleksin yerinde olduğu anlamına gelmez.");

  q("TR99", "hiz", "Islak zeminde fren mesafesi kuru zemine göre nasıldır?", [
    "Kısalır",
    "Uzunlar",
    "Sıfırlanır",
    "Sadece yokuş yukarıyken uzar, düz yolda değişmez",
  ], 1, "Su, lastik ile asfalt arasına film gibi girer. Hız yüksekse tekerlek suyun üstüne çıkar. Mesafe hem takipte hem frende büyür. ABS, suyun üstünde de mucize yaratmaz.");

  q("TR100", "sollama", "Sis nedeniyle görüş kısalmışken sollama yapılır mı?", [
    "Evet, sis en uygun sollama havasıdır",
    "Hayır, görüş yetersizken sollama yasaktır",
    "Evet, tepe üstü daha da uygundur",
    "Evet, kavşak içi daha güvenlidir",
  ], 1, "Sollama, karşıdan geleni görecek kadar açıklık ister. Sis, tepe üstü, dönemeç ve kavşak bu açıklığı kapatır. Hepsi aynı yasağın örnekleridir.");

  q("TR101", "belge", "1 Aralık ile 1 Nisan arasında kış lastiği zorunluluğu kime yöneliktir?", [
    "Ülke genelinde her hususi otomobile, istisnasız",
    "Yolcu ve eşya taşıyan ticari araçlara",
    "Hiçbir araca",
    "Sadece motosikletlere",
  ], 1, "Zorunluluk esas olarak ticari taşıtlar içindir. Hususi otomobil ülke genelinde her yıl otomatik olarak bu kapsama girmez. Valilik ayrıca duyuru yapabilir. Diş derinliğinin 1,6 mm tabanı ise ayrı ve genel bir kuraldır.");

  q("TR102", "oncelik", "Sireni ve tepe lambası açık bir ambulans arkandayken ne yaparsın?", [
    "Olduğun şeritte hızlanırsın",
    "Sağa yanaşıp yolu açarsın",
    "Orta şeritte durup beklersin",
    "Geri giderek yaklaşmasına izin verirsin",
  ], 1, "Yol açmak, sağa yaklaşıp akışı durdurmadan yer vermektir. Orta yerde durmak ve geri gitmek hem ambulansı hem arkadakini kilitler. Uyarılar açıksa bu bir ricadır, yasal görevdir.");

  q("TR103", "cevre", "Egzozdan sürekli yoğun siyah duman çıkması neyi gösterir?", [
    "Motorun çok sağlıklı yandığını",
    "Yanmanın bozuk olduğunu, bakım gerektiğini",
    "Daha fazla güç üretildiğini ve bunun yasal olduğunu",
    "Sadece gösterge lambasının süs olduğunu",
  ], 1, "Siyah duman, yakıtın tam yanmadığını gösterir. Hava filtresi, enjektör veya ayar bozulmuş olabilir. Bu hem yakıtı hem solunan havayı bozar.");

  q("TR104", "levha", "Taşıt girmesi yasaktır levhası nasıl görünür?", [
    "Mavi daire içinde beyaz ok",
    "Kırmızı daire içinde yatay beyaz bant",
    "Kırmızı üçgen",
    "Sekizgen",
  ], 1, "Kırmızı daire ve yatay beyaz bant “bu yöne araç giremez” der. Mavi daire ise zorunlu bir yön veya yol kullanıcısı bildirir. Tek yön levhasıyla girilmez levhasını karıştırma.");

  q("TR105", "kavsak", "Toprak yoldan gelip asfalt yola çıkan sürücü ne yapar?", [
    "Önceliği kendinde sayar",
    "Asfalt yolda seyreden araca yol verir",
    "Korna çalarak çıkar",
    "Soldan gelen kuralını toprak yol lehine uygular",
  ], 1, "Kaplamasız yoldan çıkan, kaplamalı yoldaki trafiğe katılırken yol verir. İki yol da aynı nitelikte ve kontrolsüzse sağdan gelen kuralı işler. Yolun cinsi bu sırayı değiştirir.");

  q("TR106", "belge", "Sürücü belgesi yanında yokken araç kullanılabilir mi?", [
    "Kısa mesafede evet",
    "Hayır",
    "Yanındaki kişinin belgesi varsa evet",
    "Sadece gündüz evet",
  ], 1, "Belge, kullanma hakkının sende olduğunu gösterir ve araçtayken bulunur. Başkasının ehliyeti seni sürücü yapmaz. Ruhsat ve zorunlu sigorta da ayrıca araçta olmalıdır.");

  q("TR107", "otoyol", "Emniyet şeridini sollama şeridi gibi kullanmak serbest midir?", [
    "Evet, hızlı araçlar için ayrılmıştır",
    "Hayır",
    "Evet, gündüz",
    "Evet, üç şerit varsa",
  ], 1, "Emniyet şeridi arıza, kaza ve geçiş üstünlüklü araç içindir. Oradan sollamak hem yasağı deler hem gerçekten duran bir araca çarpma riskini büyütür.");

  q("TR108", "hiz", "Panelvanın otoyoldaki azami hızı, aksi işaret yoksa kaç km/saattir?", [
    "140",
    "110",
    "90",
    "50",
  ], 1, "Panelvan, kamyonet ve otomobil aynı sınırda değildir. Panelvan otoyolda 110 km/saattir. Kamyon 90, otomobil uygulaması ise KGM otoyolunda 130’a kadar çıkar. Araç cinsi şıktaki sayıyı değiştirir.");

  q("TR109", "cevre", "Yerleşim yeri içinde gündüz, görüş açıksa uzun far yakmak neden yanlıştır?", [
    "Uzun far sadece şehir içinde zorunludur",
    "Karşıdan geleni ve öndekini gereksiz yere kör eder",
    "Aküyü şarj ettiği için zorunludur",
    "Sis lambasının yerine her zaman geçer",
  ], 1, "Yerleşim yerinde kısa far yeter. Uzun far, karşılaşma ve yakın takip dışında da rahatsızlık verir. Sis yokken arka sis lambasını açık unutmak da arkadakinin gözünü alır.");

  q("TR110", "belge", "Muayene süresi geçmiş bir araçla yola çıkmak nasıl değerlendirilir?", [
    "Birkaç gün için sorun yoktur",
    "Araç trafiğe uygun sayılmaz, muayenesiz çıkılmaz",
    "Sadece ticari araçlarda sorun olur",
    "Kasko varsa muayene aranmaz",
  ], 1, "Muayene, frenin, lastiğin ve aydınlatmanın hâlâ işe yaradığını denetler. Süresi dolan araç yolu çıkmamalıdır. Hususi otomobilde periyot iki yılda bir de olsa, tarih geçtikten sonra “biraz daha” yoktur.");
})();
