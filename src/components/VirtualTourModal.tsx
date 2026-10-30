import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Compass, MapPin, Info, ChevronRight, ChevronLeft, Eye, RotateCw } from 'lucide-react';

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({
  isOpen,
  onClose,
  onOpenApply
}) => {
  const [activeLocationIdx, setActiveLocationIdx] = useState(0);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const locations = [
    {
      id: 'atrium',
      name: 'Main Executive Atrium & Reception',
      campus: 'CBD Belapur Main Campus',
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      description: "The welcoming corporate foyer at API House featuring counseling suites, corporate waiting lounges, and digital notices.",
      hotspots: [
        { id: 'h1', x: '25%', y: '45%', title: 'Admissions Desk', desc: 'Direct face-to-face academic counseling and document verification suite.' },
        { id: 'h2', x: '70%', y: '55%', title: 'Executive Boardroom', desc: 'High-level meeting space for the Academic Advisory Council and recruiters.' }
      ]
    },
    {
      id: 'ailab',
      name: 'AI & Data Science Lab',
      campus: 'Technology Wing',
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=80",
      description: "Equipped with high-performance workstations for Python, machine learning models, Tableau, and financial forecasting simulations.",
      hotspots: [
        { id: 'h3', x: '35%', y: '50%', title: 'GPU Workstations', desc: 'Dual-monitor computing rigs tuned for deep learning & computer vision.' },
        { id: 'h4', x: '65%', y: '40%', title: 'Cloud Server Hub', desc: 'Local testing instances for web architectures & distributed systems.' }
      ]
    },
    {
      id: 'smartclass',
      name: 'Tiered Smart Amphitheatre',
      campus: 'Academic Hall',
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80",
      description: "Harvard-style seating arrangement enabling collaborative discussion, student case study debates, and corporate masterclasses.",
      hotspots: [
        { id: 'h5', x: '45%', y: '35%', title: 'Interactive Smart Board', desc: 'Touch-enabled 86-inch digital screen with multi-source video input.' },
        { id: 'h6', x: '80%', y: '60%', title: 'Student Debate Console', desc: 'Microphone-equipped student desk arrangement for case studies.' }
      ]
    },
    {
      id: 'library',
      name: 'Digital Management Library',
      campus: 'Knowledge Center',
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1600&q=80",
      description: "Houses 15,000+ volumes, business journals, Harvard Business Review archives, and quiet individual reading pods.",
      hotspots: [
        { id: 'h7', x: '30%', y: '45%', title: 'E-Library Terminals', desc: 'Direct access to ProQuest, EBSCO, and Bombay Stock Exchange indices.' },
        { id: 'h8', x: '75%', y: '50%', title: 'Periodicals & Journals', desc: 'National & international business periodicals collection.' }
      ]
    }
  ];

  if (!isOpen) return null;

  const current = locations[activeLocationIdx];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="bg-[#051329] text-white rounded-2xl shadow-2xl max-w-5xl w-full overflow-hidden border border-amber-500/40 flex flex-col max-h-[95vh] animate-fadeIn">
        {/* Header */}
        <div className="p-4 bg-[#0a1f44] border-b border-amber-400/40 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-md flex-shrink-0 shadow-sm">
              <img
                src="/assets/aistudio/bssfoundation_2a96b483.png"
                alt="BSS Foundation Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                  360° Virtual Campus Walkthrough
                </h3>
                <span className="bg-[#0a1f44] border border-[#c59b27] text-[#c59b27] text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Interactive View
                </span>
              </div>
              <p className="text-xs text-[#c59b27]">
                {current.name} • {current.campus}
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

        {/* 360 Viewer Canvas */}
        <div className="relative flex-1 min-h-[380px] sm:min-h-[460px] bg-black overflow-hidden group select-none">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          />

          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Interactive Hotspots */}
          {current.hotspots.map((hs) => (
            <div
              key={hs.id}
              style={{ left: hs.x, top: hs.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <button
                onClick={() => setSelectedHotspot(selectedHotspot === hs.id ? null : hs.id)}
                className="relative flex items-center justify-center cursor-pointer group/pin"
              >
                <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#c59b27] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-[#0a1f44] text-[#c59b27] items-center justify-center font-bold text-xs shadow-lg border border-[#c59b27]">
                  <Info className="w-3.5 h-3.5" />
                </span>
              </button>

              {/* Hotspot Popup Tooltip */}
              {selectedHotspot === hs.id && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-56 bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-lg shadow-2xl border border-amber-400 text-xs z-30 animate-fadeIn">
                  <p className="font-heading font-bold text-amber-300 mb-1">{hs.title}</p>
                  <p className="text-[11px] text-slate-300 leading-snug">{hs.desc}</p>
                </div>
              )}
            </div>
          ))}

          {/* 360 Compass & Rotation indicator */}
          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-xs flex items-center space-x-2 text-slate-200">
            <RotateCw className="w-3.5 h-3.5 text-amber-400 animate-spin [animation-duration:8s]" />
            <span>Click Hotspots to inspect facilities</span>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-4 inset-x-4 z-20 flex flex-col sm:flex-row items-center justify-between bg-slate-950/80 backdrop-blur-md p-3.5 rounded-xl border border-white/10 gap-3">
            <div>
              <p className="font-heading font-bold text-sm text-white">
                {current.name}
              </p>
              <p className="text-xs text-slate-300 max-w-xl">
                {current.description}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-4 py-2 rounded shadow transition-all cursor-pointer flex-shrink-0"
            >
              Schedule Campus Visit
            </button>
          </div>
        </div>

        {/* Hotspot Thumbnail Switcher */}
        <div className="p-3 bg-[#0a1f44] border-t border-white/10 flex items-center justify-center space-x-2 overflow-x-auto">
          {locations.map((loc, idx) => (
            <button
              key={loc.id}
              onClick={() => {
                setActiveLocationIdx(idx);
                setSelectedHotspot(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center space-x-1.5 ${
                activeLocationIdx === idx
                  ? 'bg-amber-400 text-slate-950 font-bold shadow'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Eye className="w-3 h-3" />
              <span>{loc.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
