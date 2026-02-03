
import React from 'react';
import { motion } from 'framer-motion';

const IslamicBlessing: React.FC = () => {
  return (
    <section id="blessing" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <svg width="400" height="400" viewBox="0 0 100 100" className="text-[#d4af37]">
          <path fill="currentColor" d="M50 0 L61.2 38.8 L100 50 L61.2 61.2 L50 100 L38.8 61.2 L0 50 L38.8 38.8 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-serif text-2xl md:text-3xl text-[#8d6e63] mb-6 block italic">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </span>
          <h3 className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-8 font-light">In the name of Allah, the Most Gracious, the Most Merciful</h3>
          
          <div className="mb-12">
            <p className="font-serif text-xl md:text-2xl text-gray-700 leading-relaxed italic max-w-2xl mx-auto">
              "And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquillity with them, and He has put love and mercy between your hearts..."
            </p>
            <p className="mt-4 text-[#d4af37] font-semibold tracking-widest text-sm">— Surah Ar-Rum [30:21]</p>
          </div>

          <div className="w-16 h-px bg-[#d4af37] mx-auto mb-10"></div>
          
          <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
            With the grace of Allah (SWT), we invite you to celebrate the union of our hearts and families. 
            May this marriage be blessed with eternal happiness, love, and faith.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IslamicBlessing;
