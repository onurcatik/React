# JSX 

Bu eğitimde, JSX ile ilgili kapsamlı ve ayrıntılı bilgiler sunacağız. Eğitim boyunca ciddi ve bilimsel bir dil kullanarak, doğru ve eksiksiz bilgi vermeye özen göstereceğiz. JSX, React kullanarak bileşenlerin yapılarını oluşturmak ve yönetmek için HTML benzeri kod yazmanıza olanak tanıyan bir JavaScript sözdizimi uzantısıdır. Bu eğitimde, JSX'in temellerini ve kullanımıyla ilgili önemli noktaları ele alacağız.

# JSX Nedir?

JSX (JavaScript XML), JavaScript içine HTML benzeri kod yazmayı sağlayan bir sözdizimi uzantısıdır. React, JSX'i derleme sürecinde düzenli JavaScript koduna dönüştürür. JSX kullanımı, bileşenlerin yapısını oluşturmayı ve yönetmeyi kolaylaştırır.

# JSX Kullanımına İlişkin Temel Noktalar

## 1. İfadeler

JSX kodu içinde JavaScript ifadelerini süslü parantezler ({}) içine alarak yerleştirebilirsiniz. Örneğin:

```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;
```

Bu örnekte, `name` değişkeninin değeri süslü parantezler içinde kullanılarak JSX içinde yerleştirilmiştir.

## 2. Nitelikler

JSX nitelikleri, HTML niteliklerine benzer, ancak camelCase adlandırma kuralını kullanır. Örneğin, `class` yerine `className` ve `onclick` yerine `onClick` kullanılır:

```jsx
const element = <button className="btn" onClick={handleClick}>Click me</button>;
```

## 3. Kapanış Etiketleri

HTML'den farklı olarak, JSX'te tüm öğelerin kapanış etiketine sahip olması gerekir. Kendi kendine kapanan öğeler için (örneğin, `img` veya `input`), kapanış açı parantezinden önce tek bir eğik çizgi kullanmalısınız:

```jsx
const element = <img src="image.jpg" alt="Description" />;
```

# JSX'in Yararları

- **Okunabilirlik**: HTML benzeri sözdizimi, bileşen yapısının kolayca anlaşılmasını sağlar.
- **Dinamik İçerik**: JavaScript ifadeleri ile dinamik içerik oluşturulabilir.
- **Bileşen Yönetimi**: Büyük uygulamalarda bileşenlerin yönetimi ve bakımı kolaylaşır.

# JSX'in Dönüştürülmesi

JSX, React tarafından derleme sürecinde JavaScript fonksiyon çağrılarına dönüştürülür. Örneğin:

```jsx
const element = <h1 className="title">Hello, world!</h1>;
```

Bu kod, React tarafından aşağıdaki JavaScript koduna dönüştürülür:

```javascript
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, world!'
);
```



