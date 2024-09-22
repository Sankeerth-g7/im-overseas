// src/pages/HomePage/Home.js

import React from 'react';
import HeroSection from '../components/Hero/heroSection';
import Banner from '../components/Banner/banner';
import AboutUs from '../components/Aboutus/aboutUs';
import ServicesContainer from '../components/Ourservices/serviceContainer';
import WhyChooseUs from '../components/chooseus/WhyChooseUs';
import ServicesOfferedContainer from '../components/Weoffer/screen';
import Banner2 from '../components/Banner2/Banner';
import StudyDestinations from '../components/Countryflag/country';
import StudyAbroadPrograms from '../components/Studyabroad/Studyabroad';
import Whitespace from '../components/Whitespace/whitespace';
import TestimonialSection from '../components/Testimonials/testimonials';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Banner />
      <AboutUs />
      <Whitespace />
      <ServicesContainer />
      <Whitespace />
      <WhyChooseUs />
      <Whitespace />
      <ServicesOfferedContainer />
      <Whitespace />
      <Banner2
        backgroundUrl='https://thumbs.dreamstime.com/b/globalized-world-digital-globe-glowing-lines-connecting-different-countries-cities-globalized-world-digital-globe-278117182.jpg'
        heading='Flexible Admission Requirements'
        subtext="We understand that every student's journey is unique. That's why we offer study options with low IELTS scores or even without IELTS requirements."
        buttonText='Apply Now'
        buttonUrl='https://example.com'
      />
      <Whitespace />
      <StudyDestinations />
      <Whitespace />
      <StudyAbroadPrograms />
      <Whitespace />
      <Banner2
        backgroundUrl='https://c8.alamy.com/comp/HMYK1Y/world-map-with-connection-lines-HMYK1Y.jpg'
        heading='Network'
        subtext='Our extensive network includes over 1500+ partner universities across 20+ countries, offering a wide range of programs to suit various academic and professional interests.'
        buttonText='Explore Now'
        buttonUrl='https://example.com'
      />
      <Whitespace />
      <TestimonialSection />
      <Whitespace />
    </>
  );
};

export default Home;
