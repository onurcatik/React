# Data Store Uygulaması Geliştirme

Bu eğitimde, React Context API kullanarak bir Data Store Uygulaması geliştireceğiz ve uygulamamızı Tailwind CSS ile stilize edeceğiz. Bu eğitim kapsamlı ve ayrıntılı olacaktır, her adımı dikkatlice ele alacağız ve yazılım geliştirme alanında beklenen titizlik ve standartları yansıtacağız.

### **Amaç:**

React Context API kullanarak kullanıcıların bir veri deposuna öğe ekleyip çıkarmalarını sağlayan bir Data Store Uygulaması geliştirin ve uygulamanızı Tailwind CSS ile stilize edin.

### **Gereksinimler:**

1. **`components`** klasöründe **`DataStoreApp`** adlı yeni bir React bileşeni oluşturun.
2. Veri deposunu yönetmek için React Context API kullanarak bir context oluşturun.
3. Veri deposuna yeni öğeler ekleme işlevselliğini uygulayın.
4. Veri deposundan öğeleri kaldırma işlevselliğini uygulayın.
5. Uygulamayı temiz ve görsel olarak çekici bir tasarıma ulaşmak için Tailwind CSS sınıflarını kullanarak stilize edin.

### **Adım 1: Proje Kurulumu**

İlk olarak, React projemizi oluşturacağız ve gerekli bağımlılıkları yükleyeceğiz. Aşağıdaki adımları izleyin:

```bash
npx create-react-app datastore-app
cd datastore-app
npm install tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

Tailwind CSS yapılandırmasını **`tailwind.config.js`** dosyasında aşağıdaki gibi yapılandırın:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**`src/index.css`** dosyasını şu şekilde güncelleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### **Adım 2: Context API Kurulumu**

Veri deposunu yönetmek için bir context oluşturacağız. **`src/context/DataStoreContext.js`** dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```javascript
import React, { createContext, useState } from 'react';

export const DataStoreContext = createContext();

export const DataStoreProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter(i => i !== item));
  };

  return (
    <DataStoreContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </DataStoreContext.Provider>
  );
};
```

### **Adım 3: DataStoreApp Bileşenini Oluşturma**

**`components/DataStoreApp.js`** dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```javascript
import React, { useContext, useState } from 'react';
import { DataStoreContext } from '../context/DataStoreContext';

const DataStoreApp = () => {
  const { items, addItem, removeItem } = useContext(DataStoreContext);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data Store Uygulaması</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Ekle
      </button>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {item}
            <button
              onClick={() => removeItem(item)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataStoreApp;
```

### **Adım 4: Context'i Kullanıma Alma**

**`src/App.js`** dosyasını şu şekilde güncelleyin:

```javascript
import React from 'react';
import { DataStoreProvider } from './context/DataStoreContext';
import DataStoreApp from './components/DataStoreApp';

const App = () => {
  return (
    <DataStoreProvider>
      <div className="container mx-auto">
        <DataStoreApp />
      </div>
    </DataStoreProvider>
  );
};

export default App;
```

### **Adım 5: Stilize Etme**

Tailwind CSS kullanarak uygulamanızın stilini ayarladık. Sınıfları ihtiyaçlarınıza göre düzenleyebilirsiniz. Örneğin, **`input`** ve **`button`** öğelerine eklediğimiz sınıflar, temiz ve kullanıcı dostu bir arayüz sağlar.

