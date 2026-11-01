import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, Search, ArrowRight,
  BookOpen, Award, GraduationCap, Building2,
  Users, Briefcase, MapPin, Download
} from 'lucide-react';
import { InstitutionalCrest } from './InstitutionalCrest';
import { PROGRAMS } from '../data/bssData';

interface DropdownItem {
  label: string;
  page?: string;
  section?: string;
  action?: 'apply' | 'brochure';
}

interface NavItem {
  id: string;
  label: string;
  hasDropdown?: boolean;
  megaMenu?: boolean;
  items?: DropdownItem[];
}

interface MainNavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenApply: () => void;
  onOpenBrochure: () => void;
  onOpenEnquiry: () => void;
  onSelectProgram?: (programId: string) => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenApply,
  onOpenBrochure,
  onOpenEnquiry,
  onSelectProgram
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { id: 'home', label: 'Home' },
    {
      id: 'about',
      label: 'About Us',
      hasDropdown: true,
      items: [
        { label: 'Institutional Profile', page: 'about', section: 'profile' },
        { label: 'Academic Departments & Faculty', page: 'departments' },
        { label: 'Vision & "Beyond Education" Philosophy', page: 'about', section: 'vision' },
        { label: "Director's Desk Message", page: 'about', section: 'director' },
        { label: 'Academic Advisory Board', page: 'about', section: 'advisory' },
        { label: 'University Affiliations & Partners', page: 'about', section: 'affiliations' },
        { label: 'Awards & Accreditations', page: 'about', section: 'awards' }
      ]
    },
    {
      id: 'programs',
      label: 'Programs',
      hasDropdown: true,
      megaMenu: true
    },
    {
      id: 'admissions',
      label: 'Admissions 2027',
      hasDropdown: true,
      items: [
        { label: 'Admission Procedure 2027-28', page: 'admissions', section: 'procedure' },
        { label: 'Eligibility & Criteria', page: 'admissions', section: 'eligibility' },
        { label: 'Fees & Merit Scholarships', page: 'admissions', section: 'scholarships' },
        { label: 'Online Application Portal', action: 'apply' },
        { label: 'Download Prospectus / Brochure', action: 'brochure' },
        { label: 'Frequently Asked Questions (FAQ)', page: 'admissions', section: 'faq' }
      ]
    },
    { id: 'departments', label: 'Faculty' },
    {
      id: 'placements',
      label: 'Placements',
      hasDropdown: true,
      items: [
        { label: 'Placement Highlights (₹22 LPA)', page: 'placements', section: 'highlights' },
        { label: 'Top Corporate Recruiters (150+)', page: 'placements', section: 'recruiters' },
        { label: 'Corporate Relations & Internships', page: 'placements', section: 'internships' },
        { label: 'Student & Alumni Testimonials', page: 'home', section: 'student-testimonials' }
      ]
    },
    {
      id: 'campus',
      label: 'Campus Life',
      hasDropdown: true,
      items: [
        { label: 'Life @ BSS & Infrastructure', page: 'campus', section: 'infrastructure' },
        { label: 'Smart Classrooms & AI Workstations', page: 'campus', section: 'labs' },
        { label: 'Student Clubs & Societies', page: 'campus', section: 'clubs' },
        { label: 'Aarohan Annual Cultural & Sports Fest', page: 'campus', section: 'fest' },
        { label: 'Hostel & Residence Support', page: 'campus', section: 'hostel' }
      ]
    },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  // Filter programs for search
  const filteredPrograms = searchQuery.trim() === '' ? [] : PROGRAMS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.degreeType.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.careerRoles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-amber-500/80 py-2'
          : 'bg-white shadow-sm border-b border-slate-200 py-2.5'
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          {/* Logo / Crest */}
          <div
            onClick={() => onNavigate('home')}
            className="cursor-pointer transition-transform hover:scale-[1.01] flex-shrink-0"
          >
            <InstitutionalCrest />
          </div>

          {/* Desktop Navigation Links - Single Line Strict Layout */}
          <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 shrink-0">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative group shrink-0"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    if (!link.hasDropdown) {
                      onNavigate(link.id);
                    }
                  }}
                  className={`px-2 py-1.5 text-[11.5px] 2xl:text-[12.5px] font-semibold tracking-tight whitespace-nowrap flex items-center space-x-0.5 rounded transition-colors cursor-pointer shrink-0 ${
                    currentPage === link.id
                      ? 'text-[#0a1f44] font-bold border-b-2 border-[#c59b27]'
                      : 'text-slate-700 hover:text-[#0a1f44] hover:bg-slate-50'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 flex-shrink-0 text-slate-400 group-hover:text-[#c59b27] transition-transform group-hover:rotate-180" />
                  )}
                </button>

                {/* Standard Dropdown */}
                {link.hasDropdown && !link.megaMenu && activeDropdown === link.id && link.items && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-b-md shadow-xl border-t-2 border-[#0a1f44] py-2 z-50 animate-fadeIn">
                    {link.items.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (item.action === 'apply') onOpenApply();
                          else if (item.action === 'brochure') onOpenBrochure();
                          else if (item.section) {
                            if (item.page && item.page !== currentPage) {
                              onNavigate(item.page);
                              setTimeout(() => {
                                document.getElementById(item.section!)?.scrollIntoView({ behavior: 'smooth' });
                              }, 150);
                            } else {
                              document.getElementById(item.section)?.scrollIntoView({ behavior: 'smooth' });
                            }
                          } else if (item.page) {
                            onNavigate(item.page);
                          }
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-[#0a1f44] hover:pl-5 font-medium transition-all flex items-center justify-between border-b border-slate-50 last:border-0 cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-3 h-3 text-[#c59b27] opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Programs Mega Menu (Yenepoya style) */}
                {link.megaMenu && activeDropdown === link.id && (
                  <div className="absolute top-full -left-20 w-[780px] bg-white rounded-b-lg shadow-2xl border-t-2 border-[#0a1f44] p-6 z-50 grid grid-cols-3 gap-6 animate-fadeIn">
                    {/* Column 1: Postgraduate */}
                    <div>
                      <div className="flex items-center space-x-2 pb-2 mb-3 border-b border-slate-200">
                        <GraduationCap className="w-4 h-4 text-[#c59b27]" />
                        <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                          Postgraduate & Dual
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {PROGRAMS.filter(p => p.degreeType === 'Postgraduate').map(prog => (
                          <div
                            key={prog.id}
                            onClick={() => {
                              setActiveDropdown(null);
                              onNavigate('programs');
                              if (onSelectProgram) onSelectProgram(prog.id);
                            }}
                            className="group/item p-2 rounded hover:bg-slate-50 cursor-pointer transition-colors"
                          >
                            <p className="text-xs font-bold text-slate-800 group-hover/item:text-[#0a1f44]">
                              {prog.name}
                            </p>
                            <p className="text-[11px] text-slate-500">{prog.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Undergraduate */}
                    <div>
                      <div className="flex items-center space-x-2 pb-2 mb-3 border-b border-slate-200">
                        <BookOpen className="w-4 h-4 text-[#0a1f44]" />
                        <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                          Undergraduate Degrees
                        </h4>
                      </div>
                      <div className="space-y-1.5">
                        {PROGRAMS.filter(p => p.degreeType === 'Undergraduate').map(prog => (
                          <div
                            key={prog.id}
                            onClick={() => {
                              setActiveDropdown(null);
                              onNavigate('programs');
                              if (onSelectProgram) onSelectProgram(prog.id);
                            }}
                            className="group/item p-1.5 rounded hover:bg-slate-50 cursor-pointer transition-colors"
                          >
                            <p className="text-xs font-semibold text-slate-800 group-hover/item:text-[#0a1f44]">
                              {prog.name}
                            </p>
                            <p className="text-[10px] text-slate-500">{prog.duration}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Certifications & Highlights */}
                    <div className="bg-slate-50 p-4 rounded-md border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 pb-2 mb-2 border-b border-slate-200">
                          <Award className="w-4 h-4 text-[#c59b27]" />
                          <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                            Industry Certifications
                          </h4>
                        </div>
                        <ul className="text-[11px] text-slate-600 space-y-1.5 mb-4">
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
                            <span>Six Sigma Green Belt (DMAIC)</span>
                          </li>
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
                            <span>SAP ERP Modules (FICO / SD)</span>
                          </li>
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
                            <span>Digital Marketing (Google/HubSpot)</span>
                          </li>
                          <li className="flex items-center space-x-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b27]"></span>
                            <span>Advanced Python & Business Analytics</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-slate-200/80">
                        <button
                          onClick={() => {
                            setActiveDropdown(null);
                            onOpenBrochure();
                          }}
                          className="w-full bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs py-2 px-3 rounded flex items-center justify-center space-x-1.5 transition-colors cursor-pointer border border-[#c59b27]/30"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Curriculum PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 text-slate-600 hover:text-[#0a1f44] hover:bg-slate-100 rounded-full transition-colors cursor-pointer shrink-0"
              title="Search courses & campus info"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Glowing Apply Button */}
            <button
              onClick={onOpenApply}
              className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs px-3 py-2 sm:px-3.5 rounded-lg shadow-sm border border-[#c59b27]/60 flex items-center space-x-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              <span>Apply Now 2027</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-800 hover:text-[#0a1f44] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.id} className="border-b border-slate-100 py-1.5">
                <button
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left font-bold text-sm py-2 px-2 flex items-center justify-between ${
                    currentPage === link.id ? 'text-[#0a1f44] font-extrabold' : 'text-slate-800'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            ))}

            <div className="pt-4 pb-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full bg-[#0a1f44] text-amber-300 font-bold py-2.5 rounded-lg text-sm text-center shadow border border-[#c59b27]/40"
              >
                Apply Online 2027-28
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full bg-slate-100 text-[#0a1f44] font-bold py-2.5 rounded-lg text-sm text-center border border-slate-300"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border border-amber-500/30 animate-fadeIn">
            <div className="p-4 bg-[#0a1f44] text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-amber-400" />
                <h3 className="font-heading text-lg font-bold">Search BSS Foundation</h3>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 text-slate-300 hover:text-white rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4">
              <input
                type="text"
                placeholder="Type course name (e.g. PGDBM, BBA, Data Science, AI, Placements)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8b1528] focus:border-transparent"
              />

              {searchQuery && (
                <div className="mt-4 max-h-64 overflow-y-auto divide-y divide-slate-100">
                  {filteredPrograms.length > 0 ? (
                    filteredPrograms.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setSearchOpen(false);
                          onNavigate('programs');
                          if (onSelectProgram) onSelectProgram(p.id);
                        }}
                        className="py-2.5 px-3 hover:bg-slate-50 cursor-pointer rounded flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-sm font-bold text-[#0a1f44]">{p.name}</p>
                          <p className="text-xs text-slate-500">
                            {p.degreeType} • {p.duration} • CTC up to ₹22 LPA
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-amber-600" />
                      </div>
                    ))
                  ) : (
                    <p className="text-center text-sm text-slate-500 py-6">
                      No exact matches found. Try searching for "MBA", "BBA", or "AI".
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
