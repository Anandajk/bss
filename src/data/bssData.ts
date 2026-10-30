export interface Program {
  id: string;
  name: string;
  shortName: string;
  degreeType: 'Undergraduate' | 'Postgraduate' | 'Certification';
  duration: string;
  eligibility: string;
  affiliation: string;
  overview: string;
  highlights: string[];
  specializations?: string[];
  careerRoles: string[];
  fees: string;
  curriculum: { semester: string; subjects: string[] }[];
  icon: string;
  popular?: boolean;
}

export interface Recruiter {
  name: string;
  category: 'IT & Tech' | 'Banking & BFSI' | 'Conglomerates & Mfg' | 'Consulting & Analytics' | 'Retail & Services';
  logoText: string;
  highestRole: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  batch: string;
  company: string;
  role: string;
  package: string;
  image: string;
  quote: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Corporate' | 'Cultural' | 'Admissions';
  venue: string;
  description: string;
  badge: string;
}

export const INSTITUTION_INFO = {
  name: "BSS Foundation",
  subName: "School of Management",
  tagline: "Beyond Education",
  registration: "Not-for-profit educational institution registered under Ministry of Corporate Affairs (MCA), Govt. of India",
  established: "2010",
  accreditation: "University of Mumbai Affiliated Courses | Tilak Maharashtra Vidyapeeth | TISS Collaborative Partner",
  phoneNumbers: ["+91 7400408514", "+91 7304109359", "+91 9324618846"],
  emails: ["info@bssfoundation.net", "admissions@bssfoundation.net", "placements@bssfoundation.net"],
  campuses: [
    {
      name: "Navi Mumbai Main Campus (Corporate Office)",
      shortName: "CBD Belapur Campus",
      address: "API House, Ground Floor, Plot No. 98/B, Sector 15, Behind Mahavir Icon, Palm Beach Road, CBD Belapur, Navi Mumbai, Maharashtra – 400614",
      landmark: "Near Belapur Railway Station & Palm Beach Road",
      phone: "+91 7400408514",
      metroNear: "CBD Belapur Metro & Harbour Line Railway (5 mins walk)",
      mapQuery: "API House, Sector 15, CBD Belapur, Navi Mumbai"
    },
    {
      name: "Mumbai City Campus",
      shortName: "Kalina University Campus",
      address: "Garware Institute of Career Education & Development (GICED), University of Mumbai, Vidyanagari Campus, Kalina, Santacruz (East), Mumbai, Maharashtra – 400098",
      landmark: "Next to GICED Building, University of Mumbai Kalina",
      phone: "+91 7304109359",
      metroNear: "Santacruz / Kurla Railway Station (10 mins) & BKC Metro",
      mapQuery: "GICED University of Mumbai Kalina Santacruz East Mumbai"
    }
  ],
  stats: {
    highestPackage: "₹22 LPA",
    averagePackage: "₹9.11 LPA",
    placementRate: "100%",
    recruitersCount: "150+",
    alumniNetwork: "4,000+",
    facultiesIndustryExperience: "18+ Yrs",
    liveProjects: "300+",
    campuses: "2 Premier Campuses"
  }
};

