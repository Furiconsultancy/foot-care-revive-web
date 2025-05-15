
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-clinic-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-clinic-text mb-2">
            Book a Consultation
          </h2>
          <p className="text-xl font-playfair text-clinic-text/80 mb-8">
            Reconstructive Diabetic Foot Care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
            <h3 className="font-playfair text-xl font-semibold text-clinic-text mb-4">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-clinic-text mb-1">Name</label>
                  <Input placeholder="Your name" className="border-clinic-accent/30 focus-visible:ring-clinic-accent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clinic-text mb-1">Email</label>
                  <Input type="email" placeholder="Your email" className="border-clinic-accent/30 focus-visible:ring-clinic-accent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-clinic-text mb-1">Subject</label>
                <Input placeholder="Subject" className="border-clinic-accent/30 focus-visible:ring-clinic-accent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-clinic-text mb-1">Message</label>
                <Textarea placeholder="Your message" rows={5} className="border-clinic-accent/30 focus-visible:ring-clinic-accent" />
              </div>
              <Button type="submit" className="w-full bg-clinic-accent hover:bg-clinic-bg text-white transition-colors">
                Send Message
              </Button>
            </form>
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
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-clinic-accent/20 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-clinic-accent" viewBox="0 0 16 16">
                    <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-medium text-clinic-text">Phone</h5>
                  <a href="tel:+918886735004" className="text-clinic-accent hover:underline">+91-8886735004</a>
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
