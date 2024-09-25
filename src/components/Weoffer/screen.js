import React from 'react';
import './screen.css';
import image1 from '../../assests/offer1.jpg';
import image2 from '../../assests/offer2.jpg';
import image3 from '../../assests/offer3.jpg';
import image4 from '../../assests/offer4.jpg';
import image5 from '../../assests/offer5.jpg';
import image6 from '../../assests/offer6.jpg';

const services = [
  {
    title: 'Skilled Manpower',
    description:
      'We provide highly skilled professionals including engineers, software developers, data analysts, and more to meet your business needs.',
    image: image1,
  },
  {
    title: 'Unskilled Manpower',
    description:
      'Offering reliable unskilled manpower for various sectors such as laborers, drivers, security guards, and warehouse helpers.',
    image: image2,
  },
  {
    title: 'Visa Assistance',
    description:
      'Expert guidance through the visa process, including work visa applications and documentation to ensure compliance with international requirements.',
    image: image3,
  },
  {
    title: 'Flight and Travel Services',
    description:
      'We assist with flight bookings and travel arrangements for employees to make their relocation hassle-free.',
    image: image4,
  },
  {
    title: 'Accommodation Assistance',
    description:
      'Help in securing suitable accommodation for workers abroad, ensuring they settle in comfortably and quickly.',
    image: image5,
  },
  {
    title: 'Work Permits and Legal Support',
    description:
      'Comprehensive support for obtaining work permits and legal documentation required for employment in Gulf and European countries.',
    image: image6,
  },
];

const ServicesOfferedContainer = () => {
  return (
    <div className="services-container2">
      <h2 className="services-title2">We Offer</h2>
      <p className="services-subtitle2">
        Our manpower services cater to the global job market, ensuring both employers and employees get the best solutions. We offer:
      </p>
      <div className="services-grid2">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title2">{service.title}</h3>
            <p className="service-description2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOfferedContainer;
