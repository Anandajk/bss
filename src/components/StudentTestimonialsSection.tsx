import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Quote, ChevronLeft, ChevronRight, CheckCircle2,
  GraduationCap, Award, Building2, MapPin, Play, Pause,
  ArrowRight, Users, MessageSquare
} from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/bssData';

interface StudentTestimonialsSectionProps {
  onOpenApply: () => void;
  onOpenEnquiry?: () => void;
}

export const StudentTestimonialsSection: React.FC<StudentTestimonialsSectionProps> = ({
  onOpenApply,
  onOpenEnquiry
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'alumni' | 'current'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filter testimonials based on selected tab
  const filteredList: Testimonial[] = React.useMemo(() => {
    if (selectedFilter === 'all') return TESTIMONIALS;
    return TESTIMONIALS.filter(t => t.type === selectedFilter);
  }, [selectedFilter]);

  // Ensure current index is within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  // Auto-rotating timer (every 6 seconds)
  useEffect(() => {
    if (isPlaying && !isHovered && filteredList.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredList.length);
      }, 6000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered, filteredList.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredList.length) % filteredList.length);
  };

  const current = filteredList[currentIndex] || filteredList[0];

  return (
    <section
      id="student-testimonials"
      className="py-20 bg-white border-y border-slate-200/80 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Minimal Academic Discipline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[#c59b27] font-bold text-xs uppercase tracking-wider mb-2">
              <Users className="w-4 h-4 text-[#c59b27]" />
              <span>Voices of BSS Foundation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] tracking-tight">
              Student & Alumni Testimonials
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mt-3 mb-2 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Read first-hand reflections from accomplished alumni working at premier global multinationals and current students leading campus initiatives across Mumbai.
            </p>
          </div>

          {/* Filter Pills and Carousel Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Filter Tabs */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-semibold">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-[#0a1f44] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0a1f44]'
                }`}
              >
                All Voices ({TESTIMONIALS.length})
              </button>
              <button
                onClick={() => setSelectedFilter('alumni')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'alumni'
                    ? 'bg-[#0a1f44] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0a1f44]'
                }`}
              >
                Alumni ({TESTIMONIALS.filter(t => t.type === 'alumni').length})
              </button>
              <button
                onClick={() => setSelectedFilter('current')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedFilter === 'current'
                    ? 'bg-[#0a1f44] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0a1f44]'
                }`}
              >
                Current Students ({TESTIMONIALS.filter(t => t.type === 'current').length})
              </button>
            </div>

            {/* Rotation Play/Pause & Chevrons */}
            <div className="flex items-center space-x-1.5">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title={isPlaying ? "Pause rotation" : "Play rotation"}
                aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Previous testimonial"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Next testimonial"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Showcase Card with Clean Minimal Neutral Palette */}
        {current && (
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl shadow-sm overflow-hidden mb-10 transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column: Photo & Credentials */}
                <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="relative mb-5">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-3 border-white shadow-md bg-slate-200">
                      <img
                        src={current.image}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Status badge */}
                    <div className="absolute -bottom-2 -right-2">
                      <span className={`inline-flex items-center space-x-1 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm border ${
                        current.type === 'alumni'
                          ? 'bg-[#0a1f44] text-white border-[#0a1f44]'
                          : 'bg-[#c59b27] text-[#0a1f44] border-[#a47e18]'
                      }`}>
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>{current.type === 'alumni' ? 'Alumni' : 'Current Student'}</span>
                      </span>
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0a1f44]">
                    {current.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#c59b27] mt-1">
                    {current.course}
                  </p>

                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {current.batch}
                  </p>

                  {current.campus && (
                    <div className="inline-flex items-center space-x-1.5 text-[11px] text-slate-600 mt-2">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{current.campus}</span>
                    </div>
                  )}

                  {/* Highlight pill */}
                  {current.highlight && (
                    <div className="mt-4 bg-white px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-[#0a1f44] shadow-xs flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                      <span className="text-[11px] leading-tight">{current.highlight}</span>
                    </div>
                  )}
                </div>

                {/* Right Column: Rotating Quote & Association */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    {/* Quotation Icon and Verified Label */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#c59b27] flex items-center justify-center shadow-xs">
                        <Quote className="w-5 h-5 fill-current" />
                      </div>

                      <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0a1f44] bg-white px-3 py-1 rounded-full border border-slate-200">
                        <Award className="w-3.5 h-3.5 text-[#c59b27]" />
                        <span>Authentic Student Perspective</span>
                      </div>
                    </div>

                    {/* Main Quote Text with Elegant Spacing */}
                    <blockquote className="text-base sm:text-xl lg:text-2xl text-slate-800 font-serif italic leading-relaxed sm:leading-normal mb-8 text-left">
                      "{current.quote}"
                    </blockquote>
                  </div>

                  {/* Association Footer Bar */}
                  <div className="pt-5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-lg bg-[#0a1f44] text-[#c59b27] flex items-center justify-center font-bold text-xs flex-shrink-0">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          {current.type === 'alumni' ? 'Corporate Placement' : 'Campus Role / Association'}
                        </span>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#0a1f44]">
                            {current.company}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-xs text-slate-600 font-medium">
                            {current.role}
                          </span>
                          {current.linkedinUrl && (
                            <a
                              href={current.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={`Chat with ${current.name} on LinkedIn`}
                              className="inline-flex items-center space-x-1.5 ml-1 bg-[#0077b5] hover:bg-[#005f93] text-white px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all hover:scale-105 shadow-xs cursor-pointer"
                            >
                              <svg className="w-3.5 h-3.5 fill-current flex-shrink-0" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                              <MessageSquare className="w-3 h-3 text-amber-300 flex-shrink-0" />
                              <span>Chat on LinkedIn</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {current.package && (
                      <div className="self-start sm:self-auto bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs">
                        <span className="text-slate-500 mr-1 text-[11px]">Record:</span>
                        <span className="font-extrabold text-[#0a1f44]">{current.package}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Progress Dots & Bar */}
            <div className="bg-white/80 border-t border-slate-200 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium text-[11px]">
                Showing {currentIndex + 1} of {filteredList.length} reviews
              </span>

              <div className="flex items-center space-x-1.5">
                {filteredList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? 'w-6 h-2 bg-[#0a1f44]'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    title={`Go to testimonial ${idx + 1}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Selector Rail: Prospective students can click any person directly */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-[#0a1f44] uppercase tracking-wider">
              Browse More Experiences
            </span>
            <span className="text-xs text-slate-500">
              Click any photo to view their journey
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {filteredList.map((t, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center sm:items-start group ${
                    isActive
                      ? 'border-[#c59b27] bg-[#0a1f44] text-white shadow-sm ring-1 ring-[#c59b27]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden mb-2 bg-slate-100 flex-shrink-0 border">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h4 className="font-heading font-bold text-xs truncate w-full text-center sm:text-left">
                    {t.name.split(' ')[0]}
                  </h4>
                  <p className={`text-[10px] truncate w-full text-center sm:text-left ${
                    isActive ? 'text-amber-300' : 'text-slate-500'
                  }`}>
                    {t.type === 'alumni' ? t.company : 'Student'}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Institutional Trust Pillars & Call-to-Action Strip */}
        <div className="bg-[#0a1f44] text-white rounded-2xl p-6 sm:p-8 border-t-4 border-[#c59b27] shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider block mb-1">
                Beyond Education
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
                Join Over 4,000+ Leaders Shaping Corporate India
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Experience the BSS Foundation edge with Harvard case studies, paid corporate internships, dual campuses in Belapur and Kalina, and 100% dedicated placement support.
              </p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="border-l-2 border-[#c59b27] pl-2.5">
                  <span className="font-extrabold text-base text-white block">₹22 LPA</span>
                  <span className="text-slate-400 text-[11px]">Highest CTC</span>
                </div>
                <div className="border-l-2 border-[#c59b27] pl-2.5">
                  <span className="font-extrabold text-base text-white block">₹9.11 LPA</span>
                  <span className="text-slate-400 text-[11px]">Average CTC</span>
                </div>
                <div className="border-l-2 border-[#c59b27] pl-2.5">
                  <span className="font-extrabold text-base text-white block">150+</span>
                  <span className="text-slate-400 text-[11px]">Recruiting MNCs</span>
                </div>
                <div className="border-l-2 border-[#c59b27] pl-2.5">
                  <span className="font-extrabold text-base text-white block">100%</span>
                  <span className="text-slate-400 text-[11px]">Assistance</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <button
                onClick={onOpenApply}
                className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Apply for 2027 Admissions</span>
                <ArrowRight className="w-4 h-4 text-[#0a1f44]" />
              </button>
              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Connect with a Counselor</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
