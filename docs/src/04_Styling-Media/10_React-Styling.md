#  Stil Kütüphaneleri 

Bu eğitim rehberi, React uygulamalarınızda stilleri daha kolay oluşturmanıza ve yönetmenize yardımcı olan popüler React stil kütüphanelerini kapsayacaktır. Özellikle, CSS-in-JS yaklaşımını kullanan ve React bileşenlerini stilize etmek için yaygın olarak kullanılan iki ana kütüphane olan **styled-components** ve **Emotion** üzerinde duracağız. 

## 1. styled-components

**styled-components**, React bileşenlerini stilize etmek için kullanılan bir CSS-in-JS kütüphanesidir. Aşağıda bu kütüphanenin temel özellikleri ve kullanımı hakkında detaylı bilgi verilmiştir.

- **CSS-in-JS kütüphanesi**: CSS stillerini JavaScript içinde yazmanıza olanak tanır.
- **Tagged Template Literals**: ES6 ile gelen template literals kullanır.
- **Temalar, Sunucu Tarafında Rendering ve Otomatik Vendor-Prefixing**: Temaları destekler, SSR (Server-Side Rendering) ile uyumludur ve tarayıcı uyumluluğu için vendor-prefix ekler.
- **Bileşenlere Bağlı Scoped Stiller**: Stiller bileşenlere bağlıdır ve izole edilir.
- **Modülerlik ve Yeniden Kullanılabilirlik**: Modüler yapıyı teşvik eder ve stil kurallarının yeniden kullanılabilir olmasını sağlar.

### styled-components Kullanımı

**Kurulum**:
```bash
npm install styled-components
```

**Örnek Kullanım**:
```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: papayawhip;
  border-radius: 3px;
  border: none;
  color: palevioletred;
  margin: 0.5em;
  padding: 0.5em 1em;
  font-size: 1em;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```

**Resmi Belgeler ve Kaynaklar**:
- GitHub: [styled-components GitHub](https://github.com/styled-components/styled-components)
- Dokümantasyon: [styled-components Documentation](https://styled-components.com/docs)

## 2. Emotion

**Emotion**, yüksek performanslı stil kompozisyonu için tasarlanmış bir başka popüler CSS-in-JS kütüphanesidir. Emotion, iki ana yol sunar: JSX tabanlı `@emotion/react` ve styled-components'e benzer `@emotion/css`.

- **CSS-in-JS kütüphanesi**: React bileşenleri için stil oluşturmanızı sağlar.
- **JSX Tabanlı ve styled-components Benzeri Yöntemler**: Farklı kullanım yöntemleri sunar.
- **Temalar, Sunucu Tarafında Rendering ve Otomatik Vendor-Prefixing**: Bu özellikleri destekler.
- **Yüksek Performans**: Ölü kodların elemesi ve kritik CSS çıkarımı gibi optimizasyonlara sahiptir.
- **Bileşen Tabanlı Stil ve Yeniden Kullanılabilirlik**: Bileşen bazlı stil oluşturmayı teşvik eder.

### Emotion Kullanımı

**Kurulum**:
```bash
npm install @emotion/react @emotion/styled
```

**Örnek Kullanım**:
```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const buttonStyle = css`
  background: papayawhip;
  border-radius: 3px;
  border: none;
  color: palevioletred;
  margin: 0.5em;
  padding: 0.5em 1em;
  font-size: 1em;

  &:hover {
    background: palevioletred;
    color: white;
  }
`;

const Button = styled.button`
  ${buttonStyle}
`;

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

export default App;
```

**Resmi Belgeler ve Kaynaklar**:
- GitHub: [Emotion GitHub](https://github.com/emotion-js/emotion)
- Dokümantasyon: [Emotion Documentation](https://emotion.sh/docs/introduction)

# Sonuç

Bu eğitim rehberinde, React projelerinde stil oluşturmayı kolaylaştıran ve yönetilebilir hale getiren iki popüler CSS-in-JS kütüphanesi olan styled-components ve Emotion incelenmiştir. Her iki kütüphane de temalar, sunucu tarafında rendering ve otomatik vendor-prefixing gibi güçlü özellikler sunar ve bileşen bazlı stil oluşturmayı teşvik eder. Kütüphanelerin nasıl kurulacağını ve temel kullanım örneklerini inceleyerek, projelerinizde etkili stil çözümleri uygulayabilirsiniz.