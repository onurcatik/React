# useEffect Kullanımı

Bu rehberde, React'in `useEffect` hook'unun nasıl kullanıldığını ayrıntılı bir şekilde ele alacağız. Bu kapsamlı rehber, yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacak şekilde, `useEffect` hook'unun kullanımını, örneklerle destekleyerek anlatacaktır. Eğitim boyunca, kod parçacıkları iyi yapılandırılmış ve açıklamalarla zenginleştirilmiştir.

## Giriş

`useEffect` hook'u, fonksiyonel bileşenlerde yan etkiler (side effects) gerçekleştirmek için kullanılan bir React hook'udur. Yan etkiler, veri çekme (data fetching), abonelikler (subscriptions) veya DOM'un manuel olarak değiştirilmesi gibi işlemler olabilir.

## Temel Kullanım

`useEffect` hook'u, bir fonksiyon (etki) ve isteğe bağlı bir bağımlılıklar dizisi ile çağrılır. Bu hook iki argüman alır ve ikinci argüman isteğe bağlıdır.

### Sözdizimi

```javascript
useEffect(effect, dependencies);
```

## Örnekler ve Kullanım

Aşağıdaki adımlarla `useEffect` hook'unun kullanımını daha iyi anlayalım:

### Adım 1: Proje Yapısını Hazırlama

Projenizin `src` dizininde, `components` adında bir klasör oluşturun (eğer zaten yoksa).

### Adım 2: Bileşen Dosyasını Oluşturma

`components` klasörünün içinde, `EmployeeList.jsx` adında yeni bir dosya oluşturun. Bu dosya, API'den çalışan verilerini çeken `EmployeeList` bileşenimizi içerecektir.

### Adım 3: Gerekli İthalatları Yapma

`EmployeeList.jsx` dosyasının içinde, React ve gerekli hook'ları içe aktarın:

```javascript
import React, { useState, useEffect } from 'react';
```

### Adım 4: Durum Yönetimi

`EmployeeList` bileşeninin içinde, çalışan verilerini yönetmek için `useState` hook'unu kullanın:

```javascript
const [employees, setEmployees] = useState([]);
```

### Adım 5: `useEffect` Hook'unu Kullanma

Bileşen montaj edildiğinde API'den çalışan verilerini çekmek için bir `useEffect` hook'u oluşturun:

```javascript
useEffect(() => {
  fetch('https://api.example.com/employees')
    .then(response => response.json())
    .then(data => setEmployees(data));
}, []);
```

### Adım 6: Verilerin Görüntülenmesi

`EmployeeList` bileşeninde, çalışan verilerini bir liste içinde render edin:

```javascript
return (
  <div>
    <h1>Çalışan Listesi</h1>
    <ul>
      {employees.map(employee => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  </div>
);
```

### Adım 7: Bileşeni Kullanma

`App.js` dosyanızda, `EmployeeList` bileşenini içe aktarın ve kullanın:

```javascript
import React from 'react';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <EmployeeList />
    </div>
  );
}

export default App;
```
