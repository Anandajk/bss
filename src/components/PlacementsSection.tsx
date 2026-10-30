import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase, TrendingUp, Award, Building, CheckCircle2,
  Download, ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { RECRUITERS, TESTIMONIALS, Recruiter } from '../data/bssData';

interface PlacementsSectionProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const PlacementsSection: React.FC<PlacementsSectionProps> = ({
  onOpenApply,
  onOpenBrochure
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const categories = ['All', 'IT & Tech', 'Banking & BFSI', 'Conglomerates & Mfg', 'Consulting & Analytics'];

  const filteredRecruiters = selectedCategory === 'All'
    ? RECRUITERS
    : RECRUITERS.filter(r => r.category === selectedCategory);

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="placements" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Corporate Relations & Placements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mb-3 tracking-tight">
            Industry Connections That Transform Careers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            With over 150+ corporate recruiting relationships, our graduates are hand-picked by leading Fortune 500 multinationals and top Indian conglomerates.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlights Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="bg-[#0a1f44] text-white p-6 rounded-xl border-t-2 border-[#c59b27] shadow-sm">
            <span className="text-[11px] uppercase font-bold tracking-widest text-amber-300">
              Peak Package
            </span>
            <div className="text-3xl font-extrabold font-heading text-amber-300 my-1">
              ₹22 LPA
            </div>
            <p className="text-xs text-slate-300">
              Highest international & domestic CTC offered
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-t-2 border-[#0a1f44] shadow-sm border border-slate-200">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#0a1f44]">
              Batch Average
            </span>
            <div className="text-3xl font-extrabold font-heading text-[#0a1f44] my-1">
              ₹9.11 LPA
            </div>
            <p className="text-xs text-slate-600">
              Average CTC across management disciplines
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-t-2 border-[#c59b27] shadow-sm border border-slate-200">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#a47e18]">
              Top 25% Quartile
            </span>
            <div className="text-3xl font-extrabold font-heading text-[#0a1f44] my-1">
              ₹12.8 LPA
            </div>
            <p className="text-xs text-slate-600">
              Average package for top performers & dual specializations
            </p>
          </div>

          <div className="bg-[#0a1f44] text-white p-6 rounded-xl border-t-2 border-[#c59b27] shadow-sm">
            <span className="text-[11px] uppercase font-bold tracking-widest text-amber-300">
              Hiring Partners
            </span>
            <div className="text-3xl font-extrabold font-heading text-white my-1">
              150+ MNCs
            </div>
            <p className="text-xs text-slate-300">
              Active campus recruitment corporate tie-ups
            </p>
          </div>
        </div>

        {/* Corporate Recruiters Wall */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 p-6 sm:p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <h3 className="font-heading font-bold text-2xl text-[#0a1f44]">
                Top Corporate Recruiters
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Filter recruiters by industry domain
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0a1f44] text-amber-300 shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Recruiter Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-6">
            {filteredRecruiters.map((rec, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-50 hover:bg-amber-50/50 rounded-lg p-4 border border-slate-200 hover:border-amber-400 transition-all text-center flex flex-col items-center justify-center min-h-[90px] shadow-sm group"
              >
                <span className="font-crest font-extrabold text-base sm:text-lg text-[#0a1f44] tracking-wider group-hover:text-[#c59b27] transition-colors">
                  {rec.logoText}
                </span>
                <span className="text-[10px] text-slate-500 mt-1 font-medium">
                  {rec.category}
                </span>
                <span className="text-[9px] text-amber-700 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {rec.highestRole}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              ...and 130+ additional corporate houses across IT, BFSI, FMCG, and Consulting.
            </p>
          </div>
        </div>

        {/* Student Placement Testimonials Carousel */}
        <div className="bg-gradient-to-br from-[#0a1f44] to-[#071630] rounded-2xl text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
                Student Success Stories
              </span>
              <h3 className="font-heading font-bold text-2xl text-white mt-1">
                From BSS Classrooms to Corporate Boardrooms
              </h3>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Active Item */}
          {(() => {
            const current = TESTIMONIALS[activeTestimonialIdx];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-4 flex flex-col items-center sm:items-start">
                  <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl mb-3">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-white">
                    {current.name}
                  </h4>
                  <p className="text-amber-300 text-xs font-semibold">
                    {current.course} • {current.batch}
                  </p>
                  <div className="mt-3 bg-amber-400/20 text-amber-300 px-3 py-1 rounded text-xs font-bold border border-amber-400/40 inline-flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Package: {current.package}</span>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider mb-3 bg-white/10 px-3 py-1 rounded-md border border-white/15">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Verified Corporate Placement</span>
                  </div>

                  <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed mb-6 font-serif">
                    "{current.quote}"
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center space-x-3 text-xs text-slate-300">
                    <span className="font-bold text-white">Placed at:</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded font-crest text-amber-300 text-sm">
                      {current.company}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-200 font-semibold">{current.role}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIdx(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  activeTestimonialIdx === idx
                    ? 'w-6 h-2 bg-amber-400'
                    : 'w-2 h-2 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
