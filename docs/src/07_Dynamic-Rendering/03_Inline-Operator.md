# Inline && Operatörü

Bu eğitimde, React uygulamalarında inline if ifadeleriyle `&&` (mantıksal ve) operatörünün nasıl kullanılacağını detaylı bir şekilde ele alacağız. Bu teknik, belirli bir duruma bağlı olarak bileşenlerin JSX içinde koşullu olarak render edilmesini sağlar. React bileşenlerinde bu yöntemi kullanarak öğeleri durumlarına göre görüntüleyebilir veya gizleyebilirsiniz.

## Adım Adım Uygulama

### 1. Bileşenler İçin Yeni Klasör Oluşturma

Projenizin `src` dizininde, bileşenlerinizi yerleştireceğiniz bir `components` klasörü oluşturun. Bu, projeyi daha düzenli ve yönetilebilir hale getirecektir.

### 2. `ConditionalDisplay` Bileşenini Oluşturma

`components` klasörü içinde `ConditionalDisplay.jsx` adlı bir JSX dosyası oluşturun ve basit bir fonksiyonel bileşen tanımlayın.

```jsx
// components/ConditionalDisplay.jsx
import React from 'react';

const ConditionalDisplay = () => {
  return (
    <div>
      <h1>Conditional Display Component</h1>
    </div>
  );
};

export default ConditionalDisplay;
```

### 3. Durum Değişkeni Kurulumu

`ConditionalDisplay` bileşeni içinde, `useState` hook'unu kullanarak `isShown` adlı bir durum değişkeni oluşturun. Bu değişken, belirli bir öğenin gösterilip gösterilmeyeceğini belirleyecektir.

```jsx
import React, { useState } from 'react';

const ConditionalDisplay = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h1>Conditional Display Component</h1>
    </div>
  );
};

export default ConditionalDisplay;
```

### 4. Görüntüleme Durumunu Değiştirmek İçin Buton Ekleyin

Bileşenin JSX'inde, `isShown` durumunu tıklamayla değiştiren bir buton öğesi oluşturun.

```jsx
import React, { useState } from 'react';

const ConditionalDisplay = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleDisplay = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <h1>Conditional Display Component</h1>
      <button onClick={toggleDisplay}>
        Toggle display
      </button>
    </div>
  );
};

export default ConditionalDisplay;
```

### 5. Inline if ile `&&` Operatörünü Kullanarak Öğeyi Koşullu Olarak Render Edin

JSX içinde, `isShown` değişkenine bağlı olarak bir paragraf öğesini koşullu olarak render edin.

```jsx
import React, { useState } from 'react';

const ConditionalDisplay = () => {
  const [isShown, setIsShown] = useState(false);

  const toggleDisplay = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <h1>Conditional Display Component</h1>
      <button onClick={toggleDisplay}>
        Toggle display
      </button>
      {isShown && <p>This is a conditionally rendered paragraph.</p>}
    </div>
  );
};

export default ConditionalDisplay;
```

### 6. `ConditionalDisplay` Bileşenini İçeri Aktarma ve Kullanma

Ana bileşeninizde veya `App.jsx` dosyanızda `ConditionalDisplay` bileşenini içe aktarın ve JSX içine dahil edin.

```jsx
// src/App.jsx
import React from 'react';
import ConditionalDisplay from './components/ConditionalDisplay';

const App = () => {
  return (
    <div>
      <ConditionalDisplay />
    </div>
  );
};

export default App;
```

### Sonuç

Uygulamayı çalıştırdığınızda ve "Toggle display" butonuna tıkladığınızda, paragraf öğesinin `isShown` durumuna bağlı olarak gösterileceğini veya gizleneceğini göreceksiniz. Bu, React'te `&&` operatörünü kullanarak öğeleri koşullu olarak render etmenin temel bir örneğidir.

