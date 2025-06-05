import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Stethoscope, Users } from 'lucide-react';
const TreatmentsSection: React.FC = () => {
  const handleBookConsultation = () => {
    window.open('https://wa.me/918886735004', '_blank');
  };
  const treatments = [{
    icon: Stethoscope,
    title: "Wound Assessment & Management",
    description: "Comprehensive evaluation and specialized treatment of diabetic foot wounds using advanced healing techniques.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    icon: Shield,
    title: "Infection Control",
    description: "Advanced antibiotic therapy and surgical debridement to prevent and treat serious foot infections.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    icon: Heart,
    title: "Vascular Assessment",
    description: "Evaluation of blood circulation and vascular interventions to improve healing and prevent complications.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    icon: Users,
    title: "Reconstructive Surgery",
    description: "Advanced surgical techniques including skin grafts, flaps, and microsurgery for complex foot reconstruction.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }];
  return <section id="treatments" className="py-16 md:py-24 bg-gradient-to-br from-clinic-bg/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-4">
            Advanced Treatment Options
          </h2>
          <p className="text-lg text-clinic-text/80 max-w-3xl mx-auto py-0">
            Our comprehensive approach to diabetic foot care combines cutting-edge medical technology 
            with compassionate, personalized treatment plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {treatments.map((treatment, index) => {
          const IconComponent = treatment.icon;
          return <Card key={index} className="bg-white shadow-lg border-none rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={treatment.image} alt={treatment.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-clinic-accent/90 p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-playfair text-xl text-clinic-text">
                    {treatment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-clinic-text/80 leading-relaxed">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-clinic-accent to-clinic-bg rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Take the Next Step?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
            Don't let diabetic foot complications affect your quality of life. 
            Our expert team is here to provide personalized care and treatment.
          </p>
          <Button onClick={handleBookConsultation} className="bg-white text-clinic-text hover:bg-gray-100 font-semibold px-6 py-3 text-base md:text-lg rounded-lg transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">Contact on WhatsApp</Button>
        </div>

        {/* Expert Tips Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-clinic-text mb-4">
              Expert Tips for Diabetic Foot Care
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-clinic-text mb-3">Daily Inspection</h4>
              <p className="text-clinic-text/80 text-sm">Check your feet daily for cuts, blisters, redness, or swelling.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-clinic-text mb-3">Proper Footwear</h4>
              <p className="text-clinic-text/80 text-sm">Wear well-fitting shoes and avoid walking barefoot.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-clinic-text mb-3">Blood Sugar Control</h4>
              <p className="text-clinic-text/80 text-sm">Maintain healthy blood glucose levels to promote healing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TreatmentsSection;