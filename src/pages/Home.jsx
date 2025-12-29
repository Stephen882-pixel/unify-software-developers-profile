// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/sections/Hero';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ServicesPreview from '../components/sections/ServicesPreview';
import PortfolioPreview from '../components/sections/PortfolioPreview';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <PortfolioPreview />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;