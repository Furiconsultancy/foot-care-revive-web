
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-clinic-text font-playfair text-xl font-bold">
            RDFC
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-clinic-text hover:text-clinic-accent transition-colors">
            Home
          </a>
          <a href="#about" className="text-clinic-text hover:text-clinic-accent transition-colors">
            About
          </a>
          <a href="#services" className="text-clinic-text hover:text-clinic-accent transition-colors">
            Services
          </a>
          <a href="#faq" className="text-clinic-text hover:text-clinic-accent transition-colors">
            FAQs
          </a>
          <a href="#contact" className="text-clinic-text hover:text-clinic-accent transition-colors">
            Contact
          </a>
        </div>

        <Button className="hidden md:block bg-clinic-accent hover:bg-clinic-bg text-white transition-colors">
          Book a Consultation
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-clinic-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-clinic-text hover:text-clinic-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-clinic-text hover:text-clinic-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-clinic-text hover:text-clinic-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#faq"
              className="text-clinic-text hover:text-clinic-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-clinic-text hover:text-clinic-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-clinic-accent hover:bg-clinic-bg text-white transition-colors w-full">
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
