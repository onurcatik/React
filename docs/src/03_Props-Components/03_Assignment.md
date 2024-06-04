# Ürün Vitrini Oluşturma

## Giriş

Bu eğitimde, React bileşenleri ve props ile çalışma pratiği yaparak dinamik bir ürün listesi oluşturmayı hedefleyeceğiz. Bu eğitim, yeniden kullanılabilir bileşenler oluşturma, props aracılığıyla veri geçişi ve Tailwind CSS kullanarak bileşenleri stilize etme konularında becerilerinizi geliştirecektir.

## Gereksinimler

1. Yeni bir React projesi kurun veya mevcut bir proje yapısını kullanın.
2. Projenin kaynak dizininde `components` adında bir klasör oluşturun.
3. `components` klasörünün içinde `ProductList.jsx` adında yeni bir bileşen dosyası oluşturun.
4. `ProductList` bileşenini, her ürün için aşağıdaki bilgileri içeren bir ürün listesi render edecek şekilde uygulayın:
   - Ürün adı
   - Ürün resmi (Yer tutucu bir resim veya gerçek bir resim URL'si kullanın)
   - Ürün fiyatı
   - Ürün açıklaması
5. Ürün nesnelerini içeren bir dizi saklamak için `productsData` gibi ayrı bir veri dosyası oluşturun. Her ürün nesnesi, `ProductList` bileşeninde ürünü render etmek için gerekli bilgileri içermelidir.
6. Ürün verilerini, ana bileşenden veya ayrı bir dosyadan `ProductList` bileşenine props olarak geçirin.
7. Tailwind CSS sınıflarını kullanarak ürün listesi ve bireysel ürün kartlarını görsel olarak çekici düzenler elde edecek şekilde stilize edin.

## Projenin Oluşturulması

## Adım 1: Proje Kurulumu

Yeni bir React projesi oluşturmak için aşağıdaki komutu kullanın:

```bash
npx create-react-app product-showcase
cd product-showcase
```

Tailwind CSS'i projeye ekleyin:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

`tailwind.config.js` dosyasını aşağıdaki gibi yapılandırın:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`src/index.css` dosyasına aşağıdaki satırları ekleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Adım 2: Bileşen Klasörünün ve Dosyasının Oluşturulması

`src` dizininde `components` adında bir klasör oluşturun ve bu klasörde `ProductList.jsx` dosyasını oluşturun.

## Adım 3: ProductList Bileşeninin Uygulanması

`ProductList.jsx` dosyasının içeriği aşağıdaki gibi olmalıdır:

```jsx
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg"/>
          <div className="mt-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price}</p>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
```

## Adım 4: Ürün Verilerinin Oluşturulması

`src` dizininde `productsData.js` dosyasını oluşturun ve aşağıdaki içeriği ekleyin:

```js
const productsData = [
  {
    id: 1,
    name: "Ürün 1",
    image: "https://via.placeholder.com/150",
    price: 100,
    description: "Bu, ürün 1 için bir açıklamadır."
  },
  {
    id: 2,
    name: "Ürün 2",
    image: "https://via.placeholder.com/150",
    price: 150,
    description: "Bu, ürün 2 için bir açıklamadır."
  },
  {
    id: 3,
    name: "Ürün 3",
    image: "https://via.placeholder.com/150",
    price: 200,
    description: "Bu, ürün 3 için bir açıklamadır."
  }
];

export default productsData;
```

## Adım 5: Ana Bileşen ve Veri Geçişi

`src/App.js` dosyasını aşağıdaki gibi düzenleyin:

```jsx
import React from 'react';
import ProductList from './components/ProductList';
import productsData from './productsData';

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ürün Vitrini</h1>
      <ProductList products={productsData} />
    </div>
  );
}

export default App;
```

## Adım 6: Projenin GitHub'a Yüklenmesi

Yeni bir GitHub deposu oluşturun ve projeyi yüklemek için aşağıdaki komutları kullanın:

```bash
git init
git add .
git commit -m "İlk commit"
git remote add origin <GitHub_depo_URL>
git push -u origin master
```


## Sonuç

Bu eğitimde, React ile yeniden kullanılabilir bileşenler oluşturma, props aracılığıyla veri geçişi ve Tailwind CSS kullanarak bileşenleri stilize etme konularında becerilerinizi geliştirdiniz. Bu beceriler, modern web geliştirme süreçlerinde önemli rol oynamaktadır ve daha karmaşık uygulamaların temelini oluşturur. Projenizi geliştirmeye ve özelleştirmeye devam ederek bu temel becerileri daha da güçlendirebilirsiniz.
