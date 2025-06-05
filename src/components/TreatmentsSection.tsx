
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Activity, Zap } from 'lucide-react';

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
            <div className="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Medical team consultation"
                className="w-full h-full object-cover"
              />
            </div>
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
            <div className="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Foot care examination"
                className="w-full h-full object-cover"
              />
            </div>
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
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-clinic-accent/20 rounded-full mb-4 mx-auto">
                <Shield className="w-6 h-6 text-clinic-accent" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-clinic-text mb-3 text-center">
                Surgical Reconstruction
              </h4>
              <p className="text-clinic-text/80 text-sm leading-relaxed text-center">
                Advanced surgical techniques including tendon transfers, joint fusions, 
                and bone corrections to restore proper foot alignment and function.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-clinic-accent/20 rounded-full mb-4 mx-auto">
                <Activity className="w-6 h-6 text-clinic-accent" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-clinic-text mb-3 text-center">
                Offloading Procedures
              </h4>
              <p className="text-clinic-text/80 text-sm leading-relaxed text-center">
                Specialized surgeries to redistribute pressure away from problem areas, 
                promoting faster wound healing and preventing recurrence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-clinic-accent/20 rounded-full mb-4 mx-auto">
                <Zap className="w-6 h-6 text-clinic-accent" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-clinic-text mb-3 text-center">
                Advanced Wound Therapy
              </h4>
              <p className="text-clinic-text/80 text-sm leading-relaxed text-center">
                Cutting-edge treatments including negative pressure therapy, 
                hyperbaric oxygen, and biologics to enhance healing.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Daily foot care"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <h3 className="font-playfair text-2xl font-bold text-clinic-text">
                Daily Prevention
              </h3>
            </div>
            <ul className="text-clinic-text/80 space-y-2 text-sm">
              <li>• Inspect feet daily for cuts, sores, or changes</li>
              <li>• Keep feet clean and dry</li>
              <li>• Moisturize to prevent cracks (avoid between toes)</li>
              <li>• Trim nails carefully, straight across</li>
              <li>• Wear properly fitted shoes and clean socks</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                alt="Medical consultation"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <h3 className="font-playfair text-2xl font-bold text-clinic-text">
                When to Seek Help
              </h3>
            </div>
            <ul className="text-clinic-text/80 space-y-2 text-sm">
              <li>• Any open wounds or sores that don't heal</li>
              <li>• Changes in skin color or temperature</li>
              <li>• Persistent pain or numbness</li>
              <li>• Signs of infection (redness, swelling, warmth)</li>
              <li>• Changes in foot shape or structure</li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-clinic-bg to-clinic-accent/30 p-8 rounded-lg">
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
