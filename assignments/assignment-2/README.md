# Ürün Vitrini Oluşturma

## Amaç:

Bu görevin amacı, React bileşenleri ve props kullanarak dinamik bir ürün vitrini oluşturarak pratik yapmaktır. Bu görevi tamamlayarak, yeniden kullanılabilir bileşenler oluşturma, verileri props aracılığıyla iletim ve bileşenleri **Tailwind CSS** kullanarak stilize etme becerilerinizi geliştireceksiniz.

## Gereksinimler:

1. **Proje Kurulumu:**
   - Yeni bir React projesi oluşturun veya mevcut bir yapıyı kullanın.
  
2. **Bileşen Yapısı:**
   - Projenin kaynak dizininde (/src) **`components`** adında bir klasör oluşturun.
  
3. **Ürün Listesi Bileşeni:**
   - **`components`** klasörünün içine, **`ProductList.jsx`** adında yeni bir dosya ekleyin.
   - **`ProductList`** bileşenini uygulayarak, her ürün için aşağıdaki bilgileri içeren bir ürün listesi görüntüleyin:
     - Ürün adı
     - Ürün görseli (yer tutucu veya gerçek görsel URL)
     - Ürün fiyatı
     - Ürün açıklaması
  
4. **Veri Yönetimi:**
   - **`productsData.js`** gibi ayrı bir veri dosyası oluşturun ve ürün nesnelerinin bir dizisini depolayın.
   - Her ürün nesnesi, **`ProductList`** bileşeni içinde görüntülenmek için gerekli detayları içermelidir.
  
5. **Props İşleme:**
   - Ürün verilerini, bir üst bileşenden veya ayrı bir dosyadan **`ProductList`** bileşenine props olarak iletil.
  
6. **Stil:**
   - Görünüşü çekici hale getirmek için ürün listesini ve bireysel ürün kartlarını stilize etmek için Tailwind CSS sınıflarını kullanın.