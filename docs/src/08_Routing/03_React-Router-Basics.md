# React Router

Bu eğitimde, React Router'ın temel kavramlarını ve kullanımını kapsamlı bir şekilde ele alacağız. Amacımız, React uygulamalarında istemci taraflı yönlendirme (client-side routing) sağlamak için `react-router-dom` kütüphanesini kullanarak profesyonel bir yapı oluşturmaktır.

## 1. React Router Nedir?

`react-router-dom`, React uygulamalarında istemci taraflı yönlendirme sağlamak için kullanılan popüler bir yönlendirme kütüphanesidir. Bu kütüphane, tek sayfa uygulamalarda (SPA) farklı URL'lere sahip bileşenleri yüklemek için kullanılır.

## 2. Gerekli Kurulumlar ve Başlangıç

React Router'ı kullanmaya başlamak için öncelikle gerekli kütüphaneyi projemize dahil etmemiz gerekiyor.

```bash
npm install react-router-dom
```

Kurulum tamamlandıktan sonra, React Router bileşenlerini kullanarak bir yönlendirme sistemi oluşturabiliriz.

## 3. Temel Bileşenler ve Kullanımları

### BrowserRouter

`BrowserRouter`, HTML5 tarihçesi API'sını (`pushState`, `replaceState`, ve `popstate` olayı) kullanarak URL ile kullanıcı arayüzünüzü senkronize eden bir router implementasyonudur. Tüm route tanımlarınızı sararak temel yönlendirme yeteneklerini sağlar.

```jsx
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Route tanımları burada olacak */}
    </BrowserRouter>
  );
}
```

### Routes

`Routes` bileşeni, birden fazla `Route` bileşeni için bir sarmalayıcıdır. Konumla eşleşen ilk `Route` çocuğunu render eder. Bu bileşen, hangi bileşen veya elemanların tanımlanan route'lara göre görüntüleneceğine karar verme sürecinde yardımcı olur.

```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Route

`Route` bileşeni, yolları mevcut URL ile eşleştiğinde UI bileşenlerini render etmekten sorumludur. Bir `path` özelliği alır ve bu özellik, route'un eşleşeceği yolu tanımlar (örneğin, `/`, `/about`, `/contact`). Ayrıca bir `element` özelliği alır ve bu özellik aktif olduğunda render edilecek React elemanıdır.

```jsx
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
```

### Link

`Link` bileşeni, uygulamanız için yönlendirme bağlantıları oluşturmak amacıyla kullanılır. Bir kullanıcı `Link` bileşenine tıkladığında, tarayıcının URL'si güncellenir ve ilgili `Route` bileşeni render edilir.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

## 4. Örnek Proje: Temel Bir React Router Uygulaması

Bu bölümde, yukarıda açıklanan bileşenleri kullanarak basit bir React Router uygulaması oluşturacağız.

### Proje Yapısı

```
src/
  ├── components/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   └── Contact.jsx
  ├── App.js
  └── index.js
```

### Home.jsx

```jsx
import React from 'react';

function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

### About.jsx

```jsx
import React from 'react';

function About() {
  return <h1>About Page</h1>;
}

export default About;
```

### Contact.jsx

```jsx
import React from 'react';

function Contact() {
  return <h1>Contact Page</h1>;
}

export default Contact;
```

### App.js

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Navbar.js

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```
