# Fonksiyonel Bileşenler ve Sınıf Bileşenleri

## Giriş

Bu eğitimde, React'te fonksiyonel bileşenler ve sınıf bileşenleri arasındaki farkları detaylı bir şekilde inceleyeceğiz. Eğitim boyunca, kod parçacıkları ve örnekler ile konuyu açıklayacağız. React uygulamalarında bileşenlerin nasıl tanımlandığını, durum yönetimini ve yaşam döngüsü metodlarını ele alacağız.

## Sınıf Bileşenleri

### Tanım
React'te sınıf bileşenleri, ES6 sınıfları kullanılarak tanımlanır. Bu bileşenler, durum yönetimi ve yaşam döngüsü metodlarını kullanma imkanı sağlar.

### Özellikler
1. **Yaşam Döngüsü Metodları**: Sınıf bileşenleri, bileşenin yaşam döngüsünün farklı aşamalarında kontrol sağlamanıza olanak tanıyan metodlar içerir. Örneğin:
   - `componentDidMount`
   - `componentDidUpdate`
   - `componentWillUnmount`

   Bu metodlar, bileşenin başlatılması, güncellenmesi ve yıkılması gibi aşamalarda ne olacağını kontrol etmenizi sağlar.

2. **Durum Yönetimi**: Sınıf bileşenleri, yerel durum (state) tutabilir ve yönetebilir. Bunun için `this.state` ve `this.setState()` metodları kullanılır.
   
3. **Kapsam**: Sınıf bileşenlerinde `this` anahtar kelimesi, özellikler, durum ve metodlara erişim için kullanılır.
   
4. **Ayrıntılı Yapı**: Sınıf bileşenleri, ek sözdizimi gereksinimleri nedeniyle daha ayrıntılı ve uzun olabilir. Örneğin, metod tanımlamaları ve `this` bağlamı.

### Örnek
Aşağıda bir sınıf bileşeninin basit bir örneği bulunmaktadır:

```jsx
import React, { Component } from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Merhaba, React!'
    };
  }

  componentDidMount() {
    console.log('Bileşen yüklendi.');
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Greeting;
```

## Fonksiyonel Bileşenler

### Tanım
Fonksiyonel bileşenler, sadece bir fonksiyon olarak tanımlanan bileşenlerdir. React 16.8 ile birlikte gelen Hooks sayesinde, fonksiyonel bileşenler durum yönetimi ve yaşam döngüsü metodlarını kullanabilir hale gelmiştir.

### Özellikler
1. **Durum ve Hooks**: Fonksiyonel bileşenler, `useState` ve `useEffect` gibi Hook'lar kullanarak durum yönetimi ve yaşam döngüsü olaylarını yönetebilir.
   
2. **Basit Sözdizimi**: Fonksiyonel bileşenler, daha basit ve az ayrıntılı bir sözdizimine sahiptir. Sadece bir JavaScript fonksiyonu olarak tanımlanırlar.
   
3. **Performans**: Fonksiyonel bileşenler, sınıf bileşenlerine göre daha az kaynak tüketebilir, çünkü sınıf örneklemesi gerektirmezler. Ancak, bu fark çoğu uygulamada minimaldir.
   
4. **Kapsam Yok**: Fonksiyonel bileşenler `this` anahtar kelimesini kullanmazlar. Tüm özellikler ve metodlar fonksiyon parametreleri ve Hook'lar aracılığıyla yönetilir.

### Örnek
Aşağıda bir fonksiyonel bileşenin basit bir örneği bulunmaktadır:

```jsx
import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [message, setMessage] = useState('Merhaba, React!');

  useEffect(() => {
    console.log('Bileşen yüklendi.');
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
```

## Karşılaştırma

| Özellikler              | Sınıf Bileşenleri                                          | Fonksiyonel Bileşenler                                 |
|-------------------------|------------------------------------------------------------|-------------------------------------------------------|
| Tanımlama               | ES6 sınıfları kullanılarak tanımlanır                      | JavaScript fonksiyonları kullanılarak tanımlanır      |
| Durum Yönetimi          | `this.state` ve `this.setState()` ile yönetilir            | `useState` Hook'u ile yönetilir                       |
| Yaşam Döngüsü Metodları | `componentDidMount`, `componentDidUpdate` vb.              | `useEffect` Hook'u ile yönetilir                      |
| Sözdizimi               | Daha ayrıntılı ve uzun                                     | Daha basit ve kısa                                    |
| Performans              | Biraz daha fazla kaynak tüketebilir                        | Daha az kaynak tüketir, ancak fark genelde minimaldir |
| Kapsam                  | `this` kullanılır                                          | `this` kullanılmaz                                    |

## Sonuç

React bileşenlerinin fonksiyonel veya sınıf bileşenleri olarak tanımlanması, geliştirme sürecinde önemli bir rol oynar. Fonksiyonel bileşenler, Hook'ların tanıtılmasıyla birlikte daha esnek ve kullanımı kolay hale gelmiştir. React, yeni bileşenler için fonksiyonel bileşenlerin ve Hook'ların kullanılmasını önermektedir, ancak bazı durumlarda sınıf bileşenleri hala tercih edilebilir.

