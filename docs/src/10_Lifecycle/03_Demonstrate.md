# React Bileşeni Demonstrasyon

Bu eğitimde, React bileşeninin montaj aşamalarını adım adım ele alacağız. Her adımda ilgili kod parçacıklarını ve açıklamalarını bulacaksınız. Bu sayede bileşenin montaj(Mounting) sürecini ve bu süreçte kullanılan lifecycle metodlarını derinlemesine anlamış olacaksınız.

## 1. Yeni Dosya Oluşturma

Öncelikle, `components` klasörü içinde `MountingExample.jsx` adında yeni bir dosya oluşturun.

## 2. Gerekli Modülleri İçe Aktarma

`MountingExample.jsx` dosyasında gerekli modülleri içe aktararak başlayın:

```jsx
import React, { Component } from 'react';
```

## 3. Sınıf Bileşeni Oluşturma

`Component` sınıfını genişleten `MountingExample` adında bir sınıf bileşeni oluşturun:

```jsx
class MountingExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.inputText !== state.text) {
      return {
        text: props.inputText
      };
    }
    return null;
  }

  render() {
    console.log('render');
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}

export default MountingExample;
```

## 4. Montaj Aşamalarının Açıklaması

Bu örnekte, `MountingExample` bileşeni render edildiğinde montaj aşamaları sırasıyla şu şekilde gerçekleşir:

1. **constructor**: Bileşen oluşturulurken çalışır ve başlangıç durumu (`state`) tanımlar.
2. **getDerivedStateFromProps**: Bileşen, props'lardan türetilmiş durumu günceller.
3. **render**: Bileşen, JSX'i DOM'a render eder.
4. **componentDidMount**: Bileşen, DOM'a monte edildikten hemen sonra çalışır.

Her aşama, bileşenin yaşam döngüsünün önemli bir parçasıdır ve sırasıyla çağrılarak bileşenin doğru şekilde monte edilmesini sağlar.

## 5. Bileşeni Kullanma

`App.js` dosyasında `MountingExample` bileşenini kullanarak montaj aşamalarını gözlemleyin:

```jsx
import React from 'react';
import MountingExample from './components/MountingExample';

function App() {
  return (
    <div className="App">
      <MountingExample inputText="Hello, React!" />
    </div>
  );
}

export default App;
```

## Sonuç

Bu örneği çalıştırdığınızda, montaj aşamalarının sırasıyla konsola loglandığını göreceksiniz:

```
constructor
getDerivedStateFromProps
render
componentDidMount
```

## Cheatsheet

- **constructor**: Başlangıç durumunu (`state`) tanımlar.
- **getDerivedStateFromProps**: Props'lardan türetilmiş durumu günceller.
- **render**: JSX'i DOM'a render eder.
- **componentDidMount**: Bileşen, DOM'a monte edildikten sonra çalışır.

Bu eğitim, React bileşenlerinin montaj sürecini anlamanızı ve ilgili lifecycle metodlarını doğru şekilde kullanmanızı sağlamayı amaçlamaktadır. React'te başarılı ve verimli uygulamalar geliştirmek için bu lifecycle metodlarını nasıl ve ne zaman kullanmanız gerektiğini bilmek önemlidir.
