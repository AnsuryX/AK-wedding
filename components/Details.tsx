
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, CalendarPlus } from 'lucide-react';
import { MandalaPattern, GeometricBorder } from './GeometricPatterns';

interface DetailsProps {
  details: any;
}

const Details: React.FC<DetailsProps> = ({ details }) => {
  const handleCalendarClick = () => {
    const event = {
      title: "Wedding of Abdirahman & Khatra",
      details: "You are cordially invited to the wedding celebration of Abdirahman Abdishakur and Khatra Muhumad Dahir.",
      location: details.locationAddress,
      start: "20260210T140000",
      end: "20260210T200000"
    };
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleUrl, '_blank');
  };

  return (
    <section id="details" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <MandalaPattern className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 text-[#d4af37] opacity-[0.03] pointer-events-none" />
      <MandalaPattern className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 text-[#d4af37] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <GeometricBorder className="mb-6" />
          <span className="block text-[#d4af37] font-serif text-base md:text-lg mb-2 italic">Assalamu Alaikum</span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#2c2c2c] mb-4">Wedding Details</h2>
          <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mb-8"></div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCalendarClick}
            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-[#d4af37] text-[#d4af37] rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#d4af37] hover:text-white transition-all shadow-sm"
          >
            <CalendarPlus className="w-4 h-4" />
            Add to Calendar
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#faf9f6] text-center border border-[#eee6d3] shadow-sm group transition-all relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 text-[#d4af37] opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <MandalaPattern />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#8d6e63]/5 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-[#8d6e63] group-hover:bg-[#d4af37]/10 group-hover:text-[#d4af37] transition-colors">
              <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">When</h3>
            <p className="text-gray-600 font-semibold tracking-wide text-sm md:text-base">February 10, 2026</p>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">Tuesday Afternoon</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#faf9f6] text-center border border-[#eee6d3] shadow-sm group transition-all relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 text-[#d4af37] opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <MandalaPattern />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#8d6e63]/5 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-[#8d6e63] group-hover:bg-[#d4af37]/10 group-hover:text-[#d4af37] transition-colors">
              <Clock className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Time</h3>
            <p className="text-gray-600 font-semibold tracking-wide text-sm md:text-base">2:00 PM onwards</p>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">Nikah & Walima</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#faf9f6] text-center border border-[#eee6d3] shadow-sm group transition-all relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-12 h-12 text-[#d4af37] opacity-[0.05] group-hover:opacity-10 transition-opacity">
              <MandalaPattern />
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#8d6e63]/5 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-[#8d6e63] group-hover:bg-[#d4af37]/10 group-hover:text-[#d4af37] transition-colors">
              <MapPin className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-serif text-lg md:text-xl mb-1 md:mb-2">Where</h3>
            <p className="text-gray-600 font-semibold tracking-wide text-sm md:text-base">{details.location}</p>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">{details.locationAddress}</p>
          </motion.div>
        </div>

        {/* Map Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[24px] md:rounded-[40px] overflow-hidden h-[300px] md:h-[400px] shadow-2xl border-2 md:border-4 border-white mx-2 md:mx-0 relative group"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.323565158693!2d36.82294435!3d-1.259972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1737e5c5c069%3A0xe10433621453982e!2sCity%20Park%20Estate!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </motion.div>
        <GeometricBorder className="mt-12" />
      </div>
    </section>
  );
};

export default Details;
