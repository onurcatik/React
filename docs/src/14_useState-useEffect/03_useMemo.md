## `useMemo` Hook Kullanımı

React geliştirmelerinde `useMemo` Hook'u, performans optimizasyonu sağlamak için kullanılan önemli bir araçtır. Bu eğitimde, `useMemo` Hook'unun nasıl kullanılacağını, kullanımı ile ilgili dikkat edilmesi gereken noktaları ve gerçek bir örnek üzerinden nasıl uygulanacağını anlatacağız.

### useMemo Nedir?

`useMemo`, hesaplanması pahalı olan bir değeri, belirli bağımlılıklar değişmediği sürece yeniden hesaplamadan kullanmamıza olanak tanır. Bu sayede gereksiz render işlemlerinin önüne geçilmiş olur.

**Sözdizimi:**

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- `useMemo` iki argüman alır:
  1. Pahalı bir hesaplama işlemi döndüren fonksiyon (`() => computeExpensiveValue(a, b)`).
  2. Bu fonksiyonun bağımlılıklarını içeren bir dizi (`[a, b]`). Bu bağımlılıklardan herhangi biri değiştiğinde, `useMemo` yeni değeri hesaplar.

### Problem

`useMemo` ve `useCallback` kullanmanın temel nedenlerinden biri, bileşenin propsları değişmediği sürece yeniden render edilmesini önlemektir. Şimdi, `useMemo` kullanarak ve kullanmadan iki ayrı bileşenle bu farkı gösteren bir örnek oluşturacağız.

### Adım Adım Uygulama

1. **Yeni Bir Klasör Oluşturma:**
   
   React projenizin `src` klasöründe `components` adında yeni bir klasör oluşturun (eğer mevcut değilse).

2. **Timer Bileşenini Oluşturma:**

   `components` klasöründe `Timer.jsx` adlı bir bileşen oluşturun. Bu bileşende `useState` kullanarak bir timer durumu yönetilecektir. Ayrıca timer değerini artırmak için bir buton bulunacak. `ExpensiveCalculation` bileşeni `useMemo` kullanmadan pahalı bir hesaplama yaparken, `MemoizedCalculation` bileşeni aynı hesaplamayı `useMemo` kullanarak optimize edecektir.

   ```javascript
   // Timer.jsx
   import React, { useState } from 'react';
   import ExpensiveCalculation from './ExpensiveCalculation';
   import MemoizedCalculation from './MemoizedCalculation';

   const Timer = () => {
     const [time, setTime] = useState(0);

     return (
       <div>
         <h1>Timer: {time}</h1>
         <button onClick={() => setTime(time + 1)}>Tick</button>
         <ExpensiveCalculation time={time} />
         <MemoizedCalculation time={time} />
       </div>
     );
   };

   export default Timer;
   ```

3. **ExpensiveCalculation Bileşenini Oluşturma:**

   `components` klasöründe `ExpensiveCalculation.jsx` adlı bir bileşen oluşturun. Bu bileşen `useMemo` kullanmadan pahalı bir hesaplama yapar.

   ```javascript
   // ExpensiveCalculation.jsx
   import React from 'react';

   const ExpensiveCalculation = ({ time }) => {
     const performExpensiveCalculation = (num) => {
       console.log('Performing expensive calculation');
       // Pahalı hesaplama işlemi
       return num * 2;
     };

     const result = performExpensiveCalculation(time);

     return <div>Expensive Calculation Result: {result}</div>;
   };

   export default ExpensiveCalculation;
   ```

4. **MemoizedCalculation Bileşenini Oluşturma:**

   `components` klasöründe `MemoizedCalculation.jsx` adlı bir bileşen oluşturun. Bu bileşen `useMemo` kullanarak aynı pahalı hesaplamayı optimize eder.

   ```javascript
   // MemoizedCalculation.jsx
   import React, { useMemo } from 'react';

   const MemoizedCalculation = ({ time }) => {
     const performExpensiveCalculation = (num) => {
       console.log('Performing memoized expensive calculation');
       // Pahalı hesaplama işlemi
       return num * 2;
     };

     const memoizedResult = useMemo(() => performExpensiveCalculation(time), [time]);

     return <div>Memoized Calculation Result: {memoizedResult}</div>;
   };

   export default MemoizedCalculation;
   ```

5. **App Bileşenini Güncelleme:**

   `App.jsx` dosyasını `Timer` bileşenini içerecek şekilde güncelleyin.

   ```javascript
   // App.jsx
   import React from 'react';
   import Timer from './components/Timer';

   const App = () => {
     return (
       <div className="App">
         <Timer />
       </div>
     );
   };

   export default App;
   ```

### Uygulamanın Akışı

1. Uygulama başladığında `Timer` bileşeni render edilir. `timer` durumu 0 olarak başlatılır.
2. `ExpensiveCalculation` ve `MemoizedCalculation` bileşenleri de render edilir ve `time` prop'u 0'dır. Her iki bileşen de pahalı hesaplamayı gerçekleştirir.
3. Konsol, "Performing expensive calculation" ve "Performing memoized expensive calculation" mesajlarını gösterir.
4. "Tick" butonuna tıkladığınızda, `Timer` bileşeninin `time` durumu 1 artar ve bu bileşen ve çocuk bileşenleri yeniden render edilir.
5. `ExpensiveCalculation` bileşeni, `time` prop'u değişmese bile pahalı hesaplamayı yeniden yapar. Konsol "Performing expensive calculation" mesajını tekrar gösterir.
6. `MemoizedCalculation` bileşeni, `time` prop'u değişip değişmediğini kontrol eder. Eğer değişmişse, pahalı hesaplamayı yeniden yapar ve konsol "Performing memoized expensive calculation" mesajını gösterir. Eğer değişmemişse, pahalı hesaplamayı atlar.
7. Her "Tick" butonuna tıkladığınızda, bu adımlar tekrarlanır.

### Sonuç

`useMemo`, bağımlılıkları değişmediği sürece pahalı hesaplamaları atlayarak uygulamayı optimize etmeye yardımcı olur. Bu sayede, `MemoizedCalculation` bileşeni, `time` prop'u değişmediğinde hesaplamayı yeniden yapmaz, bu da performans iyileştirmesi sağlar.

