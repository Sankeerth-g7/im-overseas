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
import GoogleMapEmbed from './components/Map/map';


function App() {
  const slides = [
    {
      image : 'https://files.oaiusercontent.com/file-ebrwkXOGQ1hqW8f7iTxPBMwK?se=2024-10-07T11%3A27%3A47Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D8a0c4b96-cbaa-4a3b-b62d-75427f7a7324.webp&sig=k0qaEvwLKI4Wlr0DdF9HANpcB64LdV%2BPtmZerGJXThQ%3D',
      text: 'Contact Us Made Easy',
    },
    {
      image : 'https://files.oaiusercontent.com/file-gF7HowoVhgWEf4DVikiHK9ey?se=2024-10-07T12%3A01%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D704ac146-9278-487e-bde2-17658b672ead.webp&sig=Ti%2BXNlh2lNN8DNRQVio3BL7cILvQVeMg5PJD6vlmWv4%3D',
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
          <Route path="/" element={<Home />} />
          <Route
            path="/enquiry"
            element={
              <>
                <Carousel slides={slides} />
                <Whitespace />
                <EnquiryForm />
                <Whitespace />
              </>
            }
          />
          <Route path="/services" element={<ServicesContainer />} />
          <Route path="/immigration-services" element={<Training />} />
          <Route path="/work-visas" element={<AbroadEducation />} />
          <Route path="/hajj-umrah" element={<Immigration />} />
          <Route path="/travel" element={<Travel />} />
          {/* Existing country routes */}

          <Route path="/luxembourg" element={<CountryInfo country="luxembourg" />} />
          <Route path="/new-zealand" element={<CountryInfo country="new zealand" />} />
          <Route path="/hungary" element={<CountryInfo country="hungary" />} />
          <Route path="/malta" element={<CountryInfo country="malta" />} />
          <Route path="/uae" element={<CountryInfo country="uae" />} />
          <Route path="/saudi" element={<CountryInfo country="saudi" />} />
          <Route path="/qatar" element={<CountryInfo country="qatar" />} />
          <Route path="/kuwait" element={<CountryInfo country="kuwait" />} />
          <Route path="/malaysia" element={<CountryInfo country="malaysia" />} />
          <Route path="/maldives" element={<CountryInfo country="maldives" />} />
          <Route path="/germany" element={<CountryInfo country="germany" />} />
          <Route path="/albania" element={<CountryInfo country="albania" />} />
          <Route path="/lithuania" element={<CountryInfo country="lithuania" />} />
          <Route path="/norway" element={<CountryInfo country="norway" />} />
          <Route path="/poland" element={<CountryInfo country="poland" />} />
          <Route path='/testimonials' element = {<Testimonials />} />
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
        <GoogleMapEmbed />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
