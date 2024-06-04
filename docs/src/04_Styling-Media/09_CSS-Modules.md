# CSS Modülleri

Bu eğitimde, React projelerinde CSS Modülleri kullanarak stil yönetimini nasıl yapacağınızı ele alacağız. CSS Modülleri, stil çakışmalarını önlemek ve bileşen tabanlı mimariyi desteklemek için kullanışlı bir yaklaşımdır. Adım adım bir bileşen oluşturacak ve bu bileşeni CSS Modülleri ile nasıl stilize edeceğinizi göstereceğiz. 

## Giriş

CSS Modülleri, CSS sınıf isimlerini bileşen bazında izole eden ve böylece stil çakışmalarını önleyen bir tekniktir. Bu modüller, her bileşenin kendi CSS dosyasını kullanarak stil yönetimini kolaylaştırır. React ile kullanıldığında, projelerde daha düzenli ve yönetilebilir bir stil yapısı sağlar.

## Adım 1: Bileşenler İçin Klasör Oluşturma

Öncelikle, proje yapınızı organize etmek için bileşenler (components) klasörünü oluşturun. Bu klasör, her bileşenin JSX ve CSS dosyalarını içerecektir.

```sh
src/
├── components/
│   ├── ModuleStyledText.jsx
│   ├── ModuleStyledText.module.css
│   ...
```

## Adım 2: JSX Dosyasını Oluşturma

`components` klasörü içinde, `ModuleStyledText.jsx` adında yeni bir JSX dosyası oluşturun. Bu dosya, bileşenin yapısını tanımlayacaktır.

```jsx
// ModuleStyledText.jsx
import React from 'react';
import styles from './ModuleStyledText.module.css';

const ModuleStyledText = () => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.text}>Bu bir CSS Modülü ile stilize edilmiş metindir.</p>
    </div>
  );
};

export default ModuleStyledText;
```

## Adım 3: CSS Modül Dosyasını Oluşturma

`components` klasörü içinde, `ModuleStyledText.module.css` adında yeni bir CSS dosyası oluşturun. Bu dosya, bileşenin stil kurallarını içerecektir.

```css
/* ModuleStyledText.module.css */
.textContainer {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.text {
  color: #333;
  font-size: 16px;
}
```

## Adım 4: Bileşeni İçe Aktarma ve Kullanma

Ana bileşen dosyanıza (`App.jsx` veya başka bir üst bileşen) gidin ve `ModuleStyledText` bileşenini içe aktarın ve JSX içinde kullanın.

```jsx
// App.jsx
import React from 'react';
import ModuleStyledText from './components/ModuleStyledText';

const App = () => {
  return (
    <div>
      <h1>CSS Modülleri ile Stil Yönetimi</h1>
      <ModuleStyledText />
    </div>
  );
};

export default App;
```

## Adım 5: Projeyi Çalıştırma

Proje klasörünüze gidin ve geliştirme sunucusunu başlatın. Aşağıdaki komutları kullanarak projenizi başlatabilirsiniz:

```sh
npm install
npm run dev
```

Bu adımlar, React projelerinizde CSS Modülleri kullanarak bileşenlerinizi nasıl stilize edeceğinizi göstermektedir. CSS Modülleri, stil çakışmalarını önler ve kodunuzu daha yönetilebilir hale getirir.

## Eleştirel Değerlendirme

CSS Modülleri, bileşen tabanlı mimarilerde stil yönetimini kolaylaştırsa da, projenizin büyüklüğüne ve karmaşıklığına bağlı olarak stil yönetiminde bazı zorluklar yaşanabilir. Büyük projelerde, global stillerin yönetimi ve stil kurallarının tutarlılığı konularında dikkatli olunmalıdır. Ayrıca, CSS-in-JS kütüphaneleri ile karşılaştırıldığında, bazı performans ve bakım farklılıkları olabilir.

## Sonuç

Bu eğitimde, CSS Modüllerinin temellerini ve React projelerinde nasıl kullanıldığını öğrendiniz. Bu teknik, özellikle büyük projelerde stil çakışmalarını önlemeye yardımcı olur ve bileşen tabanlı mimarilerle uyumludur. Öğrendiklerinizi projelerinizde uygulayarak daha düzenli ve sürdürülebilir bir stil yönetimi sağlayabilirsiniz.