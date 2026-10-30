import React, { useState } from 'react';
import { X, Send, CheckCircle, PhoneCall, HelpCircle } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/bssData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    interest: 'PGDBM + MBA',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-amber-500/30 animate-fadeIn">
        {/* Header */}
        <div className="bg-[#0a1f44] text-white p-5 flex items-center justify-between border-b-2 border-amber-400">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-md flex-shrink-0 shadow-sm">
              <img
                src="/assets/aistudio/bssfoundation_2a96b483.png"
                alt="BSS Foundation Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-white">
                Quick Enquiry & Callback
              </h3>
              <p className="text-amber-300 text-xs">
                Helpline: {INSTITUTION_INFO.phoneNumbers[0]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-md cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-[#0a1f44]/10 text-[#c59b27] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#c59b27]/30">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#0a1f44] mb-1">
                Enquiry Logged!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Thank you for your interest in BSS Foundation. Our admissions counselor will ring you back shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Shah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current City
                  </label>
                  <input
                    type="text"
                    placeholder="Mumbai / Pune"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Program of Interest *
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white"
                >
                  <option value="PGDBM + MBA">PGDBM + MBA (Triple Spec.)</option>
                  <option value="BBA">BBA (General & Digital)</option>
                  <option value="BCA Hons">BCA (Honours Software/Cloud)</option>
                  <option value="B.Sc Data Science & AI">B.Sc in Data Science & AI</option>
                  <option value="BACD">BACD (Advertising & Design)</option>
                  <option value="Certifications">Value-Added Certifications (SAP/Six Sigma)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Query (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Inquire about entrance cutoffs, fees, or hostel..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 border border-[#c59b27]/40 font-bold py-2.5 rounded-lg text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer mt-4"
              >
                <Send className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Request Instant Callback</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
