# Resimlerin İçe Aktarılması ve Kullanımı

Bu eğitimde, React projelerinizde yerel resimleri nasıl içe aktaracağınızı ve kullanacağınızı ayrıntılı ve kapsamlı bir şekilde ele alacağız. Adımlar, herhangi bir hatayı eleştirel bir şekilde değerlendirerek bilimsel ve titiz bir yaklaşımla sunulacaktır. Eğitim boyunca kullanılan kod parçacıkları, yüksek kalite standartlarına uygun olarak yapılandırılmıştır.

## 1. Proje Yapısının Oluşturulması

Öncelikle, projenizin `src` dizininde bileşenlerinizi düzenli tutmak için bir `components` adlı yeni bir klasör oluşturun. Eğer bu klasör zaten mevcutsa, bu adımı atlayabilirsiniz.

```sh
mkdir src/components
```

## 2. Bileşen Dosyasının Oluşturulması

`components` klasörünün içinde `MyComponent.jsx` adlı yeni bir dosya oluşturun. Bu dosya, fonksiyonel bileşeninizi içerecektir.

```sh
touch src/components/MyComponent.jsx
```

## 3. Resim Dizininin Düzenlenmesi

Resmi bir React bileşenine içe aktarmadan önce, resmin projenizin dizin yapısında uygun bir konumda olduğundan emin olun. Bu, resmin `src/Images` klasöründe bulunması gerektiği anlamına gelir. Gerekli dizini oluşturun ve resimleri bu klasöre yerleştirin.

```sh
mkdir src/Images
```

Örnek olarak, `example.png` adlı bir resmi `src/Images` dizinine yerleştirin.

## 4. Bileşen Dosyasının Açılması

Görüntüyü göstermek istediğiniz React bileşenini açın. Bu örnekte, `MyComponent.jsx` dosyasını açacağız ve resmi nasıl göstereceğimizi açıklayacağız.

```jsx
// src/components/MyComponent.jsx

import React from 'react';
import exampleImage from '../Images/example.png';

const MyComponent = () => {
  return (
    <div>
      <h1>Resim Örneği</h1>
      <img src={exampleImage} alt="Example" />
    </div>
  );
};

export default MyComponent;
```

## 5. Bileşeni Uygulamada Gösterme

Uygulamanızda resmi göstermek için `MyComponent` bileşenini render edin. Bunun için `App.jsx` dosyasını açın ve bileşeni ekleyin.

```jsx
// src/App.jsx

import React from 'react';
import MyComponent from './components/MyComponent';

const App = () => {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
};

export default App;
```

## 6. Alternatif Yöntemler: Resimlerin src/Images Klasöründen İçe Aktarılması

Bu yöntem, resimleri `src/Images` klasöründen içe aktarıp kullanmayı kapsamaktadır. Adımlar, yukarıda belirtilen adımlarla büyük ölçüde benzerdir, ancak burada resimlerin farklı bir klasörden içe aktarılması vurgulanmaktadır.

1. `components` klasörünü oluşturun ve `MyComponent.jsx` dosyasını ekleyin.
2. Resimlerinizi `src/Images` klasörüne yerleştirin.
3. `MyComponent.jsx` dosyasını açın ve resimleri içe aktarın.
4. Uygulamanızda bileşeni render edin.

Kod örneği:

```jsx
// src/components/MyComponent.jsx

import React from 'react';
import exampleImage from '../İmages/example.png';

const MyComponent = () => {
  return (
    <div>
      <h1>Resim Örneği</h1>
      <img src={exampleImage} alt="Example" />
    </div>
  );
};

export default MyComponent;
```

Bu eğitim, React projelerinde yerel resimlerin nasıl içe aktarılacağını ve kullanılacağını sistematik bir şekilde açıklamaktadır. Her adım, yazılım geliştirme alanındaki en iyi uygulamalar ve standartlar göz önünde bulundurularak hazırlanmıştır. React bileşenlerinizde resim kullanırken bu adımları takip edebilir ve gerektiğinde bileşenlerinizi ve dizin yapınızı düzenleyerek projelerinizi daha verimli hale getirebilirsiniz.
