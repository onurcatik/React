# React-Icons

## Giriş

React-Icons, React projelerinizde popüler ikonları kolayca kullanmanıza olanak tanıyan bir kütüphanedir. Bu eğitimde, react-icons kütüphanesinin nasıl kurulacağını ve kullanılacağını detaylı bir şekilde ele alacağız. Bu süreç boyunca, belirli bir ikonun nasıl ekleneceğini ve kullanılacağını göstereceğiz. Eğitimin sonunda, uygulamanızda çeşitli ikonları profesyonel bir şekilde kullanabileceksiniz.

## Adım 1: React-Icons Kütüphanesini Kurma

React-Icons kütüphanesini projenize eklemek için aşağıdaki npm komutunu kullanabilirsiniz:

```bash
npm install react-icons
```

Bu komut, React-Icons kütüphanesini projenize dahil eder ve gerekli bağımlılıkları indirir.

## Adım 2: Proje Yapısını Hazırlama

Proje yapısında daha düzenli bir görünüm elde etmek için, `src` dizini içinde bir `components` klasörü oluşturalım. Bu klasörde, ikonları kullanacağımız bileşen dosyalarını saklayacağız.

```bash
mkdir src/components
```

## Adım 3: React Bileşeninde İkon Kullanma

Şimdi, `components` klasörü içinde `MyComponent.jsx` adlı bir dosya oluşturun ve bu dosyada bir ikon kullanacağız. React-Icons kütüphanesi, FontAwesome, Material Design ve diğer çeşitli ikon kütüphanelerinden ikonlar içerir. Bu örnekte, FontAwesome'dan bir ikon kullanacağız.

### 3.1: İkonu İçeri Aktarma

Öncelikle, kullanmak istediğimiz ikonu `react-icons` kütüphanesinden içeri aktaralım:

```jsx
import React from "react";
import { BiSolidHomeHeart } from "react-icons/bi";

const MyComponent = () => {
  return (
    <div>
      <BiSolidHomeHeart />
    </div>
  );
};

export default MyComponent;
```

Bu kod parçacığında, `BiSolidHomeHeart` adlı ikonu `react-icons/bi` modülünden içe aktardık ve bir React bileşeninde kullandık.

## Adım 4: App.js Dosyasında Bileşeni Kullanma

Son olarak, `App.js` dosyasında `MyComponent` bileşenini içe aktaralım ve kullanalım:

```jsx
import React from "react";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
```

Bu adımda, `MyComponent` bileşenini `App.js` dosyasına dahil ettik ve JSX içinde kullandık.

## Kod Örneği

Yukarıdaki adımları takip ederek, ikonları React bileşenlerinde kullanabilirsiniz. Aşağıda tam bir örnek sunulmaktadır:

### `MyComponent.jsx`:

```jsx
import React from "react";
import { BiSolidHomeHeart } from "react-icons/bi";

const MyComponent = () => {
  return (
    <div>
      <BiSolidHomeHeart />
    </div>
  );
};

export default MyComponent;
```

### `App.js`:

```jsx
import React from "react";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
```

## Sonuç

Bu eğitimde, React-Icons kütüphanesini nasıl kuracağınızı, projenize nasıl dahil edeceğinizi ve bileşenlerde nasıl kullanacağınızı öğrendiniz. Bu bilgiyle, React projelerinizde popüler ikonları kolayca kullanabilirsiniz. Daha fazla ikon ve kütüphane seçenekleri için [React-Icons resmi dokümantasyonunu](https://react-icons.github.io/react-icons/) ziyaret edebilirsiniz.
