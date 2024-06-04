# React Bileşenlerinin Render Edilmesi 

Bu eğitimde, React'te bileşenlerin nasıl render edildiğini kapsamlı ve detaylı bir şekilde ele alacağız. Eğitim boyunca ciddi ve bilimsel bir dil kullanarak konunun yazılım geliştirme alanındaki titizlik ve standartlara uygun olarak anlatılmasını sağlayacağız.

## Proje Dizininin Açılması ve Bileşen Dosyalarının Oluşturulması

1. **Proje Dizininin Açılması:**
   - Proje dizininizi kod editörünüzde açın. Bu eğitimde, tüm bileşenlerimizi `src` klasörü altında oluşturacağız.

2. **Bileşen Klasörünün Oluşturulması:**
   - `src` klasörü altında yeni bir klasör oluşturun ve adını `components` koyun. Bu klasör, bileşen dosyalarımızı saklayacağımız yer olacaktır.

3. **Bileşen Dosyasının Oluşturulması:**
   - `components` klasörü içinde yeni bir dosya oluşturun ve adını `MyComponent.jsx` koyun. Bu dosya, bileşenimizi tanımlayacağımız yerdir.

## Basit Bir Bileşenin Oluşturulması

`MyComponent.jsx` dosyasına aşağıdaki kodu ekleyerek basit bir bileşen oluşturalım:

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Merhaba, React!</h1>
      <p>Bu, basit bir React bileşenidir.</p>
    </div>
  );
};

export default MyComponent;
```

Bu kod, React'in `div` elemanına sarmalanmış bir başlık (`h1`) ve paragraf (`p`) render eden basit bir fonksiyon bileşeni tanımlar.

## Ana Dosyada Bileşenin Render Edilmesi

Şimdi, bu bileşeni `main.jsx` dosyasında render etmemiz gerekiyor. `src` klasöründe bulunan `main.jsx` dosyasını açın ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Bu kod, `MyComponent` bileşenimizi `index.html` dosyasındaki `root` elementine render eder.

## Geliştirme Sunucusunun Başlatılması

Son olarak, terminalinizde aşağıdaki komutu çalıştırarak geliştirme sunucusunu başlatın:

```sh
npm start
```

Bu komut, yerel geliştirme sunucunuzu başlatacak ve projenizi tarayıcıda görüntülemenizi sağlayacaktır. Tarayıcınızda `http://localhost:3000` adresine giderek oluşturduğunuz bileşeni görebilirsiniz.
