# React ile Pokemon Bulucu Uygulaması

## Pokemon Bulucu

## Amacı

Bu eğitimde, kullanıcıların Pokemon bilgilerini görüntüleyebileceği ve açık ve koyu modlar arasında geçiş yapabileceği bir web uygulaması geliştireceğiz. Uygulama, React ile sınıf bileşenleri kullanılarak oluşturulacak.

## Gereksinimler

Bu eğitimin temel amacı, modern web geliştirme alanında iki önemli konunun anlaşılması ve uygulanmasını teşvik etmektir:

1. Bir üçüncü taraf web API'sinin (bu durumda Pokemon API) entegrasyonu ve tarayıcıda dinamik olarak veri çekip görüntüleme.

   **API** - <https://pokeapi.co/api/v2/pokemon?limit=100>

2. Kullanıcı deneyimini geliştirmek için açık ve koyu mod geçişi sağlayan bir özellik uygulama.

## Temel İşlevsellik

1. **Pokemon Listesi:**
   - **pokeapi.co** API'sinden çekilen Pokemon listesini görüntüleyin.
   - Her Pokemon öğesi bir resim ve adını içermelidir.

2. **Koyu Mod/Açık Mod Geçişi:**
   - Sağ üst köşeye bir geçiş düğmesi/ikonu ekleyin.
   - Varsayılan tema açık mod olmalıdır.
   - Açık moddayken, koyu moda geçişi göstermek için bir ay ikonunu görüntüleyin.
   - Koyu moddayken, açık moda dönmek için bir güneş ikonunu görüntüleyin.

## Teslimat

1. React projenizi barındırmak için bir GitHub deposu oluşturun.
2. Kodunuzu bu depoya gönderin ve yayınlayın.
3. Uygulamanızın nasıl çalıştırılacağına dair talimatlar içeren bir README dosyası ekleyin.
4. Netlify veya GitHub Pages gibi bir platform kullanarak web sitenizin canlı demosunu sağlayın.

## Eğitim İçeriği

### 1. React Projesini Başlatma

```sh
npx create-react-app pokemon-finder
cd pokemon-finder
npm start
```

### 2. API Entegrasyonu

```jsx
import React, { Component } from 'react';

class PokemonList extends Component {
  state = {
    pokemons: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then(response => response.json())
      .then(data => {
        this.setState({ pokemons: data.results, isLoading: false });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { pokemons, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Yükleniyor...</p>;
    }

    if (error) {
      return <p>Bir hata oluştu: {error.message}</p>;
    }

    return (
      <div>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              <p>{pokemon.name}</p>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonList;
```

### 3. Koyu Mod/Açık Mod Geçişi

```jsx
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    darkMode: false,
  };

  toggleDarkMode = () => {
    this.setState(prevState => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { darkMode } = this.state;
    return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <nav>
          <button onClick={this.toggleDarkMode}>
            {darkMode ? '🌞' : '🌜'}
          </button>
        </nav>
        <PokemonList />
      </div>
    );
  }
}

export default App;
```

### 4. CSS ile Temalar

```css
/* App.css */
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

.light-mode {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: black;
  color: white;
}

nav {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
}

button {
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
}
```

### 5. Proje Dosya Yapısı

```
pokemon-finder/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js
│   ├── App.css
│   ├── PokemonList.js
│   └── index.js
├── package.json
└── ...
```
