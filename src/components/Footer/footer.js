import React from 'react';
import '@fontsource/poppins'; // Importing Poppins font
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assests/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="RR Overseas Logo" />
        <p>
          At RR Overseas Global Education, we turn your global education dreams into reality. Let's embark on this exciting journey together!
        </p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </div>
      </div>
      
      <div className="footer-links">
        <h4>Visit Link</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Study Destinations</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Tie-Ups</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      
      <div className="footer-contact">
        <h4>Contact</h4>
        <p><FontAwesomeIcon icon={faPhone} /> +91 94943 45592</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> rrogeducation@gmail.com</p>
      </div>
      
      <div className="footer-branches">
        <h4>Branches</h4>
        <p>No:1-1-330, & 1-1-330/1, 1st Floor,<br />Opp Reliance Digital Mall,<br />Beside Bank of India,<br />Hyd Road, Vinayak Nagar,<br />Nizamabad, Telangana - 503002</p>
        <p>No: 5-5-31, Sri Ram Nagar Colony,<br />Beside Mafia clothes,<br />Priya Deluxe Road, Kamareddy,<br />Telangana - 503111</p>
      </div>
    </div>
  );
};

export default Footer;
