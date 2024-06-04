# Inline Stil Kullanımı

## Giriş

React projelerinde stil tanımlama yöntemlerinden biri olan "inline styles", özellikle dinamik ve komponent bazlı stillendirmede yaygın olarak kullanılır. Bu eğitimde, React'te inline stil kullanımını detaylandıracak, önemli noktalara dikkat çekerek ve doğru bilinen yanlışları eleştirerek kapsamlı bir kılavuz sunacağız. Eğitim boyunca yapılandırılmış ve açıklamalı kod parçacıkları ile konunun daha iyi anlaşılmasını hedefleyeceğiz.

## 1. Proje Yapılandırması

React projesinde inline stil kullanımı için öncelikle doğru dosya yapısını kurmalıyız. Aşağıdaki adımları izleyerek proje yapınızı oluşturun:

1. **Komponentler için klasör oluşturun**: Proje dizininizin `src` klasörü içinde, `components` adında yeni bir klasör oluşturun (eğer zaten yoksa).

   ```bash
   mkdir src/components
   ```

2. **Yeni bir JSX dosyası oluşturun**: `components` klasörü içinde, istediğiniz komponent adında yeni bir JSX dosyası oluşturun, örneğin `InlineStyledText.jsx`.

   ```bash
   touch src/components/InlineStyledText.jsx
   ```

3. **Komponenti oluşturun**: `InlineStyledText.jsx` dosyasını açarak aşağıdaki gibi basit bir komponent tanımlayın.

   ```jsx
   // src/components/InlineStyledText.jsx
   import React from 'react';

   const InlineStyledText = () => {
     const style = {
       color: 'blue',
       fontSize: '20px',
       margin: '10px'
     };

     return (
       <p style={style}>Bu metin inline stil ile stilize edilmiştir.</p>
     );
   };

   export default InlineStyledText;
   ```

4. **Komponenti kullanın**: Parent komponentinizde veya `App.jsx` dosyasında `InlineStyledText` komponentini içe aktarın ve JSX içinde kullanın.

   ```jsx
   // src/App.jsx
   import React from 'react';
   import InlineStyledText from './components/InlineStyledText';

   const App = () => {
     return (
       <div>
         <InlineStyledText />
       </div>
     );
   };

   export default App;
   ```

5. **Geliştirme sunucusunu başlatın**: Proje klasörüne gidin ve geliştirme sunucusunu başlatın.

   ```bash
   npm run dev
   ```

## 2. Inline Stil Kullanımının Avantaj ve Dezavantajları

**Avantajlar:**

- **Dinamik Stil**: JavaScript değişkenleri kullanarak stilleri dinamik olarak değiştirebilirsiniz.
- **Enkapsülasyon**: Her komponentin kendi stili olduğu için stil çakışmaları minimize edilir.
- **Kolaylık**: Küçük ve basit stiller için hızlı ve kolay bir çözüm sunar.

**Dezavantajlar:**

- **Bakım Zorluğu**: Büyük projelerde inline stil kullanımı kodun okunabilirliğini ve bakımını zorlaştırabilir.
- **Performans**: Büyük ve kompleks stillerde performans sorunları yaşanabilir.
- **Yeniden Kullanılabilirlik**: Stil tanımları komponent seviyesinde olduğu için yeniden kullanılabilirliği düşüktür.

## 3. Kritik Noktalar ve Doğru Bilinen Yanlışlar

1. **JavaScript Nesneleri ile Stil Tanımlama**: Inline stil tanımlarken stil özellikleri JavaScript nesneleri olarak tanımlanır. CSS'deki kebab-case yerine camelCase kullanılır. Örneğin `background-color` yerine `backgroundColor`.

   Yanlış:

   ```jsx
   const style = {
     'background-color': 'red'
   };
   ```

   Doğru:

   ```jsx
   const style = {
     backgroundColor: 'red'
   };
   ```

2. **Sayı Değerleri**: Birimler gerektiren CSS özelliklerinde (örneğin `px`, `em`), sayısal değerler string olarak verilmelidir.

   Yanlış:

   ```jsx
   const style = {
     margin: 10
   };
   ```

   Doğru:

   ```jsx
   const style = {
     margin: '10px'
   };
   ```

3. **Bileşik Stiller**: Birden fazla stil özelliği aynı anda dinamik olarak değiştirilebilir.

   Yanlış:

   ```jsx
   const style = {
     color: isActive ? 'green' : 'red'
   };
   ```

   Doğru:

   ```jsx
   const style = {
     color: isActive ? 'green' : 'red',
     fontWeight: isActive ? 'bold' : 'normal'
   };
   ```

## 4. Örnekler ve Uygulamalar

**Durum Bazlı Stil Değiştirme**:

```jsx
// src/components/StatusStyledText.jsx
import React from 'react';

const StatusStyledText = ({ isActive }) => {
  const style = {
    color: isActive ? 'green' : 'red',
    fontWeight: isActive ? 'bold' : 'normal',
    fontSize: '16px'
  };

  return (
    <p style={style}>
      {isActive ? 'Aktif' : 'Pasif'}
    </p>
  );
};

export default StatusStyledText;
```

**Dinamik Stil Değişimi**:

```jsx
// src/components/DynamicStyledButton.jsx
import React, { useState } from 'react';

const DynamicStyledButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const style = {
    backgroundColor: isClicked ? 'blue' : 'gray',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <button style={style} onClick={handleClick}>
      {isClicked ? 'Tıklandı' : 'Tıkla'}
    </button>
  );
};

export default DynamicStyledButton;
```

## Sonuç

React'te inline stil kullanımı, doğru ve etkili bir şekilde kullanıldığında projelerin stil yönetimini kolaylaştırabilir. Ancak, büyük ve karmaşık projelerde dikkatli olunması ve alternatif stil yönetim yöntemlerinin (örneğin CSS dosyaları, CSS-in-JS kütüphaneleri) değerlendirilmesi önemlidir. Bu eğitimde sunulan bilgiler ve kod örnekleri ile inline stil kullanımının temellerini ve kritik noktalarını öğrenmiş oldunuz. React geliştirme süreçlerinizde bu bilgileri uygulayarak daha temiz ve yönetilebilir kodlar yazabilirsiniz.
