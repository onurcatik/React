# Error Boundary

## Amaç

Bu ödevin amacı, hata sınırlarının kullanımını etkili bir şekilde gösteren bir React uygulaması geliştirmektir. Hata sınırlarını belirli bileşenler içinde yönetmek ve bu hatalar meydana geldiğinde bir yedek kullanıcı arayüzü sağlamak için kullanacaksınız. Bu egzersiz, React uygulamalarında hata yönetimi konusundaki anlayışınızı geliştirecek, böylece kullanıcı deneyimini iyileştirecek ve uygulama çökmesini önleyecektir. Uygulamayı stilize etmek için **Tailwind CSS** kullanmanız gerekmektedir.

## Gereksinimler

1. **React Uygulamasını Kurun**
   - **Create React App** kullanarak yeni bir React uygulaması oluşturun veya mevcut bir React projesini kullanın.

2. **`ErrorBoundary` Bileşeni Oluşturun**
   - Hata sınırı olarak hizmet verecek **`ErrorBoundary`** adlı bir bileşen geliştirin.
   - Bu bileşen, hata oluşturabilecek diğer bileşenleri sarmalamalıdır.

3. **`ErrorBoundary`'de Hata Yönetimi Uygulayın**
   - **`ErrorBoundary`** bileşeninde hata yakalama mantığını **`componentDidCatch`** yaşam döngüsü yöntemiyle entegre edin.
   - Bileşenin hataları etkili bir şekilde yakalayabildiğinden ve yönetebildiğinden emin olun.

4. **Yedek Kullanıcı Arayüzü Gösterin**
   - Bir hata meydana geldiğinde, **`ErrorBoundary`** bileşeni yedek bir kullanıcı arayüzü göstermelidir.
   - Yedek kullanıcı arayüzü, kullanıcıya hatayı kullanıcı dostu bir şekilde bildirmelidir.

5. **`ComponentWithError` Bileşeni Oluşturun**
   - Oluşturulduğunda kasıtlı olarak hata veren **`ComponentWithError`** adlı bir bileşen geliştirin.

6. **`ComponentWithError` Bileşenini `ErrorBoundary` ile Sarın**
   - **`ErrorBoundary`** bileşenini **`ComponentWithError`** bileşenini sarmak için kullanın.
   - Bu, hata sınırının işlevselliğini test etmenizi sağlar.

7. **Hataları Zarif Bir Şekilde Yönetin**
   - **`ComponentWithError`** içinde bir hata meydana geldiğinde, **`ErrorBoundary`** yedek kullanıcı arayüzünü gösterdiğinden emin olun.
   - Bu, tüm uygulamanın çökmesini önlemelidir.

8. **Yedek Kullanıcı Arayüzünü Stilize Edin**
   - Yedek kullanıcı arayüzünü stilize etmek için **Tailwind CSS** kullanın ve onu görsel olarak çekici ve kullanıcı dostu hale getirin.

9. **Uygulamayı Test Edin**
   - **`ErrorBoundary`** tarafından sarılan bileşenler içinde kasıtlı olarak hatalar oluşturun.
   - Her durumda yedek kullanıcı arayüzünün doğru şekilde görüntülendiğini doğrulayın.

