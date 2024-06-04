# Özel Hook'lar Ne Zaman ve Neden Oluşturulmalıdır?

## Özel Hook'lar Ne Zaman Oluşturulmalı?

### 1. Kod Tekrarı

Birden fazla bileşende benzer durumsal mantık veya yan etkiler fark ettiğinizde, bu mantığı çıkarmak ve yeniden kullanmak için özel bir hook oluşturmak iyi bir fikirdir.

### 2. Sorumlulukların Ayrılması

Bir bileşen çok karmaşık hale geldiğinde ve birden fazla sorumluluk üstlendiğinde, özel hook'lar oluşturarak farklı sorumlulukları ayırabilir ve bileşeni daha yönetilebilir hale getirebilirsiniz.

### 3. Yeniden Kullanılabilir Mantık

Uygulamanızda veya farklı projeler arasında kolayca paylaşılabilecek yeniden kullanılabilir bir mantık oluşturmak istediğinizde özel hook'lar kullanabilirsiniz.

### 4. Harici API Çağrılarının Soyutlanması

Harici hizmetlere API çağrıları yaparken, özel bir hook ağ isteklerini, yüklenme durumlarını ve hata işlemlerini yönetebilir, uygulama detaylarını soyutlayarak veri alma için tutarlı bir arayüz sağlayabilir.

### 5. Tarayıcı API'lerine Erişim

Geolocation, local storage veya clipboard API gibi tarayıcıya özgü API'leri kapsüllemek için özel hook'lar kullanabilir, bu işlevselliklere daha rahat ve tutarlı bir şekilde erişim sağlayabilirsiniz.

## Özel Hook'lar Neden Oluşturulmalı?

### 1. Kod Yeniden Kullanılabilirliği

Özel hook'lar, durumsal mantığı birden fazla bileşen arasında yeniden kullanmanızı sağlar, kod tekrarını azaltır ve kod tabanını daha sürdürülebilir hale getirir.

### 2. Modülerlik

İlgili mantığı özel hook'lara kapsülleyerek daha modüler bir kod tabanı oluşturabilirsiniz, bu da anlamayı, test etmeyi ve sürdürmeyi kolaylaştırır.

### 3. Daha Kolay Test Edilebilirlik

Özel hook'lar, bileşeni kullanan bileşenden bağımsız olarak hook'un mantığını test etmenizi kolaylaştırır.

### 4. Gelişmiş Okunabilirlik

Özel hook'lar, karmaşık mantığı ayrı, iyi adlandırılmış fonksiyonlara ayırarak bileşenlerinizin okunabilirliğini artırabilir.

### 5. Daha İyi İşbirliği

Özel hook'lar, geliştiricilerin ortak işlevselliği kolayca paylaşmasını ve yeniden kullanmasını sağlayarak takım içi işbirliğini teşvik edebilir.

## Özel Hook'ların Oluşturulması ve Kullanımı

Aşağıda, özel hook'ların nasıl oluşturulacağı ve kullanılacağına dair örnekler sunulmaktadır. Her bir örnek, belirli bir kullanım senaryosuna odaklanmakta ve ilgili kod parçacıkları ile desteklenmektedir.

## Kod Tekrarının Azaltılması

```javascript
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

## Sorumlulukların Ayrılması

```javascript
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// Kullanım
function CounterComponent() {
  const { count, increment, decrement } = useCounter(10);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}
```

## Yeniden Kullanılabilir Mantığın Oluşturulması

```javascript
import { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
}

// Kullanım
function ToggleComponent() {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>{isToggled ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

## Harici API Çağrılarının Soyutlanması

```javascript
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Kullanım
function ApiComponent() {
  const { data, loading, error } = useApi('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## Tarayıcı API'lerine Erişim

```javascript
import { useState, useEffect } from 'react';

function useGeolocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
}

// Kullanım
function GeolocationComponent() {
  const { location, error } = useGeolocation();

  if (error) return <p>Error: {error}</p>;
  if (!location.latitude) return <p>Loading...</p>;

  return (
    <div>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
}
```

Bu eğitimde, React uygulamalarında özel hook'ların ne zaman ve neden kullanılacağı ve bu hook'ların nasıl oluşturulacağı detaylı bir şekilde ele alınmıştır. Bu bilgiler, yazılım geliştiricilerinin daha modüler, test edilebilir ve sürdürülebilir kodlar yazmalarına yardımcı olacaktır.