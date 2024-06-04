## Sayaç Uygulaması

### Amaç:

React kullanarak bir Sayaç Uygulaması geliştirin. Uygulama kullanıcıların bir sayaç değerini artırmasına, azaltmasına ve sıfırlamasına olanak tanımalıdır.

### Gereksinimler:

1. **Sayaç Ekranı**:
    - Sayaç belirgin bir şekilde görüntülenmelidir, mümkünse bir daire veya kare içinde.
    - Kolayca okunabilir olması için yeterince büyük olmalıdır.
    - Temiz ve okunabilir bir yazı tipi seçin.
    
2. **Düğmeler**:
    - Üç düğmeyi (**`+`**, **`-`** ve **`Sıfırla`**) stilize edin, böylece birbirlerinden kolayca ayırt edilebilir olsunlar.
    - Her düğmenin işlevini temsil etmek için farklı renkler veya tonlar kullanmayı düşünün.
    - Tüm düğmelerin bir hover etkisi olmalıdır.
    
3. **Duyarlılık**:
    - Sayaç Uygulamasının duyarlı olmasını sağlayın. Hem masaüstü hem de mobil görünümlerde iyi görünmelidir.
    - Daha dar bir görünüm için düzenin nasıl değişebileceğini göz önünde bulundurun.
    
4. **Bonus**:
    - Sayaç değiştiğinde veya düğmelere basıldığında ince geçişler veya animasyonlar ekleyin.
    
5. **Dokümantasyon**:
    - CSS'inizi hangi bölümleri stillendirdiğinizi belirtecek şekilde yorumlayın.
    - Bu, başkalarının stil kararlarınızı anlamasına yardımcı olacaktır.

### Teslimat:

1. React projenizi barındırmak için bir GitHub deposu oluşturun.
2. Kodunuzu bu depoya commit ve push edin.
3. Uygulamanızı nasıl çalıştıracağınızı açıklayan bir README dosyası ekleyin.
4. Netlify veya GitHub Pages gibi bir platform kullanarak web sitenizin canlı demosunu sağlayın.

### React Sayaç Uygulaması Eğitimi

#### Adım 1: React Projesi Kurulumu

Öncelikle, React uygulamasını oluşturmak için gerekli araçları kurmamız gerekiyor. Terminal veya komut istemcisinde aşağıdaki komutları çalıştırarak başlayabilirsiniz:

```bash
npx create-react-app sayac-uygulamasi
cd sayac-uygulamasi
```

Bu komutlar, yeni bir React projesi oluşturacak ve proje dizinine geçiş yapacaktır.

#### Adım 2: Uygulama Yapısı

`src` klasörü altında `components` adında bir klasör oluşturun. Bu klasörde `Counter.js` dosyasını oluşturacağız. `Counter.js` dosyası sayaç bileşenimizi içerecek.

`src/components/Counter.js` dosyasını şu şekilde oluşturun:

```jsx
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-display">{count}</h1>
      <div className="button-group">
        <button className="button increment" onClick={increment}>+</button>
        <button className="button decrement" onClick={decrement}>-</button>
        <button className="button reset" onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Counter;
```

#### Adım 3: CSS ile Stil Verme

`src/components` klasöründe `Counter.css` dosyasını oluşturun ve stil tanımlarınızı ekleyin:

```css
.counter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.counter-display {
  font-size: 4rem;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 10px;
}

.button {
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button.increment {
  background-color: #4CAF50;
  color: white;
}

.button.decrement {
  background-color: #f44336;
  color: white;
}

.button.reset {
  background-color: #008CBA;
  color: white;
}

.button:hover {
  opacity: 0.8;
}
```

#### Adım 4: Bileşeni App.js'ye Dahil Etme

`src/App.js` dosyasını açın ve `Counter` bileşenini içeri aktararak kullanın:

```jsx
import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```



