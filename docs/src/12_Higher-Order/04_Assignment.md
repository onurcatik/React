# Movie List App

#### **Amaç:**

Bu eğitimin amacı, React'te Üst Düzey Bileşenlerin (HOC) kullanımını uygulamak, **CSS ile stil oluşturmak** ve bir **API'den veri çekmektir.** Yeniden kullanılabilir HOC'lar oluşturacak, bunları bir React uygulamasında uygulayacak ve sağlanan API'den verileri göstereceksiniz.

**API -** [Fake Movies API](https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies)

#### Gereksinimler:

1. Bu ödev için yeni bir React uygulaması oluşturun veya mevcut bir uygulamayı kullanın.
2. Sağlanan API'den film verilerini çeken ve film listesini dinamik olarak görüntüleyen bir **`MovieList`** bileşeni oluşturun.
3. Film kartlarını CSS kullanarak hoş bir düzen oluşturacak şekilde stilize edin.
4. Film verileri çekilirken **yükleme bileşeni** ekleyin. Bu bileşen, verilerin yüklendiğini belirten görsel geri bildirim sağlar.
5. Veriler çekildikten sonra film listesi ekranda görüntülenecektir.
6. Duyarlı tasarımı uygulayın.
7. Uygulamayı bir web tarayıcısında test ederek film listesinin doğru görüntülendiğini ve stilin uygulandığını doğrulayın.


### Adım Adım Eğitim

#### 1. React Uygulaması Oluşturma

```bash
npx create-react-app movie-list-app
cd movie-list-app
```

#### 2. Gerekli Dosyaları ve Bileşenleri Oluşturma

`src` klasöründe `components` adında bir klasör oluşturun ve aşağıdaki dosyaları ekleyin:

- `MovieList.js`
- `MovieCard.js`
- `Loading.js`
- `withLoading.js`

#### 3. `MovieList` Bileşenini Oluşturma

```javascript
// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import withLoading from './withLoading';

const MovieList = ({ isLoading, setLoading }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default withLoading(MovieList);
```

#### 4. `MovieCard` Bileşenini Oluşturma

```javascript
// src/components/MovieCard.js
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
```

#### 5. `Loading` Bileşenini Oluşturma

```javascript
// src/components/Loading.js
import React from 'react';
import './Loading.css';

const Loading = () => (
  <div className="loading">
    <div className="spinner"></div>
    <p>Loading...</p>
  </div>
);

export default Loading;
```

#### 6. `withLoading` HOC Oluşturma

```javascript
// src/components/withLoading.js
import React, { useState } from 'react';
import Loading from './Loading';

const withLoading = WrappedComponent => {
  return function WithLoadingComponent(props) {
    const [isLoading, setLoading] = useState(false);

    return (
      <>
        {isLoading && <Loading />}
        <WrappedComponent isLoading={isLoading} setLoading={setLoading} {...props} />
      </>
    );
  };
};

export default withLoading;
```

#### 7. CSS Dosyalarını Oluşturma

`src/components` klasörüne `MovieCard.css` ve `Loading.css` dosyalarını ekleyin.

```css
/* src/components/MovieCard.css */
.movie-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  max-width: 300px;
}

.movie-card img {
  width: 100%;
  height: auto;
}

.movie-info {
  padding: 16px;
}

.movie-info h3 {
  margin: 0 0 8px;
}

.movie-info p {
  margin: 0;
}
```

```css
/* src/components/Loading.css */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

#### 8. `App.js` Dosyasını Güncelleme

```javascript
// src/App.js
import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieList />
    </div>
  );
}

export default App;
```

#### 9. Responsive Tasarım ve Son Testler

Tarayıcınızda uygulamayı açın ve responsive tasarımı test edin. Film listesi düzgün görüntülenmeli ve CSS stilleri uygulanmış olmalıdır.

```css
/* src/App.css */
.App {
  text-align: center;
  padding: 20px;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

.