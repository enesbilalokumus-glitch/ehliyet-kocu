(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "adap";

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

  q("AD19", "deger", "Trafik adabında saygı en çok hangisini anlatır?", [
    "Güçlü aracın yolu kapatmasını",
    "Karşıdaki insanın hakkını ve varlığını tanımayı",
    "Korna ile selamlaşmayı",
    "Hız yarışını",
  ], 1, "Saygı, yayayı, yolcuyu ve diğer sürücüyü engel değil insan olarak görmektir. Araç büyük diye öncelik doğmaz. Korna ile selam, saygının tanımı değildir.");

  q("AD20", "deger", "Sabır, trafikte hangi davranışa uyar?", [
    "Öndeki araç bir saniye gecikince kornaya sarılmak",
    "Karşıdaki yavaş da olsa akışı kavgaya çevirmemek",
    "Emniyet şeridinden ceza kesmek",
    "Kuyrukta makas atmak",
  ], 1, "Sabır, herkesin aynı hızda olamayacağını kabul etmektir. Korna ve sıkıştırma sabırsızlığın sesidir. Sabır, hız sınırını yok saymak anlamına da gelmez.");

  q("AD21", "fark", "Polis görünmüyorken kurala uymak neden adabın içindedir?", [
    "Çünkü denetim yoksa kural zaten kalkar",
    "Çünkü adap, ceza ihtimali olmasa da doğru davranmayı ister",
    "Çünkü gece ihlal serbesttir",
    "Çünkü sadece ceza varsa uyulur",
  ], 1, "Kuralın yaptırımı vardır, adabın ölçüsü ise denetimden bağımsızdır. Görülmüyorum diye yaya geçidini yok saymak bu ölçünün dışındadır.");

  q("AD22", "iletisim", "Şerit değiştirme sinyalini son anda vermek karşı sürücüde ne yaratır?", [
    "Bolca karar süresi",
    "Mesafe hesabının bozulması ve ani tepki ihtiyacı",
    "Geçiş üstünlüğü",
    "Takip mesafesinin yasal olarak sıfırlanması",
  ], 1, "Sinyal bir haberdir. Haber geç gelirse arkadaki fren veya sapma için zaman bulamaz. Erken sinyal belirsizliği azaltır, yine de ayna kontrolünün yerine geçmez.");

  q("AD23", "ofke", "Araçların arasından makas atarak ilerlemek nasıl değerlendirilir?", [
    "Ustalık ve adap göstergesi",
    "Hem kaza riski hem başkalarının hakkını yok saymak",
    "Feragat örneği",
    "Empati örneği",
  ], 1, "Makas, birkaç saniye için birçok kişinin frenine mal olur. Bu ne feragattir ne empati. Akış, sırayı bozmadan gider.");

  q("AD24", "ofke", "Kuyruğun en önüne, bekleyenlerin arasından sokulmak hangi değerle çelişir?", [
    "Diğerkâmlık ve saygıyla",
    "Hız tutkusunu öven bir değerle, çünkü bu övülür",
    "Hiçbiriyle, çünkü kuyrukta sıra yoktur",
    "Sadece geceleyin çelişir, gündüz haktır",
  ], 0, "Sıra, bekleyen herkesin hakkıdır. Önüne geçmek kendi aceleni onların zamanından çalmaktır. Diğerkâmlık bunun tersini, başkasını gözetmeyi ister.");

  q("AD25", "fark", "Engelli park yerine durmak yalnızca ayıplanan bir davranış mıdır?", [
    "Evet, hiçbir kuralı yoktur",
    "Hayır, aynı zamanda kural ihlalidir; saygısızlık da adaba uymaz",
    "Evet, feragat sayılır",
    "Hayır, çünkü o yerler herkese açıktır",
  ], 1, "Engelli yeri hem levhayla korunur hem o insanın inip binmesi için vardır. Park etmek cezalık bir ihlaldir. Adap, ceza olmasa da o yeri boş bırakmanı ister.");

  q("AD26", "deger", "Yağmurda kaldırımdaki yayanın üzerine su sıçratmamak hangisine girer?", [
    "Gereksiz bir incelik, sınavda önemsiz",
    "Saygı ve diğerkâmlık",
    "Sollama tekniği",
    "Hız göstergesi ayarı",
  ], 1, "Bir su birikintisinin içinden hızla geçmek karşıdakini ıslatır. Biraz yana açılmak veya yavaşlamak kimseye puan kaybettirmez. Sınav bunu saygı ve başkasını düşünmek diye sorar.");

  q("AD27", "iletisim", "Yerleşim yerinde düğün konvoyu diye uzun uzun korna çalmak neden sorunludur?", [
    "Geçiş üstünlüğü kazandırdığı için değil, gürültü ve sahte alarm yarattığı için",
    "Çünkü korna yalnızca otoyolda çalışır",
    "Çünkü düğün araçları yasal olarak ambulans sayılır",
    "Çünkü gündüz korna zorunludur",
  ], 0, "Korna tehlike uyarısıdır. Sevinç, tempo ve selam için uzun çalınması hem gürültüdür hem diğer sürücünün gerçek bir alarmı ayırt etmesini bozar. Düğün konvoyunun geçiş üstünlüğü yoktur.");

  q("AD28", "ofke", "Hatalı şerit değiştirenin önünü kesip durdurmak neden adaba uymaz?", [
    "Çünkü ders vermek ilk yardımdır",
    "Çünkü yeni bir kaza riski yaratır",
    "Çünkü feragat böyle yapılır",
    "Çünkü empati ön kesmeyi emreder",
  ], 1, "Karşıdaki hata yaptı diye sen de tehlikeli bir manevra yaparsan iki hata olur. Mesafe açmak olayı bitirir. Ön kesmek hem kural hem adap dışıdır.");

  q("AD29", "deger", "Plakası yeni, şeritte bocalayan bir sürücüye mesafe tanımak hangi kavramdır?", [
    "Üstünlük",
    "Empati",
    "Rekabet",
    "Kayıtsızlık",
  ], 1, "Kendini onun yerine koymak, acemiliğin herkeste olabileceğini görmektir. Sıkıştırmak bu kişiyi daha çok hata yaptırır. Empati yavaşlatır, kovalamaz.");

  q("AD30", "fark", "Işığın yeşil yanması, önü tıkalı kavşağa girmeyi haklı kılar mı?", [
    "Evet, yeşil her şeyi örter",
    "Hayır, kavşağı kilitlemek hem akışı bozar hem adaba uymaz",
    "Evet, sadece adap bunu ister",
    "Yalnızca gece yasaktır",
  ], 1, "Yeşil ışık, karşıya geçebileceğin boşluk varsa ilerlemeyi anlatır. Ortada kalıp her yönü tıkamak “benim sıram” inadıdır. Kural da bunu istemez, adap da.");

  q("AD31", "iletisim", "Yaya geçidinde yavaşlayıp niyetini belli etmek ne işe yarar?", [
    "Hiçbir şeye, yaya zaten bekler",
    "Yayanın senin duracağını anlamasını sağlar",
    "Kornanın yerine hakaret geçer",
    "Geçiş üstünlüğü doğurur",
  ], 1, "Trafikte niyet görünür olmalıdır. Yavaşlamak ve bakmak, yayaya “geçebilirsin” der. Hız kesmeden korna çalmak bu iletişimin tersidir.");

  q("AD32", "deger", "Camdan çöp atmak sadece çevre konusu mudur?", [
    "Evet, adapla ilgisi yoktur",
    "Hayır, arkadaki sürücüye ve yola da saygısızlıktır",
    "Evet, çünkü küçük çöp zarar vermez",
    "Hayır, çünkü çöp atmak feragattir",
  ], 1, "Yola savrulan çöp arkadakinin camına ve tekerine gelir. Bu hem çevre kirliliği hem diğerkâmlığın yokluğudur. İki ders de aynı davranışı sorabilir.");

  q("AD33", "ofke", "Tartışmak için araçtan inmek nasıl sonuçlanır?", [
    "Olgunluk gösterir ve kavga biter",
    "Olayı büyütür, hem seni hem trafiği tehlikeye sokar",
    "Sorumluluğun tanımı budur",
    "Yardımlaşma sayılır",
  ], 1, "İnmek, akan trafiğin ortasında yeni bir yaya kazası ve kavga üretir. Sorumluluk olay yerinde kalmaktır, hakaretleşmek değil. Mesafe ve gerekirse 112 daha doğru yoldur.");

  q("AD34", "deger", "Hatalı olduğun kazada olay yerinde kalmak hangi değerdir?", [
    "Feragat",
    "Sorumluluk",
    "Gizlilik",
    "Rekabet",
  ], 1, "Sorumluluk, sonucun hesabını taşımaktır. Feragat ise hakkı varken o haktan vazgeçmektir. Kaçmak ikisinin de tersidir. Bu ayrım sınavda şık olarak yan yana durur.");

  q("AD35", "deger", "Geçiş sırası sende olduğu halde sıkışanı rahatlatmak için beklemen hangi değerdir?", [
    "Rekabet",
    "Feragat",
    "Kayıtsızlık",
    "Üstünlük",
  ], 1, "Hak sendedir, yine de bırakıyorsun. Buna feragat denir. Rekabet o hakkı sonuna kadar kullanmaktır. Kayıtsızlık ise görmezden gelmektir, bilinçli vazgeçme değil.");

  q("AD36", "iletisim", "Trafikte sağlıklı bir sözsüz iletişim hangisidir?", [
    "Tampona yapışıp uzun far yakmak",
    "Zamanında sinyal vermek ve şeridi okunaklı değiştirmek",
    "Sürekli korna",
    "Camdan el kol hareketiyle hakaret",
  ], 1, "İyi iletişim erken, sade ve tek anlamlıdır. Sinyal bu işi görür. Uzun far, korna ve hakaret karşıdakini yola değil sana kilitler.");

  q("AD37", "ofke", "Site ve okul çevresinde topu yola kaçabilecek çocuk için doğru tutum hangisidir?", [
    "Çocuk çıkmaz diye hızlanmak",
    "Hızı kesip birinin yola fırlayabileceğini hesaba katmak",
    "Kornayla kaldırımdakileri dağıtmak",
    "Kaldırımdan sürmek",
  ], 1, "Çocuk riski göremez, topun peşinden çıkar. Bunu hesaba katmak hem dikkat kuralıdır hem empatidir. Hızlanmak “boş görünüyor” yanılgısıdır.");

  q("AD38", "fark", "“Ceza yazılmayacaksa kuralı esnetirim” cümlesi adabı karşılar mı?", [
    "Evet, adabın tanımı ceza korkusudur",
    "Hayır, adap ceza olmasa da doğru olanı yapmaktır",
    "Evet, çünkü yazılı kural yoktur",
    "Evet, gece her kural esner",
  ], 1, "Bu cümle dış denetimi anlatır, iç ölçüyü değil. Adap tam da kimse bakmıyorken belli olur. Sınav bu cümleyi sık sık “hangisi adap değildir” diye sorar.");

  q("AD39", "deger", "Aşağıdakilerden hangisi hoşgörü değildir?", [
    "Küçük bir şerit hatasını kavgaya çevirmemek",
    "Hız sınırını yok saymak",
    "Yayaya birkaç saniye fazladan vermek",
    "Hatalı sürücüyle mesafeyi açmak",
  ], 1, "Hoşgörü insanı affetmektir, levhayı silmek değil. Hız sınırını esnetmek ihlaldir. Diğer üçü hoşgörünün trafikteki halidir.");

  q("AD40", "iletisim", "Duraktan çıkan otobüse yer açmak neden iletişimin parçasıdır?", [
    "Otobüsün kör noktası ve dönüş alanı büyüktür, niyeti şeride katılmaktır",
    "Otobüs her zaman beklemelidir, yer açmak yanlıştır",
    "Korna çalmadan otobüs çıkamaz",
    "Durağa park etmek aynı iletişimdir",
  ], 0, "Otobüs sinyali ve konumuyla “çıkıyorum” der. Yer açmak bu mesajı aldığını gösterir. Önünü kesmek veya durağa park etmek mesajı yok saymaktır.");

  q("AD41", "ofke", "Sana yapılan hatalı sollamayı aynen iade etmek ne sayılır?", [
    "Empati",
    "İntikam, adabın tersi",
    "Feragat",
    "Yardımlaşma",
  ], 1, "Aynı hatayı geri vermek ders değil, ikinci risktir. Empati karşıdakini anlamaktır, cezasını kesmek değil. Mesafe açmak bu döngüyü keser.");

  q("AD42", "deger", "Diğerkâmlığa uyan örnek hangisidir?", [
    "Kuyruğu bölmek",
    "Yağmurda yayaya su sıçratmadan geçmek",
    "Uzun farla öndekini itmek",
    "Makas atmak",
  ], 1, "Diğerkâmlık, kendi rahatını bir an erteleyip başkasının halini gözetmektir. Diğer üç şık kendi aceleni başkasının üstüne yıkar.");

  q("AD43", "fark", "Işığı dönen ve sireni çalan ambulansın önünü kesmek nasıl değerlendirilir?", [
    "Sadece nezaketsizlik, kuralı yoktur",
    "Hem yasal zorunluluğa hem adaba aykırıdır",
    "Ambulans kırmızıda beklediği için haktır",
    "Sadece otoyolda sorun olur",
  ], 1, "Sesli ve ışıklı uyarı açıkken yol vermek geçiş üstünlüğü kuralıdır. Adap da bunu birinin hayatı diye içselleştirir. İkisini ayırıp “sadece ayıp” demek sınavda yanlıştır.");

  q("AD44", "iletisim", "Selektörün ölçülü kullanımı hangisinde doğru verilmiştir?", [
    "Hiç kullanılmaz, her yakış tacizdir",
    "Kısa yakış “buradayım” diyebilir, ısrarla yakmak göz alır ve taciz olur",
    "Sürekli uzun far en nazik uyarındır",
    "Selektör geçiş hakkı doğurur",
  ], 1, "Kısa selektör bir işarettir. Israrlı uzun far karşı sürücünün görüşünü kapatır ve öfke büyütür. Far, korna gibi, kısa ve gerekçeli kalmalıdır.");

  q("AD45", "ofke", "Hatalı park eden aracın etrafını kapatıp çıkmasını engellemek çözüm müdür?", [
    "Evet, en etkili ders budur",
    "Hayır, yolu daha da tıkar ve kavgaya davetiye çıkarır",
    "Evet, sorumluluk böyle yerine gelir",
    "Evet, feragat örneğidir",
  ], 1, "Hatalı park zaten bir sorundur. Etrafını ikinci araçla kilitlemek sorunu büyütür. Gerekirse görevliye bildirmek, intikam almak değildir.");

  q("AD46", "deger", "Yaşlı bir yaya karşıdan karşıya yavaş yürürken korna çalmak neyi gösterir?", [
    "Sabır ve saygı",
    "Karşıdaki insanın hızını yok sayan bir acele",
    "Yasal bir zorunluluk, çünkü yaya koşmalıdır",
    "Feragat",
  ], 1, "Yaşlı yaya daha yavaştır. Korna onu hızlandırmaz, ürkütür. Beklemek sabırdır. “Herkes benim tempomda olmalı” düşüncesi adabın dışındadır.");

  q("AD47", "iletisim", "Niyetini hiç belli etmeden şerit değiştiren sürücü diğerlerine ne yükler?", [
    "Tahmin etmek ve ani manevra yapmak zorunda bırakır",
    "Hiçbir yük yüklemez",
    "Geçiş üstünlüğü bağışlar",
    "Takip mesafesini yasal olarak sıfırlar",
  ], 0, "Sinyal olmayınca arkadaki senin ne yapacağını bilemez. Bu belirsizlik ani frene yol açar. İletişim, karşı tarafın tahmin yürütmek zorunda kalmamasıdır.");

  q("AD48", "fark", "Trafik adabı yazılı bir ceza maddesi midir?", [
    "Evet, sadece para cezası cetvelinden ibarettir",
    "Hayır, yazılmamış olsa da beklenen saygı ve özen davranışıdır",
    "Evet, çünkü hız tabelasının adıdır",
    "Evet, yalnızca polisin bağırdığı andır",
  ], 1, "Bazı davranışlar hem yazılır hem adap olur. Adabın kendisi ise yaptırım listesi değil, o liste yokken de duran ölçütdür. Hız tabelası bir levhadır, adabın tanımı değildir.");
})();
