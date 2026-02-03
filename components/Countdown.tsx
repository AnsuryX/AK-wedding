
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
      {units.map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-[#fdfbf7] shadow-sm rounded-lg w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border border-[#eee6d3]">
            <span className="text-3xl md:text-4xl font-serif text-[#8d6e63] font-bold">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="block mt-2 text-xs uppercase tracking-widest text-gray-500">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
