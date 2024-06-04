# React Hata Sınırı Uygulaması

## Giriş

Bu eğitimde, React uygulamalarında hata sınırlarını nasıl kullanacağınızı öğreneceksiniz. Hata sınırları, belirli bileşenler içinde oluşan hataları yakalayıp yönetmek ve bu hatalar meydana geldiğinde yedek bir kullanıcı arayüzü göstermek için kullanılır. Bu uygulama, kullanıcı deneyimini geliştirir ve uygulama çökmesini önler. Eğitim boyunca iyi yapılandırılmış kod parçacıkları ve gerekli açıklamalar ile süreci adım adım inceleyeceğiz.

## Gereksinimler

1. Create React App kullanarak yeni bir React uygulaması oluşturun veya mevcut bir uygulamayı kullanın.
2. Hata sınırı olarak işlev görecek ve hata atabilecek bileşenleri sarmalayacak bir `ErrorBoundary` bileşeni oluşturun.
3. `ErrorBoundary` bileşeninde hataları yakalayıp yönetmek için gerekli mantığı `componentDidCatch` yaşam döngüsü yöntemiyle uygulayın.
4. Hata meydana geldiğinde `ErrorBoundary` bileşeni içinde kullanıcıyı bilgilendiren bir yedek kullanıcı arayüzü (fallback UI) gösterin.
5. Bilerek hata atan bir bileşen olan `ComponentWithError` bileşenini oluşturun.
6. `ComponentWithError` bileşenini `ErrorBoundary` bileşeni ile sararak hata sınırı işlevselliğini test edin.
7. `ComponentWithError` içinde bir hata meydana geldiğinde, `ErrorBoundary` bileşeninin yedek kullanıcı arayüzünü gösterdiğinden emin olun.
8. Yedek kullanıcı arayüzünü CSS kullanarak görsel olarak çekici hale getirin.
9. Hata sınırı ile sarılmış bileşenlerde kasten hatalar oluşturarak uygulamayı test edin ve yedek kullanıcı arayüzünün doğru şekilde görüntülendiğini doğrulayın.

## Uygulama Adımları

## 1. React Uygulamasının Kurulumu

Yeni bir React uygulaması oluşturun veya mevcut bir uygulamayı kullanın.

```sh
npx create-react-app error-boundary-app
cd error-boundary-app
```

## 2. ErrorBoundary Bileşeninin Oluşturulması

`ErrorBoundary.js` adında bir dosya oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Bir hata meydana geldiğinde durumu güncelle
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hataları loglama gibi işlemler burada yapılabilir
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Hata meydana geldiğinde gösterilecek yedek kullanıcı arayüzü
      return <h1>Bir hata oluştu. Lütfen daha sonra tekrar deneyin.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
```

## 3. ComponentWithError Bileşeninin Oluşturulması

`ComponentWithError.js` adında bir dosya oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';

const ComponentWithError = () => {
  throw new Error("Bu, bilerek oluşturulmuş bir hatadır.");
  return <div>Bu bileşen hata oluşturur.</div>;
};

export default ComponentWithError;
```

## 4. Hata Sınırını Kullanma

`App.js` dosyasını aşağıdaki gibi güncelleyin:

```jsx
import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import ComponentWithError from './ComponentWithError';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <ComponentWithError />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
```

## 5. Yedek Kullanıcı Arayüzünün Stilize Edilmesi

`App.css` dosyasını aşağıdaki gibi güncelleyin:

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}
```

## 6. Uygulamanın Test Edilmesi

Uygulamanızı çalıştırarak hata sınırının doğru çalıştığını doğrulayın:

```sh
npm start
```

## 7. Projeyi GitHub'a Yükleme ve Canlı Demo Sağlama

Uygulamanızı GitHub'a yükleyin ve Netlify veya GitHub Pages kullanarak canlı bir demo sağlayın. README dosyanızda nasıl çalıştırılacağına dair talimatlar eklemeyi unutmayın.

## Sonuç

Bu eğitimde, React uygulamalarında hata sınırlarının nasıl kullanılacağını öğrendiniz. Hata sınırları, kullanıcı deneyimini geliştirir ve uygulama çökmesini önler. Bu yöntemleri kendi projelerinizde uygulayarak daha güvenilir ve kullanıcı dostu uygulamalar geliştirebilirsiniz.