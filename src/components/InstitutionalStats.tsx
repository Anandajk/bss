import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Building, Briefcase, GraduationCap } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/bssData';

export const InstitutionalStats: React.FC = () => {
  const stats = [
    {
      value: "₹22 LPA",
      label: "Highest Placement Package",
      sub: "Leading Multinational CTC",
      icon: TrendingUp
    },
    {
      value: "₹9.11 LPA",
      label: "Average CTC (2024 Batch)",
      sub: "Across All Management Streams",
      icon: Award
    },
    {
      value: "150+",
      label: "Top Corporate Recruiters",
      sub: "BFSI, IT, FMCG & Consulting",
      icon: Briefcase
    },
    {
      value: "100%",
      label: "Placement Assistance",
      sub: "Dedicated Pre-Placement Cell",
      icon: GraduationCap
    },
    {
      value: "4,000+",
      label: "Global Alumni Community",
      sub: "In Leading Global Enterprises",
      icon: Users
    },
    {
      value: "2 Campuses",
      label: "Strategic Mumbai Locations",
      sub: "CBD Belapur & Kalina University",
      icon: Building
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <span>Institutional Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mb-3 tracking-tight">
            Proven Record of Trust & Career Impact
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Registered under the Ministry of Corporate Affairs (MCA), BSS Foundation connects academic rigor with executive readiness.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-[#0a1f44] text-white rounded-xl p-5 text-center shadow-md border-b-2 border-[#c59b27] flex flex-col items-center justify-between group relative overflow-hidden"
              >
                <div className="p-2.5 rounded-lg bg-white/10 mb-3 text-amber-300 group-hover:bg-[#c59b27] group-hover:text-[#0a1f44] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-amber-300 font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-white leading-tight mb-1">
                    {stat.label}
                  </div>
                </div>
                <div className="text-[10px] text-slate-300 border-t border-white/10 pt-2 w-full mt-2">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
