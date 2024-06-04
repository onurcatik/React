# Higher-Order Components (HOC) Kullanım Durumları

Higher-Order Components (HOCs), React'te yaygın olarak kullanılan ve birden fazla bileşen arasında ortak mantığı paylaşmanızı ve yeniden kullanmanızı sağlayan gelişmiş bir desendir. Bu eğitici yazıda, HOC'lerin temel kullanım durumlarını ve her bir kullanım durumuna ait kod örneklerini ele alacağız. İçeriğin ciddi ve bilimsel bir tonla yazıldığını, doğru bilgiye dayalı olduğunu ve yazılım geliştirme alanında beklenen titizlik ve standartları yansıttığını göreceksiniz.

## 1. Kodun Yeniden Kullanımı

HOCs'in en temel kullanım durumu, kod tekrarlamasını önlemektir. Aynı mantığı paylaşan birden fazla bileşeniniz varsa, bu mantığı kapsüllemek ve her bileşene uygulamak için bir HOC oluşturabilirsiniz. Bu, mantığın tek bir yerde olmasını ve kolayca yönetilmesini sağlar.

### Örnek: Kullanıcı Etkileşimlerini veya Analitik Olaylarını Kaydetme

Aşağıda, kullanıcı etkileşimlerini kaydeden bir HOC örneği bulunmaktadır:

```jsx
import React, { Component } from 'react';

// HOC tanımı
const withLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Örnek bileşen
class Button extends Component {
  render() {
    return <button>{this.props.label}</button>;
  }
}

// HOC ile sarmalanmış bileşen
const LoggingButton = withLogging(Button);

export default LoggingButton;
```

Bu örnekte, `withLogging` HOC'si, bileşen her yüklendiğinde bir mesaj kaydeder.

## 2. Props Değiştirme

HOC'ler, sarılan bileşene geçilen props'ları değiştirmek için kullanılabilir. Bu, yeni props eklemeyi, gereksiz props'ları kaldırmayı veya mevcut props'ları dönüştürmeyi içerebilir.

### Örnek: Geçilen Ölçü Birimlerini Dönüştürme

Aşağıda, Fahrenheit'ten Celsius'a sıcaklık birimlerini dönüştüren bir HOC örneği bulunmaktadır:

```jsx
import React from 'react';

const withUnitConversion = (WrappedComponent) => {
  return class extends React.Component {
    convertTemperature(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    render() {
      const { temperature, ...otherProps } = this.props;
      const celsius = this.convertTemperature(temperature);

      return <WrappedComponent temperature={celsius} {...otherProps} />;
    }
  };
};

// Örnek bileşen
const TemperatureDisplay = ({ temperature }) => (
  <div>Temperature: {temperature}°C</div>
);

// HOC ile sarmalanmış bileşen
const ConvertedTemperatureDisplay = withUnitConversion(TemperatureDisplay);

export default ConvertedTemperatureDisplay;
```

Bu örnekte, `withUnitConversion` HOC'si, Fahrenheit olarak verilen sıcaklık değerini Celsius'a dönüştürür ve sarılan bileşene geçirir.

## 3. Koşullu Render Etme

HOC'ler, belirli koşullara bağlı olarak sarılan bileşenin render edilmesini kontrol etmek için kullanılabilir. Bu, kullanıcı izinlerine veya uygulama durumuna göre bileşenleri gizlemek veya göstermek için yararlı olabilir.

### Örnek: Veri Getirilirken Yükleniyor Simgesi Gösterme

Aşağıda, veri getirildiğinde yükleniyor simgesi gösteren bir HOC örneği bulunmaktadır:

```jsx
import React from 'react';

const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      if (this.props.isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Örnek bileşen
const DataDisplay = ({ data }) => (
  <div>Data: {data}</div>
);

// HOC ile sarmalanmış bileşen
const LoadingDataDisplay = withLoading(DataDisplay);

export default LoadingDataDisplay;
```

Bu örnekte, `withLoading` HOC'si, veri yüklenirken yükleniyor mesajı gösterir ve veri yüklendiğinde sarılan bileşeni render eder.

## 4. Kimlik Doğrulama ve Yetkilendirme

HOC'ler, uygulamanızın belirli kısımlarına erişimi kontrol etmek için kullanılabilir. Kullanıcının kimlik doğrulamasını veya belirli izinlere sahip olup olmadığını kontrol eden bir HOC oluşturabilir ve bileşeni buna göre render edebilirsiniz.

### Örnek: Sadece Giriş Yapmış Kullanıcıların Erişebilmesi

Aşağıda, sadece giriş yapmış kullanıcıların erişebileceği bir HOC örneği bulunmaktadır:

```jsx
import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      if (!this.props.isAuthenticated) {
        return <Redirect to="/login" />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Örnek bileşen
const ProtectedComponent = () => (
  <div>This is a protected component.</div>
);

// HOC ile sarmalanmış bileşen
const AuthProtectedComponent = withAuth(ProtectedComponent);

export default AuthProtectedComponent;
```

Bu örnekte, `withAuth` HOC'si, kullanıcı kimliği doğrulanmamışsa giriş sayfasına yönlendirir ve kimliği doğrulanmışsa sarılan bileşeni render eder.

## 5. Hata Yönetimi

HOC'ler, hataları ele almak ve uygulamanız genelinde hata mesajlarını veya yedek kullanıcı arayüzü bileşenlerini tutarlı bir şekilde görüntülemek için kullanılabilir.

### Örnek: Veri Getirilirken Hataları Yakalama ve Gösterme

Aşağıda, veri getirilirken hataları yakalayan ve gösteren bir HOC örneği bulunmaktadır:

```jsx
import React from 'react';

const withErrorHandling = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      hasError: false,
      error: null,
    };

    componentDidCatch(error, info) {
      this.setState({ hasError: true, error });
    }

    render() {
      if (this.state.hasError) {
        return <div>Error: {this.state.error.message}</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

// Örnek bileşen
const DataComponent = ({ data }) => (
  <div>Data: {data}</div>
);

// HOC ile sarmalanmış bileşen
const ErrorHandledDataComponent = withErrorHandling(DataComponent);

export default ErrorHandledDataComponent;
```

Bu örnekte, `withErrorHandling` HOC'si, veri getirilirken oluşan hataları yakalar ve hata mesajını gösterir.

Bu eğitimde, HOC'lerin React uygulamalarında nasıl kullanıldığını ve yaygın kullanım durumlarını ele aldık. Her bir örnek, HOC'lerin çeşitli durumlarda nasıl uygulanabileceğini ve uygulamanızdaki bileşenlerin işlevselliğini nasıl artırabileceğini göstermektedir. Bu yöntemler, React projelerinizde daha temiz ve sürdürülebilir kod yazmanıza yardımcı olacaktır.