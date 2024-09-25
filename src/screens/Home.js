
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
      heading='Global Manpower Solutions'
      subtext="Providing skilled and unskilled labor services for Gulf & Europe. We assist with visa processing, travel arrangements, and work permits."
      buttonText='Explore Services'
      buttonUrl='https://www.imoverseasmanpower.com'
    />
      <Whitespace />
      <StudyDestinations />
      <Whitespace />
      <StudyAbroadPrograms />
      <Whitespace />
      <Banner2
        backgroundUrl='https://c8.alamy.com/comp/HMYK1Y/world-map-with-connection-lines-HMYK1Y.jpg'
        heading='Global Manpower Network'
        subtext='We connect skilled and unskilled manpower to over 20+ countries, providing employment opportunities in various sectors, including Gulf and Europe regions.'
        buttonText='Explore Opportunities'
        buttonUrl='https://example.com'
      />
      <Whitespace />
      <TestimonialSection />
      <Whitespace />
    </>
  );
};

export default Home;
