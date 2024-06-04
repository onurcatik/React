# React'te Veri Akışı


React, veri akışının tek yönlü olduğu ve verilerin üst bileşenlerden alt bileşenlere "props" adı verilen özellikler aracılığıyla iletildiği bir yapıya sahiptir. Bu temel ilke, "tek yönlü veri bağlama" veya "tek yönlü veri akışı" olarak da bilinir. Bu eğitimde, React'te veri akışının nasıl gerçekleştiğini adım adım açıklayacağız. 


## 1. Bileşenler için Yeni Bir Klasör Oluşturma

Projenizin `src` dizininde, bileşenler için yeni bir klasör oluşturun. Bu klasörün adı `components` olacak.

```bash
mkdir src/components
```

## 2. Parent Bileşenini Oluşturma

`components` klasörü içinde `Parent.jsx` adında yeni bir JSX dosyası oluşturun ve basit bir fonksiyonel bileşen tanımlayın. Bu bileşen, bir mesajı temsil eden bir duruma sahip olacak.

```jsx
// src/components/Parent.jsx
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState('Merhaba, bu bir mesajdır!');

  return (
    <div>
      <h1>Parent Bileşeni</h1>
      <Child message={message} />
    </div>
  );
};

export default Parent;
```

## 3. Child Bileşenini Oluşturma

`components` klasörü içinde `Child.jsx` adında başka bir JSX dosyası oluşturun. Bu bileşen, Parent bileşeninden gelen `message` prop'unu alacak ve gösterecek.

```jsx
// src/components/Child.jsx
import React from 'react';

const Child = ({ message }) => {
  return (
    <div>
      <h2>Child Bileşeni</h2>
      <p>{message}</p>
    </div>
  );
};

export default Child;
```

## 4. Parent Bileşenini Kullanma ve İçe Aktarma

`App.jsx` dosyasında, Parent bileşenini içe aktarın ve JSX içinde kullanın.

```jsx
// src/App.jsx
import React from 'react';
import Parent from './components/Parent';

const App = () => {
  return (
    <div>
      <h1>React Uygulaması</h1>
      <Parent />
    </div>
  );
};

export default App;
```

# Sonuç

Uygulamayı çalıştırdığınızda, Parent bileşeninin mesaj durumunu props aracılığıyla Child bileşenine aktardığını ve Child bileşeninin bu mesajı gösterdiğini göreceksiniz. Bu, React'te verinin üst bileşenlerden alt bileşenlere nasıl aktığını gösteren bir örnektir.

