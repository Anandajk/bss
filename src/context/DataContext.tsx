import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INSTITUTION_INFO,
  UPCOMING_EVENTS,
  ANNOUNCEMENTS,
  DEPARTMENTS,
  FACULTY_MEMBERS,
  TESTIMONIALS,
  FAQ_LIST,
  INITIAL_HERO_SLIDES,
  INITIAL_BLOGS,
  EventItem,
  AnnouncementItem,
  Department,
  FacultyMember,
  Testimonial,
  FAQItem,
  HeroSlideItem,
  BlogPost
} from '../data/bssData';

interface DataContextType {
  // Authentication
  isAdminAuthenticated: boolean;
  loginAdmin: (email: string, pass: string) => boolean;
  logoutAdmin: () => void;

  // Live Editable Datasets
  heroSlides: HeroSlideItem[];
  events: EventItem[];
  announcements: AnnouncementItem[];
  faqs: FAQItem[];
  blogs: BlogPost[];
  departments: Department[];
  faculty: FacultyMember[];
  testimonials: Testimonial[];
  institutionInfo: typeof INSTITUTION_INFO;

  // Hero Actions
  updateHeroSlide: (slide: HeroSlideItem) => void;

  // Event Actions
  addEvent: (item: Omit<EventItem, 'id'>) => void;
  updateEvent: (item: EventItem) => void;
  deleteEvent: (id: string) => void;

  // Announcement Actions
  addAnnouncement: (item: Omit<AnnouncementItem, 'id'>) => void;
  updateAnnouncement: (item: AnnouncementItem) => void;
  deleteAnnouncement: (id: string) => void;

  // FAQ Actions
  addFaq: (item: Omit<FAQItem, 'id'>) => void;
  updateFaq: (item: FAQItem) => void;
  deleteFaq: (id: string) => void;

  // Blog Actions
  addBlog: (item: Omit<BlogPost, 'id'>) => void;
  updateBlog: (item: BlogPost) => void;
  deleteBlog: (id: string) => void;

  // Faculty Actions
  addFaculty: (item: Omit<FacultyMember, 'id'>) => void;
  updateFaculty: (item: FacultyMember) => void;
  deleteFaculty: (id: string) => void;

  // Department Actions
  updateDepartment: (dept: Department) => void;

