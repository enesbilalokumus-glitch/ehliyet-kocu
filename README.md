# Ehliyet Koçu

Teorik e-sınav için çalışma uygulaması. Soru çözersin, yanlışı işaretleyince doğrusu ve nedeni açılır. Oturum bitince doğru, yanlış ve boş sayılır; hangi derste açık kaldığın söylenir.

Bu bir kurs notu yardımcısıdır. MEB’in telifli soru bankasının kopyası değildir. Sorular müfredata göre burada yazıldı. Gerçek sınavın cümleleri birebir aynı olmayabilir; kural ve tuzak aynı yerden gelir.

## Nasıl açılır

`baslat.bat` dosyasına çift tıkla. Tarayıcı `http://127.0.0.1:8765` adresini açar. Siyah pencereyi kapatırsan uygulama da kapanır.

Python yoksa aynı klasörde terminalde:

```bat
py -m http.server 8765
```

Sonra tarayıcıda `http://127.0.0.1:8765`.

İlerleme tarayıcının kendi hafızasında durur (`localStorage`). Hesap, sunucu ve internet zorunlu değildir. Yazı tipleri Google’dan gelir; internet yoksa yedek yazı tipi devreye girer, uygulama yine çalışır.

## Başkasına vermek

`Ehliyet` klasörünü olduğu gibi sıkıştırıp gönder. Karşı taraf `baslat.bat` dosyasına çift tıklar. Python yoksa sayfa `index.html` üzerinden yine açılır.

Her tarayıcı kendi ilerlemesini tutar. Senin doğru ve yanlışların karşı tarafa geçmez.

Tablet ve telefonda, bilgisayar kapalıyken de açılan adres:

https://enesbilalokumus-glitch.github.io/ehliyet-kocu/

## Ekranlar

- **Bugün:** son durum, koç notu, günün sorusu, yarım kalan oturum.
- **Deneme:** 50 soru, 45 dakika, açıklama sonda. Dağılım: İlk Yardım 12, Trafik ve Çevre 23, Araç Tekniği 9, Trafik Adabı 6. Geçme: 35 doğru (70 puan). Yanlış doğruyu götürmez.
- **Konu çöz:** şıkkı seçince doğru ve açıklama hemen açılır.
- **Yanlışlar:** yanlış bildiklerin. Doğru bilince listeden düşer.
- **Anlatım:** dört ders, kısa konu ve tuzak cümlesi. Her başlıktan soru açılır.
- **Koç:** müfredat ve senin çözümlerine bakarak cevap verir. “Nerem zayıf?”, “turnike nedir”, “hız sınırları” gibi sorulara göre anlatır.

Koç, internetteki serbest bir sohbet modeli değildir. Bilmediği yerde uydurmamak için konu dışına çıkmaz. Gemini gibi harici bir model bağlamak sonraki sürüme bırakıldı; istersen API anahtarınla ekleriz.

## Dosyalar

- `index.html` — sayfa
- `css/app.css` — görünüm
- `js/app.js` — ekranlar
- `js/engine.js` — soru seçme, puan, öneri
- `js/coach.js` — koçun cevapları
- `js/data.js` — dersler ve konu anlatımı
- `js/bank/` — soru bankası (ilk yardım, trafik, motor, adap)
- `baslat.bat` — yerelde açmak için
- `test/check.js` — soru sayısı, cevap anahtarı ve koç kontrolü

Kontrol:

```bat
node test/check.js
```

## Geliştirme günlüğü

### 18 Kasım 2026 — ilk sürüm (0.1)

- Boş klasörden tarayıcıda çalışan uygulama kuruldu.
- Sınav düzeni 2025 MEB e-sınav kılavuzuna göre işlendi: 50 soru, 45 dakika, 35 doğru.
- Özgün soru bankası yazıldı: ilk yardım 34, trafik 40, araç tekniği 24, trafik adabı 18. Her soruda doğru şık ve açıklama var.
- Deneme modu süreli. Konu modu yanlışta hemen anlatıyor.
- Sonuçta ders ders isabet, %70 çizgisi ve “önce şuraya çalış” notu var. Kaçan başlık konu anlatımına bağlanıyor.
- Konu anlatımı dört ders için yazıldı. Levha şekilleri ve hız tablosu anlatımın içinde.
- Koç eklendi. Çözüm geçmişine bakıp zayıf dersi söylüyor, anlatımdan cevap çıkarıyor.
- Yanlış defteri, yarım kalan oturumu sürdürme ve ilerlemeyi silme var.
- `baslat.bat` ve bu günlük eklendi.

Bilinçli olarak dışarıda bırakılanlar: Gemini bağlantısı, kullanıcı hesabı, gerçek MEB sorularının kopyası, ceza tutarı ve gün sayısı (sık değişiyor).

### 18 Kasım 2026 — soru havuzu (0.2)

- Banka 116 sorudan 306 soruya çıktı.
- Eklenenler: ilk yardım 45, trafik 70, araç tekniği 45, trafik adabı 30.
- Yeni sorular da her seferinde karışıyor. Deneme hâlâ 50 soru seçiyor, havuz büyüdüğü için tekrar azalır.
- Konular aynı dört ders. Yeni başlıklar arasında hız tablosundaki diğer araçlar, levha biçimleri, kavşak önceliği, egzoz dumanı, otomatik vites, ESP/ASR ve adap örnekleri var.

### 18 Kasım 2026 — düzen (0.3)

- Ana sayfa koyu bir karşılama kartına alındı. İstatistikler, koç notu ve günün sorusu ayrı panellerde duruyor.
- Soru çözerken harita sağda sabit. Soru ve şıklar soldaki kartta.
- Menü ikonlu. Telefonda alta yapışıyor, sayfa kayınca kaybolmuyor.

### 24 Kasım 2026 — paylaşma

- Python olmayan bilgisayarda `baslat.bat` sayfayı doğrudan açar. Klasör başka birine gönderilebilir.

### Sıradaki

- İstersen Gemini anahtarıyla serbest soru.
- Deneme geçmişinde puan eğrisi.
- Telefonda ana ekrana ekleme.
