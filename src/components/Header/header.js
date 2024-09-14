import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-text">
          Welcome to IM Overseas
        </div>
        <a href="/enquiry" className="enquiry-button">
          Enquiry Now
        </a>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={require('../../assests/logo.png')} alt="IM Overseas Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li className="dropdown">
            <a href="/services">Services</a>
            <ul className="dropdown-menu">
              <li><a href="/our-training">Our Training</a></li>
              <li><a href="/abroad-education">Abroad Education</a></li>
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
