import React from 'react';
import { motion } from 'motion/react';
import { Quote, CheckCircle, Award, Landmark } from 'lucide-react';
import { LEADERSHIP } from '../data/bssData';

interface DirectorDeskProps {
  onOpenApply: () => void;
}

export const DirectorDeskSection: React.FC<DirectorDeskProps> = ({ onOpenApply }) => {
  const directorInfo = LEADERSHIP[0];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image / Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-[#c59b27] bg-[#0a1f44]">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
                    alt="Director's Desk - BSS Foundation"
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#07152d] via-[#07152d]/80 to-transparent p-4 text-white text-center">
                    <p className="font-heading font-bold text-lg text-amber-300">
                      Director's Desk
                    </p>
                    <p className="text-xs text-slate-300">
                      BSS Foundation – School of Management
                    </p>
                  </div>
                </div>
              </div>

              {/* Accreditation Seals under portrait */}
              <div className="mt-5 flex items-center justify-center space-x-4 text-xs font-semibold text-slate-600">
                <span className="flex items-center space-x-1">
                  <Landmark className="w-3.5 h-3.5 text-[#0a1f44]" />
                  <span>MCA Registered</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>Univ. Affiliated</span>
                </span>
              </div>
            </div>

            {/* Right Message Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-4">
                <Quote className="w-3 h-3 text-[#c59b27]" />
                <span>Leadership Message</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0a1f44] mb-4 leading-tight tracking-tight">
                "Cultivating Intellect, Character & Corporate Readiness"
              </h2>

              <blockquote className="border-l-4 border-[#c59b27] pl-4 py-2 italic text-slate-700 text-sm sm:text-base font-serif mb-6 bg-white rounded-r-lg border border-slate-200">
                "{directorInfo.quote}"
              </blockquote>

              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 whitespace-pre-line">
                {directorInfo.fullMessage}
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#0a1f44]">
                    Office of the Academic Director
                  </h4>
                  <p className="text-xs text-slate-500">
                    BSS Foundation • Mumbai & Navi Mumbai
                  </p>
                </div>

                <button
                  onClick={onOpenApply}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 border border-[#c59b27]/40 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  Schedule Campus Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
