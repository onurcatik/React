# Film Rezervasyon Sistemi

## Amaç

React'ta sınıf bileşenlerinin (class components) kullanımı ve prop'ların ve state'in derinlemesine anlaşılmasını sağlayarak bir film rezervasyon sistemi oluşturarak anlayışı derinleştirmek. Kullanıcı arayüzünü geliştirmek için Tailwind CSS kullanın.

## Gereksinimler

1. **Kullanıcı Arayüzü Tasarımı:**
   - CSS ve Tailwind CSS sınıflarını kullanarak görsel olarak çekici bir sinema salonu koltuk düzeni tasarlayın.

2. **Koltuk Bileşeni:**
   - "Koltuk" bileşeni içinde koltuk bilgilerini görüntüleyin.
   - Koltukların uygunluğuna bağlı olarak farklı stiller uygulayın, Tailwind CSS sınıfları kullanarak.

3. **MovieBookingSystem Bileşeni:**
   - "MovieBookingSystem" adında bir ana bileşen oluşturun.
   - Bileşen içinde bir koltuk nesneleri dizisi tanımlayın.

4. **Koltuk Nesnesi Özellikleri:**
   - Her koltuk nesnesi şunlara sahip olmalıdır:
     - `id`: Koltuğun benzersiz tanımlayıcısı.
     - `row`: Sıra numarası veya harfi.
     - `column`: Sütun numarası veya harfi.
     - `isBooked`: Koltuğun rezerve edilip edilmediğini belirten bir özellik.
     - `shouldExclude`: Seçimden hariç tutulması gerekip gerekmediğini belirten bir özellik.

5. **Koltukların Render Edilmesi:**
   - "MovieBookingSystem" bileşeni içinde "Koltuk" bileşeninin birden fazla örneğini, her koltuk nesnesini props olarak ileterek oluşturun.

6. **Koltuk Seçimi:**
   - Bir koltuğa tıklandığında doğru şekilde koltuk bilgilerini görüntüleyin ve rezerve durumunu güncelleyin.

7. **Özet Bölümü:**
   - Seçilen koltukları ve detaylarını (örneğin, sıra, sütun) gösteren bir özet bölümü ekleyin.

8. **Rezervasyon Süreci:**
   - Rezervasyon için özet bölümünde bir düğme uygulayın.
   - Düğmeye tıklanınca seçilen koltukları depolamak için bileşen durumunu güncelleyin.

9. **Rezervasyon İşlemleri:**
   - Rezervasyon sürecini tamamlamak için gerekli işlemleri yapın (örneğin, API çağrıları, hesaplamalar).

10. **Stil:**
    - Film rezervasyon sisteminin görünümünü iyileştirmek için Tailwind CSS sınıfları ve özel stiller uygulayın.

11. **Test:**
    - Doğru props, state, koltuk seçimi ve rezervasyon işlevselliğinin olduğundan emin olmak için uygulama işlevselliğini test edin.
