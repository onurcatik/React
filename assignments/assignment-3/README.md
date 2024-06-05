# Bir Hizmet Sayfası Oluşturun

## Amaç

Görsel olarak çekici ve duyarlı bir Hizmet Sayfası geliştirin, React bileşenlerini kullanarak ve stil için props ve Tailwind CSS'den yararlanın.

## Gereksinimler

## 1. Kurulum

- **Bir React Uygulaması Başlatın**:
  - Yeni bir React uygulaması oluşturun.
- **Tailwind CSS Kurulumu**:
  - React projenize Tailwind CSS ekleyin.

## 2. Bileşenler

- **Bileşenler Klasörü Oluşturun**:
  - `src` dizini içinde, `components` adında bir klasör oluşturun.
- **ServiceCard Bileşeni**:
  - `components` klasörü içinde `ServiceCard.js` adlı bir dosya oluşturun.
  - `ServiceCard` bileşeni şu props'ları kabul etmelidir: `image`, `text`, `paragraph` ve `buttonLabel`.

## 3. Hizmet Sayfası

- **ServicePage Bileşeni**:
  - `ServicePage.js` adında yeni bir bileşen oluşturun.
  - Bu sayfanın başlığı "Services" olmalıdır.
  - `ServiceCard` bileşenini üç farklı props ile üç kez entegre edin.

## 4. Tailwind CSS ile Stil Verme

- **Duyarlı Tasarım**:
  - Masaüstü için: Üç hizmet kartını yan yana görüntüleyin.
  - Mobil için: Kartları dikey olarak istifleyin.
- **ServiceCard Stili**:
  - Her `ServiceCard` şunları içermelidir:
    - Bir resim
    - Bir metin başlığı
    - Bir paragraf
    - Bir düğme
  - Her kart için bir hover efekti uygulayın.
  - Tasarımı güzelleştirmek için simgeler kullanın.

Bu adımları takip ederek, Tailwind CSS kullanarak yeniden kullanılabilir bileşenlerle iyi yapılandırılmış, duyarlı bir Hizmet Sayfası oluşturabilirsiniz.
