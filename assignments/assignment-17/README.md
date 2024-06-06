# Sosyal Medya Panosu Oluşturun

## Amaç

React bileşenleri, durum yönetimi, simgeler ve geri çağrılar gibi kavramları kullanarak duyarlı bir Sosyal Medya Panosu oluşturun.

## Gereksinimler

### 1. React Bileşenleri

Aşağıdaki temel bileşenlere sahip bir React uygulaması geliştirin:

#### a. **SocialMediaCard** Bileşeni

- Sosyal medya hesabının adını, beğenilerini ve simgesini gösteren bir kart oluşturun.
- Facebook, Twitter ve Instagram için simgeler kullanın.

#### b. **Metrics** Bileşeni

- Tüm sosyal medya hesaplarının toplam beğenilerini gösteren bir bölüm oluşturun.
- Bir **`totalLikes`** prop'u kabul edin ve bu değeri görüntüleyin.

#### c. **Dashboard** Bileşeni

- Sosyal medya verilerini (**`mockSocialMediaData`**'yı) yönetmek için **`useState`** kullanarak bir durum başlatın.
- Her bir sosyal medya hesabının bilgilerini görüntülemek için **SocialMediaCard** bileşenini kullanın.
- Belirli bir hesabın beğenilerini güncellemek için **`useCallback`** kullanarak **`handleUpdateLikes`** fonksiyonunu uygulayın.
- Tüm hesapların toplam beğenilerini hesaplamak ve bu değeri **Metrics** bileşenine iletmek için **`useMemo`** kullanın.
- "Sosyal Medya Panosu" metnini içeren bir başlık görüntüleyin.

### 2. CSS Stili

Bileşenleri stilize etmek için bir CSS dosyası oluşturun, şunlar dahil:

- **Pano Düzeni**: Uygun kenar boşlukları, dolgu ve arka plan renkleri uygulayın.
- **Kart Stilleri**: Arka plan renkleri, kenar yuvarlatma ve kutu gölgesi ile kartı özelleştirin.
- **Kalp Düğmesi**: Kalp düğmesini özel bir sınıfla (**`custom-btn btn`**) stilize edin.
- **Duyarlı Tasarım**: Pano küçük cihazlarda iyi görünecek şekilde duyarlı CSS tekniklerini kullanın.

### 3. Veriler ve Simgeler

Pano bileşenlerini doldurmak için sağlanan simgeleri ve **`mockSocialMediaData`**'yı kullanın.

### 4. Duyarlılık

Panonun duyarlı olduğundan ve küçük cihazlar için uygun şekilde düzenlendiğinden emin olun.
