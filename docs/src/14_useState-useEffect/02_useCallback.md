### useCallback Kullanımı ile React Performans Optimizasyonu

React'teki `useCallback` kancası (hook), bir fonksiyonu hatırlama (memoize) işlevi görerek, bağımlılıkları değişmediği sürece fonksiyonun önbelleğe alınmış bir sürümünü döndürür. Bu, performans optimizasyonları için özellikle faydalıdır ve gereksiz render işlemlerini önlemek için fonksiyonları prop olarak geçerken referans eşitliğine dayanan alt bileşenler için önemlidir.

#### `useCallback` Kancası Neden Gereklidir?

1. **Performans Optimizasyonu**: `useCallback`, React uygulamanızın performansını gereksiz render ve fonksiyon yeniden yaratmalarını azaltarak iyileştirir.
2. **Memoization**: Bir geri çağırma fonksiyonunu (callback function) hatırlatarak, bağımlılıklarından biri değiştiğinde fonksiyonun yeniden yaratılmasını sağlar.
3. **Kararlı Fonksiyon Referansları**: `useCallback`, fonksiyonlar için kararlı referanslar sağlar, bu da bu fonksiyonlara props olarak bağımlı bileşenlerle çalışırken önemlidir.
4. **Alt Bileşen Render'larını Azaltma**: `React.memo` ile kullanıldığında, `useCallback`, hatırlanan fonksiyonları props olarak kullanan alt bileşenlerde gereksiz render'ları önleyebilir.
5. **Pahalı Hesaplamaları Optimize Etme**: `useCallback`, uzun süre çalışması gereken pahalı hesaplamaları veya fonksiyonları hatırlamak için kullanılabilir, böylece uygulamanızın genel performansını artırır.
6. **Sonsuz Döngüleri Önleme**: Bazı senaryolarda, `useCallback`, `useEffect` gibi kancaların bağımlılıkları içinde sürekli değişen fonksiyon referanslarından kaynaklanan sonsuz döngüleri önlemeye yardımcı olabilir.

#### Örnek Uygulama

Bu örnekte, bir sayaç bileşeni (`Counter`) ve bir liste bileşeni (`List`) oluşturacağız. Sayaç değeri temel alınarak öğeler oluşturulacak ve `useCallback` kancasının liste bileşeninde kullanılıp kullanılmamasının etkilerini gözlemleyeceğiz.

##### `useCallback` Olmadan

**Adımlar**:

1. React projenizin `src` klasöründe, `components` adında yeni bir klasör oluşturun (eğer zaten mevcut değilse).
2. `components` klasöründe `Counter.jsx` adında bir bileşen oluşturun.
3. `components` klasöründe `List.jsx` adında bir bileşen oluşturun.

```jsx
// Counter.jsx
import React, { useState } from 'react';
import List from './List';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <List counter={counter} />
    </div>
  );
};

export default Counter;

// List.jsx
import React, { useEffect, useState } from 'react';

const List = ({ counter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems((prevItems) => [...prevItems, counter]);
  }, [counter]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
```

Bu yapılandırmada, `Counter` bileşenindeki `increment` fonksiyonu sayaç değerini günceller ve `List` bileşeni sayaç değerini bir prop olarak alır. Sayaç değeri değiştiğinde, `List` bileşenindeki `useEffect` tetiklenir ve listeye yeni bir öğe eklenir.

##### `useCallback` ile

Şimdi, `List` bileşenini `useCallback` kullanacak şekilde değiştirelim:

```jsx
// List.jsx
import React, { useEffect, useState, useCallback } from 'react';

const List = ({ counter }) => {
  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems((prevItems) => [...prevItems, counter]);
  }, [counter]);

  useEffect(() => {
    addItem();
  }, [addItem]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
```

Bu versiyonda, `useCallback` kancasını `addItem` fonksiyonunu hatırlatmak (memoize) için tanıttık. Bu şekilde, `addItem` fonksiyonunun sadece sayaç değeri değiştiğinde yeniden yaratılmasını sağladık. Sonuç olarak, `List` bileşenindeki `useEffect`, sadece `addItem` fonksiyon referansı değiştiğinde çalışacaktır, bu da sayaç değeri değiştiğinde gerçekleşir.

#### Sonuç

Her iki durumda da uygulamanın görsel çıktısı aynı kalır. Ancak, `useCallback` kullanmanın temel farkı, performans optimizasyonunda ve gereksiz render'ların önlenmesinde yatmaktadır. Bu spesifik örnekte, bileşenler nispeten basit olduğundan ve render sayısı az olduğundan performans farkı fark edilmeyebilir. Ancak, daha karmaşık uygulamalarda ve daha büyük bileşen ağaçlarında, `useCallback` kullanmak, gereksiz render sayısını azaltarak performansı iyileştirmeye yardımcı olabilir.
