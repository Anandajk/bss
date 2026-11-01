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
  type?: 'alumni' | 'current';
  campus?: string;
  highlight?: string;
  linkedinUrl: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  category: 'Academic' | 'Corporate' | 'Cultural' | 'Admissions' | 'Technical';
  organizingBody: string; // The cell, club, or academic department organizing this event
  venue: string;
  description: string;
  badge: string;
  speaker?: string;
  registrationDeadline?: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  category: 'Admissions' | 'Academic' | 'Examinations' | 'Placements' | 'Scholarships' | 'General';
  organizingBody: string;
  urgent?: boolean;
  summary: string;
  circularNo: string;
  documentLinkText?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  qualifications: string;
  experience: string;
  specialization: string[];
  email: string;
  linkedinUrl: string;
  image: string;
  bio: string;
  publicationsCount?: number;
  isHod?: boolean;
}

export interface Department {
  id: string;
  name: string;
  shortCode: string;
  hodName: string;
  hodDesignation: string;
  hodImage: string;
  overview: string;
  vision: string;
  programsOffered: string[];
  keyLabs: string[];
  contactEmail: string;
  establishedYear: string;
}

export interface HeroSlideItem {
  id: number | string;
  image: string;
  badge: string;
  tagline: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage?: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
  tags: string[];
  featured?: boolean;
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
    quote: "The practical business immersion at BSS Foundation went beyond any textbook. Between Harvard case studies and rigorous mock interviews, I felt completely prepared during the final Accenture campus selection round.",
    type: "alumni",
    campus: "CBD Belapur Campus",
    highlight: "Placed at Accenture Consulting with ₹14.5 LPA",
    linkedinUrl: "https://www.linkedin.com/in/rohan-deshmukh-consulting"
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
    quote: "BSS Foundation's state-of-the-art AI lab and hands-on guidance with real industry datasets gave me the competitive edge. The faculty's mentorship helped me secure a high-paying offer before graduation.",
    type: "alumni",
    campus: "CBD Belapur Campus",
    highlight: "Selected by Deloitte AI Practice prior to final exams",
    linkedinUrl: "https://www.linkedin.com/in/pooja-sawant-ai"
  },
  {
    id: "t3",
    name: "Tanvi Sharma",
    course: "PGDBM + MBA (FinTech & International Finance)",
    batch: "Class of 2027 (Final Year)",
    company: "Student Council & FinTech Cell",
    role: "Head of Student Council & FinTech Club",
    package: "Summer Intern @ Morgan Stanley",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    quote: "What stands out at BSS Foundation is the sheer faculty accessibility. CXO masterclasses and Bloomberg terminal access allow us to simulate real trading desks right here on campus. It's a truly transformative environment.",
    type: "current",
    campus: "CBD Belapur Campus",
    highlight: "Completed 8-week corporate finance summer stint",
    linkedinUrl: "https://www.linkedin.com/in/tanvi-sharma-fintech"
  },
  {
    id: "t4",
    name: "Aditya Kulkarni",
    course: "PGDBM + MBA (Finance & FinTech)",
    batch: "Class of 2023",
    company: "HDFC Bank",
    role: "Deputy Manager (Wealth Management)",
    package: "₹10.5 LPA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "The SAP certification and financial modeling workshops at the Belapur campus made all the difference. BSS Foundation doesn't just grant degrees; they build careers with real corporate networks.",
    type: "alumni",
    campus: "CBD Belapur Campus",
    highlight: "Promoted to Wealth Division within 12 months",
    linkedinUrl: "https://www.linkedin.com/in/aditya-kulkarni-wealth"
  },
  {
    id: "t5",
    name: "Siddharth Nair",
    course: "BCA (Cloud Computing & Software)",
    batch: "Class of 2026 (3rd Year)",
    company: "Developer Student Circle",
    role: "Lead, BSS Tech Innovation Lab",
    package: "Hackathon Winner - Smart India 2024",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "The practical syllabus at Kalina University Campus is updated directly with modern industry requirements — Docker, AWS, and Next.js are part of the daily curriculum, not just optional seminars.",
    type: "current",
    campus: "Kalina University Campus",
    highlight: "Built university portal microservices in campus lab",
    linkedinUrl: "https://www.linkedin.com/in/siddharth-nair-dev"
  },
  {
    id: "t6",
    name: "Ananya Sen",
    course: "BBA (E-Commerce & Digital Marketing)",
    batch: "Class of 2024",
    company: "Asian Paints",
    role: "Brand Specialist",
    package: "₹8.8 LPA",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    quote: "Coming straight out of 12th standard, BSS Foundation shaped my entire worldview. The student clubs, annual Aarohan fest, and continuous internship support built immense confidence in me.",
    type: "alumni",
    campus: "CBD Belapur Campus",
    highlight: "Leading national digital campaigns at Asian Paints",
    linkedinUrl: "https://www.linkedin.com/in/ananya-sen-marketing"
  },
  {
    id: "t7",
    name: "Neha Patel",
    course: "B.Sc in Data Science & AI",
    batch: "Class of 2026 (2nd Year)",
    company: "Academic Analytics Wing",
    role: "Junior Research Fellow",
    package: "Published Research Paper @ IEEE Conf.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    quote: "Working alongside PhD professors on computer vision projects in our second year is an opportunity rarely found in undergraduate institutions. The campus culture pushes you to innovate relentlessly.",
    type: "current",
    campus: "CBD Belapur Campus",
    highlight: "Co-authored healthcare ML classification study",
    linkedinUrl: "https://www.linkedin.com/in/neha-patel-analytics"
  },
  {
    id: "t8",
    name: "Karan Mehta",
    course: "PGDBM + MBA (Operations & Supply Chain)",
    batch: "Class of 2023",
    company: "KPMG",
    role: "Senior Risk Consultant",
    package: "₹11.2 LPA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    quote: "Six Sigma Green Belt certification integrated into the curriculum was the decisive factor in my KPMG interviews. BSS Foundation's focus on operational discipline gives graduates an immediate head start.",
    type: "alumni",
    campus: "Kalina University Campus",
    highlight: "Advising Fortune 500 logistics clients",
    linkedinUrl: "https://www.linkedin.com/in/karan-mehta-supplychain"
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "ev1",
    title: "National Management Conclave 'Genesis 2027': Generative AI & Corporate Strategy",
    date: "March 18, 2027",
    time: "09:30 AM – 04:30 PM",
    category: "Academic",
    organizingBody: "Dept. of Management Studies",
    venue: "Main Corporate Auditorium, CBD Belapur Campus",
    description: "Keynote addresses and fire-side panels featuring Fortune 500 Chief Information Officers, banking heads, and digital strategy pioneers examining 2027 AI transformations.",
    badge: "Flagship Conclave",
    speaker: "Dr. Radhika Iyer (Dean) & Guest CXO Panelists",
    registrationDeadline: "March 15, 2027"
  },
  {
    id: "ev2",
    title: "Mega Corporate Campus Placement Drive 2027 (Phase 1)",
    date: "April 06, 2027",
    time: "08:30 AM – 06:00 PM",
    category: "Corporate",
    organizingBody: "Corporate Relations & Placement Cell",
    venue: "BSS Placement Suites & Executive Boardrooms (Belapur & Kalina)",
    description: "Exclusive recruitment drive with over 45 corporate partners visiting for on-campus final job interviews across consulting, BFSI, FMCG, and tech sectors.",
    badge: "Placements 2027",
    speaker: "Placement Director & Corporate HR Panels",
    registrationDeadline: "April 02, 2027"
  },
  {
    id: "ev3",
    title: "FinTech Innovation & Algorithmic Trading Hackathon 2027",
    date: "April 24-25, 2027",
    time: "36-Hour Continuous Hackathon",
    category: "Technical",
    organizingBody: "FinTech & Investment Cell",
    venue: "Bloomberg Terminal Lab & AI Center, CBD Belapur",
    description: "Inter-collegiate quantitative modeling and financial technology hackathon with cash awards of ₹1,50,000 sponsored by institutional trading partners.",
    badge: "Tech Hackathon",
    speaker: "Prof. Arvind Sen & Morgan Stanley Mentors",
    registrationDeadline: "April 20, 2027"
  },
  {
    id: "ev4",
    title: "Aarohan 2027: Annual Inter-Collegiate Cultural, Sports & Leadership Fest",
    date: "May 12-14, 2027",
    time: "10:00 AM – 09:00 PM Daily",
    category: "Cultural",
    organizingBody: "Student Council & Aarohan Committee",
    venue: "Kalina University Campus & Belapur Amphitheatre",
    description: "3 days of high-voltage inter-college business simulations, live case cracking, battle of the bands, corporate fashion runway, and athletic tournaments.",
    badge: "Annual Fest",
    speaker: "Student Council President & Cultural Secretaries",
    registrationDeadline: "May 08, 2027"
  },
  {
    id: "ev5",
    title: "Executive Masterclass: SAP S/4HANA ERP & Supply Chain Logistics",
    date: "May 28, 2027",
    time: "02:00 PM – 05:30 PM",
    category: "Corporate",
    organizingBody: "Corporate Relations & Placement Cell",
    venue: "Management Seminar Hall 2, Kalina Campus",
    description: "Hands-on masterclass for MBA & PGDBM students exploring real-time enterprise resource planning and automated multi-tier supply chain dynamics.",
    badge: "Masterclass",
    speaker: "Prof. Vikramaditya Rao (Industry Chair, ex-Tata)",
    registrationDeadline: "May 25, 2027"
  },
  {
    id: "ev6",
    title: "Applied Machine Learning & Neural Network Research Colloquium",
    date: "June 10, 2027",
    time: "10:00 AM – 03:30 PM",
    category: "Academic",
    organizingBody: "Dept. of Data Science & Artificial Intelligence",
    venue: "GPU High Performance Lab, CBD Belapur Campus",
    description: "Showcasing student-led peer-reviewed research papers in computer vision, automated financial sentiment models, and healthcare predictive classifiers.",
    badge: "Research Colloquium",
    speaker: "Dr. Amitabh Banerjee (Research Chair, Ph.D. IISc)",
    registrationDeadline: "June 05, 2027"
  },
  {
    id: "ev7",
    title: "Admissions 2027: Spot Counselling, GD-PI Round & Merit Scholarship Review",
    date: "Every Saturday & Sunday",
    time: "10:00 AM – 05:00 PM",
    category: "Admissions",
    organizingBody: "Admissions & Outreach Directorate",
    venue: "Both Campuses (Belapur & Kalina) + Online Zoom Mode",
    description: "Direct profile evaluation, one-on-one academic counselling, merit-based tuition fee scholarship assessments, and spot admissions for Session 2027-2028.",
    badge: "Admissions 2027",
    speaker: "Head of Admissions & Academic Counselling Team",
    registrationDeadline: "Rolling Admissions 2027"
  },
  {
    id: "ev8",
    title: "Women in Business Leadership & Social Innovation Forum",
    date: "June 26, 2027",
    time: "11:00 AM – 03:00 PM",
    category: "Corporate",
    organizingBody: "Research, Innovation & Incubation Cell",
    venue: "Executive Council Chambers, CBD Belapur",
    description: "Interactive session bringing together women CXOs, angel investors, and startup founders to mentor budding entrepreneurs at BSS Foundation.",
    badge: "Leadership Forum",
    speaker: "Dr. Sunita Kulkarni (Professor of Marketing)",
    registrationDeadline: "June 22, 2027"
  }
];

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "ann1",
    title: "Admissions Open for Academic Session 2027–2028 (PGDBM, MBA, BBA, BCA, B.Sc AI)",
    date: "March 01, 2027",
    category: "Admissions",
    organizingBody: "Admissions & Outreach Directorate",
    urgent: true,
    circularNo: "BSS/ADM/2027/CIR-01",
    summary: "Applications are officially invited for all Undergraduate, Dual Degree, and Postgraduate management & computing programs for academic year 2027-2028. Early applicants are eligible for merit scholarships up to 40% based on academic merit and national entrance score percentiles.",
    documentLinkText: "Download Admissions 2027 Brochure & Guidelines PDF"
  },
  {
    id: "ann2",
    title: "Placement Cell Notice: Final Corporate Placement Schedule 2027 for Graduating Batches",
    date: "February 24, 2027",
    category: "Placements",
    organizingBody: "Corporate Relations & Placement Cell",
    urgent: true,
    circularNo: "BSS/TPO/2027/NOT-08",
    summary: "Detailed slotting and interview protocol for Phase 1 campus recruitment. Eligible students must verify their corporate resumes on the BSS placement portal and register for mandatory pre-placement mock rounds.",
    documentLinkText: "Download Recruitment Schedule & Company Matrix PDF"
  },
  {
    id: "ann3",
    title: "Academic Council: Term Examination Schedule & Project Dissertation Deadlines 2027",
    date: "February 15, 2027",
    category: "Academic",
    organizingBody: "Academic Council",
    urgent: false,
    circularNo: "BSS/ACAD/2027/SCH-04",
    summary: "Notification regarding internal assessment marks verification, university exam form submission, and final year industry internship project thesis defense dates across all departments.",
    documentLinkText: "Download Examination & Viva Timetable PDF"
  },
  {
    id: "ann4",
    title: "Merit-Cum-Means & Sports Excellence Scholarship Applications Invited for 2027",
    date: "January 29, 2027",
    category: "Scholarships",
    organizingBody: "Admissions & Outreach Directorate",
    urgent: false,
    circularNo: "BSS/SCHOL/2027/02",
    summary: "BSS Foundation announces a financial assistance corpus for meritorious students, defence wards, and state/national level athletes applying for the 2027-2028 academic admissions cycle.",
    documentLinkText: "Download Scholarship Application Form 2027"
  },
  {
    id: "ann5",
    title: "Annual Aarohan Cultural Fest 2027: Student Core Committee Nominations Open",
    date: "January 14, 2027",
    category: "General",
    organizingBody: "Student Council & Aarohan Committee",
    urgent: false,
    circularNo: "BSS/STU/2027/FEST-01",
    summary: "Student nominations invited for Departmental Leads, Sponsorship Coordinators, Event Management, and Media Production teams for Aarohan 2027.",
    documentLinkText: "Download Committee Nomination Form"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "dept-management",
    name: "Department of Management Studies",
    shortCode: "DMS",
    hodName: "Dr. Radhika Iyer",
    hodDesignation: "Dean of Academics & Professor of Strategic Management",
    hodImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    overview: "The flagship academic division of BSS Foundation delivering world-class postgraduate programs including the 2-Year PGDBM + MBA Dual Specialization and the Accelerated 1-Year Executive PGDBM. The department emphasizes case-method pedagogy, experiential immersion, and live consulting projects with Mumbai's corporate giants.",
    vision: "To cultivate visionary global enterprise leaders equipped with analytical rigor, ethical integrity, and adaptive agility in Industry 4.0 environments.",
    programsOffered: [
      "PGDBM + MBA (Triple Specialization)",
      "Executive PGDBM (1-Year Accelerated)",
      "Bachelor of Business Administration (BBA)"
    ],
    keyLabs: [
      "Executive Boardroom Simulation Suite",
      "Harvard Business Publishing Case Center",
      "Corporate Leadership & Assessment Studio"
    ],
    contactEmail: "dms@bssfoundation.net",
    establishedYear: "2010"
  },
  {
    id: "dept-computer",
    name: "Department of Computer Applications & IT",
    shortCode: "DCAIT",
    hodName: "Dr. Rajeshwar Sharma",
    hodDesignation: "Head of Department & Professor of Computer Science",
    hodImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    overview: "Spearheading modern technical education through the Bachelor of Computer Applications (BCA / Honours), the department imparts mastery in enterprise software engineering, distributed cloud architectures, mobile engineering, and DevOps pipelines.",
    vision: "To develop elite software engineers, systems architects, and technology innovators capable of architecting scalable digital infrastructure worldwide.",
    programsOffered: [
      "Bachelor of Computer Applications (BCA / Honours 4-Year Track)",
      "Full-Stack Web & Cloud Micro-credentials"
    ],
    keyLabs: [
      "Advanced Systems & Cloud Infrastructure Lab",
      "Open Source Coders Studio & Linux Shell Center",
      "Mobile App Development & UI Sandbox"
    ],
    contactEmail: "dcait@bssfoundation.net",
    establishedYear: "2015"
  },
  {
    id: "dept-datascience",
    name: "Department of Data Science & Artificial Intelligence",
    shortCode: "DDSAI",
    hodName: "Dr. Amitabh Banerjee",
    hodDesignation: "Chair of AI Research & Professor of Machine Learning",
    hodImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    overview: "An elite technical division offering B.Sc in Data Science & Artificial Intelligence. Home to high-throughput GPU computing facilities where students train deep learning networks, build natural language models, and process real-time financial market analytics.",
    vision: "To be Mumbai's premier hub for applied artificial intelligence research, machine learning innovation, and predictive data analytics.",
    programsOffered: [
      "B.Sc in Data Science & Artificial Intelligence (AI)",
      "Applied Deep Learning & NLP Specialized Modules"
    ],
    keyLabs: [
      "NVIDIA GPU-Accelerated Deep Learning Lab",
      "Tableau & Big Data Visualization Hub",
      "Natural Language & Predictive Modeling Research Center"
    ],
    contactEmail: "ai.datascience@bssfoundation.net",
    establishedYear: "2020"
  },
  {
    id: "dept-finance",
    name: "Department of Banking, Finance & Commerce",
    shortCode: "DBFC",
    hodName: "Dr. Hemant Chitale",
    hodDesignation: "Head of Department & Professor of Financial Economics",
    hodImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
    overview: "Dedicated to the financial engine of India, this department offers B.Com in Advanced Accounting and integrates SAP ERP FICO certification, investment banking modeling, risk management, and quantitative finance directly into the syllabus.",
    vision: "To generate elite financial analysts, wealth managers, and corporate treasurers with deep domain mastery of global capital markets.",
    programsOffered: [
      "Bachelor of Commerce (B.Com - Advanced Accountancy & Auditing)",
      "SAP FICO ERP Corporate Certification Track",
      "Financial Modeling & DCF Valuation Mastery"
    ],
    keyLabs: [
      "Bloomberg Financial Markets Simulation Desk",
      "SAP ERP S/4HANA Accounting Laboratory",
      "Investment Analysis & Portfolio Management Cell"
    ],
    contactEmail: "finance@bssfoundation.net",
    establishedYear: "2012"
  },
  {
    id: "dept-media",
    name: "Department of Advertising, Media & Design",
    shortCode: "DAMD",
    hodName: "Prof. Rohini Chawla",
    hodDesignation: "Head of Creative Studies & Professor of Visual Communication",
    hodImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    overview: "Pioneering creative communication through the Bachelor in Advertising Communication & Design (BACD 4-Year Honours). Students learn brand ideation, copywriting, consumer behavior, UI/UX aesthetics, and multimedia campaign execution.",
    vision: "To ignite creative brilliance, strategic brand acumen, and visual storytelling that shapes national consumer conversations.",
    programsOffered: [
      "Bachelor in Advertising Communication & Design (BACD 4-Year)",
      "Digital Art Direction & Brand Identity Masterclasses"
    ],
    keyLabs: [
      "Apple Mac Pro Design & Adobe Creative Suite Studio",
      "Commercial Photography & Ad Film Production Lab",
      "Creative Pitch & Agency Simulation Deck"
    ],
    contactEmail: "media.design@bssfoundation.net",
    establishedYear: "2018"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "fac-1",
    name: "Dr. Radhika Iyer",
    designation: "Dean of Academics & Professor of Strategic Management",
    departmentId: "dept-management",
    departmentName: "Department of Management Studies",
    qualifications: "Ph.D. in Strategic Management (University of Mumbai), MMS (JBIMS), B.E. Computer Engineering",
    experience: "21 Years (9 Years Corporate Advisory + 12 Years Academia)",
    specialization: ["Corporate Strategy", "M&A Valuations", "Global Business Leadership"],
    email: "radhika.iyer@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/dr-radhika-iyer-bss",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Former Director of Strategic Planning at multinational consultancies. Author of 18 peer-reviewed research papers and keynote speaker at international management conventions across Southeast Asia.",
    publicationsCount: 18,
    isHod: true
  },
  {
    id: "fac-2",
    name: "Prof. Arvind Sen",
    designation: "Associate Professor of Finance & FinTech",
    departmentId: "dept-management",
    departmentName: "Department of Management Studies",
    qualifications: "MMS Finance (JBIMS), CFA Level III Candidate, B.Sc Mathematics",
    experience: "15 Years (8 Years VP at Morgan Stanley + 7 Years Full-Time Teaching)",
    specialization: ["FinTech Architecture", "Algorithmic Trading", "Investment Banking"],
    email: "arvind.sen@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/arvind-sen-finance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    bio: "Brings direct Wall Street and Mumbai institutional banking experience into the classroom. Guides BSS student trading simulations and mentors students joining global investment banks.",
    publicationsCount: 9,
    isHod: false
  },
  {
    id: "fac-3",
    name: "Dr. Sunita Kulkarni",
    designation: "Professor of Marketing & Consumer Psychology",
    departmentId: "dept-management",
    departmentName: "Department of Management Studies",
    qualifications: "Ph.D. (IIT Bombay, Shailesh J. Mehta School of Management), MBA (Marketing)",
    experience: "17 Years (Consultant for FMCG Giants + 11 Years Academic Research)",
    specialization: ["Omnichannel Retail", "Behavioral Economics", "Brand Positioning"],
    email: "sunita.kulkarni@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/dr-sunita-kulkarni",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80",
    bio: "Pioneered research on consumer micro-moments and hyper-personalized customer journeys. Mentors students in live marketing consulting sprints for Tata and Unilever brands.",
    publicationsCount: 14,
    isHod: false
  },
  {
    id: "fac-4",
    name: "Prof. Vikramaditya Rao",
    designation: "Industry Chair & Professor of Operations & Supply Chain",
    departmentId: "dept-management",
    departmentName: "Department of Management Studies",
    qualifications: "PGDM (IIM Ahmedabad), Lean Six Sigma Master Black Belt, B.Tech Mechanical",
    experience: "24 Years (Senior VP Operations, Larsen & Toubro + 6 Years Academic Chair)",
    specialization: ["Lean Six Sigma", "Logistics ERP", "Operational Excellence"],
    email: "v.rao@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/vikramaditya-rao-supplychain",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Certified Six Sigma Master Black Belt with hands-on turnaround expertise across multi-facility automotive supply chains. Leads the campus corporate consulting clinic.",
    publicationsCount: 8,
    isHod: false
  },
  {
    id: "fac-5",
    name: "Dr. Rajeshwar Sharma",
    designation: "Head of Department & Professor of Computer Applications",
    departmentId: "dept-computer",
    departmentName: "Department of Computer Applications & IT",
    qualifications: "Ph.D. in Computer Science (VJTI, Mumbai), M.Tech CSE, B.E. Computer Technology",
    experience: "19 Years (Lead Architect at Oracle Corp + 12 Years Academic Leadership)",
    specialization: ["Cloud Native Architecture", "Distributed Systems", "Full-Stack Engineering"],
    email: "rajeshwar.sharma@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/dr-rajeshwar-sharma-tech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "Renowned computing educator specializing in microservices and Kubernetes architectures. Mentored over 40 hackathon-winning student engineering teams.",
    publicationsCount: 22,
    isHod: true
  },
  {
    id: "fac-6",
    name: "Prof. Deepa Kamath",
    designation: "Associate Professor of Web Technologies & Cloud",
    departmentId: "dept-computer",
    departmentName: "Department of Computer Applications & IT",
    qualifications: "M.Tech Software Engineering (VJTI), AWS Certified Solutions Architect Professional",
    experience: "12 Years (Senior Cloud Engineer at Capgemini + 7 Years Teaching)",
    specialization: ["Next.js & React Frameworks", "AWS Cloud Services", "DevOps Pipelines"],
    email: "deepa.kamath@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/deepa-kamath-cloud",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    bio: "Passionate about bridging university computing curriculums with modern Silicon Valley and Bengaluru engineering standards.",
    publicationsCount: 6,
    isHod: false
  },
  {
    id: "fac-7",
    name: "Dr. Amitabh Banerjee",
    designation: "Chair of AI Research & Professor of Machine Learning",
    departmentId: "dept-datascience",
    departmentName: "Department of Data Science & Artificial Intelligence",
    qualifications: "Ph.D. in Machine Learning (IISc Bangalore), M.S. Artificial Intelligence, B.Tech CSE",
    experience: "16 Years (Principal Scientist at IBM Research + 8 Years University Professor)",
    specialization: ["Deep Neural Networks", "Computer Vision", "Applied Foundation Models"],
    email: "amitabh.banerjee@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/dr-amitabh-banerjee-ai",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Lead investigator for government and private enterprise research grants in multimodal deep learning. Active mentor for student-led AI patent filings.",
    publicationsCount: 31,
    isHod: true
  },
  {
    id: "fac-8",
    name: "Dr. Shalini Mukherjee",
    designation: "Professor of Statistical Analytics & Big Data",
    departmentId: "dept-datascience",
    departmentName: "Department of Data Science & Artificial Intelligence",
    qualifications: "Ph.D. in Applied Statistics (University of Mumbai), M.Sc Mathematical Statistics",
    experience: "14 Years (Senior Analytics Lead at Mu Sigma + 8 Years Academic Faculty)",
    specialization: ["Bayesian Statistics", "Predictive Modeling", "Big Data Analytics (Spark/Hadoop)"],
    email: "shalini.m@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/dr-shalini-mukherjee",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Expert in statistical hypothesis testing and econometric forecasting with extensive publication record in IEEE and Elsevier journals.",
    publicationsCount: 16,
    isHod: false
  },
  {
    id: "fac-9",
    name: "Dr. Hemant Chitale",
    designation: "Head of Department & Professor of Financial Economics",
    departmentId: "dept-finance",
    departmentName: "Department of Banking, Finance & Commerce",
    qualifications: "Ph.D. in Financial Economics, Fellow Chartered Accountant (FCA), B.Com (Gold Medalist)",
    experience: "25 Years (Senior Partner at Big-4 Accounting Firm + 13 Years Dean)",
    specialization: ["Forensic Auditing", "International Taxation", "Corporate Governance"],
    email: "hemant.chitale@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/ca-dr-hemant-chitale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Fellow Chartered Accountant advising regulatory committees and governing boards on financial reporting integrity and capital management.",
    publicationsCount: 19,
    isHod: true
  },
  {
    id: "fac-10",
    name: "Prof. CA Priya Singhania",
    designation: "Associate Professor of Advanced Accounting & SAP FICO",
    departmentId: "dept-finance",
    departmentName: "Department of Banking, Finance & Commerce",
    qualifications: "Chartered Accountant (ICAI), Certified SAP S/4HANA Finance Consultant, DISA (ICAI)",
    experience: "11 Years (Corporate Treasury Head + 5 Years Academic Teaching)",
    specialization: ["SAP FICO Architecture", "GST & Direct Tax Compliance", "Corporate Finance"],
    email: "priya.singhania@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/ca-priya-singhania",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Leads the specialized SAP ERP training curriculum at BSS Foundation ensuring students achieve hands-on corporate enterprise certification.",
    publicationsCount: 5,
    isHod: false
  },
  {
    id: "fac-11",
    name: "Prof. Rohini Chawla",
    designation: "Head of Creative Studies & Professor of Visual Communication",
    departmentId: "dept-media",
    departmentName: "Department of Advertising, Media & Design",
    qualifications: "Master of Design (IDC School of Design, IIT Bombay), B.F.A. Applied Arts (Sir J.J. Institute of Applied Art)",
    experience: "20 Years (Creative Director at Ogilvy & Mather + 9 Years Academic Leadership)",
    specialization: ["Brand Identity Design", "Creative Art Direction", "Ad Campaign Strategy"],
    email: "rohini.chawla@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/rohini-chawla-design",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Cannes Lions & Effie award winner who has conceptualized marquee ad campaigns for leading national brands. Inspires students to turn raw imagination into commercial brilliance.",
    publicationsCount: 7,
    isHod: true
  },
  {
    id: "fac-12",
    name: "Prof. Sameer Merchant",
    designation: "Visiting Professor of Copywriting & Ad Strategy",
    departmentId: "dept-media",
    departmentName: "Department of Advertising, Media & Design",
    qualifications: "M.A. Communication & Media Studies, Post-Graduate Diploma in Advertising (MICA)",
    experience: "18 Years (Executive Creative Director at McCann Worldgroup)",
    specialization: ["Multi-platform Copywriting", "Consumer Storytelling", "Digital Content Strategy"],
    email: "sameer.merchant@bssfoundation.net",
    linkedinUrl: "https://www.linkedin.com/in/sameer-merchant-copy",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
    bio: "Renowned copywriter and ad consultant whose masterclasses prepare BACD students for high-pressure pitch presentations in Mumbai advertising agencies.",
    publicationsCount: 4,
    isHod: false
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

export const INITIAL_HERO_SLIDES: HeroSlideItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=85",
    badge: "Flagship Admissions 2027 - 2028",
    tagline: "Beyond Education • School of Management",
    title: "Shaping Visionary Corporate Leaders & Global Entrepreneurs",
    description: "Join India's forward-thinking management institution in Mumbai & Navi Mumbai. Premier industry-aligned PGDBM+MBA, BBA, BCA, and B.Sc Data Science & AI programs.",
    primaryCta: "Apply Online for 2027",
    secondaryCta: "Explore Programs",
    stats: "₹22 LPA Highest CTC • 150+ Recruiters"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85",
    badge: "Premier Placement Record",
    tagline: "100% Dedicated Career Support",
    title: "Direct Placement Pathways with Global Fortune 500 Giants",
    description: "Recruitment tie-ups with Deloitte, Accenture, TCS, Wipro, ICICI, Airbus, Schneider Electric, and leading multinational conglomerates.",
    primaryCta: "View Placement Report",
    secondaryCta: "Download Brochure",
    stats: "₹9.11 LPA Average Package • 4,000+ Alumni"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=85",
    badge: "Emerging Tech & AI Leadership",
    tagline: "Industry 4.0 Ready Curriculum",
    title: "Master High-Demand Tech: Data Science, AI & Full-Stack Computing",
    description: "State-of-the-art AI computing labs, Python/TensorFlow deep learning workspaces, and hands-on big data case studies under industry mentors.",
    primaryCta: "Apply for Tech Degrees",
    secondaryCta: "Take 360° Virtual Tour",
    stats: "B.Sc Data Science & AI • BCA Honours"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85",
    badge: "Dual Strategic Campuses",
    tagline: "CBD Belapur & Mumbai University Kalina",
    title: "World-Class Infrastructure Designed for Executive Excellence",
    description: "Smart digital amphitheaters, modern finance trading room simulation, digital management library, and vibrant student societies.",
    primaryCta: "Campus Visit & Enquiry",
    secondaryCta: "Virtual Campus Tour",
    stats: "Palm Beach Rd Belapur & Kalina University"
  }
];

