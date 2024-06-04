# Bileşen (Component) Rendering


Bu eğitimin amacı, React geliştirme ortamını kurma, bileşen renderinginin temel kavramlarını anlama ve basit bir bileşen rendering örneği oluşturarak uygulamalı deneyim kazanmaktır. Bu eğitimi tamamlayarak, React kullanarak web siteleri oluşturma becerilerinizi geliştireceksiniz.

## **Gereksinimler:**

1. Projenin kaynak klasörü içinde "components" adında yeni bir klasör oluşturun.
2. "Components" klasörü içinde "Greeting.jsx" adında yeni bir bileşen dosyası oluşturun.
3. "Greeting" bileşenini, "Hello, React!" gibi basit bir karşılama mesajı render edecek şekilde uygulayın.
4. Ana App bileşeninde "Greeting" bileşenini import edin ve render edin.
5. React uygulamasının karşılama mesajını doğru bir şekilde render ettiğinden emin olun.

## **Teslimat:**

1. React projenizi barındırmak için bir GitHub deposu oluşturun.
2. Kodunuzu depoya commit edin ve pushlayın.
3. Uygulamanızın nasıl çalıştırılacağına dair talimatlar içeren bir README dosyası ekleyin.
4. Uygulamanızın canlı demosunu Netlify veya GitHub Pages gibi bir platform kullanarak sağlayın.

## **Adım Adım Uygulama:**

### 1. React Projesi Kurulumu

İlk olarak, React projesi kurmak için aşağıdaki adımları izleyin:

```bash
npx create-react-app my-react-app
cd my-react-app
```

### 2. "components" Klasörü Oluşturma

Proje dizininde `src` klasörü altında `components` adında bir klasör oluşturun.

```bash
mkdir src/components
```

### 3. "Greeting.jsx" Bileşeni Oluşturma

`src/components` klasörü içinde `Greeting.jsx` dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';

const Greeting = () => {
    return <h1>Hello, React!</h1>;
};

export default Greeting;
```

### 4. Ana Bileşende (App) Greeting Bileşenini Render Etme

Ana bileşen dosyası olan `src/App.js` dosyasını açın ve `Greeting` bileşenini import edip render edin:

```jsx
import React from 'react';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
      </header>
    </div>
  );
}

export default App;
```


