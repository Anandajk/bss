import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award, GraduationCap, ArrowRight, Video, Download } from 'lucide-react';
import { useData } from '../context/DataContext';

interface HeroSliderProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
  onOpenVirtualTour: () => void;
  onNavigatePrograms: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenApply,
  onOpenBrochure,
  onOpenVirtualTour,
  onNavigatePrograms
}) => {
  const { heroSlides } = useData();
  const slides = heroSlides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Ensure current slide is within bounds if slides array changes
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  // Auto-advance slides every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <div
      className="relative w-full h-[580px] md:h-[640px] lg:h-[680px] bg-[#051329] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background image */}
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Deep Academic Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051329]/95 via-[#0a1f44]/85 to-[#07152d]/80" />
          {/* Subtle Grid texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#c59b27_1px,transparent_1px)] opacity-10 [background-size:24px_24px]" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 bg-[#0a1f44]/90 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide border border-[#c59b27]/50 shadow-md mb-4"
          >
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>{activeSlide.badge}</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            key={`tagline-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-amber-400 font-crest text-xs md:text-sm tracking-widest uppercase font-bold mb-2"
          >
            {activeSlide.tagline}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight drop-shadow-md mb-4"
          >
            {activeSlide.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-200 text-sm md:text-base leading-relaxed mb-6 max-w-2xl"
          >
            {activeSlide.description}
          </motion.p>

          {/* Highlight Stat pill */}
          <motion.div
            key={`stat-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center space-x-2 bg-[#07152d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#c59b27]/30 text-amber-300 text-xs font-semibold mb-6"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>{activeSlide.stats}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            key={`btns-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={onOpenApply}
              className="bg-[#c59b27] hover:bg-[#b0891e] text-[#0a1f44] font-extrabold px-6 py-3 rounded-lg text-xs sm:text-sm shadow-lg flex items-center space-x-2 transition-all cursor-pointer"
            >
              <span>{activeSlide.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (currentSlide === 1) onOpenBrochure();
                else if (currentSlide === 2 || currentSlide === 3) onOpenVirtualTour();
                else onNavigatePrograms();
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg text-xs sm:text-sm backdrop-blur-sm border border-white/30 flex items-center space-x-2 transition-all hover:border-amber-400 cursor-pointer"
            >
              {currentSlide === 1 ? (
                <Download className="w-4 h-4 text-amber-400" />
              ) : currentSlide === 2 || currentSlide === 3 ? (
                <Video className="w-4 h-4 text-amber-400" />
              ) : null}
              <span>{activeSlide.secondaryCta}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls: Prev/Next */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators with Progress Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentSlide === idx
                ? 'w-8 h-2.5 bg-amber-400 shadow-md'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
