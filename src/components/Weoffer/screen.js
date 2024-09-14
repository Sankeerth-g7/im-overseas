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
    title: 'University Shortlisting',
    description:
      'Personalized assistance in identifying and selecting universities that match your academic profile, career goals, and financial situation.',
    image: image1,
  },
  {
    title: 'Admissions',
    description:
      'Expert advice on preparing and submitting university applications, including help with writing personal statements, obtaining recommendation letters, and meeting application deadlines.',
    image: image2,
  },
  {
    title: 'Visa Guidance',
    description:
      'Comprehensive support for navigating the visa application process, including documentation, interview preparation, and compliance with visa requirements.',
    image: image3,
  },
  {
    title: 'Education Loan Assistance',
    description:
      'Help in securing education loans from banks or financial institutions to fund your studies, including guidance on loan eligibility, application procedures, and repayment plans.',
    image: image4,
  },
  {
    title: 'Scholarship Applications',
    description:
      'Assistance in finding and applying for scholarships, grants, and other financial aid opportunities to reduce the cost of your education.',
    image: image5,
  },
  {
    title: 'Tuition-Free and Low-Cost Education Options',
    description:
      'Information on studying in countries where education is free or has low tuition fees, especially for students from the EU/EEA.',
    image: image6,
  },
];

const ServicesOfferedContainer = () => {
  return (
    <div className="services-container2">
      <h2 className="services-title2">We offer</h2>
      <p className="services-subtitle2">
        Our educational consultancy services are designed to guide you through the entire process of planning your education abroad. We offer:
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
