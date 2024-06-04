# Effect Cleanup 

React uygulamalarında "effect cleanup" kullanımı, bellek sızıntılarını önlemek ve bir bileşen DOM'dan kaldırıldıktan sonra uygulamanızın doğru şekilde çalışmaya devam etmesini sağlamak için önemlidir. Ayrıca, bir bileşen güncellendiğinde, eski etkiyi temizleyip yeni etkiyi çalıştırmadan önce gereklidir. Bu eğitimde, effect cleanup kullanmanın önemini, kullanılmamasının sonuçlarını ve nasıl uygulanacağını ayrıntılı bir şekilde ele alacağız. 

## Neden Effect Cleanup Kullanmalıyız?

1. **Bellek Sızıntılarını Önlemek:**
   Effect cleanup, bir etkinin oluşturduğu kaynakları, olay dinleyicilerini, abonelikleri veya zamanlayıcıları temizlememizi sağlar. Bu, özellikle uzun ömürlü bileşenler veya sık sık monte edilip kaldırılan bileşenlerle çalışırken çok önemlidir.

2. **Efektler Arasında Çakışmaları Önlemek:**
   Bir bileşen güncellendiğinde ve yeni bir etki tetiklendiğinde, önceki etkiden gelen temizleme fonksiyonu, yeni etkiyi çalıştırmadan önce önceki durumu veya abonelikleri temizleyebilir.

## Effect Cleanup Kullanılmamasının Sonuçları

Effect cleanup kullanılmadığında, aşağıdaki sorunlarla karşılaşabilirsiniz:

- **Bellek Sızıntıları:**
  Timer bileşeni kaldırıldığında veya güncellendiğinde, `setInterval` zamanlayıcısı çalışmaya devam eder. Bu, gereksiz kaynak tüketimine ve potansiyel bellek sızıntılarına yol açar.

- **Yanlış Davranışlar:**
  Timer bileşeninden ayrıldığınızda ve tekrar döndüğünüzde, her montajda yeni bir `setInterval` zamanlayıcısı oluşturulur. Bu, aynı anda çalışan birden fazla zamanlayıcıya ve dolayısıyla yanlış sayımlara ve beklenmeyen davranışlara neden olur.

## Effect Cleanup Nasıl Uygulanır?

### Adım Adım Uygulama

1. **Proje Dizini:**
   Projenizin `src` dizini içinde, `components` adlı yeni bir klasör oluşturun (zaten mevcut değilse).

2. **Bileşen Oluşturma:**
   `components` klasörü içinde, `Timer.jsx` adlı yeni bir dosya oluşturun.

3. **Bileşeni Kullanma:**
   Timer bileşenini kullanmak için, `App.jsx` dosyanıza veya ihtiyacınız olan başka bir bileşene import edip render edin.

### Kod Parçacıkları

**Timer.jsx:**

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup function

    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
};

export default Timer;
```

Bu kod parçacığında, `useEffect` Hook'unun içine bir `setInterval` zamanlayıcısı yerleştirilmiştir. Ancak, zamanlayıcıyı temizlemek için bir cleanup fonksiyonu (`clearInterval(timer)`) eklenmiştir. Bu, bileşen kaldırıldığında veya güncellendiğinde zamanlayıcının düzgün şekilde temizlenmesini sağlar.

## Neden Effect Cleanup Kullanmalıyız? (Devam)

### Bellek Sızıntılarını Önlemek
Effect cleanup, etki tarafından oluşturulan kaynakların, olay dinleyicilerinin, aboneliklerin veya zamanlayıcıların düzgün şekilde temizlenmesini sağlar. Bu, özellikle uzun ömürlü bileşenler veya sık sık monte edilip kaldırılan bileşenlerle çalışırken önemlidir.

### Efektler Arasında Çakışmaları Önlemek
Bir bileşen güncellendiğinde ve yeni bir etki tetiklendiğinde, önceki etkiden gelen cleanup fonksiyonu, yeni etkiyi çalıştırmadan önce önceki durumu veya abonelikleri temizleyebilir.

### Kaynak Kullanımını Optimize Etmek
Kaynakları düzgün şekilde temizleyerek, zamanlayıcılar, olay dinleyiciler veya abonelikler gibi kaynakların artık ihtiyaç duyulmadığında serbest bırakılmasını sağlarız. Bu, kaynak kullanımını optimize eder ve uygulamanızın performansını artırır.

Bu eğitimde, React uygulamalarında effect cleanup kullanımının önemini ve nasıl uygulanacağını ayrıntılı bir şekilde ele aldık. Bu prensipleri uygulayarak, bellek sızıntılarını önleyebilir, beklenmeyen davranışları minimize edebilir ve uygulamanızın performansını optimize edebilirsiniz.