# Geliştirme Ortamını Kurmak

## **Amaç:**

React'in temel kavramlarını anlamak ve React uygulamaları için geliştirme ortamınızı kurmak.

## Gereksinimler:

1. **Gözden Geçirme**

   - React'e giriş bölümünü inceleyin ve React hakkında kısa bir genel bakış edinin.
   - Virtual DOM kavramını ve React içindeki önemini anlayın.
   - SPA (Single Page Application) ile MPA (Multi Page Application) arasındaki farkları karşılaştırın ve kullanım durumlarını anlayın.

2. **Kurulum ve Yükleme**

   - React ortamınızı yapılandırmak için kurulum ve yükleme adımlarını takip edin.

---

# Gözden Geçirme

## React Nedir?

React, kullanıcı arayüzleri (UI) oluşturmak için kullanılan açık kaynaklı bir JavaScript kütüphanesidir. Facebook tarafından geliştirilen ve sürdürülmekte olan React, bileşen bazlı mimarisi ve virtual DOM kullanımıyla bilinir.

## Virtual DOM Nedir?

Virtual DOM (Sanal DOM), gerçek DOM'un hafif bir kopyasıdır. React, bileşenlerdeki değişiklikleri önce virtual DOM'a uygular ve ardından virtual DOM'u gerçek DOM ile karşılaştırarak sadece gerekli olan değişiklikleri gerçek DOM'a uygular. Bu yöntem, performansı artırır ve daha hızlı güncellemeler sağlar.

## SPA vs. MPA

- **SPA (Single Page Application)**: Tek bir HTML sayfası kullanarak dinamik içerik yükler ve kullanıcı deneyimini kesintisiz hale getirir. URL değişimleri JavaScript ile yönetilir.
  
  **Avantajları:**
  - Hızlı kullanıcı etkileşimleri
  - Daha az sunucu yükü
  - Gelişmiş kullanıcı deneyimi

  **Dezavantajları:**
  - İlk yükleme süresi uzun olabilir
  - SEO (Arama Motoru Optimizasyonu) zorlukları
  - Tarayıcı geri tuşu kullanımı zor olabilir

- **MPA (Multi Page Application)**: Her sayfa değişiminde tam bir sayfa yenilemesi gerektirir. Her yeni sayfa, sunucudan tamamen yeni bir HTML belgesi olarak yüklenir.
  
  **Avantajları:**
  - SEO dostu
  - Büyük ve karmaşık uygulamalar için uygundur
  - Daha geleneksel bir navigasyon deneyimi

  **Dezavantajları:**
  - Daha fazla sunucu yükü
  - Daha yavaş kullanıcı etkileşimleri
  - Her sayfa yüklemesi tam bir yeniden yükleme gerektirir

---

# Kurulum ve Yükleme

React ortamınızı kurmak için aşağıdaki adımları izleyin:

## Gereksinimler

- **Node.js ve npm (Node Package Manager)**: React uygulamaları oluşturmak için Node.js ve npm'in en son sürümlerine sahip olmanız gerekmektedir. Node.js'i [resmi web sitesinden](https://nodejs.org/) indirebilirsiniz.

## Adım 1: Node.js ve npm'i Yükleyin

Node.js ve npm'in bilgisayarınızda kurulu olup olmadığını kontrol etmek için terminale aşağıdaki komutları yazın:

```bash
node -v
npm -v
```

Eğer yüklü değillerse, Node.js'i indirip kurduktan sonra yeniden kontrol edin.

## Adım 2: Yeni Bir React Uygulaması Oluşturun

React uygulaması oluşturmak için `create-react-app` komutunu kullanabilirsiniz. Bu komut, React uygulamanız için gerekli tüm başlangıç dosyalarını ve yapılandırmaları otomatik olarak oluşturur. Terminale aşağıdaki komutu yazın:

```bash
npx create-react-app my-app
```

`my-app` yerine kendi proje adınızı yazabilirsiniz. Bu komut, yeni bir React uygulaması oluşturacak ve gerekli bağımlılıkları yükleyecektir.

## Adım 3: Proje Dizini İçine Girin

Oluşturulan proje dizinine gitmek için aşağıdaki komutu kullanın:

```bash
cd my-app
```

## Adım 4: React Uygulamasını Başlatın

React uygulamanızı başlatmak için aşağıdaki komutu çalıştırın:

```bash
npm start
```

Bu komut, geliştirme sunucusunu başlatacak ve tarayıcınızda uygulamanızı açacaktır. Varsayılan olarak, uygulamanız `http://localhost:3000` adresinde çalışır.

---

Bu adımları izleyerek React geliştirme ortamınızı başarıyla kurabilirsiniz. React'in temel kavramlarını anlamak ve uygun bir geliştirme ortamı oluşturmak, verimli bir geliştirme süreci için kritik öneme sahiptir. Bu aşamaları tamamladıktan sonra, daha ileri seviye React özelliklerini ve bileşenlerini keşfetmeye başlayabilirsiniz.