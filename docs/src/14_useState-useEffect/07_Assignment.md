# Özel Form Doğrulama Hook'u Oluşturma

Bu eğitim, React kullanarak özel bir form doğrulama hook'u oluşturma sürecini kapsamaktadır. Eğitim boyunca, sağlanan PDF'deki gereksinimlere dayanarak, adım adım bir rehber sunulacaktır. İçeriğin ciddiyetini ve bilimsel doğruluğunu korumak amacıyla resmi bir dil kullanılacaktır.

## Giriş

Bu eğitimin amacı, form girişlerinin doğrulanmasını sağlayan özel bir React hook'u (useFormValidation) oluşturmaktır. Bu hook, form verilerinin bütünlüğünü sağlamaya ve web sitesi formlarının kullanıcı deneyimini iyileştirmeye yardımcı olacaktır. Hook, Tailwind CSS kullanarak form girdilerini, hata mesajlarını ve genel form düzenini görsel olarak çekici hale getirecektir.

## Gereksinimler

1. **useFormValidation** adında özel bir hook oluşturulmalıdır.
2. Tailwind CSS sınıfları kullanılarak form girdileri, hata mesajları ve form düzeni stillendirilmelidir.
3. Hook, form değerleri için başlangıç durumunu ve her form alanı için doğrulama kurallarını tanımlayan bir nesneyi kabul etmelidir.
4. Hook, güncel form değerlerini, geçersiz girişler için hata mesajlarını, form değerlerini güncellemek için bir fonksiyonu ve form gönderimini işlemek için bir fonksiyonu döndürmelidir.
5. Doğrulama kuralları, zorunlu alanlar, minimum ve maksimum uzunluk, sayısal değerler, e-posta formatı gibi yaygın doğrulama senaryolarını desteklemelidir.
6. Tailwind CSS yardımcı sınıfları kullanılarak geçersiz girdiler için dinamik hata mesajları görüntülenmeli, hatalar renk veya sınır değişiklikleriyle vurgulanmalıdır.
7. Form düzeni, farklı ekran boyutlarında görsel olarak çekici olacak şekilde Tailwind CSS duyarlı sınıfları kullanılarak oluşturulmalıdır.
8. useFormValidation hook'unu kullanan ve birden çok giriş alanını doğrulayan örnek bir React bileşeni oluşturulmalıdır.
9. Kullanıcı veri girişi yapmadığında butonun içeriği değiştirilmelidir.

## Adım Adım Uygulama

### 1. Proje Kurulumu

İlk olarak, yeni bir React projesi oluşturalım ve Tailwind CSS'i projeye ekleyelim.

```bash
npx create-react-app form-validator
cd form-validator
npm install tailwindcss
npx tailwindcss init
```

Tailwind CSS konfigürasyonunu `tailwind.config.js` dosyasına ekleyin:

```javascript
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Tailwind CSS'i `src/index.css` dosyasına ekleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. useFormValidation Hook'u Oluşturma

`src/hooks` klasöründe `useFormValidation.js` dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```javascript
import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useFormValidation;
```

### 3. Doğrulama Fonksiyonunun Oluşturulması

Doğrulama kurallarını içeren bir fonksiyon oluşturun. Bu fonksiyon, form değerlerini kontrol edecek ve geçersiz girdiler için hata mesajları döndürecektir.

`src/utils/validation.js` dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```javascript
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'İsim zorunludur';
  } else if (values.name.length < 3) {
    errors.name = 'İsim en az 3 karakter olmalıdır';
  }

  if (!values.email) {
    errors.email = 'E-posta zorunludur';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Geçersiz e-posta adresi';
  }

  if (!values.password) {
    errors.password = 'Şifre zorunludur';
  } else if (values.password.length < 6) {
    errors.password = 'Şifre en az 6 karakter olmalıdır';
  }

  return errors;
};

export default validate;
```

### 4. Örnek React Bileşeni Oluşturma

Örnek bir React bileşeni oluşturarak useFormValidation hook'unu ve doğrulama fonksiyonunu kullanın.

`src/components/Form.js` dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```javascript
import React from 'react';
import useFormValidation from '../hooks/useFormValidation';
import validate from '../utils/validation';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useFormValidation(INITIAL_STATE, validate);

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          İsim
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={`shadow appearance-none border ${errors.name ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          E-posta
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`shadow appearance-none border ${errors.email ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Şifre
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={`shadow appearance-none border ${errors.password ? 'border-red-500' : ''} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        disabled={!values.name || !values.email || !values.password}
      >
        Gönder
      </button>
    </form>
  );
};

export default Form;
```

### 5. App.js Dosyasını Güncelleme

Son olarak, `src/App.js` dosyasını güncelleyerek Form bileşenini ekleyin:

```javascript
import React from 'react';
import Form from './components/Form';

const App = () => {
  return (
    <div className="App">
      <Form />
    </div>
  );
};

export default App;
```

