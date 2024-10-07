import React, {useState} from 'react';
import './country.css';

const countries = [
  { name: 'Luxembourg', flag: 'https://www.countryflags.com/wp-content/uploads/luxembourg-flag-png-large.png' },
  { name: 'New Zealand', flag: 'https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-large.png' },
  { name: 'Hungary', flag: 'https://www.countryflags.com/wp-content/uploads/hungary-flag-png-large.png' },
  { name: 'Malta', flag: 'https://www.countryflags.com/wp-content/uploads/malta-flag-png-large.png' },
  { name: 'UAE', flag: 'https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png' },
  { name: 'Saudi Arabia', flag: 'https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png' },
  { name: 'Qatar', flag: 'https://www.countryflags.com/wp-content/uploads/qatar-flag-png-large.png' },
  { name: 'Kuwait', flag: 'https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-large.png' },
  { name: 'Malaysia', flag: 'https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-large.png' },
  { name: 'Maldives', flag: 'https://www.countryflags.com/wp-content/uploads/maldives-flag-png-large.png' },
  { name: 'Germany', flag: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png' },
  { name: 'Albania', flag: 'https://www.countryflags.com/wp-content/uploads/albania-flag-png-large.png' },
  { name: 'Lithuania', flag: 'https://www.countryflags.com/wp-content/uploads/lithuania-flag-png-large.png' },
  { name: 'Norway', flag: 'https://www.countryflags.com/wp-content/uploads/norway-flag-png-large.png' },
  { name: 'Poland', flag: 'https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png' }
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
        <h1>Choose Your Destination</h1>
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
