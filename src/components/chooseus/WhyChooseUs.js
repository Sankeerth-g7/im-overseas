import React, { useState } from 'react';
import './WhyChooseUs.css';
import image from '../../assests/chooseus.jpg';

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    { title: 'Expert Guidance',
      details: 'Our team of experienced counsellors will guide you through the entire process of choosing the right course and university, ensuring that you make an informed decision.' },

    { title: 'Extensive Network',
      details: 'We have a vast network of partner universities and colleges across the globe, giving you access to a wide range of courses and programs.' },

    { title: 'Comprehensive Services',
      details: 'From course selection and application to visa processing and pre-departure orientation, we offer a comprehensive range of services to help you at every step of your journey.' },

    { title: 'Student-Centric Approach',
      details: 'We put students at the center of everything we do, ensuring that their needs and preferences are always our top priority.' },

    { title: 'Proven Track Record',
      details: 'With a proven track record of success, we have helped hundreds of students achieve their dream of studying abroad, and we can help you too.' }
  ];

  return (
    <div className="why-choose-us-container">
      <div className="image-section">
        <img src={image} alt="Why Choose Us" />
      </div>
      <div className="content-section">
        <h2>Why Choose Us?</h2>
        <p>
          Choosing R R Overseas Global Education means opting for a partner committed
          to your success and dedicated to making your international education journey
          as seamless and rewarding as possible. Here’s why you should choose us:
        </p>
        <div className="accordion-section">
          {services.map((service, index) => (
            <div className="accordion-item" key={index}>
              <div
                className={`accordion-header ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {service.title}
                <span className="accordion-icon">{openIndex === index ? '-' : '+'}</span>
              </div>
              <div
                className={`accordion-body ${openIndex === index ? 'open' : ''}`}
                style={{ maxHeight: openIndex === index ? '200px' : '0px' }}
              >
                <p> {service.details} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;