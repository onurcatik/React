# Vite ile Yeni Proje Oluşturma

Bu eğitim, React ile bir proje oluşturma sürecini, Vite kullanarak adım adım anlatmaktadır. Vite, hızlı geliştirme ve optimize edilmiş üretim yapıları için tasarlanmış bir derleme aracı ve geliştirme sunucusudur. Modern tarayıcılarda mevcut olan yerel ES modülleri özelliğini kullanır, bu da geliştirme sunucusunun daha hızlı başlatılmasını ve güncellemelerin daha hızlı yapılmasını sağlar.

## Ön Koşullar

Bu eğitimi takip edebilmek için sisteminizde Node.js'in (sürüm 12 veya daha yüksek) yüklü olması gerekmektedir. Node.js yüklü değilse, resmi web sitesinden indirilebilir:
[Node.js İndir](https://nodejs.org/en/download)

Node.js'in yüklü olduğunu ve doğru sürümde olduğunu kontrol etmek için aşağıdaki komutu kullanabilirsiniz:
```bash
node -v
```

## Yeni React Projesi Oluşturma

Vite kullanarak yeni bir React uygulaması oluşturmak için aşağıdaki adımları takip edin:

1. **Node.js ve npm Kurulumu:**
   Node.js'i kurduktan sonra, npm (Node Package Manager) otomatik olarak kurulacaktır. Terminal veya komut satırında şu komutu çalıştırarak npm'in kurulu olup olmadığını kontrol edebilirsiniz:
   ```bash
   npm -v
   ```

2. **Vite ile React Projesi Oluşturma:**
   Proje dizinize gidin veya yeni bir proje dizini oluşturun ve ardından terminal veya komut satırında aşağıdaki komutu çalıştırın:
   ```bash
   npm create vite@latest my-react-app -- --template react
   ```
   Bu komut, `my-react-app` adında yeni bir React projesi oluşturur.

3. **Bağımlılıkları Kurma:**
   Oluşturulan proje dizinine gidin ve bağımlılıkları yüklemek için şu komutu çalıştırın:
   ```bash
   cd my-react-app
   npm install
   ```

4. **Geliştirme Sunucusunu Başlatma:**
   Geliştirme sunucusunu başlatmak için aşağıdaki komutu kullanın:
   ```bash
   npm run dev
   ```
   Bu komut, projenizi geliştirme modunda başlatır ve yerel sunucu üzerinden erişilebilir hale getirir. Genellikle `http://localhost:3000` adresinde çalışır.

## Proje Yapısı

Oluşturulan proje yapısı şu şekildedir:

```
my-react-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── main.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

- **node_modules/**: Projenin bağımlılıklarını içerir.
- **public/**: Projenin statik dosyalarını içerir.
- **src/**: Projenin kaynak kodlarını içerir.
  - **App.jsx**: Ana React bileşeni.
  - **main.jsx**: React uygulamasının giriş noktası.
  - **styles/**: CSS dosyalarını içerir.
- **.gitignore**: Git için yok sayılacak dosya ve dizinleri tanımlar.
- **index.html**: Uygulamanın ana HTML dosyası.
- **package.json**: Projenin bağımlılıklarını ve yapılandırmasını içerir.
- **vite.config.js**: Vite yapılandırma dosyası.

Bu temel kurulum ile React uygulamanızı geliştirmeye başlayabilirsiniz. Daha karmaşık yapılandırmalar ve optimizasyonlar için Vite ve React belgelerine başvurabilirsiniz.