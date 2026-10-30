import React from 'react';
import { CampusesSection } from '../components/CampusesSection';

interface ContactPageProps {
  onOpenApply: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenApply }) => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="relative py-20 bg-gradient-to-r from-[#051329] via-[#0a1f44] to-[#07152d] text-white border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              Contact & Campus Locations
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              We welcome prospective candidates, parents, and corporate recruiters to visit our campuses in CBD Belapur and Kalina, Mumbai.
            </p>
          </div>
        </div>
      </div>

      <CampusesSection onOpenApply={onOpenApply} />
    </div>
  );
};
