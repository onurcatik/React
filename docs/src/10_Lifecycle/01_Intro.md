# React Bileşen Yaşam Döngüsü

React'te her bileşenin yaşam döngüsü vardır ve bu döngüyü üç ana aşamada izleyebilir ve yönetebilirsiniz:

- **Montaj (Mounting)**
- **Güncelleme (Updating)**
- **Demontaj (Unmounting)**

Bu eğitimde, her aşamanın ne olduğunu, nasıl çalıştığını ve bunları nasıl yönetebileceğinizi ayrıntılı olarak ele alacağız.

## Montaj (Mounting)

Montaj aşaması, bileşenin DOM'a yerleştirildiği aşamadır. Bu aşamada aşağıdaki yöntemler sırasıyla çağrılır:

1. **constructor()**: Bileşen başlatıldığında çağrılır.
2. **static getDerivedStateFromProps()**: State, props'tan türetilir.
3. **render()**: JSX'i DOM'a yerleştirmek için çağrılır.
4. **componentDidMount()**: Bileşen DOM'a monte edildikten sonra çağrılır.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Başlangıç state
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // props'tan state türetmek için kullanılır
    return null; // state değişikliği yoksa null döndür
  }

  componentDidMount() {
    // Bileşen DOM'a monte edildiğinde çalışır
  }

  render() {
    return (
      <div>
        {/* JSX içeriği */}
      </div>
    );
  }
}
```

## Güncelleme (Updating)

Güncelleme aşaması, bileşenin state veya props değişiklikleri nedeniyle yeniden render edilmesi gerektiğinde gerçekleşir. Bu aşamada aşağıdaki yöntemler sırasıyla çağrılır:

1. **static getDerivedStateFromProps()**: State, props'tan türetilir.
2. **shouldComponentUpdate()**: Bileşenin yeniden render edilip edilmeyeceğini belirler.
3. **render()**: JSX'i DOM'a yeniden yerleştirmek için çağrılır.
4. **getSnapshotBeforeUpdate()**: DOM güncellemesinden hemen önce çağrılır.
5. **componentDidUpdate()**: Bileşen DOM güncellemesinden sonra çağrılır.

```jsx
class MyComponent extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Bileşenin yeniden render edilip edilmeyeceğine karar verilir
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // DOM güncellemesinden hemen önce bir değer döndürür
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Bileşen DOM güncellemesinden sonra çalışır
  }

  render() {
    return (
      <div>
        {/* JSX içeriği */}
      </div>
    );
  }
}
```

## Demontaj (Unmounting)

Demontaj aşaması, bileşenin DOM'dan kaldırıldığı aşamadır. Bu aşamada yalnızca bir yöntem çağrılır:

1. **componentWillUnmount()**: Bileşen DOM'dan kaldırılmadan hemen önce çağrılır.

```jsx
class MyComponent extends React.Component {
  componentWillUnmount() {
    // Bileşen DOM'dan kaldırılmadan önce çalışır
  }

  render() {
    return (
      <div>
        {/* JSX içeriği */}
      </div>
    );
  }
}
```

## Sonuç

React bileşenlerinin yaşam döngüsü, bileşenlerin belirli olaylar sırasında belirli işlemler gerçekleştirmesine olanak tanır. Bu yaşam döngüsü yöntemlerini doğru ve verimli bir şekilde kullanarak uygulamalarınızın performansını ve bakımını iyileştirebilirsiniz.