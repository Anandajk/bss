import React from 'react';
import { motion } from 'motion/react';
import {
  Award, Target, Users, Landmark, BookOpen,
  CheckCircle2, Compass, ShieldCheck, HeartHandshake, ArrowRight
} from 'lucide-react';
import { INSTITUTION_INFO, LEADERSHIP } from '../data/bssData';

interface AboutPageProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenApply, onOpenBrochure }) => {
  return (
    <div className="bg-white">
      {/* Page Hero Banner (Yenepoya Style) */}
      <div className="relative py-20 bg-gradient-to-r from-[#051329] via-[#0a1f44] to-[#07152d] text-white border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              Institutional Profile & Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              About BSS Foundation
            </h1>
            <p className="text-amber-300 font-crest text-sm sm:text-base font-semibold mb-3">
              School of Management • "Beyond Education"
            </p>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              A not-for-profit educational organization registered under India's Ministry of Corporate Affairs (MCA), fostering ethical leadership, business intellect, and direct multinational employability.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Section 1: Who We Are & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm leading-relaxed">
            <div className="inline-flex items-center space-x-2 text-[#c59b27] font-bold text-xs uppercase tracking-wider">
              <Landmark className="w-4 h-4 text-[#c59b27]" />
              <span>Who We Are</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44]">
              Pioneering Industry-Centric Management Since 2010
            </h2>
            <p>
              BSS Foundation (School of Management) was established with a singular objective: to dismantle the artificial divide between classroom academics and dynamic corporate reality. Operating as a recognized not-for-profit registered under the <strong>Ministry of Corporate Affairs (MCA)</strong>, the Foundation maintains strategic campuses in Navi Mumbai (CBD Belapur) and Mumbai (University of Mumbai, Kalina).
            </p>
            <p>
              Under our defining guiding philosophy — <strong>"Beyond Education"</strong> — we don't just prepare students to clear examinations; we mold them into strategic thinkers capable of navigating uncertain markets, interpreting financial algorithms, and inspiring high-performance corporate teams.
            </p>
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xl font-extrabold font-heading text-[#0a1f44]">MCA Regd.</span>
                <p className="text-xs text-slate-500 mt-1">Not-for-profit educational foundation</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-xl font-extrabold font-heading text-[#0a1f44]">2 Campuses</span>
                <p className="text-xs text-slate-500 mt-1">CBD Belapur & Kalina University Campus</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="BSS Foundation Campus Life"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-200 shadow-lg flex items-center space-x-3">
                <img
                  src="/assets/aistudio/bssfoundation_2a96b483.png"
                  alt="BSS Foundation Logo"
                  className="h-11 w-auto object-contain flex-shrink-0"
                />
                <div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0a1f44]">BSS Foundation</h4>
                  <p className="text-[11px] text-slate-600 font-medium">School of Management • MCA Registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Vision, Mission & Core Values */}
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#c59b27] shadow-sm">
              <div className="flex items-center space-x-2 text-[#0a1f44] font-bold text-base mb-2">
                <Target className="w-5 h-5 text-[#c59b27]" />
                <h3 className="font-heading text-xl">Our Vision</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To be internationally recognized as a premier center of business education, applied analytics, and entrepreneurial leadership, empowering youth with ethical values and global corporate competencies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#0a1f44] shadow-sm">
              <div className="flex items-center space-x-2 text-[#0a1f44] font-bold text-base mb-2">
                <Compass className="w-5 h-5 text-[#0a1f44]" />
                <h3 className="font-heading text-xl">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                To provide accessible, high-caliber undergraduate and postgraduate management education that blends rigorous curriculum, experiential corporate mentorship, live problem-solving, and state-of-the-art technological tools.
              </p>
            </div>
          </div>

          <h3 className="font-heading font-bold text-lg text-[#0a1f44] mb-4 text-center">
            Our Core Institutional Pillars
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Integrity & Ethics", desc: "Instilling uncompromising corporate governance and honesty." },
              { title: "Academic Rigor", desc: "Harvard case studies and analytical precision in every subject." },
              { title: "Corporate Empathy", desc: "Understanding people, diversity, and collaborative leadership." },
              { title: "Lifelong Learning", desc: "Equipping students with skills to adapt to Industry 5.0." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                <div className="w-8 h-8 rounded-full bg-[#0a1f44] text-[#c59b27] flex items-center justify-center mx-auto mb-2 font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-heading font-bold text-sm text-[#0a1f44] mb-1">{val.title}</h4>
                <p className="text-xs text-slate-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Collaborations & University Affiliations */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Accredited Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-2">
              University Affiliations & Corporate Ties
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm">
              Our academic certifications and degree pathways are structured in association with reputed statutory bodies and universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#c59b27] shadow-sm transition-all text-center">
              <Award className="w-8 h-8 text-[#0a1f44] mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-1">
                University of Mumbai
              </h4>
              <p className="text-xs text-slate-600">
                Collaborative degree pathways and delivery center at Garware Institute (GICED), Kalina Campus.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#c59b27] shadow-sm transition-all text-center">
              <Landmark className="w-8 h-8 text-[#0a1f44] mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-1">
                Tilak Maharashtra Vidyapeeth (TMV)
              </h4>
              <p className="text-xs text-slate-600">
                Deemed-to-be University recognized under UGC Act 1956 for degree programs.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#c59b27] shadow-sm transition-all text-center">
              <ShieldCheck className="w-8 h-8 text-[#c59b27] mx-auto mb-3" />
              <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-1">
                Ministry of Corporate Affairs (MCA)
              </h4>
              <p className="text-xs text-slate-600">
                Registered non-profit institutional body governed by transparent statutory guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Academic Advisory Council */}
        <div className="bg-[#0a1f44] text-white rounded-2xl p-8 sm:p-12 shadow-xl border-t-4 border-[#c59b27]">
          <div className="max-w-3xl">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Academic Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mt-1 mb-4">
              Advisory Board & Corporate Mentors
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              Our Advisory Board comprises distinguished academics, retired vice-chancellors, senior corporate managing directors, and Fortune 500 CXOs who meet biannually to calibrate our academic curricula against the real-time requirements of global industry.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenApply}
                className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                Apply for 2027 Admissions
              </button>
              <button
                onClick={onOpenBrochure}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg text-xs sm:text-sm border border-white/20 cursor-pointer"
              >
                Download Institutional Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
