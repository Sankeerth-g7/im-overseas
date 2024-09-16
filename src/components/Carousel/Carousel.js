import React, { useState, useEffect } from 'react';
import './Carousel.css'; // You can style the component here

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: index === currentSlide ? 1 : 0,
          }}
        >
          <div className="carousel-text">{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
