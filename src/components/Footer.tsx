
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-clinic-text text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Reconstructive Diabetic Foot Care</h3>
            <p className="text-white/80 leading-relaxed">
              Providing expert care for diabetic foot complications through innovative treatments
              and compassionate support.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-white/80 mb-2">
              <a href="tel:+918886735004" className="hover:text-white transition-colors">+91-8886735004</a>
            </p>
            <p className="text-white/80">
              <a href="mailto:contact@rdfc.in" className="hover:text-white transition-colors">contact@rdfc.in</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/80">
            © {currentYear} Reconstructive Diabetic Foot Care Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
