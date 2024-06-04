# React Hook

Bu eğitimde, React'in Hook'larını kullanarak fonksiyonel bileşenlerde durum (state) ve diğer React özelliklerine nasıl erişileceğini öğreneceksiniz. İçeriğimiz ciddi ve bilimsel bir tonda olup, yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacaktır. Kod parçacıkları iyi yapılandırılmış ve açıklayıcı olacaktır.

## Hook Nedir?

React Hook'ları, fonksiyonel bileşenlerin durum ve diğer React özelliklerine erişim sağlamasına olanak tanır. Hook'lar sayesinde, durum yönetimi ve yan etkilerin kontrolü daha temiz ve sürdürülebilir kod yazmanızı sağlar. 

### Hook'ların Kuralları

Hook'ların doğru çalışması için bazı kurallar vardır:

1. Hook'lar sadece React fonksiyon bileşenleri içinde çağrılabilir.
2. Hook'lar sadece bir bileşenin en üst seviyesinde çağrılabilir. Koşullu veya döngü içinde çağrılamazlar.
3. Hook'lar koşullu olarak kullanılamaz.

### Yaygın Olarak Kullanılan Hook'lar

React'te yerleşik olarak gelen ve sıklıkla kullanılan bazı Hook'lar şunlardır:

- `useState`
- `useEffect`
- `useContext`

Ayrıca, özel ihtiyaçlarınız için kendi özel Hook'larınızı oluşturabilir ve durumlu mantığı birden çok bileşen arasında tekrar kullanabilirsiniz.

## useState Hook'u

`useState` Hook'u, fonksiyonel bileşenlerde durum yönetimini sağlar. Bir durum değeri ve bu durumu güncellemek için bir fonksiyon döner.

### Örnek Kullanım

```javascript
import React, { useState } from 'react';

function Counter() {
  // count adında bir durum ve setCount adında bir güncelleme fonksiyonu tanımlanır.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Butona {count} defa tıkladınız.</p>
      <button onClick={() => setCount(count + 1)}>
        Tıkla
      </button>
    </div>
  );
}

export default Counter;
```

Bu örnekte, `useState` ile bir sayaç durumu oluşturulmuş ve bir butona tıklanıldığında durum güncellenmiştir.

## useEffect Hook'u

`useEffect` Hook'u, yan etkilerin yönetimini sağlar. Yan etkiler, veri getirimi, abonelikler veya manuel DOM manipülasyonları gibi işlemleri içerir.

### Örnek Kullanım

```javascript
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Bu kod parçası her render işleminden sonra çalışır.
    document.title = `Tıkladığınız sayısı: ${count}`;

    // Temizlik işlemleri için opsiyonel bir geri dönüş fonksiyonu dönebilirsiniz.
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Sadece count değiştiğinde etkisi çalışır.

  return (
    <div>
      <p>Butona {count} defa tıkladınız.</p>
      <button onClick={() => setCount(count + 1)}>
        Tıkla
      </button>
    </div>
  );
}

export default ExampleComponent;
```

Bu örnekte, `useEffect` kullanılarak her render işleminden sonra sayfa başlığının güncellenmesi sağlanmıştır.

## useContext Hook'u

`useContext` Hook'u, Context API ile tanımlanan değerleri kullanmayı sağlar. Bu, bileşen ağacının derinliklerindeki bileşenlere veri geçirme işlemini kolaylaştırır.

### Örnek Kullanım

```javascript
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Buton</button>;
}

export default ThemedButton;
```

Bu örnekte, `useContext` kullanılarak `ThemeContext`'ten alınan tema değeri butonun sınıf adı olarak kullanılmıştır.

## Özel Hook Oluşturma

Özel Hook'lar, birden fazla bileşende tekrar kullanılabilir mantık oluşturmanızı sağlar. Bu, kodunuzu daha modüler ve yönetilebilir hale getirir.

### Örnek Kullanım

```javascript
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup işlemi
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export default useWindowWidth;
```

Bu özel Hook, pencere genişliğini takip eder ve bu bilgiyi kullanmak isteyen bileşenlere sağlar.

```javascript
import React from 'react';
import useWindowWidth from './useWindowWidth';

function WidthComponent() {
  const width = useWindowWidth();

  return (
    <div>
      <p>Pencere genişliği: {width}px</p>
    </div>
  );
}

export default WidthComponent;
```

Bu örnekte, `useWindowWidth` özel Hook'u kullanılarak pencere genişliği takip edilmiş ve bileşen içerisinde kullanılmıştır.

## Sonuç

React Hook'ları, fonksiyonel bileşenlerde durum ve yan etkileri yönetmeyi kolaylaştırarak daha temiz ve sürdürülebilir kod yazmanızı sağlar. Bu eğitimde, `useState`, `useEffect`, `useContext` gibi yaygın olarak kullanılan Hook'ların yanı sıra özel Hook oluşturmayı öğrendiniz. Hook'ların doğru ve etkili kullanımı, React uygulamalarınızı daha modüler ve yönetilebilir hale getirecektir.