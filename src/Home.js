import React from 'react';
import './styles.scss'
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import About from './component/About';
import PrimaryInfo from './component/PrimaryInfo';
import Gallery from './component/Gallery';
// import Portfolio from './component/Portfolio/Portfolio';
// import MapContainer from './component/Map';
import Google from './component/Google';
// import Contact from './component/Contact';
import Footer from './component/Footer';
// import jhonData from './component/jhonData';
import propertyData from './component/propertyData';


export const Home = () => (
  <div className="body_wrapper">
      <Navbar propertyData={propertyData}/>
      <Banner  propertyData={propertyData}/>
      <About aClass="about_area" propertyData={propertyData}/>
      <PrimaryInfo aClass="primary_info" propertyData={propertyData}/>
      
      <Gallery wClass="work_area" propertyData={propertyData}/>
      <Google propertyData={propertyData}/>
      {/* <Portfolio/> */}
      {/* <Skill/>
      <Testimonial/>
      <Clientslogo/>
      <Blog/> */}
      {/* <MapContainer  propertyData={propertyData}/> */}
      {/* <Contact jhonData={jhonData}/> */}
      <Footer propertyData={propertyData}/>
  </div>
)

