import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap, BookOpen, Award, Building2, Search,
  Mail, ExternalLink, MapPin, Briefcase, ChevronRight,
  Filter, CheckCircle2, Phone, Calendar
} from 'lucide-react';
import { Department, FacultyMember } from '../data/bssData';
import { useData } from '../context/DataContext';

interface DepartmentsFacultyPageProps {
  onOpenApply: () => void;
  onOpenEnquiry?: () => void;
  onSelectProgram?: (programId: string) => void;
}

export const DepartmentsFacultyPage: React.FC<DepartmentsFacultyPageProps> = ({
  onOpenApply,
  onOpenEnquiry
}) => {
  const { departments, faculty: facultyList } = useData();
  const [selectedDeptId, setSelectedDeptId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFacultyModal, setSelectedFacultyModal] = useState<FacultyMember | null>(null);

  // Filtered faculty list
  const filteredFaculty = useMemo(() => {
    return facultyList.filter((faculty) => {
      const matchesDept = selectedDeptId === 'all' || faculty.departmentId === selectedDeptId;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        faculty.name.toLowerCase().includes(q) ||
        faculty.designation.toLowerCase().includes(q) ||
        faculty.departmentName.toLowerCase().includes(q) ||
        faculty.qualifications.toLowerCase().includes(q) ||
        faculty.specialization.some((s) => s.toLowerCase().includes(q));

      return matchesDept && matchesSearch;
    });
  }, [facultyList, selectedDeptId, searchQuery]);

  // Active department details when a specific department is selected
  const activeDepartment = useMemo(() => {
    if (selectedDeptId === 'all') return null;
    return departments.find((d) => d.id === selectedDeptId) || null;
  }, [departments, selectedDeptId]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* 1. Academic Header Banner */}
      <section className="bg-gradient-to-b from-[#0a1f44] to-[#071630] text-white pt-16 pb-20 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-amber-300 border border-white/15 mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Divisions & Distinguished Faculty</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
              Mentorship That Bridges Theory & Corporate Reality
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              At BSS Foundation, education is delivered by visionary PhD scholars, former corporate CXOs, IIM/IIT alumni, and active consultants bringing live boardroom cases into the classrooms of Navi Mumbai and Kalina.
            </p>

            {/* Live Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name, subject (e.g. FinTech, Strategy, AI)..."
                className="w-full pl-11 pr-4 py-3 bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-xs">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-amber-300">
                5
              </span>
              <span className="text-[11px] text-slate-300 uppercase font-semibold tracking-wider">
                Academic Divisions
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-xs">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-white">
                40+
              </span>
              <span className="text-[11px] text-slate-300 uppercase font-semibold tracking-wider">
                Core & Visiting Faculty
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-xs">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-amber-300">
                100%
              </span>
              <span className="text-[11px] text-slate-300 uppercase font-semibold tracking-wider">
                Corporate Exposure
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-xs">
              <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-white">
                85+
              </span>
              <span className="text-[11px] text-slate-300 uppercase font-semibold tracking-wider">
                Published Research Papers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Department Selector Navigation */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap flex items-center space-x-1 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Departments:</span>
            </span>

            <button
              onClick={() => setSelectedDeptId('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedDeptId === 'all'
                  ? 'bg-[#0a1f44] text-amber-300 shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Faculty ({facultyList.length})
            </button>

            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedDeptId === dept.id
                    ? 'bg-[#0a1f44] text-amber-300 shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept.shortCode} • {dept.name.replace('Department of ', '')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Department Overview Spotlight (Shown when a specific department is chosen) */}
      {activeDepartment && (
        <section className="py-8 bg-amber-50/40 border-b border-amber-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-300/40 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div className="inline-flex items-center space-x-1.5 bg-[#0a1f44] text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider mb-2">
                    <span>{activeDepartment.shortCode}</span>
                    <span>• Estd. {activeDepartment.establishedYear}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0a1f44] mb-2">
                    {activeDepartment.name}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {activeDepartment.overview}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Programs Offered Under This Department:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeDepartment.programsOffered.map((prog, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-[#0a1f44] font-semibold text-xs px-2.5 py-1 rounded-md border border-slate-200"
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                      Department Labs & Simulation Centers:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeDepartment.keyLabs.map((lab, idx) => (
                        <span
                          key={idx}
                          className="bg-amber-50 text-[#8c6b16] font-semibold text-xs px-2.5 py-1 rounded-md border border-amber-200 flex items-center space-x-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#c59b27]" />
                          <span>{lab}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* HOD Card */}
                <div className="lg:col-span-4 bg-slate-50 p-5 rounded-xl border border-slate-200 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#c59b27] shadow-sm mb-3">
                    <img
                      src={activeDepartment.hodImage}
                      alt={activeDepartment.hodName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59b27] bg-[#0a1f44] px-2 py-0.5 rounded">
                    Department Head
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#0a1f44] mt-2">
                    {activeDepartment.hodName}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {activeDepartment.hodDesignation}
                  </p>
                  <a
                    href={`mailto:${activeDepartment.contactEmail}`}
                    className="mt-3 text-xs text-[#0a1f44] hover:text-[#c59b27] font-semibold flex items-center space-x-1"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>{activeDepartment.contactEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Faculty Members Directory Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-3">
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#0a1f44]">
              Faculty Directory
            </h2>
            <p className="text-xs text-slate-500">
              Showing {filteredFaculty.length} mentors across academic disciplines
            </p>
          </div>

          <button
            onClick={onOpenApply}
            className="self-start sm:self-auto bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs px-4 py-2 rounded-lg border border-[#c59b27]/60 flex items-center space-x-1.5 transition-all cursor-pointer shadow-xs"
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
            <span>Apply for 2027 Admissions</span>
          </button>
        </div>

        {filteredFaculty.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 my-8">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-heading font-bold text-base text-[#0a1f44]">
              No faculty members found
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find anyone matching "{searchQuery}". Try searching for another discipline like "Management", "Finance", or "AI".
            </p>
            <button
              onClick={() => {
                setSelectedDeptId('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0a1f44] rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((faculty) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#c59b27]/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Profile Header */}
                  <div className="p-6 pb-4 flex items-start space-x-4 border-b border-slate-100">
                    <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-slate-100 group-hover:border-[#c59b27] transition-colors">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-[#0a1f44] truncate">
                          {faculty.departmentName.replace('Department of ', '')}
                        </span>
                        {faculty.isHod && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#c59b27] text-[#0a1f44] uppercase tracking-wider">
                            HOD
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#0a1f44] group-hover:text-[#c59b27] transition-colors leading-snug">
                        {faculty.name}
                      </h3>

                      <p className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                        {faculty.designation}
                      </p>

                      <div className="mt-2 text-[10px] text-slate-600 font-medium">
                        <span className="font-bold text-[#0a1f44]">Exp:</span> {faculty.experience}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 pt-4 space-y-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1">
                        Academic Credentials
                      </span>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {faculty.qualifications}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-1.5">
                        Areas of Expertise
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {faculty.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="bg-slate-50 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed pt-1 border-t border-slate-100">
                      {faculty.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Action Bar: Email & LinkedIn */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`mailto:${faculty.email}`}
                    className="text-xs text-slate-600 hover:text-[#0a1f44] flex items-center space-x-1.5 font-medium transition-colors"
                    title={`Email ${faculty.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span className="truncate max-w-[120px] sm:max-w-[150px]">{faculty.email}</span>
                  </a>

                  {faculty.linkedinUrl && (
                    <a
                      href={faculty.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Connect with ${faculty.name} on LinkedIn`}
                      className="inline-flex items-center space-x-1 bg-[#0077b5] hover:bg-[#005f93] text-white px-2.5 py-1 rounded text-[11px] font-semibold transition-transform hover:scale-105 shadow-2xs cursor-pointer flex-shrink-0"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Institutional Admissions 2027 CTA Banner */}
      <section className="bg-[#0a1f44] text-white py-14 border-t-4 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold tracking-wider uppercase mb-2">
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>Admissions Open for Academic Year 2027–2028</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Learn Directly from India's Foremost Management Educators
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Connect with our academic chairs, schedule personalized departmental counseling, and start your online application for the 2027 intake.
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/20 transition-all cursor-pointer"
                >
                  Contact Admissions Cell
                </button>
              )}
              <button
                onClick={onOpenApply}
                className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md flex items-center space-x-1.5"
              >
                <span>Apply for 2027</span>
                <ChevronRight className="w-4 h-4 text-[#0a1f44]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
