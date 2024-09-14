import React from 'react';
import './banner.css';
import loanImage from '../../assests/banner1.jpg';
import ieltsImage from '../../assests/banner2.jpg';
import hostelImage from '../../assests/banner3.jpg';
import transferImage from '../../assests/banner4.jpg';

const Banner = () => {
  return (
    <div className="services-section">
      <div className="service-item">
        <img src={loanImage} alt="Education Loan Assistance" />
        <p>Education Loan Assistance</p>
      </div>
      <div className="service-item">
        <img src={ieltsImage} alt="IELTS Training" />
        <p>IELTS Training</p>
      </div>
      <div className="service-item">
        <img src={hostelImage} alt="Hostel Support" />
        <p>Hostel Support</p>
      </div>
      <div className="service-item">
        <img src={transferImage} alt="IP Transfer Services" />
        <p>IP Transfer Services</p>
      </div>
    </div>
  );
};

export default Banner;
