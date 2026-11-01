import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap, CheckCircle2, Award, Clock, FileText,
  ChevronDown, Download, HelpCircle, ArrowRight,
  Search, PhoneCall, Mail, MessageSquare, X
} from 'lucide-react';
import { FAQ_LIST, FAQItem, PROGRAMS, INSTITUTION_INFO } from '../data/bssData';

interface AdmissionsPageProps {
  onOpenApply: () => void;
  onOpenBrochure: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenApply, onOpenBrochure }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(["faq-1", "faq-3"]);

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenFaqIds(filteredFaqs.map(f => f.id));
  };

  const collapseAll = () => {
    setOpenFaqIds([]);
  };

  const categories = [
    "All",
    "Eligibility & Entrance",
    "Interview & Selection",
    "Fees & Scholarships",
    "Affiliation & Placements",
    "Hostels & Campus"
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_LIST.filter(item => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === "" ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.highlight && item.highlight.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const steps = [
    {
      num: 1,
      title: "Online Application Submission",
      desc: "Fill the digital application form with personal information, academic track record, and preferred course specialization."
    },
    {
      num: 2,
      title: "Profile Assessment / Entrance Score",
      desc: "Submit your CAT / MAT / CMAT / MAH-CET scores or opt for the online BSS Aptitude & Analytical Assessment."
    },
    {
      num: 3,
      title: "Personal Interview & Counseling",
      desc: "Appear for a 1-on-1 personal interview with our Senior Faculty Panel (in-person at campus or via secure video link)."
    },
    {
      num: 4,
      title: "Merit Evaluation & Scholarship Grant",
      desc: "Receive your Provisional Offer Letter along with any awarded merit scholarships (up to 30% on tuition fee)."
    },
    {
      num: 5,
      title: "Seat Enrollment & Induction",
      desc: "Submit verified documents, complete initial enrollment fee, and attend the grand Academic Induction Week."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Hero Banner */}
      <div className="relative py-20 bg-gradient-to-r from-[#051329] via-[#0a1f44] to-[#07152d] text-white border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-4 inline-block">
              Admissions Open 2027 - 2028
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
              Admission Procedure & Guidelines
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
              Empowering talented students from across India with transparent, merit-based admissions, flexible installment plans, and substantial academic scholarships.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenApply}
                className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-6 py-3 rounded-lg text-sm shadow-lg flex items-center space-x-2 transition-transform hover:scale-105 cursor-pointer"
              >
                <span>Fill Online Application</span>
                <ArrowRight className="w-4 h-4 text-[#0a1f44]" />
              </button>
              <button
                onClick={onOpenBrochure}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg text-sm border border-white/30 flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#c59b27]" />
                <span>Download Prospectus</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        {/* Step-by-Step Flow */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              Admission Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-2">
              5 Simple Steps to Secure Your Seat
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm">
              Our admissions team provides hand-holding guidance from your initial inquiry to final enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#c59b27] shadow-sm transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#0a1f44] text-[#c59b27] border border-[#c59b27]/40 font-crest font-bold flex items-center justify-center text-sm mb-3">
                    0{s.num}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44] mb-2 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Course Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
          <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mb-6">
            Program Eligibility & Fee Structure (2027-28)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#0a1f44] text-white">
                  <th className="p-3.5 rounded-tl-lg font-crest font-bold">Course Name</th>
                  <th className="p-3.5 font-crest font-bold">Duration</th>
                  <th className="p-3.5 font-crest font-bold">Eligibility Criteria</th>
                  <th className="p-3.5 font-crest font-bold">Annual Fee</th>
                  <th className="p-3.5 rounded-tr-lg font-crest font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PROGRAMS.map((p, idx) => (
                  <tr key={p.id} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                    <td className="p-3.5 font-bold text-[#0a1f44]">
                      {p.name}
                      <span className="block text-[10px] text-[#c59b27] font-semibold">{p.affiliation}</span>
                    </td>
                    <td className="p-3.5 text-slate-600 whitespace-nowrap">{p.duration}</td>
                    <td className="p-3.5 text-slate-600 max-w-xs">{p.eligibility}</td>
                    <td className="p-3.5 font-bold text-[#0a1f44] whitespace-nowrap">{p.fees}</td>
                    <td className="p-3.5 text-right whitespace-nowrap">
                      <button
                        onClick={onOpenApply}
                        className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 border border-[#c59b27]/40 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scholarships & Financial Assistance */}
        <div className="bg-[#0a1f44]/5 p-8 rounded-2xl border-2 border-[#c59b27]/40">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 text-[#0a1f44] font-bold text-xs uppercase tracking-wider mb-2">
              <Award className="w-4 h-4 text-[#c59b27]" />
              <span>Financial Aid & Merit Concessions</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mb-3">
              Merit Scholarships up to 30% on Tuition Fees
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
              BSS Foundation firmly believes that financial hurdles should never stall academic merit. We offer generous fee grants for:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>Academic High Achievers (85%+ aggregate in Graduation/12th)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>National & State Level Sports Achievers</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>Economically Weaker Section (EWS) Assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span>Tie-ups with Nationalized Banks for Education Loans</span>
              </li>
            </ul>

            <button
              onClick={onOpenApply}
              className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold px-5 py-2.5 rounded-lg border border-[#c59b27]/40 text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              Check My Scholarship Eligibility
            </button>
          </div>
        </div>

        {/* Enhanced Accordion-Style Frequently Asked Questions (FAQ) */}
        <section id="admissions-faq" className="scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5">
              <HelpCircle className="w-4 h-4 text-[#c59b27]" />
              <span>Admissions Knowledge Base</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mt-1 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mb-4 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Find instant, authoritative answers regarding entrance exams, selection criteria, installment plans, hostel facilities, and degree validity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Search and Action Bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search queries (e.g., entrance exams, scholarships, installments, hostel, documents)..."
                    className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-[#0a1f44] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-[#0a1f44] p-1 cursor-pointer"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Expand / Collapse All Controls */}
                <div className="flex items-center space-x-2 text-xs font-semibold self-end sm:self-center">
                  <button
                    onClick={expandAll}
                    className="px-3 py-2 bg-white hover:bg-slate-100 text-[#0a1f44] border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Collapse All
                  </button>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pt-3.5 border-t border-slate-200/80 mt-3.5 no-scrollbar">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  const count = cat === "All"
                    ? FAQ_LIST.length
                    : FAQ_LIST.filter(f => f.category === cat).length;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1.5 ${
                        isActive
                          ? "bg-[#0a1f44] text-white shadow-sm border border-[#0a1f44]"
                          : "bg-white text-slate-600 hover:text-[#0a1f44] hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? "bg-[#c59b27] text-[#0a1f44]" : "bg-slate-100 text-slate-500"
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion Questions List */}
            {filteredFaqs.length > 0 ? (
              <div className="space-y-3">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaqIds.includes(faq.id);

                  return (
                    <div
                      key={faq.id}
                      className={`border rounded-xl overflow-hidden bg-white transition-all duration-200 ${
                        isOpen
                          ? "border-[#c59b27] ring-1 ring-[#c59b27]/30 shadow-md"
                          : "border-slate-200 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={isOpen}
                        className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 group cursor-pointer transition-colors hover:bg-slate-50/60"
                      >
                        <div className="flex items-start sm:items-center space-x-3.5 flex-1">
                          {/* Index / Category identifier */}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                            isOpen
                              ? "bg-[#0a1f44] text-[#c59b27] border border-[#c59b27]/50"
                              : "bg-slate-100 text-slate-600 group-hover:bg-[#0a1f44] group-hover:text-amber-300"
                          }`}>
                            {idx < 9 ? `0${idx + 1}` : idx + 1}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                                {faq.category}
                              </span>
                            </div>
                            <h3 className={`font-heading font-bold text-xs sm:text-sm transition-colors ${
                              isOpen ? "text-[#0a1f44]" : "text-slate-800 group-hover:text-[#0a1f44]"
                            }`}>
                              {faq.q}
                            </h3>
                          </div>
                        </div>

                        {/* Animated Chevron Indicator */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-[#c59b27] text-[#0a1f44] rotate-180 shadow-sm"
                            : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Smooth Collapsible Content */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                              <p className="pt-2">{faq.a}</p>

                              {faq.highlight && (
                                <div className="mt-3.5 flex items-start space-x-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-[#0a1f44]">
                                  <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0 mt-0.5" />
                                  <span className="leading-snug">
                                    <strong className="text-[#0a1f44] font-semibold">Key Takeaway:</strong> {faq.highlight}
                                  </span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* No Search Results Fallback */
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-lg mx-auto">
                <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h4 className="font-heading font-bold text-base text-[#0a1f44] mb-1">
                  No questions match your query
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  We could not find any questions matching "{searchQuery}". Try a different keyword or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="bg-[#0a1f44] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#132e60] transition-colors cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Still Have Questions? Admissions Consultation Help Desk */}
            <div className="mt-12 bg-gradient-to-r from-[#051329] to-[#0a1f44] text-white rounded-2xl p-6 sm:p-8 border-l-4 border-[#c59b27] shadow-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div>
                  <span className="bg-[#c59b27] text-[#0a1f44] font-crest text-[10px] font-extrabold px-2.5 py-0.5 rounded uppercase tracking-wider inline-block mb-2">
                    Direct Admissions Advisory
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                    Still Have Questions About Your Enrollment?
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                    Our Senior Admissions Counselors are available Monday to Saturday (9:00 AM – 6:30 PM) to assess your eligibility and guide you through program specializations.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs">
                    <a
                      href="tel:+917400408514"
                      className="flex items-center space-x-2 text-amber-300 hover:text-white transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#c59b27]" />
                      <span>{INSTITUTION_INFO.phoneNumbers[0]}</span>
                    </a>
                    <a
                      href={`mailto:${INSTITUTION_INFO.emails[1]}`}
                      className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
                      <span>{INSTITUTION_INFO.emails[1]}</span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={onOpenApply}
                    className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-5 py-3 rounded-lg text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Start Online Application</span>
                    <ArrowRight className="w-4 h-4 text-[#0a1f44]" />
                  </button>
                  <button
                    onClick={onOpenBrochure}
                    className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-3 rounded-lg text-xs sm:text-sm border border-white/20 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-[#c59b27]" />
                    <span>Get Prospectus</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

