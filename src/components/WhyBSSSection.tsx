import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Award, Users2, Landmark, Rocket } from 'lucide-react';

export const WhyBSSSection: React.FC = () => {
  const pillars = [
    {
      title: '"Beyond Education" Philosophy',
      desc: "Moving past traditional textbook rote memorization into real-time business decision simulation, critical thinking, and ethical leadership.",
      icon: Target,
      tag: "Core Pedagogy"
    },
    {
      title: "Triple Specialization Advantage",
      desc: "Empowering management graduates to master three concurrent fields (e.g. FinTech, Marketing & Analytics) for unmatched resume resilience.",
      icon: Award,
      tag: "Career Edge"
    },
    {
      title: "CXO & Corporate Mentorship",
      desc: "One-on-one executive mentorship from CXOs, Directors, and Vice Presidents across top Mumbai financial institutions and IT firms.",
      icon: Users2,
      tag: "Executive Network"
    },
    {
      title: "6 Value-Added Certifications",
      desc: "Embedded Lean Six Sigma Green Belt, SAP S/4HANA ERP, Advanced Financial Modeling, and Google Digital Marketing at zero extra tuition.",
      icon: ShieldCheck,
      tag: "Global Credentials"
    },
    {
      title: "Mumbai & Navi Mumbai Nexus",
      desc: "Proximity to India's financial capital, Bandra-Kurla Complex (BKC), and Navi Mumbai tech hubs provides year-round internships.",
      icon: Landmark,
      tag: "Strategic Location"
    },
    {
      title: "100% Guaranteed Placement Support",
      desc: "A rigorous 360-degree pre-placement grooming cell, technical interview workshops, and direct on-campus recruiting by 150+ corporations.",
      icon: Rocket,
      tag: "Placement Record"
    }
  ];

  return (
    <section className="py-20 bg-[#0a1f44] text-white relative overflow-hidden">
      {/* Subtle Grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#c59b27_1px,transparent_1px)] opacity-10 [background-size:28px_28px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/40 mb-3">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>The BSS Distinctive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-3 tracking-tight">
            Why Visionary Students Choose BSS Foundation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are dedicated to producing agile decision-makers, innovative thinkers, and empathetic leaders ready to navigate modern corporate dynamics.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#07152d] rounded-xl p-6 border border-white/10 hover:border-[#c59b27]/60 transition-all shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-lg bg-white/10 text-amber-300 border border-white/10 group-hover:bg-[#c59b27] group-hover:text-[#0a1f44] transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 bg-white/5 px-2.5 py-1 rounded">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-[11px] text-amber-300 font-semibold">
                  <span>Explore Advantage →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
