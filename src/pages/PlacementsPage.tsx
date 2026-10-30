import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase, TrendingUp, Award, Building, CheckCircle2,
  Download, ArrowRight
} from 'lucide-react';
import { RECRUITERS, TESTIMONIALS } from '../data/bssData';

interface PlacementsPageProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const PlacementsPage: React.FC<PlacementsPageProps> = ({ onOpenApply, onOpenBrochure }) => {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="relative py-20 bg-gradient-to-r from-[#051329] via-[#0a1f44] to-[#07152d] text-white border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              Corporate Relations Directorate
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              Placements & Corporate Partnerships
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              With a record highest package of ₹22 LPA and an average of ₹9.11 LPA, BSS Foundation has established itself as a premier talent pipeline for global enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenApply}
                className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-6 py-3 rounded-lg text-sm shadow cursor-pointer"
              >
                Apply for Placement-Assisted Degrees
              </button>
              <button
                onClick={onOpenBrochure}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg text-sm border border-white/30 cursor-pointer"
              >
                Download Placement Audit Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* CTC Statistics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0a1f44] text-white p-6 rounded-xl border-t-4 border-[#c59b27] text-center shadow-sm">
            <span className="text-xs uppercase font-bold text-amber-300">Highest Package</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-300 my-1">₹22 LPA</div>
            <p className="text-xs text-slate-300">Peak international / domestic offer</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border-t-4 border-[#c59b27] text-center border border-slate-200 shadow-sm">
            <span className="text-xs uppercase font-bold text-[#c59b27]">Average Package</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0a1f44] my-1">₹9.11 LPA</div>
            <p className="text-xs text-slate-600">Across all management tracks</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border-t-4 border-[#c59b27] text-center border border-slate-200 shadow-sm">
            <span className="text-xs uppercase font-bold text-[#c59b27]">Top 25% Quartile</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0a1f44] my-1">₹12.8 LPA</div>
            <p className="text-xs text-slate-600">Specialization leaders & dual certs</p>
          </div>
          <div className="bg-[#0a1f44] text-white p-6 rounded-xl border-t-4 border-[#c59b27] text-center shadow-sm">
            <span className="text-xs uppercase font-bold text-amber-300">Placement Record</span>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white my-1">100%</div>
            <p className="text-xs text-slate-300">Assistance with 150+ recruiters</p>
          </div>
        </div>

        {/* Pre-Placement Training Roadmap */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Career Acceleration
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-2">
              360° Corporate Readiness & Grooming Framework
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm">
              Our Corporate Relations Department conducts structured bootcamps to ensure every student transitions from the lecture hall to the boardroom effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Technical Aptitude & Coding", desc: "Rigorous quantitative analysis, data structures, financial modeling, and logic problem solving." },
              { title: "Soft Skills & Business Etiquette", desc: "Executive posture, boardroom presentation delivery, active listening, and business email protocols." },
              { title: "Mock GDs & Technical Vivas", desc: "Simulated stress interviews and group discussions conducted by HR managers from top MNCs." },
              { title: "Paid Summer Internships", desc: "Mandatory 8-12 weeks full-time corporate internship leading to pre-placement offers (PPOs)." }
            ].map((p, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-[#c59b27] transition-all">
                <span className="text-xs font-bold font-crest text-[#c59b27] uppercase">Phase 0{idx + 1}</span>
                <h4 className="font-heading font-bold text-base text-[#0a1f44] my-2">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* All Corporate Recruiters */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Employment Partners
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mt-1 mb-2">
              Prestigious Recruiting Organizations
            </h3>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            {RECRUITERS.map((r, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center flex flex-col justify-center min-h-[90px] hover:border-[#c59b27] transition-colors"
              >
                <span className="font-crest font-extrabold text-base text-[#0a1f44] tracking-wide">
                  {r.logoText}
                </span>
                <span className="text-[10px] text-slate-500 mt-1">{r.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Alumni Voices
            </span>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mt-1 mb-2">
              Alumni & Student Testimonials
            </h3>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#c59b27] flex-shrink-0"
                />
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-[#c59b27] uppercase tracking-wider mb-2">
                    <Award className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>Verified Alumni Placement</span>
                  </div>
                  <p className="text-xs text-slate-700 italic mb-3">"{t.quote}"</p>
                  <p className="font-bold text-sm text-[#0a1f44]">{t.name}</p>
                  <p className="text-xs text-[#c59b27] font-semibold">{t.role} at {t.company} ({t.package})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
