# React Yazılım Geliştirici

Bu eğitim, React kullanarak bileşen tabanlı uygulamalar geliştirme konusunda derinlemesine bilgi sağlayacaktır. React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir ve bu eğitimde, bileşenlerin nasıl oluşturulacağı, kullanılacağı ve yönetileceği ele alınacaktır.

## 1. Veri Akışı (Data Flow)

React'ta veri akışı tek yönlüdür; bu, verilerin ebeveynden çocuğa doğru aktığı anlamına gelir. Bu yaklaşım, uygulamanın veri yönetimini basitleştirir ve bileşenler arasındaki veri akışını daha öngörülebilir hale getirir.

**Örnek:**

```jsx
// ParentComponent.jsx
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const data = "Hello from Parent!";
  return <ChildComponent message={data} />;
};

export default ParentComponent;

// ChildComponent.jsx
import React from 'react';

const ChildComponent = ({ message }) => {
  return <div>{message}</div>;
};

export default ChildComponent;
```

Bu örnekte, `ParentComponent` bir `message` prop'u aracılığıyla veriyi `ChildComponent`'e geçirir.

## 2. Yeniden Kullanılabilirlik (Reusability)

React bileşenleri, tekrar kullanılabilir ve özelleştirilebilir olmaları için tasarlanmalıdır. Bu, bileşenlerin props kullanılarak özelleştirilmesi anlamına gelir.

**Örnek:**

```jsx
// Button.jsx
import React from 'react';

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;

// App.jsx
import React from 'react';
import Button from './Button';

const handleClick = () => {
  alert('Button clicked!');
};

const App = () => {
  return <Button text="Click Me" onClick={handleClick} />;
};

export default App;
```

Bu örnekte, `Button` bileşeni farklı metinler ve tıklama olayları ile özelleştirilebilir.

## 3. Dinamik Render Etme (Dynamic Rendering)

React bileşenleri, props değerlerine göre koşullu olarak içerik gösterebilir.

**Örnek:**

```jsx
// StatusMessage.jsx
import React from 'react';

const StatusMessage = ({ isLoading }) => {
  return (
    <div>
      {isLoading ? 'Loading...' : 'Data Loaded'}
    </div>
  );
};

export default StatusMessage;

// App.jsx
import React, { useState, useEffect } from 'react';
import StatusMessage from './StatusMessage';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <StatusMessage isLoading={loading} />;
};

export default App;
```

Bu örnekte, `StatusMessage` bileşeni `isLoading` prop'una göre farklı içerikler gösterir.

## 4. Olay İşleme (Event Handling)

React bileşenlerinde olay işleyicileri props aracılığıyla geçirilebilir.

**Örnek:**

```jsx
// ClickableButton.jsx
import React from 'react';

const ClickableButton = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

export default ClickableButton;

// App.jsx
import React from 'react';
import ClickableButton from './ClickableButton';

const App = () => {
  const handleClick = () => {
    alert('Button was clicked!');
  };

  return <ClickableButton onClick={handleClick} />;
};

export default App;
```

Bu örnekte, `ClickableButton` bileşeni bir tıklama olayı işleyicisi ile birlikte kullanılır.

## 5. Bileşen Kompozisyonu (Composition)

React bileşenleri, diğer bileşenleri props olarak alabilir, bu da daha esnek ve modüler bir yapı sağlar.

**Örnek:**

```jsx
// Container.jsx
import React from 'react';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

// App.jsx
import React from 'react';
import Container from './Container';

const App = () => {
  return (
    <Container>
      <h1>Hello, World!</h1>
      <p>This is a paragraph inside a container.</p>
    </Container>
  );
};

export default App;
```

Bu örnekte, `Container` bileşeni, içeriğini çocuk bileşenler olarak alır.

# Uygulama Adımları

## 1. Bileşen Klasörü Oluşturma

Projenizin `src` dizininde bileşenlerinizi düzenli tutmak için `components` adlı bir klasör oluşturun.

## 2. Yeni Bir Bileşen Dosyası Oluşturma

`components` klasörü içinde, `Greeting.jsx` adlı yeni bir dosya oluşturun.

## 3. React'i İçe Aktarma

`Greeting.jsx` dosyasını açın ve React kütüphanesini içe aktarın.

```jsx
import React from 'react';
```

## 4. Fonksiyonel Bileşen Oluşturma

`Greeting` adında yeni bir fonksiyonel bileşen tanımlayın. Bu bileşen, bir argüman olarak `props` alır.

```jsx
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

## 5. Props Kullanımı

`props` nesnesini kullanarak bileşene geçirilen özellikleri erişin ve kullanın.

## 6. Bileşeni Dışa Aktarma

Bileşeninizi diğer kısımlarda kullanabilmek için dışa aktarın.

```jsx
export default Greeting;
```

## 7. Bileşeni Props ile Kullanma

Başka bir bileşende `Greeting` bileşenini kullanmak için önce onu içe aktarın ve ardından props ile çağırın.

```jsx
// App.jsx
import React from 'react';
import Greeting from './components/Greeting';

const App = () => {
  return <Greeting name="John Doe" />;
};

export default App;
```

