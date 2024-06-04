# Hata Sınırları Kullanım Durumları

## Giriş

Hata sınırları, bir React uygulamasında meydana gelen hataları zarif bir şekilde ele alarak, tüm uygulamanın çökmesini önler. Hata sınırlarını kullanarak, kullanıcı deneyimini geliştirebilir ve beklenmeyen hatalar meydana geldiğinde bile işlevsel bir kullanıcı arayüzü (UI) sağlayabilirsiniz.

Bu eğitimde, hata sınırlarının çeşitli kullanım durumlarını detaylandıracağız. Verilen PDF dokümanından elde edilen bilgileri, eleştirel bir yaklaşımla değerlendirerek kapsamlı bir şekilde ele alacağız. Her bölümde kod parçacıkları ile konuyu destekleyeceğiz.

## Hata Sınırlarının Kullanım Durumları

1. **Üçüncü Taraf Bileşenler**
   Üçüncü taraf bileşenleri entegre ederken, beklenmedik senaryolar veya veriler nedeniyle hatalar meydana gelebilir. Bu bileşenleri hata sınırları ile sarmak, çöküşleri önler ve bir yedek UI (kullanıcı arayüzü) görüntülemenizi sağlar.

   ```jsx
   import React, { Component } from 'react';

   class ErrorBoundary extends Component {
     constructor(props) {
       super(props);
       this.state = { hasError: false };
     }

     static getDerivedStateFromError(error) {
       return { hasError: true };
     }

     componentDidCatch(error, errorInfo) {
       // Hata kaydı yapma
       console.log(error, errorInfo);
     }

     render() {
       if (this.state.hasError) {
         return <h1>Bir hata meydana geldi.</h1>;
       }

       return this.props.children; 
     }
   }

   // Kullanım
   <ErrorBoundary>
     <ThirdPartyComponent />
   </ErrorBoundary>
   ```

2. **Ağ Hatalarını Yönetmek**
   Bileşenleriniz sunucudan veri çekmeye bağımlı olduğunda, ağ hataları UI sorunlarına veya çökmelere neden olabilir. Bu bileşenlerin etrafına hata sınırları yerleştirmek, kullanıcılara anlamlı bir mesaj veya yedek bir UI göstermenizi sağlar.

   ```jsx
   class DataFetcher extends React.Component {
     state = { data: null, error: null };

     componentDidMount() {
       fetch('/api/data')
         .then(response => response.json())
         .then(data => this.setState({ data }))
         .catch(error => this.setState({ error }));
     }

     render() {
       if (this.state.error) {
         throw new Error('Veri çekme hatası');
       }

       return (
         <div>
           {this.state.data ? (
             <div>{this.state.data}</div>
           ) : (
             <div>Veri yükleniyor...</div>
           )}
         </div>
       );
     }
   }

   // Kullanım
   <ErrorBoundary>
     <DataFetcher />
   </ErrorBoundary>
   ```

3. **Öngörülemeyen Kullanıcı Girdileri**
   Kullanıcılar, uygulamanızın beklemediği girdiler sağlayabilir ve bu, render sırasında veya bileşen mantığında hatalara yol açabilir. Hata sınırları, bu hataları yakalamanıza ve yardımcı bir mesaj veya yedek bir UI görüntülemenize yardımcı olur.

   ```jsx
   class UserInputComponent extends React.Component {
     state = { userInput: '' };

     handleChange = (event) => {
       try {
         this.setState({ userInput: event.target.value });
       } catch (error) {
         throw new Error('Geçersiz kullanıcı girdisi');
       }
     };

     render() {
       if (this.state.error) {
         throw new Error('Render hatası');
       }

       return (
         <input
           type="text"
           value={this.state.userInput}
           onChange={this.handleChange}
         />
       );
     }
   }

   // Kullanım
   <ErrorBoundary>
     <UserInputComponent />
   </ErrorBoundary>
   ```

4. **Dinamik Bileşen Yükleme**
   Dinamik ithalatlar veya kod bölme işlemleri kullanarak bileşenleri yüklerken, bileşenin doğru yüklenmemesi veya render sırasında bir hata ile karşılaşma riski vardır. Bir hata sınırı bu hataları yakalayabilir ve yedek bir UI gösterebilir.

   ```jsx
   import React, { Suspense, lazy } from 'react';

   const LazyComponent = lazy(() => import('./LazyComponent'));

   // Kullanım
   <ErrorBoundary>
     <Suspense fallback={<div>Yükleniyor...</div>}>
       <LazyComponent />
     </Suspense>
   </ErrorBoundary>
   ```

5. **Bileşen Hatalarını İzole Etmek**
   Büyük uygulamalarda, bileşen hatalarını izole etmek ve bunların tüm uygulamayı etkilemesini önlemek genellikle iyi bir fikirdir. Hata sınırlarını bileşen hiyerarşisinin farklı seviyelerine stratejik olarak yerleştirerek hataları yakalayabilir ve işlevsel bir kullanıcı arayüzünü koruyabilirsiniz.

   ```jsx
   <ErrorBoundary>
     <Header />
     <ErrorBoundary>
       <MainContent />
     </ErrorBoundary>
     <Footer />
   </ErrorBoundary>
   ```

6. **Hata Kaydı ve İzleme**
   Hata sınırları, hataları kaydetme ve bileşen yığını gibi ek bilgileri yakalama fırsatı sağlar. Bu bilgiler, bir izleme hizmetine gönderilebilir veya daha fazla analiz için saklanabilir ve uygulamanızdaki sorunları belirlemenize ve düzeltmenize yardımcı olur.

   ```jsx
   componentDidCatch(error, errorInfo) {
     // Hataları bir izleme servisine gönderme
     logErrorToService(error, errorInfo);
   }
   ```

## Sonuç

Hata sınırları, React uygulamalarında hataları yönetmenin ve kullanıcı deneyimini iyileştirmenin güçlü bir yoludur. Bu eğitimde, hata sınırlarının çeşitli kullanım durumlarını detaylandırdık ve her biri için yapılandırılmış kod parçacıkları sunduk. Hata sınırlarını stratejik olarak kullanarak, uygulamanızın daha kararlı ve kullanıcı dostu olmasını sağlayabilirsiniz.
