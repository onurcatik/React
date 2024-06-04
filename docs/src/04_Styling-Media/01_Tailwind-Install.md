# Tailwind CSS'in React (Vite) Uygulamasına Kurulumu

## Giriş

Bu eğitimde, bir React uygulamasına Tailwind CSS'in nasıl kurulacağını adım adım açıklayacağız. Bu süreçte, Vite yapılandırma aracını kullanacağız. Eğitim boyunca, yazılım geliştirme alanındaki titizlik ve standartlara uygun, iyi yapılandırılmış kod parçacıkları ile örnekler sunulacaktır.

## Tailwind CSS'in Kurulumu

### 1. Tailwind CSS ve Bağımlılıklarının Kurulumu

İlk adım olarak, Tailwind CSS ve gerekli bağımlılıklarını npm kullanarak projeye dahil etmeliyiz. Terminali açarak aşağıdaki komutu çalıştırın:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Bu komut, `tailwindcss`, `postcss` ve `autoprefixer` paketlerini geliştirici bağımlılıkları olarak (development dependencies) projeye ekleyecektir.

### 2. Yapılandırma Dosyalarının Oluşturulması

Yapılandırma dosyalarını oluşturmak için aşağıdaki komutu çalıştırın:

```bash
npx tailwindcss init -p
```

Bu komut, `tailwind.config.cjs` ve `postcss.config.cjs` dosyalarını projeye ekleyecektir. Bu dosyalar Tailwind ve PostCSS yapılandırmaları için kullanılacaktır.

### 3. Kaynak Yollarının Yapılandırılması

Tailwind'in projedeki dosyaları tanıması için `tailwind.config.cjs` dosyasını açın ve `content` bölümüne aşağıdaki yolları ekleyin:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Bu yapılandırma, Tailwind'in `index.html` ve `src` klasörü altındaki tüm JavaScript ve TypeScript dosyalarını izlemesini sağlar.

### 4. Tailwind Yönergelerinin Eklenmesi

Tailwind CSS'i kullanabilmek için `./src/index.css` dosyasına aşağıdaki Tailwind direktiflerini ekleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Bu direktifler, Tailwind'in temel stillerini, bileşenlerini ve yardımcı sınıflarını projenize dahil eder.

### 5. Vite Sunucusunun Başlatılması

Vite geliştirme sunucusunu başlatmak için terminalde aşağıdaki komutu çalıştırın:

```bash
npm run dev
```

Bu komut, Vite sunucusunu başlatarak projenizi yerel sunucuda çalıştıracaktır. Başarılı bir şekilde çalıştırıldığında, terminalde benzer bir mesaj görmelisiniz:

```
  VITE v2.7.10  ready in 300ms
  ➜  Local:   http://localhost:3000/
  ➜  Network: use `--host` to expose
```

### 6. Tailwind CSS ile Yazmaya Başlama

Artık Tailwind CSS sınıflarını kullanarak stil vermeye başlayabilirsiniz. Örneğin, `App.js` dosyanıza aşağıdaki kodu ekleyin:

```jsx
function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold bg-red-500 text-center">
        Merhaba, React ve Tailwind!
      </h1>
    </div>
  );
}

export default App;
```

Bu örnekte, `h1` etiketine Tailwind CSS sınıfları eklenerek büyük, kalın, kırmızı arka planlı ve ortalanmış bir başlık oluşturulmuştur.

