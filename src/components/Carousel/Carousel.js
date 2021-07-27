import React, { useEffect, useState, useRef } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Carousel = (props) => {
  const { children, show } = props;

  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="arrow-button left-arrow" onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <div
          className="carousel-content-wrapper"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - show && (
          <button className="arrow-button right-arrow" onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
