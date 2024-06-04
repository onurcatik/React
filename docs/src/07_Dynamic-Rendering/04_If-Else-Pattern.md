# React If-Else Şablonları

Bu eğitimde, React bileşenlerinde koşullu render işlemlerini ele alacağız. React'te koşullu render işlemleri, belirli koşullara bağlı olarak elemanların görüntülenmesini veya gizlenmesini sağlar. Bu süreçte kullanılan iki temel teknik, "Mantıksal && operatörü ile Inline if" ve "JSX'te If-Else" teknikleridir. Bu tekniklerin nasıl çalıştığını ve hangi durumlarda tercih edilmesi gerektiğini ayrıntılı olarak inceleyeceğiz.

## Mantıksal && Operatörü ile Inline if

Mantıksal && operatörü, koşullu render işlemleri için kısa devre değerlendirmesi (short-circuit evaluation) yapar. Bu operatör kullanılarak şu işlemler gerçekleştirilir:

- && operatörünün sol tarafındaki koşul doğru olduğunda, sağ taraftaki eleman render edilir.
- && operatörünün sol tarafındaki koşul yanlış olduğunda, hiçbir şey render edilmez.
- Bu teknik, sadece belirli bir koşulun sağlanması durumunda bir elemanı render etmeniz gerektiğinde basit ve etkili bir çözümdür.

## Kod Örneği

```jsx
const Greeting = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn && <h1>Welcome back!</h1>}
  </div>
);
```

## JSX'te If-Else Kullanımı

JSX'te if-else kullanımı, JavaScript'in if-else ifadeleri ile JSX içinde elemanları koşullu olarak render etme tekniğidir. Bu teknik, daha esnek olup, birden fazla koşul veya dallanma gerektiğinde kullanılır.

- If-else ifadeleri bir fonksiyon içinde veya hemen çağrılan bir fonksiyon ifadesi (IIFE) kullanılarak JSX içinde yer alır.
- Daha karmaşık durumlarda birden fazla eleman veya kod dalının render edilmesi gerektiğinde kullanılır.

## Adım Adım JSX'te If-Else Kullanımı

### 1. Bileşenler İçin Yeni Klasör Oluşturma

Projenizin `src` dizini içinde `components` adında yeni bir klasör oluşturun.

### 2. ConditionalGreeting Bileşenini Oluşturma

`components` klasörü içinde `ConditionalGreeting.jsx` adında yeni bir JSX dosyası oluşturun ve basit bir fonksiyonel bileşen tanımlayın.

```jsx
import React, { useState } from 'react';

const ConditionalGreeting = () => {
  const [isMorning, setIsMorning] = useState(true);

  return (
    <div>
      <button onClick={() => setIsMorning(!isMorning)}>
        Toggle Greeting
      </button>
      {(() => {
        if (isMorning) {
          return <h1>Good Morning!</h1>;
        } else {
          return <h1>Good Evening!</h1>;
        }
      })()}
    </div>
  );
};

export default ConditionalGreeting;
```

### 3. State Değişkenini Ayarlama

`ConditionalGreeting` bileşeni içinde `useState` kancası kullanarak `isMorning` adında bir state değişkeni oluşturun. Bu değişken, hangi selamlamanın görüntüleneceğini belirleyecektir.

### 4. Selamlamayı Değiştiren Buton Eklemek

Bileşenin JSX kısmında, tıklandığında `isMorning` durumunu değiştiren bir buton elementi oluşturun.

### 5. If-Else İfadesi Kullanarak Elemanları Koşullu Olarak Render Etme

JSX içinde if-else ifadelerini kullanabilmek için koşullu mantığı bir fonksiyon içine sarın veya hemen çağrılan bir fonksiyon ifadesi (IIFE) kullanın. Bu örnekte, IIFE kullanacağız.

### 6. ConditionalGreeting Bileşenini İthal Etme ve Kullanma

Ana bileşen veya `App.jsx` dosyasında `ConditionalGreeting` bileşenini ithal edin ve JSX içinde kullanın.

```jsx
import React from 'react';
import ConditionalGreeting from './components/ConditionalGreeting';

const App = () => (
  <div>
    <ConditionalGreeting />
  </div>
);

export default App;
```

## Sonuç

Bu eğitimde, React bileşenlerinde koşullu render işlemleri için kullanılan iki temel teknik olan mantıksal && operatörü ile inline if ve JSX'te if-else ifadelerini inceledik. Her iki tekniğin de avantajları ve kullanım durumlarına göre tercih edilmesi gereken senaryoları ele aldık. Uygulamalı örneklerle, bu tekniklerin nasıl uygulanacağını gösterdik.


