# Kitap Mağazası Kurun

## Amaç

Bu ödevin amacı, React Router ve Link bileşenini gerçek dünya uygulamalarında kullanma konusundaki anlayışınızı pekiştirmektir. Bu temel React öğelerini kullanarak dinamik, tek sayfalık bir uygulama (SPA) oluşturacaksınız. Kullanıcıların arasında gezinebileceği birkaç sayfadan oluşan temel bir kitap mağazası web sitesi oluşturacaksınız. Stil vermek için **Tailwind CSS** kullanın.

## Gereksinimler

### 1. Tasarım ve Düzen

- Kitap mağazası web siteniz için modern ve kullanıcı dostu bir arayüz oluşturun.
- Web sitesi aşağıdaki sayfaları içermelidir:
  - Ana sayfa
  - Kitap listeleme sayfası
  - Her bir kitabın detay sayfası

### 2. React Router

- SPA'nızın farklı 'sayfaları' arasında gezinmeyi yönetmek için React Router'ı uygulayın.
- Rotalar en azından şunları içermelidir:
  - Ana sayfa için `/`
  - Kitap listeleme sayfası için `/books`
  - Yanlış URL'ler için bir "Sayfa Bulunamadı" sayfası

### 3. Link Bileşenleri

- Gezinme bağlantıları oluşturmak için Link bileşenini kullanın.
- Bu bağlantılar şunlara yönlendirmelidir:
  - Ana sayfa
  - Kitap listeleme sayfası
  - Her bir kitabın detay sayfası
- Daha iyi bir kullanıcı deneyimi için aktif sınıflara sahip bir Navbar oluşturmayı düşünebilirsiniz.

### 4. Kitap Listeleme Sayfası

- Bu sayfa, kitap mağazanızda mevcut olan tüm kitapları listelemelidir.
- Her kitabın adı, tıklandığında kullanıcıyı ilgili kitabın detay sayfasına yönlendiren bir Link bileşeni olmalıdır.

### 5. Veri

- Kitap mağazanızdaki kitapları temsil etmek için statik veriler kullanın.
- Her kitap en azından şunlara sahip olmalıdır:
  - Bir 'id'
  - Bir 'görsel'
  - Bir 'başlık'
  - Bir 'açıklama'

### 6. Hata Yönetimi

- Yanlış URL'leri işlemek için 'react-router-dom' bileşenlerinden `<Route>` kullanarak bir '404 Bulunamadı' sayfası uygulayın.

### 7. Stil Verme

- Sayfalarınıza Tailwind CSS veya Tailwind CSS-in-JS kütüphaneleri kullanarak stil verin.
- Uygulamanın duyarlı olmasını ve farklı cihazlarda tutarlı bir görünüm ve his sağlamasını sağlayın.
