#  Uygulamada Birden Fazla Bileşen Render Etme 

## Giriş

"React'te birden fazla bileşeni render etme" kavramı, tek bir React uygulamasında birden fazla yeniden kullanılabilir ve bağımsız UI öğesinin görüntülenmesi sürecini ifade eder. Bu eğitimde, temel bileşenleri oluşturmaktan, bunları ana uygulama dosyasında nasıl kullanacağınıza kadar adım adım ilerleyeceğiz. Bu süreci adım adım takip ederek, React uygulamanızda bileşen tabanlı bir mimariyi nasıl kurabileceğinizi öğreneceksiniz.

## Adım 1: Bileşenler için Yeni Bir Klasör Oluşturma

Öncelikle, projenizin `src` dizininde `components` adında yeni bir klasör oluşturun. Bu klasör, uygulamanızda kullanacağınız tüm bileşen dosyalarını barındıracaktır.

```bash
src/
  components/
```

## Adım 2: Bireysel Bileşen Dosyaları Oluşturma

`components` klasörünün içinde, her bir bileşen için ayrı dosyalar oluşturun. Örneğin, `Header.js`, `Content.js` ve `Footer.js` dosyalarını oluşturabilirsiniz. Bu dosyalar sırasıyla Header, Content ve Footer bileşenlerini temsil edecektir.

```bash
src/
  components/
    Header.js
    Content.js
    Footer.js
```

## Adım 3: Bileşenleri Tanımlama ve İhraç Etme

Her bileşen dosyasında, işlevsel bir bileşen tanımlayın ve ihraç edin. İşte her bir bileşen için örnek kodlar:

**Header.jsx**

```jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Başlık</h1>
    </header>
  );
};

export default Header;
```

**Content.jsx**

```jsx
import React from 'react';

const Content = () => {
  return (
    <main>
      <p>İçerik burada görüntülenecek.</p>
    </main>
  );
};

export default Content;
```

**Footer.jsx**

```jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Footer metni burada yer alacak.</p>
    </footer>
  );
};

export default Footer;
```

## Adım 4: Bileşenleri Ana Uygulamada İçe Aktarma ve Render Etme

Bileşenlerinizi tanımlayıp ihraç ettikten sonra, ana uygulama dosyanız olan `src/App.jsx` dosyasını açın ve bileşenlerinizi içe aktararak render edin.

**App.jsx**

```jsx
import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
```

## Sonuç

Bu adımları takip ettiğinizde, uygulamanız çalıştırıldığında Header, Content ve Footer bileşenlerinin sırasıyla görüntülendiğini göreceksiniz. Her bir bileşenin bağımsız olarak tanımlanması ve ana uygulama dosyasında kullanılması, kodunuzu daha modüler ve yeniden kullanılabilir hale getirir.

Bu eğitim boyunca kullanılan kod örnekleri, React bileşenlerinin nasıl oluşturulacağı ve kullanılacağı konusunda temel bir anlayış sağlar. İleri düzeyde React geliştirmeleri için, bileşenler arasındaki veri akışı ve durum yönetimi konularını da incelemeniz önerilir.

Bu eğitim, React uygulamalarında bileşen tabanlı mimarinin temellerini anlamanıza yardımcı olmayı amaçlamaktadır. Daha derinlemesine bilgi ve örnekler için React dökümantasyonunu incelemenizi tavsiye ederiz.