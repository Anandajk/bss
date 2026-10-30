import React from 'react';
import { HelpCircle, GraduationCap, Download, Compass, MessageCircle } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/bssData';

interface FloatingActionsProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
  onOpenVirtualTour: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenApply,
  onOpenEnquiry,
  onOpenBrochure,
  onOpenVirtualTour
}) => {
  const handleWhatsApp = () => {
    const phone = "917400408514";
    const text = encodeURIComponent("Hello BSS Foundation Admissions Team, I would like to inquire about courses and admission procedure 2025-26.");
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, '_blank');
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-1.5 hidden md:flex select-none">
      {/* 1. Quick Enquiry */}
      <button
        onClick={onOpenEnquiry}
        className="group flex items-center bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs py-2.5 px-3 rounded-l-lg shadow-xl border-l-2 border-y border-[#c59b27] transition-all transform hover:-translate-x-2 cursor-pointer"
        title="Quick Enquiry & Callback"
      >
        <HelpCircle className="w-4 h-4 text-[#c59b27] mr-2 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Enquire Now
        </span>
      </button>

      {/* 2. Apply Online */}
      <button
        onClick={onOpenApply}
        className="group flex items-center bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold text-xs py-2.5 px-3 rounded-l-lg shadow-xl border-l-2 border-y border-[#0a1f44] transition-all transform hover:-translate-x-2 cursor-pointer"
        title="Apply Online for 2025"
      >
        <GraduationCap className="w-4 h-4 text-[#0a1f44] mr-2 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Apply Online 2025
        </span>
      </button>

      {/* 3. Download Prospectus */}
      <button
        onClick={onOpenBrochure}
        className="group flex items-center bg-[#0a1f44] hover:bg-[#132e60] text-white font-bold text-xs py-2.5 px-3 rounded-l-lg shadow-xl border-l-2 border-y border-[#c59b27]/60 transition-all transform hover:-translate-x-2 cursor-pointer"
        title="Download Prospectus PDF"
      >
        <Download className="w-4 h-4 text-[#c59b27] mr-2 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          Brochure PDF
        </span>
      </button>

      {/* 4. 360 Virtual Tour */}
      <button
        onClick={onOpenVirtualTour}
        className="group flex items-center bg-[#0a1f44] hover:bg-[#132e60] text-amber-200 font-bold text-xs py-2.5 px-3 rounded-l-lg shadow-xl border-l-2 border-y border-[#c59b27] transition-all transform hover:-translate-x-2 cursor-pointer"
        title="Take 360 Virtual Tour"
      >
        <Compass className="w-4 h-4 text-[#c59b27] mr-2 flex-shrink-0 animate-spin [animation-duration:10s]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          360° Campus Tour
        </span>
      </button>

      {/* 5. WhatsApp Hotline */}
      <button
        onClick={handleWhatsApp}
        className="group flex items-center bg-[#0a1f44] hover:bg-[#132e60] text-white font-bold text-xs py-2.5 px-3 rounded-l-lg shadow-xl border-l-2 border-y border-[#c59b27] transition-all transform hover:-translate-x-2 cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-[#c59b27] mr-2 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
          WhatsApp Help
        </span>
      </button>
    </div>
  );
};
