import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X, CheckCircle, Award, ArrowRight, ArrowLeft,
  GraduationCap, Download, Printer, User, Phone, Mail, FileText
} from 'lucide-react';
import { PROGRAMS, INSTITUTION_INFO } from '../data/bssData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  preselectedProgram
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: 'Male',
    parentName: '',
    parentMobile: '',
    city: '',
    state: 'Maharashtra',
    program: preselectedProgram || 'PGDBM + MBA (Triple Specialization)',
    campus: 'Navi Mumbai Main Campus (CBD Belapur)',
    qualification: "Bachelor's Degree",
    percentage: '',
    entranceExam: 'CAT / MAH-CET / BSS Test',
    score: '',
    howDidYouHear: 'Online Search / Official Website'
  });

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Final Submit
      const randomRef = 'BSS-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceNumber(randomRef);
      setIsSubmitted(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback silently
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto border border-amber-500/30 animate-fadeIn relative my-8">
        {/* Header */}
        <div className="sticky top-0 bg-[#0a1f44] text-white p-5 z-20 flex items-center justify-between border-b-2 border-amber-400">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-md flex-shrink-0 shadow-sm">
              <img
                src="/assets/aistudio/bssfoundation_2a96b483.png"
                alt="BSS Foundation Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Online Admission Application Portal
              </h3>
              <p className="text-amber-300 text-xs">
                Academic Session 2027 – 2028 • BSS Foundation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <div>
              {/* Stepper Wizard Indicator */}
              <div className="flex items-center justify-between mb-8 px-4">
                {[
                  { num: 1, label: 'Applicant Details' },
                  { num: 2, label: 'Course & Campus' },
                  { num: 3, label: 'Academics & Review' }
                ].map((s, idx) => (
                  <div key={s.num} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                          step >= s.num
                            ? 'bg-[#0a1f44] text-[#c59b27] border border-[#c59b27]'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {s.num}
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 mt-1 hidden sm:block">
                        {s.label}
                      </span>
                    </div>
                    {idx < 2 && (
                      <div
                        className={`h-0.5 w-12 sm:w-20 mx-2 ${
                          step > s.num ? 'bg-[#0a1f44]' : 'bg-slate-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Form Content */}
              <form onSubmit={handleNext}>
                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-base text-[#0a1f44] border-b pb-2">
                      Step 1: Personal Information
                    </h4>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name of Applicant (as per 10th/12th certificate) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aryan Ramesh Patil"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="aryan.patil@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Applicant WhatsApp / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98200 12345"
                          value={formData.mobile}
                          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Gender *
                        </label>
                        <select
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          City / District *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Mumbai / Pune / Thane"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Parent / Guardian Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Patil"
                          value={formData.parentName}
                          onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Parent Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98200 54321"
                          value={formData.parentMobile}
                          onChange={(e) => setFormData({ ...formData, parentMobile: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-base text-[#0a1f44] border-b pb-2">
                      Step 2: Course & Campus Selection
                    </h4>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select Academic Program *
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white font-medium"
                      >
                        {PROGRAMS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.degreeType} - {p.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Preferred Campus Location *
                      </label>
                      <select
                        value={formData.campus}
                        onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white"
                      >
                        <option value="Navi Mumbai Main Campus (CBD Belapur)">
                          Navi Mumbai Campus (API House, Sector 15, CBD Belapur)
                        </option>
                        <option value="Mumbai City Campus (Kalina University)">
                          Mumbai Campus (University of Mumbai, Vidyanagari, Kalina)
                        </option>
                      </select>
                    </div>

                    <div className="bg-amber-500/10 p-4 rounded-xl border border-[#c59b27]/30">
                      <div className="flex items-center space-x-2 text-[#0a1f44] font-bold text-xs mb-1">
                        <Award className="w-4 h-4 text-[#c59b27]" />
                        <span>Admissions Benefit Notice</span>
                      </div>
                      <p className="text-[11px] text-slate-700 leading-relaxed">
                        By submitting this initial application, you secure priority counseling scheduling, spot fee concession evaluation, and placement cell briefing with corporate advisors.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        How did you find BSS Foundation?
                      </label>
                      <select
                        value={formData.howDidYouHear}
                        onChange={(e) => setFormData({ ...formData, howDidYouHear: e.target.value })}
                        className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white"
                      >
                        <option value="Online Search / Official Website">Official Website (bssfoundation.net)</option>
                        <option value="College Recommendation / Professor">College / Faculty Recommendation</option>
                        <option value="Alumni Referral">Alumni / Current Student Referral</option>
                        <option value="Education Fair / Career Seminar">Education Fair / Conclave</option>
                        <option value="Social Media">LinkedIn / Instagram</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-base text-[#0a1f44] border-b pb-2">
                      Step 3: Academic Qualifications & Final Declaration
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Highest Qualification Completed / Appearing *
                        </label>
                        <select
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white"
                        >
                          <option value="12th / HSC Pass">12th / HSC (For UG Courses)</option>
                          <option value="Bachelor's Degree (Appearing Final Year)">Bachelor's Degree (Final Year Appearing)</option>
                          <option value="Bachelor's Degree (Completed)">Bachelor's Degree (Completed)</option>
                          <option value="Working Executive / Post-Grad">Working Executive</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Aggregate Percentage / CGPA *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 74.5% or 8.2 CGPA"
                          value={formData.percentage}
                          onChange={(e) => setFormData({ ...formData, percentage: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Entrance Assessment Status
                        </label>
                        <select
                          value={formData.entranceExam}
                          onChange={(e) => setFormData({ ...formData, entranceExam: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27] bg-white"
                        >
                          <option value="Appeared CAT / MAT / CMAT / CET">Appeared for National / State Entrance</option>
                          <option value="Request BSS Foundation Assessment">Opt for BSS Foundation Aptitude Assessment</option>
                          <option value="Merit Based on 12th Marks (UG)">Merit Based on 12th Marks (UG)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Percentile / Score (if available)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 85 percentile or Awaiting"
                          value={formData.score}
                          onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                          className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                        />
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
                      <p className="font-bold text-slate-800">
                        Application Summary Preview:
                      </p>
                      <p>• Applicant: <span className="font-semibold text-slate-900">{formData.fullName || "—"}</span> ({formData.mobile || "—"})</p>
                      <p>• Target Degree: <span className="font-semibold text-[#0a1f44]">{formData.program}</span></p>
                      <p>• Campus: <span className="font-semibold text-slate-900">{formData.campus}</span></p>
                    </div>

                    <label className="flex items-start space-x-2 text-xs text-slate-600 cursor-pointer pt-2">
                      <input type="checkbox" required className="mt-0.5 rounded text-[#0a1f44]" />
                      <span>
                        I declare that all details furnished above are accurate to the best of my knowledge, and I agree to receive admission counseling communication from BSS Foundation.
                      </span>
                    </label>
                  </div>
                )}

                {/* Form Buttons */}
                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 flex items-center space-x-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-lg border border-[#c59b27]/40 flex items-center space-x-2 transition-all cursor-pointer"
                  >
                    <span>{step === 3 ? "Submit Official Application" : "Proceed to Next Step"}</span>
                    <ArrowRight className="w-4 h-4 text-[#c59b27]" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Submission Confirmation Screen */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-[#0a1f44]/10 text-[#c59b27] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#c59b27]/30">
                <CheckCircle className="w-10 h-10" />
              </div>

              <span className="bg-[#0a1f44] text-[#c59b27] font-crest text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#c59b27]/40">
                Application Verified & Logged
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-[#0a1f44] mt-3 mb-1">
                Congratulations, {formData.fullName}!
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
                Your admission application for <strong>{formData.program}</strong> has been received by the BSS Foundation Academic Admissions Directorate.
              </p>

              {/* Reference Number Card */}
              <div className="bg-slate-50 border-2 border-dashed border-[#c59b27] rounded-xl p-5 max-w-md mx-auto mb-6 text-left shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">
                    Official Reference Code
                  </span>
                  <span className="font-mono font-extrabold text-base text-[#0a1f44]">
                    {referenceNumber}
                  </span>
                </div>
                <div className="text-xs space-y-1.5 text-slate-700">
                  <p><strong>Campus:</strong> {formData.campus}</p>
                  <p><strong>Registered Email:</strong> {formData.email}</p>
                  <p><strong>Registered Phone:</strong> {formData.mobile}</p>
                  <p><strong>Interview Mode:</strong> In-person at Campus or Online Video</p>
                </div>
              </div>

              {/* Next Steps */}
              <div className="max-w-md mx-auto text-left text-xs text-slate-600 bg-slate-100 p-4 rounded-xl border border-slate-200 mb-6 space-y-1.5">
                <p className="font-bold text-[#0a1f44]">Next Steps in Admission:</p>
                <p>1. Our Admissions Officer will contact you within 24 working hours.</p>
                <p>2. Keep your 10th, 12th, and Graduation mark sheets ready for verification.</p>
                <p>3. Scholarship eligibility will be assessed during the Personal Interview.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handlePrint}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-lg border border-slate-300 flex items-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Acknowledgment Receipt</span>
                </button>

                <button
                  onClick={onClose}
                  className="bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 font-bold text-xs px-6 py-2.5 rounded-lg shadow border border-[#c59b27]/40 transition-all cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
