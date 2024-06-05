# Milliyet Tahmincisi Uygulaması

## Amaç

Bu görevin amacı, React kancalarını ve React uygulamalarında asenkron veri alma konusundaki anlayışınızı güçlendirmektir. Kullanıcı tarafından girilen bir isme dayanarak en olası milliyeti tahmin eden "Milliyet Tahmincisi" uygulaması oluşturmanız istenmektedir. Proje, üçüncü taraf bir API ile etkileşim, yükleme durumlarını yönetme ve verileri kullanıcıya görsel olarak çekici bir biçimde sunma konularını içerir ve **Tailwind CSS** kullanacaktır.

## Gereksinimler

1. **React Uygulaması**: Uygulamayı React.js kullanarak geliştirin, bileşenleri, prop'ları, durum yönetimini ve yaşam döngüsü yöntemlerini kullanın.

2. **Kancaların Kullanımı**: Bileşen durumunu ve yan etkileri yönetmek için **`useState`** ve **`useEffect`** gibi React kancalarından yararlanın.

3. **Veri Alma**: Nationalize.io API'ından veri alın, yükleme durumlarını yönetin ve verileri kullanıcıya sunun.

    - **API Bağlantı Noktası**: [https://api.nationalize.io/?name=${name}](https://api.nationalize.io/?name=$%7Bname%7D)

4. **Kullanıcı Girişi**: Kullanıcının bir ismi metin alanına girmesine izin verin.

5. **Kullanıcı Eylemiyle Veri Alma**: Bir düğme tıklamasıyla tahmin edilen milliyetin alınmasını tetikleyin.

6. **Yükleme Durumu Yönetimi**: Veriler alınırken "Yükleniyor..." mesajını gösterin.

7. **Veri Gösterimi**: Veriler alındığında, tahmin edilen milliyeti ve yüzde olarak tahmin güvenini gösterin.

8. **Sıfırlama İşlevselliği**: Tüm gösterilen verileri ve giriş alanını sıfırlamak için bir sıfırlama düğmesi uygulayın.

9. **Hata İşleme**: API, tahmin edilen milliyeti döndürmezse, kullanıcı dostu bir hata mesajı sağlayın.

10. **Stil**: Uygulamanın iyi tasarlanmış ve kullanıcı dostu olduğundan emin olun, stil amaçları için CSS-in-JS veya dış stil sayfalarını kullanın.
