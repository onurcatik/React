# React Router

## Giriş

React Router, React uygulamalarında istemci tarafı yönlendirme (routing) için kullanılan popüler bir kütüphanedir. URL'ye dayalı olarak bileşenlerin gezinme ve render edilmesini yönetmek için güçlü ve esnek bir yol sağlar.

## 1. React Router Nedir?

React Router, React ekosisteminde önemli bir yer tutar ve SPA (Single Page Application) yapılarında URL yönetimini kolaylaştırır. Bu kütüphane, kullanıcıların uygulama içinde farklı URL'ler arasında geçiş yaparken sayfanın yeniden yüklenmesini gerektirmeden farklı bileşenlerin render edilmesini sağlar.

## 1.1 Temel Kavramlar

- **Router**: Uygulamanın yönlendirme mantığını kapsayan bileşen.
- **Route**: URL ile eşleşen bileşeni belirleyen yapı.
- **Link**: Kullanıcıları farklı rotalara yönlendirmek için kullanılan bileşen.

## 2. React Router Kurulumu

React Router'ı kullanmaya başlamak için ilk adım, gerekli paketlerin projeye dahil edilmesidir. Aşağıdaki komut ile React Router paketini yükleyebilirsiniz:

```bash
npm install react-router-dom
```

## 3. Temel Kullanım

React Router'ın temel bileşenleri ve kullanımı aşağıda açıklanmıştır.

## 3.1 Router Bileşeni

`Router` bileşeni, uygulamanın tamamını sarmalar ve yönlendirme işlemlerini yönetir. Genellikle `BrowserRouter` veya `HashRouter` bileşenleri kullanılır.

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
```

## 3.2 Route Bileşeni

`Route` bileşeni, belirli bir URL ile eşleştiğinde render edilecek bileşeni belirler. `path` prop'u, URL yolunu belirtir, `component` prop'u ise render edilecek bileşeni belirler.

```jsx
<Route path="/example" component={ExampleComponent} />
```

## 3.3 Link Bileşeni

`Link` bileşeni, kullanıcıların uygulama içinde farklı rotalara yönlendirilmesini sağlar. `to` prop'u, yönlendirilecek URL'yi belirtir.

```jsx
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

## 4. Gelişmiş Kullanım

React Router, daha karmaşık yönlendirme ihtiyaçlarını karşılamak için çeşitli ek özellikler sunar.

## 4.1 Dinamik Rotalar

URL parametreleri ile çalışan dinamik rotalar oluşturabilirsiniz. Bu, URL'deki belirli segmentlere bağlı olarak farklı bileşenlerin render edilmesini sağlar.

```jsx
<Route path="/user/:id" component={UserProfile} />
```

Bileşen içinde `useParams` hook'u ile URL parametrelerine erişilebilir.

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { id } = useParams();
  return <div>User ID: {id}</div>;
}
```

## 4.2 Redirect Bileşeni

`Redirect` bileşeni, kullanıcıları belirli bir rotadan başka bir rotaya yönlendirmek için kullanılır.

```jsx
import { Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/old-path" exact>
          <Redirect to="/new-path" />
        </Route>
        <Route path="/new-path" component={NewComponent} />
      </Switch>
    </Router>
  );
}
```

## 5. Performans ve Optimizasyon

Büyük ve karmaşık uygulamalarda performansı artırmak için React Router'ın çeşitli optimizasyon teknikleri kullanılabilir.

## 5.1 Lazy Loading

React Router ile bileşenleri dinamik olarak yüklemek için `React.lazy` ve `Suspense` kullanılır.

```jsx
import React, { lazy, Suspense } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}
```

