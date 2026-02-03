
import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  "https://images.unsplash.com/photo-1509043666159-fc0cdc0049e5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1465961901033-05fcc9675d51?auto=format&fit=crop&q=80&w=800",
  "https://pixabay.com/photos/wedding-aisle-flower-arrangement-1846114?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1561638273-475e21f62b01?auto=format&fit=crop&q=80&w=800"
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#2c2c2c] mb-12">Captured Moments</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'mt-8' : ''}`}
            >
              <img src={src} alt="Wedding" className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
