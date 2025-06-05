
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918886735004', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingWhatsAppButton;
