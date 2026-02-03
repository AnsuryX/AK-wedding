
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECTIONS } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`font-serif text-2xl tracking-tighter ${isScrolled ? 'text-[#8d6e63]' : 'text-white'}`}
        >
          A <span className="text-[#d4af37]">&</span> K
        </motion.div>
        
        <div className="hidden md:flex gap-8">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-xs uppercase tracking-widest font-semibold transition-colors relative py-1
                ${isScrolled ? 'text-gray-600 hover:text-black' : 'text-white/80 hover:text-white'}
                ${activeSection === section.id ? 'text-black' : ''}
              `}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.div 
                  layoutId="active-nav"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#d4af37]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
          <div className={`w-6 h-0.5 mb-1 ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 mb-1 ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-6 h-0.5 ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
