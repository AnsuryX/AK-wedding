
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Heart className="text-[#d4af37] w-8 h-8 fill-current" />
        </div>
        
        <h2 className="font-serif text-3xl mb-4 text-[#8d6e63]">Abdirahman & Khatra</h2>
        <p className="text-gray-400 text-sm tracking-widest uppercase mb-12">February 10, 2026 • Nairobi, Kenya</p>
        
        <div className="text-gray-300 text-xs tracking-tighter">
          &copy; {new Date().getFullYear()} Made with love for the happy couple
        </div>
      </div>
    </footer>
  );
};

export default Footer;
