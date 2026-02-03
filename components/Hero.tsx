
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  details: any;
}

const Hero: React.FC<HeroProps> = ({ details }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Depth */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Decorative Ornaments - Subtle on mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 hidden md:block">
        <div className="absolute top-10 left-10 w-32 h-32 border-l border-t border-[#d4af37]"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-r border-b border-[#d4af37]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 text-center text-white px-6 w-full max-w-5xl"
      >
        {/* Bismillah Calligraphy */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="font-amiri text-2xl md:text-5xl mb-6 md:mb-8 tracking-widest text-[#d4af37] calligraphy-glow"
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </motion.div>

        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="block text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.5em] uppercase mb-6 md:mb-8 font-light text-white/70"
        >
          With the Blessings of Allah
        </motion.span>
        
        <h1 className="font-serif text-5xl md:text-9xl mb-8 md:mb-10 flex flex-col items-center leading-tight md:leading-none">
          <motion.span 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, type: "spring" }}
            className="tracking-tighter"
          >
            {details.groomName.split(' ')[0]}
          </motion.span>
          <motion.span 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="font-script text-3xl md:text-6xl my-2 md:my-4 text-[#d4af37] italic"
          >
            &
          </motion.span>
          <motion.span 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 1, type: "spring" }}
            className="tracking-tighter"
          >
            {details.brideName.split(' ')[0]}
          </motion.span>
        </h1>

        {/* Marriage Blessing Calligraphy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="font-amiri text-xl md:text-4xl text-white/90 leading-relaxed italic calligraphy-glow px-4">
            بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </div>
          <p className="text-[8px] md:text-xs tracking-[0.2em] uppercase text-[#d4af37] mt-3 font-medium opacity-80 max-w-xs mx-auto md:max-w-full">
            "May Allah bless you both and join you in goodness"
          </p>
        </motion.div>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8 md:mb-10"
        ></motion.div>

        <p className="font-serif text-xl md:text-4xl mb-10 md:mb-12 tracking-widest text-white/90 font-light">
          10 . 02 . 2026
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1 }}
        >
          <button 
            onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-transparent border border-[#d4af37]/50 px-8 md:px-12 py-4 md:py-5 rounded-full text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-white transition-all duration-500 hover:border-[#d4af37]"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">RSVP Participation</span>
            <div className="absolute inset-0 bg-[#d4af37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </motion.div>
      </motion.div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4"
      >
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">Scroll Down</span>
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
