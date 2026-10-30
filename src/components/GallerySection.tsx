import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "State-of-the-Art Management Lecture Amphitheatre",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      caption: "Acoustically tuned classroom for corporate case study presentations."
    },
    {
      id: 2,
      title: "Annual Convocation & Degree Felicitation",
      category: "Convocation",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      caption: "Graduating class receiving degree certifications and academic honors."
    },
    {
      id: 3,
      title: "GPU High-Performance AI & Data Analytics Workstation Lab",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
      caption: "Dual-screen computing infrastructure running machine learning pipelines."
    },
    {
      id: 4,
      title: "National Management Conclave 'Genesis 2024'",
      category: "Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      caption: "Panel discussion with Fortune 500 Chief Human Resource Officers."
    },
    {
      id: 5,
      title: "Students Brainstorming in Collaborative Innovation Pods",
      category: "Student Life",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      caption: "Peer ideation for the annual inter-college business plan pitch."
    },
    {
      id: 6,
      title: "Digital Business Library & Research Archive",
      category: "Campus",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
      caption: "Comprehensive repository of global research papers and journals."
    },
    {
      id: 7,
      title: "Aarohan Cultural Fest & Band Performance",
      category: "Student Life",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      caption: "Vibrant three-day celebration of music, dance, and creative arts."
    },
    {
      id: 8,
      title: "Corporate Recruitment Day with Multinational Executives",
      category: "Events",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Campus interview rounds with top corporate talent acquisition leaders."
    }
  ];

  const categories = ['All', 'Campus', 'Events', 'Convocation', 'Student Life'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 text-[#0a1f44] px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-[#c59b27]/30 mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>Campus Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a1f44] mb-3 tracking-tight">
            Life & Moments @ BSS Foundation
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A glimpse into the daily rhythm of our campuses — from high-energy academic conferences and tech labs to vibrant cultural festivals.
          </p>
          <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0a1f44] text-amber-300 shadow ring-2 ring-[#c59b27]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer bg-slate-900 aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-between p-4" />

                {/* Top Badge */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="bg-[#0a1f44] text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded shadow border border-[#c59b27]/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title */}
                <div className="relative z-10">
                  <h4 className="font-heading font-bold text-sm text-white leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 z-50 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/40 hover:bg-black/70 z-50 transition-transform hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/40 hover:bg-black/70 z-50 transition-transform hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20 animate-fadeIn">
            <div className="relative aspect-[16/10] max-h-[70vh]">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 bg-[#0a1f44] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-heading font-bold text-lg text-white mt-0.5">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