  // Testimonial Actions
  addTestimonial: (item: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (item: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  // Institutional Info Action
  updateInstitutionInfo: (info: typeof INSTITUTION_INFO) => void;

  // System
  resetToDefaults: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEY_PREFIX = 'bss_cms_';

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('bss_admin_session') === 'true';
    } catch {
      return false;
    }
  });

  // 2. Load Stored Data or Defaults
  const loadStored = <T,>(key: string, fallback: T): T => {
    try {
      const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}${key}`);
      return stored ? JSON.parse(stored) : fallback;
    } catch {
      return fallback;
    }
  };

  const [heroSlides, setHeroSlides] = useState<HeroSlideItem[]>(() =>
    loadStored('heroSlides', INITIAL_HERO_SLIDES)
  );
  const [events, setEvents] = useState<EventItem[]>(() =>
    loadStored('events', UPCOMING_EVENTS)
  );
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(() =>
    loadStored('announcements', ANNOUNCEMENTS)
  );
  const [faqs, setFaqs] = useState<FAQItem[]>(() =>
    loadStored('faqs', FAQ_LIST)
  );
  const [blogs, setBlogs] = useState<BlogPost[]>(() =>
    loadStored('blogs', INITIAL_BLOGS)
  );
  const [departments, setDepartments] = useState<Department[]>(() =>
    loadStored('departments', DEPARTMENTS)
  );
  const [faculty, setFaculty] = useState<FacultyMember[]>(() =>
    loadStored('faculty', FACULTY_MEMBERS)
  );
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() =>
    loadStored('testimonials', TESTIMONIALS)
  );
  const [institutionInfo, setInstitutionInfo] = useState<typeof INSTITUTION_INFO>(() =>
    loadStored('institutionInfo', INSTITUTION_INFO)
  );

  // Sync to localStorage
  const save = (key: string, data: unknown) => {
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${key}`, JSON.stringify(data));
    } catch (e) {
      console.error(`Failed to save ${key} to localStorage:`, e);
    }
  };

  // Auth Functions
  const loginAdmin = (email: string, pass: string): boolean => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = pass.trim();
    if (cleanEmail === 'anand.b.j.7@gmail.com' && cleanPass === 'bss@2026') {
      setIsAdminAuthenticated(true);
      try {
        localStorage.setItem('bss_admin_session', 'true');
        localStorage.setItem('bss_admin_email', cleanEmail);
      } catch (e) {
        console.error(e);
      }
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      localStorage.removeItem('bss_admin_session');
    } catch (e) {
      console.error(e);
    }
  };

  // 1. Hero Slide Actions
  const updateHeroSlide = (slide: HeroSlideItem) => {
    setHeroSlides((prev) => {
      const next = prev.map((s) => (s.id === slide.id ? slide : s));
      save('heroSlides', next);
      return next;
    });
  };

  // 2. Event Actions
  const addEvent = (item: Omit<EventItem, 'id'>) => {
    const newId = `ev-${Date.now()}`;
    const newEvent: EventItem = { ...item, id: newId };
    setEvents((prev) => {
      const next = [newEvent, ...prev];
      save('events', next);
      return next;
    });
  };

  const updateEvent = (item: EventItem) => {
    setEvents((prev) => {
      const next = prev.map((e) => (e.id === item.id ? item : e));
      save('events', next);
      return next;
    });
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => {
      const next = prev.filter((e) => e.id !== id);
      save('events', next);
      return next;
    });
  };

  // 3. Announcement Actions
  const addAnnouncement = (item: Omit<AnnouncementItem, 'id'>) => {
    const newId = `ann-${Date.now()}`;
    const newAnn: AnnouncementItem = { ...item, id: newId };
    setAnnouncements((prev) => {
      const next = [newAnn, ...prev];
      save('announcements', next);
      return next;
    });
  };

  const updateAnnouncement = (item: AnnouncementItem) => {
    setAnnouncements((prev) => {
      const next = prev.map((a) => (a.id === item.id ? item : a));
      save('announcements', next);
      return next;
    });
  };

  const deleteAnnouncement = (id: string) => {
    setAnnouncements((prev) => {
      const next = prev.filter((a) => a.id !== id);
      save('announcements', next);
      return next;
    });
  };

  // 4. FAQ Actions
  const addFaq = (item: Omit<FAQItem, 'id'>) => {
    const newId = `faq-${Date.now()}`;
    const newFaq: FAQItem = { ...item, id: newId };
    setFaqs((prev) => {
      const next = [newFaq, ...prev];
      save('faqs', next);
      return next;
    });
  };

  const updateFaq = (item: FAQItem) => {
    setFaqs((prev) => {
      const next = prev.map((f) => (f.id === item.id ? item : f));
      save('faqs', next);
      return next;
    });
  };

  const deleteFaq = (id: string) => {
    setFaqs((prev) => {
      const next = prev.filter((f) => f.id !== id);
      save('faqs', next);
      return next;
    });
  };

  // 5. Blog Actions
  const addBlog = (item: Omit<BlogPost, 'id'>) => {
    const newId = `blog-${Date.now()}`;
    const newBlog: BlogPost = { ...item, id: newId };
    setBlogs((prev) => {
      const next = [newBlog, ...prev];
      save('blogs', next);
      return next;
    });
  };

  const updateBlog = (item: BlogPost) => {
    setBlogs((prev) => {
      const next = prev.map((b) => (b.id === item.id ? item : b));
      save('blogs', next);
      return next;
    });
  };

  const deleteBlog = (id: string) => {
    setBlogs((prev) => {
      const next = prev.filter((b) => b.id !== id);
      save('blogs', next);
      return next;
    });
  };

  // 6. Faculty Actions
  const addFaculty = (item: Omit<FacultyMember, 'id'>) => {
    const newId = `fac-${Date.now()}`;
    const newFac: FacultyMember = { ...item, id: newId };
    setFaculty((prev) => {
      const next = [...prev, newFac];
      save('faculty', next);
      return next;
    });
  };

  const updateFaculty = (item: FacultyMember) => {
    setFaculty((prev) => {
      const next = prev.map((f) => (f.id === item.id ? item : f));
      save('faculty', next);
      return next;
    });
  };

  const deleteFaculty = (id: string) => {
    setFaculty((prev) => {
      const next = prev.filter((f) => f.id !== id);
      save('faculty', next);
      return next;
    });
  };

  // 7. Department Actions
  const updateDepartment = (dept: Department) => {
    setDepartments((prev) => {
      const next = prev.map((d) => (d.id === dept.id ? dept : d));
      save('departments', next);
      return next;
    });
  };

  // 8. Testimonial Actions
  const addTestimonial = (item: Omit<Testimonial, 'id'>) => {
    const newId = `test-${Date.now()}`;
    const newTest: Testimonial = { ...item, id: newId };
    setTestimonials((prev) => {
      const next = [newTest, ...prev];
      save('testimonials', next);
      return next;
    });
  };

  const updateTestimonial = (item: Testimonial) => {
    setTestimonials((prev) => {
      const next = prev.map((t) => (t.id === item.id ? item : t));
      save('testimonials', next);
      return next;
    });
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => {
      const next = prev.filter((t) => t.id !== id);
      save('testimonials', next);
      return next;
    });
  };

  // 9. Institutional Info
  const updateInstitutionInfo = (info: typeof INSTITUTION_INFO) => {
    setInstitutionInfo(info);
    save('institutionInfo', info);
  };

  // Reset System to initial defaults
  const resetToDefaults = () => {
    setHeroSlides(INITIAL_HERO_SLIDES);
    setEvents(UPCOMING_EVENTS);
    setAnnouncements(ANNOUNCEMENTS);
    setFaqs(FAQ_LIST);
    setBlogs(INITIAL_BLOGS);
    setDepartments(DEPARTMENTS);
    setFaculty(FACULTY_MEMBERS);
    setTestimonials(TESTIMONIALS);
    setInstitutionInfo(INSTITUTION_INFO);

    try {
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}heroSlides`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}events`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}announcements`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}faqs`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}blogs`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}departments`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}faculty`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}testimonials`);
      localStorage.removeItem(`${STORAGE_KEY_PREFIX}institutionInfo`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
