# React'te Olay Yönetimi Eğitimi

## 1. Olay Yönetim Söz Dizimi

React bileşenlerinde olay yöneticileri (event handlers), kullanıcı etkileşimlerine (tıklamalar, tuş vuruşları, form gönderimleri vb.) yanıt vermenizi sağlar. Olay yöneticileri JSX elemanları üzerinde props olarak yazılır ve belirli bir söz dizimini takip eder. Genellikle bileşen içerisinde fonksiyonlar olarak tanımlanırlar.

### Örnek Kod Parçası: Basit Bir Tıklama Olayı

```jsx
import React from 'react';

class ClickComponent extends React.Component {
  handleClick() {
    console.log('Button was clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default ClickComponent;
```

## 2. Olay Yöneticilerini Bağlama

Olay yöneticileri, özellikle `this` anahtar kelimesi fonksiyon içinde kullanıldığında, bileşen örneğine (instance) bağlanmalıdır. Olay yöneticilerini bağlamak için birden fazla yöntem vardır, örneğin `bind()` metodunu kullanarak veya ok fonksiyonları (arrow functions) kullanarak.

### Örnek Kod Parçası: bind() Metodu ile Bağlama

```jsx
import React from 'react';

class ClickComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Button was clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default ClickComponent;
```

### Örnek Kod Parçası: Ok Fonksiyonları ile Bağlama

```jsx
import React from 'react';

class ClickComponent extends React.Component {
  handleClick = () => {
    console.log('Button was clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default ClickComponent;
```

## 3. Olay Nesnesi

Bir olay gerçekleştiğinde, React olay yöneticisi fonksiyonuna bir olay nesnesi (event object) sağlar. Bu olay nesnesi, olayla ilgili hedef eleman ve olay türü gibi yararlı bilgiler içerir.

### Örnek Kod Parçası: Olay Nesnesinin Kullanımı

```jsx
import React from 'react';

class ClickComponent extends React.Component {
  handleClick(event) {
    console.log('Button was clicked');
    console.log(event.target); // Tıklanan elemanı döndürür
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Click me
      </button>
    );
  }
}

export default ClickComponent;
```

## 4. Varsayılan Davranışın Önlenmesi

Bazı durumlarda, belirli olayların varsayılan davranışını önlemek isteyebilirsiniz, örneğin form gönderimleri veya link tıklamaları. Varsayılan davranışı önlemek için olay nesnesi üzerinde `preventDefault()` metodunu çağırabilirsiniz.

### Örnek Kod Parçası: Form Gönderiminin Önlenmesi

```jsx
import React from 'react';

class FormComponent extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log('Form was submitted');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormComponent;
```

## 5. Olay Yayılması

React, olayların en üst seviyede işlendiği ve ardından belirli bileşene yayıldığı sentetik olay sistemini (synthetic event system) takip eder. Eğer olay yayılmasını durdurmanız gerekiyorsa (örneğin, olayın üst bileşenlere yayılmasını engellemek için), olay nesnesi üzerinde `stopPropagation()` metodunu çağırabilirsiniz.

### Örnek Kod Parçası: Olay Yayılmasının Durdurulması

```jsx
import React from 'react';

class ClickComponent extends React.Component {
  handleClick(event) {
    event.stopPropagation();
    console.log('Button was clicked');
  }

  render() {
    return (
      <div onClick={() => console.log('Div clicked')}>
        <button onClick={this.handleClick.bind(this)}>
          Click me
        </button>
      </div>
    );
  }
}

export default ClickComponent;
```

.
