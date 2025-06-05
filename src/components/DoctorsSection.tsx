
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DoctorsSection: React.FC = () => {
  const doctors = [
    {
      name: "Dr. Sumitra Gantayet",
      qualifications: "DNB (Plastic Surgery), DNB (General Surgery)",
      description: "Dr. Sumitra Gantayet has done DNB General Surgery from Seven Hills Hospital, Visakhapatnam, following which she completed her DNB in Plastic Surgery from Ganga Hospital, Coimbatore. With extensive experience in trauma reconstruction, microsurgery, hand surgery, and diabetic foot surgery, Dr. Sumitra brings a wealth of knowledge and skill to her practice."
    },
    {
      name: "Dr. Anjali Saple",
      qualifications: "MS, DNB (General Surgery), DNB (Plastic Surgery), MNAMS",
      description: "Dr. Anjali Saple is a renowned plastic and cosmetic surgeon who is dedicated to helping her patients achieve their desired look. With over 25 years of experience, Dr. Saple has assisted countless individuals through both surgical and non-surgical procedures to improve their appearance and self-confidence."
    }
  ];

  return (
    <section id="doctors" className="bg-white py-16 md:py-24">
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
          {doctors.map((doctor, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <CardTitle className="font-playfair text-2xl font-bold text-clinic-text mb-2">
                  {doctor.name}
                </CardTitle>
                <p className="text-clinic-accent font-medium">
                  {doctor.qualifications}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-clinic-text/80 leading-relaxed">
                  {doctor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
