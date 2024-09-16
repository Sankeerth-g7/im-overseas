import React from "react";
import "./country.css";

const CountryInfo = ({ country }) => {
  return (
    <div className="country-info-container">
      <h1 className="country-info-title">Discover {country}</h1>
      <h2 className="country-info-subtitle">Explore the Best of {country}</h2>
      
      <div className="country-info-section">
        <h3 className="country-info-heading">Culture and Heritage</h3>
        <p className="country-info-paragraph">
          {country} boasts a rich cultural heritage with traditions that span centuries. From its historic landmarks to its vibrant festivals, {country} offers a unique cultural experience that will captivate your senses. Discover the diverse cultures within {country} and immerse yourself in its traditions.
        </p>
      </div>
      
      <div className="country-info-section">
        <h3 className="country-info-heading">Travel and Tourism</h3>
        <p className="country-info-paragraph">
          Traveling to {country} provides an opportunity to explore breathtaking landscapes, world-famous attractions, and picturesque scenery. Whether you are interested in visiting bustling cities or serene countryside, {country} has something for every traveler. Explore the best travel destinations and create unforgettable memories in {country}.
        </p>
      </div>

      <div className="country-info-section">
        <h3 className="country-info-heading">Business Opportunities</h3>
        <p className="country-info-paragraph">
          {country} offers numerous business opportunities across various sectors. The country's thriving economy and favorable business environment make it an ideal location for investment and entrepreneurship. Learn about the business landscape in {country} and discover potential opportunities for growth and success.
        </p>
      </div>

      <div className="country-info-section">
        <h3 className="country-info-heading">Education and Learning</h3>
        <p className="country-info-paragraph">
          {country} is home to some of the world's top educational institutions and research centers. Whether you are seeking undergraduate, graduate, or professional education, {country} provides a wide range of educational opportunities to help you achieve your academic goals. Explore the top universities and educational programs available in {country}.
        </p>
      </div>

      <div className="country-info-section">
        <h3 className="country-info-heading">Living in {country}</h3>
        <p className="country-info-paragraph">
          Living in {country} offers a high quality of life with access to excellent healthcare, diverse communities, and a range of amenities. Find out what it's like to live in {country}, including information on housing, healthcare, and lifestyle. Discover how {country} can be the perfect place for you to call home.
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;
