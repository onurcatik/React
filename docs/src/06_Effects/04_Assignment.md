# Uyruğu Tahmin Etme

## **Amaç:**

Bu görevin amacı, React hooks ve React uygulamalarında asenkron veri çekme konusundaki anlayışınızı geliştirmektir. Kullanıcı tarafından girilen bir ismin en olası uyruğunu tahmin eden bir "Uyruğu Tahmin Etme" uygulaması oluşturacaksınız. Üçüncü taraf bir API ile etkileşime girecek, yüklenme durumlarını yönetecek ve verileri kullanıcı dostu bir formatta **Tailwind CSS** kullanarak sunacaksınız.

## Gereksinimler

1. **React Uygulaması:** Bu uygulamayı oluşturmak için React.js kullanmalısınız. Bileşenler, props, state ve yaşam döngüsü metotlarının prensiplerini anlamalı ve kullanmalısınız.
2. **Hooks Kullanımı:** Bileşeninizin durumu ve yan etkilerini yönetmek için **`useState`** ve **`useEffect`** gibi React hooks kullanın.
3. **Veri Çekme:** Nationalize.io API'sinden veri çekmeli, yüklenme durumunu yönetmeli ve verileri kullanıcıya sunmalısınız.

    **API -** [https://api.nationalize.io/?name=${name}](https://api.nationalize.io/?name=$%7Bname%7D)

4. **Kullanıcı Girişi:** Kullanıcı, bir metin alanına bir isim girebilmelidir.
5. **Kullanıcı Eylemi Üzerine Veri Çekme:** Bir düğmeye tıklama ile, girilen ismin tahmin edilen uyruğunu API'den çekin.
6. **Yüklenme Durumunu Yönetme:** Veriler çekilirken kullanıcıya "Yükleniyor..." mesajı gösterin.
7. **Verilerin Görüntülenmesi:** Veriler çekildikten sonra, tahmin edilen uyruğu ve tahmin güvenini yüzde olarak kullanıcıya gösterin.
8. **Sıfırlama Fonksiyonu:** Tüm görüntülenen verileri ve giriş alanını temizleyen bir sıfırlama düğmesi uygulayın.
9. **Hata Yönetimi:** API tahmin edilen bir uyruğu döndürmezse, kullanıcıya dostça bir hata mesajı gösterin.
10. **Stil:** Uygulama iyi tasarlanmış ve kullanıcı dostu olmalıdır. Uygulamanızı stilize etmek için CSS-in-JS veya harici bir stil dosyası kullanın.

## Teslimat

1. React projenizi barındırmak için bir GitHub deposu oluşturun.
2. Kodunuzu depoya commit ve push yapın.
3. Uygulamanızı nasıl çalıştıracağınıza dair talimatlar içeren bir README dosyası ekleyin.
4. Netlify veya GitHub Pages gibi bir platform kullanarak web sitenizin canlı bir demosunu sağlayın.

## Detaylı Eğitim

### Proje Kurulumu

1. **React Uygulamasını Oluşturma:**

```bash
npx create-react-app ulke-tahmin
cd ulke-tahmin
```

2. **Gerekli Kütüphanelerin Yüklenmesi:**

```bash
npm install axios
npm install tailwindcss
npx tailwindcss init
```

### Tailwind CSS Kurulumu

`tailwind.config.js` dosyasını açın ve aşağıdaki şekilde yapılandırın:

```js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

`src/index.css` dosyasına Tailwind direktiflerini ekleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Bileşenlerin Oluşturulması

**App.js:**

```jsx
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNationality = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.nationalize.io/?name=${name}`);
      if (response.data && response.data.country && response.data.country.length > 0) {
        setNationality(response.data.country[0]);
      } else {
        setError('Tahmin edilemedi.');
      }
    } catch (err) {
      setError('Bir hata oluştu.');
    }
    setLoading(false);
  };

  const handleReset = () => {
    setName('');
    setNationality(null);
    setError(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Uyruğu Tahmin Etme</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full"
        placeholder="İsim giriniz"
      />
      <button
        onClick={fetchNationality}
        className="bg-blue-500 text-white px-4 py-2 mb-4"
      >
        Tahmin Et
      </button>
      <button
        onClick={handleReset}
        className="bg-red-500 text-white px-4 py-2 mb-4 ml-2"
      >
        Sıfırla
      </button>
      {loading && <p>Yükleniyor...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {nationality && (
        <div>
          <p>Uyruğu: {nationality.country_id}</p>
          <p>Güven: {Math.round(nationality.probability * 100)}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

**App.css:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.container {
  max-width: 600px;
  margin: 0 auto;
}
```
