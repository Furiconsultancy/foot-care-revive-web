
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Medical professional examining diabetic foot" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-clinic-accent/10 rounded-lg"></div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-6">
              Our Vision
            </h2>
            <p className="text-clinic-text/80 mb-6 leading-relaxed">
              Transforming Lives, One Step at a Time: Our Vision for Reconstructive Diabetic Foot Care Clinic 
              is to be a beacon of hope and excellence in providing comprehensive care, empowering 
              individuals with diabetes to overcome foot complications. Through innovative treatments, 
              compassionate support, and patient education, we aim to prevent amputations, promote healing, 
              and enhance the quality of life for every patient we serve. Together, we stride towards a 
              future where every diabetic foot finds renewed health, mobility, and lasting well-being.
            </p>
            <Button variant="outline" className="border-clinic-accent text-clinic-text hover:bg-clinic-accent/10 mt-2">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
