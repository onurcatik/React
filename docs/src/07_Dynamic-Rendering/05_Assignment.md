# React ile Görev Yöneticisi Uygulaması Geliştirme

## Giriş

Bu eğitim, React kullanarak bir Görev Yöneticisi uygulaması oluşturmayı amaçlamaktadır. Uygulama, kullanıcıların görev ekleyip yönetebileceği, görevlerin durumunu değiştirebileceği ve görevleri silebileceği bir yapı sunacaktır. Eğitim boyunca, React bileşenlerinin, durum yönetiminin ve koşullu render işlemlerinin nasıl kullanılacağını öğreneceksiniz. Ayrıca, Tailwind CSS kullanarak uygulamanın stilini oluşturacağız.

## Gereksinimler

1. **React Uygulaması**: Bu uygulamayı React.js kullanarak oluşturmalısınız. Bileşenler, durum (state) ve özellikler (props) prensiplerini anlamalı ve kullanmalısınız.
2. **Görev Yöneticisi Bileşeni**: Görevlerin durumunu yönetecek ve görev yönetimi için gerekli işlevselliği sağlayacak bir Görev Yöneticisi bileşeni oluşturun.
3. **Görev Formu**: Kullanıcıların yeni görevler ekleyebileceği bir form dahil edin. Form, görev başlığı ve açıklaması için giriş alanları içermelidir.
4. **Görev Listesi**: Görev listesini `map` fonksiyonunu kullanarak dinamik olarak görüntüleyin. Her görev, bir kart veya liste öğesi olarak render edilmelidir. Görev başlığını ve açıklamasını gösterin.
5. **Koşullu Render**: Görevlerin farklı durumlarını ele almak için koşullu render işlemini uygulayın. Örneğin, görev olmadığında bir mesaj gösterin veya tamamlanmış görevler için "tamamlandı" durumu gösterin.
6. **Görev İşlemleri**: Görevleri tamamlanmış olarak işaretleme, görevleri silme veya görev bilgilerini güncelleme işlevselliği sağlayın.
7. **Tailwind CSS ile Stil Verme**: Uygulamanızın stilini Tailwind CSS kullanarak oluşturun. Çeşitli yardımcı sınıfları, özel stilleri ve duyarlı tasarım prensiplerini kullanarak çekici ve kullanıcı dostu bir arayüz oluşturun.

## Uygulama Adımları

### 1. Proje Yapısının Oluşturulması

Projenizi başlatmak için React uygulamasını oluşturun ve gerekli bağımlılıkları yükleyin:

```bash
npx create-react-app task-manager
cd task-manager
npm install tailwindcss
npx tailwindcss init
```

`tailwind.config.js` dosyasını aşağıdaki gibi yapılandırın:

```javascript
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
};
```

`src/index.css` dosyasını aşağıdaki gibi düzenleyin:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Görev Yöneticisi Bileşeninin Oluşturulması

Görev Yöneticisi bileşenini oluşturun ve gerekli durumu yönetin:

```javascript
import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = () => {
    setTasks([...tasks, { title: taskTitle, description: taskDescription, completed: false }]);
    setTaskTitle('');
    setTaskDescription('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Görev Yöneticisi</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Görev Başlığı" 
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="border p-2 mr-2"
        />
        <input 
          type="text" 
          placeholder="Görev Açıklaması" 
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="border p-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2 ml-2">Görev Ekle</button>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
    </div>
  );
};

const TaskList = ({ tasks, deleteTask, completeTask }) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500">Henüz eklenmiş bir görev yok.</p>;
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={`p-4 border-b ${task.completed ? 'bg-green-100' : ''}`}>
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => completeTask(index)} className="bg-green-500 text-white p-2 mr-2">
            {task.completed ? 'Tamamlandı' : 'Tamamla'}
          </button>
          <button onClick={() => deleteTask(index)} className="bg-red-500 text-white p-2">
            Sil
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskManager;
```

### 3. Stil Uygulama

Tailwind CSS'i kullanarak bileşenlerinizi stilize edin. Örneğin:

```javascript
<div className="p-4">
  <h1 className="text-2xl font-bold mb-4">Görev Yöneticisi</h1>
  <div className="mb-4">
    <input 
      type="text" 
      placeholder="Görev Başlığı" 
      value={taskTitle}
      onChange={(e) => setTaskTitle(e.target.value)}
      className="border p-2 mr-2"
    />
    <input 
      type="text" 
      placeholder="Görev Açıklaması" 
      value={taskDescription}
      onChange={(e) => setTaskDescription(e.target.value)}
      className="border p-2"
    />
    <button onClick={addTask} className="bg-blue-500 text-white p-2 ml-2">Görev Ekle</button>
  </div>
  <TaskList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} />
</div>
```

### 4. Proje Dağıtımı

Projenizi GitHub'a yükleyin ve bir canlı demo sağlayın. Aşağıdaki adımları izleyin:

1. GitHub'da yeni bir depo oluşturun.
2. Projenizi bu depoya yükleyin:

   ```bash
   git init
   git add .
   git commit -m "İlk commit"
   git remote add origin <depo-url'si>
   git push -u origin master
   ```

3. Netlify veya GitHub Pages kullanarak canlı demoyu sağlayın.

### Sonuç

Bu eğitim, React ve Tailwind CSS kullanarak bir Görev Yöneticisi uygulamasının nasıl geliştirileceğini kapsamaktadır. Bileşenlerin nasıl oluşturulacağını, durum yönetiminin nasıl yapılacağını ve koşullu render işlemlerinin nasıl uygulanacağını öğrendiniz. Ayrıca, uygulamanın stilini Tailwind CSS kullanarak nasıl oluşturabileceğinizi de gördünüz. Projeyi GitHub'da barındırarak ve bir canlı demo sağlayarak yazılım geliştirme standartlarına uygun bir şekilde tamamlamış oldunuz.
