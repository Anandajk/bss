import React from 'react';
import { Phone, Mail, MapPin, Award, ExternalLink, HelpCircle } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/bssData';

interface TopUtilityBarProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
  onNavigate: (page: string) => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  onOpenEnquiry,
  onOpenVirtualTour,
  onNavigate
}) => {
  return (
    <div className="bg-[#05142b] text-slate-200 text-xs border-b border-[#1b3459] hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          {/* Left: Contact Hotlines & Reg Badge */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-amber-400 font-medium">
              <Award className="w-3.5 h-3.5" />
              <span className="tracking-wide">Govt. MCA Regd. • Affiliated University Degrees</span>
            </div>

            <a
              href={`tel:${INSTITUTION_INFO.phoneNumbers[0]}`}
              className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{INSTITUTION_INFO.phoneNumbers[0]}</span>
            </a>

            <a
              href={`mailto:${INSTITUTION_INFO.emails[0]}`}
              className="flex items-center space-x-1.5 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{INSTITUTION_INFO.emails[0]}</span>
            </a>
          </div>

          {/* Right: Quick Portals & Shortcuts */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('campuses')}
              className="flex items-center space-x-1 text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Campuses: Belapur & Kalina</span>
            </button>

            <span className="text-slate-600">|</span>

            <button
              onClick={onOpenVirtualTour}
              className="text-slate-300 hover:text-amber-300 transition-colors cursor-pointer font-medium"
            >
              360° Virtual Tour
            </button>

            <span className="text-slate-600">|</span>

            <button
              onClick={() => onNavigate('admissions')}
              className="text-slate-300 hover:text-amber-300 transition-colors cursor-pointer"
            >
              Eligibility & Fees
            </button>

            <span className="text-slate-600">|</span>

            <button
              onClick={onOpenEnquiry}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-0.5 rounded text-[11px] transition-colors shadow-sm flex items-center space-x-1 cursor-pointer"
            >
              <HelpCircle className="w-3 h-3" />
              <span>Quick Enquiry</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
