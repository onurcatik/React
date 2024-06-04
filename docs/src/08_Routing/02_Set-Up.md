# Setup

## Giriş

React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. React, bileşen (component) tabanlı yapısıyla, yeniden kullanılabilir ve yönetilebilir kodlar yazmayı kolaylaştırır. Bu eğitimde, React ve React Router'ın kurulum ve kullanım süreçlerini ayrıntılı bir şekilde ele alacağız.

## Kurulum

### React Kurulumu

Öncelikle, React kütüphanesini kurmamız gerekmektedir. Bunun için npm (Node Package Manager) veya yarn kullanabilirsiniz. Aşağıdaki komutu terminalde çalıştırarak React ve React DOM paketlerini kurabilirsiniz:

```bash
npx create-react-app my-app
cd my-app
```

Yukarıdaki komut, `create-react-app` aracıyla yeni bir React projesi oluşturur ve gerekli bağımlılıkları yükler.

### React Router Kurulumu

React Router, React uygulamaları için yönlendirme (routing) sağlar. React Router'ı kurmak için npm veya yarn kullanabilirsiniz. Aşağıdaki komutu terminalde çalıştırarak React Router paketini kurabilirsiniz:

```bash
npm install react-router-dom
```

Yarn kullanıyorsanız, şu komutu çalıştırabilirsiniz:

```bash
yarn add react-router-dom
```

React Router kurulumunun ardından, yönlendirme yapılandırmasına geçebiliriz.

## React Router Yapılandırması

React Router'ı kullanarak basit bir yönlendirme yapılandırması oluşturacağız. İlk olarak, `index.js` dosyanızda `BrowserRouter` bileşenini ekleyin:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

### Yönlendirme Tanımları

`App.js` dosyasında yönlendirme yapılandırmasını tanımlayalım:

```javascript
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

Bu yapılandırmada, `/` yoluna gidildiğinde `Home` bileşeni, `/about` yoluna gidildiğinde ise `About` bileşeni render edilecektir.

### Bileşenlerin Oluşturulması

`Home` ve `About` bileşenlerini oluşturalım. `src/components` dizini altında `Home.js` ve `About.js` dosyalarını oluşturun.

`Home.js` dosyasının içeriği:

```javascript
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
}

export default Home;
```

`About.js` dosyasının içeriği:

```javascript
import React from 'react';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
    </div>
  );
}

export default About;
```

Bu bileşenler basit içeriklerle oluşturulmuştur ve ilgili rotalar çağrıldığında görüntülenecektir.


