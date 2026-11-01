import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Lock, User, Key, Eye, EyeOff, ShieldCheck, CheckCircle2,
  Calendar, HelpCircle, FileText, BookOpen, Building2,
  GraduationCap, Award, Settings, Plus, Trash2, Edit3,
  ExternalLink, LogOut, ArrowLeft, RefreshCw, Image,
  Clock, MapPin, AlertCircle, Save, X, Phone, Mail, Link as LinkIcon
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { InstitutionalCrest } from '../components/InstitutionalCrest';
import {
  EventItem,
  AnnouncementItem,
  FAQItem,
  BlogPost,
  FacultyMember,
  Testimonial,
  HeroSlideItem
} from '../data/bssData';

interface AdminPageProps {
  onNavigateHome: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigateHome }) => {
  const {
    isAdminAuthenticated,
    loginAdmin,
    logoutAdmin,
    heroSlides,
    events,
    announcements,
    faqs,
    blogs,
    departments,
    faculty,
    testimonials,
    institutionInfo,
    updateHeroSlide,
    addEvent,
    updateEvent,
    deleteEvent,
    addAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    addFaq,
    updateFaq,
    deleteFaq,
    addBlog,
    updateBlog,
    deleteBlog,
    addFaculty,
    updateFaculty,
    deleteFaculty,
    updateDepartment,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    updateInstitutionInfo,
    resetToDefaults
  } = useData();

  // Login form state
  const [emailInput, setEmailInput] = useState('anand.b.j.7@gmail.com');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard active tab
  type AdminTab =
    | 'overview'
    | 'hero'
    | 'events'
    | 'announcements'
    | 'faqs'
    | 'blogs'
    | 'faculty'
    | 'testimonials'
    | 'institution';
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  // Feedback toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Modals / Editing States
  const [editingSlide, setEditingSlide] = useState<HeroSlideItem | null>(null);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<AnnouncementItem | null>(null);
  const [isAddingAnnouncement, setIsAddingAnnouncement] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQItem | null>(null);
  const [isAddingFaq, setIsAddingFaq] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState<FacultyMember | null>(null);
  const [isAddingFaculty, setIsAddingFaculty] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = loginAdmin(emailInput, passwordInput);
    if (!success) {
      setLoginError('Invalid credentials. Please use anand.b.j.7@gmail.com and password bss@2026.');
    } else {
      showToast('Welcome Anand! Successfully logged into BSS Foundation CMS.');
    }
  };

  const handleFillDemoCredentials = () => {
    setEmailInput('anand.b.j.7@gmail.com');
    setPasswordInput('bss@2026');
  };

  // ==========================================
  // VIEW 1: LOGIN SCREEN (if not authenticated)
  // ==========================================
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border-t-4 border-[#c59b27] overflow-hidden relative z-10">
          {/* Header */}
          <div className="bg-[#0a1f44] p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <InstitutionalCrest light />
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-white/15 mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Administrative CMS Console</span>
            </div>
            <h1 className="text-xl font-heading font-extrabold text-white">
              Institutional Admin Login
            </h1>
            <p className="text-slate-300 text-xs mt-1">
              Authorized personnel portal for real-time website content updates.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="p-6 sm:p-8 space-y-4">
            {loginError && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded-xl flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Admin User ID / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="anand.b.j.7@gmail.com"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Admin Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0a1f44] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Autofill Demo Credentials Button */}
            <div className="bg-amber-50/80 border border-amber-200/80 p-3 rounded-xl flex items-center justify-between text-xs">
              <div className="text-slate-700">
                <span className="font-bold text-[#0a1f44] block">Default Admin Account:</span>
                <span className="font-mono text-[11px] text-slate-600">anand.b.j.7@gmail.com</span>
              </div>
              <button
                type="button"
                onClick={handleFillDemoCredentials}
                className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 px-2.5 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors whitespace-nowrap"
              >
                Autofill Credentials
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-extrabold py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Sign In to Admin Dashboard</span>
            </button>
          </form>

          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
            <button
              onClick={onNavigateHome}
              className="text-xs text-slate-600 hover:text-[#0a1f44] font-semibold inline-flex items-center space-x-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Public Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 bg-[#0a1f44] text-white px-4 py-3 rounded-xl shadow-2xl border-l-4 border-[#c59b27] flex items-center space-x-2 text-xs font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Admin Bar */}
      <header className="bg-[#0a1f44] text-white sticky top-0 z-40 shadow-md border-b-2 border-[#c59b27]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <InstitutionalCrest light />
            <span className="hidden md:inline-block bg-white/10 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-white/15 uppercase tracking-wider">
              Live CMS Console
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="hidden sm:inline-block text-xs text-slate-300">
              Logged in: <strong className="text-white">anand.b.j.7@gmail.com</strong>
            </span>

            <button
              onClick={() => {
                onNavigateHome();
                showToast('Viewing live website with updated changes!');
              }}
              className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold text-xs px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
              title="Return to public site to see changes"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#0a1f44]" />
              <span>Preview Live Site</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Reset all CMS modifications back to institutional defaults?')) {
                  resetToDefaults();
                  showToast('All content has been reset to institutional defaults.');
                }
              }}
              className="bg-white/10 hover:bg-white/20 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
              title="Reset all content to original defaults"
            >
              <RefreshCw className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden lg:inline">Reset Defaults</span>
            </button>

            <button
              onClick={() => {
                logoutAdmin();
                showToast('Logged out of admin console.');
              }}
              className="bg-red-500/20 hover:bg-red-500 text-white border border-red-500/40 text-xs px-2.5 py-1.5 rounded-lg flex items-center space-x-1 transition-colors cursor-pointer"
              title="Sign out of Admin Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Body: Sidebar + Active Panel */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar Navigation */}
        <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 h-fit sticky top-20">
          <div className="pb-3 mb-3 border-b border-slate-100">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Content Management Tabs
            </span>
          </div>

          <nav className="space-y-1">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: Settings, count: null },
              { id: 'hero', label: 'Hero Slides & Images', icon: Image, count: heroSlides.length },
              { id: 'events', label: 'Events & Conclaves', icon: Calendar, count: events.length },
              { id: 'announcements', label: 'Announcements & Circulars', icon: FileText, count: announcements.length },
              { id: 'faqs', label: 'Frequently Asked Questions', icon: HelpCircle, count: faqs.length },
              { id: 'blogs', label: 'Blogs & Articles', icon: BookOpen, count: blogs.length },
              { id: 'faculty', label: 'Departments & Faculty', icon: GraduationCap, count: faculty.length },
              { id: 'testimonials', label: 'Student Testimonials', icon: Award, count: testimonials.length },
              { id: 'institution', label: 'Institutional & Contact Info', icon: Building2, count: null }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#0a1f44] text-amber-300 shadow-xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0a1f44]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-[#c59b27]'}`} />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== null && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right Active Content Panel */}
        <main className="lg:col-span-9 space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#0a1f44] to-[#132e60] text-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#c59b27]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider block mb-1">
                    Administrator Workspace
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                    Welcome, Anand!
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                    You have master control to update complete website texts, hero banners, corporate logos, faculty members, events, circulars, and student success stories in real-time.
                  </p>
                </div>
                <button
                  onClick={onNavigateHome}
                  className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold text-xs px-4 py-2.5 rounded-xl flex items-center space-x-2 shrink-0 cursor-pointer shadow-md"
                >
                  <span>Go to Website</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    Total Events
                  </span>
                  <span className="text-2xl font-heading font-black text-[#0a1f44] mt-1 block">
                    {events.length}
                  </span>
                  <button
                    onClick={() => setActiveTab('events')}
                    className="text-[11px] text-[#c59b27] font-semibold hover:underline mt-2 inline-block cursor-pointer"
                  >
                    Manage Events →
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    FAQs Published
                  </span>
                  <span className="text-2xl font-heading font-black text-[#0a1f44] mt-1 block">
                    {faqs.length}
                  </span>
                  <button
                    onClick={() => setActiveTab('faqs')}
                    className="text-[11px] text-[#c59b27] font-semibold hover:underline mt-2 inline-block cursor-pointer"
                  >
                    Manage FAQs →
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    Published Blogs
                  </span>
                  <span className="text-2xl font-heading font-black text-[#0a1f44] mt-1 block">
                    {blogs.length}
                  </span>
                  <button
                    onClick={() => setActiveTab('blogs')}
                    className="text-[11px] text-[#c59b27] font-semibold hover:underline mt-2 inline-block cursor-pointer"
                  >
                    Write New Blog →
                  </button>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    Faculty Mentors
                  </span>
                  <span className="text-2xl font-heading font-black text-[#0a1f44] mt-1 block">
                    {faculty.length}
                  </span>
                  <button
                    onClick={() => setActiveTab('faculty')}
                    className="text-[11px] text-[#c59b27] font-semibold hover:underline mt-2 inline-block cursor-pointer"
                  >
                    Update Faculty →
                  </button>
                </div>
              </div>

              {/* Quick Actions Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="font-heading font-bold text-base text-[#0a1f44] mb-4">
                  Quick Management Shortcuts
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => {
                      setActiveTab('events');
                      setIsAddingEvent(true);
                    }}
                    className="p-3 bg-slate-50 hover:bg-amber-50/50 rounded-xl border border-slate-200 text-left transition-colors cursor-pointer flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0a1f44] text-[#c59b27] flex items-center justify-center font-bold">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0a1f44]">Add New Event</span>
                      <span className="text-[10px] text-slate-500">Conclaves & drives</span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('faqs');
                      setIsAddingFaq(true);
                    }}
                    className="p-3 bg-slate-50 hover:bg-amber-50/50 rounded-xl border border-slate-200 text-left transition-colors cursor-pointer flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0a1f44] text-[#c59b27] flex items-center justify-center font-bold">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0a1f44]">Add New FAQ</span>
                      <span className="text-[10px] text-slate-500">Admissions / fees answers</span>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('blogs');
                      setIsAddingBlog(true);
                    }}
                    className="p-3 bg-slate-50 hover:bg-amber-50/50 rounded-xl border border-slate-200 text-left transition-colors cursor-pointer flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0a1f44] text-[#c59b27] flex items-center justify-center font-bold">
                      <Plus className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-[#0a1f44]">Publish Blog Post</span>
                      <span className="text-[10px] text-slate-500">Campus articles & guides</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HERO SLIDES & BANNERS */}
          {activeTab === 'hero' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Homepage Hero Slider Content & Images
                  </h3>
                  <p className="text-xs text-slate-500">
                    Edit carousel banner headlines, promotional badges, background images, and CTAs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {heroSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="border border-slate-200 rounded-xl overflow-hidden hover:border-[#c59b27] transition-all bg-slate-50/50 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-36 w-full bg-slate-200">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-2 left-2 bg-[#0a1f44] text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                          Slide #{slide.id}
                        </span>
                      </div>
                      <div className="p-4 space-y-1.5">
                        <span className="text-[10px] font-bold text-[#c59b27] uppercase tracking-wider">
                          {slide.badge}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-[#0a1f44] line-clamp-1">
                          {slide.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2">
                          {slide.description}
                        </p>
                        <div className="text-[10px] font-semibold text-slate-500 pt-1">
                          CTA: <strong className="text-[#0a1f44]">{slide.primaryCta}</strong> • {slide.stats}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white border-t border-slate-100 flex justify-end">
                      <button
                        onClick={() => setEditingSlide(slide)}
                        className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1 cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit Slide</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Editing Slide Form */}
              {editingSlide && (
                <div className="mt-6 p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                      Editing Slide #{editingSlide.id}
                    </h4>
                    <button
                      onClick={() => setEditingSlide(null)}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Badge Text</label>
                      <input
                        type="text"
                        value={editingSlide.badge}
                        onChange={(e) => setEditingSlide({ ...editingSlide, badge: e.target.value })}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Tagline</label>
                      <input
                        type="text"
                        value={editingSlide.tagline}
                        onChange={(e) => setEditingSlide({ ...editingSlide, tagline: e.target.value })}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Slide Title / Headline</label>
                      <input
                        type="text"
                        value={editingSlide.title}
                        onChange={(e) => setEditingSlide({ ...editingSlide, title: e.target.value })}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-700 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={editingSlide.description}
                        onChange={(e) => setEditingSlide({ ...editingSlide, description: e.target.value })}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={editingSlide.image}
                        onChange={(e) => setEditingSlide({ ...editingSlide, image: e.target.value })}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Primary CTA Button Label</label>
                      <input
                        type="text"
                        value={editingSlide.primaryCta}
                        onChange={(e) => setEditingSlide({ ...editingSlide, primaryCta: e.target.value })}
                        className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-2">
                    <button
                      onClick={() => setEditingSlide(null)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        updateHeroSlide(editingSlide);
                        setEditingSlide(null);
                        showToast(`Slide #${editingSlide.id} updated successfully!`);
                      }}
                      className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                    >
                      Save Slide Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: EVENTS MANAGEMENT */}
          {activeTab === 'events' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Campus Events & Conclaves ({events.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Add or modify academic conclaves, recruitment drives, and student fest events with organizing body tags.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingEvent(true)}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Event</span>
                </button>
              </div>

              {/* Add / Edit Event Form */}
              {(isAddingEvent || editingEvent) && (
                <div className="p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-4">
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                    {isAddingEvent ? 'Add New Campus Event' : 'Edit Campus Event'}
                  </h4>

                  {(() => {
                    const currentEvent = editingEvent || {
                      id: '',
                      title: '',
                      date: 'April 15, 2027',
                      time: '10:00 AM – 04:00 PM',
                      category: 'Academic' as const,
                      organizingBody: 'Dept. of Management Studies',
                      venue: 'Main Corporate Auditorium, CBD Belapur',
                      description: '',
                      badge: 'Campus Event',
                      speaker: ''
                    };

                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="sm:col-span-2">
                          <label className="block font-bold text-slate-700 mb-1">Event Title *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. National Management Conclave 'Genesis 2027'"
                            value={currentEvent.title}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, title: e.target.value });
                              else (currentEvent as any).title = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">
                            Organizing Cell / Department Tag *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Corporate Relations & Placement Cell"
                            value={currentEvent.organizingBody}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, organizingBody: e.target.value });
                              else (currentEvent as any).organizingBody = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Category</label>
                          <select
                            value={currentEvent.category}
                            onChange={(e) => {
                              const val = e.target.value as any;
                              if (editingEvent) setEditingEvent({ ...editingEvent, category: val });
                              else (currentEvent as any).category = val;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          >
                            <option value="Academic">Academic</option>
                            <option value="Corporate">Corporate</option>
                            <option value="Cultural">Cultural</option>
                            <option value="Technical">Technical</option>
                            <option value="Admissions">Admissions</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Date</label>
                          <input
                            type="text"
                            value={currentEvent.date}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, date: e.target.value });
                              else (currentEvent as any).date = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Time</label>
                          <input
                            type="text"
                            value={currentEvent.time || ''}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, time: e.target.value });
                              else (currentEvent as any).time = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Venue</label>
                          <input
                            type="text"
                            value={currentEvent.venue}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, venue: e.target.value });
                              else (currentEvent as any).venue = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Speaker / Lead Mentor</label>
                          <input
                            type="text"
                            placeholder="e.g. Dr. Radhika Iyer (Dean)"
                            value={currentEvent.speaker || ''}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, speaker: e.target.value });
                              else (currentEvent as any).speaker = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="block font-bold text-slate-700 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={currentEvent.description}
                            onChange={(e) => {
                              if (editingEvent) setEditingEvent({ ...editingEvent, description: e.target.value });
                              else (currentEvent as any).description = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="sm:col-span-2 flex justify-end space-x-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingEvent(false);
                              setEditingEvent(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (editingEvent) {
                                updateEvent(editingEvent);
                                setEditingEvent(null);
                                showToast('Event updated successfully!');
                              } else {
                                addEvent(currentEvent);
                                setIsAddingEvent(false);
                                showToast('New event created and published live!');
                              }
                            }}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                          >
                            Save Event
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Event Cards List */}
              <div className="space-y-3">
                {events.map((e) => (
                  <div
                    key={e.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0a1f44]">
                          {e.category}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0a1f44] text-amber-300">
                          Org: {e.organizingBody}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {e.date}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                        {e.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-1">
                        {e.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => setEditingEvent(e)}
                        className="p-1.5 text-slate-600 hover:text-[#0a1f44] hover:bg-slate-100 rounded-lg cursor-pointer"
                        title="Edit Event"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete event "${e.title}"?`)) {
                            deleteEvent(e.id);
                            showToast('Event removed.');
                          }
                        }}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                        title="Delete Event"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Official Circulars & Announcements ({announcements.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Publish urgent notifications, circular numbers, and downloadable documents.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingAnnouncement(true)}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>New Circular</span>
                </button>
              </div>

              {/* Add / Edit Announcement */}
              {(isAddingAnnouncement || editingAnnouncement) && (
                <div className="p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-4 text-xs">
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                    {isAddingAnnouncement ? 'Publish New Announcement / Circular' : 'Edit Circular'}
                  </h4>

                  {(() => {
                    const cur = editingAnnouncement || {
                      id: '',
                      title: '',
                      date: 'March 10, 2027',
                      category: 'Admissions' as const,
                      organizingBody: 'Admissions Directorate',
                      urgent: false,
                      circularNo: `BSS/GEN/2027/${Math.floor(10 + Math.random() * 90)}`,
                      summary: '',
                      documentLinkText: 'Download Official PDF Circular'
                    };

                    return (
                      <div className="space-y-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Circular Title *</label>
                          <input
                            type="text"
                            required
                            value={cur.title}
                            onChange={(e) => {
                              if (editingAnnouncement) setEditingAnnouncement({ ...editingAnnouncement, title: e.target.value });
                              else (cur as any).title = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Circular Ref. No.</label>
                            <input
                              type="text"
                              value={cur.circularNo}
                              onChange={(e) => {
                                if (editingAnnouncement) setEditingAnnouncement({ ...editingAnnouncement, circularNo: e.target.value });
                                else (cur as any).circularNo = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Organizing Body</label>
                            <input
                              type="text"
                              value={cur.organizingBody}
                              onChange={(e) => {
                                if (editingAnnouncement) setEditingAnnouncement({ ...editingAnnouncement, organizingBody: e.target.value });
                                else (cur as any).organizingBody = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Category</label>
                            <input
                              type="text"
                              value={cur.category}
                              onChange={(e) => {
                                const val = e.target.value as any;
                                if (editingAnnouncement) setEditingAnnouncement({ ...editingAnnouncement, category: val });
                                else (cur as any).category = val;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Summary / Notification Text</label>
                          <textarea
                            rows={3}
                            value={cur.summary}
                            onChange={(e) => {
                              if (editingAnnouncement) setEditingAnnouncement({ ...editingAnnouncement, summary: e.target.value });
                              else (cur as any).summary = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="urgentToggle"
                            checked={cur.urgent || false}
                            onChange={(e) => {
                              if (editingAnnouncement) setEditingAnnouncement({ ...editingAnnouncement, urgent: e.target.checked });
                              else (cur as any).urgent = e.target.checked;
                            }}
                            className="rounded text-[#0a1f44]"
                          />
                          <label htmlFor="urgentToggle" className="font-bold text-red-700 cursor-pointer">
                            Mark as Urgent Notice (Red Highlight Badge)
                          </label>
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingAnnouncement(false);
                              setEditingAnnouncement(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (editingAnnouncement) {
                                updateAnnouncement(editingAnnouncement);
                                setEditingAnnouncement(null);
                                showToast('Circular updated!');
                              } else {
                                addAnnouncement(cur);
                                setIsAddingAnnouncement(false);
                                showToast('New circular announced live!');
                              }
                            }}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                          >
                            Publish Announcement
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Announcements List */}
              <div className="space-y-3">
                {announcements.map((a) => (
                  <div
                    key={a.id}
                    className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      a.urgent ? 'border-red-200 bg-red-50/20' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        {a.urgent && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                            Urgent
                          </span>
                        )}
                        <span className="text-[10px] font-mono font-bold text-slate-500">
                          {a.circularNo}
                        </span>
                        <span className="text-xs text-slate-500">{a.date}</span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-[#0a1f44] mt-1">
                        {a.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-1">{a.summary}</p>
                    </div>

                    <div className="flex items-center space-x-1.5 self-end sm:self-center shrink-0">
                      <button
                        onClick={() => setEditingAnnouncement(a)}
                        className="p-1.5 text-slate-600 hover:text-[#0a1f44] hover:bg-slate-100 rounded-lg cursor-pointer"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Delete this circular?')) {
                            deleteAnnouncement(a.id);
                            showToast('Circular deleted.');
                          }
                        }}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: FAQs */}
          {activeTab === 'faqs' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Frequently Asked Questions ({faqs.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Manage Q&A for prospective students covering criteria, fees, installments, and placements.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingFaq(true)}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add FAQ</span>
                </button>
              </div>

              {/* Add / Edit FAQ */}
              {(isAddingFaq || editingFaq) && (
                <div className="p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-3 text-xs">
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                    {isAddingFaq ? 'Add New Question' : 'Edit FAQ'}
                  </h4>

                  {(() => {
                    const cur = editingFaq || {
                      id: '',
                      category: 'Eligibility & Entrance',
                      q: '',
                      a: '',
                      highlight: ''
                    };

                    return (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Category</label>
                            <select
                              value={cur.category}
                              onChange={(e) => {
                                if (editingFaq) setEditingFaq({ ...editingFaq, category: e.target.value as FAQItem['category'] });
                                else (cur as any).category = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            >
                              <option value="Eligibility & Entrance">Eligibility & Entrance</option>
                              <option value="Interview & Selection">Interview & Selection</option>
                              <option value="Fees & Scholarships">Fees & Scholarships</option>
                              <option value="Affiliation & Placements">Affiliation & Placements</option>
                              <option value="Hostels & Campus">Hostels & Campus</option>
                            </select>
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Highlight Badge Chip</label>
                            <input
                              type="text"
                              placeholder="e.g. 100% placement support with ₹22 LPA peak"
                              value={cur.highlight || ''}
                              onChange={(e) => {
                                if (editingFaq) setEditingFaq({ ...editingFaq, highlight: e.target.value });
                                else (cur as any).highlight = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Question *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. What are the installment options for MBA fees?"
                            value={cur.q}
                            onChange={(e) => {
                              if (editingFaq) setEditingFaq({ ...editingFaq, q: e.target.value });
                              else (cur as any).q = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Answer *</label>
                          <textarea
                            rows={3}
                            required
                            value={cur.a}
                            onChange={(e) => {
                              if (editingFaq) setEditingFaq({ ...editingFaq, a: e.target.value });
                              else (cur as any).a = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingFaq(false);
                              setEditingFaq(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (editingFaq) {
                                updateFaq(editingFaq);
                                setEditingFaq(null);
                                showToast('FAQ updated!');
                              } else {
                                addFaq(cur);
                                setIsAddingFaq(false);
                                showToast('New FAQ published!');
                              }
                            }}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                          >
                            Save FAQ
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* FAQs List */}
              <div className="space-y-3">
                {faqs.map((f) => (
                  <div
                    key={f.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex items-start justify-between gap-3 shadow-2xs"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-[#0a1f44]">
                        {f.category}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                        {f.q}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">{f.a}</p>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <button
                        onClick={() => setEditingFaq(f)}
                        className="p-1.5 text-slate-600 hover:text-[#0a1f44] hover:bg-slate-100 rounded-lg cursor-pointer"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Delete this question?')) {
                            deleteFaq(f.id);
                            showToast('FAQ removed.');
                          }
                        }}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: BLOGS & ARTICLES */}
          {activeTab === 'blogs' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Institutional Blogs & Articles ({blogs.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Publish thought-leadership articles, campus news, placement guidance, and student achievements.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingBlog(true)}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Write New Blog</span>
                </button>
              </div>

              {/* Add / Edit Blog */}
              {(isAddingBlog || editingBlog) && (
                <div className="p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-3 text-xs">
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                    {isAddingBlog ? 'Create New Blog Post' : 'Edit Blog Post'}
                  </h4>

                  {(() => {
                    const cur = editingBlog || {
                      id: '',
                      title: '',
                      slug: '',
                      category: 'Management Trends',
                      author: 'Dean of Academics',
                      authorRole: 'BSS Faculty Panel',
                      date: 'March 2027',
                      readTime: '5 min read',
                      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
                      summary: '',
                      content: '',
                      tags: ['BSS Foundation', 'Admissions 2027']
                    };

                    return (
                      <div className="space-y-3">
                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Article Title *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. How Generative AI Is Transforming Corporate MBA Curriculums"
                            value={cur.title}
                            onChange={(e) => {
                              if (editingBlog) setEditingBlog({ ...editingBlog, title: e.target.value });
                              else (cur as any).title = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Author Name</label>
                            <input
                              type="text"
                              value={cur.author}
                              onChange={(e) => {
                                if (editingBlog) setEditingBlog({ ...editingBlog, author: e.target.value });
                                else (cur as any).author = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Category</label>
                            <input
                              type="text"
                              value={cur.category}
                              onChange={(e) => {
                                if (editingBlog) setEditingBlog({ ...editingBlog, category: e.target.value });
                                else (cur as any).category = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Read Time</label>
                            <input
                              type="text"
                              value={cur.readTime}
                              onChange={(e) => {
                                if (editingBlog) setEditingBlog({ ...editingBlog, readTime: e.target.value });
                                else (cur as any).readTime = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Featured Image URL</label>
                          <input
                            type="text"
                            value={cur.image}
                            onChange={(e) => {
                              if (editingBlog) setEditingBlog({ ...editingBlog, image: e.target.value });
                              else (cur as any).image = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Short Summary (Excerpt)</label>
                          <textarea
                            rows={2}
                            value={cur.summary}
                            onChange={(e) => {
                              if (editingBlog) setEditingBlog({ ...editingBlog, summary: e.target.value });
                              else (cur as any).summary = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Full Article Content</label>
                          <textarea
                            rows={5}
                            value={cur.content}
                            onChange={(e) => {
                              if (editingBlog) setEditingBlog({ ...editingBlog, content: e.target.value });
                              else (cur as any).content = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg font-mono text-xs"
                          />
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingBlog(false);
                              setEditingBlog(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (editingBlog) {
                                updateBlog(editingBlog);
                                setEditingBlog(null);
                                showToast('Blog article updated!');
                              } else {
                                addBlog(cur);
                                setIsAddingBlog(false);
                                showToast('New blog published live on the website!');
                              }
                            }}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                          >
                            Publish Blog
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Blogs List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogs.map((b) => (
                  <div
                    key={b.id}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-[#c59b27] transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="h-32 w-full bg-slate-100 overflow-hidden">
                        <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase">
                          <span className="text-[#c59b27]">{b.category}</span>
                          <span>{b.readTime}</span>
                        </div>
                        <h4 className="font-heading font-bold text-sm text-[#0a1f44] line-clamp-2">
                          {b.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2">{b.summary}</p>
                        <div className="text-[10px] text-slate-400 pt-1">
                          By {b.author} • {b.date}
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-end space-x-1.5">
                      <button
                        onClick={() => setEditingBlog(b)}
                        className="p-1.5 text-slate-600 hover:text-[#0a1f44] hover:bg-slate-200 rounded-lg cursor-pointer"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('Delete this blog post?')) {
                            deleteBlog(b.id);
                            showToast('Blog post deleted.');
                          }
                        }}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: DEPARTMENTS & FACULTY */}
          {activeTab === 'faculty' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Academic Departments & Faculty ({faculty.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Add or update faculty mentors, PhD credentials, corporate experience, and LinkedIn links.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingFaculty(true)}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Faculty Member</span>
                </button>
              </div>

              {/* Add / Edit Faculty Form */}
              {(isAddingFaculty || editingFaculty) && (
                <div className="p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-3 text-xs">
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                    {isAddingFaculty ? 'Add Faculty Member' : 'Edit Faculty Member'}
                  </h4>

                  {(() => {
                    const cur = editingFaculty || {
                      id: '',
                      name: '',
                      designation: 'Professor of Management',
                      departmentId: 'dept-management',
                      departmentName: 'Department of Management Studies',
                      qualifications: 'Ph.D. / MBA',
                      experience: '12+ Years',
                      specialization: ['Strategic Management', 'Finance'],
                      email: 'faculty@bssfoundation.net',
                      linkedinUrl: 'https://www.linkedin.com/in/',
                      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                      bio: ''
                    };

                    return (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Faculty Name *</label>
                            <input
                              type="text"
                              required
                              value={cur.name}
                              onChange={(e) => {
                                if (editingFaculty) setEditingFaculty({ ...editingFaculty, name: e.target.value });
                                else (cur as any).name = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Designation</label>
                            <input
                              type="text"
                              value={cur.designation}
                              onChange={(e) => {
                                if (editingFaculty) setEditingFaculty({ ...editingFaculty, designation: e.target.value });
                                else (cur as any).designation = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Department</label>
                            <select
                              value={cur.departmentId}
                              onChange={(e) => {
                                const dept = departments.find((d) => d.id === e.target.value);
                                const dName = dept ? dept.name : cur.departmentName;
                                if (editingFaculty) setEditingFaculty({ ...editingFaculty, departmentId: e.target.value, departmentName: dName });
                                else {
                                  (cur as any).departmentId = e.target.value;
                                  (cur as any).departmentName = dName;
                                }
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            >
                              {departments.map((d) => (
                                <option key={d.id} value={d.id}>{d.name}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Photo URL</label>
                            <input
                              type="text"
                              value={cur.image}
                              onChange={(e) => {
                                if (editingFaculty) setEditingFaculty({ ...editingFaculty, image: e.target.value });
                                else (cur as any).image = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Official Email</label>
                            <input
                              type="email"
                              value={cur.email}
                              onChange={(e) => {
                                if (editingFaculty) setEditingFaculty({ ...editingFaculty, email: e.target.value });
                                else (cur as any).email = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>

                          <div>
                            <label className="block font-bold text-slate-700 mb-1">LinkedIn Profile URL</label>
                            <input
                              type="text"
                              value={cur.linkedinUrl}
                              onChange={(e) => {
                                if (editingFaculty) setEditingFaculty({ ...editingFaculty, linkedinUrl: e.target.value });
                                else (cur as any).linkedinUrl = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Qualifications</label>
                          <input
                            type="text"
                            value={cur.qualifications}
                            onChange={(e) => {
                              if (editingFaculty) setEditingFaculty({ ...editingFaculty, qualifications: e.target.value });
                              else (cur as any).qualifications = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Short Biography</label>
                          <textarea
                            rows={2}
                            value={cur.bio}
                            onChange={(e) => {
                              if (editingFaculty) setEditingFaculty({ ...editingFaculty, bio: e.target.value });
                              else (cur as any).bio = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingFaculty(false);
                              setEditingFaculty(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (editingFaculty) {
                                updateFaculty(editingFaculty);
                                setEditingFaculty(null);
                                showToast('Faculty details saved!');
                              } else {
                                addFaculty(cur);
                                setIsAddingFaculty(false);
                                showToast('New faculty mentor added!');
                              }
                            }}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                          >
                            Save Faculty
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Faculty Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {faculty.map((f) => (
                  <div
                    key={f.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#c59b27] flex items-start space-x-3 shadow-2xs"
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden flex-shrink-0">
                      <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-xs text-[#0a1f44] truncate">{f.name}</h4>
                      <p className="text-[10px] text-slate-500 truncate">{f.designation}</p>
                      <span className="text-[9px] font-bold text-[#c59b27] block truncate">
                        {f.departmentName.replace('Department of ', '')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 shrink-0">
                      <button
                        onClick={() => setEditingFaculty(f)}
                        className="p-1 text-slate-500 hover:text-[#0a1f44] cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete ${f.name}?`)) {
                            deleteFaculty(f.id);
                            showToast('Faculty deleted.');
                          }
                        }}
                        className="p-1 text-red-500 hover:text-red-700 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: STUDENT TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                    Student & Alumni Testimonials ({testimonials.length})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Add or update placed student success stories, CTC package, company, and LinkedIn profiles.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingTestimonial(true)}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-3 py-2 rounded-xl flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              {/* Add / Edit Testimonial Form */}
              {(isAddingTestimonial || editingTestimonial) && (
                <div className="p-5 bg-slate-50 rounded-xl border-2 border-[#c59b27] space-y-3 text-xs">
                  <h4 className="font-heading font-bold text-sm text-[#0a1f44]">
                    {isAddingTestimonial ? 'Add Student Success Story' : 'Edit Testimonial'}
                  </h4>

                  {(() => {
                    const cur = editingTestimonial || {
                      id: '',
                      name: '',
                      course: 'PGDBM + MBA',
                      batch: 'Class of 2027',
                      company: 'Accenture',
                      role: 'Associate Consultant',
                      package: '₹14.0 LPA',
                      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
                      quote: '',
                      type: 'alumni' as const,
                      campus: 'CBD Belapur Campus',
                      highlight: 'Placed via BSS Campus Recruitment',
                      linkedinUrl: 'https://www.linkedin.com/in/'
                    };

                    return (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Student Name *</label>
                            <input
                              type="text"
                              required
                              value={cur.name}
                              onChange={(e) => {
                                if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, name: e.target.value });
                                else (cur as any).name = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Course & Batch</label>
                            <input
                              type="text"
                              value={cur.course}
                              onChange={(e) => {
                                if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, course: e.target.value });
                                else (cur as any).course = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Placed Company *</label>
                            <input
                              type="text"
                              required
                              value={cur.company}
                              onChange={(e) => {
                                if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, company: e.target.value });
                                else (cur as any).company = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Designation</label>
                            <input
                              type="text"
                              value={cur.role}
                              onChange={(e) => {
                                if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, role: e.target.value });
                                else (cur as any).role = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">Salary Package</label>
                            <input
                              type="text"
                              placeholder="e.g. ₹14.5 LPA"
                              value={cur.package}
                              onChange={(e) => {
                                if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, package: e.target.value });
                                else (cur as any).package = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block font-bold text-slate-700 mb-1">LinkedIn Profile URL *</label>
                            <input
                              type="text"
                              required
                              value={cur.linkedinUrl}
                              onChange={(e) => {
                                if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, linkedinUrl: e.target.value });
                                else (cur as any).linkedinUrl = e.target.value;
                              }}
                              className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Photo URL</label>
                          <input
                            type="text"
                            value={cur.image}
                            onChange={(e) => {
                              if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, image: e.target.value });
                              else (cur as any).image = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-700 mb-1">Student Quote / Review</label>
                          <textarea
                            rows={3}
                            value={cur.quote}
                            onChange={(e) => {
                              if (editingTestimonial) setEditingTestimonial({ ...editingTestimonial, quote: e.target.value });
                              else (cur as any).quote = e.target.value;
                            }}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg"
                          />
                        </div>

                        <div className="flex justify-end space-x-2 pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAddingTestimonial(false);
                              setEditingTestimonial(null);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 bg-white border border-slate-300 cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (editingTestimonial) {
                                updateTestimonial(editingTestimonial);
                                setEditingTestimonial(null);
                                showToast('Testimonial updated!');
                              } else {
                                addTestimonial(cur);
                                setIsAddingTestimonial(false);
                                showToast('New student success story added!');
                              }
                            }}
                            className="px-4 py-1.5 rounded-lg text-xs font-bold text-[#0a1f44] bg-[#c59b27] hover:bg-[#b0881e] cursor-pointer"
                          >
                            Save Testimonial
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Testimonials List */}
              <div className="space-y-3">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 flex items-center justify-between gap-4 shadow-2xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 border">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-heading font-bold text-sm text-[#0a1f44]">{t.name}</h4>
                          <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {t.package}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {t.role} @ <strong className="text-[#0a1f44]">{t.company}</strong>
                        </p>
                        <a
                          href={t.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-[#0077b5] hover:underline flex items-center space-x-1"
                        >
                          <LinkIcon className="w-2.5 h-2.5" />
                          <span>{t.linkedinUrl}</span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <button
                        onClick={() => setEditingTestimonial(t)}
                        className="p-1.5 text-slate-600 hover:text-[#0a1f44] hover:bg-slate-100 rounded-lg cursor-pointer"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete story for ${t.name}?`)) {
                            deleteTestimonial(t.id);
                            showToast('Testimonial removed.');
                          }
                        }}
                        className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: INSTITUTIONAL & CONTACT INFO */}
          {activeTab === 'institution' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
              <div className="pb-4 border-b border-slate-100">
                <h3 className="font-heading font-bold text-lg text-[#0a1f44]">
                  Institutional Contacts, Registration & Campus Addresses
                </h3>
                <p className="text-xs text-slate-500">
                  Update primary admissions helplines, emails, campus landmarks, and legal accreditation copy.
                </p>
              </div>

              {(() => {
                return (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateInstitutionInfo(institutionInfo);
                      showToast('Institutional information updated and saved across all pages!');
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Institution Name</label>
                        <input
                          type="text"
                          value={institutionInfo.name}
                          onChange={(e) => updateInstitutionInfo({ ...institutionInfo, name: e.target.value })}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg font-bold"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Tagline</label>
                        <input
                          type="text"
                          value={institutionInfo.tagline}
                          onChange={(e) => updateInstitutionInfo({ ...institutionInfo, tagline: e.target.value })}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Primary Helpline (Belapur)</label>
                        <input
                          type="text"
                          value={institutionInfo.phoneNumbers[0]}
                          onChange={(e) => {
                            const newPhones = [...institutionInfo.phoneNumbers];
                            newPhones[0] = e.target.value;
                            updateInstitutionInfo({ ...institutionInfo, phoneNumbers: newPhones });
                          }}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Admissions Helpline (Kalina)</label>
                        <input
                          type="text"
                          value={institutionInfo.phoneNumbers[1]}
                          onChange={(e) => {
                            const newPhones = [...institutionInfo.phoneNumbers];
                            newPhones[1] = e.target.value;
                            updateInstitutionInfo({ ...institutionInfo, phoneNumbers: newPhones });
                          }}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Admissions Official Email</label>
                        <input
                          type="email"
                          value={institutionInfo.emails[1]}
                          onChange={(e) => {
                            const newEmails = [...institutionInfo.emails];
                            newEmails[1] = e.target.value;
                            updateInstitutionInfo({ ...institutionInfo, emails: newEmails });
                          }}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Placement Cell Email</label>
                        <input
                          type="email"
                          value={institutionInfo.emails[2]}
                          onChange={(e) => {
                            const newEmails = [...institutionInfo.emails];
                            newEmails[2] = e.target.value;
                            updateInstitutionInfo({ ...institutionInfo, emails: newEmails });
                          }}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Government Registration Subtext</label>
                      <textarea
                        rows={2}
                        value={institutionInfo.registration}
                        onChange={(e) => updateInstitutionInfo({ ...institutionInfo, registration: e.target.value })}
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">University Affiliation Text</label>
                      <textarea
                        rows={2}
                        value={institutionInfo.accreditation}
                        onChange={(e) => updateInstitutionInfo({ ...institutionInfo, accreditation: e.target.value })}
                        className="w-full p-2.5 bg-white border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-extrabold text-xs px-5 py-2.5 rounded-xl shadow cursor-pointer flex items-center space-x-1.5"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save Institutional Details</span>
                      </button>
                    </div>
                  </form>
                );
              })()}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
