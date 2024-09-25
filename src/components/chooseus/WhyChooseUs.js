import React, { useState } from 'react';
import './WhyChooseUs.css';
import image from '../../assests/chooseus.jpg';

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    {
      title: 'Extensive Industry Experience',
      details:
        'With years of experience in providing skilled and unskilled manpower, we understand the unique needs of businesses in the Gulf and Europe.'
    },
    {
      title: 'Global Reach',
      details:
        'Our network spans across Gulf & European countries, ensuring that we can provide manpower solutions that meet global standards.'
    },
    {
      title: 'Tailored Recruitment Solutions',
      details:
        'We focus on providing custom recruitment solutions for both skilled and unskilled roles, ensuring you get the right candidates for your needs.'
    },
    {
      title: 'End-to-End Support',
      details:
        'We offer end-to-end support, from visa assistance to travel arrangements, making the recruitment process hassle-free for both employers and workers.'
    },
    {
      title: 'Proven Success',
      details:
        'Our proven track record in placing manpower across various industries speaks to our reliability and commitment to both employers and job seekers.'
    }
  ];

  return (
    <div className="why-choose-us-container">
      <div className="image-section">
        <img src={image} alt="Why Choose Us" />
      </div>
      <div className="content-section">
        <h2>Why Choose Us?</h2>
        <p>
          At IM Overseas, we are dedicated to providing manpower services that
          help businesses grow and individuals achieve their career aspirations. Here’s why
          you should choose us:
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
                <p>{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
