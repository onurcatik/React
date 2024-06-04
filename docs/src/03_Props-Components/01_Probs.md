# Props

Bu eğitim, React kütüphanesini kullanarak yazılım geliştiricilerin bileşenler arası veri aktarımını nasıl gerçekleştirebileceğini ele alacaktır. Eğitim boyunca, props (properties) kullanımı hakkında detaylı bilgiler verilecek ve örnek kod parçacıkları ile konunun daha iyi anlaşılması sağlanacaktır. Eğitimde verilen bilgiler, yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacak şekilde hazırlanmıştır.

## Props Nedir?

Props, "properties" kelimesinin kısaltmasıdır ve React bileşenleri arasında veri geçişini sağlamak için kullanılır. Props, bileşenlerin yeniden kullanılabilir ve özelleştirilebilir olmasını sağlar. Bir bileşenden diğerine veri aktarımı props ile gerçekleştirilir ve bu veri, child (alt) bileşen içinde doğrudan değiştirilmemelidir. Props, sadece okunabilir olarak ele alınmalıdır.

## Props Kullanımı

### Adım 1: Bileşenler Klasörü Oluşturma

Projenizin `src` dizininde yeni bir klasör oluşturun ve bu klasöre `components` adını verin.

```bash
src/
└── components/
```

### Adım 2: Yeni Bir Bileşen Oluşturma

`components` klasörünün içinde `ChildComponent.jsx` adlı yeni bir dosya oluşturun.

### Adım 3: React Bileşeninin Temel Yapısını Ekleyin

`ChildComponent.jsx` dosyasına aşağıdaki kodu ekleyin:

```jsx
import React from 'react';

const ChildComponent = () => {
  return (
    <div>
      Child Component
    </div>
  );
};

export default ChildComponent;
```

### Adım 4: Child Bileşene Prop Ekleme

`ChildComponent` fonksiyonunu, `message` adlı bir prop kabul edecek şekilde düzenleyin:

```jsx
import React from 'react';

const ChildComponent = ({ message }) => {
  return (
    <div>
      {message}
    </div>
  );
};

export default ChildComponent;
```

### Adım 5: Child Bileşeni Parent Bileşende İçe Aktarma ve Kullanma

`src/App.jsx` dosyasında `ChildComponent` bileşenini içe aktarın ve JSX içinde kullanarak `message` propunu geçirin:

```jsx
import React from 'react';
import ChildComponent from './components/ChildComponent';

const App = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message="Hello from the parent component!" />
    </div>
  );
};

export default App;
```

