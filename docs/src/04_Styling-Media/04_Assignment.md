# Yazılım Geliştirici Eğitim Kılavuzu

## Giriş

Bu eğitim, React bileşenleri kullanarak görsel olarak çekici ve duyarlı bir Hizmet Sayfası oluşturmayı amaçlamaktadır. Eğitim boyunca, Tailwind CSS kullanarak stil verme, props kullanımı ve bileşenlerin nasıl oluşturulacağı hakkında detaylı bilgi verilecektir.

## Gereksinimler

1. **Kurulum:**
    - Yeni bir React uygulaması başlatın.
    - Tailwind CSS'i React projenize kurun.

2. **Bileşenler:**
    - `components` adlı bir klasör oluşturun.
    - Bu klasörün içinde `ServiceCard.js` adlı yeni bir bileşen oluşturun.
    - Bu bileşen, görüntü, metin, paragraf ve düğme etiketi için props alacaktır.

3. **Hizmet Sayfası:**
    - `ServicePage.js` adlı yeni bir bileşen oluşturun.
    - Bu sayfanın başlığı "Services" olmalıdır.
    - `ServiceCard` bileşenini üç kez entegre edin, her kart için farklı props geçirin.

4. **Tailwind CSS ile Stil Verme:**
    - Duyarlı tasarım ekleyin:
        - Masaüstü için: Üç hizmet kartını yan yana görüntüleyin.
        - Mobil için: Kartlar üst üste yığılmalıdır.
    - Her `ServiceCard` şu öğeleri içermelidir:
        - Bir görüntü
        - Bir metin başlığı
        - Bir paragraf
        - Bir düğme
    - Tüm kartlar bir hover efekti içermelidir.
    - Görselliği artırmak için ikonlar kullanın.

## Detaylı Adımlar

### 1. React Uygulamasını Başlatma

```bash
npx create-react-app service-page
cd service-page
```

### 2. Tailwind CSS Kurulumu

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

`tailwind.config.js` dosyasını aşağıdaki gibi yapılandırın:

```javascript
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

`src/index.css` dosyasını aşağıdaki gibi güncelleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Bileşenlerin Oluşturulması

#### ServiceCard.js

```javascript
import React from 'react';

const ServiceCard = ({ image, title, description, buttonLabel }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
```

#### ServicePage.js

```javascript
import React from 'react';
import ServiceCard from './components/ServiceCard';

const ServicePage = () => {
  const services = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Service 1',
      description: 'This is the description for service 1.',
      buttonLabel: 'Learn More'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Service 2',
      description: 'This is the description for service 2.',
      buttonLabel: 'Learn More'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Service 3',
      description: 'This is the description for service 3.',
      buttonLabel: 'Learn More'
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-8">Services</h1>
      <div className="flex flex-wrap justify-around">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            image={service.image} 
            title={service.title} 
            description={service.description} 
            buttonLabel={service.buttonLabel} 
          />
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
```

### 4. Stil Verme

Tailwind CSS kullanarak bileşenlerin stilini aşağıdaki gibi verin:

- **Masaüstü Görünümü:**

  ```css
  .container {
    @apply flex flex-wrap justify-around;
  }
  ```

- **Mobil Görünümü:**

  ```css
  .container {
    @apply flex flex-col items-center;
  }
  ```

### Özet

Bu eğitimde, React ve Tailwind CSS kullanarak duyarlı bir Hizmet Sayfası oluşturmayı öğrendik. React bileşenlerini kullanarak dinamik ve yeniden kullanılabilir kod parçacıkları oluşturduk ve Tailwind CSS ile stil verdik. Bu yapı, modern web geliştirme standartlarına uygun olarak tasarlanmıştır ve geliştiricilere etkili ve verimli bir şekilde bileşen tabanlı kullanıcı arayüzleri oluşturma becerisi kazandırır.
