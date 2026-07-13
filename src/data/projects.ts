export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  stack: string[];
  contributions: string[];
  gradient: string;
  accent: string;
  initials: string;
}

export const projects: Project[] = [
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
    initials: "JS",
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
    initials: "KM",
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
    initials: "BG",
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
    initials: "WY",
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
    initials: "DC",
  },
];
