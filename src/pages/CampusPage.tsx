import React from 'react';
import {
  Compass, Laptop, BookOpen, Users, Building2,
  Tv, MapPin, CheckCircle2, ShieldCheck, Heart
} from 'lucide-react';
import { INSTITUTION_INFO } from '../data/bssData';

interface CampusPageProps {
  onOpenVirtualTour: () => void;
  onOpenApply: () => void;
}

export const CampusPage: React.FC<CampusPageProps> = ({ onOpenVirtualTour, onOpenApply }) => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="relative py-20 bg-gradient-to-r from-[#051329] via-[#0a1f44] to-[#07152d] text-white border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              Infrastructure & Student Culture
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              Life @ BSS Foundation
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              Experience modern air-conditioned amphitheaters, high-performance computing labs, and a vibrant community that celebrates diversity and leadership.
            </p>
            <button
              onClick={onOpenVirtualTour}
              className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-6 py-3 rounded-lg text-sm shadow cursor-pointer flex items-center space-x-2"
            >
              <Compass className="w-4 h-4 text-[#0a1f44]" />
              <span>Launch 360° Virtual Campus Tour</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Dual Campus Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#c59b27] transition-all">
            <span className="bg-[#0a1f44] text-[#c59b27] border border-[#c59b27]/40 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded">
              Corporate & Main Campus
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mt-3 mb-2">
              Navi Mumbai – CBD Belapur Campus
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Located on Palm Beach Road at API House, behind Mahavir Icon. Features corporate boardrooms, executive seminar amphitheatres, AI computing labs, and immediate access to the Belapur suburban rail and metro transit lines.
            </p>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p>• <strong>Address:</strong> API House, Sector 15, CBD Belapur, Navi Mumbai 400614</p>
              <p>• <strong>Helpline:</strong> +91 7400408514</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#c59b27] transition-all">
            <span className="bg-[#0a1f44] text-[#c59b27] border border-[#c59b27]/40 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded">
              City Academic Campus
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mt-3 mb-2">
              Mumbai – Kalina University Campus
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Located at the historic University of Mumbai Vidyanagari Campus, next to Garware Institute of Career Education (GICED), Santacruz (East). Proximity to BKC and Santacruz station makes it an ideal study location.
            </p>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p>• <strong>Address:</strong> GICED, University of Mumbai, Kalina, Santacruz (E), Mumbai 400098</p>
              <p>• <strong>Helpline:</strong> +91 7304109359</p>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Learning Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-2">
              Key Infrastructure Highlights
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#c59b27] transition-all">
              <Laptop className="w-8 h-8 text-[#0a1f44] mb-3" />
              <h4 className="font-heading font-bold text-lg text-[#0a1f44] mb-2">
                GPU Computing & Data Lab
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workstations preloaded with Python, TensorFlow, Tableau, PowerBI, and quantitative modeling packages for machine learning and analytics coursework.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#c59b27] transition-all">
              <Tv className="w-8 h-8 text-[#0a1f44] mb-3" />
              <h4 className="font-heading font-bold text-lg text-[#0a1f44] mb-2">
                Smart Amphitheatres
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ergonomically designed tiered auditoriums with touch smart boards, surround audio systems, and high-speed Wi-Fi for interactive case discussions.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-[#c59b27] transition-all">
              <BookOpen className="w-8 h-8 text-[#c59b27] mb-3" />
              <h4 className="font-heading font-bold text-lg text-[#0a1f44] mb-2">
                Management Resource Library
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thousands of physical business management volumes, periodicals, national case studies, and subscription access to world-renowned online databases.
              </p>
            </div>
          </div>
        </div>

        {/* Student Clubs */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Student Initiatives
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mt-1 mb-2">
              Student Committees & Active Societies
            </h3>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#c59b27] transition-all">
              <span className="font-crest font-bold text-sm text-[#0a1f44]">MarkX</span>
              <h5 className="font-bold text-xs text-[#0a1f44] mt-1 mb-1">Marketing & Ad Club</h5>
              <p className="text-[11px] text-slate-500">Conducts ad-making competitions, brand wars, and digital growth hackathons.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#c59b27] transition-all">
              <span className="font-crest font-bold text-sm text-[#0a1f44]">Bull & Bear</span>
              <h5 className="font-bold text-xs text-[#0a1f44] mt-1 mb-1">Finance & Investment Forum</h5>
              <p className="text-[11px] text-slate-500">Virtual equity trading simulations, algorithmic analysis, and budget analysis.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#c59b27] transition-all">
              <span className="font-crest font-bold text-sm text-[#0a1f44]">AI & Tech Guild</span>
              <h5 className="font-bold text-xs text-[#0a1f44] mt-1 mb-1">Coding & Analytics Club</h5>
              <p className="text-[11px] text-slate-500">Organizes annual codathons, AI prompt battlegrounds, and Kaggle challenges.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#c59b27] transition-all">
              <span className="font-crest font-bold text-sm text-[#0a1f44]">Aarohan Committee</span>
              <h5 className="font-bold text-xs text-[#0a1f44] mt-1 mb-1">Annual Cultural Fest</h5>
              <p className="text-[11px] text-slate-500">Manages the inter-collegiate cultural fest, sports leagues, and fashion conclaves.</p>
            </div>
          </div>
        </div>

        {/* Hostel Support */}
        <div className="bg-[#0a1f44] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-t-4 border-[#c59b27]">
          <div>
            <div className="flex items-center space-x-2 text-[#c59b27] font-bold text-xs uppercase mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Outstation Student Accommodation</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Safe & Supervised Hostel Facilities
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              We assist outstation students with vetted hostel accommodations near Belapur and Kalina, complete with 24/7 security, nutritious dining, high-speed internet, and dedicated wardens.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-6 py-3 rounded-lg text-xs sm:text-sm shadow whitespace-nowrap cursor-pointer"
          >
            Inquire About Hostel
          </button>
        </div>
      </div>
    </div>
  );
};
