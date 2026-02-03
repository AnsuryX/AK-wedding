
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const petals = Array.from({ length: 15 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            x: Math.random() * 100 + "%", 
            y: -20,
            rotate: 0 
          }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0],
            y: "110vh",
            x: (Math.random() * 100 - 50) + "vw",
            rotate: 360
          }}
          transition={{ 
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute text-[#d4af37]/20"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 0C10 0 15 5 15 10C15 15 10 20 10 20C10 20 5 15 5 10C5 5 10 0 10 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
