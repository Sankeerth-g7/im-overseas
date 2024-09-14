import React from 'react';
import ServiceCard from './serviceCard';
import './serviceContainer.css'; // Import CSS for styling

const servicesData = [
  {
    title: 'Training',
    details: [
      'IELTS Training: Achieve the required scores with our specialized IELTS training programs.',
      'Pre-Departure Orientation: Prepare for life abroad with our pre-departure sessions.',
      'Career Counseling: Receive expert advice on career planning and employment prospects.'
    ],
    image: require('../../assests/training.webp')
  },
  {
    title: 'Overseas Educational Services',
    details: [
      'University Shortlisting: Personalized assistance in selecting universities.',
      'Admissions Assistance: Step-by-step guidance through the application process.',
      'Education Loan Assistance: Support in securing education loans.'
    ],
    image: require('../../assests/oveseaseducation.webp')
  },
    {
        title: 'Immigration Services',
        details: [
            'Visa Guidance: Expert advice on visa applications and documentation.',
            'Permanent Residency: Assistance in obtaining permanent residency status.',
            'Citizenship Applications: Support in applying for citizenship.'
        ],
        image: require('../../assests/immigration.webp')
    },
    {
        title: 'Travel Services',
        details: [
            'Flight Bookings: Convenient booking services for international flights.',
            'Accommodation Assistance: Help in finding suitable accommodation abroad.',
            'Travel Insurance: Secure your journey with comprehensive travel insurance.'
        ],
        image: require('../../assests/travel.webp')
    }
];

const ServicesContainer = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} title={service.title} details={service.details} image={service.image} />
      ))}
    </div>
  );
};

export default ServicesContainer;
