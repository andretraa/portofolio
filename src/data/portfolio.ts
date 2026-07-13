import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  site: {
    name: "Muhamad Ridwan",
    title: "Muhamad Ridwan | Senior Software Engineer",
    description:
      "Personal portfolio of Muhamad Ridwan, Senior Software Engineer specializing in Laravel, Golang, React Native, backend development, healthcare systems, and scalable web applications.",
    url: "https://portpolio-two-sable.vercel.app",
    email: "muhamad.ridwan@example.com",
    cvUrl: "/cv.pdf",
    keywords: [
      "Laravel",
      "Golang",
      "Backend",
      "Software Engineer",
      "React Native",
      "Fullstack",
      "Indonesia",
      "Healthcare",
      "SATUSEHAT",
      "Portfolio",
    ],
  },

  profile: {
    firstName: "Ridwan",
    displayName: "Ridwan",
    role: "Senior Software Engineer",
    roleHighlight: "Software Engineer",
    tagline:
      "Building reliable software — from backend architecture to production deployment.",
    greeting: "Hello, I'm",
    available: true,
    availabilityText: "Available for opportunities",
    codeSnippet: {
      fileName: "portfolio.ts",
      variableName: "engineer",
      skills: ["Laravel", "Golang", "React Native", "Next.js"],
      buildLine: "build: () => deploy()",
    },
    socialLinks: [
      { id: "github", label: "GitHub", href: "https://github.com/Muhamad-Ridwan18", variant: "ghost" },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/muhamadridwan", variant: "ghost" },
    ],
    ctas: [
      { id: "projects", label: "View Projects", href: "#projects", variant: "primary", showArrow: true },
      { id: "cv", label: "Download CV", href: "/cv.pdf", variant: "secondary", download: true },
    ],
    rotatingPhrases: [
      "Healthcare Systems",
      "Scalable Backends",
      "Production Deployments",
      "End-to-End Products",
    ],
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Projects Shipped", value: "5+" },
      { label: "Tech Domains", value: "3+" },
    ],
  },

  marquee: [
    "Laravel", "Golang", "React Native", "Next.js", "PostgreSQL", "Docker",
    "Healthcare", "SATUSEHAT", "REST API", "System Architecture", "Redis", "Nginx",
  ],

  sections: [
    { id: "hero", enabled: true },
    { id: "marquee", enabled: true },
    {
      id: "about",
      enabled: true,
      navLabel: "About",
      heading: {
        label: "About",
        title: "Who I Am",
        subtitle: "Engineer yang membangun produk digital dari nol hingga production.",
      },
    },
    {
      id: "experience",
      enabled: true,
      navLabel: "Experience",
      className: "section-padding bg-surface/20 section-glow",
      heading: {
        label: "Career",
        title: "Experience",
        subtitle: "My professional journey in software engineering.",
      },
    },
    {
      id: "projects",
      enabled: true,
      navLabel: "Projects",
      heading: {
        label: "Work",
        title: "Featured Projects",
        subtitle:
          "Selected work spanning healthcare systems, marketplaces, and enterprise applications.",
      },
    },
    {
      id: "tech-stack",
      enabled: true,
      navLabel: "Tech Stack",
      className: "section-padding bg-surface/20 section-glow",
      heading: {
        label: "Tools",
        title: "Tech Stack",
        subtitle: "Technologies I work with to build reliable software.",
      },
    },
    {
      id: "skills",
      enabled: true,
      navLabel: "Skills",
      heading: {
        label: "Expertise",
        title: "Skills",
        subtitle: "Core competencies honed through real-world projects.",
      },
    },
    {
      id: "impact",
      enabled: true,
      navLabel: "Impact",
      className: "section-padding bg-surface/20 section-glow",
      heading: {
        label: "Impact",
        title: "Engineering Impact",
        subtitle: "Measurable contributions across projects and production systems.",
        align: "center",
      },
    },
    {
      id: "journey",
      enabled: true,
      navLabel: "Journey",
      heading: {
        label: "Timeline",
        title: "Journey",
        subtitle: "From intern to senior engineer — building expertise across domains.",
      },
    },
    { id: "spotlight", enabled: true },
    {
      id: "contact",
      enabled: true,
      navLabel: "Contact",
      className: "section-padding bg-surface/20 section-glow",
      heading: {
        label: "Contact",
        title: "Get In Touch",
        subtitle: "Open to opportunities, collaborations, and interesting projects.",
        align: "center",
      },
    },
  ],

  spotlight: {
    title: "Let's build something impactful.",
    subtitle: "From architecture to production — I help teams ship reliable software that users actually love.",
    ctaLabel: "Start a Conversation",
    ctaHref: "#contact",
  },

  about: {
    paragraphs: [
      "Saya adalah Software Engineer yang fokus pada pengembangan backend, web application, mobile application, dan deployment server.",
      "Saya senang membangun produk yang scalable, maintainable, dan memiliki dampak nyata bagi pengguna. Pengalaman saya meliputi pengembangan sistem kesehatan, marketplace, company profile, hingga deployment infrastructure.",
    ],
    highlights: [
      { label: "Focus", value: "Backend & Systems" },
      { label: "Domain", value: "Healthcare & Enterprise" },
      { label: "Approach", value: "End-to-End Delivery" },
    ],
  },

  experience: [
    {
      id: "intern",
      year: "2022",
      title: "Junior Programmer Intern",
      company: "First Professional Role",
      description:
        "Started my professional journey learning software development fundamentals, collaborating with senior developers, and contributing to real-world projects.",
      highlights: [
        "Learned professional development workflows",
        "Contributed to bug fixes and feature development",
        "Gained exposure to production codebases",
      ],
    },
    {
      id: "junior",
      year: "2025",
      title: "Junior Software Engineer",
      company: "Healthcare & Enterprise Systems",
      description:
        "Developed and maintained healthcare information systems and electronic medical records, working on backend APIs, integrations, and production deployments.",
      highlights: [
        "Backend development with Laravel",
        "Healthcare system integrations",
        "API development and maintenance",
        "Production deployment and monitoring",
      ],
    },
    {
      id: "senior",
      year: "2026",
      title: "Senior Software Engineer",
      company: "End-to-End Product Development",
      description:
        "Leading development across backend, mobile, and infrastructure. Building scalable systems from architecture design to production deployment.",
      highlights: [
        "System architecture and design",
        "Backend with Laravel & Golang",
        "Mobile development with React Native",
        "Infrastructure and deployment",
        "Team collaboration and mentoring",
      ],
      defaultOpen: true,
    },
  ],

  journey: [
    { year: "2022", label: "Intern" },
    { year: "2023", label: "Healthcare" },
    { year: "2024", label: "EMR" },
    { year: "2024", label: "SATUSEHAT" },
    { year: "2025", label: "Marketplace" },
    { year: "2026", label: "Senior Software Engineer" },
  ],

  projects: [
    {
      id: "jaksimpus",
      name: "JakSimpus",
      tagline: "Healthcare Information System",
      description:
        "A comprehensive healthcare information system designed to streamline clinic operations, patient management, and medical records for healthcare facilities.",
      year: "2023",
      stack: ["Laravel", "MySQL", "Redis"],
      contributions: [
        "Backend Development",
        "API Development",
        "Bug Fixing",
        "Deployment",
        "Maintenance",
      ],
      gradient: "from-indigo-500/20 to-cyan-500/20",
      accent: "#4F46E5",
    },
    {
      id: "klikmedis",
      name: "KlikMedis",
      tagline: "Electronic Medical Record",
      description:
        "Electronic Medical Record system with integrations to national healthcare platforms, insurance systems, and patient communication channels.",
      year: "2024",
      stack: ["Laravel", "MySQL", "Redis", "SATUSEHAT API"],
      contributions: [
        "Backend Development",
        "SATUSEHAT Integration",
        "BPJS Integration",
        "WhatsApp Integration",
      ],
      gradient: "from-cyan-500/20 to-emerald-500/20",
      accent: "#06B6D4",
    },
    {
      id: "baytgo",
      name: "BaytGo",
      tagline: "Marketplace Muthowif",
      description:
        "A marketplace platform connecting pilgrims with certified muthowif guides, featuring mobile apps and robust backend architecture.",
      year: "2025",
      stack: ["Golang", "React Native", "PostgreSQL", "Docker"],
      contributions: [
        "Backend Golang",
        "Mobile React Native",
        "API Development",
        "Deployment",
        "Architecture",
      ],
      gradient: "from-violet-500/20 to-indigo-500/20",
      accent: "#8B5CF6",
    },
    {
      id: "webyouneed",
      name: "WebYouNeed",
      tagline: "Company Website",
      description:
        "A modern company website built with full-stack capabilities, optimized for performance and professional brand presentation.",
      year: "2024",
      stack: ["Laravel", "React", "MySQL", "Nginx"],
      contributions: ["Backend", "Frontend", "Deployment"],
      gradient: "from-blue-500/20 to-indigo-500/20",
      accent: "#3B82F6",
    },
    {
      id: "daksa",
      name: "Daksa Consultant",
      tagline: "Company Profile",
      description:
        "Professional company profile website with custom CMS, showcasing consulting services and company portfolio.",
      year: "2023",
      stack: ["Laravel", "MySQL", "Nginx"],
      contributions: ["Full Stack Development", "Server Deployment"],
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accent: "#10B981",
    },
  ],

  techStack: [
    { category: "Backend", color: "#4F46E5", items: ["Laravel", "Golang", "PHP"] },
    { category: "Frontend", color: "#06B6D4", items: ["React", "Next.js", "HTML", "CSS", "JavaScript"] },
    { category: "Mobile", color: "#8B5CF6", items: ["React Native"] },
    { category: "Database", color: "#10B981", items: ["MySQL", "PostgreSQL"] },
    { category: "Infrastructure", color: "#F59E0B", items: ["Linux", "Nginx", "Docker", "Git", "Redis"] },
    { category: "Design", color: "#EC4899", items: ["Figma"] },
  ],

  skills: [
    "Backend Development",
    "REST API",
    "System Architecture",
    "Deployment",
    "Database Design",
    "Performance Optimization",
    "Authentication",
    "Payment Integration",
    "WhatsApp Integration",
    "Healthcare Integration",
  ],

  impact: [
    { id: "projects", label: "Projects Completed", value: 0, computed: true },
    { id: "enterprise", label: "Enterprise Systems", value: 3 },
    { id: "apis", label: "Backend APIs Built", value: 15 },
    { id: "deployments", label: "Production Deployments", value: 10 },
  ],

  contact: {
    cvNote: "Prefer a document? Download my full resume.",
    cvButtonLabel: "Download CV",
    channels: [
      {
        id: "email",
        label: "Email",
        icon: "email",
        description: "Send me a message",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        icon: "linkedin",
        description: "Connect professionally",
        external: true,
      },
      {
        id: "github",
        label: "GitHub",
        icon: "github",
        description: "View my code",
        external: true,
      },
      {
        id: "instagram",
        label: "Instagram",
        icon: "instagram",
        description: "Follow my journey",
        external: true,
      },
    ],
  },

  footer: {
    brandSuffix: ".",
    tagline: "Senior Software Engineer",
    builtWith: ["Next.js", "TailwindCSS", "Framer Motion"],
    madeBy: "Ridwan",
  },

  social: {
    github: "https://github.com/Muhamad-Ridwan18",
    linkedin: "https://linkedin.com/in/muhamadridwan",
    instagram: "https://instagram.com/muhamadridwan",
  },
};
