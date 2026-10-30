import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase, GraduationCap, Clock, Award, CheckCircle2,
  ArrowRight, X, Download, BookOpen, Layers
} from 'lucide-react';
import { PROGRAMS, Program } from '../data/bssData';

interface ProgramsSectionProps {
  onOpenApply: (programName?: string) => void;
  onOpenBrochure: () => void;
  selectedProgramId?: string;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onOpenApply,
  onOpenBrochure,
  selectedProgramId
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'Postgraduate' | 'Undergraduate' | 'Certification'>('all');
  const [activeProgramModal, setActiveProgramModal] = useState<Program | null>(() => {
    if (selectedProgramId) {
      return PROGRAMS.find(p => p.id === selectedProgramId) || null;
    }
    return null;
  });

  const filteredPrograms = activeTab === 'all'
    ? PROGRAMS
    : PROGRAMS.filter(p => p.degreeType === activeTab);

  return (
    <section id="programs" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Academic Wings & Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mb-3 tracking-tight">
            Industry-Aligned Pathways to Global Careers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Curriculums developed in tandem with university regulations and corporate advisory boards to deliver true executive competency and analytical mastery.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Offerings (9)' },
            { id: 'Postgraduate', label: 'Postgraduate & Dual (3)' },
            { id: 'Undergraduate', label: 'Undergraduate Degrees (5)' },
            { id: 'Certification', label: 'Industry Certifications (1)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0a1f44] text-amber-300 shadow-md ring-2 ring-[#c59b27]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPrograms.map((prog, idx) => (
              <motion.div
                key={prog.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 relative"
              >
                {/* Popular or Flagship Badge */}
                {prog.popular && (
                  <div className="absolute top-0 right-0 bg-[#c59b27] text-[#0a1f44] font-extrabold text-[10px] uppercase px-3 py-1 rounded-bl-lg tracking-wider shadow-sm flex items-center space-x-1">
                    <Award className="w-3 h-3 text-[#0a1f44]" />
                    <span>High Demand</span>
                  </div>
                )}

                <div className="p-6">
                  {/* Header info */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-[#0a1f44]/10 text-[#0a1f44] text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                      {prog.degreeType}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-slate-500 text-xs font-semibold flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{prog.duration}</span>
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-heading font-bold text-xl text-[#0a1f44] group-hover:text-[#c59b27] transition-colors mb-2.5 leading-snug">
                    {prog.name}
                  </h3>

                  {/* Affiliation / Partner */}
                  <p className="text-slate-700 text-xs font-medium bg-slate-100 px-2.5 py-1 rounded border border-slate-200 mb-3">
                    {prog.affiliation}
                  </p>

                  {/* Brief overview */}
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {prog.overview}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    {prog.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Career Roles Tags */}
                  <div>
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Career Pathways:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.careerRoles.slice(0, 3).map((role, rIdx) => (
                        <span
                          key={rIdx}
                          className="bg-slate-100 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProgramModal(prog)}
                    className="text-xs font-bold text-[#0a1f44] hover:text-[#c59b27] flex items-center space-x-1 cursor-pointer transition-colors py-1.5 px-2"
                  >
                    <span>Full Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenApply(prog.name)}
                    className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all shadow-sm cursor-pointer border border-[#c59b27]/30"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#0a1f44] rounded-xl p-6 sm:p-8 text-white shadow-xl border-t-2 border-[#c59b27] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
              Need personalized guidance to choose your degree?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our academic counselors are available at both Belapur and Kalina campuses to evaluate your aptitude, discuss fee installments, and explore scholarship eligibility.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenApply()}
              className="bg-[#c59b27] hover:bg-[#b0891e] text-[#0a1f44] font-extrabold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Start Admission Process
            </button>
            <button
              onClick={onOpenBrochure}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm border border-white/30 flex items-center space-x-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Full Prospectus (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Program Detailed Syllabus Modal */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#c59b27]/40 animate-fadeIn">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#0a1f44] text-white p-6 z-10 flex items-start justify-between border-b-2 border-[#c59b27]">
              <div>
                <span className="bg-[#c59b27] text-[#0a1f44] font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded tracking-wider">
                  {activeProgramModal.degreeType} Program
                </span>
                <h3 className="font-heading text-2xl font-bold mt-2 text-white">
                  {activeProgramModal.name}
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  Duration: {activeProgramModal.duration} • {activeProgramModal.affiliation}
                </p>
              </div>
              <button
                onClick={() => setActiveProgramModal(null)}
                className="p-1.5 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Overview */}
              <div>
                <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-2 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-[#c59b27]" />
                  <span>Program Overview</span>
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {activeProgramModal.overview}
                </p>
              </div>

              {/* Eligibility & Fees */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">
                    Eligibility Criteria
                  </h5>
                  <p className="text-slate-800 text-xs leading-relaxed">
                    {activeProgramModal.eligibility}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-1">
                    Tuition & Fee Structure
                  </h5>
                  <p className="text-[#0a1f44] font-extrabold text-sm">
                    {activeProgramModal.fees}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Merit scholarship discounts apply automatically during interview.
                  </p>
                </div>
              </div>

              {/* Specializations if any */}
              {activeProgramModal.specializations && (
                <div>
                  <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-2.5 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-[#c59b27]" />
                    <span>Offered Specializations</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProgramModal.specializations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-[#0a1f44]/10 text-[#0a1f44] font-bold text-xs px-3 py-1.5 rounded-md border border-[#0a1f44]/20"
                      >
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Curriculum Breakdown */}
              <div>
                <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-3 flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#c59b27]" />
                  <span>Curriculum & Semester Syllabus Outline</span>
                </h4>
                <div className="space-y-3">
                  {activeProgramModal.curriculum.map((sem, sIdx) => (
                    <div key={sIdx} className="border border-slate-200 rounded-lg p-3 bg-white">
                      <h5 className="font-bold text-xs text-[#0a1f44] uppercase tracking-wide mb-1.5">
                        {sem.semester}
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                        {sem.subjects.map((sub, subIdx) => (
                          <li key={subIdx} className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Roles */}
              <div>
                <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-2">
                  Top Executive Career Roles
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProgramModal.careerRoles.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="bg-slate-100 text-[#0a1f44] font-semibold text-xs px-2.5 py-1 rounded border border-slate-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setActiveProgramModal(null);
                  onOpenBrochure();
                }}
                className="text-xs font-bold text-slate-700 hover:text-[#0a1f44] flex items-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-500" />
                <span>Download Syllabus (PDF)</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveProgramModal(null)}
                  className="px-4 py-2 border border-slate-300 rounded text-xs font-bold text-slate-600 hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const progName = activeProgramModal.name;
                    setActiveProgramModal(null);
                    onOpenApply(progName);
                  }}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 border border-[#c59b27]/40 px-5 py-2 rounded text-xs font-bold shadow transition-all cursor-pointer"
                >
                  Apply For This Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
