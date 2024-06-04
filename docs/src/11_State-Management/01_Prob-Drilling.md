# React Prop Drilling

Prop drilling, React'te verilerin bir üst bileşenden daha alt seviyedeki bileşenlere geçirilmesini sağlamak için kullanılan bir tekniktir. Bu eğitimde, prop drilling konseptini ve bu teknikle ilgili sorunları detaylı bir şekilde ele alacağız. Ayrıca, prop drilling'e alternatif olarak kullanılabilecek yöntemlere de değineceğiz. Eğitim boyunca iyi yapılandırılmış kod parçacıkları ekleyeceğiz ve terminolojiye dikkat ederek ciddi ve bilimsel bir dil kullanacağız.

## Giriş

Prop drilling, veriyi birkaç ara bileşenin de dahil olduğu bir hiyerarşi boyunca geçirme işlemidir. Bu, veri geçişine ihtiyaç duymayan bileşenler aracılığıyla veri iletmek anlamına gelir. Bu teknik genellikle veriyi daha üst seviyedeki bir bileşenden, bu veriye ihtiyaç duyan daha alt seviyedeki bir bileşene geçirmek için kullanılır.

## Örnek Senaryo

Basit bir örnek senaryo ile prop drilling'i anlatacağız. Bu senaryoda üç bileşen kullanacağız: Parent, Child ve GrandChild.

### Adım 1: Proje Yapısı

Öncelikle, projenizin `src` dizininde bir `components` klasörü oluşturun (eğer yoksa).

### Adım 2: Parent Bileşeni

`components` klasörü içinde `Parent.jsx` adlı bir dosya oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';
import Child from './Child';

const Parent = () => {
  const data = 'Hello from Parent';
  
  return (
    <div>
      <h1>Parent Component</h1>
      <Child data={data} />
    </div>
  );
};

export default Parent;
```

### Adım 3: Child Bileşeni

`components` klasörü içinde `Child.jsx` adlı bir dosya oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';
import GrandChild from './GrandChild';

const Child = ({ data }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <GrandChild data={data} />
    </div>
  );
};

export default Child;
```

### Adım 4: GrandChild Bileşeni

`components` klasörü içinde `GrandChild.jsx` adlı bir dosya oluşturun ve aşağıdaki kodu ekleyin:

```jsx
import React from 'react';

const GrandChild = ({ data }) => {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>{data}</p>
    </div>
  );
};

export default GrandChild;
```

### Adım 5: App Bileşeni

Projenizin `src` klasöründe bulunan `App.jsx` dosyasını açın ve Parent bileşenini import edin:

```jsx
import React from 'react';
import Parent from './components/Parent';

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
```

### Adım 6: Projeyi Çalıştırma

Projeyi çalıştırmak için terminalden `npm start` komutunu kullanabilirsiniz.

```sh
npm start
```

Bu adımlar tamamlandığında, Parent bileşeninde bulunan veri GrandChild bileşeninde görüntülenecektir. Veri akışı şu şekildedir:

1. Parent bileşeni bazı veriler içerir.
2. Parent bileşeni bu veriyi prop olarak Child bileşenine geçirir.
3. Child bileşeni veriyi alır ancak kullanmaz. Bunun yerine, veriyi prop olarak GrandChild bileşenine geçirir.
4. GrandChild bileşeni veriyi alır ve görüntüler.


