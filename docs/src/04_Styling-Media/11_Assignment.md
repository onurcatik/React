# Styling Teknikleri

Bu eğitim, React uygulamalarında çeşitli stil tekniklerini kullanmayı kapsamlı bir şekilde ele almaktadır. React ile bileşen tabanlı yapı, props ve state yönetimi gibi temel konularla birlikte, stil uygulama yöntemleri üzerinde derinlemesine durulacaktır. Aşağıda verilen yapılandırılmış eğitim, sağlanan PDF'deki görevlere dayanarak hazırlanmıştır.

## Eğitim İçeriği

1. **React Uygulaması ve Bileşenler**
   - React uygulaması oluşturma
   - Bileşenler, props ve state kullanımı

2. **Navigasyon Barı: Inline Styles**
   - Inline styles kullanımı
   - Sınırlı ve gerekli olduğu yerlerde inline styles uygulaması

3. **Hizmetler Bölümü: Harici Stil Dosyaları**
   - Harici stil dosyalarının kullanımı
   - Sınıflar ve seçiciler ile stil uygulamaları

4. **Alt Bilgi (Footer): CSS Modülleri**
   - CSS modülleri ile stil uygulama
   - Scoped styling kavramı

5. **Duyarlı Tasarım (Responsive Design)**
   - Farklı ekran boyutlarına uyum sağlayan tasarım oluşturma
   - Duyarlı tasarım teknikleri

6. **Projenin GitHub'a Yüklenmesi ve Canlı Demo Oluşturma**
   - GitHub'da depo oluşturma ve kod yükleme
   - README dosyası hazırlama
   - Netlify veya GitHub Pages ile canlı demo oluşturma

## 1. React Uygulaması ve Bileşenler

**React Uygulaması Oluşturma**

React uygulaması oluşturmak için aşağıdaki adımları izleyin:

```bash
npx create-react-app styling-showcase
cd styling-showcase
npm start
```

Bu komutlar, temel bir React uygulaması başlatacaktır. Şimdi bileşenleri oluşturmaya başlayabiliriz.

## 2. Navigasyon Barı: Inline Styles

**Navigasyon Barı Bileşeni Oluşturma**

`src/components` klasöründe `Navbar.js` dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';

const navbarStyle = {
  backgroundColor: '#282c34',
  padding: '10px',
  color: 'white',
  textAlign: 'center'
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <h1>Company Name</h1>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', margin: '0 10px' }}>Home</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Services</li>
        <li style={{ display: 'inline', margin: '0 10px' }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

Bu bileşen, inline styles kullanarak basit bir navigasyon barı oluşturur. Inline styles'ın sadece gerektiğinde kullanıldığını unutmayın.

## 3. Hizmetler Bölümü: Harici Stil Dosyaları

**Hizmetler Bileşeni Oluşturma**

`src/components` klasöründe `Services.js` dosyasını oluşturun ve `Services.css` adlı bir stil dosyası ekleyin. `Services.js` aşağıdaki gibi olacaktır:

```jsx
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
      </ul>
    </div>
  );
};

export default Services;
```

`Services.css` dosyasına ise aşağıdaki stilleri ekleyin:

```css
.services {
  background-color: #f4f4f4;
  padding: 20px;
  text-align: center;
}

.services h2 {
  color: #333;
}

.services ul {
  list-style-type: none;
  padding: 0;
}

.services li {
  margin: 10px 0;
}
```

Bu bileşen, harici stil dosyaları kullanılarak stil verilmiş bir hizmetler bölümünü içerir.

## 4. Alt Bilgi (Footer): CSS Modülleri

**Alt Bilgi Bileşeni Oluşturma**

`src/components` klasöründe `Footer.js` dosyasını ve `Footer.module.css` adlı bir stil dosyasını oluşturun. `Footer.js` aşağıdaki gibi olacaktır:

```jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
```

`Footer.module.css` dosyasına ise aşağıdaki stilleri ekleyin:

```css
.footer {
  background-color: #282c34;
  color: white;
  padding: 10px;
  text-align: center;
}
```

Bu bileşen, CSS modülleri kullanarak scoped styling uygulanmış bir alt bilgi bölümü içerir.

## 5. Duyarlı Tasarım (Responsive Design)

Duyarlı tasarım, her bileşen için geçerli olacak şekilde CSS medya sorguları kullanılarak sağlanabilir. Örneğin, `Services.css` dosyasına aşağıdaki medya sorgusunu ekleyin:

```css
@media (max-width: 600px) {
  .services ul {
    display: block;
  }

  .services li {
    margin: 20px 0;
  }
}
```

Bu medya sorgusu, ekran genişliği 600 pikselden küçük olduğunda hizmetler listesini dikey olarak hizalayacaktır.

## 6. Projenin GitHub'a Yüklenmesi ve Canlı Demo Oluşturma

**GitHub'a Yükleme**

1. GitHub'da yeni bir depo oluşturun.
2. Aşağıdaki komutları kullanarak projeyi yükleyin:

```bash
git init
git remote add origin https://github.com/yourusername/styling-showcase.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

**Canlı Demo Oluşturma**

Netlify veya GitHub Pages kullanarak canlı demo oluşturabilirsiniz. Netlify kullanarak dağıtım yapmak için:

1. Netlify hesabı oluşturun ve giriş yapın.
2. "New site from Git" seçeneğini tıklayın.
3. GitHub depo bağlantısını seçin ve dağıtımı tamamlayın.

## Sonuç

Bu eğitim, React uygulamalarında farklı stil tekniklerini kullanarak kapsamlı ve duyarlı bir kullanıcı arayüzü oluşturmayı ele almıştır. Inline styles, harici stil dosyaları ve CSS modülleri gibi yöntemlerle stil uygulamanın yanı sıra, duyarlı tasarım teknikleri ve projenin GitHub'da barındırılması gibi konular da detaylandırılmıştır. Bu eğitim, yazılım geliştirme standartlarına uygun şekilde hazırlanmıştır ve kod parçacıkları ile desteklenmiştir.