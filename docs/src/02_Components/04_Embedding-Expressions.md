# React'te İfade Gömme

## Giriş
React uygulamalarında JSX içinde ifadelerin gömülmesi, JavaScript değişkenlerini, fonksiyonlarını veya diğer ifadeleri JSX kodu içinde kullanmanıza olanak tanır. JSX içine bir ifade gömmek için, sadece ifadeyi süslü parantezler ({}) içine almanız yeterlidir. Bu, React bileşenlerinizin dinamik olmasını sağlar ve değişkenlere, duruma veya proplara dayalı olarak veri görüntülemenize olanak tanır.

## Değişkenler
Bir değişkenin değerini görüntülemek için değişkeni süslü parantezler içine yerleştirebilirsiniz.

```jsx
const name = "John";
const element = <h1>Hello, {name}</h1>;
```

Bu kod, `name` değişkeninin değerini (`"John"`) `<h1>` etiketinin içinde görüntüler.

## Aritmetik İşlemler
Süslü parantezler içinde doğrudan aritmetik işlemler yapabilirsiniz.

```jsx
const a = 5;
const b = 10;
const element = <p>{a + b}</p>;
```

Bu örnek, `a` ve `b` değişkenlerinin toplamını (`15`) `<p>` etiketi içinde görüntüler.

## Fonksiyonlar
JavaScript fonksiyonlarını süslü parantezler içinde çağırabilir ve fonksiyonun dönüş değerini kullanabilirsiniz.

```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

Bu kod, `user` nesnesini `formatName` fonksiyonuna geçirir ve dönüş değerini `<h1>` etiketi içinde görüntüler.

## Dizileri Haritalama
Bir dizi üzerinde haritalama yapabilir ve dizi verilerine dayalı olarak bir öğe listesi oluşturabilirsiniz.

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

const element = (
  <ul>
    {listItems}
  </ul>
);
```

Bu örnek, `numbers` dizisi üzerinde haritalama yapar ve her bir sayı için bir `<li>` öğesi oluşturur ve listeyi `<ul>` etiketi içinde görüntüler.

## Sonuç
JSX içinde ifadelerin gömülmesi, React bileşenlerinizin daha dinamik ve esnek olmasını sağlar. Değişkenler, aritmetik işlemler, fonksiyon çağrıları ve dizi haritalamaları gibi çeşitli yöntemlerle JSX içine JavaScript ifadeleri gömülebilir. Bu yöntemler, bileşenlerinizin veri odaklı ve dinamik içerikler oluşturmasına yardımcı olur.