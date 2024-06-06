# Form Doğrulayıcı Oluşturma

## Amaç

React'te, formun görsel görünümünü artırmak için Tailwind CSS kullanarak form doğrulama için özel bir hook oluşturun. Bu hook, form girdilerini doğrulamaya, veri bütünlüğünü sağlamaya ve web sitesi formları için genel kullanıcı deneyimini iyileştirmeye yardımcı olacaktır.

## Gereksinimler

1. Özel Hook Uygulaması:
   - React bileşeninde kullanılmak üzere `useFormValidation` adlı özel bir hook geliştirin.
   - Bu hook, belirtilen kurallara göre form girdilerini doğrulayabilmelidir.

2. Tailwind CSS ile Stil Verme:
   - Form girdilerini, hata mesajlarını ve genel form düzenini stilize etmek için Tailwind CSS sınıflarını kullanın.
   - Dinamik hata mesajları ve ilgili girdilerin, renk veya kenarlık değişiklikleri kullanarak görsel olarak ayırt edilmesini sağlayın.

3. Hook Parametreleri:
   - Hook iki parametre almalıdır:
     1. Form değerleri için bir başlangıç durumu.
     2. Her form alanı için doğrulama kurallarını tanımlayan bir nesne.

4. Hook Dönüş Değerleri:
   - Hook aşağıdaki değerleri döndürmelidir:
     - Mevcut form değerleri.
     - Geçersiz girdiler için hata mesajları.
     - Form değerlerini güncellemek için bir fonksiyon.
     - Form gönderimini yönetmek için bir fonksiyon.

5. Doğrulama Kuralları:
   - Hook, aşağıdakiler de dahil olmak üzere yaygın doğrulama senaryolarını desteklemelidir:
     - Zorunlu alanlar.
     - Minimum ve maksimum uzunluk kısıtlamaları.
     - Sayısal değer kontrolleri.
     - E-posta formatı doğrulaması.

6. Duyarlı Tasarım:
   - Form düzeninin farklı ekran boyutlarında duyarlı ve görsel olarak çekici olmasını sağlamak için Tailwind CSS yardımcı sınıflarını uygulayın.

7. Dinamik İçerik Yönetimi:
   - Kullanıcı gerekli form verilerini doldurmadığında, düğme içeriğini değiştirmek için işlevsellik sağlayın.

8. Örnek React Bileşeni:
   - `useFormValidation` hook'unun kullanımını gösteren örnek bir React bileşeni oluşturun.
   - Forma birden fazla giriş alanı ekleyin ve bu alanları hook ile doğrulayın.