export const PROGRAMS: Program[] = [
  {
    id: "pgdbm-mba",
    name: "PGDBM + MBA (Triple Specialization)",
    shortName: "PGDBM + MBA",
    degreeType: "Postgraduate",
    duration: "2 Years (Full-Time)",
    eligibility: "Graduation with minimum 50% in any discipline (B.Com, BBA, B.Sc, B.E./B.Tech) + Valid entrance score (CAT / MAT / CMAT / MAH-CET / BSS Entrance)",
    affiliation: "State Recognized University & BSS Autonomous Diploma",
    overview: "Our flagship dual-credential postgraduate management program meticulously designed with Harvard business case study pedagogy, industry internships, corporate leadership labs, and three high-impact concurrent specializations.",
    highlights: [
      "Triple Specialization options in FinTech, Digital Marketing & Analytics",
      "Paid Corporate Winter & Summer Internships with Top MNCs",
      "6 Global Certifications included (Six Sigma Green Belt, SAP, Advanced Excel)",
      "Dedicated 1-on-1 Mentorship by CXOs and VP-level corporate leaders",
      "Guaranteed Placement Drive Participation with ₹22 LPA peak CTC"
    ],
    specializations: [
      "Financial Management & FinTech",
      "Marketing & Digital Brand Strategy",
      "Human Resource & Global Talent Mgmt",
      "Business Analytics & Big Data",
      "Logistics & Supply Chain Operations"
    ],
    careerRoles: [
      "Management Consultant",
      "Investment Banking Analyst",
      "Brand Manager",
      "Digital Marketing Strategist",
      "HR Business Partner"
    ],
    fees: "₹2,85,000 per year (Easy installment & scholarship options available)",
    popular: true,
    icon: "Briefcase",
    curriculum: [
      {
        semester: "Semester 1",
        subjects: [
          "Organizational Behavior & Leadership",
          "Managerial Economics",
          "Financial Accounting & Reporting",
          "Marketing Management Essentials",
          "Business Statistics & Quantitative Methods",
          "Corporate Communication Lab"
        ]
      },
      {
        semester: "Semester 2",
        subjects: [
          "Strategic Financial Management",
          "Consumer Behavior & Market Research",
          "Operations & Supply Chain Strategy",
          "Business Law & Ethics",
          "Digital Business Transformation",
          "Capstone Industry Simulation Project"
        ]
      },
      {
        semester: "Semester 3",
        subjects: [
          "Specialization Core - Papers I & II",
          "Advanced FinTech & Algorithmic Trading",
          "Omnichannel Marketing & SEO/SEM",
          "Predictive Analytics with Python/R",
          "Summer Internship Project (SIP) Viva"
        ]
      },
      {
        semester: "Semester 4",
        subjects: [
          "Strategic Management & Global Business",
          "Mergers, Acquisitions & Corporate Valuation",
          "Entrepreneurship & Venture Creation",
          "Dissertation & Defense",
          "Executive Placement Masterclasses"
        ]
      }
    ]
  },
  {
    id: "mba-mms",
    name: "Master of Management Studies (MMS / MBA)",
    shortName: "MMS / MBA",
    degreeType: "Postgraduate",
    duration: "2 Years (Full-Time)",
    eligibility: "Bachelor's Degree with at least 50% marks (45% for reserved category) + State/National Management Entrance Test.",
    affiliation: "University Affiliated Pathway",
    overview: "A prestigious management program emphasizing analytical decision-making, strategic organizational leadership, and real-time boardroom readiness with corporate immersion.",
    highlights: [
      "Rigorous core curriculum in alignment with university standards",
      "Dual focus on Indian corporate ecosystem and multinational strategy",
      "Guest lectures from Mumbai financial district executives",
      "Comprehensive pre-placement soft skill & technical bootcamp"
    ],
    specializations: ["Finance", "Marketing", "Human Resources", "Operations", "Systems/IT"],
    careerRoles: ["Financial Analyst", "Marketing Lead", "Operations Executive", "Product Manager"],
    fees: "₹2,40,000 per year",
    popular: false,
    icon: "GraduationCap",
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Perspective Management", "Financial Accounting", "Managerial Economics", "Operations Management", "Business Statistics"]
      },
      {
        semester: "Semester 2",
        subjects: ["Cost & Management Accounting", "Marketing Management", "Human Resource Management", "Legal Aspects of Business", "Research Methodology"]
      },
      {
        semester: "Semester 3",
        subjects: ["International Business", "Strategic Management", "Elective Specialization Group 1", "Elective Specialization Group 2", "Summer Project"]
      },
      {
        semester: "Semester 4",
        subjects: ["Project Management", "Corporate Governance & Ethics", "Final Specialization Papers", "Industry Capstone Dissertation"]
      }
    ]
  },
  {
    id: "pgdbm-1yr",
    name: "Post Graduate Diploma in Business Management (PGDBM)",
    shortName: "PGDBM (1 Year)",
    degreeType: "Postgraduate",
    duration: "1 Year (Accelerated Fast-Track)",
    eligibility: "Bachelor's Degree in any discipline. Working executives and fresh graduates seeking rapid career upskilling.",
    affiliation: "BSS Foundation Autonomous Professional Diploma",
    overview: "Designed for ambitious graduates and working professionals desiring an accelerated, intensive pathway to corporate leadership without committing to a two-year hiatus.",
    highlights: [
      "Weekend & evening flexible module options available",
      "Direct focus on market-demanded skills and certifications",
      "Accelerated live project work with corporate mentors",
      "Dedicated fast-track placement interviews"
    ],
    specializations: ["Business Analytics", "Digital Marketing", "Banking & Wealth Management"],
    careerRoles: ["Associate Consultant", "Account Manager", "Campaign Manager", "Business Analyst"],
    fees: "₹1,60,000 total course fee",
    icon: "Clock",
    curriculum: [
      {
        semester: "Term 1",
        subjects: ["Core Management Principles", "Financial Analysis for Managers", "Marketing in the Digital Era", "Business Analytics Foundations"]
      },
      {
        semester: "Term 2",
        subjects: ["Strategic Management", "Applied Specialization Courses", "Corporate Case Studies", "Industry Internship & Viva"]
      }
    ]
  },
  {
    id: "bba",
    name: "Bachelor of Business Administration (BBA)",
    shortName: "BBA",
    degreeType: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    eligibility: "Higher Secondary (10+2 / HSC) in Arts, Science, or Commerce with minimum 45% aggregate marks.",
    affiliation: "University Affiliated Degree",
    overview: "The definitive undergraduate business qualification that bridges classroom theory with real-world enterprise management, startup ideation, and managerial competencies.",
    highlights: [
      "Practical case study workshops from Year 1",
      "Compulsory annual internships with Mumbai corporate firms",
      "Special emphasis on startup entrepreneurship & business modeling",
      "Personality development, presentation skills & corporate grooming"
    ],
    specializations: ["General Management", "Marketing & E-Commerce", "Banking & Finance", "Entrepreneurship"],
    careerRoles: ["Business Development Executive", "Junior Financial Analyst", "Digital Marketing Associate", "Operations Coordinator"],
    fees: "₹95,000 per year",
    popular: true,
    icon: "Building2",
    curriculum: [
      {
        semester: "Year 1",
        subjects: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Mathematics", "Business Communication", "Environmental Studies"]
      },
      {
        semester: "Year 2",
        subjects: ["Marketing Management", "Human Resource Management", "Cost Accounting", "Corporate Law", "E-Commerce", "Research Methods"]
      },
      {
        semester: "Year 3",
        subjects: ["Strategic Management", "Financial Markets", "International Business", "Specialization Electives", "Internship Viva & Project"]
      }
    ]
  },
  {
    id: "bca-hons",
    name: "Bachelor of Computer Applications (BCA / Honours)",
    shortName: "BCA (Hons.)",
    degreeType: "Undergraduate",
    duration: "3 or 4 Years (Honours Track)",
    eligibility: "10+2 (HSC) pass in any stream with Mathematics / Statistics / Computer Applications preferred, minimum 45% marks.",
    affiliation: "University Affiliated Degree",
    overview: "A future-proof computing program that trains students in modern software engineering, full-stack web architectures, mobile app creation, and cloud computing paradigms.",
    highlights: [
      "High-tech AI & Software Engineering Lab with dedicated workstations",
      "Modern curriculum covering Python, JavaScript, Java, React, SQL & Cloud",
      "Live hackathons, codathons, and open-source contribution drives",
      "Campus placements with top tech giants like TCS, Wipro & Accenture"
    ],
    careerRoles: ["Software Developer", "Full-Stack Engineer", "Database Administrator", "System Analyst", "DevOps Trainee"],
    fees: "₹1,05,000 per year",
    popular: true,
    icon: "Code2",
    curriculum: [
      {
        semester: "Year 1",
        subjects: ["Programming in C & C++", "Computer Architecture", "Discrete Mathematics", "Data Structures & Algorithms", "Web Technologies (HTML/CSS/JS)"]
      },
      {
        semester: "Year 2",
        subjects: ["Object-Oriented Programming (Java)", "Database Management Systems (RDBMS & SQL)", "Operating Systems & Linux", "Python for Software Dev", "Software Engineering Principles"]
      },
      {
        semester: "Year 3",
        subjects: ["Cloud Computing & AWS", "Full-Stack Web Development (Node/React)", "Mobile App Dev (Flutter/Kotlin)", "Cyber Security Fundamentals", "Industry Major Project"]
      }
    ]
  },
  {
    id: "bsc-ds-ai",
    name: "B.Sc in Data Science & Artificial Intelligence (AI)",
    shortName: "B.Sc Data Science & AI",
    degreeType: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 with Mathematics / Statistics / Computer Science with minimum 50% aggregate marks.",
    affiliation: "University Affiliated Degree",
    overview: "A breakthrough technical program designed to create top-tier artificial intelligence practitioners, machine learning engineers, and data scientists prepared for Industry 4.0.",
    highlights: [
      "Dedicated GPU-enabled computing lab for deep learning models",
      "Hands-on training in Python, TensorFlow, PyTorch, Scikit-Learn & Tableau",
      "Real-world datasets from finance, healthcare, and retail domains",
      "High demand across multinational analytics consultancies"
    ],
    careerRoles: ["Data Scientist", "Machine Learning Associate", "AI Prompt Engineer", "BI & Analytics Consultant", "Data Architect"],
    fees: "₹1,25,000 per year",
    popular: true,
    icon: "Cpu",
    curriculum: [
      {
        semester: "Year 1",
        subjects: ["Linear Algebra & Calculus for Data Science", "Probability & Inferential Statistics", "Python for Data Analysis", "Data Structures", "Relational & NoSQL Databases"]
      },
      {
        semester: "Year 2",
        subjects: ["Machine Learning Algorithms", "Data Wrangling & Visualization (Tableau/PowerBI)", "Big Data Technologies (Hadoop/Spark)", "Time Series Forecasting", "Optimization Techniques"]
      },
      {
        semester: "Year 3",
        subjects: ["Deep Learning & Neural Networks", "Natural Language Processing (NLP)", "Computer Vision", "AI Ethics & Model Deployment", "Industrial Capstone AI Project"]
      }
    ]
  },
  {
    id: "bacd",
    name: "Bachelor in Advertising Communication & Design (BACD)",
    shortName: "BACD (4-Yr Honours)",
    degreeType: "Undergraduate",
    duration: "4 Years (Honours Degree)",
    eligibility: "10+2 from any recognized board with strong creative interest in design, branding, and media.",
    affiliation: "University Affiliated Degree",
    overview: "An elite creative communications degree blending brand strategy, digital design, copywriting, art direction, and multimedia advertising production.",
    highlights: [
      "Design studio setup with Adobe Creative Cloud suites",
      "Live ad campaign pitching to corporate clients",
      "Industry portfolio preparation and agency visits",
      "Direct placement connections with Mumbai advertising agencies"
    ],
    careerRoles: ["Art Director", "Brand Strategist", "UI/UX Visual Designer", "Creative Copywriter", "Media Planner"],
    fees: "₹1,15,000 per year",
    icon: "Palette",
    curriculum: [
      {
        semester: "Year 1",
        subjects: ["Visual Arts & Color Theory", "Typography & Layout Design", "History of Advertising", "Digital Imaging Tools", "Communication Theories"]
      },
      {
        semester: "Year 2",
        subjects: ["Creative Copywriting", "Brand Identity & Logo Crafting", "Photography & Videography", "Consumer Psychology", "Media Planning Basics"]
      },
      {
        semester: "Year 3 & 4",
        subjects: ["Integrated Ad Campaigns", "Digital Marketing & Social Media Strategy", "UI/UX & Web Aesthetics", "Client Servicing Simulation", "Graduation Portfolio Exhibition"]
      }
    ]
  },
  {
    id: "bcom",
    name: "Bachelor of Commerce (B.Com)",
    shortName: "B.Com (Professional)",
    degreeType: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2 passed from Maharashtra State Board or equivalent with Commerce / Science stream.",
    affiliation: "University Affiliated Degree",
    overview: "A solid traditional commerce degree augmented with practical Tally Prime, GST filing, and financial accounting credentials for immediate corporate employability.",
    highlights: [
      "Integrated corporate accounting certifications",
      "Coaching support for CA, CS, and CMA aspirants",
      "Direct internships in banking and auditing firms"
    ],
    careerRoles: ["Accountant", "Audit Assistant", "Taxation Consultant", "Finance Executive"],
    fees: "₹55,000 per year",
    icon: "Receipt",
    curriculum: [
      {
        semester: "Year 1",
        subjects: ["Financial Accounting I & II", "Commerce & Business Communication", "Business Economics", "Foundation Course", "Environmental Studies"]
      },
      {
        semester: "Year 2",
        subjects: ["Financial Accounting III & IV", "Management Accounting", "Business Law", "Direct & Indirect Taxes", "Advertising & Commerce"]
      },
      {
        semester: "Year 3",
        subjects: ["Advanced Financial Accounting", "Auditing & Assurance", "Financial Management", "Cost Accounting", "Project Work"]
      }
    ]
  },
  {
    id: "value-added-certifications",
    name: "Executive & Value-Added Industry Certifications",
    shortName: "Value Certifications",
    degreeType: "Certification",
    duration: "3 to 6 Months (Modular)",
    eligibility: "Open to all enrolled students and working professionals.",
    affiliation: "Industry Recognized Partnerships (Six Sigma, SAP, Google)",
    overview: "Industry benchmark credential modules integrated into student learning to guarantee immediate market advantage and resume supremacy.",
    highlights: [
      "Lean Six Sigma Green Belt Certification",
      "SAP ERP (FICO & SD Modules) Hands-on Training",
      "Google & HubSpot Certified Digital Marketing Mastery",
      "Financial Modeling & Advanced Excel with VBA Macros",
      "Supply Chain & Operations Management (SCOM) Certification"
    ],
    careerRoles: ["Operations Quality Analyst", "SAP Consultant Trainee", "Performance Marketer", "Financial Modeler"],
    fees: "Included for full-time PGDBM/MBA students; ₹25,000 for external candidates",
    icon: "Award",
    curriculum: [
      {
        semester: "Module Highlights",
        subjects: [
          "Six Sigma DMAIC Methodology & Minitab Analytics",
          "SAP S/4HANA ERP Architecture & Financial Posting",
          "Google Ads, Meta Ads, SEO & Omnichannel Funnel Optimization",
          "DCF Valuation, LBO Models & Corporate Dashboards",
          "Supply Chain Logistics, Inventory Optimization & Warehouse ERP"
        ]
      }
    ]
  }
];

