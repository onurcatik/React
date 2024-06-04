# Harici Stiller Kullanarak Bileşen Geliştirme 

Bu eğitim, React uygulamalarında harici stil dosyaları kullanarak bileşenler geliştirmek için gerekli adımları kapsamaktadır. Aşağıda, adım adım rehberlik sunulmuştur ve her adımda kod parçacıkları ile detaylandırılmıştır. Amacımız, bilimsel ve titiz bir yaklaşımla React bileşenlerinin nasıl oluşturulacağını ve harici stil dosyaları ile nasıl stil verileceğini açıklamaktır.

## 1. Proje Yapılandırması

Öncelikle, projenizin kök dizininde bileşenler için bir klasör oluşturun. Bu, bileşenlerinizi düzenli tutmanızı sağlar.

```bash
mkdir -p src/components
```

## 2. JSX Bileşeni Oluşturma

Bileşenler klasörü içinde yeni bir JSX dosyası oluşturun. Bu dosya, bileşenimizin ana yapısını içerecektir.

```jsx
// src/components/ExternalStyledText.jsx
import React from 'react';
import './ExternalStyledText.css';

const ExternalStyledText = () => {
    return (
        <div className="external-styled-text">
            Merhaba, bu bir harici stilli bileşendir!
        </div>
    );
};

export default ExternalStyledText;
```

## 3. Harici Stil Dosyası Oluşturma

Aynı bileşen klasörü içinde harici stil dosyasını oluşturun. Bu dosya, bileşenin stil tanımlamalarını içerecektir.

```css
/* src/components/ExternalStyledText.css */
.external-styled-text {
    color: blue;
    font-size: 20px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
}
```

## 4. Bileşeni İçe Aktarma ve Kullanma

Ana bileşen veya `App.jsx` dosyasında yeni oluşturduğunuz bileşeni içe aktarın ve JSX yapısına dahil edin.

```jsx
// src/App.jsx
import React from 'react';
import ExternalStyledText from './components/ExternalStyledText';

const App = () => {
    return (
        <div className="App">
            <h1>React Uygulamasına Hoş Geldiniz</h1>
            <ExternalStyledText />
        </div>
    );
};

export default App;
```

## 5. Geliştirme Sunucusunu Başlatma

Proje dizinine gidin ve geliştirme sunucusunu başlatın. Bu adım, uygulamanızı yerel olarak çalıştırmanızı sağlar.

```bash
npm run dev
```

# Sonuç

Yukarıdaki adımları izleyerek, harici stil dosyaları ile stillendirilmiş React bileşenleri oluşturabilirsiniz. Bu yöntem, stil ve işlevselliği ayrı tutarak kodunuzu daha temiz ve sürdürülebilir hale getirir. React'te bileşen geliştirme sürecinde, bileşenlerinizi ve stil dosyalarınızı düzenli bir şekilde yapılandırmak önemlidir.

Bu eğitimin her adımında kullanılan kod parçacıklarını dikkatlice inceleyin ve projenizde uygulayın. Herhangi bir hatalı bilgiye karşı eleştirel bir yaklaşım sergilemek ve doğru yöntemleri kullanmak, başarılı bir yazılım geliştiricisi olmanın temelidir.