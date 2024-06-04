# React Context API

#### Giriş
React Context API, React kütüphanesi tarafından sağlanan ve bileşenler arasında veri veya durum paylaşımını, props (özellik) geçişi yapmadan sağlayan bir özelliktir. Props drilling olarak bilinen bu durum, bir bileşenden diğerine props geçişi yaparak derin bileşen ağaçlarında veri taşımak gerektiğinde ortaya çıkar. Context API, bu problemi çözmek için kullanılır.

Context API'nin ana bileşenleri şunlardır:
1. **Context**: `createContext()` fonksiyonu ile oluşturulur ve bileşenler arasında paylaşılacak veriyi tutar.
2. **Provider**: `Context.Provider` bileşeni, paylaşılan veriye erişmesi gereken bileşen ağacının bir kısmını sarmalar. `value` prop'u ile çocuk bileşenlere paylaşılacak veriyi içerir.
3. **Consumer**: `Context.Consumer` bileşeni, çocuk bileşenlerde paylaşılan veriye erişmek için kullanılır. Alternatif olarak, fonksiyonel bileşenlerde aynı amacı gerçekleştirmek için `useContext` hook'u kullanılabilir.

### Adım Adım Uygulama

Bu eğitimde, props drilling problemini React Context API kullanarak nasıl çözeceğimizi adım adım inceleyeceğiz.

#### Adım 1: Context Oluşturma
Öncelikle, bileşenler arasında paylaşmak istediğiniz veri için bir context oluşturun. Projenizin `src` klasöründe yeni bir dosya oluşturun ve adını `DataContext.jsx` olarak belirleyin. Aşağıdaki kodu bu dosyaya ekleyin:

```jsx
import React, { createContext } from 'react';

export const DataContext = createContext();
```

Bu kod, veriyi tutacak yeni bir context oluşturur.

#### Adım 2: Provider Kullanımı
`Parent.jsx` bileşenini güncelleyerek `DataContext.Provider` kullanın ve `Child` bileşenini sarmalayın, veriyi `value` prop'u ile geçirin:

```jsx
import React from 'react';
import { DataContext } from './DataContext';
import Child from './Child';

const Parent = () => {
  const data = "Paylaşılan Veri";

  return (
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
};

export default Parent;
```

#### Adım 3: Props Geçişini Kaldırma
`Child.jsx` bileşenini, gereksiz props geçişini kaldıracak şekilde güncelleyin. Context API kullanıldığında, `Child` bileşeninin artık veriyi props olarak almasına gerek yoktur:

```jsx
import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
  return (
    <div>
      <GrandChild />
    </div>
  );
};

export default Child;
```

#### Adım 4: Context Tüketimi
`GrandChild.jsx` bileşenini güncelleyerek context'ten veri tüketin:

```jsx
import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const GrandChild = () => {
  const data = useContext(DataContext);

  return (
    <div>
      {data}
    </div>
  );
};

export default GrandChild;
```

#### Adım 5: Uygulamanın Çalıştırılması
Projenizin `src` klasöründe bulunan `App.jsx` dosyasını açın ve en üstte `Parent` bileşenini içe aktararak kullanın:

```jsx
import React from 'react';
import Parent from './Parent';

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
```


