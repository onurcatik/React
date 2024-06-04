# React Custom Hook

## Giriş

React'te özel kancalar (custom hooks), durumsal mantığı birden fazla bileşen arasında kodu tekrarlamadan yeniden kullanmanıza olanak tanıyan fonksiyonlardır. Genellikle "use" öneki ile başlarlar ve ardından özel kancanın adı gelir.

## Özel Kancalara Neden İhtiyaç Duyarız?

Özel kancalar, bileşenler arasında ortak işlevselliği çıkarmanıza ve paylaşmanıza olanak tanır. Bu, kodunuzu daha modüler, yeniden kullanılabilir ve bakımının kolay olmasını sağlar.

## Örnek: Sayaç Durumunu Yöneten Bir Özel Kanca

### Adım Adım İşlem:

1. **Yeni Bir Klasör Oluşturun:**
   `src` klasörünüzde, `components` adında yeni bir klasör oluşturun (eğer zaten mevcut değilse).

2. **useCounter.jsx Dosyasını Oluşturun:**
   `components` klasörünün içine `useCounter.jsx` adlı yeni bir dosya oluşturun.

3. **SampleCounter.jsx Dosyasını Oluşturun:**
   `components` klasörünün içine `SampleCounter.jsx` adlı yeni bir dosya oluşturun.

4. **SampleCounter Bileşenini App.js İçine Dahil Edin:**
   `App.js` dosyanıza `SampleCounter` bileşenini dahil edin ve kullanın.

### Kod Akışı:

1. **useCounter Kancasını Oluşturma:**
   `useCounter` adlı özel bir kanca oluşturun. Bu kanca, opsiyonel bir `initialValue` argümanını kabul eder ve `useState` kullanarak bir sayacın durumunu yönetir.

2. **İşlevleri Tanımlama:**
   `useCounter` içinde, `count` durumunu manipüle etmek için `increment`, `decrement` ve `reset` işlevlerini tanımlayın.

3. **Değerlerin Geri Dönüşü:**
   `useCounter` kancası, `count` durumu ve `increment`, `decrement`, `reset` işlevlerini içeren bir nesne döner.

4. **Counter Bileşeninde Kullanım:**
   `Counter` bileşeninde, özel kancayı `const { count, increment, decrement, reset } = useCounter(0);` şeklinde çağırarak kullanın.

5. **Render İşlemi:**
   `Counter` bileşeni, mevcut sayacın değerini ve sayacı artırmak, azaltmak ve sıfırlamak için üç buton render eder. Buton tıklama olayları, `useCounter` özel kancası tarafından sağlanan ilgili işlevlere bağlanmıştır.

## Kaynak Kod

Aşağıda, yukarıda açıklanan özel kanca ve bileşenlerin kaynak kodu bulunmaktadır:

**useCounter.jsx**
```jsx
import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increment,
    decrement,
    reset
  };
};

export default useCounter;
```

**SampleCounter.jsx**
```jsx
import React from 'react';
import useCounter from './useCounter';

const SampleCounter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SampleCounter;
```

**App.js**
```jsx
import React from 'react';
import SampleCounter from './components/SampleCounter';

function App() {
  return (
    <div className="App">
      <SampleCounter />
    </div>
  );
}

export default App;
```

Bu eğitim, React'te özel kancaların nasıl oluşturulacağını ve kullanılacağını kapsamlı bir şekilde ele almaktadır. Kodunuzu daha modüler ve yeniden kullanılabilir hale getirmek için özel kancaları etkin bir şekilde kullanmayı öğrenmek, daha temiz ve sürdürülebilir bir kod tabanına sahip olmanıza yardımcı olacaktır.