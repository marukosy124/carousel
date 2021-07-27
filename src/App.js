import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import './app.css';

const renderImages = () => {
  const images = [];
  for (let i = 0; i < 8; i++) {
    images.push(
      <div key={i}>
        <div style={{ padding: 8 }}>
          <img
            src="https://via.placeholder.com/300x300"
            alt="placeholder"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    );
  }
  return images;
};

const App = () => {
  const [itemsToShow, setItemsToShow] = useState(2);
  // const [checkStatus, setCheckStatus] = useState({1: });

  const renderRadioButtonss = () => {
    const radioButtons = [];
    for (let i = 1; i <= 4; i++) {
      radioButtons.push(
        <label className="checkbox-label" key={i}>
          <input
            type="radio"
            name={i}
            checked={false}
            onChange={(e) => setItemsToShow(e.target.name)}
          />
          {i}
        </label>
      );
    }
    return radioButtons;
  };

  return (
    <>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 64,
        }}
      >
        <Carousel show={itemsToShow}>{renderImages()}</Carousel>
      </div>
      {renderRadioButtonss()}
    </>
  );
};

export default App;
