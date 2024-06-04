# React ile Bir Film Rezervasyon Mağazası Oluşturun


#### **Amaç:**

Bu görevin amacı, React'teki sınıf bileşenleri ile props ve state kullanımını derinlemesine anlamanızı sağlamaktır. Kullanıcıların koltuk seçip film biletleri rezerve edebileceği bir film rezervasyon sistemi oluşturacaksınız. Ayrıca, kullanıcı arayüzünü geliştirmek ve görsel olarak çekici bir deneyim sunmak için **Tailwind CSS** kullanacaksınız.

#### **Gereksinimler:**

1. Bir sinema salonu oturma düzenini temsil eden bir kullanıcı arayüzü tasarlayın. Koltukları konumlandırmak ve stil vermek için CSS ve Tailwind CSS sınıflarını kullanarak sezgisel ve görsel olarak çekici bir düzen oluşturun.
2. "Seat" bileşeni içinde koltuk bilgilerini görüntüleyin ve koltuğun rezerve edilip edilmediğine bağlı olarak Tailwind CSS sınıfları kullanarak stil verin.
3. "MovieBookingSystem" adlı bir ana bileşen oluşturun.
4. "MovieBookingSystem" bileşeni içinde bir koltuk nesneleri dizisi tanımlayın. Her koltuk nesnesi aşağıdaki özelliklere sahip olmalıdır:
    - **`id`** (string veya numara): Koltuğun benzersiz tanımlayıcısı.
    - **`row`** (string): Koltuğun sıra numarası veya harfi.
    - **`column`** (string veya numara): Koltuğun sütun numarası veya harfi.
    - **`isBooked`** (boolean): Koltuğun zaten rezerve edilip edilmediğini belirtir.
    - **`shouldExclude:`**(boolean): Koltuğun dahil edilip edilmediğini belirtir.
5. "MovieBookingSystem" bileşeni içinde, her koltuk nesnesini props olarak geçirerek birden fazla "Seat" bileşeni örneği oluşturun.
6. Her "Seat" bileşeninin doğru koltuk bilgilerini görüntülediğinden ve tıklandığında rezervasyon durumunu doğru şekilde güncellediğinden emin olun.
7. "MovieBookingSystem" bileşenine, seçilen koltukları ve detaylarını (örneğin sıra, sütun) görüntüleyen bir özet bölümü ekleyin.
8. Özet bölümünde, rezervasyon işlemine devam etmek için bir düğme ekleyin.
9. Rezervasyon düğmesine tıklandığında, "MovieBookingSystem" bileşeninin state'ini seçilen koltukları depolayacak şekilde güncelleyin ve rezervasyon işlemini tamamlamak için gerekli işlemleri (örneğin, API çağrıları, hesaplamalar) gerçekleştirin.
10. Film rezervasyon sisteminin genel görünümünü geliştirmek için Tailwind CSS sınıflarını ve özel stilleri uygulayın.
11. Uygulamanın props, state, koltuk seçimi ve rezervasyon işlemlerinin beklendiği gibi çalıştığını doğrulamak için test edin.

### Adım Adım Uygulama

#### 1. Proje Kurulumu

Öncelikle, React projenizi oluşturun ve gerekli bağımlılıkları kurun.

```bash
npx create-react-app movie-booking-store
cd movie-booking-store
npm install tailwindcss
npx tailwindcss init
```

`tailwind.config.js` dosyasını aşağıdaki gibi yapılandırın:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`src/index.css` dosyasını aşağıdaki gibi güncelleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 2. Bileşenler ve State Yönetimi

`src` klasöründe `components` adlı bir klasör oluşturun ve `MovieBookingSystem.js` ve `Seat.js` dosyalarını ekleyin.

**`Seat.js`**

```jsx
import React from 'react';

class Seat extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.seat.id);
  };

  render() {
    const { row, column, isBooked } = this.props.seat;
    const seatClass = isBooked ? 'bg-red-500' : 'bg-green-500';

    return (
      <div
        className={`seat ${seatClass} m-2 p-4 text-white`}
        onClick={this.handleClick}
      >
        {row}{column}
      </div>
    );
  }
}

export default Seat;
```

**`MovieBookingSystem.js`**

```jsx
import React from 'react';
import Seat from './Seat';

class MovieBookingSystem extends React.Component {
  state = {
    seats: [
      { id: 1, row: 'A', column: 1, isBooked: false },
      { id: 2, row: 'A', column: 2, isBooked: false },
      // Diğer koltuk nesneleri
    ],
    selectedSeats: []
  };

  handleSeatClick = (seatId) => {
    this.setState(prevState => {
      const updatedSeats = prevState.seats.map(seat =>
        seat.id === seatId ? { ...seat, isBooked: !seat.isBooked } : seat
      );
      const selectedSeats = updatedSeats.filter(seat => seat.isBooked);
      return { seats: updatedSeats, selectedSeats };
    });
  };

  handleBooking = () => {
    console.log("Seçilen Koltuklar:", this.state.selectedSeats);
    // API çağrısı veya diğer işlemler
  };

  render() {
    return (
      <div className="movie-booking-system">
        <div className="seats grid grid-cols-5 gap-4">
          {this.state.seats.map(seat => (
            <Seat
              key={seat.id}
              seat={seat}
              onClick={this.handleSeatClick}
            />
          ))}
        </div>
        <div className="summary mt-4">
          <h2>Seçilen Koltuklar</h2>
          <ul>
            {this.state.selectedSeats.map(seat => (
              <li key={seat.id}>{seat.row}{seat.column}</li>
            ))}
          </ul>
          <button
            className="booking-button mt-2 p-2 bg-blue-500 text-white"
            onClick={this.handleBooking}
          >
            Rezervasyonu Tamamla
          </button>
        </div>
      </div>
    );
  }
}

export default MovieBookingSystem;
```

#### 3. Uygulamayı Test Etme

Projeyi çalıştırarak uygulamanızı test edin:

```bash
npm start
```

Koltukların seçilebildiğini ve seçilen koltukların özet bölümünde listelendiğini doğrulayın. Rezervasyon butonuna tıkladığınızda konsolda seçilen koltukların göründüğünden emin olun.

