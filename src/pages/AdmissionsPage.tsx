import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap, CheckCircle2, Award, Clock, FileText,
  ChevronDown, ChevronUp, Download, HelpCircle, ArrowRight
} from 'lucide-react';
import { FAQ_LIST, PROGRAMS } from '../data/bssData';

interface AdmissionsPageProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenApply, onOpenBrochure }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: 1,
      title: "Online Application Submission",
      desc: "Fill the digital application form with personal information, academic track record, and preferred course specialization."
    },
    {
      num: 2,
      title: "Profile Assessment / Entrance Score",
      desc: "Submit your CAT / MAT / CMAT / MAH-CET scores or opt for the online BSS Aptitude & Analytical Assessment."
    },
    {
      num: 3,
      title: "Personal Interview & Counseling",
      desc: "Appear for a 1-on-1 personal interview with our Senior Faculty Panel (in-person at campus or via secure video link)."
    },
    {
      num: 4,
      title: "Merit Evaluation & Scholarship Grant",
      desc: "Receive your Provisional Offer Letter along with any awarded merit scholarships (up to 30% on tuition fee)."
    },
    {
      num: 5,
      title: "Seat Enrollment & Induction",
      desc: "Submit verified documents, complete initial enrollment fee, and attend the grand Academic Induction Week."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero Banner */}
      <div className="relative py-20 bg-gradient-to-r from-[#051329] via-[#0a1f44] to-[#07152d] text-white border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              Admissions Open 2025 - 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              Admission Procedure & Guidelines
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              Empowering talented students from across India with transparent, merit-based admissions, flexible installment plans, and substantial academic scholarships.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenApply}
                className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-6 py-3 rounded-lg text-sm shadow-lg flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Fill Online Application</span>
                <ArrowRight className="w-4 h-4 text-[#0a1f44]" />
              </button>
              <button
                onClick={onOpenBrochure}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg text-sm border border-white/30 flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#c59b27]" />
                <span>Download Prospectus</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Step-by-Step Flow */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Admission Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-2">
              5 Simple Steps to Secure Your Seat
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm">
              Our admissions team provides hand-holding guidance from your initial inquiry to final enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s, idx) => (
              <div
                key={s.num}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#c59b27] shadow-sm transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#0a1f44] text-[#c59b27] border border-[#c59b27]/40 font-crest font-bold flex items-center justify-center text-sm mb-3">
                    0{s.num}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44] mb-2 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Course Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mb-6">
            Program Eligibility & Fee Structure (2025-26)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0a1f44] text-white">
                  <th className="p-3.5 rounded-tl-lg font-crest font-bold">Course Name</th>
                  <th className="p-3.5 font-crest font-bold">Duration</th>
                  <th className="p-3.5 font-crest font-bold">Eligibility Criteria</th>
                  <th className="p-3.5 font-crest font-bold">Annual Fee</th>
                  <th className="p-3.5 rounded-tr-lg font-crest font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PROGRAMS.map((p, idx) => (
                  <tr key={p.id} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                    <td className="p-3.5 font-bold text-[#0a1f44]">
                      {p.name}
                      <span className="block text-[10px] text-[#c59b27] font-semibold">{p.affiliation}</span>
                    </td>
                    <td className="p-3.5 text-slate-600 whitespace-nowrap">{p.duration}</td>
                    <td className="p-3.5 text-slate-600 max-w-xs">{p.eligibility}</td>
                    <td className="p-3.5 font-bold text-[#0a1f44] whitespace-nowrap">{p.fees}</td>
                    <td className="p-3.5 text-right whitespace-nowrap">
                      <button
                        onClick={onOpenApply}
                        className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 border border-[#c59b27]/40 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships & Financial Assistance */}
        <div className="bg-[#0a1f44]/5 p-8 rounded-2xl border-2 border-[#c59b27]/40">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-[#0a1f44] font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#c59b27]" />
              <span>Financial Aid & Merit Concessions</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mb-3">
              Merit Scholarships up to 30% on Tuition Fees
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
              BSS Foundation firmly believes that financial hurdles should never stall academic merit. We offer generous fee grants for:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>Academic High Achievers (85%+ aggregate in Graduation/12th)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>National & State Level Sports Achievers</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>Economically Weaker Section (EWS) Assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>Tie-ups with Nationalized Banks for Education Loans</span>
              </li>
            </ul>

            <button
              onClick={onOpenApply}
              className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold px-5 py-2.5 rounded-lg border border-[#c59b27]/40 text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Check My Scholarship Eligibility
            </button>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-2">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ_LIST.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-bold text-xs sm:text-sm text-[#0a1f44] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
