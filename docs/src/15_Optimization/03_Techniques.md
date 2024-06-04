# Performansı Optimize Etme 

Bu eğitim, React uygulamalarının performansını optimize etmek için kullanılan teknikleri kapsamaktadır. Temel olarak, gereksiz yeniden render etmeleri en aza indirmek, bellek tüketimini azaltmak ve render sürelerini hızlandırmak üzerine odaklanacağız. Bu bağlamda memoizasyon, `PureComponent` ve `useCallback` kullanımına odaklanacağız.

## 1. React.memo

`React.memo`, işlevsel bileşenlerde gereksiz yeniden render işlemlerini önlemek için kullanılan bir memoizasyon yöntemidir. Bu yöntem, sadece giriş özellikleri değiştiğinde bileşenin yeniden render edilmesini sağlar.

### Örnek:

Basit bir işlevsel bileşen olan `Child`'ı ele alalım:

```javascript
const Child = ({ text }) => {
  console.log("Child component is rendering");
  return <div>{text}</div>;
};
```

`Child` bileşeninin performansını `React.memo` kullanarak optimize edebiliriz:

```javascript
const Child = React.memo(({ text }) => {
  console.log("Child component is rendering");
  return <div>{text}</div>;
});
```

Bu şekilde, `Child` bileşeni yalnızca `text` özelliği değiştiğinde yeniden render edilecektir.

## 2. React.PureComponent

`React.PureComponent`, sınıf bileşenlerini optimize etmek için kullanılan bir yöntemdir. Bu yöntem, `shouldComponentUpdate` yaşam döngüsü yönteminde giriş özelliklerinin ve durumun yüzeysel bir karşılaştırmasını yapar.

### Örnek:

Basit bir sınıf bileşeni olan `Child`'ı ele alalım:

```javascript
class Child extends React.Component {
  render() {
    console.log("Child component is rendering");
    return <div>{this.props.text}</div>;
  }
}
```

`Child` bileşeninin performansını `React.PureComponent` kullanarak optimize edebiliriz:

```javascript
class Child extends React.PureComponent {
  render() {
    console.log("Child component is rendering");
    return <div>{this.props.text}</div>;
  }
}
```

Bu şekilde, `Child` bileşeni yalnızca giriş özellikleri veya durum değiştiğinde yeniden render edilecektir.

## 3. useCallback

`useCallback`, işlevsel bileşenlerde inline fonksiyonları memoize etmeye yardımcı olan bir kancadır. Bu, her render işleminde yeni fonksiyon örneklerinin oluşturulmasını ve dolayısıyla alt bileşenlerde gereksiz yeniden render'ları önler.

### Örnek:

Bir butonla durumu güncelleyen `Parent` bileşeni ve bir fonksiyonu prop olarak alan `Child` bileşenini ele alalım:

```javascript
const Parent = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Child onIncrement={increment} />
    </div>
  );
};

const Child = ({ onIncrement }) => {
  console.log("Child component is rendering");
  return <button onClick={onIncrement}>Increment in Child</button>;
};
```

Bu örnekte, `Parent` bileşeni her yeniden render edildiğinde `Child` bileşeni de yeniden render edilir çünkü `increment` fonksiyonu her seferinde yeniden oluşturulur. Bunu düzeltmek için `useCallback` kancasını kullanabiliriz:

```javascript
const Parent = () => {
  const [count, setCount] = React.useState(0);

  const increment = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Child onIncrement={increment} />
    </div>
  );
};

const Child = ({ onIncrement }) => {
  console.log("Child component is rendering");
  return <button onClick={onIncrement}>Increment in Child</button>;
};
```

Bu şekilde, `Child` bileşeni yalnızca `increment` fonksiyonu değiştiğinde yeniden render edilecektir.

## Sonuç

Bu eğitimde, React uygulamalarının performansını optimize etmek için kullanılan üç temel tekniği inceledik: `React.memo`, `React.PureComponent` ve `useCallback`. Bu teknikleri doğru bir şekilde kullanarak, React uygulamalarınızın performansını önemli ölçüde artırabilirsiniz. Bu yöntemleri uygularken dikkatli ve eleştirel bir yaklaşım benimsemek, daha verimli ve sürdürülebilir yazılım geliştirme süreçlerine katkıda bulunacaktır.