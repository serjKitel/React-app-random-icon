import React, { useState } from 'react';
import './App.css'

// const RandomIconButton = () => {
//   const [icon, setIcon] = useState(null);

//   const getRandomIcon = () => {
//     const icons = [
//       'fa-heart', 'fa-star', 'fa-thumbs-up', 'fa-smile', // добавьте здесь больше иконок по вашему выбору
//     ];
//     const randomIndex = Math.floor(Math.random() * icons.length);
//     return icons[randomIndex];
//   };

//   const handleClick = () => {
//     setTimeout(() => {
//       const randomIcon = getRandomIcon();
//       setIcon(randomIcon);
//     }, 3000);
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
//       <button onClick={handleClick}>Show Random Icon</button>
//       {icon && <i className={`fas ${icon}`} style={{ fontSize: '2rem', marginLeft: '1rem' }}></i>}
//     </div>
//   );
// };

// export default RandomIconButton;


const RandomIconButton = () => {
  const [icon, setIcon] = useState(null);

  const getRandomIcon = () => {
    const icons = [
      'fa-heart', 'fa-star', 'fa-thumbs-up', 'fa-smile', 'fa-coffee', 'fa-globe',
      'fa-moon', 'fa-bicycle', 'fa-camera', 'fa-music', 'fa-plane', 'fa-umbrella'
    ];
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
  };

  const handleClick = () => {
    setTimeout(() => {
      const randomIcon = getRandomIcon();
      setIcon(randomIcon);
    }, 3000);
  };

  return (
    <div className="container">
      <button className="button" onClick={handleClick}>Show Random Icon</button>
      {icon && <i className={`fas ${icon} icon`}></i>}
    </div>
  );
};

export default RandomIconButton;