export const RECRUITERS: Recruiter[] = [
  { name: "Deloitte", category: "Consulting & Analytics", logoText: "Deloitte", highestRole: "Tax & Advisory Associate" },
  { name: "Accenture", category: "IT & Tech", logoText: "accenture", highestRole: "Management Consultant" },
  { name: "TCS", category: "IT & Tech", logoText: "TATA TCS", highestRole: "Associate Consultant" },
  { name: "Wipro", category: "IT & Tech", logoText: "wipro", highestRole: "Business Analyst" },
  { name: "ICICI Bank", category: "Banking & BFSI", logoText: "ICICI Bank", highestRole: "Deputy Manager (Wealth)" },
  { name: "HDFC Bank", category: "Banking & BFSI", logoText: "HDFC BANK", highestRole: "Relationship Manager" },
  { name: "HDFC Securities", category: "Banking & BFSI", logoText: "HDFC Sec", highestRole: "Equity Research Analyst" },
  { name: "Kotak Mahindra", category: "Banking & BFSI", logoText: "Kotak", highestRole: "Commercial Banking Lead" },
  { name: "Airbus", category: "Conglomerates & Mfg", logoText: "AIRBUS", highestRole: "Supply Chain Analyst" },
  { name: "Schneider Electric", category: "Conglomerates & Mfg", logoText: "Schneider", highestRole: "Procurement Specialist" },
  { name: "Mahindra & Mahindra", category: "Conglomerates & Mfg", logoText: "Mahindra", highestRole: "Operations Management Trainee" },
  { name: "Asian Paints", category: "Conglomerates & Mfg", logoText: "asianpaints", highestRole: "Territory Sales Officer" },
  { name: "LG Electronics", category: "Conglomerates & Mfg", logoText: "LG", highestRole: "Area Sales Manager" },
  { name: "Whirlpool", category: "Conglomerates & Mfg", logoText: "Whirlpool", highestRole: "Category Planner" },
  { name: "Motilal Oswal", category: "Banking & BFSI", logoText: "Motilal Oswal", highestRole: "Financial Planner" },
  { name: "Shoppers Stop", category: "Retail & Services", logoText: "SHOPPERS STOP", highestRole: "Retail Merchandising Lead" },
  { name: "OPPO Mobile", category: "Retail & Services", logoText: "OPPO", highestRole: "Brand Marketing Lead" },
  { name: "Healthspring", category: "Retail & Services", logoText: "Healthspring", highestRole: "Operations Lead" },
  { name: "Capgemini", category: "IT & Tech", logoText: "Capgemini", highestRole: "Digital Transformation Consultant" },
  { name: "KPMG", category: "Consulting & Analytics", logoText: "KPMG", highestRole: "Risk Analyst" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rohan Deshmukh",
    course: "PGDBM + MBA (Marketing & Analytics)",
    batch: "Class of 2024",
    company: "Accenture",
    role: "Management Consultant",
    package: "₹14.5 LPA",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    quote: "The practical business immersion at BSS Foundation went beyond any textbook. Between Harvard case studies and rigorous mock interviews, I felt completely prepared during the final Accenture campus selection round."
  },
  {
    id: "t2",
    name: "Pooja Sawant",
    course: "B.Sc in Data Science & AI",
    batch: "Class of 2024",
    company: "Deloitte",
    role: "Associate AI Analyst",
    package: "₹12.0 LPA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote: "BSS Foundation's state-of-the-art AI lab and hands-on guidance with real industry datasets gave me the competitive edge. The faculty's mentorship helped me secure a high-paying offer before graduation."
  },
  {
    id: "t3",
    name: "Aditya Kulkarni",
    course: "PGDBM + MBA (Finance & FinTech)",
    batch: "Class of 2023",
    company: "HDFC Bank",
    role: "Deputy Manager (Wealth Management)",
    package: "₹10.5 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "The SAP certification and financial modeling workshops at the Belapur campus made all the difference. BSS Foundation doesn't just grant degrees; they build careers with real corporate networks."
  },
  {
    id: "t4",
    name: "Ananya Sen",
    course: "BBA (E-Commerce & Digital Marketing)",
    batch: "Class of 2024",
    company: "Asian Paints",
    role: "Brand Specialist",
    package: "₹8.8 LPA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    quote: "Coming straight out of 12th standard, BSS Foundation shaped my entire worldview. The student clubs, annual Aarohan fest, and internship support built immense confidence in me."
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "ev1",
    title: "National Management Conclave 'Genesis 2025': AI in Business",
    date: "November 14, 2025",
    category: "Academic",
    venue: "Main Auditorium, CBD Belapur Campus",
    description: "Keynote addresses by Fortune 500 Chief Information Officers and Fintech founders discussing generative AI business transformation.",
    badge: "Flagship Event"
  },
  {
    id: "ev2",
    title: "Mega Campus Recruitment Drive - Phase 1",
    date: "December 02, 2025",
    category: "Corporate",
    venue: "BSS Placement Cell & Corporate Boardroom",
    description: "Over 45 corporate partners visiting for on-campus final recruitment interviews for PGDBM, MBA, and tech graduates.",
    badge: "Placements"
  },
  {
    id: "ev3",
    title: "Aarohan 2025: Annual Inter-Collegiate Cultural & Sports Fest",
    date: "January 22-24, 2026",
    category: "Cultural",
    venue: "Kalina University Campus & Belapur Arena",
    description: "3 days of high-voltage inter-college management games, battle of bands, fashion showcases, and sports tournaments.",
    badge: "Student Life"
  },
  {
    id: "ev4",
    title: "Round 2 Admission Interviews & Scholarship Evaluation",
    date: "Ongoing - Limited Seats",
    category: "Admissions",
    venue: "Both Campuses & Online Video Mode",
    description: "Direct counselling, merit scholarship assessment, and spot admission offers for academic session 2025-2026.",
    badge: "Open Now"
  }
];

