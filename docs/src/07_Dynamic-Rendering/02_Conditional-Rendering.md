#  Koşullu Rendering

React'te koşullu rendering, belirli koşullar veya kriterler temelinde bileşenleri veya öğeleri görüntülemenize olanak tanıyan bir desendir. Uygulamanızın her durumu için ayrı görünümler veya bileşenler oluşturmak yerine, mevcut durum veya bileşenlerin propslarına bağlı olarak içeriği dinamik olarak görüntülemek için koşullu rendering kullanabilirsiniz.

## Koşullu Rendering Yöntemleri

### 1. Ternary Conditional Operator (Üçlü Koşul Operatörü)

Üçlü koşul operatörü, bir bileşeni veya öğeyi koşullu olarak render etmenin özlü bir yoludur. Bu operatör `?` ve `:` işaretleri kullanılarak uygulanır.

#### Örnek:

Aşağıdaki örnekte, `UserList` adında bir bileşen oluşturulmuştur. Bu bileşen, bir `users` listesini props olarak alır. Liste boş değilse, kullanıcıları bir liste formatında görüntüler. Liste boşsa, "No users found" mesajını görüntüler.

```javascript
import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default UserList;
```

### 2. Logical && Operator (Mantıksal && Operatörü)

Mantıksal `&&` operatörü, yalnızca bir koşul doğru olduğunda bir şeyin render edilmesini istediğinizde kullanışlıdır. Koşul doğruysa, `&&` operatörünün sağındaki ifade render edilir.

#### Örnek:

Aşağıda, kullanıcıların sayısını gösteren bir bileşen bulunmaktadır. Kullanıcı sayısı 0'dan büyükse, kullanıcıların sayısını görüntüler.

```javascript
import React from 'react';

const UserCount = ({ users }) => {
  return (
    <div>
      {users.length > 0 && <p>Number of users: {users.length}</p>}
    </div>
  );
};

export default UserCount;
```

### 3. If-Else Statement (If-Else Deyimi)

Daha geleneksel koşullu rendering, bileşen fonksiyonları içinde if-else deyimleri kullanılarak yapılabilir. Bu yaklaşım, daha karmaşık koşulların işlenmesi gerektiğinde faydalıdır.

#### Örnek:

Aşağıda, bir kullanıcı bilgisi bileşeni bulunmaktadır. Kullanıcı bilgileri mevcutsa, bilgileri görüntüler; değilse, "User not found" mesajını görüntüler.

```javascript
import React from 'react';

const UserInfo = ({ user }) => {
  if (user) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  } else {
    return <p>User not found</p>;
  }
};

export default UserInfo;
```
