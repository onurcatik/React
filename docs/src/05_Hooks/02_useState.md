## useState Kancası (Hook) Kullanımı

Bu eğitim, React'te `useState` kancasının nasıl kullanılacağını ayrıntılı bir şekilde ele almaktadır. Eğitim, ciddi ve bilimsel bir dil kullanılarak yazılmıştır ve yazılım geliştirme alanında beklenen titizlik ve standartları yansıtır. Eğitim boyunca, iyi yapılandırılmış kod parçacıkları sağlanmıştır.

### 1. Bileşenler için Klasör Oluşturma

Projenizin `src` dizininde, bileşenlerinizi organize etmek için bir klasör oluşturun. Eğer yoksa, bu klasörü şu şekilde oluşturabilirsiniz:

```bash
mkdir src/components
```

### 2. Yeni Bileşen Dosyası Oluşturma

`components` klasörünün içinde, oluşturmak istediğiniz bileşenin adını taşıyan yeni bir JSX dosyası oluşturun. Örneğin, bir sayaç bileşeni için:

```bash
touch src/components/Counter.jsx
```

### 3. React ve useState Kancasını İçe Aktarma

Oluşturduğunuz `Counter.jsx` dosyasında, React ve `useState` kancasını içe aktarın:

```javascript
import React, { useState } from 'react';
```

### 4. Fonksiyonel Bileşen Oluşturma

Durum eklemek istediğiniz fonksiyonel bileşeni yazın:

```javascript
const Counter = () => {
    // useState kullanarak durum değişkenini tanımlayın
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Sayım: {count}</p>
            <button onClick={() => setCount(count + 1)}>Artır</button>
        </div>
    );
};
```

### 5. Durumu useState ile Tanımlama

Yukarıdaki örnekte görüldüğü gibi, `useState` kancasını kullanarak bir durum değişkeni (`count`) ve bu durumu güncellemek için bir fonksiyon (`setCount`) tanımladık.

### 6. Durumu Görüntüleme

Bileşenin JSX'inde, durum değişkeninin değerini görüntüleyin:

```javascript
<p>Sayım: {count}</p>
```

### 7. Durumu Güncelleme

Durumu güncellemek için, `useState` tarafından döndürülen güncelleme fonksiyonunu kullanın. Bu örnekte, butona tıklandığında `setCount` fonksiyonu çağrılarak `count` değişkeninin değeri artırılmaktadır:

```javascript
<button onClick={() => setCount(count + 1)}>Artır</button>
```

### 8. Bileşeni Dışa Aktarma

Bileşeni diğer dosyalarda kullanabilmek için dışa aktarın:

```javascript
export default Counter;
```

### 9. Bileşeni İçe Aktarma ve Kullanma

Ana bileşende veya `App.jsx` dosyasında, `Counter` bileşenini içe aktarın ve JSX içinde kullanın:

```javascript
import React from 'react';
import Counter from './components/Counter';

const App = () => {
    return (
        <div>
            <h1>Hoş Geldiniz</h1>
            <Counter />
        </div>
    );
};

export default App;
```

### Sonuç

Bu eğitimde, React'te `useState` kancasının nasıl kullanılacağını ayrıntılı bir şekilde ele aldık. Bu kancayı kullanarak fonksiyonel bileşenlere durum ekleyebilir ve durumu güncelleyebilirsiniz. Eğitim boyunca verilen adımları takip ederek, `useState` kancasının temel kullanımını öğrenmiş oldunuz. 