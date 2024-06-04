# React Uygulamalarında İç İçe Rotalar (Nested Routes)

Bu eğitimde, React uygulamalarında React Router kullanarak iç içe rotaların nasıl tanımlanacağını detaylı ve kapsamlı bir şekilde ele alacağız. İç içe rotalama, daha karmaşık navigasyon senaryolarını ele almak için rotaların hiyerarşik bir yapıda tanımlanmasını sağlar. Bu eğitim, sağlam ve bilimsel bir yaklaşımla hazırlanmış olup, yanlış bilgi veya hatalı yaklaşımlara eleştirel bir gözle bakılarak sunulmaktadır.

## 1. Proje Yapısının Oluşturulması

İlk olarak, projenizin `src` dizini içerisinde `components` adlı yeni bir klasör oluşturun. Bu klasör, uygulamanızdaki bileşenleri barındıracaktır.

```bash
mkdir src/components
```

## 2. Bileşenlerin Oluşturulması

`components` klasörünün içinde iki yeni dosya oluşturun: `CodingStella.jsx` ve `ProductDetail.jsx`. Bu dosyaların her biri uygulamamızda bir sayfayı temsil eden basit bir bileşen içerecektir.

### CodingStella.jsx

```jsx
import React from 'react';

const CodingStella = () => {
    return (
        <div>
            <h2>Coding Stella Page</h2>
            <p>Welcome to the Coding Stella page!</p>
        </div>
    );
};

export default CodingStella;
```

### ProductDetail.jsx

```jsx
import React from 'react';

const ProductDetail = () => {
    return (
        <div>
            <h2>Product Detail Page</h2>
            <p>Here are the details of the product.</p>
        </div>
    );
};

export default ProductDetail;
```

## 3. Uygulama Rotalarının Güncellenmesi

`App.js` dosyasını güncelleyerek uygulamanın rotalarını tanımlayın. React Router'ı kullanarak iç içe rotaları oluşturacağız.

### App.js

Öncelikle, gerekli bağımlılıkları ekleyin:

```bash
npm install react-router-dom
```

Ardından `App.js` dosyasını aşağıdaki gibi güncelleyin:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CodingStella from './components/CodingStella';
import ProductDetail from './components/ProductDetail';

const App = () => {
    return (
        <Router>
            <div>
                <h1>My React App</h1>
                <Switch>
                    <Route path="/coding-stella" component={CodingStella} />
                    <Route path="/product/:id" component={ProductDetail} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
```

## 4. Uygulamanın Çalıştırılması

Uygulamayı çalıştırmak için aşağıdaki komutu kullanın:

```bash
npm start
```

# Sonuç

Bu eğitimde, React uygulamalarında iç içe rotaların nasıl oluşturulacağını ve kullanılması gereken en iyi yöntemleri inceledik. Sağlam kod yapıları ve iyi planlanmış rotalar ile, uygulamalarınızın kullanıcı deneyimini önemli ölçüde geliştirebilirsiniz.