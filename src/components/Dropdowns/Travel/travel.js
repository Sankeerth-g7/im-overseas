import React from "react";
import "./travel.css";

const Travel = () => {
  return (
    <div className="travel-container">
      <h1 className="travel-title">Travel Services</h1>
      <h2 className="travel-subtitle">Seamless Travel Solutions with Im overseas</h2>
      <div className="travel-paragraph">
        At <strong>Im overseas</strong>, we go beyond just immigration. We provide a full suite of travel services to ensure your journey is smooth and stress-free, whether you're relocating for studies, work, or leisure. Let us handle the logistics so you can focus on the excitement of your new adventure.
      </div>

      <h3 className="travel-section-heading">Our Travel Services</h3>
      <ul className="travel-list">
        <li>
          <strong>Flight Bookings:</strong> Get the best deals on international and domestic flights with our travel experts. We ensure convenient schedules and competitive prices.
        </li>
        <li>
          <strong>Accommodation Assistance:</strong> From short-term stays to long-term housing solutions, we help you find the perfect place to stay in your destination country.
        </li>
        <li>
          <strong>Travel Insurance:</strong> Comprehensive travel insurance to protect you from unexpected events during your journey, including medical emergencies and trip cancellations.
        </li>
        <li>
          <strong>Visa and Documentation:</strong> Assistance with travel visas, transit visas, and all necessary documents for smooth travel.
        </li>
        <li>
          <strong>Airport Transfers:</strong> Pre-arranged transportation from the airport to your destination to ensure a hassle-free arrival.
        </li>
      </ul>

      <h3 className="travel-section-heading">Popular Travel Destinations</h3>
      <ul className="travel-list">
        <li>
          <strong>USA:</strong> Experience world-class cities like New York and Los Angeles or explore the vast natural beauty of the Grand Canyon and Yellowstone.
        </li>
        <li>
          <strong>Canada:</strong> Discover the cosmopolitan cities of Toronto and Vancouver or the stunning natural landscapes of Banff and the Canadian Rockies.
        </li>
        <li>
          <strong>Australia:</strong> From the Great Barrier Reef to the Outback, Australia offers unique adventures for travelers of all kinds.
        </li>
        <li>
          <strong>Europe:</strong> Visit iconic destinations like Paris, London, Rome, and Berlin, with easy access to multiple countries on one trip.
        </li>
        <li>
          <strong>Asia:</strong> Explore the cultural richness of countries like Japan, Thailand, and India with a blend of modern cities and historic landmarks.
        </li>
      </ul>

      <h3 className="travel-section-heading">Why Choose Us?</h3>
      <ul className="travel-list">
        <li>
          <strong>Expert Planning:</strong> Our experienced travel consultants help you plan every detail of your trip, ensuring a smooth and enjoyable experience.
        </li>
        <li>
          <strong>24/7 Support:</strong> Our team is available around the clock to assist you with any travel-related issues or emergencies.
        </li>
        <li>
          <strong>Customized Itineraries:</strong> Tailored travel plans based on your interests, budget, and schedule to make the most out of your trip.
        </li>
        <li>
          <strong>Affordable Rates:</strong> We work with top travel providers to offer you the best prices for flights, hotels, and travel insurance.
        </li>
      </ul>

      <div className="travel-paragraph">
        With <strong>Im overseas</strong>, you can travel with confidence, knowing that every detail is taken care of. Contact us today to start planning your next adventure!
      </div>
    </div>
  );
};

export default Travel;
