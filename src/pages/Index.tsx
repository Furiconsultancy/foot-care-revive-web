
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="font-sans text-clinic-text">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
