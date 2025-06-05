
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const handleBookConsultation = () => {
    window.open('https://wa.me/918886735004', '_blank');
  };

  return (
    <section id="home" className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Medical care background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col items-center text-center animate-fade-in relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-clinic-text mb-6 leading-tight">
            Reconstructive Diabetic Foot Care
          </h1>
          <p className="text-xl md:text-2xl text-clinic-text/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert care for diabetic foot complications with advanced reconstructive treatments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleBookConsultation}
              className="bg-clinic-accent hover:bg-clinic-bg text-white font-medium px-8 py-6 text-lg rounded-md transition-colors shadow-lg hover:shadow-xl"
            >
              Book a Consultation
            </Button>
            <div className="flex items-center space-x-2 text-clinic-text/60">
              <span className="w-2 h-2 bg-clinic-accent rounded-full animate-pulse"></span>
              <span className="text-sm">Available 24/7</span>
            </div>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-clinic-bg/20 p-6 rounded-lg">
              <h3 className="font-playfair text-lg font-semibold text-clinic-text mb-2">
                Expert Surgeons
              </h3>
              <p className="text-clinic-text/70 text-sm">
                Highly qualified plastic surgeons specializing in diabetic foot care
              </p>
            </div>
            <div className="bg-clinic-bg/20 p-6 rounded-lg">
              <h3 className="font-playfair text-lg font-semibold text-clinic-text mb-2">
                Advanced Treatments
              </h3>
              <p className="text-clinic-text/70 text-sm">
                State-of-the-art reconstructive procedures and wound care
              </p>
            </div>
            <div className="bg-clinic-bg/20 p-6 rounded-lg">
              <h3 className="font-playfair text-lg font-semibold text-clinic-text mb-2">
                Preventive Care
              </h3>
              <p className="text-clinic-text/70 text-sm">
                Comprehensive prevention strategies to avoid complications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
