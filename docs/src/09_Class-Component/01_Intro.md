# React Sınıf Bileşenleri

## Giriş

React, kullanıcı arayüzleri oluşturmak için popüler bir JavaScript kütüphanesidir. Bu eğitimde, React'te sınıf bileşenlerinin (class components) nasıl oluşturulacağını ve kullanılacağını öğreneceksiniz. Eğitim boyunca kullanılan terminoloji ve kavramlar güncel yazılım geliştirme standartlarına uygun olarak sunulmuştur.

## Sınıf Bileşeni Oluşturma

Bir React bileşeni oluştururken bileşenin adı büyük harfle başlamalıdır. Bileşen, `React.Component` sınıfını genişleterek (extend) yazılır ve bu şekilde React.Component'ın işlevlerine erişim sağlanır. Ayrıca bileşen, HTML döndüren bir `render()` yöntemine ihtiyaç duyar.

### Adım Adım Sınıf Bileşeni Oluşturma

1. **Proje Dizini:** Projenizin `src` dizini içinde `components` adlı yeni bir klasör oluşturun. Eğer bu klasör mevcutsa, yeni bir klasör oluşturmanıza gerek yoktur.

2. **Yeni Dosya:** `components` klasörü içinde `MyComponent.jsx` adında yeni bir dosya oluşturun.

3. **React ve Component İçe Aktarma:**

    ```javascript
    import React, { Component } from 'react';
    ```

4. **Yeni Bir Sınıf Oluşturma:**

    ```javascript
    class MyComponent extends Component {
        render() {
            return (
                <div>
                    <h1>Hello, World!</h1>
                </div>
            );
        }
    }
    ```

5. **Bileşeni İhraç Etme:**

    ```javascript
    export default MyComponent;
    ```

6. **Bileşeni Kullanma:** Başka bir dosyada bu bileşeni kullanmak için `import` ederek dahil edin. Örneğin, `App.js` dosyasını güncelleyin:

    ```javascript
    import React from 'react';
    import MyComponent from './components/MyComponent';

    function App() {
        return (
            <div>
                <MyComponent />
            </div>
        );
    }

    export default App;
    ```

7. **Sunucuyu Çalıştırma:** Proje kök dizininde komut satırını açarak sunucuyu çalıştırın:

    ```bash
    npm start
    ```

## Kritik İnceleme

Bu eğitimde, sınıf bileşenlerinin oluşturulması adım adım ele alınmıştır. Modern React uygulamalarında fonksiyon bileşenleri ve Hook'lar daha yaygın olarak kullanılmakla birlikte, sınıf bileşenlerinin anlaşılması önemlidir. Sınıf bileşenleri, bileşen durumu (state) ve yaşam döngüsü yöntemlerini kullanma konusunda daha detaylı kontrol sağlar. Ancak, yeni projelerde fonksiyon bileşenlerinin ve Hook'ların kullanılması önerilir.

## Kod Parçacıkları

Aşağıda, yukarıda belirtilen adımların tam kod parçacıklarını bulabilirsiniz:

1. **MyComponent.jsx:**

    ```javascript
    import React, { Component } from 'react';

    class MyComponent extends Component {
        render() {
            return (
                <div>
                    <h1>Hello, World!</h1>
                </div>
            );
        }
    }

    export default MyComponent;
    ```

2. **App.js:**

    ```javascript
    import React from 'react';
    import MyComponent from './components/MyComponent';

    function App() {
        return (
            <div>
                <MyComponent />
            </div>
        );
    }

    export default App;
    ```

