# React Bileşenlerinin Mounting (Montaj)

## Giriş

React, modern web geliştirme dünyasında popüler bir JavaScript kütüphanesidir. Bu eğitimde, React bileşenlerinin montaj (Mount) aşamasını ayrıntılı bir şekilde ele alacağız. Montaj (Mount), bir bileşenin oluşturulup DOM'a eklenme sürecidir. Bu süreç, bileşenin yaşam döngüsünün ilk aşamasını temsil eder ve belirli yaşam döngüsü yöntemlerinin sırasıyla çağrılmasıyla karakterize edilir.

## Yaşam Döngüsü Yöntemleri

Montaj(Mount) aşamasında çağrılan yaşam döngüsü yöntemleri sırasıyla şunlardır:
1. `constructor(props)`
2. `static getDerivedStateFromProps(props, state)`
3. `render()`
4. `componentDidMount()`

### 1. Constructor(props)

**`constructor()`** yöntemi, bileşen başlatıldığında ilk olarak çağrılır. Bu yöntem, başlangıç durumunu (state) ve diğer başlangıç değerlerini ayarlamak için doğal bir yerdir.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
}
```

### 2. static getDerivedStateFromProps(props, state)

**`getDerivedStateFromProps()`** yöntemi, DOM'a eleman(lar)ın render edilmesinden hemen önce çağrılır. Bu yöntem, başlangıç `props`larına dayalı olarak `state` nesnesini ayarlamak için doğal bir yerdir. `state`'i bir argüman olarak alır ve `state`'te yapılacak değişiklikleri içeren bir nesne döner.

```javascript
static getDerivedStateFromProps(props, state) {
  if (props.resetCount) {
    return {
      count: 0,
    };
  }
  return null;
}
```

### 3. render()

**`render()`** yöntemi gereklidir ve HTML'yi DOM'a gerçekten çıktısını veren yöntemdir.

```javascript
render() {
  return (
    <div>
      <h1>{this.state.count}</h1>
    </div>
  );
}
```

### 4. componentDidMount()

**`componentDidMount()`** yöntemi, bileşen render edildikten sonra çağrılır. Bu yöntem, DOM'a erişim veya bir API çağrısı gibi yan etkiler oluşturmak için idealdir.

```javascript
componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}
```

## Sonuç

React bileşenlerinin montaj aşaması, bileşenlerin DOM'a eklenmeden önce ve eklendikten hemen sonra çağrılan belirli yaşam döngüsü yöntemlerini içerir. Bu yöntemler, bileşenin başlangıç durumunu ayarlamak, bileşeni DOM'a eklemek ve gerekli yan etkileri yönetmek için kullanılır. Bu eğitimde, her yöntemin ne zaman ve nasıl kullanıldığını örneklerle inceledik.