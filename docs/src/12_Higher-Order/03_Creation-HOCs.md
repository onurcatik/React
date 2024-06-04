# React ile Higher-Order Component (HOC) Oluşturma Eğitimi

Bu eğitimde, kullanıcıların yalnızca kimlik doğrulaması yapıldığında gizli bir mesajı görebileceği bir senaryo oluşturmayı hedefleyeceğiz. Bu doğrulama kontrolünü gerçekleştirmek ve gizli mesaj bileşenini koşullu olarak render etmek için bir Higher-Order Component (HOC) kullanacağız.

## Hedef

Bir kullanıcının yalnızca kimlik doğrulaması yapıldığında bir gizli mesajı görebileceği bir senaryo oluşturmak. Bu doğrulama kontrolünü yönetmek ve gizli mesaj bileşenini koşullu olarak render etmek için bir HOC kullanacağız.

## Akış

1. `components` klasörünü oluşturun (zaten mevcut değilse).
2. `SecretMessage.jsx` bileşenini oluşturun.
3. `WithAuthentication.js` HOC'sini oluşturun.
4. `SecretMessage` bileşenini `WithAuthentication` HOC'si ile sarın.
5. Kimlik doğrulama durumunu değiştirerek HOC'nin davranışını test edin.

Bu adım adım örnekte, kullanıcı kimlik doğrulama durumuna göre bir bileşeni gösteren veya gizleyen bir HOC kullanarak basit bir React uygulaması oluşturacağız.

### Adım 1: `components` Klasörünü Oluşturma

Öncelikle, `src` dizininde bir `components` klasörü oluşturun (eğer zaten mevcut değilse).

```sh
mkdir src/components
```

### Adım 2: `SecretMessage.jsx` Bileşenini Oluşturma

`components` klasöründe, gizli bir mesajı görüntüleyecek olan `SecretMessage.jsx` bileşenini oluşturun.

```jsx
// src/components/SecretMessage.jsx
import React from 'react';

const SecretMessage = () => {
    return (
        <div>
            <h1>Bu bir gizli mesajdır!</h1>
        </div>
    );
};

export default SecretMessage;
```

### Adım 3: `WithAuthentication.js` HOC'sini Oluşturma

`components` klasöründe, kullanıcının kimlik doğrulamasını kontrol edecek ve `WrappedComponent` veya kimliği doğrulanmamış kullanıcılar için bir mesaj render edecek olan `WithAuthentication.js` HOC'sini oluşturun.

```jsx
// src/components/WithAuthentication.js
import React from 'react';

const withAuthentication = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            const isAuthenticated = this.props.isAuthenticated;
            if (isAuthenticated) {
                return <WrappedComponent {...this.props} />;
            } else {
                return <div>Lütfen gizli mesajı görmek için giriş yapın.</div>;
            }
        }
    };
};

export default withAuthentication;
```

### Adım 4: `SecretMessage` Bileşenini `WithAuthentication` HOC'si ile Sarma

`App.js` dosyasında `SecretMessage` bileşenini `withAuthentication` HOC'si ile sarın.

```jsx
// src/App.js
import React from 'react';
import SecretMessage from './components/SecretMessage';
import withAuthentication from './components/WithAuthentication';

const SecretMessageWithAuth = withAuthentication(SecretMessage);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false
        };
    }

    toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleAuth}>
                    {this.state.isAuthenticated ? 'Çıkış Yap' : 'Giriş Yap'}
                </button>
                <SecretMessageWithAuth isAuthenticated={this.state.isAuthenticated} />
            </div>
        );
    }
}

export default App;
```

### Adım 5: HOC'nin Davranışını Test Etme

`App.js` dosyasında `isAuthenticated` değerini değiştirerek HOC'nin davranışını test edin.

- `isAuthenticated` değerini `true` yapın ve gizli mesajın görüntülenip görüntülenmediğini kontrol edin.
- `isAuthenticated` değerini `false` yapın ve "Lütfen gizli mesajı görmek için giriş yapın." mesajının görüntülenip görüntülenmediğini kontrol edin.

```sh
# Uygulamayı çalıştırın
npm start
```

