## Kullanıcı Listesi Uygulaması İnşası

### Amaç:
Bu eğitimde, React performansını optimize etmek için çeşitli teknikler uygulanacaktır. Memoization, PureComponent ve useCallback kullanarak, React bileşenlerinin render verimliliğini artıracak ve web uygulamanızın genel performansını geliştireceksiniz. **Tailwind CSS** kullanarak daha iyi görselleştirme sağlayın.

### Gereksinimler:
1. İçinde karmaşık bir bileşen ve bu bileşenin alt bileşenlerini içeren bir React uygulaması oluşturun.
2. Şu API'yi kullanabilirsiniz: [JSONPlaceholder Kullanıcı API'si](https://jsonplaceholder.typicode.com/users)
3. Bileşenlerin render edilmesini optimize etmek için memoization uygulayın. Memoization, pahalı hesaplamaların yalnızca gerektiğinde yürütülmesini sağlar.
4. Shallow equality (yüzeysel eşitlik) kontrollerine dayanan prop ve state'ler için bileşenlerin render edilmesini optimize etmek için PureComponent sınıfını kullanın. PureComponent, gereksiz yeniden render edilmeleri otomatik prop ve state karşılaştırmaları yaparak azaltır.
5. Bileşenlerinizde event handler veya callback fonksiyonlarını memoize etmek için useCallback hook'unu kullanın. Bu, her render işleminde fonksiyonların gereksiz yere yeniden oluşturulmasını önler.
6. Bileşenlerin yalnızca gerektiğinde yeniden render edilmesini sağlamak için uygun prop ve state yönetim tekniklerini uygulayın.
7. Bileşenlerinizi stilize etmek ve uygulamanızın görsel çekiciliğini artırmak için Tailwind CSS kullanın.
8. Bu teknikleri uygulayarak elde edilen performans iyileştirmelerini React Developer Tools veya diğer ilgili performans izleme araçlarıyla test edin.
9. Her optimizasyon tekniğinin uygulamanızın genel performansı üzerindeki etkisini açıklayan kısa bir rapor yazın.
10. Uygulamanın farklı cihaz ve tarayıcılarda doğru şekilde çalışmasını, erişilebilir olmasını ve responsive olmasını sağlayın.
11. Her bileşenin ve optimizasyon tekniğinin amacını ve işlevselliğini açıklayan net ve özlü kod belgeleri sağlayın.

### Adım Adım Eğitim:

#### 1. React Uygulamasının Kurulumu
Öncelikle, React projesini başlatmak için aşağıdaki komutları çalıştırın:
```bash
npx create-react-app user-list-app
cd user-list-app
npm start
```

#### 2. API'den Kullanıcı Verilerini Çekmek
`src` klasöründe `components` adında bir klasör oluşturun ve içine `UserList.js` adında bir dosya ekleyin. API'den kullanıcı verilerini çekmek için aşağıdaki kodu ekleyin:
```jsx
// src/components/UserList.js
import React, { useState, useEffect, memo } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2 p-2 border rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(UserList);
```

#### 3. Memoization ile Optimizasyon
`UserList` bileşeninin `memo` ile sarılarak, yalnızca `users` değiştiğinde yeniden render edilmesini sağladık. Bu, performansı artırır.

#### 4. PureComponent Kullanımı
Alt bileşenlerden birinde `PureComponent` kullanarak optimizasyon yapalım:
```jsx
// src/components/User.js
import React, { PureComponent } from 'react';

class User extends PureComponent {
  render() {
    const { user } = this.props;
    return (
      <li className="mb-2 p-2 border rounded">
        {user.name}
      </li>
    );
  }
}

export default User;
```

Ve `UserList.js` dosyasını aşağıdaki gibi güncelleyin:
```jsx
// src/components/UserList.js
import React, { useState, useEffect, memo } from 'react';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default memo(UserList);
```

#### 5. useCallback Kullanımı
`useCallback` kullanarak, event handler fonksiyonlarını memoize edelim:
```jsx
// src/components/UserList.js
import React, { useState, useEffect, memo, useCallback } from 'react';
import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded"
        placeholder="Search users"
      />
      <ul>
        {filteredUsers.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default memo(UserList);
```

#### 6. Tailwind CSS Entegrasyonu
Tailwind CSS'i projenize ekleyin:
```bash
npm install tailwindcss
npx tailwindcss init
```
`tailwind.config.js` dosyasını aşağıdaki gibi güncelleyin:
```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
`src/index.css` dosyasını güncelleyin:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 7. Performans Testleri
React Developer Tools veya diğer performans izleme araçları ile optimizasyon tekniklerinin etkisini test edin.

#### 8. Rapor Yazımı
Her optimizasyon tekniğinin uygulamanızın genel performansı üzerindeki etkisini açıklayan kısa bir rapor yazın.

#### 9. Responsive ve Erişilebilirlik
Uygulamanın farklı cihaz ve tarayıcılarda doğru şekilde çalışmasını, erişilebilir olmasını ve responsive olmasını sağlayın.

#### 10. Kod Dokümantasyonu
Her bileşenin ve optimizasyon tekniğinin amacını ve işlevselliğini açıklayan net ve özlü kod belgeleri sağlayın.

