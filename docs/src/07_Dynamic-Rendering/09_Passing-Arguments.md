# React ile Etkinlik Yöneticilerine Argüman Geçirme Eğitimi

Bu eğitimde, React'te etkinlik yöneticilerine nasıl argüman geçireceğinizi öğreneceksiniz. Bu, belirli bilgilere dayalı eylemleri gerçekleştirmek için faydalıdır ve etkinlik veya bileşenle ilgili belirli bilgileri işlemek gerektiğinde kullanılır. Eğitim boyunca, kod parçacıkları iyi yapılandırılmış ve titiz olacaktır.

## Adım 1: Bileşenler İçin Yeni Bir Klasör Oluşturma

Projenizin `src` dizini içinde, bileşenleriniz için `components` adlı yeni bir klasör oluşturun. Bu klasör, projenizin bileşenlerini düzenli ve yönetilebilir tutmak için kullanılacaktır.

```sh
mkdir src/components
```

## Adım 2: Button Bileşeni Oluşturma

`components` klasörü içinde, `ButtonWithArgs.jsx` adlı yeni bir JSX dosyası oluşturun ve basit bir fonksiyonel bileşen tanımlayın.

```jsx
// src/components/ButtonWithArgs.jsx
import React from 'react';

const ButtonWithArgs = () => {
    return (
        <button>Click me</button>
    );
};

export default ButtonWithArgs;
```

## Adım 3: Etkinlik Yöneticisi Fonksiyonu Oluşturma

`ButtonWithArgs` bileşeni içinde, bir tıklama etkinliğini yönetecek ve bir argüman alacak bir fonksiyon tanımlayın.

```jsx
// src/components/ButtonWithArgs.jsx
import React from 'react';

const ButtonWithArgs = () => {
    const handleClick = (message) => {
        alert(message);
    };

    return (
        <button onClick={() => handleClick('Button clicked!')}>Click me</button>
    );
};

export default ButtonWithArgs;
```

## Adım 4: Etkinlik Yöneticisini Bir Argümanla Bir Elemana Bağlama

Bileşenin JSX kısmında, bir buton elementi oluşturun ve handleClick etkinlik yöneticisini bir argümanla bağlamak için bir ok fonksiyonu kullanın.

```jsx
// src/components/ButtonWithArgs.jsx
import React from 'react';

const ButtonWithArgs = () => {
    const handleClick = (message) => {
        alert(message);
    };

    return (
        <button onClick={() => handleClick('Button clicked!')}>Click me</button>
    );
};

export default ButtonWithArgs;
```

## Adım 5: ButtonWithArgs Bileşenini İçe Aktarma ve Kullanma

Parent bileşeninizde veya `App.jsx` dosyasında, `ButtonWithArgs` bileşenini içe aktarın ve JSX içinde kullanın.

```jsx
// src/App.jsx
import React from 'react';
import ButtonWithArgs from './components/ButtonWithArgs';

const App = () => {
    return (
        <div>
            <ButtonWithArgs />
        </div>
    );
};

export default App;
```



 