export const LEADERSHIP = [
  {
    role: "Director's Message",
    name: "Director's Desk",
    quote: "Our philosophy is 'Beyond Education' — empowering students to lead with ethical fortitude, digital agility, and strategic foresight.",
    fullMessage: `Welcome to BSS Foundation (School of Management). In an era marked by lightning-fast disruption, artificial intelligence, and evolving global markets, mere conventional rote learning is insufficient. At BSS Foundation, we have pioneered the 'Beyond Education' pedagogical framework. 

We blend rigorous academic foundations affiliated with premier universities alongside corporate mentorship, live business simulations, six sigma certifications, and comprehensive personality enhancement. Located strategically in the economic heart of Navi Mumbai and the University of Mumbai Kalina campus, our students benefit from constant industry exposure. 

I invite you to step into our vibrant corridors, embrace innovation, and transform your ambitions into executive reality.`,
    speaker: "Director, BSS Foundation - School of Management"
  },
  {
    role: "Academic Council",
    name: "Advisory Board & Mentors",
    description: "Comprising eminent academicians, former university deans, industry CXOs from leading financial institutions, and international business practitioners who continuously review and update our curriculum to stay aligned with corporate demands."
  }
];

export interface FAQItem {
  id: string;
  category: "All" | "Eligibility & Entrance" | "Interview & Selection" | "Fees & Scholarships" | "Hostels & Campus" | "Affiliation & Placements";
  q: string;
  a: string;
  highlight?: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "Eligibility & Entrance",
    q: "Which entrance examinations are accepted for PGDBM + MBA and undergraduate programs?",
    a: "For PGDBM + MBA and MMS admissions, we accept scores from CAT, MAH-MBA-CET, CMAT, MAT, XAT, and ATMA. Candidates who have not appeared for a national entrance examination can take the online BSS Aptitude & Analytical Assessment (free of charge). For undergraduate courses (BBA, BCA, B.Sc Data Science & AI, BACD), admissions are granted based on 10+2 merit scores followed by personal counseling.",
    highlight: "National exam scores or free online BSS Aptitude Assessment accepted"
  },
  {
    id: "faq-2",
    category: "Eligibility & Entrance",
    q: "Can final-year graduation students apply for provisional admission to management programs?",
    a: "Yes. Students currently in the final year or final semester of their Bachelor's degree (any discipline from a UGC-recognized university) are fully eligible to apply. You can secure provisional admission based on your aggregate marks up to the penultimate semester. Final marksheets and passing certificates must be submitted before the prescribed university verification cutoff date.",
    highlight: "Final-year students can apply with provisional seat booking"
  },
  {
    id: "faq-3",
    category: "Interview & Selection",
    q: "What is the Personal Interview (PI) round, and can outstation students appear online?",
    a: "The Personal Interview is a 15–20 minute structured interaction with senior faculty and corporate advisory panelists. It assesses your communication clarity, logical aptitude, leadership orientation, and career goals rather than mere textbook recall. Outstation and interstate students can comfortably attend via secure online video interview (Google Meet / Zoom), while local applicants are welcomed at our CBD Belapur or Kalina campuses.",
    highlight: "Online video interview available for outstation applicants"
  },
  {
    id: "faq-4",
    category: "Interview & Selection",
    q: "What is the timeline from application submission to receiving an admission decision?",
    a: "Our Admissions Directorate operates a streamlined rolling assessment system. Once your online application is submitted, you will receive your personal interview slot within 48 to 72 business hours. Following the interview, provisional admission results and scholarship merit determinations are communicated within 3 to 5 working days via email and SMS.",
    highlight: "Decisions communicated within 3–5 working days post-interview"
  },
  {
    id: "faq-5",
    category: "Fees & Scholarships",
    q: "What are the payment modes and installment options available for tuition fees?",
    a: "To ease the financial planning for families, tuition fees can be paid in flexible installment schedules (semester-wise or 3 structured term installments per academic year). Payments are accepted via secure Net Banking, NEFT/RTGS, UPI, demand drafts, and major debit/credit cards. An initial nominal seat reservation fee confirms your enrollment.",
    highlight: "Structured semester-wise installment plans available"
  },
  {
    id: "faq-6",
    category: "Fees & Scholarships",
    q: "What are the criteria for the Merit Scholarships (up to 30% fee concession)?",
    a: "BSS Foundation grants merit concessions across four key categories: 1) Academic Excellence (up to 30% waiver for students with 85%+ aggregate in graduation/12th, and 20% for 75–84%); 2) National & State Level Sports Achievers; 3) Children of Armed Forces & Defense Personnel; and 4) Economically Weaker Section (EWS) assistance. Scholarships are adjusted directly in the tuition fee schedule.",
    highlight: "Up to 30% fee concession for academic and sporting achievers"
  },
  {
    id: "faq-7",
    category: "Fees & Scholarships",
    q: "Does BSS Foundation assist with student education loans?",
    a: "Yes. BSS Foundation provides full documentation support for education loans. Upon selection, students receive an official Admission Letter, Fee Schedule Estimate, and Institutional Accreditation kit required by all nationalized and private banks (including SBI, Bank of Baroda, HDFC Credila, Canara Bank, and ICICI Bank). Our admissions helpdesk assists students with required paperwork.",
    highlight: "Full bank loan sanction documentation support provided"
  },
  {
    id: "faq-8",
    category: "Affiliation & Placements",
    q: "What are the institutional affiliations, recognitions, and degree validities?",
    a: "BSS Foundation (School of Management) is a premier not-for-profit educational institution registered under the Ministry of Corporate Affairs (MCA), Govt. of India. Our degrees and certifications are offered in academic collaboration and affiliation with statutory universities including the University of Mumbai (Garware Institute - GICED, Kalina Campus) and Tilak Maharashtra Vidyapeeth (TMV, Pune, deemed university under UGC Act 1956). All degrees are legally valid for government examinations (UPSC, MPSC, Banking) and higher education globally.",
    highlight: "UGC-recognized degrees valid for UPSC, Govt. exams & abroad"
  },
  {
    id: "faq-9",
    category: "Affiliation & Placements",
    q: "What is the placement assistance policy and past recruitment track record?",
    a: "BSS Foundation operates a dedicated Corporate Relations & Placement Cell (CRPC) providing 100% placement and internship assistance. Our recent placement cycles recorded a highest package of ₹22 LPA and an average of ₹9.11 LPA across 150+ recruiters including Deloitte, Accenture, TCS, Wipro, ICICI Bank, HDFC Bank, and Airbus. In addition, every student completes mandatory 8-12 weeks of paid corporate internships.",
    highlight: "100% placement support with ₹22 LPA highest & ₹9.11 LPA average"
  },
  {
    id: "faq-10",
    category: "Hostels & Campus",
    q: "Are hostel accommodations and transportation facilities available for outstation students?",
    a: "Yes. BSS Foundation coordinates safe, hygienic, and fully managed student residences (separate hostels for male and female students) within 10–15 minutes of both the CBD Belapur and Kalina campuses. Hostel amenities include Wi-Fi connectivity, biometric security, air-conditioned/non-AC room options, nutritious dining mess, laundry, and proximity to local suburban train and metro stations.",
    highlight: "Secure male/female student hostels with dining & high-speed Wi-Fi"
  },
  {
    id: "faq-11",
    category: "Hostels & Campus",
    q: "Which campus will I study at: CBD Belapur or Kalina (University of Mumbai)?",
    a: "Students can choose their preferred campus location at the time of application, subject to seat availability in their specific program specialization. The CBD Belapur campus (API House, Palm Beach Road) serves as the executive corporate management hub, while the Kalina campus operates in collaboration with the University of Mumbai Vidyanagari campus. Both campuses share identical faculty, syllabus standards, and centralized campus placement drives.",
    highlight: "Choice of Belapur or Kalina campus with shared faculty & placements"
  },
  {
    id: "faq-12",
    category: "Interview & Selection",
    q: "What original documents are required at the time of admission confirmation?",
    a: "Applicants need to submit: 1) Class 10th and 12th Marksheets & Passing Certificates; 2) Bachelor's Degree Marksheets (all semesters for PG applicants); 3) National Entrance Examination Scorecard (if applicable); 4) College Leaving / Transfer Certificate; 5) Migration Certificate (for students from universities outside Maharashtra); 6) Government Photo ID (Aadhaar / Passport); and 7) 5 recent passport-sized color photographs.",
    highlight: "Academic marksheets, transfer certificate, government photo ID"
  }
];
