
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TreatmentsSection from '../components/TreatmentsSection';
import DoctorsSection from '../components/DoctorsSection';
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
      <TreatmentsSection />
      <DoctorsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
