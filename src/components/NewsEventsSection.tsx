import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Bell, MapPin, ArrowRight, Clock,
  User, CheckCircle2, Download, Tag, Filter,
  Building2, AlertCircle, FileText, ChevronRight
} from 'lucide-react';
import { EventItem, AnnouncementItem } from '../data/bssData';
import { useData } from '../context/DataContext';

interface NewsEventsProps {
  onOpenApply: () => void;
  onOpenEnquiry: () => void;
  onNavigateToDepartments?: () => void;
}

export const NewsEventsSection: React.FC<NewsEventsProps> = ({
  onOpenApply,
  onOpenEnquiry,
  onNavigateToDepartments
}) => {
  const { events, announcements } = useData();
  const [activeTab, setActiveTab] = useState<'events' | 'announcements'>('events');
  const [selectedOrganizingTag, setSelectedOrganizingTag] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract all unique organizing bodies for the tag filter options
  const organizingBodies = useMemo(() => {
    const list = new Set<string>();
    events.forEach((e) => list.add(e.organizingBody));
    announcements.forEach((a) => list.add(a.organizingBody));
    return ['All', ...Array.from(list)];
  }, [events, announcements]);

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchTag = selectedOrganizingTag === 'All' || e.organizingBody === selectedOrganizingTag;
      const matchCat = selectedCategory === 'All' || e.category === selectedCategory;
      return matchTag && matchCat;
    });
  }, [events, selectedOrganizingTag, selectedCategory]);

  // Filtered Announcements
  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((a) => {
      const matchTag = selectedOrganizingTag === 'All' || a.organizingBody === selectedOrganizingTag;
      return matchTag;
    });
  }, [announcements, selectedOrganizingTag]);

  const handleDownloadCircular = (ann: AnnouncementItem) => {
    // Generate text/circular file download
    const content = `=====================================================
BSS FOUNDATION - SCHOOL OF MANAGEMENT
OFFICIAL INSTITUTIONAL ANNOUNCEMENT / CIRCULAR
=====================================================
Circular Reference No: ${ann.circularNo}
Date of Release: ${ann.date}
Category: ${ann.category}
Organizing Department / Cell: ${ann.organizingBody}
Status: ${ann.urgent ? 'URGENT NOTIFICATION' : 'STANDARD CIRCULAR'}
Title: ${ann.title}

SUMMARY & NOTIFICATION DETAILS:
${ann.summary}

Issued by Authority:
Academic & Administrative Directorate,
BSS Foundation (School of Management)
CBD Belapur & Kalina University Campus, Mumbai
Website: https://bssfoundation.net | Email: info@bssfoundation.net
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${ann.circularNo.replace(/\//g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="events" className="py-20 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-2">
              <Bell className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Campus Happenings & Circulars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] tracking-tight">
              Events, Masterclasses & Official Circulars
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mt-3 mb-2 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Explore upcoming conclaves, placements drives, and academic hackathons organized across our cells and departments.
            </p>
          </div>

          {/* Dual Main Switcher: Events vs Announcements */}
          <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-xs text-xs font-bold self-start md:self-auto">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === 'events'
                  ? 'bg-[#0a1f44] text-amber-300 shadow-sm'
                  : 'text-slate-600 hover:text-[#0a1f44]'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Upcoming Events ({events.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer flex items-center space-x-2 ${
                activeTab === 'announcements'
                  ? 'bg-[#0a1f44] text-amber-300 shadow-sm'
                  : 'text-slate-600 hover:text-[#0a1f44]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Announcements & Circulars ({announcements.length})</span>
            </button>
          </div>
        </div>

        {/* Tag Option Filter Bar: Organised by Cell or Department */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2 text-xs font-bold text-[#0a1f44] uppercase tracking-wider">
              <Tag className="w-4 h-4 text-[#c59b27]" />
              <span>Filter by Organizing Cell or Department:</span>
            </div>
            {selectedOrganizingTag !== 'All' && (
              <button
                onClick={() => setSelectedOrganizingTag('All')}
                className="text-xs text-[#c59b27] hover:underline font-semibold self-start sm:self-auto cursor-pointer"
              >
                Clear Department Filter
              </button>
            )}
          </div>

          {/* Tag Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {organizingBodies.map((body) => (
              <button
                key={body}
                onClick={() => setSelectedOrganizingTag(body)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  selectedOrganizingTag === body
                    ? 'bg-[#0a1f44] text-white border-[#0a1f44] shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                {body === 'All' ? 'All Organizing Bodies' : body}
              </button>
            ))}
          </div>
        </div>

        {/* Tab 1: UPCOMING EVENTS VIEW */}
        {activeTab === 'events' && (
          <div>
            {filteredEvents.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 my-6">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="font-heading font-bold text-base text-[#0a1f44]">
                  No events found for this organizing department
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Try selecting "All Organizing Bodies" to view the full calendar of campus events.
                </p>
                <button
                  onClick={() => setSelectedOrganizingTag('All')}
                  className="mt-3 px-4 py-2 bg-[#0a1f44] text-amber-300 rounded-lg text-xs font-bold cursor-pointer"
                >
                  View All Events
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredEvents.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-5 shadow-xs hover:shadow-md border border-slate-200 hover:border-[#c59b27]/60 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Department / Organizing Body Tag */}
                      <div className="mb-3">
                        <div className="inline-flex items-center space-x-1.5 bg-slate-100 text-[#0a1f44] text-[10px] font-bold px-2.5 py-1 rounded-md border border-slate-200 w-full truncate">
                          <Building2 className="w-3 h-3 text-[#c59b27] flex-shrink-0" />
                          <span className="truncate" title={`Organized by ${item.organizingBody}`}>
                            {item.organizingBody}
                          </span>
                        </div>
                      </div>

                      {/* Category & Badge */}
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#0a1f44]/10 text-[#0a1f44]">
                          {item.category}
                        </span>
                        <span className="bg-amber-50 text-[#8c6b16] border border-[#c59b27]/30 text-[10px] font-bold px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>

                      {/* Date & Time */}
                      <div className="space-y-1 mb-2.5">
                        <div className="flex items-center space-x-1.5 text-xs font-bold text-[#0a1f44]">
                          <Calendar className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                          <span>{item.date}</span>
                        </div>
                        {item.time && (
                          <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 font-medium">
                            <Clock className="w-3 h-3 text-slate-400 flex-shrink-0" />
                            <span>{item.time}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-base text-[#0a1f44] group-hover:text-[#c59b27] transition-colors mb-2 leading-snug line-clamp-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-3">
                        {item.description}
                      </p>

                      {/* Speaker / Lead if present */}
                      {item.speaker && (
                        <div className="text-[11px] text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100 mb-3 flex items-start space-x-1.5">
                          <User className="w-3 h-3 text-[#c59b27] mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-1">
                            <strong className="text-[#0a1f44]">Lead:</strong> {item.speaker}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Venue & Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="flex items-center space-x-1 truncate max-w-[130px] text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="truncate text-[11px]">{item.venue}</span>
                      </span>

                      <button
                        onClick={onOpenApply}
                        className="font-bold text-[#0a1f44] hover:text-[#c59b27] text-xs flex items-center space-x-1 cursor-pointer transition-colors"
                      >
                        <span>Register</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#c59b27]" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: ANNOUNCEMENTS & OFFICIAL CIRCULARS VIEW */}
        {activeTab === 'announcements' && (
          <div className="space-y-4">
            {filteredAnnouncements.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-slate-200">
                <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <h3 className="font-heading font-bold text-base text-[#0a1f44]">
                  No announcements found for this organizing department
                </h3>
                <button
                  onClick={() => setSelectedOrganizingTag('All')}
                  className="mt-3 px-4 py-2 bg-[#0a1f44] text-amber-300 rounded-lg text-xs font-bold cursor-pointer"
                >
                  View All Circulars
                </button>
              </div>
            ) : (
              filteredAnnouncements.map((ann, idx) => (
                <motion.div
                  key={ann.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`bg-white rounded-2xl p-6 border shadow-xs transition-all ${
                    ann.urgent ? 'border-amber-300/80 bg-amber-50/20' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Meta badges row */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {ann.urgent && (
                          <span className="inline-flex items-center space-x-1 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-red-200">
                            <AlertCircle className="w-3 h-3 text-red-600" />
                            <span>Urgent Notice</span>
                          </span>
                        )}
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0a1f44]">
                          {ann.category}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-slate-500">
                          {ann.circularNo}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[11px] font-semibold text-slate-600 flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{ann.date}</span>
                        </span>
                      </div>

                      {/* Organizing Cell / Department Tag Badge */}
                      <div className="inline-flex items-center space-x-1.5 bg-[#0a1f44]/5 text-[#0a1f44] px-2.5 py-1 rounded text-xs font-bold mb-3 border border-slate-200">
                        <Building2 className="w-3.5 h-3.5 text-[#c59b27]" />
                        <span>Organized By: {ann.organizingBody}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-bold text-lg text-[#0a1f44] mb-2">
                        {ann.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {ann.summary}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 self-start md:self-center">
                      <button
                        onClick={() => handleDownloadCircular(ann)}
                        className="bg-white hover:bg-slate-50 text-[#0a1f44] border border-slate-200 font-bold text-xs px-4 py-2.5 rounded-xl shadow-2xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                        title="Download official text document"
                      >
                        <Download className="w-3.5 h-3.5 text-[#c59b27]" />
                        <span>Download Circular</span>
                      </button>

                      {ann.category === 'Admissions' && (
                        <button
                          onClick={onOpenApply}
                          className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer text-center"
                        >
                          Apply for 2027 Intake
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {/* Bottom Navigation Strip to Departments & Faculty */}
        {onNavigateToDepartments && (
          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0a1f44] text-amber-300 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                  Looking for Academic Departments & Faculty Directory?
                </h4>
                <p className="text-xs text-slate-500">
                  Explore our 5 academic divisions, laboratory centers, and faculty mentor profiles.
                </p>
              </div>
            </div>

            <button
              onClick={onNavigateToDepartments}
              className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-4 py-2 rounded-xl border border-[#c59b27]/40 flex items-center space-x-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Explore Departments & Faculty</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
