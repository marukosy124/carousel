import React from 'react';
import Carousel from './components/Carousel/Carousel';

const renderImages = () => {
  const images = [];
  for (let i = 0; i < 8; i++) {
    images.push(
      <div>
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
  return (
    <div
      style={{
        maxWidth: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 64,
      }}
    >
      <Carousel show={3}>{renderImages()}</Carousel>
    </div>
  );
};

export default App;
