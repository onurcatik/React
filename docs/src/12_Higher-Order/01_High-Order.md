## React Yüksek-Düzey Bileşenler (Higher-Order Components)

### Giriş

Yüksek-Düzey Bileşenler (Higher-Order Components - HOCs), React'te bileşen mantığını yeniden kullanmak için güçlü ve gelişmiş bir tekniktir. Orijinal bileşeni değiştirmeye gerek kalmadan ek işlevsellik veya davranış sağlamak için mevcut bileşenleri sarmalayarak yeni bileşenler oluşturmanıza olanak tanırlar. Bu eğitimde aşağıdaki konuları ele alacağız:

1. Yüksek-Düzey Bileşenler nedir?
2. Neden Yüksek-Düzey Bileşenler kullanmalısınız?
3. Bir Yüksek-Düzey Bileşen nasıl oluşturulur?
4. Yüksek-Düzey Bileşenlerin yaygın kullanım durumları

### 1. Yüksek-Düzey Bileşenler Nedir?

Yüksek-Düzey Bileşen (Higher-Order Component), bir bileşeni argüman olarak alan ve bu bileşene ek işlevsellik ekleyerek yeni bir bileşen döndüren bir fonksiyondur.

### 2. Neden Yüksek-Düzey Bileşenler Kullanmalısınız?

Yüksek-Düzey Bileşenler, birden fazla bileşen arasında ortak mantık veya davranış paylaşmak istediğinizde faydalıdır. Bu, kodun daha iyi bakımını, okunabilirliğini ve yeniden kullanılabilirliğini sağlar. Ayrıca, orijinal bileşenin ana sorumluluğuna odaklanmasını sağlayarak kaygıların ayrılmasını teşvik eder.

### 3. Bir Yüksek-Düzey Bileşen Nasıl Oluşturulur?

Bir Yüksek-Düzey Bileşen oluşturmak için, bir bileşeni argüman olarak alan ve bu bileşeni saran yeni bir bileşen döndüren bir fonksiyon tanımlamanız gerekir. İşte basit bir örnek:

```javascript
import React from 'react';

const ExampleHOC = (WrappedComponent) => {
  return class EnhancedComponent extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
```

Bu örnekte, `ExampleHOC`, `WrappedComponent` adlı bileşeni argüman olarak alan ve bu bileşeni saran `EnhancedComponent` adlı yeni bir işlevsel bileşen döndüren bir HOC'dir. Bu HOC'yi herhangi bir bileşeni sarmalayarak kullanabilirsiniz:

```javascript
const SimpleComponent = (props) => {
  return <div>{props.message}</div>;
};

const EnhancedSimpleComponent = ExampleHOC(SimpleComponent);

// Kullanım
<EnhancedSimpleComponent message="Hello, World!" />;
```

### 4. Yüksek-Düzey Bileşenlerin Yaygın Kullanım Durumları

Yüksek-Düzey Bileşenlerin bazı yaygın kullanım durumları şunlardır:

- **Kodun yeniden kullanımı**: Birden fazla bileşen arasında ortak mantığı paylaşma.
- **Özellikleri değiştirme**: Sarılan bileşene geçirilen özellikleri manipüle etme.
- **Koşullu render etme**: Belirli koşullara bağlı olarak sarılan bileşeni kontrol etme.
- **Kimlik doğrulama ve yetkilendirme**: Uygulamanın belirli bölümlerine erişimi kontrol etme.

### Örnek: Kimlik Doğrulama ile Yüksek-Düzey Bileşen

Aşağıda kimlik doğrulama için bir Yüksek-Düzey Bileşen örneği verilmiştir:

```javascript
import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      const { isAuthenticated, ...otherProps } = this.props;
      if (!isAuthenticated) {
        return <Redirect to="/login" />;
      }
      return <WrappedComponent {...otherProps} />;
    }
  };
};

export default withAuth;
```

Bu örnekte, `withAuth` HOC'si, `isAuthenticated` özelliğine göre sarılan bileşenin render edilmesini kontrol eder. Kimliği doğrulanmamış kullanıcıları giriş sayfasına yönlendirir.

```javascript
// Kullanım
const Dashboard = (props) => {
  return <div>Dashboard</div>;
};

const ProtectedDashboard = withAuth(Dashboard);

// Kullanım
<ProtectedDashboard isAuthenticated={true} />;
```