export const INITIAL_BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Navigating MBA Specializations in 2027: Why Data & FinTech Dominate Corporate Hiring",
    slug: "navigating-mba-specializations-2027-fintech-data",
    category: "Management Trends",
    author: "Dr. Radhika Iyer",
    authorRole: "Dean of Academics, BSS Foundation",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    date: "February 20, 2027",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    summary: "As traditional banking converges with artificial intelligence and cloud architectures, recruiters are prioritizing candidates with dual competency in strategic business vision and quantitative modeling.",
    content: `The modern corporate landscape has undergone a seismic shift. In 2027, enterprise management is no longer merely about administrative oversight; it is fundamentally about technological fluency, algorithmic decision-making, and rapid market adaptation.

At BSS Foundation (School of Management), our curriculum integrates Python modeling, Bloomberg terminal simulations, and Lean Six Sigma directly into the core PGDBM + MBA framework. When global consultancies like Deloitte and Accenture arrive on campus for recruitments, they seek managers who can decipher a balance sheet while interpreting machine learning forecast pipelines.

Key takeaways for prospective management students:
1. Master quantitative tools early alongside traditional management fundamentals.
2. Complete paid corporate internships in Mumbai's financial epicenters.
3. Cultivate cross-disciplinary communication to lead engineering and marketing squads simultaneously.`,
    tags: ["MBA 2027", "FinTech", "Corporate Hiring", "Data Analytics"],
    featured: true
  },
  {
    id: "blog-2",
    title: "How Live Corporate Internships in Mumbai Accelerate Campus Placements to ₹22 LPA",
    slug: "corporate-internships-mumbai-accelerate-placements",
    category: "Career & Placements",
    author: "Prof. Arvind Sen",
    authorRole: "Head, Corporate Relations Cell",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    date: "February 08, 2027",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    summary: "A behind-the-scenes look at how mandatory 8-12 week summer corporate stints in Nariman Point, BKC, and Navi Mumbai convert directly into Pre-Placement Job Offers (PPOs).",
    content: `Classroom simulations build strong foundational knowledge, but genuine corporate resilience is forged in live office settings. At BSS Foundation, every single student participates in mandatory summer and winter internship cycles with Fortune 500 conglomerates.

Our recent graduate, Rohan Deshmukh, converted his 8-week summer stint with Accenture into a ₹14.5 LPA Pre-Placement Offer (PPO) months before final graduation. Corporate recruiters value candidates who have already operated inside multi-disciplinary enterprise environments, worked with real stakeholders, and delivered measurable business ROI.`,
    tags: ["Placements", "Internships", "Mumbai Corporate", "Salaries"],
    featured: false
  },
  {
    id: "blog-3",
    title: "Life at BSS Foundation: Balancing Case Studies, Aarohan Fest, and Startup Incubations",
    slug: "life-at-bss-foundation-aarohan-fest-incubation",
    category: "Campus Life",
    author: "Tanvi Sharma",
    authorRole: "President, Student Council",
    authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    date: "January 18, 2027",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
    summary: "From early morning Bloomberg trading battles to high-energy cultural rehearsals for Aarohan, explore the vibrant student life across our CBD Belapur and Kalina campuses.",
    content: `Being a student at BSS Foundation is an electrifying journey. Between intense Harvard case study presentations and pitch deck preparations in the Incubation Cell, students lead sports clubs, finance societies, and creative marketing campaigns.

The annual Aarohan fest brings over 40 colleges across Maharashtra to our Kalina and Belapur campuses for three days of management games, rock bands, and corporate fashion showcases. It teaches us logistics, sponsorship negotiation, and crisis management better than any theoretical lecture.`,
    tags: ["Campus Life", "Student Council", "Aarohan", "Mumbai"],
    featured: false
  }
];

