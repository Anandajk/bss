import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Briefcase, Compass, ArrowRight } from 'lucide-react';

interface QuickAccessCardsProps {
  onOpenApply: () => void;
  onNavigate: (page: string) => void;
  onOpenVirtualTour: () => void;
}

export const QuickAccessCards: React.FC<QuickAccessCardsProps> = ({
  onOpenApply,
  onNavigate,
  onOpenVirtualTour
}) => {
  const cards = [
    {
      id: "admissions",
      title: "Admissions 2025-26",
      subtitle: "Merit Assessment & Spot Offers",
      description: "Direct admissions open for PGDBM+MBA, BBA, BCA (Hons) and B.Sc Data Science & AI. Up to 30% scholarship.",
      icon: GraduationCap,
      actionText: "Apply Online Now",
      onClick: onOpenApply
    },
    {
      id: "programs",
      title: "Academic Programs",
      subtitle: "Industry-Aligned Curriculum",
      description: "Undergraduate & Postgraduate degrees with Harvard case study pedagogy, live projects, and dual specializations.",
      icon: Award,
      actionText: "Browse All Courses",
      onClick: () => onNavigate('programs')
    },
    {
      id: "placements",
      title: "Placements & Careers",
      subtitle: "₹22 LPA Highest CTC",
      description: "Over 150+ corporate recruiting partners including Accenture, Deloitte, TCS, Wipro, HDFC, Airbus, and ICICI.",
      icon: Briefcase,
      actionText: "View Placements",
      onClick: () => onNavigate('placements')
    },
    {
      id: "campus",
      title: "Campus Infrastructure",
      subtitle: "Belapur & Kalina Campuses",
      description: "Explore GPU AI computing labs, smart amphitheatres, digital business library, and modern student hostels.",
      icon: Compass,
      actionText: "Take 360° Tour",
      onClick: onOpenVirtualTour
    }
  ];

  return (
    <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={card.onClick}
              className="bg-[#0a1f44] rounded-xl p-6 text-white shadow-xl border-t-2 border-[#c59b27] cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#c59b27]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#c59b27]/15 transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-lg bg-white/10 text-amber-300 border border-white/10 group-hover:bg-[#c59b27] group-hover:text-[#0a1f44] transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-crest tracking-widest text-slate-300 uppercase font-semibold">
                    0{idx + 1} • PORTAL
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-amber-400 text-xs font-semibold mb-2">
                  {card.subtitle}
                </p>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 mb-4">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
                <span>{card.actionText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
