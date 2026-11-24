(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "ilk_yardim";

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

  q("IY35", "tanim", "İlk yardımın amaçlarından hangisi değildir?", [
    "Hayatta kalmayı sağlamak",
    "Durumun kötüleşmesini önlemek",
    "İyileşmeyi kolaylaştırmak",
    "Olay yerinde tanı koyup ilaç yazmak",
  ], 3, "İlk yardımın üç amacı vardır: yaşatmak, kötüleşmeyi önlemek, iyileşmeyi kolaylaştırmak. Tanı koymak ve ilaç yazmak hekimin işidir. Soru “hangisi değildir” diyorsa ilaç ve teşhis şıkkını seç.");

  q("IY36", "olay", "İlk yardımcı, yaralıya ulaşmak için kendi canını bilerek tehlikeye atmalı mıdır?", [
    "Evet, kahramanlık her kuralın önündedir",
    "Hayır, önce kendi güvenliği sağlanmadan müdahale edilmez",
    "Yalnızca gece atılır",
    "Yalnızca tanıdık yaralıysa atılır",
  ], 1, "Sen de ikinci kazazede olursan kimseye faydan kalmaz. Akan şerit, yangın, elektrik ve zehirli gaz varken önce ortam güvenliği gelir. Yardım, güvenli mesafeden ve mümkünse başkasını da uyararak yapılır.");

  q("IY37", "abc", "Bilinci yerinde mi diye bakmanın doğru yolu hangisidir?", [
    "Yüzüne sert tokat atmak",
    "Omuzlara hafifçe dokunup yüksek sesle soru sormak",
    "Üzerine soğuk su dökmek",
    "Ayağa kaldırıp yürütmek",
  ], 1, "Bilinç, sözlü ve hafif dokunsal uyaranla kontrol edilir. Tokat, su dökmek ve sarsmak hem saygısızdır hem boyun yaralanmasını büyütür. Cevap vermiyorsa bilinç kapalı kabul edilir ve solunuma geçilir.");

  q("IY38", "abc", "Omurga yaralanmasından şüphe edilmeyen kişide hava yolu nasıl açılır?", [
    "Baş geriye, çene yukarıya alınır",
    "Çene göğse yapıştırılır",
    "Boyun bir yastıkla öne bükülür",
    "Kişi yüzüstü bırakılır",
  ], 0, "Dil, bilinci kapalı kişide geriye kaçıp soluk borusunu tıkar. Baş geri-çene yukarı manevrası dili öne alır. Bu hareket boyun şüphesinde yapılmaz; o zaman baş sabit tutulur.");

  q("IY39", "abc", "Boyun yaralanması şüphesi varken hava yolu için hangisi daha uygundur?", [
    "Başı sertçe geriye atmak",
    "Başı oynatmadan çeneyi öne doğru itmek",
    "Kişiyi oturtup başını öne eğmek",
    "Ayaklarından tutup sallasmak",
  ], 1, "Boyun omurları oynatılırsa omurilik zedelenebilir. Bu yüzden baş-geri manevrası yerine çene, baş sabitken öne itilir. Amaç hava yolunu açmak, boynu bükmemektir.");

  q("IY40", "abc", "Solunum kontrolünde bak-dinle-hisset ne demektir?", [
    "Yalnızca tansiyon aletiyle ölçmek",
    "Göğüs hareketine bakmak, soluk sesini dinlemek, yanağında havayı hissetmek",
    "Yalnızca göz bebeğine ışık tutmak",
    "Nabzı başparmakla saymak",
  ], 1, "Solunum on saniye kadar, göğüs kafesine bakılarak, ağza yaklaşılıp dinlenerek ve hava akımı hissedilerek aranır. Normal solunum yoksa temel yaşam desteğine geçilir. Sadece nabız bakmak solunumu atlamaktır.");

  q("IY41", "abc", "Dinlenme halindeki yetişkinde normal nabız kabaca hangi aralıktadır?", [
    "Dakikada 20-40",
    "Dakikada 60-100",
    "Dakikada 140-180",
    "Dakikada 200-220",
  ], 1, "Yetişkinde dinlenme nabzı yaklaşık 60-100’dür. Çocuk ve bebekte bu sayı daha yüksektir. Çok hızlı ve çok zayıf nabız, şokun habercisi olabilir. Bebekte bu kontrol boyundan değil kolun içinden yapılır.");

  q("IY42", "abc", "Sağlıklı bir yetişkinde vücut sıcaklığı kabaca kaç derecedir?", [
    "32 derece",
    "36,5 ile 37 derece civarı",
    "40 derece",
    "28 derece",
  ], 1, "Kabaca 36,5-37 derece normal kabul edilir. Çok yüksek ateş veya aşırı düşmüş ısı, çevre şartı ya da hastalık kaynaklı olabilir. Sınavda saç rengi gibi ölçüler yaşam bulgusu değildir; ısı yaşam bulgusudur.");

  q("IY43", "kanama", "Toplardamar kanaması nasıl tanınır?", [
    "Açık kırmızı kanın kalp atımıyla fışkırması",
    "Koyu kırmızı kanın sürekli akması",
    "Sadece deri altında morluk olup dışarı kan olmaması",
    "Yalnızca burundan pembe köpük gelmesi",
  ], 1, "Toplardamar kanı oksijenini dokuya bıraktığı için daha koyudur ve fışkırmaz, sürekli akar. Açık kırmızı fışkırma atardamardır. Dışarı çıkmayan kan, iç kanamayı düşündürür.");

  q("IY44", "kanama", "Kılcal damar kanaması hangisine uyar?", [
    "Kalp ritmiyle fışkırma",
    "Sızma şeklinde, genellikle kendiliğinden yavaşlayan kanama",
    "Karın içinde biriken ve dışarı çıkmayan kan",
    "Kopan uzuvdan boşalan kan",
  ], 1, "Kılcal kanama sıyrık ve küçük kesiklerde sızma biçimindedir. Temiz bez ve hafif basınç çoğu zaman yeter. Fışkıran kanı kılcal sanıp sadece izlemek tehlikelidir; o atardamar kanamasıdır.");

  q("IY45", "kanama", "Basınç uygulanan bez kanla ıslandıysa ne yapılır?", [
    "Bez çekilip yara açık bırakılır",
    "Islak bezin üzerine ikinci bir bez konur, ilki kaldırılmaz",
    "Hemen turnikeye geçilir",
    "Yara sabunla ovulur",
  ], 1, "İlk bez pıhtının oluştuğu yerdir. Onu kaldırmak pıhtıyı bozar ve kanamayı yeniden açar. Üzerine yeni bez ve basınç eklenir. Turnike bu adımlardan sonra, durmayan hayati kanamada düşünülür.");

  q("IY46", "kanama", "Kırık şüphesi yoksa kanayan bir kol nasıl tutulur?", [
    "Kalp seviyesinin altına sarkıtılır",
    "Kalp seviyesinden yukarı kaldırılır",
    "Sıcak suyun altında ovulur",
    "Kişi yürütülerek kan dolaştırılır",
  ], 1, "Yukarı kaldırmak kanın yaraya akışını azaltır. Bu, kırık yoksa yapılır. Kırık şüphesinde uzuv zorla kaldırılmaz, tespit edilir. Basınç yine esastır; yükseklik onun yerine geçmez.");

  q("IY47", "kanama", "Turnikede malzeme ve yer için doğru olan hangisidir?", [
    "İnce tel, eklemin tam üzerine",
    "Geniş bez, yara ile gövde arasında, eklemin üzerine gelmeyecek şekilde",
    "Ayakkabı bağı, yaranın el ve ayak tarafına",
    "Boyuna, her burun kanamasında",
  ], 1, "İnce malzeme dokuyu keser. Turnike geniş olur, kanın geldiği gövde tarafına, eklem hizasına denk gelmeden uygulanır. Yaranın uç tarafına bağlamak kanamayı durdurmaz. Burun kanaması turnike yeri değildir.");

  q("IY48", "kanama", "Turnike uygulayan ilk yardımcı saati neden yazar?", [
    "Merak için, sağlık ekibinin işine yaramaz",
    "Dokunun ne kadar süredir kansız kaldığını sağlık ekibi bilsin diye",
    "Her iki dakikada bir kendisi gevşetsin diye",
    "Burun kanamasının süresini tutsun diye",
  ], 1, "Turnike uzvu kansız bırakır. Ne zaman bağlandığı, hastanede kararı değiştirir. Gevşetmek ilk yardımcının rutin işi olarak öğretilmez; saati yazıp sağlık ekibine bırakmak güvenli taraftır.");

  q("IY49", "yaralanma", "Su toplayan kabarcıkla giden yanık çoğu zaman hangi derecedir?", [
    "Birinci derece, sadece kızarıklık",
    "İkinci derece",
    "Sadece saç diplerini etkileyen yanık",
    "Kırıkla aynı şey",
  ], 1, "Birinci derece kızarıklık ve ağrıdır. İkinci derecede kabarcık oluşur. Üçüncü derecede derinin daha derin katları yanar, ağrı hissi azalabilir. Kabarcık her derecede patlatılmaz; derinin örtüsüdür.");

  q("IY50", "yaralanma", "Üçüncü derece yanıkta doğru tutum hangisidir?", [
    "Diş macunuyla kapatılır",
    "Derin doku zarar görmüş olabilir, soğutulur ve 112 aranır",
    "Kabarcıklar iğneyle patlatılır",
    "Kişi koşturularak ısıtılır",
  ], 1, "Üçüncü derece yanık genişse şok ve enfeksiyon riski yüksektir. Su ile ısı uzaklaştırılır, macun ve yağ sürülmez, kabarcık patlatılmaz. Geniş ve derin yanık tek başına evde izlenecek bir durum değildir.");

  q("IY51", "yaralanma", "Yanıkta giysi deriye yapışmışsa ne yapılır?", [
    "Hızlıca çekilip koparılır",
    "Yapışan parça zorlanmaz, çevresindeki serbest kumaş kesilir",
    "Üzerine kolonya dökülür",
    "Sıcak suyla ıslatılıp ovulur",
  ], 1, "Yapışmış kumaşı koparmak deriyi de söker. Serbest kısmı makasla ayrılır, yapışan yer olduğu gibi bırakılır. Kolonya ve sıcak su yanığı derinleştirir.");

  q("IY52", "yaralanma", "Suyla tepkimeye giren kuru bir kimyasal cilde bulaşmışsa ilk iş hangisidir?", [
    "Hemen ıslak elle ovmak",
    "Önce kuru şekilde fırçalayıp uzaklaştırmak, sonra bol suyla yıkamak",
    "Sirke dökerek nötralize etmek",
    "Sıkı bandajla kapatıp bekletmek",
  ], 1, "Kireç gibi maddeler suyla ısı çıkarır. Önce kuru uzaklaştırma, sonra uzun yıkama daha güvenlidir. Üzerine başka kimyasal dökerek nötralize etmek yeni bir yanık üretir.");

  q("IY53", "yaralanma", "Elektrik çarpmış birine ıslak elle dokunmak neden yanlıştır?", [
    "Sadece kıyafeti ıslatır, akım geçmez",
    "Akım kesilmeden dokunursan sen de çarpılırsın",
    "Nabzı yükseltir ama güvenlidir",
    "Turnike yerine geçer",
  ], 1, "Su iletkendir. Kaynak kesilmeden veya kuru yalıtkan bir cisimle ayrılmadan dokunulmaz. Metal sırık da akımı sana taşır. Kurtarma, önce elektriği kesmekle başlar.");

  q("IY54", "sok", "Sıcak çarpması düşünülen, bilinci bulanık kişiye ne yapılır?", [
    "Battaniyeye sarıp terlemesi beklenir",
    "Serin yere alınır, sıkı giysi açılır, bilinci kapalıysa ağızdan sıvı verilmez",
    "Koşturularak kendine getirilir",
    "Zorla tuzlu ayran içirilir",
  ], 1, "Sıcak çarpmasında vücut ısıyı atamaz. Serinletmek, giysiyi gevşetmek ve 112 esastır. Bilinç kapalıyken içecek vermek soluk borusuna kaçırır. Battaniye ısıyı içeride tutar.");

  q("IY55", "yaralanma", "Donmuş bir elde doğru uygulama hangisidir?", [
    "Karla veya elle sertçe ovmak",
    "Ovmamak, ılık ortama almak ve 112’yi aramak",
    "Doğrudan sobaya yapıştırmak",
    "Alkol içirip yürütmek",
  ], 1, "Donmuş dokuyu ovmak kristalleri parçalar ve zararı büyütür. Ani yüksek ısı da yakar. Ilık ortam, ıslak giysiyi çıkarmak ve tıbbi yardım gerekir. Alkol ısı kaybını artırır.");

  q("IY56", "yaralanma", "Köpek ısırmasında ilk uygun işlem hangisidir?", [
    "Yarayı hemen sıkıca kapatıp unutmak",
    "Sabunlu suyla yıkamak ve kuduz riski için sağlık kuruluşuna başvurmak",
    "Turnike uygulamak",
    "Yaranın üstüne toz dökmek",
  ], 1, "Isırık hem mikroplu hem kuduz açısından risklidir. Sabunlu suyla yıkamak mikrobu azaltır. Yarayı toz ve merhemle kapatmak, kuduz değerlendirmesini geciktirmek yanlıştır.");

  q("IY57", "yaralanma", "Arı iğnesi saplanmış ve kişi nefes almakta zorlanıyorsa ne yapılır?", [
    "İğne parmakla sıkılarak içeri itilir",
    "İğne ezilmeden çıkarılır, nefes darlığı varsa hemen 112 aranır",
    "Kişiye bol su içirilip koşturulur",
    "Sokulan yer kesilip emilir",
  ], 1, "İğneyi sıkmak zehri daha çok boşaltır. Nefes darlığı ve yüzde şişme alerjik şok habercisidir, 112 gecikmez. Kesip emmek hem işe yaramaz hem yarayı kirletir.");

  q("IY58", "tanim", "Ağızdan zehirlenmede kusturmanın yanlış olduğu durum hangisidir?", [
    "Kişi bilinci açık, madde ilaç ve sağlıkçı kustur dediğinde",
    "Çamaşır suyu gibi yakıcı madde yutulmuşsa veya bilinç kapalıysa",
    "Hiçbir zehirlenmede 112 aranmaz",
    "Her zehirlenmede hardalla kusturulur",
  ], 1, "Yakıcı madde kusulursa yemek borusu ikinci kez yanar. Bilinç kapalı kişi kusmuğu akciğerine kaçırır. Petrol ürünlerinde de kusturma öğretilmez. Zehir danışma 114, acil 112’dir.");

  q("IY59", "tanim", "Türkiye’de acil sağlık ve zehir danışma numaraları hangi eşleşmede doğrudur?", [
    "Acil 112, zehir danışma 114",
    "Acil 155, zehir 110",
    "Acil 114, itfaiye 112",
    "İkisi de 156’dır",
  ], 0, "112 genel acildir. 114 Ulusal Zehir Danışma Merkezi’dir. 110 itfaiye, 155 polis hattı olarak bilinir. Zehirlenmede hem 112 hem mümkünse 114 aranır; uydurma karışım içirilmez.");

  q("IY60", "tikama", "Gebede veya çok kilolu kişide tam tıkanmada karın yerine ne uygulanır?", [
    "Göbekten sertçe Heimlich",
    "Göğüs kemiği üzerine bası",
    "Ayaklardan baş aşağı sallama",
    "Sırtüstü yatırıp su içirme",
  ], 1, "İleri gebelikte karın basısı bebeğe ve organlara zarar verir. Bası göğüs kemiğine, içeri doğru yapılır. Bebekteki beş sırt vuruşu da ayrı bir tekniktir; gebe yetişkin bebek değildir.");

  q("IY61", "tyd", "Göğüs basısı yumuşak bir koltukta neden etkisiz kalır?", [
    "Koltuk daha hijyenik olduğu için sorun yoktur",
    "Bası koltuğa gömülür, göğüs kafesi yeterince inmez",
    "Sadece bebeklerde sorun olur",
    "Araç koltuğu en ideal zemindir",
  ], 1, "Kalbe giden basınç, sırtın sert bir yerde desteklenmesini ister. Yatak ve koltuk bu basıncı yer. Kişi mümkünse yere, sert zemine alınır.");

  q("IY62", "tyd", "Bebekte göğüs basısı nasıl yapılır?", [
    "İki elle, yetişkin derinliğinde",
    "İki parmakla, göğsün yaklaşık üçte biri kadar",
    "Karından Heimlich ile",
    "Sırttan yumrukla",
  ], 1, "Bebeğin göğsü küçüktür. İki parmak, meme çizgisinin hemen altına konur. Derinlik göğsün yaklaşık üçte biridir. Yetişkin gibi 5-6 santim basmak organları zedeler.");

  q("IY63", "yaralanma", "Karın yarasında bağırsak dışarı çıkmışsa ne yapılır?", [
    "İçeri itilir",
    "Temiz ve nemli bir bezle örtülür, içeri itilmez",
    "Üzerine oturulur",
    "Kişiye bol yemek verilir",
  ], 1, "Dışarı çıkan organı itmek enfeksiyon ve yırtık yaratır. Temiz, mümkünse nemli bir örtüyle kapatılır, 112 aranır. Ağızdan su ve yiyecek verilmez.");

  q("IY64", "yaralanma", "Kafa travmasından sonra kulaktan veya burundan berrak sıvı geliyorsa ne yapılır?", [
    "Sıkı tıkaçla tamamen kapatılır",
    "Akış tıkamadan engellenmez, baş-boyun sabitlenir, 112 aranır",
    "Kişi yürütülüp sümkürtülür",
    "Sıvı içeri doğru bastırılır",
  ], 1, "Bu sıvı beyin-omurilik sıvısı olabilir. Sıkı tıkamak basıncı içeri hapseder. Kişi sümkürtülmez, burnu zorlanmaz, baş-boyun hareket ettirilmez.");

  q("IY65", "sok", "Şekeri düştüğü düşünülen bir kişide bilinç durumuna göre doğru olan hangisidir?", [
    "Bilinci kapalıysa zorla şekerli su verilir",
    "Bilinci açıksa şekerli bir şey verilebilir, kapalıysa ağızdan hiçbir şey verilmez",
    "Her iki durumda da sen insülin yaparsın",
    "Koşturmak şekeri yükseltir",
  ], 1, "Uyanık kişi şekeri yutabilir. Bilinç kapalı kişi yutamaz, sıvı soluk borusuna kaçar. İnsülin vermek ilk yardımcının işi değildir. Ayırt edemiyorsan ağızdan bir şey verme ve 112’yi ara.");

  q("IY66", "olay", "Çok sayıda yaralı varken hangisi daha doğrudur?", [
    "En yüksek sesle bağıran önce kurtarılır, sessiz olan iyidir",
    "Sessiz kalan daha ağır olabilir; önce güvenlik, sonra solunumu duran ve ağır kanayan",
    "Sadece tanıdıklar taşınır",
    "Önce fotoğraf çekilir",
  ], 1, "Bağıramayan kişi çoğu zaman daha kötüdür. Önce senin güvenliğin, sonra hayati riski yüksek olanlar gelir. Herkesi aynı anda taşımak hem imkânsızdır hem omurgayı bozar.");

  q("IY67", "yaralanma", "Göze yabancı cisim saplanmışsa hangisi yapılır?", [
    "Göz ovuşturulur ve damla damlatılır",
    "Cisim çıkarılmaz, göz ovuşturulmaz, iki göz kapatılarak 112 aranır",
    "Basınçlı suyla cisim fırlatılır",
    "Kapak zorla açılıp cisim çekilir",
  ], 1, "Saplanan cisim gözün duvarını tutuyor olabilir. Çekmek veya ovmak deliği büyütür. Göz hareket etmesin diye her iki göz birden kapatılabilir. Merhem ve damla ilk yardımda rastgele kullanılmaz.");

  q("IY68", "tasima", "İtfaiyeci yöntemiyle omuzda taşıma ne zaman düşünülür?", [
    "Her kırıkta ilk tercih olarak",
    "Yangın gibi bir tehlike varsa ve düz taşıma imkânı yoksa",
    "Rentek manevrasının aynısı olduğu için her araç kazasında",
    "Bebeklerde Heimlich yerine",
  ], 1, "Omuzda taşıma omurgayı büker. Ancak yangın, çökme veya zehirli gaz gibi anlık ölüm riskinde, başka seçenek yoksa kullanılır. Omurga şüphesinde düz ve ekseni bozmayan taşıma, mümkünse o tercih edilir.");

  q("IY69", "tyd", "Normal solunumu olmayan bir yetişkinde yan yatırmak yeterli midir?", [
    "Evet, koma pozisyonu kalp masajının yerine geçer",
    "Hayır, temel yaşam desteği gerekir: 30 bası, 2 solunum",
    "Evet, sadece su içirmek yeter",
    "Hayır, önce ilaç verilir",
  ], 1, "Koma pozisyonu soluyan bilinçsiz içindir. Solunum yoksa göğüs basısı şarttır. Yalnızca yan yatırıp beklemek dolaşımı başlatmaz.");

  q("IY70", "tyd", "Kurtarıcı solunumda üfleme nasıl olmalıdır?", [
    "Çok hızlı ve güçlü, mide şişene kadar",
    "Baş geri, burun kapalı, göğüs yükselene kadar yaklaşık bir saniyelik nefes",
    "Burundan su üfleyerek",
    "Boyun öne bükülmüşken rastgele",
  ], 1, "Amaç akciğere hava göndermektir. Göğsün yükselmesi yeter. Sert ve uzun üfleme havayı mideye kaçırır, kusmaya yol açar. Burun kapatılmazsa hava dışarı kaçar.");

  q("IY71", "kanama", "Kanamalı bir yaraya dokunurken ilk yardımcı kendini nasıl korur?", [
    "Çıplak elle bastırmak zorundadır",
    "Varsa eldiven kullanır, yoksa temiz bir bez aracılığıyla basınç uygular",
    "Önce turnike bağlar, bezi sonra düşünür",
    "Yalnızca hekim dokunabilir, bez de yasaktır",
  ], 1, "Kan yoluyla bulaş riski vardır. Eldiven, poşet veya kalın bez bir engeldir. Engel yok diye kanamayı seyretmek de doğru değildir; basınç yine uygulanır, sonra eller yıkanır.");

  q("IY72", "yaralanma", "Kırık şüphesini düşündüren bulgulardan hangisi doğrudur?", [
    "Sadece hapşırma",
    "Şekil bozukluğu, şişlik, o bölgeyi hareket ettirememe ve ağrı",
    "Sadece burun kanaması",
    "Sadece öksürük",
  ], 1, "Kemik bütünlüğü bozulunca hat değişir, şişer ve hareket kaybolur. Her ağrı kırık değildir ama şüphe varsa kırıkmış gibi tespit edilir. Yerine oturtmaya çalışmak bulguyu tedavi etmez.");

  q("IY73", "yaralanma", "Burkulmanın ilk dakikalarında hangisi uygundur?", [
    "Sıcak su torbası",
    "İstirahat, soğuk uygulama, bandaj ve yükseltme",
    "Hemen uzun yürüyüş",
    "Sert masaj",
  ], 1, "İlk saatlerde soğuk, damarları daraltıp şişi sınırlar. Sıcak ve masaj kanamayı artırır. Buz doğrudan cilde yapışmaz, bir beze sarılır. Kırık şüphesi varsa sadece soğuk yetmez, tespit ve 112 gerekir.");

  q("IY74", "sok", "Sara nöbeti uzuyor veya peş peşe tekrarlıyorsa ne yapılır?", [
    "Ağza kaşık sokulur",
    "Süre tutulur, 112 aranır, nöbet bitince kişi yan yatırılır",
    "Kollar iple bağlanır",
    "Yüzüne su dökülüp ayıltılır",
  ], 1, "Kısa ve tek nöbet çoğu zaman kendiliğinden biter. Uzaması veya tekrarı acildir. Zapt etmek, kaşık sokmak ve su dökmek yaralar. Çevreyi boşaltmak ve süreyi bilmek sağlık ekibine lazımdır.");

  q("IY75", "tasima", "Kaza yerinde doğum başlarsa ilk yardımcı kordonu kesmeli midir?", [
    "Evet, hemen bıçakla kesip bağlar",
    "Hayır, 112 aranır, bebek temiz örtüye alınır, kordon kesilmez",
    "Bebek ayaklarından sallanır",
    "Anneye hemen ayağa kalkması söylenir",
  ], 1, "Kordonun kesilmesi ve bağlanması sağlık ekibinin işidir. İlk yardımcı bebeği sıcak tutar, solunumunu izler, anneyi yatırıp kanamayı gözler. Rastgele kesmek enfeksiyon ve kanama riskidir.");

  q("IY76", "tasima", "Omurga yaralanması şüphesinde oturtmak neden yanlıştır?", [
    "Kişi rahatlar, omurga düzelir",
    "Omurgayı büker ve omuriliği zedeleyebilir",
    "Sadece boyun kırığında serbest, belde zorunludur",
    "Nabzı ölçmek için şarttır",
  ], 1, "Oturma ve başın altına yüksek yastık, omurgayı eğer. Kişi bulunduğu düzlemde, baş-boyun-gövde hizası bozulmadan bekletilir. Taşımak ancak yangın gibi ikinci bir ölüm riski varsa gündeme gelir.");

  q("IY77", "kanama", "Burun kanamasında bası ne kadar sürdürülür?", [
    "Bir saniye yeter",
    "Yaklaşık 5-10 dakika, ara vermeden",
    "Baş geriye atılarak 30 saniye",
    "Boyuna turnike bağlanarak",
  ], 1, "Pıhtı oluşması için kesintisiz bası gerekir. Arada bakmak pıhtıyı bozar. Başın geriye gitmesi kanı yutağa akıtır. On dakika sonra hâlâ fışkırıyorsa 112 düşünülür.");

  q("IY78", "yaralanma", "Yanıkta kolonya veya alkol sürmek neden yanlıştır?", [
    "Serinlettiği için ilk tercihtir",
    "Yanığı kurutmaz, tahriş eder ve derinleştirebilir",
    "Sadece üçüncü derecede iyidir",
    "Kabarcığı güvenle patlatır",
  ], 1, "Alkol, kolonya, diş macunu ve yoğurt yarayı kimyasal olarak rahatsız eder. Isıyı almak için ılık su yeter. Kabarcık da bu maddelerle patlatılmaz.");

  q("IY79", "abc", "Nabız sayarken başparmak neden kullanılmaz?", [
    "Başparmağın kendi nabzı hissedilip yanlış ölçüm yapılabilir",
    "Başparmakta hiç damar yoktur",
    "Sadece bebekte başparmak kullanılır",
    "Yetişkinde esas nabız yeri başparmaktır",
  ], 0, "Başparmağın kendi atımı, karşıdakinin nabzı sanılabilir. İşaret ve orta parmak kullanılır. Yetişkinde yer şah damarı, bebekte kolun iç yüzüdür.");
})();
