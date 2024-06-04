# React Hata Sınırları ile Hata Yönetimi

React uygulamalarında, beklenmeyen JavaScript hatalarının tüm uygulamayı çökertmesini önlemek için hata sınırları (error boundaries) kullanılır. Bu mekanizma, hataları yakalayıp ele alarak kullanıcıya bir hata arayüzü gösterir ve uygulamanın geri kalanının sorunsuz çalışmasını sağlar. Bu eğitimde, React uygulamalarınızda hata sınırlarını nasıl kullanacağınızı ayrıntılı bir şekilde inceleyeceğiz.

## 1. Proje Yapısının Oluşturulması

Öncelikle, bileşen dosyalarınızı saklayacağınız bir `components` klasörü oluşturun (eğer mevcut değilse). Bu klasör, hata sınırı ve diğer bileşenlerinizi barındıracaktır.

## 2. ErrorBoundary Bileşeninin Oluşturulması

`components` klasörü içinde `ErrorBoundary.jsx` adında yeni bir dosya oluşturun. Bu dosyada hata sınırı bileşenimizi tanımlayacağız.

## ErrorBoundary Bileşeninin Tanımlanması

`ErrorBoundary.jsx` dosyasına aşağıdaki kodu ekleyin:

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Sonraki render işlemi için state güncellenir
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata bilgileri kaydedilebilir veya bir izleme servisine gönderilebilir
    console.log("Hata:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Hata oluştuğunda gösterilecek arayüz
      return <h1>Bir hata oluştu.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Bu kod parçası, `ErrorBoundary` sınıf bileşenini tanımlar. Hata yakalandığında `hasError` state'i `true` olarak güncellenir ve hata mesajı görüntülenir.

## 3. Örnek Bir Bileşenin Oluşturulması

`components` klasörü içinde `Sample.jsx` adında yeni bir dosya oluşturun. Bu dosyada hata oluşturabilecek bir örnek bileşen tanımlayacağız.

## Sample Bileşeninin Tanımlanması

`Sample.jsx` dosyasına aşağıdaki kodu ekleyin:

```jsx
import React from 'react';

const Sample = () => {
  const handleClick = () => {
    throw new Error("Simüle edilmiş hata!");
  };

  return (
    <div>
      <button onClick={handleClick}>Hata Oluştur</button>
    </div>
  );
};

export default Sample;
```

Bu bileşen, bir hata oluşturmak için bir düğme içerir. Düğmeye tıklandığında `handleClick` fonksiyonu çağrılır ve bir hata fırlatılır.

## 4. App Bileşenine ErrorBoundary ve Sample Bileşenlerini Dahil Etmek

`App.jsx` dosyasını açın ve `ErrorBoundary` ile `Sample` bileşenlerini içe aktararak `Sample` bileşenini `ErrorBoundary` bileşeni ile sarın.

## App.jsx Dosyasının Güncellenmesi

```jsx
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Sample />
      </ErrorBoundary>
    </div>
  );
}

export default App;
```

Bu düzenleme ile `Sample` bileşeninde bir hata meydana geldiğinde `ErrorBoundary` bileşeni hatayı yakalayacak ve kullanıcıya bir hata mesajı gösterecektir.

## Sonuç

Bu eğitimde, React uygulamalarınızda hata sınırları kullanarak hataları nasıl yakalayabileceğinizi ve yönetebileceğinizi inceledik. Hata sınırları, uygulamanızın daha kararlı ve kullanıcı dostu olmasını sağlar. Yukarıdaki adımları takip ederek kendi hata yönetim stratejinizi oluşturabilirsiniz.



