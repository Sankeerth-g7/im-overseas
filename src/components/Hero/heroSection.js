import React, { useRef } from 'react';
import './heroSection.css';

const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  // Handle left and right arrow scroll
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };

  // Handle drag-to-scroll
  const handleMouseDown = (e) => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.isDown = true;
    scrollContainer.startX = e.pageX - scrollContainer.offsetLeft;
    scrollContainer.scrollLeftStart = scrollContainer.scrollLeft; // Save starting scroll position
  };

  const handleMouseMove = (e) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer.isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - scrollContainer.startX) * 2; // Adjust scroll sensitivity
    scrollContainer.scrollLeft = scrollContainer.scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.isDown = false;
  };

  return (
    <div className="hero-section">
      <div
        className="hero-container"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="hero-slide" style={{ backgroundImage: `url(${require('../../assests/backgroundimg1.jpg')})` }}>
        <div className="hero-overlay"></div> 
          <div className="hero-text">
            <h1>Seamless Pathways to Your International Success!</h1>
          </div>
        </div>
        <div className="hero-slide" style={{ backgroundImage: `url(${require('../../assests/backgroungimg2.png')})` }}>
        <div className="hero-overlay"></div> 
          <div className="hero-text">
            <h2>Your Global Education, Our Expert Guidance!</h2>
          </div>
        </div>
      </div>
      <div className="hero-arrows">
        <button className="arrow left-arrow" onClick={scrollLeft}>&lt;</button>
        <button className="arrow right-arrow" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default HeroSection;
