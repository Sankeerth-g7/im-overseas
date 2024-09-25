import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './serviceCard.css'; // Import CSS for styling

const ServiceCard = ({ title, details, image, path }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handler to navigate to the provided path
  const handleNavigation = () => {
    if (path) {
      window.scrollTo(0, 0);
      navigate(path); // Navigate to the provided path
    }
  };

  return (
    <div className="service-card" onClick={handleNavigation} style={{ cursor: 'pointer' }}>
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button className="read-more" onClick={handleNavigation}>
        READ MORE
      </button>
    </div>
  );
};

export default ServiceCard;
