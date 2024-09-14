import React from 'react';
import './Banner.css';

const Banner = ({ backgroundUrl, heading, subtext, buttonText, buttonUrl }) => {
  return (
    <div className="banner2" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <div className="banner-overlay2" />
      <div className="banner-content2">
        <h1 className="banner-heading2">{heading}</h1>
        <p className="banner-subtext2">{subtext}</p>
        <a href={buttonUrl} className="banner-button2">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Banner;
