import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Whitespace from './components/Whitespace/whitespace';
import EnquiryForm from './components/Form/EnquiryForm';
import Carousel from './components/Carousel/Carousel';
import Home from './screens/Home';
import ServicesContainer from './components/Ourservices/serviceContainer';
import Training from './components/Dropdowns/Ourtraining/training';
import AbroadEducation from './components/Dropdowns/Abroadeducation/abroadeduction';
import Immigration from './components/Dropdowns/Immigrations/immigrations';
import Travel from './components/Dropdowns/Travel/travel';
import CountryInfo from './components/Dropdowns/Country/country';
import Testimonials from './screens/Testimonials';


function App() {
  const slides = [
    {
      image : 'https://files.oaiusercontent.com/file-tlvsT4tf01ZI1MwIZ4Zu921M?se=2024-09-22T12%3A14%3A51Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Ddfe511ee-5a93-41b4-b395-fd69497180b6.webp&sig=KE1Dt9BPyoFjG%2BtX%2BkggjZybbrVSjd0lPQxLjk0nWm0%3D',
      text: 'Contact Us Made Easy',
    },
    {
      image : 'https://www.thespruce.com/thmb/1Z6J',
      text: 'Enquiry Form',
    },
    {
      image : 'https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg',
      text: 'Study Abroad',
    },
  ];
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element = {
            <Home />
          } />
          <Route path="/enquiry" element = {
           <> 
            <Carousel slides={slides}/>
            <Whitespace />
            <EnquiryForm />
            <Whitespace />
            </>
          }>
          </Route>
          <Route path="/services" element = {
            <ServicesContainer />
          } />
          <Route path="/immigration-services" element = {
            <Training />
          } />
          <Route path="/work-visas" element = {
            <AbroadEducation />
          } />
          <Route path="/hajj-umrah" element = {
            <Immigration />
          } />
          <Route path="/travel" element = {
            <Travel />
          } />
          <Route path='/usa' element = {
            <CountryInfo country='usa' />
          } />
          <Route path='/canada' element = {
            <CountryInfo country='canada' />
          } />
          <Route path='/australia' element = {
            <CountryInfo country='australia' />
          } />
          <Route path='/europe' element = {
            <CountryInfo country='europe' />
          } />
          <Route path='/new-zealand' element = {
            <CountryInfo country='new zealand' />
          } />
          <Route path='/germany' element = {
            <CountryInfo country='germany' />
          } />
          <Route path='/singapore' element = {
            <CountryInfo country='singapore' />
          } />
          <Route path='/united-kingdom' element = {
            <CountryInfo country='united kingdom' />
          } />
          <Route path='/france' element = {
            <CountryInfo country='france' />
          } />
          <Route path='/ireland' element = {
            <CountryInfo country='ireland' />
          } />
          <Route path='/testimonials' element = {
            <Testimonials />
          } />
          <Route path='/contact' element = {
            <> 
            <Carousel slides={slides}/>
            <Whitespace />
            {/* <EnquiryForm />
            <Whitespace /> */}
            </>
          } />
        </Routes>
        <Whitespace />
        <EnquiryForm />
        <Whitespace />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
