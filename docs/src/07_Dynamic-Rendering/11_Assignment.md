# React Form Wizard

## Giriş

Bu eğitimde, React kullanarak bir form sihirbazı oluşturma sürecini ele alacağız. Form sihirbazı, kullanıcıların adım adım bilgi girmesine olanak tanır ve her adımda farklı türde giriş alanları içerir. Formun tamamlanmasının ardından, kullanıcıyı doldurulan verilerin gösterildiği bir profil sayfasına yönlendireceğiz. Bu proje, Tailwind CSS kullanılarak görsel olarak da çekici hale getirilecektir.

## Gereksinimler

1. **React fonksiyonel bileşenlerini kullanarak çok adımlı bir form sihirbazı oluşturun.**
2. **Her form adımı/sekmesi için ayrı bileşenler oluşturun.**
3. **Aşağıdaki giriş alanlarını ekleyin:**
   - Metin kutuları (ad, e-posta ve diğer ilgili bilgiler için)
   - Şifre alanı (şifre oluşturmak için)
   - Seçim kutusu (ülke veya bölge seçimi için)
   - Açılır menü (ilgi alanları veya kategoriler için)
   - Metin alanı (ek yorumlar veya açıklamalar için)
   - Dosya yükleme (profil resmi yüklemek için)
4. **Form girişlerini doğrulayın ve gerekli alanların doldurulmasını sağlayın.**
5. **Form ve profil sayfasını Tailwind CSS kullanarak stilize edin.**
6. **Form gönderimini işleyin ve girilen verileri saklayın.**
7. **Form gönderildikten sonra kullanıcıyı doldurulan verilerin gösterildiği bir profil sayfasına yönlendirin.**

## Kurulum ve Projeye Başlama

Proje oluşturma ve Tailwind CSS'in eklenmesi için aşağıdaki adımları takip edin.

### 1. React Projesinin Oluşturulması

```bash
npx create-react-app form-wizard
cd form-wizard
```

### 2. Tailwind CSS'in Eklenmesi

Tailwind CSS'i projeye eklemek için gerekli paketleri yükleyin.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Tailwind CSS'i yapılandırın (`tailwind.config.js`):

```javascript
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
};
```

`src/index.css` dosyasını şu şekilde güncelleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Çok Adımlı Form Sihirbazı Bileşenlerinin Oluşturulması

### 1. Form Sihirbazı Ana Bileşeni

`src/components/FormWizard.js` dosyasını oluşturun ve aşağıdaki kodu ekleyin:

```javascript
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const FormWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    interests: '',
    comments: '',
    profileImage: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  switch (step) {
    case 1:
      return <StepOne nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <StepThree prevStep={prevStep} handleChange={handleChange} handleFileChange={handleFileChange} values={formData} />;
    default:
      return <div>Form is submitted</div>;
  }
};

export default FormWizard;
```

### 2. Form Adımı Bileşenleri

**Adım 1: Kişisel Bilgiler**

`src/components/StepOne.js` dosyasını oluşturun:

```javascript
import React from 'react';

const StepOne = ({ nextStep, handleChange, values }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Kişisel Bilgiler</h2>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange('name')}
        placeholder="Adınız"
        className="mb-4 p-2 border border-gray-300"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange('email')}
        placeholder="E-posta"
        className="mb-4 p-2 border border-gray-300"
      />
      <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white">
        İleri
      </button>
    </div>
  );
};

export default StepOne;
```

**Adım 2: Şifre ve Seçimler**

`src/components/StepTwo.js` dosyasını oluşturun:

```javascript
import React from 'react';

const StepTwo = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Şifre ve Seçimler</h2>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange('password')}
        placeholder="Şifre"
        className="mb-4 p-2 border border-gray-300"
      />
      <select
        name="country"
        value={values.country}
        onChange={handleChange('country')}
        className="mb-4 p-2 border border-gray-300"
      >
        <option value="">Ülke Seçin</option>
        <option value="tr">Türkiye</option>
        <option value="us">Amerika</option>
      </select>
      <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white mr-2">
        Geri
      </button>
      <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white">
        İleri
      </button>
    </div>
  );
};

export default StepTwo;
```

**Adım 3: Ek Bilgiler ve Dosya Yükleme**

`src/components/StepThree.js` dosyasını oluşturun:

```javascript
import React from 'react';

const StepThree = ({ prevStep, handleChange, handleFileChange, values }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Ek Bilgiler ve Dosya Yükleme</h2>
      <textarea
        name="comments"
        value={values.comments}
        onChange={handleChange('comments')}
        placeholder="Yorumlar"
        className="mb-4 p-2 border border-gray-300"
      />
      <input
        type="file"
        name="profileImage"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300"
      />
      <button onClick={prevStep} className="px-4 py-2 bg-gray-500 text-white mr-2">
        Geri
      </button>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
        Gönder
      </button>
    </div>
  );
};

export default StepThree;
```

## Form Verilerinin Gösterildiği Profil Sayfası

Kullanıcının doldurduğu bilgileri göstermek için `ProfilePage` bileşenini oluşturun:

`src/components/ProfilePage.js` dosyasını oluşturun:

```javascript
import React from 'react';

const ProfilePage = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Profil Sayfası</h2>
      <p><strong>Ad:</strong> {data.name}</p>
      <p><strong>E-posta:</strong> {data.email}</p>
      <p><strong>Ülke:</strong> {data.country}</p>
      <p><strong>Yorumlar:</strong> {data.comments}</p>
      {data.profileImage && (
        <div>
          <strong>Profil Resmi:</strong>
          <img src={URL.createObjectURL(data.profileImage)} alt="Profile" className="mt-4" />
        </div>
      )}
    </

div>
  );
};

export default ProfilePage;
```

