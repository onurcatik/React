# **React'te Stil Uygulama**

React'te bileşenleri stillendirmek için satır içi stiller, harici stil dosyaları veya CSS modülleri kullanabilirsiniz. İşte her yöntemin nasıl kullanılacağına dair bir açıklama:

## **1. Satır İçi Stiller (Inline Styles)**

Satır içi stiller, doğrudan bileşenlere JavaScript nesneleri olarak uygulanır. Stil adları camelCase yazılır ve değerler string veya sayı olabilir.

### Örnek:

```jsx
import React from 'react';

function InlineStyledComponent() {
  const style = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px'
  };

  return (
    <div style={style}>
      Bu bir satır içi stil ile stillendirilmiş bileşen örneğidir.
    </div>
  );
}

export default InlineStyledComponent;
```

## **2. Harici Stil Dosyaları (External Stylesheets)**

Harici stil dosyası kullanmak için bir CSS dosyası oluşturun ve bu dosyayı bileşeninize dahil edin.

### Örnek:

**styles.css:**

```css
.external-styled-component {
  background-color: lightgreen;
  padding: 20px;
  border-radius: 5px;
}
```

**Component.js:**

```jsx
import React from 'react';
import './styles.css';

function ExternalStyledComponent() {
  return (
    <div className="external-styled-component">
      Bu bir harici stil dosyası ile stillendirilmiş bileşen örneğidir.
    </div>
  );
}

export default ExternalStyledComponent;
```

## **3. CSS Modülleri (CSS Modules)**

CSS Modülleri, küresel ad alanı çakışmalarını önleyen bileşen kapsamlı stiller kullanmanın bir yoludur. CSS Modülleri kullanmak için, CSS dosya adını `.module.css` ile bitirin ve bu dosyayı bileşeninizde içe aktarın.

### Örnek:

**styles.module.css:**

```css
.module-styled-component {
  background-color: lightcoral;
  padding: 20px;
  border-radius: 5px;
}
```

**Component.js:**

```jsx
import React from 'react';
import styles from './styles.module.css';

function ModuleStyledComponent() {
  return (
    <div className={styles['module-styled-component']}>
      Bu bir CSS modülü ile stillendirilmiş bileşen örneğidir.
    </div>
  );
}

export default ModuleStyledComponent;
```

## **Yöntemlerin Karşılaştırılması**

- **Satır İçi Stiller:**
  - **Avantajlar:** Basit ve hızlı kullanım.
  - **Dezavantajlar:** Stil adlarının camelCase olması, büyük stil kuralları için okunabilirliği azaltabilir ve yeniden kullanılabilirliği düşürür.

- **Harici Stil Dosyaları:**
  - **Avantajlar:** HTML ve CSS ayrımı, daha iyi dosya organizasyonu ve stil kurallarının yeniden kullanılabilirliği.
  - **Dezavantajlar:** Küresel ad çakışmaları ve stil izolasyonunun zayıf olması.

- **CSS Modülleri:**
  - **Avantajlar:** Bileşen bazında stil izolasyonu, küresel ad çakışmalarını önler.
  - **Dezavantajlar:** Ek yapılandırma ve karmaşıklık.

Her yöntem, kullanım amacına ve projenin ihtiyaçlarına göre seçilebilir. Geliştiriciler, hangi stil yöntemiyle en verimli ve sürdürülebilir sonuçları alacaklarına karar vermelidir.