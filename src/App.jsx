import React, { useState } from 'react';
import logo from "./assets/wizaart.gif";
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scaleX, setScaleX] = useState(1);

  const handleClick = (e) => {

    const imageHalfWidth = 50;
    const imageHalfHeight = 50;
    const newPos = { x: e.clientX - imageHalfWidth, y: e.clientY - imageHalfHeight };
    const newScaleX = newPos.x < position.x ? 1 : -1;
    setScaleX(newScaleX);
    setPosition(newPos);
  };

  return (
    <div
      onClick={handleClick}
      className='container'
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          height: '100px',
          width: '100px',
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `scaleX(${scaleX})`,
          transition: 'left 1.5s, top 0.5s'
        }}
      />
    </div>
  );
}

export default App;
