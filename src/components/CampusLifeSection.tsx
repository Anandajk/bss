import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Compass, Laptop, BookOpen, Users, Building2,
  Tv, CheckCircle2, ArrowRight
} from 'lucide-react';

interface CampusLifeSectionProps {
  onOpenVirtualTour: () => void;
  onOpenApply: () => void;
}

export const CampusLifeSection: React.FC<CampusLifeSectionProps> = ({
  onOpenVirtualTour,
  onOpenApply
}) => {
  const [activeTab, setActiveTab] = useState('labs');

  const facilities = [
    {
      id: 'labs',
      name: 'AI & Data Science Workstations',
      icon: Laptop,
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
      description: "High-performance GPU-enabled computer lab configured for Python, machine learning, neural networks, Big Data analytics, and financial simulation tools.",
      features: [
        "Dedicated workstations with dual monitors & high-speed fiber internet",
        "Configured with TensorFlow, PyTorch, Tableau, R & PowerBI suites",
        "Real-world datasets from financial exchanges and corporate partners",
        "24/7 access during capstone project cycles & hackathons"
      ]
    },
    {
      id: 'classrooms',
      name: 'Smart Amphitheatres & Classrooms',
      icon: Tv,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      description: "Ergonomically designed tiered lecture theatres equipped with interactive smart boards, acoustic sound systems, and high-definition video conferencing for hybrid global guest lectures.",
      features: [
        "Interactive digital smart screens & document cameras",
        "Acoustically tuned seating designed for Harvard case study debates",
        "Integrated video recording for lecture archives & review",
        "Fully air-conditioned modern executive ambiance"
      ]
    },
    {
      id: 'library',
      name: 'Digital Management Library',
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      description: "A treasure trove of management wisdom with over 15,000 physical volumes, international journal subscriptions, Harvard Business Review cases, and online digital repositories.",
      features: [
        "Online access to EBSCO, J-GATE, and ProQuest journals",
        "Quiet individual research carrels & collaborative group study pods",
        "Corporate annual reports & national economic surveys",
        "Dedicated dissertation assistance cell"
      ]
    },
    {
      id: 'clubs',
      name: 'Student Clubs & Cultural Life',
      icon: Users,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
      description: "Vibrant student-driven bodies fostering leadership, peer networking, and managerial excellence outside the academic classroom.",
      features: [
        "MarkX: The Marketing & Brand Ideation Club",
        "Bull & Bear: FinTech, Equity & Investment Society",
        "AI & Tech Guild: Coding, Hackathons & Automation",
        "Aarohan: Annual Inter-Collegiate Cultural & Sports Fest"
      ]
    },
    {
      id: 'hostel',
      name: 'Hostel & Residence Support',
      icon: Building2,
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      description: "Safe, comfortable, and well-managed residential arrangements coordinated near both CBD Belapur and Kalina campuses for male and female outstation students.",
      features: [
        "Separate hostel facilities for boys and girls with 24/7 security & CCTV",
        "High-speed Wi-Fi internet and hygienic nutritional mess options",
        "Proximity to local transit, suburban rail & metro lines",
        "Resident warden supervision and emergency medical support"
      ]
    }
  ];

  const currentFacility = facilities.find(f => f.id === activeTab) || facilities[0];

  return (
    <section id="campus" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Infrastructure & Campus Vibe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mb-3 tracking-tight">
            World-Class Spaces Built For Modern Minds
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Spanning strategic campuses in Mumbai and Navi Mumbai, BSS Foundation balances technology-infused academic hubs with engaging community life.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Facility Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <button
                key={fac.id}
                onClick={() => setActiveTab(fac.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  activeTab === fac.id
                    ? 'bg-[#0a1f44] text-amber-300 shadow-sm ring-2 ring-[#c59b27]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{fac.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFacility.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Visual Column */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[350px]">
              <img
                src={currentFacility.image}
                alt={currentFacility.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="bg-[#c59b27] text-[#0a1f44] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow">
                    BSS Campus Experience
                  </span>
                  <h4 className="font-heading font-bold text-xl text-white mt-1">
                    {currentFacility.name}
                  </h4>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mb-3">
                  {currentFacility.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {currentFacility.description}
                </p>

                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0a1f44] mb-3">
                  Key Amenities & Equipment:
                </h4>
                <div className="space-y-2.5 mb-6">
                  {currentFacility.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={onOpenVirtualTour}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all cursor-pointer flex items-center space-x-1.5 border border-[#c59b27]/40"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Launch 360° Virtual Tour</span>
                </button>

                <button
                  onClick={onOpenApply}
                  className="text-xs font-bold text-[#0a1f44] hover:text-[#c59b27] flex items-center space-x-1 cursor-pointer"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
