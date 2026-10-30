import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Bell, MapPin, ArrowRight } from 'lucide-react';
import { UPCOMING_EVENTS } from '../data/bssData';

interface NewsEventsProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
}

export const NewsEventsSection: React.FC<NewsEventsProps> = ({ onOpenApply, onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-2">
              <Bell className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Happenings & Circulars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] tracking-tight">
              Campus News & Upcoming Events
            </h2>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="text-xs sm:text-sm font-bold text-[#0a1f44] hover:text-[#c59b27] flex items-center space-x-1 cursor-pointer bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
          >
            <span>Subscribe to Notifications</span>
            <ArrowRight className="w-4 h-4 text-[#c59b27]" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UPCOMING_EVENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-[#0a1f44]">
                    {item.category}
                  </span>
                  <span className="bg-amber-50 text-[#0a1f44] border border-[#c59b27]/30 text-[10px] font-bold px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#0a1f44] mb-2">
                  <Calendar className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>{item.date}</span>
                </div>

                <h3 className="font-heading font-bold text-base text-[#0a1f44] group-hover:text-[#c59b27] transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1 truncate max-w-[150px]">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span className="truncate">{item.venue}</span>
                </span>

                <button
                  onClick={onOpenApply}
                  className="font-bold text-[#0a1f44] hover:text-[#c59b27] text-xs cursor-pointer"
                >
                  Register →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
