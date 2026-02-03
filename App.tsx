
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WEDDING_DETAILS } from './constants';
import Hero from './components/Hero';
import IslamicBlessing from './components/IslamicBlessing';
import Countdown from './components/Countdown';
import Details from './components/Details';
import RSVP from './components/RSVP';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import Hadiya from './components/Hadiya';
import AudioPlayer from './components/AudioPlayer';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#faf9f6]">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
            exit={{ opacity: 0 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center"
            >
              <h1 className="font-serif text-3xl text-[#8d6e63]">A & K</h1>
              <div className="mt-4 w-12 h-0.5 bg-[#d4af37] mx-auto"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingElements />
      <AudioPlayer />
      <Navigation />

      <main className="max-w-full overflow-hidden">
        <Hero details={WEDDING_DETAILS} />
        
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <Countdown targetDate={WEDDING_DETAILS.date} />
          </div>
        </section>

        <IslamicBlessing />

        <Details details={WEDDING_DETAILS} />
        
        <Hadiya />

        <RSVP />
      </main>

      <Footer />
    </div>
  );
};

export default App;
