# Kurulum

## Giriş

Bu eğitimde, React çerçevesini kullanarak nasıl web tabanlı projeler oluşturabileceğinizi ele alacağız. Eğitim boyunca, adım adım React bileşenlerinin oluşturulması, yerel ve çevrimiçi geliştirme ortamlarının ayarlanması ve temel React uygulama yapı taşları hakkında bilgi sahibi olacaksınız. Bu rehber, yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacak şekilde hazırlanmıştır.

## Geliştirme Ortamının Kurulumu

**Çevrimiçi Kurulum:**

Çevrimiçi geliştirme için CodeSandbox kullanmanızı öneririz. CodeSandbox, web tabanlı projelerin oluşturulması, paylaşılması ve üzerinde işbirliği yapılması için çevrimiçi bir geliştirme ortamıdır.

React örnek başlangıç projesine şu adresten ulaşabilirsiniz:
[React - CodeSandbox](https://codesandbox.io/s/react-new)

**Yerel Geliştirme:**

Yerel geliştirme için Visual Studio Code (VS Code) kullanmanızı öneririz. Ancak, rahat ettiğiniz herhangi bir editörü kullanabilirsiniz. VS Code'u indirmek için resmi web sitesini ziyaret edin:
[Visual Studio Code](https://code.visualstudio.com/)

VS Code'u indirdikten sonra, React projeleri geliştirmek için gerekli araçları kurmak üzere aşağıdaki adımları izleyin.

## Node.js ve npm Kurulumu

React uygulamaları oluşturmak ve yönetmek için Node.js ve npm (Node Package Manager) kullanılır. Node.js ve npm'i sisteminize kurmak için şu adımları izleyin:

1. Node.js'in resmi web sitesine gidin: [Node.js](https://nodejs.org/)
2. İşletim sisteminize uygun olan kurulum paketini indirin ve yükleyin.
3. Yükleme tamamlandıktan sonra, terminal veya komut istemcisini açarak kurulumun doğru yapıldığını kontrol edin:
    ```bash
    node -v
    npm -v
    ```
   Bu komutlar, Node.js ve npm sürüm numaralarını gösterecektir.

## Yeni React Uygulaması Oluşturma

React uygulaması oluşturmak için Create React App aracını kullanabilirsiniz. Bu araç, React uygulamalarını hızla başlatmak için yapılandırılmış bir şablon sağlar.

1. Terminal veya komut istemcisini açın ve şu komutu çalıştırarak yeni bir React uygulaması oluşturun:
    ```bash
    npx create-react-app my-app
    ```
   Bu komut, 'my-app' adlı yeni bir React uygulaması oluşturur.

2. Uygulama dizinine gidin:
    ```bash
    cd my-app
    ```

3. Uygulamayı başlatın:
    ```bash
    npm start
    ```
   Bu komut, yerel geliştirme sunucusunu başlatır ve tarayıcınızda uygulamanızı açar.

## React Bileşenleri

React, kullanıcı arayüzlerini bileşenler kullanarak oluşturur. Bileşenler, bağımsız ve yeniden kullanılabilir kod parçalarıdır. Her bileşen, kendine özgü HTML, CSS ve JavaScript kodlarını içerebilir.

**Fonksiyonel Bileşenler:**

Fonksiyonel bileşenler, basit bileşenler oluşturmak için kullanılır. Bir fonksiyonel bileşen, yalnızca bir render metodu içerir.

Örnek:
```javascript
import React from 'react';

function Welcome(props) {
  return <h1>Merhaba, {props.name}</h1>;
}

export default Welcome;
```

**Sınıf Bileşenleri:**

Sınıf bileşenleri, daha karmaşık bileşenler oluşturmak için kullanılır. Bu bileşenler, yaşam döngüsü metodlarını ve durumu (state) yönetir.

Örnek:
```javascript
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Merhaba, {this.props.name}</h1>;
  }
}

export default Welcome;
```

## JSX ve Prop'lar

JSX (JavaScript XML), JavaScript'te HTML benzeri yapıların yazılmasına olanak tanır. Prop'lar, bileşenlere veri geçişi sağlamak için kullanılır.

Örnek:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';

ReactDOM.render(
  <Welcome name="Dünya" />,
  document.getElementById('root')
);
```

Bu örnekte, `Welcome` bileşenine `name` prop'u ile veri geçilmiştir ve bu veri bileşenin içinde kullanılmıştır.

## Sonuç

Bu eğitimde, React çerçevesini kullanarak nasıl web tabanlı projeler oluşturabileceğinizi öğrendiniz. Geliştirme ortamlarının kurulumu, yeni bir React uygulamasının oluşturulması ve bileşenlerin yapısı hakkında bilgi sahibi oldunuz. React'in temel yapı taşlarını anlayarak, daha karmaşık ve dinamik kullanıcı arayüzleri oluşturabilirsiniz. Eğitim boyunca verilen kod örneklerini kullanarak, kendi projelerinizi geliştirebilir ve React ekosistemini daha derinlemesine keşfedebilirsiniz.