export type SectionId =
  | "hero"
  | "marquee"
  | "about"
  | "experience"
  | "projects"
  | "tech-stack"
  | "skills"
  | "impact"
  | "journey"
  | "spotlight"
  | "contact";

export type ContactIcon = "email" | "linkedin" | "github" | "instagram" | "twitter" | "website";
export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface SectionHeading {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  cvUrl: string;
  keywords: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  variant?: ButtonVariant;
}

export interface HeroCta {
  id: string;
  label: string;
  href: string;
  variant: ButtonVariant;
  external?: boolean;
  download?: boolean;
  showArrow?: boolean;
}

export interface Profile {
  firstName: string;
  displayName: string;
  role: string;
  roleHighlight?: string;
  tagline: string;
  greeting: string;
  available: boolean;
  availabilityText: string;
  codeSnippet: {
    fileName: string;
    variableName: string;
    skills: string[];
    buildLine: string;
  };
  socialLinks: SocialLink[];
  ctas: HeroCta[];
  rotatingPhrases: string[];
  stats: { label: string; value: string }[];
}

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  navLabel?: string;
  heading?: SectionHeading;
  className?: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutContent {
  paragraphs: string[];
  highlights: AboutHighlight[];
}

export interface ExperienceItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  defaultOpen?: boolean;
}

export interface JourneyStep {
  year: string;
  label: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

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
  initials?: string;
  images?: ProjectImage[];
  url?: string;
}

export interface TechCategory {
  category: string;
  color: string;
  items: string[];
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  computed?: boolean;
}

export interface ContactChannel {
  id: string;
  label: string;
  icon: ContactIcon;
  description: string;
  external?: boolean;
}

export interface ContactContent {
  cvNote: string;
  cvButtonLabel: string;
  channels: ContactChannel[];
}

export interface FooterContent {
  brandSuffix: string;
  tagline: string;
  builtWith: string[];
  madeBy: string;
}

export interface SpotlightContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Portfolio {
  site: SiteConfig;
  profile: Profile;
  sections: SectionConfig[];
  about: AboutContent;
  experience: ExperienceItem[];
  journey: JourneyStep[];
  projects: Project[];
  techStack: TechCategory[];
  skills: string[];
  impact: ImpactStat[];
  contact: ContactContent;
  footer: FooterContent;
  spotlight: SpotlightContent;
  marquee: string[];
  social: {
    github: string;
    linkedin: string;
    instagram: string;
  };
}
