import React from "react";
import './aboutUs.css';
import aboutImage from '../../assests/aboutus.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2 className="about-title">About Us</h2>
        <h3 className="about-subtitle">
          Achieving Excellence: Your Gateway to Global Education
        </h3>
        <p className="about-paragraph">
          Welcome to IM Overseas Global Education, your trusted partner in achieving global
          educational aspirations. With years of experience and a dedicated team of experts,
          we specialize in providing comprehensive support for students seeking to study,
          work, and live abroad. Our mission is to simplify the complex process of international
          education and immigration, making it accessible and achievable for everyone.
        </p>
        <p className="about-paragraph">
          At IM Overseas Global Education, we pride ourselves on our personalized approach. We understand that every
          student’s journey is unique, and we tailor our services to meet your individual needs and goals. From
          shortlisting universities and assisting with admissions to providing visa guidance and financial advice, we
          are with you every step of the way.
        </p>
        <p className="about-paragraph">
          Our extensive network includes over 1500+ partner universities across 20+ countries, offering a wide range of
          programs to suit various academic and professional interests. Whether you’re aiming for a diploma, bachelor’s,
          master’s, or medical degree, we have the resources and expertise to help you succeed.
        </p>
      </div>
      <div className="image-section">
        <img src={aboutImage} alt="About Us" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
