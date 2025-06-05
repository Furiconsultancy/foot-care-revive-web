
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918886735004', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918886735004', '_self');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-clinic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-2">
            Contact Us
          </h2>
          <p className="text-xl font-playfair text-clinic-text/80 mb-8">
            Reconstructive Diabetic Foot Care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
            <h3 className="font-playfair text-xl font-semibold text-clinic-text mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center p-4 bg-clinic-bg/20 rounded-lg">
                <div className="w-10 h-10 bg-clinic-accent/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-clinic-accent" viewBox="0 0 16 16">
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-clinic-text">Call Us</h5>
                  <p className="text-clinic-text/80 font-semibold">+91 88867 35004</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-green-50 rounded-lg">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-green-600" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.777-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-clinic-text">WhatsApp</h5>
                  <p className="text-clinic-text/80">Chat with us instantly</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={handlePhoneClick}
                className="w-full bg-clinic-accent hover:bg-clinic-bg text-white transition-colors"
              >
                Call Now: +91 88867 35004
              </Button>
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair font-semibold text-clinic-text">Seven Hills Hospital</h4>
              <p className="text-clinic-text/80 mt-1">
                Rockdale Layout, Waltair Main Rd, Ram Nagar, Visakhapatnam, Andhra Pradesh 530002
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair font-semibold text-clinic-text">Kanakadurga Hospital</h4>
              <p className="text-clinic-text/80 mt-1">
                Krishnagar, Krishna Nagar, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-playfair font-semibold text-clinic-text">AINU Hospital</h4>
              <p className="text-clinic-text/80 mt-1">
                47-11-12, 1st Lane, near Diamond Park, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-clinic-accent/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-clinic-accent" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-clinic-text">Email Address</h5>
                  <a href="mailto:contact@rdfc.in" className="text-clinic-accent hover:underline">contact@rdfc.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
