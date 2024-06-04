# React Bileşenlerine Giriş

React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. Bu kütüphanenin temel yapı taşları "bileşenler"dir. Bu eğitimde, React bileşenlerinin temellerini, bileşen türlerini ve bu bileşenlerin nasıl oluşturulacağını ele alacağız.

## 1. Bileşen Nedir?

Bileşenler, bir React uygulamasının yeniden kullanılabilir ve bağımsız parçalarıdır. Kullanıcı arayüzünün (UI) hem yapısını (JSX) hem de davranışını (JavaScript) kapsarlar. Bileşenler, uygulamaların modüler ve bakımı kolay olmasını sağlar.

## 2. Bileşen Türleri

React'te iki ana bileşen türü vardır:

- **Fonksiyonel Bileşenler (Functional Components)**
- **Sınıf Bileşenleri (Class Components)**

Bu eğitimde, öncelikle fonksiyonel bileşenlere odaklanacağız.

## 3. Fonksiyonel Bileşenler

Fonksiyonel bileşenler, basit bir JavaScript fonksiyonu olarak tanımlanabilir. Bu bileşenler, props (özellikler) adı verilen parametreler alır ve JSX (JavaScript XML) döner. JSX, HTML'ye benzeyen bir sözdizimidir ve JavaScript kodu içinde HTML benzeri yapılar oluşturmanıza olanak tanır.

### 3.1. Arrow Function ile Fonksiyonel Bileşen

```jsx
import React from 'react';

const MerhabaDunya = () => {
  return (
    <div>
      <h1>Merhaba Dünya!</h1>
    </div>
  );
};

export default MerhabaDunya;
```

Bu örnekte, `MerhabaDunya` adlı bir fonksiyonel bileşen oluşturulmuştur. Bu bileşen, `Merhaba Dünya!` yazısını içeren bir `div` döner.

### 3.2. Normal Function ile Fonksiyonel Bileşen

Fonksiyonel bir bileşeni normal bir fonksiyon kullanarak da oluşturabilirsiniz. Bu yöntem, ok fonksiyonları kullanmaya benzer.

```jsx
import React from 'react';

function MerhabaDunya() {
  return (
    <div>
      <h1>Merhaba Dünya!</h1>
    </div>
  );
}

export default MerhabaDunya;
```

Bu örnekte, `MerhabaDunya` bileşeni normal bir fonksiyon olarak tanımlanmıştır ve aynı sonucu döner.

## 4. Bileşenlerin Özellikleri (Props)

Props, bileşenlere veri geçmek için kullanılan mekanizmadır. Bir bileşen, props aracılığıyla ebeveyn bileşenden veri alabilir.

### 4.1. Props Kullanımı

```jsx
import React from 'react';

const Selamla = (props) => {
  return (
    <div>
      <h1>Merhaba, {props.isim}!</h1>
    </div>
  );
};

export default Selamla;
```

Bu örnekte, `Selamla` bileşeni `isim` adında bir prop alır ve bu değeri `Merhaba, {isim}!` ifadesi içinde kullanır.

```jsx
import React from 'react';
import Selamla from './Selamla';

const App = () => {
  return (
    <div>
      <Selamla isim="Ali" />
      <Selamla isim="Ayşe" />
    </div>
  );
};

export default App;
```

`App` bileşeninde, `Selamla` bileşeni iki kez kullanılmış ve her seferinde farklı bir `isim` prop'u geçilmiştir. Bu, bileşenlerin yeniden kullanılabilirliğini gösterir.

 
