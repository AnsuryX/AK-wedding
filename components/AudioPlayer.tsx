
import React, { useState, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder: replace with a soft Nasheed
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${isPlaying ? 'bg-[#d4af37] text-white' : 'bg-white text-[#d4af37]'}`}
      >
        {isPlaying ? (
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
            <Music className="w-5 h-5" />
          </motion.div>
        ) : (
          <Music2 className="w-5 h-5" />
        )}
      </motion.button>
      {isPlaying && (
        <motion.span 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#8d6e63] border border-[#d4af37]/20"
        >
          Now Playing
        </motion.span>
      )}
    </div>
  );
};

export default AudioPlayer;
