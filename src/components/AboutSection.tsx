
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <img 
              alt="Medical professional examining diabetic foot" 
              className="rounded-lg shadow-lg w-full h-auto object-cover" 
              src="/lovable-uploads/05d7ae45-04ae-450f-aa83-a23892a79ace.jpg" 
            />
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
            <Button 
              variant="outline" 
              className="border-clinic-accent text-clinic-text hover:bg-clinic-accent/10 mt-2"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
