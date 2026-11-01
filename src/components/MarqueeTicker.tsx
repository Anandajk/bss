import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';

interface MarqueeTickerProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ onOpenApply, onOpenEnquiry }) => {
  const notices = [
    "🎓 ADMISSIONS OPEN 2027-28: PGDBM + MBA (Triple Specialization), BBA, BCA (Hons), B.Sc Data Science & AI",
    "💼 PLACEMENT RECORD: Highest Package ₹22 LPA | 150+ Top Corporate Recruiters (Deloitte, Accenture, TCS, HDFC, ICICI)",
    "🏆 MERIT SCHOLARSHIPS: Up to 40% Tuition Fee waiver for academic high-achievers & sports rankers",
    "📍 DUAL CAMPUSES: CBD Belapur, Palm Beach Road, Navi Mumbai & University of Mumbai Kalina Campus",
    "⚡ SPOT INTERVIEWS & COUNSELLING: Call Admissions 2027 Helpline +91 7400408514 / +91 7304109359"
  ];

  return (
    <div className="bg-[#0a1f44] text-white border-y border-[#c59b27]/30 py-2 relative overflow-hidden shadow-sm flex items-center">
      {/* Static Label Badge */}
      <div className="flex-shrink-0 z-10 pl-4 pr-3 py-1 flex items-center space-x-1.5 bg-[#c59b27] text-[#0a1f44] font-bold text-xs uppercase tracking-wider rounded-r-md shadow-sm border-r border-[#a47e18]">
        <Bell className="w-3.5 h-3.5" />
        <span>Updates</span>
      </div>

      {/* Marquee Scroller */}
      <div className="overflow-hidden whitespace-nowrap flex-1 ml-3 cursor-pointer py-0.5">
        <div className="animate-marquee flex items-center space-x-12 text-xs font-medium tracking-wide">
          {notices.concat(notices).map((notice, idx) => (
            <span
              key={idx}
              className="inline-flex items-center space-x-3 text-slate-100 hover:text-amber-300 transition-colors"
              onClick={onOpenApply}
            >
              <span>{notice}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27] inline-block opacity-75" />
            </span>
          ))}
        </div>
      </div>

      {/* Quick Action Button on Right */}
      <div className="hidden lg:flex flex-shrink-0 items-center pr-4 pl-2 z-10">
        <button
          onClick={onOpenApply}
          className="bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-300/30 font-bold text-xs px-3 py-1 rounded transition-colors flex items-center space-x-1 cursor-pointer"
        >
          <span>Apply Online</span>
          <ChevronRight className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>
    </div>
  );
};
