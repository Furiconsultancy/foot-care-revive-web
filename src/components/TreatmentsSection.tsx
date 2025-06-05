
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TreatmentsSection: React.FC = () => {
  const handleBookConsultation = () => {
    window.open('https://wa.me/918886735004', '_blank');
  };

  return (
    <section id="treatments" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-4">
            Understanding Reconstructive Diabetic Foot Care
          </h2>
          <p className="text-lg text-clinic-text/80 max-w-3xl mx-auto">
            Comprehensive treatment approaches to restore function, prevent complications, 
            and improve quality of life for diabetic patients
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-clinic-bg/20 shadow-lg border-none rounded-lg overflow-hidden animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="font-playfair text-2xl text-clinic-text">
                What is Reconstructive Diabetic Foot Care?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-clinic-text/80 leading-relaxed mb-4">
                Reconstructive diabetic foot care is a specialized medical approach that focuses on 
                restoring the structure and function of feet affected by diabetic complications. 
                This comprehensive treatment combines surgical and non-surgical interventions to 
                address deformities, heal wounds, and prevent amputations.
              </p>
              <p className="text-clinic-text/80 leading-relaxed">
                Our approach emphasizes early intervention, personalized treatment plans, and 
                long-term foot health management to help patients maintain mobility and independence.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-clinic-bg/20 shadow-lg border-none rounded-lg overflow-hidden animate-fade-in">
            <CardHeader className="pb-2">
              <CardTitle className="font-playfair text-2xl text-clinic-text">
                Why Choose Reconstructive Care?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-clinic-text/80 leading-relaxed space-y-2">
                <li>• <strong>Prevent Amputations:</strong> Advanced techniques to save limbs and preserve function</li>
                <li>• <strong>Restore Mobility:</strong> Correct deformities that affect walking and balance</li>
                <li>• <strong>Accelerate Healing:</strong> Specialized wound care and offloading procedures</li>
                <li>• <strong>Pain Relief:</strong> Address underlying causes of foot pain and discomfort</li>
                <li>• <strong>Long-term Solutions:</strong> Preventive strategies to avoid future complications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-clinic-bg rounded-lg p-8 mb-12">
          <h3 className="font-playfair text-3xl font-bold text-clinic-text mb-8 text-center">
            Advanced Treatment Options
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair text-xl font-semibold text-clinic-text mb-3">
                Surgical Reconstruction
              </h4>
              <p className="text-clinic-text/80 text-sm leading-relaxed">
                Advanced surgical techniques including tendon transfers, joint fusions, 
                and bone corrections to restore proper foot alignment and function.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair text-xl font-semibold text-clinic-text mb-3">
                Offloading Procedures
              </h4>
              <p className="text-clinic-text/80 text-sm leading-relaxed">
                Specialized surgeries to redistribute pressure away from problem areas, 
                promoting faster wound healing and preventing recurrence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair text-xl font-semibold text-clinic-text mb-3">
                Advanced Wound Therapy
              </h4>
              <p className="text-clinic-text/80 text-sm leading-relaxed">
                Cutting-edge treatments including negative pressure therapy, 
                hyperbaric oxygen, and biologics to enhance healing.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h3 className="font-playfair text-2xl font-bold text-clinic-text mb-6">
            Expert Care Tips for Diabetic Foot Health
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-clinic-text mb-3">Daily Prevention</h4>
              <ul className="text-clinic-text/80 space-y-2 text-sm">
                <li>• Inspect feet daily for cuts, sores, or changes</li>
                <li>• Keep feet clean and dry</li>
                <li>• Moisturize to prevent cracks (avoid between toes)</li>
                <li>• Trim nails carefully, straight across</li>
                <li>• Wear properly fitted shoes and clean socks</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-clinic-text mb-3">When to Seek Help</h4>
              <ul className="text-clinic-text/80 space-y-2 text-sm">
                <li>• Any open wounds or sores that don't heal</li>
                <li>• Changes in skin color or temperature</li>
                <li>• Persistent pain or numbness</li>
                <li>• Signs of infection (redness, swelling, warmth)</li>
                <li>• Changes in foot shape or structure</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-playfair text-2xl font-bold text-clinic-text mb-4">
            Ready to Take the Next Step?
          </h3>
          <p className="text-clinic-text/80 mb-6 max-w-2xl mx-auto">
            Don't wait for complications to worsen. Early intervention is key to successful 
            treatment and better outcomes. Schedule your consultation today.
          </p>
          <Button 
            onClick={handleBookConsultation}
            className="bg-clinic-accent hover:bg-clinic-bg text-white font-medium px-8 py-4 text-lg rounded-md transition-colors"
          >
            Book Your Consultation via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
