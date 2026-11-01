import React from 'react';

interface RecruiterLogoProps {
  name: string;
  className?: string;
}

export const RecruiterLogo: React.FC<RecruiterLogoProps> = ({ name, className = "" }) => {
  const normName = name.toLowerCase().trim();

  // Deloitte
  if (normName.includes('deloitte')) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="font-sans font-black text-slate-900 tracking-tight text-lg">
          Deloitte<span className="text-[#86bc25] font-extrabold text-xl leading-none">.</span>
        </span>
      </div>
    );
  }

  // Accenture
  if (normName.includes('accenture')) {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <span className="font-sans font-bold text-slate-900 tracking-tight text-base">
          accenture
        </span>
        <span className="text-[#a100ff] font-black text-lg leading-none transform translate-y-[-1px]">
          &gt;
        </span>
      </div>
    );
  }

  // TCS
  if (normName === 'tcs' || normName.includes('tata')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-5 h-5 rounded-full bg-[#004e9a] flex items-center justify-center text-white text-[9px] font-black font-sans shadow-xs">
          T
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-sans font-extrabold text-[#004e9a] text-sm tracking-wider">TCS</span>
          <span className="text-[7px] text-slate-500 font-bold tracking-tight">TATA CONSULTANCY</span>
        </div>
      </div>
    );
  }

  // Wipro
  if (normName.includes('wipro')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <svg viewBox="0 0 32 32" className="w-5 h-5 flex-shrink-0" fill="none">
          <circle cx="8" cy="16" r="3" fill="#a100ff" />
          <circle cx="16" cy="8" r="3" fill="#009639" />
          <circle cx="24" cy="16" r="3" fill="#e05a00" />
          <circle cx="16" cy="24" r="3" fill="#0077b5" />
          <circle cx="16" cy="16" r="2" fill="#0a1f44" />
        </svg>
        <span className="font-sans font-extrabold text-slate-800 text-sm tracking-wide lowercase">
          wipro
        </span>
      </div>
    );
  }

  // ICICI Bank
  if (normName.includes('icici')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-5 h-5 rounded bg-[#9c1825] flex items-center justify-center text-amber-400 font-bold text-xs shadow-xs">
          i
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-sans font-black text-[#9c1825] text-xs sm:text-sm tracking-tight">
            ICICI Bank
          </span>
        </div>
      </div>
    );
  }

  // HDFC Bank
  if (normName === 'hdfc bank') {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-5 h-5 bg-[#004c8f] rounded flex items-center justify-center text-white relative flex-shrink-0 shadow-xs">
          <div className="w-2.5 h-2.5 bg-[#ed232a]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white" />
          </div>
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-sans font-black text-[#004c8f] text-xs sm:text-sm tracking-wider">
            HDFC BANK
          </span>
        </div>
      </div>
    );
  }

  // HDFC Securities
  if (normName.includes('hdfc sec')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-5 h-5 bg-[#004c8f] rounded flex items-center justify-center text-white relative flex-shrink-0 shadow-xs">
          <div className="w-2.5 h-2.5 bg-[#ed232a]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white" />
          </div>
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-sans font-black text-[#004c8f] text-xs tracking-tight">
            HDFC securities
          </span>
        </div>
      </div>
    );
  }

  // Kotak Mahindra
  if (normName.includes('kotak')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-5 h-5 bg-[#ed1c24] rounded-sm flex items-center justify-center text-white text-xs font-black shadow-xs">
          ∞
        </div>
        <span className="font-sans font-black text-[#ed1c24] text-sm tracking-tight lowercase">
          kotak
        </span>
      </div>
    );
  }

  // Airbus
  if (normName.includes('airbus')) {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <span className="font-sans font-black text-[#00205b] text-base tracking-widest uppercase">
          AIRBUS
        </span>
      </div>
    );
  }

  // Schneider Electric
  if (normName.includes('schneider')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-4 h-4 bg-[#009639] rounded flex items-center justify-center text-white text-[9px] font-bold">
          ⚡
        </div>
        <div className="flex flex-col text-left leading-none">
          <span className="font-sans font-extrabold text-[#009639] text-xs">Schneider</span>
          <span className="text-[7px] text-slate-600 font-semibold uppercase tracking-wider">Electric</span>
        </div>
      </div>
    );
  }

  // Mahindra
  if (normName.includes('mahindra')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <svg viewBox="0 0 24 16" className="w-5 h-3.5 flex-shrink-0" fill="none">
          <path d="M2 14L8 3L12 10L16 3L22 14" stroke="#e31837" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-sans font-black text-[#e31837] text-sm tracking-tight">
          Mahindra
        </span>
      </div>
    );
  }

  // Asian Paints
  if (normName.includes('asian paints') || normName.includes('asianpaints')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#d32f2f] to-[#fbc02d] flex items-center justify-center text-white text-[8px] font-bold">
          ap
        </div>
        <span className="font-sans font-bold text-[#d32f2f] text-xs sm:text-sm tracking-tight">
          asian<span className="text-[#333333]">paints</span>
        </span>
      </div>
    );
  }

  // LG
  if (normName.includes('lg')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-6 h-6 rounded-full bg-[#a50034] flex items-center justify-center text-white text-[10px] font-black border border-[#a50034]">
          L•G
        </div>
        <span className="font-sans font-black text-[#a50034] text-base tracking-wider">
          LG
        </span>
      </div>
    );
  }

  // Whirlpool
  if (normName.includes('whirlpool')) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="relative px-2 py-0.5 border border-[#eab308]/60 rounded-full">
          <span className="font-serif font-black text-[#0f2d59] text-xs tracking-tight italic">
            Whirlpool
          </span>
        </div>
      </div>
    );
  }

  // Motilal Oswal
  if (normName.includes('motilal')) {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <div className="w-3.5 h-3.5 bg-[#f59e0b] transform rotate-45 flex-shrink-0" />
        <div className="flex flex-col text-left leading-none ml-1">
          <span className="font-sans font-black text-[#0a1f44] text-[11px] tracking-tight">MOTILAL</span>
          <span className="font-sans font-black text-[#f59e0b] text-[11px] tracking-tight">OSWAL</span>
        </div>
      </div>
    );
  }

  // Shoppers Stop
  if (normName.includes('shoppers')) {
    return (
      <div className={`flex flex-col items-center justify-center border-y border-black py-0.5 px-1 ${className}`}>
        <span className="font-serif font-black text-black text-[11px] tracking-widest uppercase">
          SHOPPERS STOP
        </span>
      </div>
    );
  }

  // OPPO
  if (normName.includes('oppo')) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="font-sans font-black text-[#059669] text-base tracking-widest lowercase">
          oppo
        </span>
      </div>
    );
  }

  // Healthspring
  if (normName.includes('healthspring')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <div className="w-4 h-4 rounded-full bg-[#0d9488] flex items-center justify-center text-white text-[9px] font-bold">
          +
        </div>
        <span className="font-sans font-extrabold text-[#0f766e] text-xs tracking-tight">
          Healthspring
        </span>
      </div>
    );
  }

  // Capgemini
  if (normName.includes('capgemini')) {
    return (
      <div className={`flex items-center justify-center space-x-1.5 ${className}`}>
        <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-[#0070ad]" fill="currentColor">
          <path d="M12 2C8.5 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4.5-8-8-12zm0 18a6 6 0 0 1-6-6c0-2.5 3-5.5 6-9 3 3.5 6 6.5 6 9a6 6 0 0 1-6 6z" />
        </svg>
        <span className="font-sans font-extrabold text-[#0070ad] text-xs sm:text-sm tracking-tight">
          Capgemini
        </span>
      </div>
    );
  }

  // KPMG
  if (normName.includes('kpmg')) {
    return (
      <div className={`flex items-center justify-center space-x-1 ${className}`}>
        <div className="flex space-x-0.5">
          <div className="w-2.5 h-5 bg-[#00338d]" />
          <div className="w-2.5 h-5 bg-[#00338d]" />
          <div className="w-2.5 h-5 bg-[#00338d]" />
          <div className="w-2.5 h-5 bg-[#00338d]" />
        </div>
        <span className="font-sans font-black text-[#00338d] text-sm tracking-wider uppercase ml-1">
          KPMG
        </span>
      </div>
    );
  }

  // Fallback styled company logo
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="font-crest font-extrabold text-sm sm:text-base text-[#0a1f44] tracking-wider">
        {name}
      </span>
    </div>
  );
};
