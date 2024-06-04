# Durum Kullanarak Form Girdilerini Yönetmek

Bu eğitimde, React bileşenleri içinde form girdilerini durum (state) kullanarak nasıl yöneteceğinizi ayrıntılı bir şekilde ele alacağız. Form elemanlarının değerlerini React bileşenleri tarafından yönetmek, form işlemlerinin daha kontrollü ve güvenilir olmasını sağlar. Bu yöntem, "Controlled Components" olarak bilinir ve HTML formlarının varsayılan davranışlarına güvenmek yerine, form elemanlarının değerlerini doğrudan bileşen durumunda yönetir.

## Controlled Components Oluşturma Adımları

**1. Bileşenler Klasörü Oluşturma:**
   `src` dizininde yeni bir `components` adlı klasör oluşturun. Bu klasör, bileşen dosyalarınızı düzenlemek için kullanılacaktır.

**2. Bileşen Dosyası Oluşturma:**
   `components` klasörü içinde `ControlledForm.jsx` adında yeni bir dosya oluşturun. Bu dosya, kontrol edilen bileşenimizi içerecektir.

**3. Gerekli Paketleri İçe Aktarma:**
   `ControlledForm.jsx` dosyasının içine `React` ve `useState` kancasını (hook) içe aktarın.
   ```javascript
   import React, { useState } from 'react';
   ```

**4. Durumu Başlatma:**
   Fonksiyonel bir bileşen oluşturun ve form elemanlarınız için durumu başlatmak üzere `useState` kancasını kullanın.
   ```javascript
   const ControlledForm = () => {
       const [inputValue, setInputValue] = useState('');
   ```

**5. Form Elemanlarını Render Etme:**
   Fonksiyonel bileşenin içinde, form elemanlarınızın JSX'ini döndürün.
   ```javascript
       return (
           <form>
               <label>
                   Input:
                   <input 
                       type="text" 
                       value={inputValue} 
                       onChange={(e) => setInputValue(e.target.value)} 
                   />
               </label>
           </form>
       );
   ```

**6. Değer Özelliğini Duruma Bağlama:**
   Form elemanının `value` özelliğini, karşılık gelen durum değişkenine ayarlayın, böylece React, giriş değerini tam olarak kontrol eder.
   ```javascript
                   <input 
                       type="text" 
                       value={inputValue} 
                       onChange={(e) => setInputValue(e.target.value)} 
                   />
   ```

**7. Olay İşleyicilerini Ayarlama:**
   `onChange` olayı için bir olay işleyici fonksiyonu yazın, bu fonksiyon kullanıcı form elemanları ile etkileşime geçtiğinde çağrılacaktır.
   ```javascript
                       onChange={(e) => setInputValue(e.target.value)} 
   ```

**8. Kullanıcı Etkileşiminde Durumu Güncelleme:**
   Olay işleyicinin içinde, yeni giriş değeri ile ilgili durum değişkenini güncelleyin.
   ```javascript
                       onChange={(e) => setInputValue(e.target.value)} 
   ```

**9. Form Gönderimini Yönetme:**
   Form gönderim olayını yönetmek için bir `handleSubmit` fonksiyonu oluşturun.
   ```javascript
       const handleSubmit = (e) => {
           e.preventDefault();
           // form verilerini işleyin
       };
   ```

**10. Gönderimden Önce Veriyi Doğrulama veya Manipüle Etme:**
   `handleSubmit` fonksiyonunda, form verilerini göndermeden önce doğrulayabilir veya manipüle edebilirsiniz.
   ```javascript
       const handleSubmit = (e) => {
           e.preventDefault();
           // Veriyi doğrulayın veya manipüle edin
           console.log(inputValue);
       };
   ```

**11. Yan Etkileri Gerçekleştirme ve Bileşeni Dışa Aktarma:**
   Veriyi doğruladıktan veya manipüle ettikten sonra, API çağrıları gibi yan etkileri gerçekleştirebilirsiniz. Bileşeni uygulamanızın diğer bölümlerinde kullanmak üzere dışa aktarın.
   ```javascript
       const handleSubmit = (e) => {
           e.preventDefault();
           // Veriyi doğrulayın veya manipüle edin
           console.log(inputValue);
           // API çağrıları yapın
       };

       export default ControlledForm;
   ```

# Tam Kod Örneği
Aşağıda, yukarıda açıklanan adımları içeren tam kod örneğini bulabilirsiniz:
```javascript
import React, { useState } from 'react';

const ControlledForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Veriyi doğrulayın veya manipüle edin
        console.log(inputValue);
        // API çağrıları yapın
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Input:
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleChange} 
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;
```

