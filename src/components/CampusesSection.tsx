import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Navigation, Bus, Train, Clock, CheckCircle, Send } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/bssData';

interface CampusesSectionProps {
  onOpenApply: () => void;
}

export const CampusesSection: React.FC<CampusesSectionProps> = ({ onOpenApply }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    campus: 'Navi Mumbai (CBD Belapur)',
    course: 'PGDBM + MBA',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        campus: 'Navi Mumbai (CBD Belapur)',
        course: 'PGDBM + MBA',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Dual Campus Locations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mb-3 tracking-tight">
            Visit Our Mumbai & Navi Mumbai Campuses
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Strategically placed in Mumbai's commercial and academic powerhouses, both campuses offer excellent suburban rail, metro, and road connectivity.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Campuses Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {INSTITUTION_INFO.campuses.map((campus, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-[#c59b27]/80 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <span className="bg-[#0a1f44] text-amber-300 text-xs font-bold uppercase px-3 py-1 rounded border border-[#c59b27]/40 shadow-sm">
                    {idx === 0 ? "Main Campus & Corporate Office" : "City Academic Center"}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Campus 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-[#0a1f44] mb-2">
                  {campus.name}
                </h3>
                <p className="text-[#a47e18] text-xs font-semibold mb-4">
                  {campus.shortName}
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 mb-6">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-[#0a1f44] flex-shrink-0 mt-0.5" />
                    <span>{campus.address}</span>
                  </div>

                  <div className="flex items-start space-x-2.5 text-slate-600">
                    <Navigation className="w-4 h-4 text-[#c59b27] flex-shrink-0 mt-0.5" />
                    <span><strong>Landmark:</strong> {campus.landmark}</span>
                  </div>

                  <div className="flex items-start space-x-2.5 text-slate-600">
                    <Train className="w-4 h-4 text-[#0a1f44] flex-shrink-0 mt-0.5" />
                    <span><strong>Transit Access:</strong> {campus.metroNear}</span>
                  </div>

                  <div className="flex items-center space-x-2.5 text-slate-700">
                    <Phone className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                    <span><strong>Direct Line:</strong> {campus.phone}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all inline-flex items-center space-x-1.5 border border-[#c59b27]/40"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <button
                  onClick={onOpenApply}
                  className="text-xs font-bold text-[#0a1f44] hover:text-[#c59b27] cursor-pointer"
                >
                  Book In-Person Counseling
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Consultation / Inquiry Form Card */}
        <div className="bg-[#0a1f44] text-white rounded-2xl p-6 sm:p-10 shadow-xl border-t-2 border-[#c59b27]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Direct Academic Desk
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                Request a Callback or Campus Tour
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Have questions regarding syllabus, dual specializations, fee installment plans, or outstation hostel facilities? Our admissions officers respond within 24 working hours.
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Helpline: +91 7400408514 / +91 7304109359</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Official Email: info@bssfoundation.net</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Office Hours: Monday – Saturday (9:30 AM to 6:00 PM)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white text-slate-900 rounded-xl p-6 shadow-md border border-slate-200">
              {inquirySent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 bg-amber-50 text-[#0a1f44] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#c59b27]/30">
                    <CheckCircle className="w-8 h-8 text-[#c59b27]" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-[#0a1f44] mb-1">
                    Inquiry Submitted Successfully!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Our senior admissions counselor will reach out to you on {formData.phone} shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0a1f44]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0a1f44]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0a1f44]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Program of Interest *
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0a1f44] bg-white"
                      >
                        <option value="PGDBM + MBA">PGDBM + MBA (Triple Spec.)</option>
                        <option value="MMS / MBA">MMS / MBA</option>
                        <option value="BBA">BBA (General & Digital)</option>
                        <option value="BCA Hons">BCA (Honours in Tech)</option>
                        <option value="B.Sc Data Science & AI">B.Sc Data Science & AI</option>
                        <option value="BACD">BACD (Advertising & Design)</option>
                        <option value="B.Com">B.Com</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Campus Preference *
                    </label>
                    <select
                      value={formData.campus}
                      onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0a1f44] bg-white"
                    >
                      <option value="Navi Mumbai (CBD Belapur)">Navi Mumbai Campus (API House, CBD Belapur)</option>
                      <option value="Mumbai (Kalina University)">Mumbai Campus (University of Mumbai Kalina)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Query or Message
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ask about entrance cut-offs, scholarship evaluation, hostel availability..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-[#0a1f44]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold py-2.5 rounded-lg text-xs shadow transition-all flex items-center justify-center space-x-2 cursor-pointer border border-[#c59b27]/40"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry & Request Callback</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
