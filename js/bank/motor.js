(function () {
  const root = typeof window !== "undefined" ? window : globalThis;
  const list = root.EHLIYET_QUESTIONS || (root.EHLIYET_QUESTIONS = []);
  const topic = "motor";

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
    "MO01",
    "calisma",
    "Dört zamanlı benzinli motorda zamanların sırası hangisidir?",
    [
      "Emme, sıkıştırma, ateşleme (iş), egzoz",
      "Egzoz, ateşleme, emme, sıkıştırma",
      "Sıkıştırma, egzoz, emme, ateşleme",
      "Ateşleme, emme, egzoz, sıkıştırma",
    ],
    0,
    "Sıra emme, sıkıştırma, iş (ateşleme) ve egzozdur. Emmede silindire hava-yakıt dolar, sıkıştırmada piston bunu ezer, buji ateşler, genişleyen gaz pistonu iter, egzozda yanmış gaz dışarı atılır. Sırayı “eski eşek” diye kodlayanlar olur: emme, sıkıştırma, iş, egzoz."
  );

  q(
    "MO02",
    "calisma",
    "Dizel motoru benzinli motordan ayıran temel fark hangisidir?",
    [
      "Dizelde yakıt, sıkışan havanın sıcaklığıyla tutuşur; ateşleme bujisi yoktur",
      "Dizelde hiç piston yoktur",
      "Benzinli motor hava almaz",
      "Dizel motor yalnızca egzoz zamanında çalışır",
    ],
    0,
    "Benzinli motorda karışımı buji ateşler. Dizelde hava çok sıkışıp ısınır, enjektör yakıtı bu sıcak havanın içine püskürtür ve yakıt kendiliğinden tutuşur. Dizeldeki kızdırma bujisi ateşleme bujisi değildir; soğuk havada silindiri ısıtıp ilk çalışmayı kolaylaştırır."
  );

  q(
    "MO03",
    "calisma",
    "Dizel motordaki kızdırma bujisi ne işe yarar?",
    [
      "Her yanma zamanında yakıtı kıvılcımla ateşler",
      "Soğuk motorda yanma odasını ısıtıp ilk çalışmayı kolaylaştırır",
      "Lastik basıncını ölçer",
      "Fren hidroliğini ısıtır",
    ],
    1,
    "Kızdırma bujisi kıvılcım üretmez. Soğuk havada silindir kapağındaki havayı ısıtır ki dizel yakıt tutuşabilsin. Kontak açılınca gösterge panelindeki sarı spiral lamba bir süre yanar, sönünce marşa basılır. Onu benzin bujisiyle karıştırma."
  );

  q(
    "MO04",
    "yag",
    "Motor yağının görevlerinden hangisi yanlıştır?",
    [
      "Sürtünen parçaları yağlamak",
      "Isının bir kısmını taşımak",
      "Yakıtın yerine geçip motoru çalıştırmak",
      "Aşınmayı ve korozyonu azaltmak",
    ],
    2,
    "Yağ; yağlar, soğutmaya yardım eder, küçük artıkları taşır, sızdırmazlığa katkı verir ve pası azaltır. Yakıt değildir. Yağsız motor kısa sürede sıkışır. Seviye, araç düz zeminde ve motor durmuşken, birkaç dakika beklendikten sonra yağ çubuğuyla bakılarak kontrol edilir."
  );

  q(
    "MO05",
    "ikaz",
    "Seyir halinde kırmızı yağ lambası yandıysa ne yapılır?",
    [
      "Bir sonraki benzinliğe kadar aynı hızla devam edilir",
      "Güvenli yerde durulur, motor kapatılır, yağ seviyesi kontrol edilir",
      "Üzerine su dökülür",
      "Lamba ampulü sökülür ki sönsün",
    ],
    1,
    "Kırmızı yağ lambası basıncın düştüğünü söyler. Basınçsız devam etmek krank ve yatakları eritir. Güvenli yerde dur, motoru stop et, yağ seviyene bak. Eksikse tamamla; seviye normalse pompa veya sensör arızası olabilir, yine de çalıştırmadan çekici düşün."
  );

  q(
    "MO06",
    "yag",
    "Hararet ibresi kırmızıya çıkıp motor çok ısındıysa hangisi doğrudur?",
    [
      "Sıcak radyatör kapağı hemen açılır ve buz gibi su dökülür",
      "Güvenli yerde durulur, motorun soğuması beklenir, kapak sıcakken açılmaz",
      "Hızlanılır ki rüzgâr soğutsun",
      "Yağ murcu sökülüp su konur",
    ],
    1,
    "Hararet, soğutma suyunun kaynadığını veya dolaşmadığını gösterir. Sıcak kapağı açmak yüzeye kaynar su fışkırtır. Soğuk suyu sıcak motora boca etmek bloğu çatlatabilir. Dur, stop et, soğumasını bekle, sonra seviye ve kaçak kontrol edilir. Su yerine gelişigüzel yağ konmaz."
  );

  q(
    "MO07",
    "yag",
    "Antifriz yalnızca kışın mı konur?",
    [
      "Evet, yazın saf su yeter ve daha iyidir",
      "Hayır; donmayı geciktirir, kaynamayı yükseltir ve pası önlediği için dört mevsim karışım halinde bulunur",
      "Hayır; yalnızca fren hidroliğine katılır",
      "Evet, ama sadece lastiklere sürülür",
    ],
    1,
    "Antifriz karışımı üç iş görür: kışın donmayı zorlaştırır, yazın kaynama noktasını yükseltir, yıl boyu korozyonu azaltır. Yazın tamamen boşaltıp çeşme suyu koymak radyatörü ve su kanallarını çürütür. Motor soğukken tamamlanır."
  );

  q(
    "MO08",
    "yag",
    "Termostatın soğutma sistemindeki görevi nedir?",
    [
      "Motoru sürekli soğuk tutmak için suyu hiç dolaştırmamak",
      "Motor çalışma sıcaklığına gelene kadar suyun dolaşımını düzenlemek",
      "Fren pedalını sertleştirmek",
      "Aküyü şarj etmek",
    ],
    1,
    "Motor verimli çalışmak için belirli bir sıcaklık ister. Termostat soğukken büyük devreyi kapalı tutar, motor ısınınca açılır ve su radyatöre gider. Arızalanıp kapalı kalırsa hararet olur, açık kalırsa motor geç ısınır ve yakıt artar."
  );

  q(
    "MO09",
    "elektrik",
    "Marş motoru, alternatör ve akünün görevleri hangi eşleştirmede doğrudur?",
    [
      "Marş ilk hareketi verir, alternatör elektrik üretir, akü elektriği depolar",
      "Akü elektrik üretir, alternatör sadece ışık yakar, marş frene basar",
      "Üçü de yalnızca far içindir",
      "Alternatör yakıt pompalar, akü yağlar",
    ],
    0,
    "Akü, depolanmış elektrikle marş motorunu döndürür. Motor çalışınca alternatör hem sistemi besler hem aküyü doldurur. Kırmızı akü lambası seyirde yanıyorsa şarj yok demektir: kayış kopmuş veya alternatör arızalı olabilir. Marş, aracı yürüten motor değildir."
  );

  q(
    "MO10",
    "elektrik",
    "Kontak açılınca yanan akü lambası motor çalışınca sönmüyorsa ne düşünülür?",
    [
      "Şarj sistemi arızalı olabilir, genellikle alternatör veya kayışı",
      "Lastik basıncı düşmüştür",
      "Yağ fazla gelmiştir",
      "Bu lambanın sönmesi gerekmez",
    ],
    0,
    "Akü lambası kontak açıkken yanar, motor çalışıp alternatör üretmeye başlayınca söner. Sönmüyorsa elektrik üretilmiyordur. Kayış, alternatör veya ilgili kablo bakılır. Böyle giderse akü biter ve araç yolda stop eder."
  );

  q(
    "MO11",
    "aktarma",
    "Debriyaj pedalı ne işe yarar?",
    [
      "Motor ile vites kutusu arasındaki bağlantıyı geçici olarak keser",
      "Fren hidroliğini pompalar",
      "Direksiyonu kilitler",
      "Yakıt deposunu havalandırır",
    ],
    0,
    "Debriyaja basınca motorun dönüşü şanzımana gitmez; vites bu sırada güvenle değişir. Ayak sürekli debriyajda durursa balata ısınır ve kaçırır. Kaçıran debriyajda devir yükselir ama araç hızlanmaz, yanık kokusu gelebilir."
  );

  q(
    "MO12",
    "aktarma",
    "Vites kutusu ne sağlar?",
    [
      "Her zaman aynı devirle farklı çekiş ve hız seçmeyi",
      "Sadece geri vitesi, ileri hız tekerlektedir",
      "Yağın soğumasını",
      "Farların kısalıp uzamasını",
    ],
    0,
    "Vites kutusu, motorun torkunu yola uygun çevirir. Düşük vites güçlü çeker, az hız yapar; yüksek vites aynı devirde daha hızlı gider ama çekiş azalır. İnişte düşük vitese almak motor freni sağlar, frenin sürekli kaynamasını önler."
  );

  q(
    "MO13",
    "aktarma",
    "Diferansiyel ne işe yarar?",
    [
      "Virajda iç ve dış tekerleğin farklı hızda dönmesini sağlar",
      "İki tekerleği her zaman aynı devirde kilitler",
      "Yakıtı eşit böler",
      "El frenini çözer",
    ],
    0,
    "Virajda dış tekerlek daha uzun yol alır, bu yüzden daha hızlı dönmelidir. Diferansiyel bu farkı verir. Olmasa lastikler sürüklenir, savrulma başlar. Kilitli diferansiyel ise ayrı bir arazi düzenidir; binek otomobilin normal diferansiyeli tekerlekleri kasıtlı kilitlemez."
  );

  q(
    "MO14",
    "fren",
    "ABS’nin asıl görevi hangisidir?",
    [
      "Tekerleğin fren sırasında kilitlenmesini önleyip direksiyon hâkimiyetini korumak",
      "Her zeminde fren mesafesini yarıya indirmek",
      "El freninin yerine geçmek",
      "Lastik basıncını artırmak",
    ],
    0,
    "Kilitlenen tekerlek kayar ve direksiyon işlemez. ABS, freni saniyede birçok kez bırakıp tutarak tekerleği eşiğinde tutar; sürücü engelden kaçabilir. Fren mesafesini her zeminde mucizevi kısaltmaz, gevşek kar ve çakılda mesafe uzayabilir. ABS arızalanınca normal fren çoğu zaman çalışmaya devam eder ama kilitlenme koruması gider."
  );

  q(
    "MO15",
    "fren",
    "Hidrolik fren pedalına basınca pedal yumuşakça dibe kadar iniyorsa ne akla gelir?",
    [
      "Sistemde hava vardır veya hidroliği kaçıyordur",
      "Lastikler yeni değiştirilmiştir",
      "Motor yağı fazladır",
      "Radyo sigortası atmıştır",
    ],
    0,
    "Hidrolik fren, sıkışmayan bir sıvıyla basıncı iletir. İçine hava girerse hava ezilir, pedal sünger gibi dibe gider ve fren zayıflar. Kaçak da aynı hissi verir. Bu halde yola devam etmek değil, sistemi tamir ettirmek gerekir."
  );

  q(
    "MO16",
    "fren",
    "Otomobil lastiğinde yasal asgari diş derinliği kaç milimetredir?",
    [
      "0,6",
      "1,6",
      "4,6",
      "6,0",
    ],
    1,
    "Diş derinliği 1,6 milimetrenin altına inen lastikle trafiğe çıkılmaz. Diş, suyu tahliye eder; kabak lastik suda kayar. Kış lastiği zorunluluğu ticari taşıtlarda 1 Aralık-1 Nisan arasında ayrı bir konudur ve orada daha derin diş istenir. Hususi otomobilin genel yasal tabanı 1,6 mm’dir."
  );

  q(
    "MO17",
    "fren",
    "Lastik hava basıncı sürekli düşükse lastik nasıl aşınır?",
    [
      "Omuzlar (yanlar) daha çok aşınır, ısınır ve yakıt artar",
      "Yalnızca tam ortası aşınır",
      "Aşınma durur",
      "Diş derinliği kendiliğinden artar",
    ],
    0,
    "Az şişmiş lastik omuzları üzerinde yürür, yanlardan yer, ısınır ve patlamaya yaklaşır; yuvarlanma direnci yüzünden yakıt da artar. Fazla basınçta ise orta sırt aşınır ve tutuş sertleşir. Basınç, lastik soğukken ve stepne dahil ölçülür."
  );

  q(
    "MO18",
    "fren",
    "Araç belirli bir hızda direksiyonu titretiyor, başka hızda duruyorsa önce ne düşünülür?",
    [
      "Tekerlek balansının bozuk olduğu",
      "Yağ filtresinin tıkalı olduğu",
      "Akünün bitik olduğu",
      "Kornanın ayarsız olduğu",
    ],
    0,
    "Balanssız tekerlek belirli hızlarda direksiyonu veya koltuğu titretir. Rot (ön düzen) bozuksa araç bir yana çeker, lastik içten veya dıştan yer. Amortisör bitikse araç dalıp kalkar, tümsekten sonra sönmez. Üçü üç ayrı arızadır."
  );

  q(
    "MO19",
    "fren",
    "Amortisörün görevi nedir?",
    [
      "Yayın salınımını sönümleyip lastiği yola basılı tutmak",
      "Yakıtı enjekte etmek",
      "Vitesi kilitlemek",
      "Egzoz gazını temizlemek",
    ],
    0,
    "Yay darbeyi emer, amortisör o salınımı durdurur. Amortisörsüz araç zıplar, fren ve virajda lastik yere tam basmaz. Pratik kontrol: çamurluğa bastırıp bırakınca araç bir kez inip durmalıdır; birkaç kez sallanıyorsa amortisör zayıftır."
  );

  q(
    "MO20",
    "ikaz",
    "Gösterge lambalarının renkleri için hangisi doğrudur?",
    [
      "Kırmızı, hemen ilgilenilmesi gereken tehlikeyi gösterir",
      "Kırmızı her zaman yalnızca bilgilendirmedir, yola devam edilir",
      "Yeşil, motoru hemen stop et demektir",
      "Sarı yağ lambası, depo dolu demektir",
    ],
    0,
    "Kırmızı lambalar (yağ, hararet, fren, şarj) “dur ve anla” der. Sarı veya turuncu lambalar (motor arıza, ABS) “sistemde sorun var, en kısa sürede bak” der; çoğu zaman o sistem devre dışıdır ama araç bir süre gidebilir. Yeşil ve mavi daha çok far ve sinyal gibi bilgilendirmedir."
  );

  q(
    "MO21",
    "ikaz",
    "Hava yastığı ile ilgili hangisi doğrudur?",
    [
      "Kemer takılmadan da aynı korumayı sağlar",
      "Kemerle birlikte çalışır; kemerin yerine geçmez",
      "Yalnızca arkadan çarpmada açılır",
      "Çocuk koltuğu önde, yastığa doğru ters bağlanabilir",
    ],
    1,
    "Yastık, kemerin tuttuğu gövdenin başını ve göğsünü ikinci darbeden korur. Kemersiz açılan yastık kendisi yaralar. Hava yastığı aktifken ön koltuğa, yastığa bakacak şekilde ters bebek koltuğu bağlanmaz. Mümkünse çocuk arka koltuktadır."
  );

  q(
    "MO22",
    "calisma",
    "Katalitik konvertör ne işe yarar?",
    [
      "Egzozdaki zararlı gazları daha az zararlı hale getirir",
      "Motorun gücünü ikiye katlar",
      "Fren mesafesini kısaltır",
      "Yağ değişim süresini uzatır",
    ],
    0,
    "Katalitik dönüştürücü egzoz hattındadır; karbonmonoksit, yanmamış yakıt ve azot oksitleri daha zararsız gazlara çevirmeye çalışır. Delik egzoz hem sesi artırır hem zehirli gazı kabine kaçırabilir. Bakımsız motor ve kurşunlu yakıt bu parçanın ömrünü bitirir."
  );

  q(
    "MO23",
    "calisma",
    "Hava filtresi çok kirliyse ne olur?",
    [
      "Motor daha zor nefes alır, çekiş düşer, yakıt artabilir",
      "Fren pedalı sertleşir",
      "Lastik diş derinliği artar",
      "Akü kendiliğinden şarj olur",
    ],
    0,
    "Motorun yaktığı şey hava ile yakıtın karışımıdır. Filtre tıkalıysa hava azalır, karışım bozulur, çekiş düşer ve tüketim artar. Filtre “görünmüyor” diye unutulmaz; tozlu yolda daha çabuk dolar."
  );

  q(
    "MO24",
    "fren",
    "Uzun inişte sürekli frene basmak yerine ne öğretilir?",
    [
      "Uygun düşük vitesle motor freni kullanmak",
      "Kontak kapatıp boşa almak",
      "El frenini yarıda çekip inmek",
      "Debriyaja basılı halde inmek",
    ],
    0,
    "Uzun fren, balatayı ve hidroliği ısıtıp freni kaybettirir. Düşük vites, motorun kompresyonuyla aracı tutar. Kontağı kapatmak direksiyon kilitler ve fren servosunu keser. Boş vites ve basılı debriyaj da aracı boşta hızlandırır. İniş, takılı viteste ve aralıklı frenle iner."
  );
})();
