
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Share2 } from 'lucide-react';
import { WEDDING_DETAILS } from '../constants';
import { MandalaPattern, StarPattern } from './GeometricPatterns';

const RSVP: React.FC = () => {
  const handleShare = async () => {
    // Determine a valid URL. If running in a restricted environment (like srcdoc), 
    // we use an empty string or a fallback to prevent "Invalid URL" errors.
    const currentUrl = window.location.href;
    const isValidUrl = currentUrl.startsWith('http');
    
    const shareData: ShareData = {
      title: 'Abdirahman & Khatra Wedding Invitation',
      text: `Assalamu Alaikum, you are cordially invited to the wedding of Abdirahman and Khatra on February 4, 2026.`,
    };

    if (isValidUrl) {
      shareData.url = currentUrl;
    }

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
          copyFallback();
        }
      }
    } else {
      copyFallback();
    }
  };

  const copyFallback = () => {
    const currentUrl = window.location.href;
    const isValidUrl = currentUrl.startsWith('http');
    const textToCopy = isValidUrl ? currentUrl : 'Abdirahman & Khatra Wedding Invitation - Feb 4, 2026';
    
    navigator.clipboard.writeText(textToCopy);
    alert('Invitation info copied to clipboard!');
  };

  const cleanNumber = WEDDING_DETAILS.whatsappNumber.replace(/\s+/g, '');

  return (
    <section id="rsvp" className="py-24 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.05] text-[#d4af37] -translate-y-1/4 translate-x-1/4">
        <MandalaPattern />
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-[0.05] text-[#d4af37] translate-y-1/4 -translate-x-1/4 rotate-180">
        <MandalaPattern />
      </div>
      
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            <StarPattern className="w-12 h-12 text-[#d4af37] opacity-40" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2c2c2c] mb-6">RSVP</h2>
          <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-600 italic px-4 font-serif text-lg">
            Your presence is the greatest gift we could receive. Please let us know if you can join our celebration.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-16 rounded-[30px] md:rounded-[40px] shadow-2xl border border-[#eee6d3] relative mx-2 overflow-hidden"
        >
          {/* Subtle Inner Ornament */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
            <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-[#d4af37] rounded-tl-[20px]"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-[#d4af37] rounded-br-[20px]"></div>
          </div>

          <div className="space-y-10 md:space-y-12 relative z-10">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-[#8d6e63]">Confirm Attendance</h3>
              <p className="text-gray-500 mb-8 text-sm md:text-base px-2">Please kindly confirm your attendance by February 1st, 2026</p>
              
              <div className="flex flex-col gap-4 justify-center items-center">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${cleanNumber.replace('+', '')}?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20confirm%20my%20attendance%20for%20the%20wedding%20of%20Abdirahman%20and%20Khatra.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-sm flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl hover:bg-[#1ebd57] transition-all shadow-lg font-bold uppercase tracking-widest text-xs md:text-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  RSVP via WhatsApp
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${cleanNumber}`}
                  className="w-full max-w-sm flex items-center justify-center gap-3 bg-[#8d6e63] text-white px-8 py-4 rounded-2xl hover:bg-[#6d544b] transition-all shadow-lg font-bold uppercase tracking-widest text-xs md:text-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call to RSVP
                </motion.a>

                <div className="w-24 h-px bg-gray-100 my-2"></div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleShare}
                  className="w-full max-w-sm flex items-center justify-center gap-3 bg-white text-[#d4af37] border-2 border-[#d4af37] px-8 py-4 rounded-2xl hover:bg-[#d4af37]/5 transition-all shadow-md font-bold uppercase tracking-widest text-xs md:text-sm"
                >
                  <Share2 className="w-5 h-5" />
                  Share Invitation
                </motion.button>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-gray-400 text-[10px] md:text-xs italic uppercase tracking-[0.2em] px-4">
                "JazakAllah Khair for being part of our story"
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 px-4">
          <StarPattern className="w-8 h-8 text-[#d4af37] opacity-20 mx-auto mb-4" />
          <p className="text-[#8d6e63] font-serif italic text-lg md:text-xl">
            We look forward to celebrating with you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
