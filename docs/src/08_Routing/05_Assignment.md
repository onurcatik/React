# Kitapçı Web Sitesi Oluşturma

## Giriş

Bu eğitim, React Router ve Link bileşenlerini kullanarak dinamik, tek sayfalık bir uygulama (SPA) oluşturma becerilerinizi pekiştirmeyi amaçlamaktadır. Eğitimde, modern ve kullanıcı dostu bir arayüze sahip bir kitapçı web sitesi geliştirilecektir. Bu süreçte, Tailwind CSS kullanarak stil verme ve kullanıcı deneyimini iyileştirme konuları da ele alınacaktır.

## Eğitim İçeriği

1. **Projenin Genel Görünümü**
    - Amacımız, bir ana sayfa, kitap listeleme sayfası ve her kitap için ayrı detay sayfalarından oluşan bir kitapçı web sitesi oluşturmaktır.
    - Web sitesi, React Router kullanarak farklı 'sayfalar' arasında gezinmeyi sağlayacaktır.

2. **Gereksinimler**
    - Modern ve kullanıcı dostu bir arayüz tasarımı.
    - React Router ile sayfalar arası geçiş.
    - Link bileşenleri ile navigasyon.
    - Statik veri kullanarak kitap listesi oluşturma.
    - 404 Hata Sayfası ile hatalı URL yönetimi.
    - Tailwind CSS ile sayfa stilleri.

3. **Proje Yapısı**
    - `/`: Ana sayfa
    - `/books`: Kitap listeleme sayfası
    - `/books/:id`: Kitap detay sayfası
    - Hatalı URL’ler için 404 Sayfası

## Adım Adım Uygulama

1. **Proje Kurulumu**

    ```bash
    npx create-react-app bookstore
    cd bookstore
    npm install react-router-dom tailwindcss
    npx tailwindcss init
    ```

2. **Tailwind CSS Yapılandırması**
    Tailwind CSS'i `tailwind.config.js` ve `src/index.css` dosyalarında yapılandırın.

    ```javascript
    // tailwind.config.js
    module.exports = {
      purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
      darkMode: false,
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    }
    ```

    ```css
    /* src/index.css */
    @import "tailwindcss/base";
    @import "tailwindcss/components";
    @import "tailwindcss/utilities";
    ```

3. **React Router Yapılandırması**
    `src/App.js` dosyasında React Router yapılandırmasını yapın.

    ```javascript
    import React from 'react';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import Home from './components/Home';
    import BookList from './components/BookList';
    import BookDetail from './components/BookDetail';
    import NotFound from './components/NotFound';

    function App() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/books" component={BookList} />
            <Route path="/book/:id" component={BookDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      );
    }

    export default App;
    ```

4. **Bileşenlerin Oluşturulması**

    - **Ana Sayfa (Home) Bileşeni**

      ```javascript
      // src/components/Home.js
      import React from 'react';
      import { Link } from 'react-router-dom';

      function Home() {
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Kitapçıya Hoşgeldiniz</h1>
            <Link to="/books" className="text-blue-500">Kitapları Gör</Link>
          </div>
        );
      }

      export default Home;
      ```

    - **Kitap Listeleme (BookList) Bileşeni**

      ```javascript
      // src/components/BookList.js
      import React from 'react';
      import { Link } from 'react-router-dom';
      import books from '../data/books';

      function BookList() {
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Kitap Listesi</h1>
            <ul>
              {books.map(book => (
                <li key={book.id}>
                  <Link to={`/book/${book.id}`} className="text-blue-500">
                    {book.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      }

      export default BookList;
      ```

    - **Kitap Detay (BookDetail) Bileşeni**

      ```javascript
      // src/components/BookDetail.js
      import React from 'react';
      import { useParams } from 'react-router-dom';
      import books from '../data/books';

      function BookDetail() {
        const { id } = useParams();
        const book = books.find(book => book.id === parseInt(id));

        if (!book) {
          return <h2>Kitap Bulunamadı</h2>;
        }

        return (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <img src={book.image} alt={book.title} />
            <p>{book.description}</p>
          </div>
        );
      }

      export default BookDetail;
      ```

    - **404 Sayfası (NotFound) Bileşeni**

      ```javascript
      // src/components/NotFound.js
      import React from 'react';

      function NotFound() {
        return (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">Sayfa Bulunamadı</h1>
            <p>Üzgünüz, aradığınız sayfa mevcut değil.</p>
          </div>
        );
      }

      export default NotFound;
      ```

5. **Veri Dosyasının Oluşturulması**

    ```javascript
    // src/data/books.js
    const books = [
      { id: 1, title: 'Kitap 1', description: 'Kitap 1 Açıklaması', image: 'link_to_image_1' },
      { id: 2, title: 'Kitap 2', description: 'Kitap 2 Açıklaması', image: 'link_to_image_2' },
      // Diğer kitaplar...
    ];

    export default books;
    ```


