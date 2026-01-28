
import React from 'react';

interface PhoneMockupProps {
  imageSrc: string;
  tilt?: 'left' | 'right' | 'none';
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ imageSrc, tilt = 'none', className = '' }) => {
  const tiltClass = tilt === 'left' ? '-rotate-6' : tilt === 'right' ? 'rotate-6' : '';

  return (
    <div className={`relative mx-auto w-[280px] h-[580px] bg-neutral-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-neutral-800 transform transition-transform duration-700 hover:scale-105 ${tiltClass} ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl z-20"></div>
      
      {/* Content Area */}
      <div className="relative w-full h-full overflow-hidden rounded-[2.2rem] bg-black">
        <img 
          src={imageSrc} 
          alt="App Screenshot" 
          className="w-full h-full object-cover"
        />
        
        {/* Simple UI Overlays if we want to simulate an app better */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20 rounded-full"></div>
      </div>
      
      {/* Gloss Effect */}
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default PhoneMockup;
