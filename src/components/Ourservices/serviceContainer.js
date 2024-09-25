import React from 'react';
import ServiceCard from './serviceCard';
import './serviceContainer.css';

const servicesData = [
  {
    title: 'Manpower Recruitment',
    details: [
      'Skilled Manpower: Engineers, Digital Marketing, Software Development, Cyber Security, and more.',
      'Unskilled Manpower: Labour, Office Boys, Drivers, Store Keepers, Security Guards, and more.',
      'Job Search Assistance: Helping connect job seekers with employers in Gulf & European countries.'
    ],
    image: require('../../assests/training.webp'),
    path:'work-visas'
  },
  {
    title: 'Immigration Services',
    details: [
      'Visa Guidance: Expert advice on visa applications and documentation.',
      'Permanent Residency: Assistance in obtaining permanent residency status.',
      'Work Visa: Specialized in Gulf & European work visas for skilled and unskilled workers.'
    ],
    image: require('../../assests/immigration.webp'),
    path:'/immigration-services'
  },
  {
    title: 'Travel & Visa Assistance',
    details: [
      'Flight Bookings: Convenient booking services for international flights.',
      'Visa Services: Visit, tourist, and dependent visas for all countries.',
      'Accommodation Assistance: Help in finding suitable accommodation abroad.'
    ],
    image: require('../../assests/travel.webp'),
    path:'travel'
  },
  {
    title: 'Support Services',
    details: [
      'Passport Services: Assistance with new passport applications and renewals.',
      'Hajj & Umrah Services: Specialized support for pilgrimage travels.',
      'Financial Advice: Guidance on managing costs and financial planning for overseas work.'
    ],
    image: require('../../assests/oveseaseducation.webp'),
    path:'hajj-umrah'
  }
];


const ServicesContainer = () => {
  return (
    <>
    <div className='services-header'>
      <h1>Our Services</h1>
    </div>
    <div className="services-container">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} title={service.title} details={service.details} image={service.image} path={service.path} />
      ))}
    </div>
    </>
  );
};

export default ServicesContainer;
