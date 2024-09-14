import React from 'react';
import './serviceCard.css'; // Import CSS for styling

const ServiceCard = ({ title, details, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3>{title}</h3>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button className="read-more">READ MORE</button>
    </div>
  );
};

export default ServiceCard;
