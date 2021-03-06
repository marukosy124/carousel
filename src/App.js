import React, { useState } from 'react';
import Carousel from './components/Carousel/Carousel';
import './app.css';

const App = () => {
  const [itemsToShow, setItemsToShow] = useState(2);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 8; i++) {
      images.push(
        <div key={i}>
          <div className="img-container">
            <img src="https://via.placeholder.com/500x300" alt="placeholder" />
          </div>
        </div>
      );
    }
    return images;
  };

  const renderRadioButtonss = () => {
    const radioButtons = [];
    for (let i = 1; i <= 4; i++) {
      radioButtons.push(
        <label className="checkbox-label" key={i}>
          <input
            type="radio"
            name="radio"
            checked={itemsToShow === i && 'checked'}
            onChange={() => setItemsToShow(i)}
          />
          {i}
        </label>
      );
    }
    return radioButtons;
  };

  return (
    <>
      <div className="container">
        <Carousel show={itemsToShow}>{renderImages()}</Carousel>
      </div>
      <div className="radio-buttons-container">{renderRadioButtonss()}</div>
    </>
  );
};

export default App;
