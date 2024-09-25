import React from "react";
import './aboutUs.css';
import aboutImage from '../../assests/aboutus.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2 className="about-title">About IM Overseas</h2>
        <h3 className="about-subtitle">
          Your Trusted Partner in Global Manpower Solutions
        </h3>
        <p className="about-paragraph">
          IM Overseas is your reliable source for manpower recruitment and immigration services, catering to skilled and unskilled workers worldwide. With a dedicated team and years of experience, we specialize in providing efficient and streamlined services for all your manpower and visa needs.
        </p>
        <p className="about-paragraph">
          From immigration services and Gulf & Europe work visas to handling flight tickets, Hajj & Umrah services, passport services, and labour work visas, we ensure a hassle-free experience tailored to your specific requirements. Our goal is to make the process simple, quick, and effective for both businesses and individuals.
        </p>
        <p className="about-paragraph">
          IM Overseas also provides job search services for various skilled roles like engineering, digital marketing, software development, and more, along with opportunities for unskilled labour, office boys, drivers, and security personnel. We are committed to delivering workforce solutions that meet international standards.
        </p>
      </div>
      <div className="image-section">
        <img src={aboutImage} alt="About Us" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
