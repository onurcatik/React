# React Proje Yapısı

Bu eğitim, React projeleri için doğru dosya yapısını anlamanıza ve oluşturmanıza yardımcı olacaktır. İçeriği, yazılım geliştirme alanında beklenen titizlik ve standartlara uygun olarak sunacağız.

## React Kurulumu
React kurulumu için öncelikle Node.js ve npm'in (Node Package Manager) sisteminize kurulu olduğundan emin olun. Bu araçlar, React uygulamanızı geliştirmek için gereklidir. Node.js'i [resmi web sitesinden](https://nodejs.org/) indirip kurabilirsiniz.

## Proje Kurulumu
Bir React projesi oluşturmak için `create-react-app` aracını kullanacağız. Bu araç, başlangıçta gerekli olan tüm dosya ve yapılandırmaları sizin için oluşturur. Terminal veya komut satırında aşağıdaki komutu çalıştırarak yeni bir React uygulaması oluşturabilirsiniz:

```bash
npx create-react-app my-app
cd my-app
npm start
```

Bu komutlar, yeni bir React projesi oluşturur ve yerel geliştirme sunucusunu başlatır.

## Dosya Yapısı
Oluşturulan React projesinin başlangıç dosya yapısı şu şekildedir:

```
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md
```

Bu yapıyı daha detaylı inceleyelim:

- **node_modules/**: Projeye yüklenen tüm bağımlılıkları içerir. Bu klasörü manuel olarak düzenlemeyin.
- **public/**: Statik dosyaların bulunduğu klasördür. `index.html` dosyası, uygulamanızın HTML yapısını tanımlar.
- **src/**: Uygulamanızın kaynak kodlarının bulunduğu klasördür. Ana uygulama bileşenleri burada bulunur.
  - **App.js**: Ana uygulama bileşeninizdir. Burada diğer bileşenleri içe aktarabilir ve kullanabilirsiniz.
  - **index.js**: React DOM'u kullanarak, App bileşenini `index.html` içindeki bir `div` öğesine render eder.
  - **App.css**: App bileşenine özel stiller.
  - **index.css**: Genel stiller.
- **package.json**: Projenizin bağımlılıklarını ve betiklerini (scripts) tanımlar.
- **.gitignore**: Git tarafından izlenmemesi gereken dosya ve klasörleri belirtir.
- **README.md**: Projeniz hakkında genel bilgiler içerir.

## Önerilen Dosya Yapısı
Büyüyen projelerde kodun yönetilebilirliğini artırmak için dosya yapınızı modüler hale getirmek önemlidir. Önerilen yapı şu şekildedir:

```
src/
├── assets/
│   ├── images/
│   └── styles/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ...
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── ...
├── services/
│   └── api.js
├── App.js
├── index.js
└── ...
```

- **assets/**: Resimler ve genel stiller gibi statik varlıklar.
- **components/**: Tekrar kullanılabilir küçük bileşenler.
- **pages/**: Uygulamanızdaki sayfalar. Her sayfa, bir veya daha fazla bileşenden oluşabilir.
- **services/**: API istekleri ve diğer hizmetler.

## Kod Parçacıkları

**Header.js**
```javascript
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>My App</h1>
    </header>
  );
};

export default Header;
```

**Home.js**
```javascript
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <p>Welcome to the Home Page</p>
    </div>
  );
};

export default Home;
```

Bu yapı, kodunuzu daha modüler ve yönetilebilir hale getirir, büyük projelerde bile kodun izlenmesini kolaylaştırır.

## Sonuç
Bu eğitimde, React projeleri için önerilen dosya yapısını ve temel kurulum adımlarını ele aldık. Doğru dosya yapısı, projenizin sürdürülebilirliği ve yönetilebilirliği için kritik öneme sahiptir. Bu prensiplere bağlı kalarak, daha temiz ve okunabilir kodlar yazabilirsiniz.