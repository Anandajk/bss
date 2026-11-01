import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen, Calendar, Clock, User, Tag, ArrowRight,
  Search, ChevronRight, X, Share2, CheckCircle2, Bookmark
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { BlogPost } from '../data/bssData';

interface BlogPageProps {
  onOpenApply: () => void;
  onOpenEnquiry?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onOpenApply, onOpenEnquiry }) => {
  const { blogs } = useData();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    blogs.forEach((b) => set.add(b.category));
    return ['All', ...Array.from(set)];
  }, [blogs]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchCat = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === '' ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  const handleShare = (post: BlogPost) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '?blog=' + post.id);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#0a1f44]/5 border border-[#0a1f44]/15 text-[#0a1f44] text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>BSS Academic & Industry Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-crest font-bold text-[#0a1f44] tracking-tight mb-4">
            Articles, Research & Corporate Gazettes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Thought leadership, management trends, AI technological evolutions, and career roadmaps written by BSS faculty, researchers, and corporate industry leaders.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0a1f44] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:border-[#0a1f44] focus:ring-1 focus:ring-[#0a1f44] bg-slate-50 text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Blog Post Grid */}
        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No articles matched your filter</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try switching category tags or clearing your search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#0a1f44] text-white text-xs font-semibold rounded-lg hover:bg-[#132f63] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a1f44]/90 backdrop-blur-sm text-[#c59b27] px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 text-[11px] text-slate-500 mb-2.5">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-[#c59b27]" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-[#c59b27]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-[#0a1f44] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                      {post.summary}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Read Action */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-[#0a1f44] text-white flex items-center justify-center text-[10px] font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800 leading-tight">{post.author}</p>
                          <p className="text-[10px] text-slate-400">{post.authorRole}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => setActiveArticle(post)}
                        className="inline-flex items-center space-x-1 text-xs font-bold text-[#0a1f44] hover:text-[#c59b27] transition-colors cursor-pointer"
                      >
                        <span>Read</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#0a1f44] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-[#c59b27]">
          <div>
            <span className="text-[#c59b27] text-xs font-bold uppercase tracking-wider">
              BSS Foundation • Admissions 2027 Open
            </span>
            <h2 className="text-2xl sm:text-3xl font-crest font-bold mt-1 text-white">
              Ready to embark on an exceptional management journey?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-xl">
              Apply for PGDBM + MBA, BBA, BCA, and B.Sc Data Science & AI. Direct recruitment pathways with top global consulting & IT firms.
            </p>
          </div>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              onClick={onOpenApply}
              className="px-6 py-3 bg-[#c59b27] hover:bg-[#b0871d] text-slate-950 font-bold text-sm rounded-lg transition-colors shadow-md cursor-pointer whitespace-nowrap"
            >
              Apply Online 2027
            </button>
            {onOpenEnquiry && (
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg transition-colors border border-white/20 cursor-pointer whitespace-nowrap"
              >
                Quick Enquiry
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Full Article Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0a1f44] uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded">
                  {activeArticle.category}
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleShare(activeArticle)}
                    className="p-1.5 text-slate-500 hover:text-[#0a1f44] hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center space-x-1 cursor-pointer"
                    title="Share Article Link"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                  </button>

                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cover Image */}
              <div className="w-full h-64 sm:h-80 overflow-hidden bg-slate-100 relative">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 text-xs text-slate-500 mb-3">
                  <span>Published {activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime} read</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-[#0a1f44] leading-tight mb-4">
                  {activeArticle.title}
                </h1>

                {/* Author Info */}
                <div className="flex items-center space-x-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#0a1f44] text-white flex items-center justify-center font-bold text-sm">
                    {activeArticle.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{activeArticle.author}</h4>
                    <p className="text-[11px] text-slate-500">{activeArticle.authorRole}</p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4 whitespace-pre-line">
                  {activeArticle.content}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
                  {activeArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Modal Footer CTA */}
                <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0a1f44]">Interested in studying at BSS Foundation?</h4>
                    <p className="text-xs text-slate-500">Admissions for 2027 are actively underway.</p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      onOpenApply();
                    }}
                    className="px-5 py-2.5 bg-[#0a1f44] text-white hover:bg-[#132f63] text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    Apply Now for 2027
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
