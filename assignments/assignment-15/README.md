# Kullanıcı Listesi Uygulaması Geliştirme

## Amaç

Bu ödevin amacı, React uygulamasının performansını çeşitli optimizasyon teknikleri (memoization, PureComponent ve useCallback kancası) kullanarak artırmaktır. Bu yöntemler sayesinde, bileşenlerin yeniden işlenme sürecini daha verimli hale getirecek ve web uygulamanızın genel performansını artıracaksınız. Ayrıca, bileşenlerinizi daha iyi görselleştirmek ve stillendirmek için **Tailwind CSS** kullanmanız gerekmektedir.

## Gereksinimler

1. **Bir React Uygulaması Oluşturun**:
    - Karmaşık bileşen yapısına sahip ve iç içe geçmiş alt bileşenler içeren bir React uygulaması geliştirin.
    - Kullanıcı listesini almak ve göstermek için belirtilen API'yi (https://jsonplaceholder.typicode.com/users) kullanın.

2. **Memoization**:
    - Bileşenlerin işlenmesini optimize etmek için memoization kullanın.
    - Bileşenlerin yalnızca gerekli olduğunda yeniden işlenmesini sağlayarak pahalı hesaplamaları azaltın.

3. **PureComponent**:
    - PureComponent sınıfını, props ve state için sığ eşitlik kontrollerine dayanan bileşenleri optimize etmek için kullanın.
    - Bu, props ve state'in otomatik olarak karşılaştırılmasıyla gereksiz yeniden işlemeleri azaltır.

4. **useCallback Kancası**:
    - Bileşenlerinizdeki olay işleyicilerini veya geri çağırma fonksiyonlarını memoize etmek için useCallback kancasını kullanın.
    - Bu, her render'da yeni fonksiyon örneklerinin oluşturulmasını önlemeye yardımcı olur.

5. **Props ve State Yönetimi**:
    - Bileşenlerin yalnızca gerekli olduğunda yeniden işlenmesini sağlamak için verimli props ve state yönetimi tekniklerini uygulayın, gereksiz güncellemeleri önleyin.

6. **Tailwind CSS ile Stil Verme**:
    - Bileşenlerinizi stil vermek için Tailwind CSS kullanın.
    - Uygulama genelinde tutarlı bir tasarım sağlayarak görsel çekiciliği artırmaya odaklanın.

7. **Performans Testi**:
    - Bu optimizasyonlar sayesinde elde edilen performans iyileştirmelerini React Developer Tools veya diğer ilgili performans izleme araçları kullanarak test edin.

8. **Performans Etki Raporu**:
    - Her optimizasyon tekniğinin uygulamanızın genel performansı üzerindeki etkisini detaylandıran kısa bir rapor yazın.
    - Her tekniğin performans iyileştirmesine nasıl katkıda bulunduğuna dair içgörüler ekleyin.

9. **Duyarlılık ve Erişilebilirlik**:
    - Uygulamanızın farklı cihazlar ve tarayıcılarda düzgün çalıştığından ve duyarlı olduğundan emin olun.
    - Uygulamanın tüm kullanıcılar için kullanılabilir olmasını sağlamak için erişilebilirlik özelliklerini uygulayın.