import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, Award, BookOpen } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloadReady, setDownloadReady] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    brochureType: 'comprehensive'
  });

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadReady(true);
  };

  const handleFakePdfDownload = () => {
    // Generate text/pdf simulation blob
    const content = `========================================================
BSS FOUNDATION - SCHOOL OF MANAGEMENT (MUMBAI)
PROSPECTUS & ACADEMIC INFORMATION BULLETIN (2027-2028)
"Beyond Education"
========================================================

Affiliated Programs & Collaborations:
- University of Mumbai
- Tilak Maharashtra Vidyapeeth (TMV)
- TISS Collaborative Partner
- Ministry of Corporate Affairs (MCA) Registered

KEY STATISTICAL HIGHLIGHTS:
- Highest Placement Package: INR 22 LPA
- Average Package: INR 9.11 LPA
- 150+ Top Corporate Recruiters (Deloitte, Accenture, TCS, Wipro, ICICI, HDFC, Airbus)
- 100% Placement Assistance

PROGRAM OFFERINGS:
1. PGDBM + MBA (Triple Specializations) - 2 Years
2. Master of Management Studies (MMS / MBA) - 2 Years
3. Bachelor of Business Administration (BBA) - 3 Years
4. BCA (Honours in Software & Cloud Technologies) - 3/4 Years
5. B.Sc in Data Science & Artificial Intelligence - 3 Years
6. BACD (Advertising Communication & Design) - 4 Years
7. Executive Certifications: Lean Six Sigma Green Belt, SAP S/4HANA, Python

CAMPUS LOCATIONS:
- Navi Mumbai Campus: API House, Sector 15, CBD Belapur, Palm Beach Road, Navi Mumbai 400614
- Mumbai Campus: GICED, University of Mumbai, Kalina, Santacruz East, Mumbai 400098

Helpline: +91 7400408514 / +91 7304109359
Official Website: https://bssfoundation.net/
========================================================`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `BSS_Foundation_Prospectus_2027_2028.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-amber-500/30 animate-fadeIn">
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
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Download Official Prospectus
              </h3>
              <p className="text-amber-300 text-xs">
                Academic Bulletin & Placements Guide (2027–28)
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

        {/* Body */}
        <div className="p-6">
          {!downloadReady ? (
            <form onSubmit={handleDownload} className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Please enter your details to receive the comprehensive 48-page institutional prospectus with detailed semester syllabi, placement audit records, and fee structures.
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Neha Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="neha@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98..."
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a1f44] focus:border-[#c59b27]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Document Version
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-xs text-slate-700 p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="radio"
                      name="brochure"
                      checked={formData.brochureType === 'comprehensive'}
                      onChange={() => setFormData({ ...formData, brochureType: 'comprehensive' })}
                      className="text-[#0a1f44]"
                    />
                    <FileText className="w-4 h-4 text-[#c59b27]" />
                    <span>Comprehensive Master Prospectus 2027-28 (All Degrees)</span>
                  </label>

                  <label className="flex items-center space-x-2 text-xs text-slate-700 p-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="radio"
                      name="brochure"
                      checked={formData.brochureType === 'placements'}
                      onChange={() => setFormData({ ...formData, brochureType: 'placements' })}
                      className="text-[#0a1f44]"
                    />
                    <Award className="w-4 h-4 text-[#c59b27]" />
                    <span>Annual Corporate Placement & Salary Audit Report</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0a1f44] hover:bg-[#132e60] text-amber-300 border border-[#c59b27]/40 font-bold py-2.5 rounded-lg text-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer mt-2"
              >
                <Download className="w-4 h-4 text-[#c59b27]" />
                <span>Verify & Prepare Download</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-[#0a1f44]/10 text-[#c59b27] rounded-full flex items-center justify-center mx-auto mb-3 border border-[#c59b27]/30">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="font-heading font-bold text-xl text-[#0a1f44] mb-1">
                Your Prospectus is Ready!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto mb-5">
                Thank you, {formData.name}. A digital copy has also been dispatched to <strong>{formData.email}</strong>.
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6 text-left text-xs space-y-1.5 text-slate-700">
                <p><strong>Document:</strong> BSS Foundation Information Bulletin 2027-28</p>
                <p><strong>Format:</strong> Digital Verified Edition (.txt / .pdf preview)</p>
                <p><strong>File Size:</strong> 4.8 MB</p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleFakePdfDownload}
                  className="w-full bg-[#c59b27] hover:bg-[#b0881e] text-[#0a1f44] font-bold py-2.5 rounded-lg text-xs shadow flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Document Now</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full text-slate-500 hover:text-slate-800 text-xs py-1.5 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
