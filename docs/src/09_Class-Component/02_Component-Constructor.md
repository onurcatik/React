# React Component Constructor 

Bu eğitim, React bileşenlerinde constructor() fonksiyonunun nasıl kullanılacağını ve bileşenlerin durumlarının nasıl başlatılacağını kapsamlı ve ayrıntılı bir şekilde açıklamaktadır. İçerik, yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacak şekilde düzenlenmiştir.

## 1. Bileşen Klasörü Oluşturma

Projenizin `src` dizininde bileşenlerinizi düzenli tutmak için yeni bir `components` klasörü oluşturun. Eğer bu klasör zaten mevcutsa, bu adımı atlayabilirsiniz.

```bash
mkdir src/components
```

## 2. Bileşen Dosyasını Oluşturma

`components` klasörünün içinde, `WelcomeMessage.jsx` adında yeni bir dosya oluşturun. Bu dosya, sınıf tabanlı bileşeninizi içerecektir.

```bash
touch src/components/WelcomeMessage.jsx
```

## 3. React'ı İçe Aktarma

`WelcomeMessage.jsx` dosyasını favori metin düzenleyicinizde açın ve React'ı içe aktararak başlayın.

```javascript
import React, { Component } from 'react';
```

## 4. Sınıf Tabanlı Bileşen Oluşturma

`Component` sınıfından türeyen yeni bir `WelcomeMessage` sınıf bileşeni oluşturun.

```javascript
class WelcomeMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hoş geldiniz'
    };
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default WelcomeMessage;
```

## 5. Bileşenin Başlatılması

Bileşen başlatıldığında çağrılan `constructor()` fonksiyonunu ekleyin ve bileşenin durumlarını bu fonksiyon içinde başlatın.

```javascript
constructor(props) {
  super(props);
  this.state = {
    message: 'Hoş geldiniz'
  };
}
```

## 6. Durum Değişkenini Başlatma

`constructor` içinde bir `message` durumu başlatın.

```javascript
this.state = {
  message: 'Hoş geldiniz'
};
```

## 7. Render Metodunu Ekleyin

Bileşen içinde hoş geldiniz mesajını görüntülemek için bir `render` metodu ekleyin.

```javascript
render() {
  return (
    <div>
      {this.state.message}
    </div>
  );
}
```

## 8. Bileşeni Kullanma

Başka bir bileşen veya uygulama dosyasında bu bileşeni kullanmak için içe aktarın ve dahil edin. Örneğin, `App.js` dosyasını güncelleyebilirsiniz.

```javascript
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
    </div>
  );
}

export default App;
```

