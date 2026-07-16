import type { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  site: {
    name: "Andre Tri Rizky Ariyanto",
    title: "Andre Tri Rizky Ariyanto | Senior Software Engineer",
    description:
      "Personal portfolio of Andre Tri Rizky Ariyanto, Senior Software Engineer specializing in Laravel, Golang, React Native, backend development, healthcare systems, and scalable web applications.",
    url: "https://portpolio-two-sable.vercel.app",
    email: "andretririzky123@gmail.com",
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
    firstName: "Andre Tri Rizky Ariyanto",
    displayName: "Andre",
    role: "Graphic Designer & UI/UX Designer",
    roleHighlight: "UI/UX Designer",
    tagline:
      "I create modern digital experiences that help brands stand out and connect with their audience.",
    greeting: "Hi, I'm",
    available: true,
    availabilityText: "Available for opportunities",
    codeSnippet: {
      fileName: "portfolio.ts",
      variableName: "engineer",
      skills: ["Laravel", "Golang", "React Native", "Next.js"],
      buildLine: "build: () => deploy()",
    },
    socialLinks: [
      { id: "github", label: "GitHub", href: "https://github.com/andretraa", variant: "ghost" },
      { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/andre-tri-rizky-ariyanto-872203262/", variant: "ghost" },
    ],
    ctas: [
      { id: "projects", label: "View Projects", href: "#projects", variant: "primary", showArrow: true },
      { id: "cv", label: "Download CV", href: "/cv.pdf", variant: "secondary", download: true },
    ],
    rotatingPhrases: [
      "UI/UX Designs",
      "Visual Identities",
      "Brand Concepts",
      "Digital Artworks",
    ],
    stats: [
      { label: "Years Experience", value: "4+" },
      { label: "Creative Projects", value: "20+" },
      { label: "Happy Clients", value: "15+" },
    ],
  },

  marquee: [
    "Figma", "Adobe Photoshop", "Adobe Illustrator", "UI/UX Design", "Vector Illustration", "Graphic Design",
    "Logo Design", "Typography", "Visual Branding", "Wireframing", "Prototyping", "Design Systems",
  ],

  sections: [
    { id: "hero", enabled: true },
    { id: "marquee", enabled: false },
    {
      id: "about",
      enabled: true,
      navLabel: "About",
      heading: {
        label: "About Me",
        title: "Designing With Passion, Creating With Purpose",
      },
    },
    {
      id: "services",
      enabled: true,
      navLabel: "Services",
      heading: {
        label: "My Services",
        title: "My Services",
        align: "center",
      },
    },
    {
      id: "projects",
      enabled: true,
      navLabel: "Portfolio",
      heading: {
        label: "Work",
        title: "Featured Projects",
        subtitle: "Selected work from my design portfolio.",
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
        subtitle: "My professional journey over the years.",
      },
    },
    {
      id: "tech-stack",
      enabled: false,
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
      enabled: false,
      navLabel: "Skills",
      heading: {
        label: "Expertise",
        title: "Skills",
        subtitle: "Core competencies honed through real-world projects.",
      },
    },
    {
      id: "impact",
      enabled: false,
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
      enabled: false,
      navLabel: "Journey",
      heading: {
        label: "Timeline",
        title: "Journey",
        subtitle: "From intern to senior engineer — building expertise across domains.",
      },
    },
    { id: "spotlight", enabled: false },
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
      "Fresh graduate Teknik Informatika dengan passion di bidang Graphic Design, UI/UX Design, dan Content Creation.",
      "Saya percaya bahwa desain yang baik bukan hanya indah, tetapi juga mampu menyampaikan pesan secara efektif dan memberikan pengalaman terbaik bagi pengguna.",
    ],
    highlights: [
      { label: "Projects Completed", value: "20+" },
      { label: "Happy Clients", value: "10+" },
      { label: "Teknik Informatika", value: "Fresh Graduate" },
      { label: "Years Experience", value: "1+" },
    ],
  },

  experience: [
    {
      id: "bjb",
      year: "2023",
      title: "Bank BJB Syariah",
      company: "Intern",
      description:
        "Magang di divisi SDM sebagai staff administrasi dan data entry.",
      highlights: [
        "Administrasi kepegawaian",
        "Data entry & management",
      ],
      defaultOpen: true,
    },
    {
      id: "freelance",
      year: "2024",
      title: "Freelance Designer",
      company: "Graphic Designer",
      description:
        "Mengerjakan berbagai proyek desain untuk klien dari berbagai industri.",
      highlights: [
        "Social Media Branding",
        "Visual Marketing Assets",
      ],
    },
    {
      id: "uiux",
      year: "2025",
      title: "UI/UX Designer",
      company: "Full Time (Goal)",
      description:
        "Berfokus pada perancangan UI/UX dan pengembangan produk digital.",
      highlights: [
        "User Interface Design",
        "Interactive Prototyping",
      ],
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
      name: "Coffee Shop Branding",
      tagline: "Branding Design",
      description:
        "Desain identitas brand kopi modern lengkap dengan kemasan paper bag, cangkir kopi, kartu nama, dan konsep visual yang minimalis serta estetik.",
      year: "2023",
      stack: ["Photoshop", "Illustrator", "Mockup Design"],
      contributions: ["Logo Design", "Packaging Design", "Brand Identity"],
      gradient: "from-amber-600/20 to-orange-500/20",
      accent: "#f59e0b",
    },
    {
      id: "klikmedis",
      name: "Mobile Banking App",
      tagline: "UI/UX Design",
      description:
        "Perancangan antarmuka (UI/UX) aplikasi perbankan seluler dengan fitur transfer uang instan, grafik analisis pengeluaran bulanan, dan sistem keamanan sidik jari.",
      year: "2024",
      stack: ["Figma", "User Flow", "Prototyping"],
      contributions: ["UI Design", "UX Wireframing", "Interactive Prototype"],
      gradient: "from-blue-600/20 to-indigo-500/20",
      accent: "#3b82f6",
    },
    {
      id: "baytgo",
      name: "Instagram Feed Design",
      tagline: "Social Media",
      description:
        "Pembuatan layout konten feed Instagram yang konsisten untuk kampanye pemasaran musiman, meningkatkan keterlibatan audiens hingga 45%.",
      year: "2024",
      stack: ["Photoshop", "Canva", "Creative Writing"],
      contributions: ["Content Layout", "Color Palette Setup", "Graphic Assets"],
      gradient: "from-pink-600/20 to-purple-500/20",
      accent: "#ec4899",
    },
    {
      id: "webyouneed",
      name: "Landing Page Website",
      tagline: "Web Design",
      description:
        "Desain landing page modern untuk mempromosikan produk digital dengan animasi interaktif, navigasi halus, dan responsivitas penuh di berbagai layar perangkat.",
      year: "2024",
      stack: ["Figma", "HTML/CSS", "JavaScript"],
      contributions: ["Web UI Design", "Frontend Development", "UX Flow"],
      gradient: "from-cyan-600/20 to-blue-500/20",
      accent: "#06b6d4",
    },
    {
      id: "daksa",
      name: "Fashion Brand Identity",
      tagline: "Branding Design",
      description:
        "Desain identitas brand premium 'VELORA' yang bergerak di bidang busana wanita, mencakup perancangan logo, tas belanja, kotak paket, dan label pakaian.",
      year: "2024",
      stack: ["Illustrator", "Brand Book", "Visual Concept"],
      contributions: ["Logo Concept", "Collateral Design", "Packaging Design"],
      gradient: "from-emerald-600/20 to-teal-500/20",
      accent: "#10b981",
    },
    {
      id: "packaging-design",
      name: "Packaging Design",
      tagline: "Branding Design",
      description:
        "Perancangan kemasan produk kardus minimalis 'mats.co' dengan fokus pada estetika ramah lingkungan dan fungsionalitas pengiriman yang aman.",
      year: "2024",
      stack: ["Adobe Illustrator", "3D Blender", "Dielines Creation"],
      contributions: ["Dieline Draft", "Visual Branding", "Packaging Mockup"],
      gradient: "from-indigo-600/20 to-violet-500/20",
      accent: "#6366f1",
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
    "CapCut", "Canva", "Figma", "HTML / CSS", "JavaScript", "React"
  ],

  designerSkills: [
    { name: "CapCut", level: 95 },
    { name: "Canva", level: 92 },
    { name: "Figma", level: 97 },
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
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
        id: "whatsapp",
        label: "WhatsApp",
        icon: "whatsapp",
        description: "Let's chat",
      },
      {
        id: "instagram",
        label: "Instagram",
        icon: "instagram",
        description: "Follow my journey",
        external: true,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        icon: "linkedin",
        description: "Connect professionally",
        external: true,
      },
    ],
  },

  footer: {
    brandSuffix: ".",
    tagline: "Designing with passion, creating with purpose.",
    builtWith: ["Next.js", "TailwindCSS", "Framer Motion"],
    madeBy: "AT.R",
  },

  social: {
    github: "https://github.com/andretraa",
    linkedin: "https://linkedin.com/in/andretraa",
    instagram: "https://instagram.com/_andretraa",
  },
};
