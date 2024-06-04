# JSX ve HTML Karşılaştırması

## Giriş

JSX (JavaScript XML) ve HTML (HyperText Markup Language) ilk bakışta benzer görünebilir, ancak bazı önemli farklılıklara sahiptirler. JSX, React uygulamalarında bileşenleri ve yapılarını tanımlamak için kullanılan JavaScript için bir sözdizimi uzantısıdır. HTML ise web sayfalarını oluşturmak için kullanılan standart bir işaretleme dilidir.

## Ana Farklılıklar

1. **Sözdizimi**:
   - **JSX**: JavaScript kodunuzun içinde HTML benzeri kod yazmanıza izin veren bir JavaScript sözdizimi uzantısıdır. JSX kodu, DOM elemanlarını oluşturmak ve güncellemek için JavaScript fonksiyon çağrılarına dönüştürülür.
   - **HTML**: Web sayfalarının yapısını tanımlamak için kullanılan bir işaretleme dilidir. HTML, tarayıcı tarafından DOM'u oluşturmak için ayrıştırılır.

2. **Değişken İç İçe Geçirme (Variable Interpolation)**:
   - **JSX**: JavaScript ifadelerini kodun içinde süslü parantezler ({}) kullanarak yerleştirebilirsiniz. Bu, değişkenleri, fonksiyonları ve diğer ifadeleri doğrudan kullanmanıza olanak tanır.
   - **HTML**: JavaScript ifadelerini doğrudan kullanamazsınız; DOM'u manipüle etmek için JavaScript'i `<script>` etiketleri veya inline olay işleyicileri içinde kullanmanız gerekir.

3. **Özellik İsimlendirmesi (Attribute Naming)**:
   - **JSX**: Özellikler için camelCase isimlendirme kullanır. Örneğin, `class` yerine `className` ve `onclick` yerine `onClick` kullanırsınız.
   - **HTML**: Özellikler için tire ile ayrılmış isimler kullanır.

4. **Kendi Kendini Kapatan Etiketler (Self-closing Tags)**:
   - **JSX**: Tüm elemanların bir kapanış etiketi olması gerekir, kendi kendini kapatan elemanlar da dahil olmak üzere. Örneğin, `<img src="logo.png" alt="Logo" />`.
   - **HTML**: Bazı kendi kendini kapatan elemanlar için kapanış etiketini atlayabilirsiniz.

5. **Bileşen Oluşturma (Component Creation)**:
   - **JSX**: Yeniden kullanılabilir ve bakımı kolay UI parçalarını tanımlamak için kullanılır. JSX ile özel bileşenler oluşturabilir ve bunları HTML elemanları gibi kullanabilirsiniz.
   - **HTML**: Sınırlı bir dizi elemanla sınırlıdır ve yeniden kullanılabilir bileşenler oluşturmak için yerleşik bir mekanizması yoktur.

## HTML'den JSX'e Dönüştürme

JSX'e dönüştürmek için aşağıdaki çevrimiçi araçları kullanabilirsiniz:

- [HTML to JSX](https://transform.tools/html-to-jsx)

## Örnekler

### HTML
```html
<div class="container">
  <h1 onclick="handleClick()">Merhaba Dünya</h1>
  <img src="logo.png" alt="Logo">
</div>
```

### JSX
```jsx
<div className="container">
  <h1 onClick={handleClick}>Merhaba Dünya</h1>
  <img src="logo.png" alt="Logo" />
</div>
```

## Sonuç

JSX ve HTML arasında belirgin farklar vardır ve bu farklar, React gibi modern JavaScript kütüphaneleri ile çalışırken önemlidir. JSX, JavaScript ile daha entegre bir şekilde çalışmanıza olanak tanırken, HTML, web sayfalarının temel yapısını tanımlamak için kullanılır. Bu farklılıkları anlamak, etkili ve verimli bir şekilde çalışmanızı sağlar.
