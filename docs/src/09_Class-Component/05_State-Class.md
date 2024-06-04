# React Class Bileşenlerinde Durum Yönetimi

Bu eğitimde, React sınıf bileşenlerinde durumun (state) nasıl yönetileceğini ele alacağız. Durum, bileşen içindeki verilerin zamanla değişebileceği bir nesnedir. React, durum değiştiğinde bileşeni yeniden render ederek güncellenmiş verileri yansıtır. 

## Adım 1: Proje Yapısını Oluşturma

Öncelikle, bileşenlerinizi düzenli tutmak için projenizin `src` dizininde `components` adlı bir klasör oluşturun. Bu klasör zaten mevcutsa, bu adımı atlayabilirsiniz.

```bash
mkdir src/components
```

## Adım 2: Counter Bileşeni Oluşturma

`components` klasörünün içinde `Counter.jsx` adında bir dosya oluşturun ve aşağıdaki kodu ekleyin.

```jsx
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
```

## Adım 3: Counter Bileşenini Kullanma

Şimdi `src/App.js` dosyasını açın ve `Counter` bileşenini içe aktararak kullanın.

```jsx
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
```

## Adım 4: Uygulamayı Çalıştırma

Uygulamanızı çalıştırarak `Counter` bileşeninin doğru şekilde çalıştığını kontrol edin.

```bash
npm start
```

## Durumun Değiştirilmesi ve Render Süreci

Yukarıdaki örnekte, `Counter` bileşeni iki butona sahiptir: `Increment` ve `Decrement`. Her iki buton da bileşenin durumunu değiştirir ve `setState` yöntemi ile durumu günceller. React, durum değişikliği olduğunda bileşeni yeniden render ederek ekrandaki verilerin güncellenmesini sağlar.

