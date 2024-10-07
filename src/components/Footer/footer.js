import React from 'react';
import '@fontsource/poppins'; // Importing Poppins font
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assests/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  
  // Function to scroll to the top when any link is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="IM Overseas Logo" />
        <p className="footer-approval">
          IM OVERSEAS - 
          Approved by Govt. of India <br />
          License No. B-1253/TEL/PER/100+/5/9576/2019
        </p>
        <div className="social-icons">
          <a href="https://facebook.com/IM_Overseas"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://instagram.com/i.m_overseas_"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>

      <div className="footer-links">
        <h4>Visit Link</h4>
        <ul>
          <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
          <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
          <li><Link to="/usa" onClick={scrollToTop}>Study Destinations</Link></li>
          <li><Link to="/contact" onClick={scrollToTop}>Support</Link></li>
          <li><Link to="/" onClick={scrollToTop}>Tie-Ups</Link></li>
          <li><Link to="/" onClick={scrollToTop}>Blog</Link></li>
          <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h4>Contact</h4>
        <p><FontAwesomeIcon icon={faPhone} /> +91 90638 50488</p>
        <p><FontAwesomeIcon icon={faPhone} /> +91 98856 26777</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Imoverseasmanpower@gmall.com</p>
      </div>

      <div className="footer-branches">
        <h4>Branches</h4>
        <p>2nd Floor, Naaz Complex<br />Opposite Dharam shala,<br />Sircilla road,<br />Kamareddy, Telangana - 503111</p>
      </div>
    </div>
  );
};

export default Footer;
