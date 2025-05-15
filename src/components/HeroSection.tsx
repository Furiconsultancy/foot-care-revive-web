
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center animate-fade-in">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-clinic-text mb-4">
          Reconstructive Diabetic Foot Care
        </h1>
        <p className="text-xl md:text-2xl text-clinic-text/80 mb-8 max-w-3xl">
          Expert care for diabetic foot complications
        </p>
        <Button className="bg-clinic-accent hover:bg-clinic-bg text-white font-medium px-8 py-6 text-lg rounded-md transition-colors">
          Book a Consultation
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
