import React from 'react';

interface CrestProps {
  light?: boolean;
  className?: string;
}

export const InstitutionalCrest: React.FC<CrestProps> = ({ light = false, className = "" }) => {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Official Uploaded BSS Foundation Logo */}
      <div className={`flex items-center justify-center flex-shrink-0 ${light ? 'bg-white p-1 rounded-lg shadow-sm' : ''}`}>
        <img
          src="/assets/aistudio/bssfoundation_2a96b483.png"
          alt="BSS Foundation - School of Management"
          className="h-11 sm:h-13 w-auto object-contain"
        />
      </div>

      {/* Institutional Name and Subtext */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center space-x-1.5">
          <span
            className={`font-crest text-lg sm:text-xl font-extrabold tracking-wider ${
              light ? "text-white" : "text-[#0a1f44]"
            }`}
          >
            BSS FOUNDATION
          </span>
          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wider border ${
            light 
              ? "bg-white/10 text-amber-300 border-[#c59b27]/40" 
              : "bg-[#0a1f44]/10 text-[#0a1f44] border-[#c59b27]/40"
          }`}>
            MCA REG.
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`text-[11px] font-bold tracking-widest uppercase ${
              light ? "text-amber-400" : "text-[#c59b27]"
            }`}
          >
            School of Management
          </span>
          <span className="text-slate-300 text-[10px]">•</span>
          <span
            className={`text-[10px] tracking-wider uppercase font-semibold ${
              light ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Beyond Education
          </span>
        </div>
      </div>
    </div>
  );
};
