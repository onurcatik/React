# React El Kitabı

React El Kitabı'na hoş geldiniz! Bu kılavuz, React'i temel bilgilerden daha ileri kavramlara kadar kapsamlı bir şekilde anlamanızı sağlamak için tasarlanmıştır. İster başlamak isteyen bir acemi, ister bilgilerini derinleştirmeyi amaçlayan deneyimli bir geliştirici olun, bu el kitabında herkes için bir şeyler var.

## İçindekiler

1. [React ile Başlarken](./mdbook/src/01_Start/README.md)
   - React'e Giriş
   - Ortamınızı Ayarlama
   - İlk React Uygulamanızı Oluşturma

2. [Bileşenleri Anlamak](./mdbook/src/02_Components/README.md)
   - Bileşenler Nedir?
   - Fonksiyonel vs. Sınıf Bileşenleri
   - Bileşen Bileşimi

3. [Bileşenlerde Props Kullanımı](./mdbook/src/03_Props-Components/README.md)
   - Props ile Veri Geçirme
   - Prop Tipleri ve Varsayılan Props
   - Props Kullanımı için En İyi Uygulamalar

4. [Stil ve Medya](./mdbook/src/04_Styling-Media/README.md)
   - React Bileşenlerine CSS Ekleme
   - CSS-in-JS Kütüphanelerini Kullanma
   - Görseller ve Diğer Medya ile Çalışma

5. [Kancalara Giriş](./mdbook/src/05_Hooks/README.md)
   - Kanca Nedir?
   - `useState` Kancasını Kullanma
   - `useEffect` Kancasını Kullanma

6. [Efektlerle Çalışma](./mdbook/src/06_Effects/README.md)
   - `useEffect` Kancasını Anlamak
   - Bir Efektin Yaşam Döngüsü
   - Efektlerde Temizlik Fonksiyonları

7. [Dinamik Render](./mdbook/src/07_Dynamic-Rendering/README.md)
   - Koşullu Render
   - Listeler ve Anahtarlar
   - Harici Verileri Render Etme

8. [React'ta Yönlendirme](./mdbook/src/08_Routing/README.md)
   - React Router'ı Kurma
   - Sayfalar Arasında Gezinme
   - Dinamik Yönlendirme ve Parametreler

9. [React'ta Sınıf Bileşenleri](./mdbook/src/09_Class-Component/README.md)
   - Sınıf Bileşenlerini Tanımlama
   - Durum ve Yaşam Döngüsü Metotları
   - Sınıf Bileşenlerini Fonksiyonel Bileşenlere Dönüştürme

10. [React Yaşam Döngüsü Metotları](./mdbook/src/10_Lifecycle/README.md)
    - Yaşam Döngüsü Metotlarına Genel Bakış
    - Montaj, Güncelleme ve Kaldırma Aşamaları
    - Yaşam Döngüsü Metotları için En İyi Uygulamalar

11. [React'ta Durum Yönetimi](./mdbook/src/11_State-Management/README.md)
    - Durumu Yukarı Taşıma
    - Context API
    - Durum Yönetim Kütüphanelerine Giriş (ör. Redux)

12. [Yüksek-Dereceli Bileşenler](./mdbook/src/12_Higher-Order/README.md)
    - Yüksek-Dereceli Bileşenler Nedir?
    - Yüksek-Dereceli Bileşenler Oluşturma ve Kullanma
    - Kullanım Durumları ve En İyi Uygulamalar

13. [React'ta Hata Yönetimi](./mdbook/src/13_Error-Handling/README.md)
    - Hata Sınırları
    - Bileşenlerde Hataları Yönetme
    - Hata Yönetimi için En İyi Uygulamalar

14. [Daha Fazla Kanca: useState ve useEffect'in Ötesinde](./mdbook/src/14_useState-useEffect/README.md)
    - `useContext` Kancası
    - `useReducer` Kancası
    - Özel Kancalar

15. [React'ta Performans Optimizasyonu](./mdbook/src/15_Optimization/README.md)
    - Yaygın Performans Sorunları
    - Memoizasyon Teknikleri
    - Lazy Loading ve Kod Bölme

---

## GitHub Deposu

Bu el kitabının kaynak kodu ve belgeleri GitHub'da barındırılmaktadır. Depoya aşağıdaki bağlantıyı kullanarak erişebilirsiniz:

[React El Kitabı GitHub Deposu](https://github.com/onurcatik/React)

Depoyu klonlayabilir, sorunlar açabilir veya pull request göndererek katkıda bulunabilirsiniz.

### Depoyu Klonlama

Depoyu klonlamak için aşağıdaki komutu kullanın:

```bash
git clone https://github.com/onurcatik/react.git
```

### Katkıda Bulunma

Topluluktan gelen katkılara açığız! Katkıda bulunmak isterseniz, lütfen şu adımları izleyin:

1. Depoyu fork edin
2. Yeni bir dal oluşturun (`git checkout -b feature-branch`)
3. Değişikliklerinizi yapın
4. Değişikliklerinizi commit edin (`git commit -m 'Add some feature'`)
5. Dalı push edin (`git push origin feature-branch`)
6. Bir pull request açın

---

## mdBook'u Oluşturma

Bu el kitabı, markdown dosyalarından modern çevrimiçi kitaplar oluşturmak için bir araç olan [mdBook](https://github.com/rust-lang/mdBook) kullanılarak oluşturulmuştur.

### Gereksinimler

Kitabı oluşturmak için `mdBook`un yüklü olması gerekir. Aşağıdaki komutu kullanarak yükleyebilirsiniz:

```bash
cargo install mdBook
```

### Kitabı Oluşturma

Kitabı oluşturmak için, depo kök dizinine gidin ve şu komutu çalıştırın:

```bash
mdbook build
```

Bu, kitabın statik dosyalarını `book` dizininde oluşturacaktır.

### Kitabı Yerel Olarak Servis Etme

Kitabı yerel olarak servis etmek ve tarayıcınızda görüntülemek için şu komutu çalıştırın:

```bash
mdbook serve
```

Bu, yerel bir sunucu başlatacak ve tarayıcınızda `http://localhost:3000` adresine giderek kitabı görüntüleyebilirsiniz.
