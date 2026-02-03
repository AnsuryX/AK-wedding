
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { StarPattern } from './GeometricPatterns';

const Hadiya: React.FC = () => {
  return (
    <section className="py-20 bg-[#faf9f6] text-center px-4 overflow-hidden relative">
      <StarPattern className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 opacity-[0.02] text-[#d4af37]" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <Heart className="w-10 h-10 text-[#d4af37]" />
        </div>
        <h2 className="font-serif text-3xl md:text-4xl text-[#8d6e63] mb-6">Gifts of Dua</h2>
        <p className="text-gray-600 leading-relaxed italic mb-8">
          "Your presence and prayers are the most precious gifts we could receive. For those who wish to share a gift of Hadiya, your duas for our journey ahead are what we cherish most."
        </p>
        <div className="w-16 h-px bg-[#d4af37] mx-auto mb-8"></div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium opacity-80">
          May Allah reward your kindness
        </p>
      </div>
    </section>
  );
};

export default Hadiya;
