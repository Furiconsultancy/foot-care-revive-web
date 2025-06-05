import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, Award } from 'lucide-react';
const DoctorsSection: React.FC = () => {
  const doctors = [{
    name: "Dr. Sumitra Gantayet",
    qualifications: "DNB (Plastic Surgery), DNB (General Surgery)",
    description: "Dr. Sumitra Gantayet has done DNB General Surgery from Seven Hills Hospital, Visakhapatnam, following which she completed her DNB in Plastic Surgery from Ganga Hospital, Coimbatore. With extensive experience in trauma reconstruction, microsurgery, hand surgery, and diabetic foot surgery, Dr. Sumitra brings a wealth of knowledge and skill to her practice.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    icon: UserCheck
  }, {
    name: "Dr. Anjali Saple",
    qualifications: "MS, DNB (General Surgery), DNB (Plastic Surgery), MNAMS",
    description: "Dr. Anjali Saple is a renowned plastic and cosmetic surgeon who is dedicated to helping her patients achieve their desired look. With over 25 years of experience, Dr. Saple has assisted countless individuals through both surgical and non-surgical procedures to improve their appearance and self-confidence.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    icon: Award
  }];
  return <section id="doctors" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-lg text-clinic-text/80 max-w-2xl mx-auto">
            Our experienced medical professionals are dedicated to providing exceptional diabetic foot care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {doctors.map((doctor, index) => {
          const IconComponent = doctor.icon;
          return <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                
                <CardHeader className="text-center pb-2">
                  <CardTitle className="font-playfair text-2xl font-bold text-clinic-text mb-2">
                    {doctor.name}
                  </CardTitle>
                  <p className="text-clinic-accent font-medium text-sm">
                    {doctor.qualifications}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-clinic-text/80 leading-relaxed text-sm">
                    {doctor.description}
                  </p>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default DoctorsSection;