# React Performans Optimizasyonu 

Bu eğitim, React uygulamalarında performans optimizasyonunu ele almak için kapsamlı ve ayrıntılı bir kılavuz sunmaktadır. Her bir öneriyi, kod örnekleri ile destekleyerek detaylandıracağız.

## 1. Durum Güncellemelerini Optimizasyon

React bileşenlerinin gereksiz yere yeniden render edilmesini önlemek için durum güncellemelerinin yalnızca gerekli olduğunda yapılması önemlidir. Bu, performansın iyileştirilmesine yardımcı olur.

## Öneriler

- **Fonksiyonel Güncellemeler ve Spread Operatörü Kullanımı**: Mevcut nesneleri değiştirmek yerine, yeni nesneler oluşturmak için spread operatörünü kullanın.

```javascript
const [state, setState] = useState(initialState);

// Durum güncellemesi örneği
setState(prevState => ({
    ...prevState,
    updatedProperty: newValue
}));
```

## 2. Lazy Loading ve Kod Parçalama (Code Splitting)

Uygulamanızı daha küçük parçalara bölmek, başlangıç yükleme süresini önemli ölçüde azaltabilir. Bu, özellikle büyük ve karmaşık uygulamalar için faydalıdır.

## Öneriler

- **React.lazy() ve React.Suspense Kullanımı**:

```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </React.Suspense>
    );
}
```

## 3. Sanallaştırılmış Liste Kullanımı

Uzun listeleri render etmek, performans üzerinde büyük bir yük oluşturabilir. Yalnızca görünümde olan öğeleri render etmek, performansı büyük ölçüde artırır.

## Öneriler

- **react-window veya react-virtualized Kullanımı**:

```javascript
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => (
    <div style={style}>
        Row {index}
    </div>
);

const MyList = () => (
    <List
        height={150}
        itemCount={1000}
        itemSize={35}
        width={300}
    >
        {Row}
    </List>
);
```

## 4. useCallback() ve useMemo() Hook'larını Kullanma

Bu hook'lar, fonksiyonları ve değerleri memoize ederek gereksiz yeniden render veya yeniden hesaplamaların önüne geçer.

## Öneriler

- **useCallback() ile Fonksiyonları Memoize Etme**:

```javascript
const memoizedCallback = useCallback(() => {
    doSomething(a, b);
}, [a, b]);
```

- **useMemo() ile Hesaplanmış Değerleri Memoize Etme**:

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

## 5. React DevTools Kullanımı

React Developer Tools uzantısını kullanarak uygulamanızın profilini çıkarabilir ve performans darboğazlarını tespit edebilirsiniz. Profiler API'sini kullanarak bileşenlerinizin render sürelerini programlı olarak ölçebilirsiniz.

## Öneriler

- **React DevTools ile Profil Oluşturma**:

```javascript
import { Profiler } from 'react';

function onRenderCallback(
    id, // Profil oluşturulan bileşenin "id"si
    phase, // "mount" veya "update"
    actualDuration, // Bu güncelleme için geçen süre
    baseDuration, // Memoized durumdaki en yavaş render süresi
    startTime, // React'in bu güncellemeyi başlattığı zaman
    commitTime, // React'in bu güncellemeyi bitirdiği zaman
    interactions // Bu güncellemeyi tetikleyen etkileşimler
) {
    // Performans analizini burada yapın
}

<Profiler id="Navigation" onRenderCallback={onRenderCallback}>
    <Navigation {...props} />
</Profiler>
```

## 6. Görseller ve Varlıkları Optimizasyon

Görsellerin sıkıştırılması ve uygun boyutlu görsellerin kullanılması, yükleme sürelerini azaltır. SVG veya simge fontları kullanarak ikonları optimize edebilirsiniz.

## Öneriler

- **Responsive Görseller Kullanma ve Görselleri Sıkıştırma**:

```html
<img srcset="image-small.jpg 480w, image-medium.jpg 800w, image-large.jpg 1200w"
     sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
     src="image-large.jpg" alt="Example Image">
```

## 7. Sunucu Taraflı Render (SSR) ve Statik Site Jenerasyonu (SSG)

Başlangıç yükleme süresini ve SEO'yu iyileştirmek için SSR veya SSG kullanmayı düşünün. Next.js veya Gatsby gibi kütüphaneler bu konuda yardımcı olabilir.

## Öneriler

- **Next.js Kullanarak SSR ve SSG**:

```javascript
// pages/index.js

export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    
    return {
        props: {
            data,
        },
    };
}

function HomePage({ data }) {
    return (
        <div>
            <h1>Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default HomePage;
```

Bu eğitimde belirtilen yöntemler ve kod örnekleri, React uygulamalarınızın performansını optimize etmek için kullanabileceğiniz önemli tekniklerdir. Bu teknikleri uygulayarak daha hızlı ve verimli web uygulamaları geliştirebilirsiniz.
