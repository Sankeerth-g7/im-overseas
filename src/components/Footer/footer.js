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
        <img src={logo} alt="IM Overseas Logo" />
        <p>
        IM OVERSEAS is your trusted partner for a range of immigration services. From work visas to study abroad programs, we offer tailored solutions to help you achieve your global aspirations.
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
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/usa">Study Destinations</a></li>
          <li><a href="/contact">Support</a></li>
          <li><a href="/">Tie-Ups</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/contanct">Contact Us</a></li>
        </ul>
      </div>
      
      <div className="footer-contact">
        <h4>Contact</h4>
        <p><FontAwesomeIcon icon={faPhone} /> +91 90638 50488</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Imoverseasmanpower@gmall.com</p>
      </div>
      
      <div className="footer-branches">
        <h4>Branches</h4>
        <p>2nd Floor, Naaz Complex<br />Opposite Dharam shala,<br />Sircilla road,<br />Kamareddy, Telangana - 503002</p>
      </div>
    </div>
  );
};

export default Footer;
