# React ile Kontrollü ve Kontrolsüz Bileşenler

## Giriş

React'te bileşenlerin yönetimi, kullanıcı etkileşimlerini ve durum değişikliklerini nasıl işlediğinizi önemli ölçüde etkiler. Bu eğitimde, kontrollü ve kontrolsüz bileşenlerin ne olduğunu, bunları nasıl kullanacağınızı ve hangi durumlarda hangisinin tercih edilmesi gerektiğini inceleyeceğiz. Tüm konuları detaylı ve titizlikle ele alarak, kod parçacıkları ile destekleyeceğiz.

## Kontrollü Bileşenler

### Tanım

Kontrollü bileşenlerde form verileri React tarafından yönetilir. Bileşenin durumu (state) formun değerini depolar ve bu değer, olay işleyicileri aracılığıyla güncellenir. Bileşen, güncellenen değerle yeniden render edilir ve form verileri üzerinde tam kontrol sağlanır.

### Kullanım

#### Temel Örnek

```jsx
import React, { useState } from 'react';

function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>
        Controlled Input:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <p>Current Value: {inputValue}</p>
    </div>
  );
}

export default ControlledComponent;
```

### Avantajlar

1. **Veri Kontrolü**: Veriler tamamen React tarafından yönetilir, bu da veri akışını ve kontrolünü kolaylaştırır.
2. **Öngörülebilirlik**: Bileşen her değişiklikte yeniden render edildiği için, uygulamanın durumu daha öngörülebilir olur.
3. **Kolay Doğrulama ve Formatlama**: Kullanıcı girdileri üzerinde anında doğrulama ve formatlama yapabilirsiniz.

## Kontrolsüz Bileşenler

### Tanım

Kontrolsüz bileşenlerde form verileri DOM tarafından yönetilir. Form girdisinin değeri doğrudan DOM'dan referanslar veya diğer yöntemler kullanılarak erişilir. React değeri kontrol etmez ve değişiklikler, yeniden render işlemi tetiklenmeden DOM tarafından işlenir.

### Kullanım

#### Temel Örnek

```jsx
import React, { useRef } from 'react';

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uncontrolled Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Uncontrolled Input:
          <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledComponent;
```

### Avantajlar

1. **Basitlik**: Daha az kod yazılması ve state yönetimi gerektirmemesi nedeniyle kullanımı daha basittir.
2. **Performans**: Büyük formlar ve sık güncellemeler için daha performanslı olabilir, çünkü yeniden render işlemi tetiklenmez.

## Karşılaştırma ve Kullanım Durumları

### Kontrollü Bileşenler Ne Zaman Kullanılmalı?

- Form verilerini sıkça güncellemek ve izlemek gerektiğinde.
- Kullanıcı girdilerini doğrulamak veya anında geri bildirim sağlamak gerektiğinde.
- Form verilerinin başka bileşenlerle paylaşılması veya global state'e eklenmesi gerektiğinde.

### Kontrolsüz Bileşenler Ne Zaman Kullanılmalı?

- Basit formlar ve düşük öncelikli girişler için.
- Performansın kritik olduğu durumlarda ve sık yeniden render işlemlerinin önlenmesi gerektiğinde.
- Daha az karmaşıklık ve yönetim gerektiren projelerde.

## Kritik Değerlendirme ve Hatalar

- **Kontrollü Bileşenler**: Karmaşık formlarda, her giriş için state yönetimi ek kod ve karmaşıklık yaratabilir. Ancak, veri kontrolü ve doğrulama gerektiren durumlarda gereklidir.
- **Kontrolsüz Bileşenler**: Doğrulama ve kontrol eksikliği, kullanıcının beklenmedik girişler yapmasına neden olabilir. Bu durumlarda ek doğrulama adımları eklemek gerekebilir.

## Sonuç

Kontrollü ve kontrolsüz bileşenler, React ile form yönetiminin temel taşlarını oluşturur. Hangi yöntemin kullanılacağını belirlerken, projenin gereksinimlerini ve performans ihtiyaçlarını dikkatle değerlendirmek gerekir. Bu eğitim, her iki yaklaşımı da derinlemesine ele alarak, yazılım geliştirme süreçlerinde bu bilgileri etkili bir şekilde kullanmanıza yardımcı olacaktır.
