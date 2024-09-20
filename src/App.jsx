// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [level, setLevel] = useState(0);
  const [size, setSize] = useState(100);
  const [isMaxLevel, setIsMaxLevel] = useState(false);


  // Image URLs
  const MooDengImage = 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobOgNAaRVNvqAD1f9E8yK9T9vIC.jpg'; // Replace with the MooDeng image URL
  const GodMooDengImg = 'https://medias.thansettakij.com/uploads/images/contents/w1024/2024/09/IWuL66JBVgA7Qvox2xw5.webp?x-image-process=style/lg-webp'; // Replace with your image URL
  const watermelonImage = 'https://m.media-amazon.com/images/I/71NrRvrGF2L._AC_UF1000,1000_QL80_.jpg';
  const pumpkinImage = 'https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Pumpkin-sliced-open-f2b8dde.jpg';
  const grassImage = 'https://cdn.britannica.com/00/128400-050-6BF86C0E/ryegrass.jpg';



  // Handle feeding
  const feedMooDeng = (foodValue) => {
    const newLevel = level + foodValue;
    if (newLevel >= 100) {
      setIsMaxLevel(true);
      setLevel(100); // Set level to maximum
      setSize(size + (100 - level) * 2); // Increase size only up to maximum level
    } else {
      setLevel(newLevel);
      setSize(size + foodValue * 2); // Increase size by a factor
    }
  };
  

  return (
    <div className="App">
      <h1>MooDeng Feeding</h1>
      <p>Level: {level}</p>
      
      <img
        src={isMaxLevel ? GodMooDengImg : MooDengImage}
        alt="MooDeng"
        style={{
          width: `${size}px`,
          height: 'auto',
        }}
      />
      
      <div>
        <button onClick={() => feedMooDeng(5)}>
          <img src={watermelonImage} alt="Watermelon" style={{ width: '30px', marginRight: '5px' }} />
          Feed Watermelon (5)
        </button>
        <button onClick={() => feedMooDeng(10)}>
          <img src={pumpkinImage} alt="Pumpkin" style={{ width: '30px', marginRight: '5px' }} />
          Feed Pumpkin (10)
        </button>
        <button onClick={() => feedMooDeng(20)}>
          <img src={grassImage} alt="Grass" style={{ width: '30px', marginRight: '5px' }} />
          Feed Grass (20)
        </button>
        
</div>


      {isMaxLevel && <p>The MooDeng has reached its maximum level!</p>}
    </div>
  );
}

export default App;
