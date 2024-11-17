import React, { useRef } from 'react';
import AboutUs from "../components/AboutUs/aboutus";
import ClientFeed from "../components/ClientFeed/clientFeed";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Prediction from "../components/Prediction/prediction";
import Tips from "../components/Tips/tips";

const Home = () => {
  const aboutRef = useRef(null);
  const tipsRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px'}}>
      <Header       
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        tipsRef={tipsRef}
        contactRef={contactRef}
      />
      <div style={{paddingTop:"10%"}} className="container" ref={homeRef}>
        <Hero/>
      </div>
      <section ref={aboutRef}>
        <AboutUs/>
      </section>
      <div className="container">
        <Prediction/>
      </div>
      <ClientFeed/>
      <div className="container" ref={tipsRef}>
        <Tips/>
      </div>
      <section ref={contactRef}>
        <Footer/> 
      </section>
    </div>
  );
};

export default Home;

