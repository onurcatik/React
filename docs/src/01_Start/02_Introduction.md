# Temel Bilgiler ve Gelişmiş Teknikler

## Giriş
React, Facebook tarafından geliştirilen ve açık kaynak kodlu bir JavaScript kütüphanesidir. İlk olarak 2013 yılında piyasaya sürülen React, kullanıcı arayüzleri (UI) oluşturmak için kullanılır. React, verimli, esnek ve bileşen tabanlı yaklaşımı sayesinde yazılım geliştiriciler arasında geniş çapta popülerlik kazanmıştır.

## React Kullanmanın Avantajları

1. **Bileşen Tabanlı Mimari:**
   React, yeniden kullanılabilir bileşenler oluşturmayı teşvik eder. Bu bileşenler bir araya getirilerek karmaşık kullanıcı arayüzleri inşa edilebilir. Bu modüler yaklaşım, daha temiz ve bakımı kolay kod yazılmasına olanak tanır ve geliştiriciler arasında işbirliğini kolaylaştırır.

2. **Sanal DOM (Virtual DOM):**
   React, rendering işlemlerini optimize etmek ve uygulama performansını artırmak için sanal DOM kullanır. Sanal DOM, gerçek DOM ile yeni sanal DOM arasındaki farkı hesaplar (bu işleme "diffing" denir) ve sadece değişen parçaları güncelleyerek sayfanın tamamını yeniden render etmeye gerek kalmadan daha hızlı ve verimli güncellemeler sağlar.

3. **Güçlü Topluluk ve Ekosistem:**
   React'in geniş ve aktif bir geliştirici topluluğu vardır. Bu topluluk, üçüncü taraf kütüphaneler ve araçlarla zengin bir ekosistem oluşturmuştur. Bu, yaygın problemlere mevcut çözümler bulmayı kolaylaştırır, böylece geliştirme süresi ve çabası azalır.

4. **Tek Yönlü Veri Bağlama (One-way Data Binding):**
   React, tek yönlü veri akışını takip eder, bu da uygulama durumunu izlemeyi ve yönetmeyi kolaylaştırır. Bu, kodun istikrarını artırır ve hata ayıklamayı daha basit hale getirir.

5. **Geliştirilmiş Kod Yeniden Kullanılabilirliği:**
   React bileşenleri, bir uygulamanın farklı bölümlerinde veya birden fazla projede yeniden kullanılabilir. Bu, kod tekrarını azaltır ve UI tasarımında tutarlılığı teşvik eder.

6. **Sunucu Tarafında Render Desteği (SSR):**
   React, sunucu tarafında render için kullanılabilir, bu da özellikle ilk sayfa yüklemelerinde performansı artırabilir ve web uygulamalarını SEO dostu hale getirebilir.

7. **Çapraz Platform Geliştirme:**
   React Native adlı, React üzerine inşa edilmiş bir çerçeve yardımıyla, geliştiriciler Android ve iOS için aynı React kod tabanını kullanarak yerel mobil uygulamalar oluşturabilirler. Bu, üretkenliği artırabilir ve geliştirme maliyetlerini azaltabilir.

## React ile Uygulama Geliştirme

React ile uygulama geliştirmeye başlamadan önce, temel konseptleri ve yapı taşlarını anlamak önemlidir. Aşağıda, React uygulamalarında yaygın olarak kullanılan bazı temel kavramlar ve teknikler yer almaktadır.

### 1. Bileşenler (Components)
Bileşenler, React uygulamalarının yapı taşlarıdır. Her bileşen, kendi mantığı ve arayüzü ile bağımsız bir modüldür. İşte basit bir React bileşeninin nasıl oluşturulacağına dair bir örnek:

```javascript
import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Merhaba, {this.props.name}</h1>;
  }
}

export default Welcome;
```

Bu örnekte, `Welcome` adlı bir bileşen tanımlanmıştır. Bu bileşen, `props` olarak adlandırılan bir özellik alır ve bu özelliği kullanarak bir başlık (`<h1>`) render eder.

### 2. JSX
JSX, JavaScript XML anlamına gelir ve JavaScript kodu içerisinde HTML benzeri sözdizimi kullanmayı sağlar. JSX, React bileşenlerinin daha okunabilir ve yazılabilir olmasını sağlar. Örneğin:

```javascript
const element = <h1>Merhaba, Dünya!</h1>;
```

JSX, tarayıcı tarafından işlenmeden önce Babel gibi araçlarla normal JavaScript'e dönüştürülür.

### 3. Props ve State
**Props** (özellikler), bileşenlere dışarıdan veri geçmek için kullanılır. **State** (durum) ise bileşenlerin kendi iç durumlarını yönetmelerine olanak tanır. İşte props ve state kullanarak bir sayaç bileşeni örneği:

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Şu anki sayım: {count}</p>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}

export default Counter;
```

Bu örnekte, `useState` kancası (hook) kullanılarak bileşenin durumu yönetilmektedir.

## React ile Daha İleri Teknikler

### 1. Lifecycle Metotları
React bileşenleri, yaşam döngüsü (lifecycle) metotları kullanarak belirli zamanlarda işlem yapabilirler. Sınıf bileşenleri için yaygın kullanılan bazı yaşam döngüsü metotları şunlardır:

- `componentDidMount()`: Bileşen DOM'a eklendikten sonra çağrılır.
- `componentDidUpdate(prevProps, prevState)`: Bileşen güncellendikten sonra çağrılır.
- `componentWillUnmount()`: Bileşen DOM'dan kaldırılmadan önce çağrılır.

### 2. Kancalar (Hooks)
React 16.8 ile tanıtılan kancalar, fonksiyon bileşenlerinde durum yönetimi ve diğer yan etkileri işlemek için kullanılır. Yaygın kullanılan bazı kancalar şunlardır:

- `useState()`: Durum yönetimi sağlar.
- `useEffect()`: Yan etkileri yönetmek için kullanılır.
- `useContext()`: Context API'si ile entegrasyon sağlar.

Örneğin, bir efekt kancasının kullanımı:

```javascript
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{seconds} saniye geçti.</div>;
}

export default Timer;
```

Bu örnekte, `useEffect` kancası bir zamanlayıcı (timer) oluşturmak ve bileşen DOM'dan kaldırıldığında temizlemek için kullanılmıştır.

