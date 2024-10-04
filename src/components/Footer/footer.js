import React from 'react';
import '@fontsource/poppins'; // Importing Poppins font
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="IM Overseas Logo" />
        {/* <p>
        IM OVERSEAS is your trusted partner for a range of immigration services.
        </p> */}
        <p className="footer-approval">
          IM OVERSEAS - 
          Approved by Govt. of India <br />
          License No. B-1253/TEL/PER/100 +/5/9576/2019
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/usa">Study Destinations</Link></li>
          <li><Link to="/contact">Support</Link></li>
          <li><Link to="/">Tie-Ups</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/contanct">Contact Us</Link></li>
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
