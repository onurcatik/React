# React Bileşen Yaşam Döngüsü ve useEffect Hook

React bileşen yaşam döngüsü, bir React bileşeninin oluşturulmasından kullanıcı arayüzünden kaldırılmasına kadar geçen aşamaları ifade eder. Bu aşamalar, bileşenin davranışını ve performansını yönetmek için geliştiricilere çeşitli araçlar sunar. Yaşam döngüsü, bileşenin oluşturulması, render edilmesi, güncellenmesi ve kaldırılması aşamalarını içerir. React sınıf bileşenleri, bileşenin yaşam döngüsünün farklı aşamalarında çağrılan bir dizi önceden tanımlanmış yaşam döngüsü metoduna sahiptir. Bu metodlar arasında `componentDidMount`, `componentDidUpdate` ve `componentWillUnmount` gibi metodlar bulunur. Yaşam döngüsü metodları, sınıf bileşeni içinde tanımlanır ve bileşenin yaşam döngüsüne göre React tarafından otomatik olarak çağrılır. Bu metodlar, aboneliklerin ayarlanması, veri getirme, DOM manipülasyonu ve kaynakların temizlenmesi gibi görevler için kullanışlıdır. Ancak, sınıf bileşenlerinde yaşam döngüsü metodlarını kullanmak, karmaşık kodlara ve daha zor anlaşılır ve bakım yapılabilir bir yapıya yol açabilir.

## React Yaşam Döngüsü Metodları

- `componentDidMount`: Bileşen ilk kez DOM'a yerleştirildikten sonra çağrılır. Bu metod genellikle veri getirme ve aboneliklerin ayarlanması için kullanılır.
- `componentDidUpdate`: Bileşen güncellendikten sonra çağrılır. Bu metod, bileşen güncellemelerinden sonra yapılması gereken işlemler için kullanılır.
- `componentWillUnmount`: Bileşen DOM'dan kaldırılmadan hemen önce çağrılır. Bu metod, kaynakların serbest bırakılması ve aboneliklerin iptal edilmesi için kullanılır.

## useEffect Hook

React 16.8 ile tanıtılan `useEffect` Hook'u, fonksiyon bileşenlerinin yaşam döngüsü benzeri özellikleri kullanmasına olanak tanır. Birden fazla yaşam döngüsü metodunun işlevselliğini tek bir Hook içinde birleştirir ve yan etkilerin yönetilmesini basitleştirir. `useEffect` Hook, fonksiyon bileşenleri içinde kullanılır ve varsayılan olarak her render işleminden sonra çağrılır.

- `useEffect`, bir etki fonksiyonu ve isteğe bağlı bir bağımlılık dizisi kabul eder. Etki fonksiyonu, bileşen render edildikten sonra çağrılır ve veri getirme, olaylara abone olma, DOM manipülasyonu gibi görevleri yerine getirebilir.
- İsteğe bağlı bağımlılık dizisi, etkinin ne zaman yeniden çalıştırılması gerektiğini kontrol eder. Dizideki bağımlılıklar değişirse, etki yeniden çalıştırılır.

## Karşılaştırma

- Yaşam döngüsü metodları, sınıf bileşenlerinde kullanılırken, `useEffect` Hook'u fonksiyon bileşenlerinde kullanılır.
- Yaşam döngüsü metodları, belirli bir sıralama ile çalışırken, `useEffect`, bağımlılıklara dayalı olarak etkilerin sıralamasını ve yürütülmesini kontrol etmenizi sağlar.
- Yaşam döngüsü metodları, yaşam döngüsünün farklı aşamaları için ayrı ayrı metodlar sağlarken, `useEffect`, birden fazla yaşam döngüsü benzeri özelliği tek bir Hook içinde birleştirir.
- Yaşam döngüsü metodlarının isimleri yaşam döngüsünün aşamasına göre farklılık gösterirken, `useEffect`, her zaman `componentDidMount`, `componentDidUpdate` ve `componentWillUnmount` kombinasyonunu temsil eder.

## Kod Örneği

Aşağıda, sınıf bileşenlerinde yaşam döngüsü metodları ve fonksiyon bileşenlerinde `useEffect` Hook'unun nasıl kullanıldığını gösteren bir kod örneği verilmiştir:

**Sınıf Bileşeni:**

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    // Veri getirme veya abonelik ayarlama
  }

  componentDidUpdate(prevProps, prevState) {
    // Güncelleme sonrası işlemler
  }

  componentWillUnmount() {
    // Kaynakları serbest bırakma veya abonelik iptal etme
  }

  render() {
    return (
      <div>
        {/* Bileşen içeriği */}
      </div>
    );
  }
}

export default MyComponent;
```

**Fonksiyon Bileşeni:**

```javascript
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    // Veri getirme veya abonelik ayarlama

    return () => {
      // Kaynakları serbest bırakma veya abonelik iptal etme
    };
  }, []);

  useEffect(() => {
    // Güncelleme sonrası işlemler
  });

  return (
    <div>
      {/* Bileşen içeriği */}
    </div>
  );
}

export default MyComponent;
```

Bu eğitim, React bileşenlerinin yaşam döngüsü ve `useEffect` Hook'unun nasıl kullanılacağını kapsamlı ve ayrıntılı bir şekilde ele almıştır. Kod parçacıkları ve açıklamalar, geliştiricilerin bu konuları daha iyi anlamalarına yardımcı olacaktır.
