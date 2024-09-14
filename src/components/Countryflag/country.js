import React, {useState} from 'react';
import './country.css';

const countries = [
  { name: 'USA', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag-United-States-of-America-300x300.webp' },
  { name: 'Canada', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_Canada_Pantone.svg-300x300.png' },
  { name: 'Australia', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_New_Zealand.svg-300x300.png' },
  { name: 'Europe', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_Europe.svg.webp' },
  { name: 'United Kingdom', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_the_United_Kingdom_1-2.svg-300x300.png' },
  { name: 'New Zealand', flag: "https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_New_Zealand.svg-300x300.png" },
  { name: 'Singapore', flag: "https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_Singapore.svg-300x300.webp" },
  { name: 'Germany', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_Germany.svg-300x300.webp' },
  { name: 'France', flag: "https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_France.svg-300x300.png" },
  { name: 'Ireland', flag: 'https://rroverseasglobaleducation.com/wp-content/uploads/2024/05/Flag_of_Ireland-1-300x300.png' }
];

const StudyDestinations = () => {
    const [hoverIndex, setHoverIndex] = useState(null); // Track the index of the hovered card
    const [transformStyle, setTransformStyle] = useState({});
  
    const handleMouseMove = (e, index) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position within the card
      const y = e.clientY - rect.top; // Y position within the card
  
      // Calculate rotation angles based on mouse position
      const rotateX = ((y / rect.height) - 0.5) * 20; // Rotation on the X-axis
      const rotateY = ((x / rect.width) - 0.5) * -20; // Rotation on the Y-axis
  
      // Apply the transformation style only to the hovered card
      if (index === hoverIndex) {
        setTransformStyle({
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
        });
      }
    };
  
    const handleMouseEnter = (index) => {
      setHoverIndex(index); // Set the current card as hovered
    };
  
    const handleMouseLeave = () => {
      setHoverIndex(null); // Reset hover index
      setTransformStyle({
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' // Reset transform when the mouse leaves
      });
    };
  
    return (
      <div className="study-destinations-container">
        <h1>Study Destinations</h1>
        <div className="study-destinations-grid">
          {countries.map((country, index) => (
            <div
              key={index}
              className="country-card"
              style={hoverIndex === index ? transformStyle : {}}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={country.flag} alt={country.name} className="flag-image" />
              <p>{country.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default StudyDestinations;
