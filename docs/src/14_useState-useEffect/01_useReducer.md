# useReducer Hook 

Bu eğitim rehberi, React uygulamalarında daha karmaşık durum yönetimi için kullanılan `useReducer` kancasının nasıl kullanılacağını kapsamlı ve ayrıntılı bir şekilde açıklamaktadır. `useReducer`, `useState` kancasına daha ileri düzey bir alternatiftir ve bir bileşen içerisindeki durum mantığını daha etkili bir şekilde yönetmek için kullanılır. Bu rehber, durum yönetimi ve `useReducer` kancasının kullanımını örneklerle açıklayacaktır.

## Giriş

### `useReducer` Nedir?

`useReducer` kancası, bir bileşen içindeki karmaşık durum mantığını yönetmek için kullanılır. Özellikle birden fazla alt değer içeren durumlarla veya bir sonraki durumun önceki duruma bağlı olduğu durumlarla ilgilenirken kullanışlıdır.

### Kullanım Adımları

`useReducer` kancasını kullanmak için iki ana bileşene ihtiyacınız vardır:

1. **Reducer Fonksiyonu**: Bu, mevcut durumu ve bir aksiyonu argüman olarak alan ve aksiyon türü ve yüküne (payload) bağlı olarak bir sonraki durumu döndüren saf bir fonksiyondur.
2. **Başlangıç Durumu**: Bu, reducer tarafından yönetilen durumun başlangıç değeridir.

### Sözdizimi

`useReducer` kancasını bir React bileşeninde kullanmak için şu adımları takip edin:

1. `useReducer`'ı `react`'dan içe aktarın.
2. Mevcut durumu ve aksiyonu argüman olarak alan bir reducer fonksiyonu oluşturun.
3. Başlangıç durumunu tanımlayın.
4. Reducer fonksiyonu ve başlangıç durumu ile `useReducer`'ı çağırın.
5. Mevcut durumu bileşende erişin ve render edin.
6. Durumu güncellemek için dispatch fonksiyonunu kullanarak aksiyonları gönderin.
7. Reducer, aksiyon türüne bağlı olarak durumu günceller ve bileşen yeni durum ile yeniden render edilir.

## Adım Adım Uygulama

Aşağıdaki adımları izleyerek React uygulamanızda `useReducer` kancasını kullanabilirsiniz:

### 1. Bileşenler İçin Yeni Bir Klasör Oluşturun

React projenizin `src` klasöründe, `components` adında yeni bir klasör oluşturun (eğer zaten mevcut değilse).

```bash
mkdir src/components
```

### 2. Yeni Bir Bileşen Dosyası Oluşturun

`components` klasörü içinde `Counter.jsx` adında yeni bir dosya oluşturun.

```bash
touch src/components/Counter.jsx
```

### 3. React'i İçe Aktarın

`Counter.jsx` dosyasını açın ve React'i içe aktararak başlayın.

```jsx
import React from 'react';
```

### 4. Counter Bileşenini Oluşturun

`useReducer` kancasını kullanarak durumunu yönetecek olan `Counter` adlı fonksiyonel bir bileşen tanımlayın. Şimdilik, UI bileşenlerini render edin.

```jsx
const Counter = () => {
  return (
    <div>
      <h1>Counter</h1>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
```

### 5. Counter Bileşenini İçe Aktarın ve Kullanın

`src` klasörünüzde `App.jsx` dosyasını açın ve `Counter` bileşenini içe aktarın. `App` bileşeninin mevcut içeriğini `Counter` bileşeni ile değiştirin.

```jsx
import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
```

### 6. Uygulamayı Çalıştırın

Uygulamanızı çalıştırın ve `Counter` bileşeninin doğru şekilde render edildiğini doğrulayın.

```bash
npm start
```

### 7. `useReducer`'ı İçe Aktarın

`Counter.jsx` dosyasını güncelleyerek `useReducer` kancasını içe aktarın.

```jsx
import React, { useReducer } from 'react';
```

### 8. Reducer Fonksiyonu Oluşturun

Mevcut durumu ve aksiyonu argüman olarak alan ve aksiyon türü ve yüküne (payload) bağlı olarak bir sonraki durumu döndüren bir reducer fonksiyonu tanımlayın.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
};
```

### 9. Başlangıç Durumunu Tanımlayın

Reducer tarafından yönetilecek durum için başlangıç durum değerini belirleyin. Bu örnekte, başlangıç durumu basit bir sayı, 0'dır.

```jsx
const initialState = { count: 0 };
```

### 10. `useReducer`'ı Uygulayın

`Counter` bileşenini güncelleyerek durumunu yönetmek için `useReducer` kancasını kullanın ve UI bileşenlerini durumu kullanacak ve aksiyonları dispatch edecek şekilde güncelleyin.

```jsx
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```



