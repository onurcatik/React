#  Dependency Array Kullanımı

React uygulamalarında `useEffect` kancası (hook) kullanılırken Dependency Array (Bağımlılık Dizisi), etkinin ne zaman çalıştırılacağını belirler. Bağımlılık dizisine ne geçirildiğine bağlı olarak, üç farklı şekilde davranabilir:

1. Bağımlılık Dizisi Yok (No Dependency Array)
2. Boş Bağımlılık Dizisi (Empty Dependency Array)
3. Bağımlılıklarla Dizi (Array with Dependencies)

## 1. Bağımlılık Dizisi Yok

Eğer bir bağımlılık dizisi sağlamazsanız, etki her render işleminden sonra çalışır. Bu durumda `useEffect` her render sonrasında çalışacaktır.

**Sözdizimi:**

```javascript
useEffect(() => {
  // Kodunuz burada çalışır
});
```

**Örnek:**

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered');
  });

  return (
    <div>
      <p>{count} defa tıklandı</p>
      <button onClick={() => setCount(count + 1)}>Tıkla</button>
    </div>
  );
}

export default Example;
```

Burada, `console.log` başlangıç render'ından sonra ve her sonraki render'dan sonra (yani her butona tıklandığında ve `count` değiştiğinde) çalışacaktır.

## 2. Boş Bağımlılık Dizisi

Eğer bağımlılık olarak boş bir dizi `[]` sağlarsanız, etki yalnızca bir kez çalışır, yani sadece başlangıç render'ından sonra çalışır.

**Sözdizimi:**

```javascript
useEffect(() => {
  // Kodunuz burada çalışır
}, []);
```

**Örnek:**

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('This only logs once after initial render');
  }, []);

  return (
    <div>
      <p>{count} defa tıklandı</p>
      <button onClick={() => setCount(count + 1)}>Tıkla</button>
    </div>
  );
}

export default Example;
```

Bu örnekte, `console.log` sadece bileşen ilk render edildiğinde bir kez çalışacaktır, sonrasında yeniden render edilse bile çalışmaz.

## 3. Bağımlılıklarla Dizi

Eğer dizinin içine bazı değerler sağlarsanız, etki başlangıç render'ından sonra ve bu değerler her değiştiğinde çalışır.

**Sözdizimi:**

```javascript
useEffect(() => {
  // Kodunuz burada çalışır
}, [dep1, dep2]);
```

**Örnek:**

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count değişti: ${count}`);
  }, [count]);

  return (
    <div>
      <p>{count} defa tıklandı</p>
      <button onClick={() => setCount(count + 1)}>Tıkla</button>
    </div>
  );
}

export default Example;
```

Burada, `console.log` başlangıç render'ından sonra ve her `count` değeri değiştiğinde çalışacaktır (yani her butona tıklandığında).
