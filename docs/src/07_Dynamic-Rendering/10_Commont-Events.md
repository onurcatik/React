# Common Events ve Kullanımı

## Giriş

React, tarayıcıların yerel olay sistemini saran sentetik bir olay sistemi sağlar. Bu, farklı tarayıcılarda uyumluluğu ve tutarlı bir arayüzü garanti eder. Bu eğitimde, React'te en yaygın kullanılan ve önemli olayları ele alacağız. Kod parçacıkları ve örneklerle, her olayın nasıl kullanılacağını ayrıntılı bir şekilde açıklayacağız.

## 1. Fare (Mouse) Olayları

### onClick

Bir fare tıklaması gerçekleştiğinde tetiklenir. 

```jsx
import React from 'react';

function ClickExample() {
  const handleClick = () => {
    alert('Element clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default ClickExample;
```

### onDoubleClick

Bir fare çift tıklaması gerçekleştiğinde tetiklenir.

```jsx
import React from 'react';

function DoubleClickExample() {
  const handleDoubleClick = () => {
    alert('Element double-clicked!');
  };

  return (
    <button onDoubleClick={handleDoubleClick}>
      Double Click me
    </button>
  );
}

export default DoubleClickExample;
```

### onMouseEnter ve onMouseLeave

Fare imleci elementin üzerine geldiğinde ve ayrıldığında tetiklenir.

```jsx
import React, { useState } from 'react';

function MouseEnterLeaveExample() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: isHovered ? 'yellow' : 'white' }}
    >
      Hover over me
    </div>
  );
}

export default MouseEnterLeaveExample;
```

### onMouseDown ve onMouseUp

Fare butonu basıldığında ve bırakıldığında tetiklenir.

```jsx
import React from 'react';

function MouseDownUpExample() {
  const handleMouseDown = () => {
    console.log('Mouse button pressed down');
  };

  const handleMouseUp = () => {
    console.log('Mouse button released');
  };

  return (
    <button onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      Press and Release
    </button>
  );
}

export default MouseDownUpExample;
```

## 2. Klavye (Keyboard) Olayları

### onKeyDown

Bir tuşa basıldığında tetiklenir.

```jsx
import React from 'react';

function KeyDownExample() {
  const handleKeyDown = (event) => {
    console.log(`Key pressed: ${event.key}`);
  };

  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}

export default KeyDownExample;
```

### onKeyPress

Bir tuşa basılıp bırakıldığında tetiklenir. Özellikle harfler ve sayılar için kullanışlıdır.

```jsx
import React from 'react';

function KeyPressExample() {
  const handleKeyPress = (event) => {
    console.log(`Key pressed: ${event.key}`);
  };

  return (
    <input type="text" onKeyPress={handleKeyPress} />
  );
}

export default KeyPressExample;
```

### onKeyUp

Bir tuş bırakıldığında tetiklenir.

```jsx
import React from 'react';

function KeyUpExample() {
  const handleKeyUp = (event) => {
    console.log(`Key released: ${event.key}`);
  };

  return (
    <input type="text" onKeyUp={handleKeyUp} />
  );
}

export default KeyUpExample;
```

## 3. Form Olayları

### onChange

Bir input, select veya textarea değeri değiştiğinde tetiklenir.

```jsx
import React, { useState } from 'react';

function ChangeExample() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input type="text" value={value} onChange={handleChange} />
  );
}

export default ChangeExample;
```

### onSubmit

Bir form gönderildiğinde tetiklenir.

```jsx
import React from 'react';

function SubmitExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitExample;
```

### onFocus ve onBlur

Bir element odaklandığında ve odağını kaybettiğinde tetiklenir.

```jsx
import React from 'react';

function FocusBlurExample() {
  const handleFocus = () => {
    console.log('Input focused');
  };

  const handleBlur = () => {
    console.log('Input blurred');
  };

  return (
    <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
  );
}

export default FocusBlurExample;
```

## 4. Dokunma (Touch) Olayları

### onTouchStart, onTouchMove ve onTouchEnd

Dokunma noktası yerleştirildiğinde, hareket ettiğinde ve kaldırıldığında tetiklenir.

```jsx
import React from 'react';

function TouchExample() {
  const handleTouchStart = () => {
    console.log('Touch started');
  };

  const handleTouchMove = () => {
    console.log('Touch moved');
  };

  const handleTouchEnd = () => {
    console.log('Touch ended');
  };

  return (
    <div 
      onTouchStart={handleTouchStart} 
      onTouchMove={handleTouchMove} 
      onTouchEnd={handleTouchEnd}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightblue' }}
    >
      Touch me
    </div>
  );
}

export default TouchExample;
```

## 5. UI Olayları

### onScroll

Bir elementin kaydırma çubuğu kaydırıldığında tetiklenir.

```jsx
import React from 'react';

function ScrollExample() {
  const handleScroll = (event) => {
    console.log('Element scrolled', event.target.scrollTop);
  };

  return (
    <div 
      onScroll={handleScroll} 
      style={{ overflowY: 'scroll', height: '100px' }}
    >
      <div style={{ height: '300px' }}>
        Scroll me
      </div>
    </div>
  );
}

export default ScrollExample;
```

## 6. Sürükleme (Drag) Olayları

### onDrag, onDragEnd ve onDrop

Bir element sürüklendiğinde, sürükleme işlemi tamamlandığında ve bir hedefe bırakıldığında tetiklenir.

```jsx
import React from 'react';

function DragDropExample() {
  const handleDrag = () => {
    console.log('Element being dragged');
  };

  const handleDragEnd = () => {
    console.log('Drag operation ended');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log('Element dropped');
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div 
      draggable 
      onDrag={handleDrag} 
      onDragEnd={handleDragEnd}
      style={{ width: '100px', height: '100px', backgroundColor: 'coral', margin: '20px' }}
    >
      Drag me
    </div>
    <div 
      onDrop={handleDrop} 
      onDragOver={handleDragOver}
      style={{ width: '200px', height: '200px', backgroundColor: 'lightgray', margin: '20px' }}
    >
      Drop here
    </div>
  );
}

export default DragDropExample;
```

## 7. Pano (Clipboard) Olayları

### onCopy, onCut ve onPaste

Bir içerik bir elementten kopyalandığında, kesildiğinde ve yapıştırıldığında tetiklenir.

```jsx
import React from 'react';

function ClipboardExample() {
  const handleCopy = () => {
    console.log('Content copied');
  };

  const handleCut = () => {
    console.log('Content cut');
  };

  const handlePaste = () => {
    console.log('Content pasted');
  };

  return (
    <div 
      contentEditable 
      onCopy={handleCopy} 
      onCut={handleCut} 
      onPaste={handlePaste}
      style={{ border: '1px solid black', padding: '10px' }}
    >
      Copy, Cut, or Paste here
    </div>
  );
}

export default ClipboardExample;
```

