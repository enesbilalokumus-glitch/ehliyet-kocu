(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "motor";

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

  q("MO25", "calisma", "Motorun temel işi hangisidir?", [
    "Yalnızca far yakmak",
    "Yakıttaki enerjiyi tekerleği çevirecek mekanik harekete dönüştürmek",
    "Fren hidroliğini soğutmak",
    "Lastik basıncını ölçmek",
  ], 1, "Motor bir enerji çeviricisidir. Benzinli ve dizelde bu enerji yakıttan gelir. Far, fren ve lastik başka sistemlerdir. Sınav “motor nedir?” diyorsa mekanik iş cevabını ara.");

  q("MO26", "calisma", "Benzinli motorda karışımı ateşleyen parça hangisidir?", [
    "Kızdırma bujisi",
    "Buji",
    "Radyatör kapağı",
    "Debriyaj balatası",
  ], 1, "Benzinli motorda buji kıvılcım çakar. Dizelde buji yoktur, sıcak hava yakıtı tutuşturur. Kızdırma bujisi yalnızca soğuk dizelin ilk çalışmasına yardım eder, her yanmada kıvılcım üretmez.");

  q("MO27", "calisma", "Dizel motorun sıkıştırması benzinliye göre nasıldır?", [
    "Daha düşüktür ve mutlaka buji ister",
    "Daha yüksektir, yakıt bu sıcaklıkla tutuşur",
    "Hava almadığı için sıkıştırma yoktur",
    "Su ile sağlanır",
  ], 1, "Dizel, havayı çok sıkıştırıp ısıtır, yakıtı bu havanın içine püskürtür. Bu yüzden ateşleme bujisi yoktur. Benzinli motorda sıkıştırma daha düşüktür, kıvılcım şarttır.");

  q("MO28", "calisma", "Krank mili ne işe yarar?", [
    "Direksiyonu kilitler",
    "Pistonun inip kalkmasını dönme hareketine çevirir",
    "Fren pedalını sertleştirir",
    "Yakıt deposunu havalandırmaz, onu boşaltır",
  ], 1, "Piston düz gider gelir. Krank bu gidip gelmeyi milin dönüşüne çevirir, hareket şanzımana kadar gider. Direksiyon ve fren ayrı sistemlerdir.");

  q("MO29", "calisma", "Egzozdan sürekli siyah duman çıkması neyi düşündürür?", [
    "Motor yağının bittiğini",
    "Karışımın fazla zengin olduğunu veya havanın yetmediğini",
    "Fren hidroliğinin taştığını",
    "Balansın bozulduğunu",
  ], 1, "Siyah duman, yakıtın tam yanmadan çıktığını gösterir. Kirli hava filtresi havayı kesince de benzer görüntü olur. Mavi duman ise daha çok yağ yanmasına işaret eder.");

  q("MO30", "calisma", "Egzozdan mavi duman çıkması en çok neyi düşündürür?", [
    "Depunun fazla dolu olduğunu",
    "Motorun yağ yaktığını",
    "ABS’nin devrede olduğunu",
    "Lastik basıncının yüksek olduğunu",
  ], 1, "Yağ yanma odasına kaçarsa duman maviye çalar. Segman veya supap lastiği yorulmuş olabilir. Soğuk havada kısa süreli beyaz buharı bununla karıştırma.");

  q("MO31", "calisma", "Egzozdan sürekli yoğun beyaz duman çıkıyorsa ne akla gelir?", [
    "Her zaman zararsız bir su buharıdır",
    "Soğutma suyunun yanma odasına karışıyor olabileceği",
    "Lastiklerin yeni olduğu",
    "Akünün yeni dolduğu",
  ], 1, "Soğuk ilk çalıştırmada kısa beyaz buhar normaldir. Duman sürekli, tatlı kokulu ve su eksiltiyorsa conta veya çatlak suyu silindire alıyor olabilir. Yağ mavi, zengin karışım siyah dumana daha yakındır.");

  q("MO32", "yag", "Motor yağını çubuktaki üst çizginin çok üzerine doldurmak neden sakıncalıdır?", [
    "Ne kadar fazla yağ olursa motor o kadar sağlıklı olur",
    "Yağ köpürüp kaçak ve keçe zararı yapabilir",
    "Fren pedalı sertleşir",
    "Farlar daha parlak yanar",
  ], 1, "Yağın da azı da fazlası zararlıdır. Fazlası krank tarafından çırpılıp köpürür, basınç düzensizleşir. Seviye, düz zeminde ve motor durmuşken iki çizgi arasında olmalıdır.");

  q("MO33", "yag", "Yağ çubuğundaki yağ süt gibi beyazlaşmışsa ne düşünülür?", [
    "Yağ çok temizdir",
    "Yağın içine su karışmış olabilir",
    "Fren hidroliği yerine kullanılabilir",
    "Daha iyi bir yağdır, değiştirilmez",
  ], 1, "Su ile yağ karışınca görünüm sütümsü olur. Conta veya soğutma kaçağı şüphesi vardır. Böyle yağla yola devam etmek yatakları susuz ve yağsız bırakabilir. Servis ister.");

  q("MO34", "yag", "Tıkalı yağ filtresi neye yol açar?", [
    "Lastik dişini artırır",
    "Yağın parçalara düzenli gitmesini bozar",
    "Fren pedalını uzatır",
    "Aküyü şarj eder",
  ], 1, "Filtre, yağın içindeki talaş ve kurumu tutar. Tıkanınca yağ ya az dolaşır ya da by-pass’tan süzülmeden gider. Filtre, yağ değişiminin parçasıdır, süs değildir.");

  q("MO35", "yag", "Motor ısındıktan sonra hararet ibresi normalde nerede durur?", [
    "Sürekli kırmızı bölgede",
    "Çalışma sıcaklığında, genellikle ortaya yakın",
    "Sürekli sıfırda",
    "Göstergenin dışında",
  ], 1, "Motor verimli çalışmak için belirli bir sıcaklık ister. İbre ortaya yaklaşıp orada kalır. Kırmızıya çıkması soğutmanın yetmediğini, sürekli soğuk kalması termostatın açık takılı kalabileceğini düşündürür.");

  q("MO36", "yag", "Soğutma fanının görevi nedir?", [
    "Yakıtı enjekte etmek",
    "Radyatörden geçen havayı artırıp suyun ısısını almak",
    "Vites değiştirmek",
    "Debriyajı ayırmak",
  ], 1, "Araç yavaşken veya dururken rüzgâr yetmez. Fan, radyatör peteklerinin arasından havayı çeker. Fan dönmüyorsa trafik ışığında hararet yükselebilir.");

  q("MO37", "yag", "V kayışı veya tahrik kayışı koparsa hangisi görülebilir?", [
    "Sadece radyo susar, soğutma etkilenmez",
    "Şarj kesilebilir ve birçok araçta su pompası da durabilir",
    "Lastikler kendiliğinden şişer",
    "Fren hidroliği artar",
  ], 1, "Aynı kayış çoğu araçta alternatörü ve su pompasını döndürür. Kopunca akü lambası yanar, bir süre sonra hararet çıkar. Yeni kayış takılmadan “biraz daha giderim” demek motoru kaynatır.");

  q("MO38", "elektrik", "Atan sigortanın yerine kalın tel bağlamak neden tehlikelidir?", [
    "Tel, sigortadan daha güvenlidir",
    "Aşırı akım kesilmez, kablo ısınıp yangın çıkarabilir",
    "Yağ basıncını yükseltir",
    "ABS’yi güçlendirir",
  ], 1, "Sigorta, fazla akımda eriyip devreyi açan zayıf halkadır. Onu kalın telle köprülemek korumayı kaldırır. Aynı amperde yeni sigorta takılır, tekrar atıyorsa kısa devre aranır.");

  q("MO39", "elektrik", "Akü takviyesinde kutuplar nasıl bağlanır?", [
    "Artı eksiye, eksi artıya",
    "Artı artıya, eksi eksiye",
    "İkisi de şasiye, kutuplar boş kalır",
    "Rastgele, akü kendini düzeltir",
  ], 1, "Aynı kutuplar birleşir. Ters bağlamak sigortayı, alternatörü ve beyinleri yakabilir. Kıvılcım çıkarmamak için son klemp dikkatle takılır. Takviyeden sonra motor bir süre çalışıp aküyü doldurmalıdır.");

  q("MO40", "elektrik", "Marş motoruna uzun süre basılı tutmak neden zarar verir?", [
    "Marş, yakıtı soğutan bir parçadır, ısınmaz",
    "Marş motoru aşırı ısınır",
    "Lastik basıncı düşer",
    "Yağ çoğalır",
  ], 1, "Marş, kısa süreli yüksek akım çeken bir elektrik motorudur. Dakikalarca basmak sargıyı yakar ve aküyü bitirir. Çalışmıyorsa birkaç saniye dene, ara ver, sonra akü ve yakıta bak.");

  q("MO41", "elektrik", "Akü asidi için hangisi doğrudur?", [
    "Ele ve göze zararsızdır",
    "Tahriş eder, kutuplar ters bağlanmaz",
    "İçilebilir",
    "Lastiğe sürülürse diş derinliği artar",
  ], 1, "Akü asidi cildi ve gözü yakar. Kutup sökülürken artı taraf dikkat ister, metal bilezik kıvılcım üretir. Ters bağlantı elektronik aksamı bozar. İş bitince eller yıkanır.");

  q("MO42", "aktarma", "Otomatik viteste seyir halinde P veya R konumuna almak ne yapar?", [
    "Yakıt tasarrufu sağlar",
    "Şanzımana ve aktarma organlarına zarar verebilir",
    "El freninin yerine geçer",
    "Motoru soğutur",
  ], 1, "P park kilididir, R geri vitestir. Araç giderken bunlara geçmek dişlileri zorlar. Durunca fren basılıyken P’ye alınır. Uzun inişte N’ye almak da kontrolü azaltır.");

  q("MO43", "aktarma", "Otomatik vitesli araçta marşa genellikle hangi konumda basılır?", [
    "D konumunda gazlayarak",
    "P veya N konumunda, fren basılıyken",
    "R konumunda",
    "El freni inik, gaz açıkken",
  ], 1, "Güvenlik anahtarı, araç vitesteyken marşın aracı zıplatmasını önler. P veya N dışında marş çoğu araçta çalışmaz. Fren basılı olmak, vites düşünce aracın fırlamasını keser.");

  q("MO44", "aktarma", "Sol ayağın sürekli debriyaj pedalının üzerinde durması neye yol açar?", [
    "Balatanın ömrünü uzatır",
    "Balatayı ısıtıp kavrama kaçırmasına yol açabilir",
    "Fren hidroliğini yeniler",
    "Lastiği soğutur",
  ], 1, "Pedala binen küçük bir yük bile balatayı sıyırır. Ayak yerde durur, debriyaj sadece vites anında basılır. Kaçıran debriyajda devir yükselir, hız artmaz.");

  q("MO45", "aktarma", "Geri vites ne zaman takılır?", [
    "Yüksek hızda giderken",
    "Araç neredeyse durmuşken",
    "Sollama sırasında",
    "Otoyolda şerit değiştirirken",
  ], 1, "Geri dişlisi ileri giderken takılırsa şanzıman zorlanır. Araç durmaya yakınken, çevreyi kontrol ederek takılır. Otoyolda geri gitmek zaten yasaktır.");

  q("MO46", "fren", "Sert frenlemede pedal titriyorsa bu her zaman arıza mıdır?", [
    "Evet, fren bitmiştir",
    "Hayır, ABS devreye girince pedalda titreşim hissedilebilir",
    "Evet, yağ lambasıyla aynı anlamdadır",
    "Evet, lastik mutlaka patlamıştır",
  ], 1, "ABS, tekerlek kilitlenmesin diye freni çok hızlı bırakıp tutar. Bu, pedalda nabız gibi hissedilir ve çalıştığının işareti olabilir. Titreme her hızda, fren yokken varsa balans ayrı düşünülür.");

  q("MO47", "fren", "El freni kalkık unutulup yola çıkılırsa ne olur?", [
    "Sadece yakıt düşer, başka belirti yoktur",
    "Arka frenler ısınır, koku gelir, çekiş düşer",
    "Farlar söner",
    "Radyatör taşar",
  ], 1, "El freni çoğu otomobilde arka tekerleği tutar. İnik unutulursa balata ısınır, yanık koku gelir, araç isteksiz hızlanır. Kalkıştan önce ibreye ve frenin boşta olduğuna bakılır.");

  q("MO48", "fren", "Frene basınca araç bir yana çekiyorsa ne akla gelir?", [
    "Bu, düzgün frenlemenin işaretidir",
    "Bir taraftaki balata veya fren düzeni daha zayıf olabilir",
    "Yağ fazla konmuştur",
    "Depo fazla doludur",
  ], 1, "İki tekerlek aynı kuvvetle tutmuyorsa araç çeker. Balata, hortum veya kaliper tek tarafta kalmış olabilir. Rot arızası da çekiş yapar ama o, fren pedalına bağlı olmadan da görülebilir.");

  q("MO49", "fren", "ESP neyi azaltmaya çalışır?", [
    "Yakıt deposunun boşalmasını",
    "Aracın savrulup sürücünün istediği çizgiden çıkmasını",
    "Lastiğin havasını",
    "Kornanın sesini",
  ], 1, "ESP, kaymayı fark edince tek tek tekerleğe fren uygular ve motor gücünü kısmayı dener. ABS kilitlenmeyi, ASR patinajı, ESP ise savrulmayı hedefler. Üçü aynı lamba değildir.");

  q("MO50", "fren", "ASR’nin baktığı sorun hangisidir?", [
    "Direksiyon kilidinin açılması",
    "Çekiş tekerleğinin boşta patinaj yapması",
    "Hava yastığının açılması",
    "Kornanın bozulması",
  ], 1, "ASR, gaz fazla kaçınca tekerleğin boşa dönmesini frenleyerek veya gücü keserek azaltır. Buzda patinajı tamamen yok etmez. ESP ile karıştırılır ama ASR çekiş kaymasına bakar.");

  q("MO51", "fren", "Lastik hava basıncı ne zaman ölçülür?", [
    "Uzun yoldan yeni inmiş, lastik çok sıcakken",
    "Lastik soğukken",
    "Sadece stepne, diğerleri önemli değil",
    "Motor yüksek devirdeyken",
  ], 1, "Sıcak lastiğin içindeki hava genleşir, ölçüm yüksek çıkar. Sabah veya uzun süre durmuşken bakmak doğrudur. Stepne de dahil edilir. Düşük basınç omuzları yer, yüksek basınç ortayı yer.");

  q("MO52", "fren", "Sürekli yüksek hava basıncı lastiği nasıl aşındırır?", [
    "İki omuzu birden",
    "Sırtın ortasını",
    "Hiç aşındırmaz",
    "Diş derinliğini artırarak",
  ], 1, "Fazla şişmiş lastik ortası üzerinde yürür. Az şişmiş lastik ise yan omuzlarda yer, ısınır ve yakıtı artırır. İkisi de 1,6 mm kuralından bağımsız bir aşınma biçimidir.");

  q("MO53", "fren", "Rot ayarı bozuk bir araçta hangi belirti daha tipiktir?", [
    "Yalnızca belirli bir hızda direksiyon titremesi",
    "Aracın bir yana çekmesi ve lastiğin içten ya da dıştan yenmesi",
    "Yağ lambasının yanması",
    "Akünün bitmesi",
  ], 1, "Rot, tekerleğin yola basma açısıdır. Bozulunca araç çeker, lastik tek omuzdan yer. Belirli hızdaki titreme daha çok balans veya eğri janttır. İki arıza yan yana şık olur, karıştırma.");

  q("MO54", "fren", "Aynı aksta biri çok aşınmış, deseni bambaşka iki lastik kullanmak neden sakıncalıdır?", [
    "Tutuşu ve fren dengesini bozar",
    "Hiçbir etkisi yoktur",
    "Fren mesafesini her zeminde yarıya indirir",
    "Yasal olarak zorunludur",
  ], 0, "İki tekerlek aynı anda aynı kuvvetle tutamazsa araç fren ve virajda kayar. Aynı aksta benzer yapı ve yakın diş derinliği aranır. 1,6 mm her lastik için ayrı bir tabandır.");

  q("MO55", "ikaz", "Gösterge panelindeki mavi lamba çoğunlukla neyi bildirir?", [
    "Motor yağının bittiğini",
    "Uzun farın açık olduğunu",
    "Hararet yaptığını",
    "Kapının açık olduğunu, her araçta",
  ], 1, "Mavi, bilgilendirmedir ve genellikle uzun huzmeyi gösterir. Kırmızı yağ, hararet ve şarj ise durmayı gerektirir. Rengi okumadan her lambayı aynı sanmak şık kaybettirir.");

  q("MO56", "ikaz", "Yeşil yanıp sönen ok şeklindeki lamba neyi gösterir?", [
    "Motorun stop ettiğini",
    "Sinyalin çalıştığını",
    "Fren hidroliğinin bittiğini",
    "Alternatörün üretmediğini",
  ], 1, "Sinyal lambası yeşil oktur ve ritmle yanar. Hızlı yanıyorsa bir ampul yanmış olabilir. Kırmızı bir lamba gibi “motoru kapat” anlamına gelmez.");

  q("MO57", "ikaz", "Yakıt ibresi lambası ile kırmızı yağ lambası aynı aciliyette midir?", [
    "Evet, ikisi de motoru anında dağıtır",
    "Hayır, yakıt lambası deponun azaldığını söyler; yağ lambası basınç kaybıdır",
    "Evet, ikisi de lastik basıncıdır",
    "Hayır, yağ lambası sadece depo dolu demektir",
  ], 1, "Yakıt lambası sarıya yakındır ve “yakında al” der. Yağ lambası kırmızıdır ve basınç yoksa motoru stop ettirir. Renk ve simgeyi birlikte oku.");

  q("MO58", "ikaz", "Kontak açılınca ABS lambası kısa süre yanıp sönüyorsa bu her zaman arıza mıdır?", [
    "Evet, lamba hiç yanmamalıdır",
    "Hayır, açılışta sistem kendini yokluyor olabilir; sönmezse arıza düşünülür",
    "Evet, fren hidroliği fazla demektir",
    "Hayır, lamba yanık kaldıkça ABS daha iyi çalışır",
  ], 1, "Birçok lamba kontak açılınca kendini dener, motor çalışınca söner. Sönmeyen ABS lambası, kilitlenme korumasının devre dışı kalabileceğini söyler. Normal fren çoğu zaman durmaya devam eder.");

  q("MO59", "calisma", "Kurum bağlamış bir buji motorda neye yol açar?", [
    "Çekişi artırır",
    "Teklemeye ve düzensiz çalışmaya",
    "Lastikleri şişirir",
    "Direksiyonu kilitler",
  ], 1, "Buji kıvılcımı zayıfsa karışım tam ateşlenmez, motor tekleme yapar ve yakıt artar. Dizelde bu parça ateşleme bujisi değildir. Buji benzinli motorun işidir.");

  q("MO60", "calisma", "Egzoz borusu delikse hangi iki sonuç beklenir?", [
    "Ses azalır ve fren güçlenir",
    "Ses artar, gaz kabine sızabilir",
    "Yağ çoğalır ve far parlar",
    "Lastik diş derinliği artar",
  ], 1, "Delik egzoz hem gürültüdür hem karbonmonoksiti içeri alabilir. Kapalı camda baş ağrısı ve uyku hali bu yüzden ciddiye alınır. Katalitik parça da bu hatta durur, zararlı gazı azaltmaya çalışır.");

  q("MO61", "yag", "Gereksiz yere yüksek rölantide beklemek neyi artırır?", [
    "Yakıt tüketimini",
    "Lastik diş derinliğini",
    "Fren hidroliğini",
    "Akü asidini",
  ], 0, "Rölanti de yakıt yakar ve egzoz üretir. Isınmak için dakikalarca beklemek çoğu modern motorda gerekmez. Trafik ve çevre dersi de aynı davranışı sorabilir.");

  q("MO62", "ikaz", "Farlar çok yukarı ayarlıysa gece ne olur?", [
    "Karşı şerit daha iyi görür, bu iyidir",
    "Karşıdan gelenin gözü alınır",
    "Yağ basıncı yükselir",
    "ABS devreye girer",
  ], 1, "Far ayarı, ışığı yola düşürmelidir, karşı göz hizasına değil. Yük bindirince arka çöker, far yukarı bakar. Ayar bozulunca uzun far kapalı olsa bile kısa far kör edebilir.");

  q("MO63", "elektrik", "Marş yavaş çeviriyor ve farlar cılızsa ilk akla gelen nedir?", [
    "Diferansiyelin kilitlendiği",
    "Akünün zayıf olduğu veya şarjın yetmediği",
    "Hava filtresinin yeni olduğu",
    "Lastik dişinin fazla olduğu",
  ], 1, "Marş ve far aynı aküden beslenir. İkisi birden zayıfsa akü bitmiş veya alternatör dolduramıyor olabilir. Tek bir far sönükse o ampul veya sigorta ayrı düşünülür.");

  q("MO64", "aktarma", "Volan neye yardım eder?", [
    "Fren diskini soğutmaya",
    "Motorun dönüşünü daha düzgün sürdürmeye",
    "Radyatör suyunu kaynatmaya",
    "Sileceği çalıştırmaya",
  ], 1, "Volan, krank miline bağlı ağır bir çemberdir. Patlamalar arasındaki boşlukta dönüşün durmasını zorlaştırır. Debriyaj da çoğu araçta volanın yüzeyine bastırır.");

  q("MO65", "calisma", "Emme supabı hangi zamanda açılır?", [
    "Egzoz gazını içeri almak için iş zamanında",
    "Temiz havanın veya karışımın silindire girmesi için emme zamanında",
    "Fren sırasında",
    "Direksiyon kırılınca",
  ], 1, "Dört zamanın ilki emmedir. Emme supabı açılır, piston aşağı inerken silindir dolar. Egzoz supabı ise yanmış gazı dışarı atar. Sıra emme, sıkıştırma, iş, egzozdur.");

  q("MO66", "yag", "Genleşme kabındaki su seviyesi ne zaman kontrol edilir?", [
    "Motor kaynarken kapak açılarak",
    "Motor soğumuşken",
    "Yağ çubuğu çekilerek",
    "Lastik sıcakken",
  ], 1, "Sıcak sistem basınçlıdır, kapak açılınca su fışkırır. Seviye soğukken, kap üzerindeki işaretlere bakılarak kontrol edilir. Eksikse motor soğukken tamamlanır, kızgın bloğa buz gibi su boca edilmez.");

  q("MO67", "fren", "Tekerlek bijonları gevşek kalırsa ne olur?", [
    "Hiçbir şey, bijon süstür",
    "Tekerlek oynamaya başlar, yolda çıkabilir",
    "Fren hidroliği artar",
    "Yağ basıncı düzelir",
  ], 1, "Bijon tekerleği göbeğe bağlar. Biri eksik veya gevşekse yük diğerlerine biner, sarsıntı ve kopma riski doğar. Lastik değişince bijonlar, araç biraz gidince yeniden kontrol edilir.");

  q("MO68", "fren", "Lastiğin yanağında kesik veya balon varsa ne yapılır?", [
    "Diş 1,6 mm üstündeyse kullanılmaya devam edilir",
    "Lastik değiştirilir",
    "Sadece basınç yükseltilir",
    "Balonun üstü bantlanır",
  ], 1, "Yanak, lastiğin taşıyıcı kısmıdır. Kesik ve balon patlamanın habercisidir. Diş derinliği 1,6 mm kuralı sırt içindir, yanağı sağlam saymaz. Bant ve yüksek basınç bunu iyileştirmez.");

  q("MO69", "ikaz", "Sarı motor arıza lambası seyirde yandıysa bu ne anlama gelir?", [
    "Depo yeni dolmuştur",
    "Motor yönetim sisteminde bir arıza olabilir, ilk fırsatta bakılır",
    "Uzun far açıktır",
    "Yağ fazla konmuştur, lamba onu kutlar",
  ], 1, "Sarı lamba “hemen dağılırsın” demek zorunda değildir ama sistemi kendisi kısıtlıyor olabilir. Çekiş düşer, yakıt artar. Kırmızı yağ ve hararetten farkı, rengin aciliyetidir. Yine de görmezden gelinmez.");
})();
