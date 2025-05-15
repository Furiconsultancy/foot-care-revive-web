
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-clinic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-4">
            Our Services
          </h2>
          <p className="text-lg text-clinic-text/80 max-w-2xl mx-auto">
            Here are some key components of reconstructive diabetic foot care:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white shadow-lg border-none rounded-lg overflow-hidden animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="font-playfair text-2xl text-clinic-text">
                Foot Examination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-clinic-text/80 leading-relaxed">
                We conduct a comprehensive examination of the foot, focusing on its structure, 
                sensation, and blood supply. We assess pressure changes resulting from alterations 
                in joint and bone structure, as well as muscle changes associated with diabetes. 
                These tests are instrumental in preventing wounds and foot pain effectively. 
                Additionally, they aid in the development of treatment plans, including offloading 
                surgeries, to promote faster wound healing.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-none rounded-lg overflow-hidden animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="font-playfair text-2xl text-clinic-text">
                Wound Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-clinic-text/80 leading-relaxed">
                Each wound requires specialized care that extends beyond simple dressings. 
                Effective wound management entails a comprehensive understanding of the underlying cause. 
                Numerous innovative treatment modalities exist, including ointments, dressing materials, 
                topical oxygen therapy, and negative pressure therapy. These advanced approaches offer 
                promising solutions for optimizing wound healing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
