# Liste Render Etme

Bu eğitim, React kullanarak bir listeyi nasıl render edeceğinizi öğretmeyi amaçlamaktadır. Kod örnekleriyle birlikte adım adım ilerleyerek bir bileşen yapısının nasıl oluşturulacağını ve kullanılacağını öğreneceksiniz. Eğitim boyunca dikkat edilmesi gereken noktaları ve yaygın hataları ele alacağız.

## 1. Proje Yapısının Oluşturulması

İlk olarak, bileşenlerimizi saklayacağımız bir klasör yapısı oluşturmamız gerekiyor.

- Proje dizininde `src` klasörü altında `components` adında yeni bir klasör oluşturun.

## 2. List Bileşeninin Oluşturulması

Yeni klasörümüzde `List.jsx` adında bir dosya oluşturacağız. Bu dosya, listeyi render eden bileşeni içerecek.

```jsx
// src/components/List.jsx

import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
```

## 3. GroceryList Bileşeninin Oluşturulması

`GroceryList.jsx` adında yeni bir bileşen oluşturacağız. Bu bileşen, `List` bileşenini veriyle besleyecek.

```jsx
// src/components/GroceryList.jsx

import React from 'react';
import List from './List';

const GroceryList = () => {
    const groceries = ['Elma', 'Muz', 'Portakal', 'Çilek'];

    return (
        <div>
            <h2>Alışveriş Listesi</h2>
            <List items={groceries} />
        </div>
    );
};

export default GroceryList;
```

## 4. App Bileşenini Güncelleme

`App` bileşenini güncelleyerek `GroceryList` bileşenini kullanacağız.

```jsx
// src/App.js

import React from 'react';
import GroceryList from './components/GroceryList';

const App = () => {
    return (
        <div>
            <h1>React List Render Örneği</h1>
            <GroceryList />
        </div>
    );
};

export default App;
```

# Kritik Noktalar

- **PropTypes Kullanımı**: `List` bileşeninde `PropTypes` kullanarak `items` prop'unun bir dizi string olmasını zorunlu kıldık. Bu, bileşenin beklediği veri türlerini belirterek hataların önlenmesine yardımcı olur.
- **Anahtarlar (Keys)**: Liste öğelerini render ederken, her öğeye benzersiz bir `key` atanması önemlidir. Bu, React'in liste öğelerini doğru şekilde yönetmesini sağlar.
- **Bileşen Yapısı**: Bileşenleri küçük, yönetilebilir ve tekrar kullanılabilir parçalara bölmek, kodun okunabilirliğini ve bakımını kolaylaştırır.

# Yaygın Hatalar ve Çözümleri

- **Anahtar Eksikliği**: Liste öğelerine `key` verilmemesi, performans sorunlarına ve yanlış render edilmelere neden olabilir.
  - Çözüm: Her öğeye benzersiz bir `key` verin.
- **Yanlış Prop Türleri**: Bileşenlerin beklediği prop türlerinin doğru belirtilmemesi, çalışma zamanı hatalarına yol açabilir.
  - Çözüm: `PropTypes` kullanarak prop türlerini açıkça belirtin.

Bu eğitimde, React kullanarak bir liste bileşenini nasıl oluşturacağınızı ve render edeceğinizi öğrendiniz. Bu yapı, uygulamanızda tekrar tekrar kullanabileceğiniz esnek ve genişletilebilir bir temel sağlar.