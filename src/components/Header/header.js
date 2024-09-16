import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="banner">
        <div className="banner-text">
          Welcome to IM Overseas
        </div>
        <Link to="/enquiry" className="enquiry-button">
          Enquiry Now
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
              <li><Link to="/training">Our Training</Link></li>
              <li><Link to="/abroad-education">Abroad Education</Link></li>
              <li><a href="/immigration">Immigration</a></li>
              <li><a href="/travel">Travel</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="/study-destinations">Study Destinations</a>
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
