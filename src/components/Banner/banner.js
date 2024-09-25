import React from 'react';
import './banner.css';
import visaImage from '../../assests/Visa.webp';
import hajjImage from '../../assests/Hajj.webp';
import passportImage from '../../assests/Passport.webp';
import labourImage from '../../assests/banner4.jpg';

const Banner = () => {
  return (
    <div className="services-section">
      <div className="service-item">
        <img src={visaImage} alt="Work & Tourist Visa Services" />
        <p>Work & Tourist Visa Services</p>
      </div>
      <div className="service-item">
        <img src={hajjImage} alt="Hajj & Umrah Services" />
        <p>Hajj & Umrah Services</p>
      </div>
      <div className="service-item">
        <img src={passportImage} alt="Passport Services" />
        <p>Passport Services</p>
      </div>
      <div className="service-item">
        <img src={labourImage} alt="Skilled & Unskilled Labour Services" />
        <p>Skilled & Unskilled Labour Services</p>
      </div>
    </div>
  );
};

export default Banner;
