import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="banner">
        <div className="banner-text">
          Welcome to IM Overseas - Manpower Services for Gulf & Europe
        </div>
        <Link to="/enquiry" className="enquiry-button">
          Enquire Now
        </Link>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={require('../../assests/logo.png')} alt="IM Overseas Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li className="dropdown">
            <Link to="/services">
              Services
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/immigration-services">Immigration Services</Link></li>
              <li><Link to="/work-visas">Work Visas (Gulf & Europe)</Link></li>
              <li><Link to="/travel">Flight Tickets</Link></li>
              <li><Link to="/hajj-umrah">Hajj & Umrah Services</Link></li>
              {/* <li><Link to="/passport-services">Passport Services</Link></li> */}
            </ul>
          </li>
          <li className="dropdown">
            <a href="/study-destinations">Countries We Serve</a>
            <ul className="dropdown-menu">
            <li><a href="/usa">USA</a></li>
              <li><a href="/canada">Canada</a></li>
              <li><a href="/australia">Australia</a></li>
              <li><a href="/europe">Europe</a></li>
              <li><a href="/new-zealand">New Zealand</a></li>
              <li><a href="/germany">Germany</a></li>
              <li><a href="/singapore">Singapore</a></li>
              <li><a href="/united-kingdom">United Kingdom</a></li>
              <li><a href="/france">France</a></li>
              <li><a href="/ireland">Ireland</a></li>
            </ul>
          </li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
