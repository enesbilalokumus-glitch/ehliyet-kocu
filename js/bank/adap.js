(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "adap";

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
    "AD01",
    "fark",
    "Trafik adabı ile trafik kuralı arasındaki fark hangisinde doğru verilmiştir?",
    [
      "İkisi de aynı şeydir; ikisinin de cezası trafikte yazılmaz",
      "Kural yasal zorunluluktur, adap yazılı cezadan önce gelen saygı ve sorumluluk tutumudur",
      "Adap yalnızca polisin bağırdığı andır",
      "Kural isteğe bağlı, adap zorunludur ve para cezası adapdan yazılır",
    ],
    1,
    "Kurala uymamak yaptırım doğurur. Adap, yaptırım olmasa da başkasının hakkını ve huzurunu gözetmektir. Bir davranış hem kural hem adap olabilir; ambulansa yol vermek böyledir. “Ceza yoksa yapılabilir” düşüncesi adabın tersidir."
  );

  q(
    "AD02",
    "fark",
    "Aşağıdakilerden hangisi trafik adabına uymaz?",
    [
      "Yayaya geçitte öncelik vermek",
      "Hata yapan sürücüyü kornayla kovalayıp sıkıştırmak",
      "Arızalı araca güvenli bir yerde yardım etmek",
      "Sinyali zamanında vermek",
    ],
    1,
    "Adap, hatayı ikinci bir tehlikeye çevirmemektir. Sürekli korna, selektör ve tampona yapışmak hem öfkeyi büyütür hem kazaya davetiye çıkarır. Yardım, sinyal ve yaya önceliği adabın içindedir."
  );

  q(
    "AD03",
    "deger",
    "Geçiş hakkı sende olduğu halde, sıkışıp yolu tıkayan araca yol vermen en çok hangi değeri karşılar?",
    [
      "Feragat",
      "Umursamazlık",
      "Rekabet",
      "Gizlilik",
    ],
    0,
    "Feragat, hakkın sende olduğunu bile bile o haktan vazgeçebilmektir. Amaç kazanmak değil akışın çözülmesidir. Rekabet ve “benim sıram” inadı kavşağı kilitler. Sınav, feragati genellikle bu örnekle sorar."
  );

  q(
    "AD04",
    "deger",
    "Kendini karşı sürücünün veya yayanın yerine koymak hangi kavramdır?",
    [
      "Empati",
      "Refleks",
      "Takip mesafesi",
      "Abs",
    ],
    0,
    "Empati, “ben de o kör noktada olsam ne görmek isterdim?” diye düşünmektir. Yaşlı yayaya, yeni sürücüye ve çocuğa ekstra süre tanımak buradan gelir. Refleks bir değer değildir, ABS ise fren sistemidir."
  );

  q(
    "AD05",
    "deger",
    "Başkasının yararını kendi aceleciliğinin önüne koymak hangi değerdir?",
    [
      "Bencillik",
      "Diğerkâmlık",
      "Kayıtsızlık",
      "İnat",
    ],
    1,
    "Diğerkâmlık, karşılığını hemen beklemeden başkasını gözetmektir. Ambulansın geçmesi için kendi yeşilinde bir metre geri almak, yağmurda yayaya su sıçratmamak bu kapsamdadır. İnat ve kayıtsızlık şıkları tanımı ters çevirir."
  );

  q(
    "AD06",
    "deger",
    "Yaptığın hatanın sonucunu üstlenip olay yerinde kalmak en çok hangisidir?",
    [
      "Sorumluluk",
      "Feragat",
      "Gösteriş",
      "Tesadüf",
    ],
    0,
    "Sorumluluk, davranışının hesabını taşımaktır. Olay yerini terk etmek, suçu başkasına yıkmak ve “görmedim” diye geçiştirmek sorumluluğun tersidir. Feragat hakktan vazgeçmektir; burada üstlenme vardır, vazgeçme değil."
  );

  q(
    "AD07",
    "iletisim",
    "Trafikte iletişimin büyük bölümü neden sözsüzdür?",
    [
      "Çünkü sürücüler birbirinin sesini cam kapalıyken duyamaz; sinyal, şerit konumu, hız ve selektör mesajdır",
      "Çünkü konuşmak zorunlu, sinyal isteğe bağlıdır",
      "Çünkü korna her cümlenin yerine geçer",
      "Çünkü levhalar yalnızca süs içindir",
    ],
    0,
    "Karşıdaki senin niyetini sinyalden, konumundan ve hızından okur. Geç verilen sinyal, şerit içinde salınmak ve sebepsiz selektör belirsizlik üretir. İletişim ne kadar erken ve sade olursa o kadar az korna gerekir."
  );

  q(
    "AD08",
    "iletisim",
    "Korna hangi amaçla kullanılır?",
    [
      "Tanıdık sürücüyü selamlamak ve öfkeyi göstermek için uzun uzun",
      "Yakın bir tehlikeyi kısaca haber vermek için",
      "Işık yeşile döner dönmez önündekini kaldırmak için",
      "Düğünde ritim tutmak için, yerleşim yerinde de serbesttir",
    ],
    1,
    "Korna bir uyarıdır, konuşma dili veya ceza aracı değildir. Uzun korna karşıdaki sürücünün dikkatini yola değil sana çevirir. Yerleşim yerinde gereksiz korna ayrıca gürültü sayılır. Tehlike kısaysa korna da kısa olur."
  );

  q(
    "AD09",
    "iletisim",
    "Öndeki aracı uzun süre selektörle rahatsız etmek nasıl değerlendirilir?",
    [
      "Nazik bir hatırlatma ve her zaman haklı bir davranış",
      "Gözü yoran, öfke büyüten ve adaba aykırı bir baskı",
      "Geçiş üstünlüğü kazanma yolu",
      "Sis lambasının doğru kullanımı",
    ],
    1,
    "Kısa selektör, “buradayım” diyebilir. Israrlı uzun far karşı sürücünün gözünü alır ve ya panik fren ya da inat üretir. Sollayacaksan mesafe, sinyal ve sabır vardır; farla itmek hem güvenlik hem adap sorunudur."
  );

  q(
    "AD10",
    "ofke",
    "Sana hatalı şerit değiştiren bir sürücüye karşı doğru tutum hangisidir?",
    [
      "Öndeki aracı sıkıştırmak ve camı açıp bağırmak",
      "Mesafe açıp olayı büyütmemek",
      "Aynı hatayı bilerek iade etmek",
      "Emniyet şeridinden gidip önünü kesmek",
    ],
    1,
    "Trafik öfkesi ikinci kazanın bahanesi olur. Doğru tutum mesafeyi açmak, varsa güvenli yerde durmak ve intikam almamaktır. Emniyet şeridinden ceza kesmek hem yasaktır hem arkadaki gerçek acil aracı da kapatır."
  );

  q(
    "AD11",
    "deger",
    "Yaşlı veya engelli bir yaya karşıdan karşıya geçmeye çalışırken ne beklenir?",
    [
      "Hızını kesip geçişi bitirmesine zaman tanımak",
      "Korna çalıp hızlanmak",
      "Yayanın senden daha hızlı olması gerektiğini düşünmek",
      "Su birikintisine yakın geçip yoluna devam etmek",
    ],
    0,
    "Sabır ve saygı, karşıdaki insanın hızına göre ayar yapmaktır. Engelli, yaşlı, çocuk ve hamile yaya daha yavaştır. Onları acele ettirmek veya su sıçratmak adabın sorulduğu tipik olumsuz şıklardır."
  );

  q(
    "AD12",
    "fark",
    "“Kurala yalnızca ceza yememek için uyuyorum” düşüncesi neden adaba yetmez?",
    [
      "Çünkü adap, denetim yokken de doğru davranmayı ister",
      "Çünkü ceza zaten hiç yazılmaz",
      "Çünkü kurallar isteğe bağlıdır",
      "Çünkü adap sadece kornanın ses tonudur",
    ],
    0,
    "Adap içten gelen bir ölçüdür. Polis yok diye yaya geçidini yok saymak, gece boş yol diye emniyet şeridinde uçmak, kural yazılmamış olsa bile başkasının canını araç saymaktır. Sınav bu cümleyi sık sık “hangisi adap değildir?” diye sorar."
  );

  q(
    "AD13",
    "iletisim",
    "Sinyal vermeden şerit değiştirmek karşı sürücüde neye yol açar?",
    [
      "Karar için zaman kalmaz, ani fren veya sapma gerekir",
      "Hiçbir şeye, çünkü ayna zorunlu değildir",
      "Geçiş üstünlüğü doğar",
      "Takip mesafesi kendiliğinden kısalır ve bu iyidir",
    ],
    0,
    "Sinyal bir ricadır ve bir haberdir: “şerit değiştireceğim”. Haber gelmezse arkadaki mesafe hesabını yanlış yapar. Sinyal vermek tek başına yetmez; ayna ve omuz kontrolünden sonra, yer açılmışsa değişilir. Sinyal hak yaratmaz, niyet bildirir."
  );

  q(
    "AD14",
    "ofke",
    "Trafikte hoşgörü neyi kapsar?",
    [
      "Başkasının küçük hatasını büyütmemeyi ve akışı sürdürmeyi",
      "Her kuralı yok saymayı",
      "Yalnızca tanıdık araçlara yol vermeyi",
      "Hız sınırını isteyene göre esnetmeyi",
    ],
    0,
    "Hoşgörü, “ben de hata yapabilirim” deyip küçük kusuru kavga sebebi yapmamaktır. Kuralsızlığı övmek değildir. Hız sınırını esnetmek hoşgörü değil ihlaldir. Ayrım burada: insanı affetmek başka, levhayı silmek başka."
  );

  q(
    "AD15",
    "deger",
    "Yolda kalmış bir araca yardım ederken adapla birlikte güvenliği de gözeten davranış hangisidir?",
    [
      "Olduğun şeritte, emniyet üçgeni koymadan kaputu açmak",
      "Aracı mümkünse güvenli alana aldırmak, görünür olmak ve gerekirse 112’yi aramak",
      "Arkadan gelen trafik dursun diye yolun ortasında beklemek",
      "Çekici gelene kadar otoyol şeridinde itmek",
    ],
    1,
    "Yardım etme değeri, kendini ve karşıyı ikinci kazaya sokmadan yapılır. Üçgen, dörtlü, güvenli cep ve görünür kıyafet bunun parçasıdır. Otoyol şeridinde itmek ve kör noktada durmak iyi niyeti kazaya çevirir."
  );

  q(
    "AD16",
    "fark",
    "Ambulansa yol vermek yalnızca trafik adabı mıdır?",
    [
      "Hayır; görev aracına yol vermek aynı zamanda yasal zorunluluktur, adap da bunu destekler",
      "Evet; ceza yoktur, sadece ayıplanır",
      "Evet; ister yol verirsin ister vermezsin",
      "Hayır; ambulans diğer araçlarla aynı önceliğe sahiptir",
    ],
    0,
    "Sesli ve ışıklı uyarısı açık görev aracı geçiş üstünlüğüne sahiptir, yol vermemek kural ihlalidir. Adap ise bunu “zorunda olmasan da yap” diye değil, “birinin hayatı söz konusu” diye içselleştirir. Soru “sadece adap mı?” diyorsa cevap hayırdır: hem kural hem adap."
  );

  q(
    "AD17",
    "iletisim",
    "Toplu taşıma durağından çıkan otobüse karşı hangi tutum adaba uygundur?",
    [
      "Duraktan çıkan aracı sıkıştırıp öne geçmeye çalışmak",
      "Otobüsün güvenli biçimde şeride katılmasına fırsat vermek",
      "Durağın önüne park edip yolcuyu yola indirmek",
      "Kapılar kapanmadan önce önünden hızla geçmek",
    ],
    1,
    "Otobüs ve minibüs duraktan çıkarken geniş bir alana ihtiyaç duyar, kör noktaları fazladır. Yol vermek akışı hızlandırır. Durağın önüne park etmek hem çoğu yerde yasaktır hem yolcuyu aracın önüne iter."
  );

  q(
    "AD18",
    "ofke",
    "Aşağıdakilerden hangisi trafik adabının temel değerlerinden biri değildir?",
    [
      "Saygı",
      "Sorumluluk",
      "Başkasına üstünlük taslamak",
      "Sabır",
    ],
    2,
    "Temel değerler saygı, sabır, hoşgörü, empati, feragat, diğerkâmlık, yardımlaşma ve sorumluluktur. Üstünlük taslamak, güçlü araçla zayıfı ezmek ve “yol benim” demek bu listenin karşıtıdır. “Hangisi değildir?” sorusunda değer gibi görünen olumsuz şıkkı seç."
  );
})();
