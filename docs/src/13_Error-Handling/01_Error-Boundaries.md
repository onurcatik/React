# React'te Hata Sınırları

## 1. Giriş

React uygulamalarında hata sınırları, hataları zarif bir şekilde ele almak ve kesintisiz bir kullanıcı deneyimi sağlamak için kritik bir özelliktir. Hata sınırları, uygulamanızın herhangi bir yerinde meydana gelen JavaScript hatalarını yakalamak için tasarlanmış özel React bileşenleridir. Bu hataları kaydederek ve bir yedek UI render ederek, hata sınırları tüm bileşen ağacının çökmesini önler. Bunun yerine, bir bileşen içinde bir hata oluştuğunda sadece yedek UI görüntülenir ve uygulamanın geri kalanı beklendiği gibi çalışmaya devam eder.

## 2. Hata Sınırlarının Tanımı ve Önemi

Hata sınırları, React uygulamalarında meydana gelen hataları izole etmek ve ele almak için kullanılır. Özellikle büyük ve karmaşık uygulamalarda, bir hatanın tüm uygulamayı çökertmesi kullanıcı deneyimini olumsuz etkiler. Hata sınırları sayesinde, sadece hatanın meydana geldiği bileşen etkilenir ve uygulamanın geri kalanı çalışmaya devam eder. Bu, kullanıcıların uygulamayı kullanmaya devam etmelerini sağlar ve hataların daha yönetilebilir hale gelmesine yardımcı olur.

## 3. Hata Sınırlarının Oluşturulması

React 16.x sürümünden itibaren, hata sınırları yalnızca sınıf bileşenleri kullanılarak oluşturulabilir. Ancak, React 18 sürümünden itibaren, `ErrorBoundary` bileşeni ve `useErrorHandler` kancası kullanılarak fonksiyonel bileşenler ile hata sınırları oluşturulabilir.

### 3.1 Sınıf Bileşenleri ile Hata Sınırları

Aşağıda, sınıf bileşenleri kullanarak bir hata sınırı oluşturma örneği verilmiştir:

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Hata durumunu güncelle
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hataları bir hata raporlama servisine gönder
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Yedek UI render
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
```

### 3.2 Fonksiyonel Bileşenler ile Hata Sınırları

React 18 ile birlikte, fonksiyonel bileşenlerde hata sınırları oluşturmak için `ErrorBoundary` bileşeni ve `useErrorHandler` kancası kullanılabilir:

```jsx
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function MyComponent() {
  const handleError = useErrorHandler();
  
  // Bir hata fırlatmak için örnek
  const throwError = () => {
    try {
      // Hata oluşturan kod
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div>
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
```

## 4. Hata Sınırlarının Kullanım Alanları

Hata sınırları aşağıdaki durumlarda özellikle yararlıdır:

- Üçüncü taraf kütüphaneler kullanıldığında ve bu kütüphanelerin hataları ele almadığında.
- Karmaşık bileşen yapılarında, bileşenlerin belirli parçalarının izole edilmesi gerektiğinde.
- Kullanıcı etkileşimlerine bağlı olarak meydana gelen hataların kullanıcı deneyimini olumsuz etkilemesini önlemek için.

