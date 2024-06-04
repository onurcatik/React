# React Komponentlerinin Unmount Yapılması

Bu bölümde, React komponentlerinin DOM'dan kaldırıldığı aşama olan **unmounting** sürecini ele alacağız. React, bir komponent unmount edildiğinde çağrılan yalnızca bir yerleşik metoda sahiptir: `componentWillUnmount()`.

## Class Komponentlerde Unmounting

Class komponentlerde, `componentWillUnmount()` metodu, komponent DOM'dan kaldırıldığında çağrılır. Bu metod genellikle bellek sızıntılarını önlemek için kaynakları temizlemek amacıyla kullanılır. Aşağıdaki örnek, `Timer` komponentinin `componentWillUnmount()` metodunu kullanarak her saniye artan bir sayaç durumunu nasıl temizlediğini göstermektedir:

```jsx
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
      seconds: this.state.seconds + 1
    }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds: {this.state.seconds}</div>
    );
  }
}

export default Timer;
```

Bu örnekte, `Timer` komponenti, `componentDidMount()` metodunda her saniye `seconds` durumunu artırmak için bir interval kurar. Komponent DOM'dan kaldırıldığında `componentWillUnmount()` metodu çağrılır ve bu interval temizlenir, böylece bellek sızıntıları önlenir.

## Fonksiyonel Komponentlerde Unmounting

Fonksiyonel komponentlerde, unmounting işlemi `useEffect` hook'u kullanılarak ele alınır. `useEffect` callback'inden bir fonksiyon döndürdüğünüzde, bu fonksiyon komponent unmount edildiğinde çağrılacak bir temizlik fonksiyonu olarak görev yapar. Aşağıdaki örnek, `Timer` fonksiyonel komponentinin `useEffect` kullanarak her saniye artan bir sayaç durumunu nasıl temizlediğini göstermektedir:

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>Seconds: {seconds}</div>
  );
}

export default Timer;
```

Bu örnekte, `Timer` fonksiyonel komponenti, `useEffect` kullanarak her saniye `seconds` durumunu artırmak için bir interval kurar. `useEffect` callback'inden döndürülen temizlik fonksiyonu, komponent unmount edildiğinde intervali temizler, böylece bellek sızıntıları önlenir.

## Sonuç

React'te unmounting işlemi, hem class hem de fonksiyonel komponentlerde kaynakların doğru şekilde temizlenmesi açısından kritik öneme sahiptir. `componentWillUnmount()` metodu veya `useEffect` hook'u kullanarak, komponentlerinizin DOM'dan kaldırıldığında bellek sızıntılarına neden olmasını önleyebilirsiniz. Bu yöntemler, yazılım geliştirme sürecinde yüksek performans ve bellek verimliliği sağlar.