# Updating


Bu eğitimde, React bileşenlerinin güncelleme döngüsünü ve bu süreçte kullanılan yaşam döngüsü yöntemlerini ele alacağız. İçeriğin ciddi ve bilimsel olmasına dikkat edeceğiz ve yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacağız. Eğitim boyunca iyi yapılandırılmış kod parçacıkları ile konuyu açıklayacağız.

### 1. Bileşen Güncellenmesi

Bir bileşen, durumunda (state) veya özelliklerinde (props) bir değişiklik olduğunda güncellenir. React, bir bileşen güncellendiğinde sırayla çağrılan beş yerleşik metoda sahiptir:

1. `getDerivedStateFromProps()`
2. `shouldComponentUpdate()`
3. `render()`
4. `getSnapshotBeforeUpdate()`
5. `componentDidUpdate()`

Bu metotlar, bileşenin güncellenme sürecini yönetir.

### 2. Yaşam Döngüsü Metotları

**getDerivedStateFromProps**
Bileşen güncellenirken çağrılan ilk metottur. Bu metod, bileşenin yeni özelliklerine göre durumunu güncelleyebilir.

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
  // Yeni props'lara göre state'i güncelle
  if (nextProps.someValue !== prevState.someValue) {
    return { someValue: nextProps.someValue };
  }
  return null;
}
```

**shouldComponentUpdate**
Bu metod, React'in bileşeni yeniden render edip etmeyeceğini belirler. Boolean bir değer döner.

```javascript
shouldComponentUpdate(nextProps, nextState) {
  // Render edilip edilmeyeceğini belirle
  return nextProps.someValue !== this.props.someValue;
}
```

**render**
Bileşen güncellendiğinde HTML'i yeniden DOM'a render eder. Bu metod her zaman çağrılır ve zorunludur.

```javascript
render() {
  return (
    <div>
      {this.state.someValue}
    </div>
  );
}
```

**getSnapshotBeforeUpdate**
Bu metod, bileşen güncellenmeden önceki props ve state'e erişim sağlar. Güncellemeden sonra bile önceki değerleri kontrol etmek mümkündür.

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
  // Güncelleme öncesi değerleri al
  return { previousValue: prevProps.someValue };
}
```

**componentDidUpdate**
Bu metod, bileşen DOM'da güncellendikten sonra çağrılır. Yan etkileri yönetmek için kullanılabilir.

```javascript
componentDidUpdate(prevProps, prevState, snapshot) {
  // Bileşen güncellendi
  if (prevProps.someValue !== this.props.someValue) {
    document.title = `Updated to ${this.props.someValue}`;
  }
}
```

### 3. Fonksiyonel Bileşenlerde Güncelleme

Fonksiyonel bileşenlerde `componentDidUpdate` metodunun davranışını `useEffect` kancası ile taklit edebiliriz. `useEffect`, yan etkileri yönetmek için kullanılır ve bağımlılıklar değiştiğinde her render'dan sonra çalışır.

```javascript
import React, { useEffect } from 'react';

function MyComponent({ someValue }) {
  useEffect(() => {
    // componentDidUpdate benzeri
    document.title = `Updated to ${someValue}`;
  }, [someValue]);

  return (
    <div>
      {someValue}
    </div>
  );
}
```

`useEffect` kancasının kullanımına dikkat edelim:

- Boş bir dizi `[]` geçirirsek, etki fonksiyonu sadece ilk render'dan sonra çalışır (`componentDidMount` benzeri).
- Hiç dizi geçmezsek, etki fonksiyonu her render'dan sonra çalışır (`componentDidMount` + `componentDidUpdate` benzeri).
- Dizi içinde bazı değerler geçirirsek, bu değerler değiştiğinde etki fonksiyonu çalışır.

### Sonuç

Bu eğitimde, React bileşenlerinin güncelleme döngüsünü ve bu süreçte kullanılan yaşam döngüsü yöntemlerini inceledik. Detaylı açıklamalar ve kod örnekleri ile konuyu pekiştirdik. React bileşenlerinin güncellenme sürecini anlamak, performans optimizasyonları ve doğru uygulama geliştirme için kritik öneme sahiptir.
