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
        <Link to="/contact" className="enquiry-button">
          Enquiry Now
        </Link>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={require('../../assests/logo.png')} alt="IM Overseas Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
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
            <Link to="/study-destinations">Countries We Serve</Link>
            <ul className="dropdown-menu">
              <li><Link to="/luxembourg">Luxembourg</Link></li>
              <li><Link to="/new-zealand">New Zealand</Link></li>
              <li><Link to="/hungary">Hungary</Link></li>
              <li><Link to="/malta">Malta</Link></li>
              <li><Link to="/uae">UAE</Link></li>
              <li><Link to="/saudi">Saudi Arabia</Link></li>
              <li><Link to="/qatar">Qatar</Link></li>
              <li><Link to="/kuwait">Kuwait</Link></li>
              <li><Link to="/malaysia">Malaysia</Link></li>
              <li><Link to="/maldives">Maldives</Link></li>
              <li><Link to="/germany">Germany</Link></li>
              <li><Link to="/albania">Albania</Link></li>
              <li><Link to="/lithuania">Lithuania</Link></li>
              <li><Link to="/norway">Norway</Link></li>
              <li><Link to="/poland">Poland</Link></li>
            </ul>
          </li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
