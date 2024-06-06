# Pokemon Bulucu Geliştirin

## Amaç

React (Sınıf bileşenleri kullanarak) kullanarak kullanıcıların Pokemon bilgilerini görüntülemelerine olanak tanıyan ve aydınlık ve karanlık modlar arasında geçiş yapabilen bir web uygulaması geliştirin.

## Gereksinimler

Bu ödevin temel amacı, modern web geliştirmede iki önemli yönün anlaşılmasını ve pratik uygulamasını teşvik etmektir:

1. **Üçüncü Taraf Bir Web API'sinin Entegrasyonu**:
    - Pokemon API'sini kullanarak verileri alıp tarayıcıda dinamik olarak görüntüleyin.
    - **API Bağlantı Noktası**: [https://pokeapi.co/api/v2/pokemon?limit=100](https://pokeapi.co/api/v2/pokemon?limit=100)

2. **Karanlık Mod Geçiş Özelliğinin Uygulanması**:
    - Kullanıcı deneyimini artırmak için kullanıcıların aydınlık ve karanlık temalar arasında geçiş yapmalarına olanak tanıyın.

## Temel İşlevsellik

- **`pokeapi.co`** API'sinden alınan Pokemon listesini görüntüleyin.
- Her Pokemon öğesi bir resim ve ismini içermelidir.

## Karanlık Mod/Aydınlık Mod Geçişi

- Sayfanın sağ üst köşesine bir geçiş düğmesi/ikonu ekleyin.
- Varsayılan tema aydınlık mod olmalıdır.
- Aydınlık moddayken, karanlık moda geçişi göstermek için bir ay ikonu görüntüleyin.
- Karanlık moddayken, aydınlık moda geçişi göstermek için bir güneş ikonu görüntüleyin.
