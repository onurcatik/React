## React Sınıf Bileşenlerinde Props Kullanımı

Bu eğitim, React sınıf bileşenlerinde props kullanımını kapsamlı ve ayrıntılı bir şekilde ele alacaktır. İçeriğin ciddi ve bilimsel olmasını sağlayacak ve yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacak şekilde hazırlanmıştır.

### 1. Bileşenler İçin Klasör Oluşturma

İlk olarak, proje dosya yapısını organize etmek için `src` dizininde yeni bir `components` adlı klasör oluşturun. Eğer bu klasör zaten mevcutsa, bu adımı atlayabilirsiniz.

### 2. Bileşen Dosyalarını Oluşturma

`components` klasörü içerisinde `ParentComponent.jsx` ve `ChildComponent.jsx` adında iki yeni dosya oluşturun.

### 3. ParentComponent.jsx Dosyasını Yazma

`ParentComponent.jsx` dosyasını açın ve aşağıdaki kodu yazın:

```jsx
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
    const message = "Merhaba, bu bir props mesajıdır!";
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent greeting={message} />
      </div>
    );
  }
}

export default ParentComponent;
```

Bu kodda, bir `div` içinde bir `h1` elementi oluşturuyoruz ve `ChildComponent` bileşenini kullanıyoruz. Bu sırada `greeting` propunu `message` değeriyle geçiriyoruz.

### 4. ChildComponent.jsx Dosyasını Yazma

`ChildComponent.jsx` dosyasını açın ve aşağıdaki kodu yazın:

```jsx
import React, { Component } from 'react';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default ChildComponent;
```

Bu kodda, `ParentComponent` render edildiğinde, `ChildComponent` bileşeni de render edilir ve `greeting` propunu alır. `ChildComponent`, bu propun değerini bir `p` elementi içinde görüntüler. Prop, temel olarak veriyi ebeveyn bileşenden çocuk bileşene aktarmanın bir yoludur.

### 5. App.js Dosyasına ParentComponent'i Dahil Etme

Şimdi, `src/App.js` dosyasını açın ve `ParentComponent` bileşenini import edin:

```jsx
import React from 'react';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
```

### 6. Uygulamayı Çalıştırma

Tüm bileşenleri oluşturduktan ve gerekli dosyaları düzenledikten sonra, uygulamanızı çalıştırın. Terminalde `npm start` komutunu kullanarak uygulamanızı başlatabilirsiniz. Tarayıcınızda, `ParentComponent` bileşeninin render edildiğini ve `ChildComponent` bileşenine props ile geçirilen mesajı görüntülediğini göreceksiniz.

