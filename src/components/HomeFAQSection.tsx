import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle, ChevronDown, Search, CheckCircle2,
  Phone, Mail, ArrowRight, GraduationCap, Briefcase,
  DollarSign, FileText, ChevronRight
} from 'lucide-react';
import { FAQItem, INSTITUTION_INFO } from '../data/bssData';
import { useData } from '../context/DataContext';

interface HomeFAQSectionProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
  onOpenEnquiry: () => void;
  onNavigateToAdmissions?: () => void;
}

export const HomeFAQSection: React.FC<HomeFAQSectionProps> = ({
  onOpenApply,
  onOpenBrochure,
  onOpenEnquiry,
  onNavigateToAdmissions
}) => {
  const { faqs } = useData();
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<string[]>(['faq-1', 'faq-9']);

  const topics = [
    { id: 'All', label: 'All FAQs', icon: HelpCircle },
    { id: 'Admissions', label: 'Admission Criteria', icon: GraduationCap },
    { id: 'Fees', label: 'Fee Structures & Loans', icon: DollarSign },
    { id: 'Placements', label: 'Campus Placements', icon: Briefcase }
  ];

  // Map the raw categories to the 3 key prospective student pillars
  const filteredFaqs = useMemo(() => {
    return faqs.filter((item) => {
      let matchesTopic = true;
      if (selectedTopic === 'Admissions') {
        matchesTopic = item.category === 'Eligibility & Entrance' || item.category === 'Interview & Selection';
      } else if (selectedTopic === 'Fees') {
        matchesTopic = item.category === 'Fees & Scholarships';
      } else if (selectedTopic === 'Placements') {
        matchesTopic = item.category === 'Affiliation & Placements';
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        item.q.toLowerCase().includes(q) ||
        item.a.toLowerCase().includes(q) ||
        (item.highlight && item.highlight.toLowerCase().includes(q));

      return matchesTopic && matchesSearch;
    });
  }, [faqs, selectedTopic, searchQuery]);

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  return (
    <section id="home-faqs" className="py-20 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Prospective Student Helpdesk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Quick, transparent answers regarding 2027 admissions criteria, course fee installments, scholarships, and verified campus placement records.
          </p>
        </div>

        {/* Filter Bar & Live Search */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/90 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Quick Topic Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
            {topics.map((t) => {
              const Icon = t.icon;
              const isActive = selectedTopic === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-[#0a1f44] text-amber-300 shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-[#c59b27]'}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search (e.g. fees, Deloitte, CAT)..."
              className="w-full pl-9 pr-3 py-2 bg-white text-slate-900 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[11px] text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Main Grid: Accordion Column (8 cols) + Support/Helpline Column (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Accordion List */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between pb-2 text-xs text-slate-500 font-medium">
              <span>Showing {filteredFaqs.length} answers</span>
              <div className="space-x-3">
                <button
                  onClick={expandAll}
                  className="hover:text-[#0a1f44] font-semibold transition-colors cursor-pointer"
                >
                  Expand All
                </button>
                <span>•</span>
                <button
                  onClick={collapseAll}
                  className="hover:text-[#0a1f44] font-semibold transition-colors cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {filteredFaqs.length === 0 ? (
              <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-200">
                <HelpCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                  No matching questions found
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Try clearing your search query or contact our admissions counselors directly.
                </p>
                <button
                  onClick={() => {
                    setSelectedTopic('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 px-3 py-1.5 bg-[#0a1f44] text-amber-300 rounded-lg text-xs font-bold cursor-pointer"
                >
                  Reset FAQ Filter
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = expandedIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'border-[#c59b27] bg-white shadow-xs ring-1 ring-[#c59b27]/30'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-slate-200 text-[#0a1f44] inline-block">
                          {faq.category}
                        </span>
                        <h3 className={`font-heading font-bold text-sm sm:text-base leading-snug transition-colors ${
                          isOpen ? 'text-[#0a1f44]' : 'text-slate-800'
                        }`}>
                          {faq.q}
                        </h3>
                      </div>

                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#0a1f44] text-amber-300 rotate-180'
                          : 'bg-white border border-slate-200 text-slate-500'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                            <p>{faq.a}</p>

                            {faq.highlight && (
                              <div className="bg-amber-50/70 border border-amber-200/80 p-2.5 rounded-xl flex items-center space-x-2 text-xs font-semibold text-[#0a1f44]">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
                                <span>{faq.highlight}</span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}

            {onNavigateToAdmissions && (
              <div className="pt-2 text-center">
                <button
                  onClick={onNavigateToAdmissions}
                  className="text-xs font-bold text-[#0a1f44] hover:text-[#c59b27] inline-flex items-center space-x-1 cursor-pointer transition-colors"
                >
                  <span>View Full Admissions & Eligibility Guidelines</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Right Helpdesk & Admission Support Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#0a1f44] text-white rounded-2xl p-6 border-t-4 border-[#c59b27] shadow-md">
              <span className="text-[#c59b27] text-[11px] font-bold uppercase tracking-wider block mb-1">
                Admissions 2027 Helpline
              </span>
              <h4 className="font-heading font-extrabold text-lg text-white mb-2">
                Still Need Clarification?
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-5">
                Our senior academic counsellors are available to review your graduation scores, discuss fee installment plans, and evaluate merit scholarships.
              </p>

              {/* Contact details */}
              <div className="space-y-2.5 pb-5 mb-5 border-b border-white/10 text-xs">
                <a
                  href={`tel:${INSTITUTION_INFO.phoneNumbers[0].replace(/\s+/g, '')}`}
                  className="flex items-center space-x-2.5 text-slate-200 hover:text-amber-300 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#c59b27]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Helpline (Belapur)</span>
                    <span className="font-bold text-white">{INSTITUTION_INFO.phoneNumbers[0]}</span>
                  </div>
                </a>

                <a
                  href={`tel:${INSTITUTION_INFO.phoneNumbers[1].replace(/\s+/g, '')}`}
                  className="flex items-center space-x-2.5 text-slate-200 hover:text-amber-300 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#c59b27]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Helpline (Kalina)</span>
                    <span className="font-bold text-white">{INSTITUTION_INFO.phoneNumbers[1]}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${INSTITUTION_INFO.emails[1]}`}
                  className="flex items-center space-x-2.5 text-slate-200 hover:text-amber-300 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#c59b27]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Admissions Desk</span>
                    <span className="font-bold text-white">{INSTITUTION_INFO.emails[1]}</span>
                  </div>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={onOpenApply}
                  className="w-full bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold text-xs py-2.5 px-4 rounded-xl shadow transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Start Online Application 2027</span>
                  <ChevronRight className="w-4 h-4 text-[#0a1f44]" />
                </button>

                <button
                  onClick={onOpenEnquiry}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs py-2.5 px-4 rounded-xl border border-white/20 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Request Callback / Counselling</span>
                </button>

                <button
                  onClick={onOpenBrochure}
                  className="w-full text-slate-300 hover:text-white text-xs py-2 text-center transition-colors cursor-pointer flex items-center justify-center space-x-1"
                >
                  <FileText className="w-3 h-3 text-[#c59b27]" />
                  <span>Download 2027 Prospectus PDF</span>
                </button>
              </div>
            </div>

            {/* Placement Quick Stat Badge */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#0a1f44]">Placement Fast Facts</span>
                <span className="text-[10px] font-bold text-[#c59b27] uppercase">Audited</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-white p-2 rounded-lg border border-slate-200">
                  <span className="block font-black text-sm text-[#0a1f44]">₹22 LPA</span>
                  <span className="text-[10px] text-slate-500">Highest CTC</span>
                </div>
                <div className="bg-white p-2 rounded-lg border border-slate-200">
                  <span className="block font-black text-sm text-[#0a1f44]">₹9.11 LPA</span>
                  <span className="text-[10px] text-slate-500">Average CTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
