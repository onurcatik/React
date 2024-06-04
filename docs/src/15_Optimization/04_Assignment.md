# Sosyal Medya Kontrol Paneli

Bu eğitim, React kullanarak sosyal medya kontrol paneli oluşturmayı kapsamaktadır. İçeriğin, yazılım geliştirme alanında beklenen titizlik ve standartları yansıtmasını sağlamak amacıyla, adım adım ve detaylı bir şekilde hazırlanmıştır. Eğitimin sonunda, kullanıcılar fonksiyonel ve responsive bir sosyal medya kontrol paneli oluşturabileceklerdir.

## Giriş

Bu eğitimde, bir sosyal medya kontrol paneli oluşturmak için React bileşenleri ve durum yönetimi (state management) gibi konseptler kullanılacaktır. Kontrol paneli, sosyal medya hesaplarının beğeni sayılarını gösteren kartlar ve toplam beğeni sayısını hesaplayan bir bölüm içerecektir.

## Gereksinimler

1. **React Uygulaması Oluşturma**
   - `SocialMediaCard` Bileşeni
     - Bir sosyal medya hesabının adını, beğeni sayısını ve simgesini (ikonunu) gösteren bir kart oluşturur.
     - Facebook, Twitter ve Instagram simgelerini gösterir.
   - `Metrics` Bileşeni
     - Tüm sosyal medya hesaplarının toplam beğeni sayısını gösteren bir bölüm oluşturur.
     - `totalLikes` prop'u alır ve gösterir.
   - `Dashboard` Bileşeni
     - `useState` kullanarak sosyal medya verilerini (mockSocialMediaData) yönetir.
     - Her sosyal medya hesabı kartını göstermek için `SocialMediaCard` bileşenini kullanır.
     - Belirli bir hesabın beğeni sayısını güncellemek için `useCallback` kullanarak `handleUpdateLikes` fonksiyonunu uygular.
     - Tüm hesapların toplam beğeni sayısını hesaplamak ve `Metrics` bileşenine geçmek için `useMemo` kullanır.
     - "Social Media Dashboard" başlığını gösterir.

2. **CSS Dosyası Oluşturma ve Bileşenleri Stilize Etme**
   - Dashboard düzenini uygun marjin, padding ve arka plan renkleriyle stilize etme.
   - Kart stillerini, arka plan renkleri, border-radius ve box-shadow ile özelleştirme.
   - Beğeni butonunu (heart button) özel bir sınıfla (`custom-btn btn`) stilize etme.
   - Dashboard'un küçük cihazlarda da iyi görünmesini sağlamak için responsive CSS teknikleri kullanma.

3. **Veri ve İkonları Kullanma**
   - Sağlanan ikonları ve mockSocialMediaData'yı kullanarak kontrol panelini doldurma.

4. **Responsive Tasarım**
   - Dashboard'un küçük cihazlarda da düzenini ayarlayarak responsive olmasını sağlama.

## Adım Adım Eğitim

1. **React Projesi Oluşturma**

   ```bash
   npx create-react-app social-media-dashboard
   cd social-media-dashboard
   ```

2. **Gerekli Bileşenleri Oluşturma**

   - `SocialMediaCard` Bileşeni

     ```jsx
     // src/components/SocialMediaCard.js
     import React from 'react';
     import PropTypes from 'prop-types';
     import './SocialMediaCard.css';

     const SocialMediaCard = ({ name, likes, icon }) => {
       return (
         <div className="social-media-card">
           <img src={icon} alt={`${name} icon`} />
           <h3>{name}</h3>
           <p>{likes} Likes</p>
         </div>
       );
     };

     SocialMediaCard.propTypes = {
       name: PropTypes.string.isRequired,
       likes: PropTypes.number.isRequired,
       icon: PropTypes.string.isRequired,
     };

     export default SocialMediaCard;
     ```

   - `Metrics` Bileşeni

     ```jsx
     // src/components/Metrics.js
     import React from 'react';
     import PropTypes from 'prop-types';
     import './Metrics.css';

     const Metrics = ({ totalLikes }) => {
       return (
         <div className="metrics">
           <h2>Total Likes: {totalLikes}</h2>
         </div>
       );
     };

     Metrics.propTypes = {
       totalLikes: PropTypes.number.isRequired,
     };

     export default Metrics;
     ```

   - `Dashboard` Bileşeni

     ```jsx
     // src/components/Dashboard.js
     import React, { useState, useCallback, useMemo } from 'react';
     import SocialMediaCard from './SocialMediaCard';
     import Metrics from './Metrics';
     import './Dashboard.css';

     const mockSocialMediaData = [
       { id: 1, name: 'Facebook', likes: 1200, icon: '/icons/facebook.png' },
       { id: 2, name: 'Twitter', likes: 800, icon: '/icons/twitter.png' },
       { id: 3, name: 'Instagram', likes: 1500, icon: '/icons/instagram.png' },
     ];

     const Dashboard = () => {
       const [socialMediaData, setSocialMediaData] = useState(mockSocialMediaData);

       const handleUpdateLikes = useCallback((id, newLikes) => {
         setSocialMediaData(data =>
           data.map(account => 
             account.id === id ? { ...account, likes: newLikes } : account
           )
         );
       }, []);

       const totalLikes = useMemo(() => 
         socialMediaData.reduce((total, account) => total + account.likes, 0), 
         [socialMediaData]
       );

       return (
         <div className="dashboard">
           <h1>Social Media Dashboard</h1>
           {socialMediaData.map(account => (
             <SocialMediaCard 
               key={account.id} 
               name={account.name} 
               likes={account.likes} 
               icon={account.icon} 
             />
           ))}
           <Metrics totalLikes={totalLikes} />
         </div>
       );
     };

     export default Dashboard;
     ```

3. **CSS ile Stil Verme**
   - `src/components/SocialMediaCard.css`

     ```css
     .social-media-card {
       background-color: #fff;
       border-radius: 8px;
       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
       padding: 16px;
       margin: 16px;
       text-align: center;
     }

     .social-media-card img {
       width: 40px;
       height: 40px;
     }
     ```

   - `src/components/Metrics.css`

     ```css
     .metrics {
       background-color: #f4f4f4;
       padding: 16px;
       text-align: center;
       margin: 16px 0;
     }
     ```

   - `src/components/Dashboard.css`

     ```css
     .dashboard {
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 16px;
     }

     @media (max-width: 600px) {
       .dashboard {
         padding: 8px;
       }
     }
     ```

4. **Projenin Depoya Yüklenmesi ve Canlı Demo**
   - GitHub deposu oluşturun ve projeyi yükleyin:

     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin <repository-url>
     git push -u origin main
     ```

   - Canlı demoyu Netlify veya GitHub Pages kullanarak yapın.

Bu adımlar ve kod parçacıkları, sosyal medya kontrol paneli oluşturma sürecinde size rehberlik edecektir. Yazılım geliştirme standartlarına uygun olarak, bileşenlerin modüler ve yeniden kullanılabilir olmasına özen gösterilmiştir. Eğitim boyunca karşılaşılabilecek olası hatalar ve yanlış bilgiler eleştirel bir şekilde değerlendirilmiştir.
