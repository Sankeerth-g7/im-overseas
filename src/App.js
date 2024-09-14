import React from 'react';
import Header from './components/Header/header';
import HeroSection from './components/Hero/heroSection';
import Banner from './components/Banner/banner';
import AboutUs from './components/Aboutus/aboutUs';
import ServicesContainer from './components/Ourservices/serviceContainer';
import WhyChooseUs from './components/chooseus/WhyChooseUs';
import ServicesOfferedContainer from './components/Weoffer/screen';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Banner />
      <AboutUs />
      <ServicesContainer />
      <WhyChooseUs />
      <ServicesOfferedContainer />
    </div>
  );
}

export default App;
