import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Award, ChevronRight,
  ShieldCheck, ExternalLink, Heart, Send, CheckCircle2
} from 'lucide-react';
import { InstitutionalCrest } from './InstitutionalCrest';
import { INSTITUTION_INFO, PROGRAMS } from '../data/bssData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenApply: () => void;
  onOpenBrochure: () => void;
  onOpenVirtualTour: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenApply,
  onOpenBrochure,
  onOpenVirtualTour
}) => {
  const [subEmail, setSubEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setSubEmail('');
      }, 3500);
    }
  };

  return (
    <footer className="bg-[#051329] text-slate-300 border-t-4 border-[#c59b27] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer: Institutional Emblem & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-6">
            <InstitutionalCrest light={true} />
            <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-lg">
              BSS Foundation (School of Management) is a premier not-for-profit educational institution registered under the Ministry of Corporate Affairs (MCA), Govt. of India. Anchored in the ethos of "Beyond Education", we deliver industry-integrated undergraduate, postgraduate, and professional credentials across Mumbai and Navi Mumbai.
            </p>
            <div className="mt-4 flex items-center space-x-3 text-xs text-[#c59b27] font-semibold">
              <Award className="w-4 h-4" />
              <span>University of Mumbai Affiliated Courses • Tilak Maharashtra Vidyapeeth (TMV)</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h4 className="font-heading font-bold text-base text-white mb-1">
                Subscribe to BSS Academic Gazette & Placement Bulletins
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Receive notices about upcoming guest lectures, scholarship rounds, and corporate hiring notifications.
              </p>

              {subscribed ? (
                <div className="flex items-center space-x-2 text-xs text-[#c59b27] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing to BSS Foundation updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                    className="flex-1 text-xs px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#c59b27]"
                  />
                  <button
                    type="submit"
                    className="bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold px-5 py-2.5 rounded-lg text-xs transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Footer: Multi-column sitemap (Yenepoya style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-xs">
          {/* Column 1: Quick Navigation */}
          <div>
            <h5 className="font-crest font-bold text-sm tracking-wider uppercase mb-4 text-[#c59b27]">
              Institutional
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Home Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  About BSS Foundation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Vision, Mission & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Director's Desk & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('departments')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left text-amber-300 font-semibold"
                >
                  Departments & Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Academic Advisory Board
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVirtualTour}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left font-semibold text-slate-300"
                >
                  360° Virtual Campus Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Academic Programs */}
          <div>
            <h5 className="font-crest font-bold text-sm tracking-wider uppercase mb-4 text-[#c59b27]">
              Programs
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  PGDBM + MBA (Triple Spec.)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Master of Management Studies (MMS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  BBA (Business Administration)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  BCA (Honours Software/Cloud)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  B.Sc Data Science & AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  BACD (Advertising & Design)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Six Sigma & SAP Certifications
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Careers */}
          <div>
            <h5 className="font-crest font-bold text-sm tracking-wider uppercase mb-4 text-[#c59b27]">
              Admissions & Placements
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenApply}
                  className="text-amber-300 font-bold hover:text-white transition-colors cursor-pointer text-left"
                >
                  Online Application Form 2027
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Eligibility & Selection Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Fee Structure & Scholarships
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBrochure}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Download Master Prospectus
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placements')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Placement Highlights (₹22 LPA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placements')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  150+ Corporate Recruiters
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('student-testimonials')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Student & Alumni Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Statutory & Disclosures (Yenepoya requirement) */}
          <div>
            <h5 className="font-crest font-bold text-sm tracking-wider uppercase mb-4 text-[#c59b27]">
              Statutory Cells
            </h5>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Anti-Ragging Committee</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Internal Complaints (ICC)</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Grievance Redressal Cell</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Equal Opportunity Cell</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Mandatory MCA Disclosures</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Code of Conduct & Ethics</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Campus Helplines */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h5 className="font-crest font-bold text-sm tracking-wider uppercase mb-4 text-[#c59b27]">
              Contact Desk
            </h5>
            <div className="space-y-3 text-slate-400">
              <div>
                <p className="text-white font-semibold">Navi Mumbai Campus:</p>
                <p className="text-[11px] leading-tight">API House, Plot 98/B, Sec 15, CBD Belapur, Palm Beach Rd, 400614</p>
              </div>

              <div>
                <p className="text-white font-semibold">Mumbai Campus:</p>
                <p className="text-[11px] leading-tight">GICED, University of Mumbai, Kalina, Santacruz East, 400098</p>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-1">
                <p className="flex items-center space-x-1.5 text-amber-300">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 7400408514</span>
                </p>
                <p className="flex items-center space-x-1.5 text-amber-300">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 7304109359</span>
                </p>
                <p className="flex items-center space-x-1.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@bssfoundation.net</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()} BSS Foundation (School of Management). All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400">Terms of Admission</span>
            <span>•</span>
            <span className="hover:text-slate-400">Statutory Compliances</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
