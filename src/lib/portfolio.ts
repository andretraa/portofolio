import { attachProjectImages } from "@/data/project-images";
import { portfolio } from "@/data/portfolio";
import type {
  ContactChannel,
  ImpactStat,
  Portfolio,
  Project,
  ProjectImage,
  SectionConfig,
} from "@/types/portfolio";

export interface ResolvedContactChannel extends ContactChannel {
  href: string;
  description: string;
}

export interface ResolvedPortfolio extends Omit<Portfolio, "contact" | "projects" | "impact" | "profile"> {
  projects: (Project & { images: ProjectImage[] })[];
  impact: ImpactStat[];
  profile: Portfolio["profile"] & {
    ctas: Portfolio["profile"]["ctas"];
    socialLinks: (Portfolio["profile"]["socialLinks"][number] & { href: string })[];
  };
  contact: Omit<Portfolio["contact"], "channels"> & {
    channels: ResolvedContactChannel[];
  };
}

export function getPortfolio(): ResolvedPortfolio {
  return {
    ...portfolio,
    projects: enrichProjects(portfolio.projects),
    impact: resolveImpactStats(portfolio.impact, portfolio.projects),
    contact: {
      ...portfolio.contact,
      channels: portfolio.contact.channels.map((channel) =>
        resolveContactChannel(channel, portfolio)
      ),
    },
    profile: {
      ...portfolio.profile,
      ctas: portfolio.profile.ctas.map((cta) => ({
        ...cta,
        href: cta.id === "cv" ? portfolio.site.cvUrl : cta.href,
      })),
      socialLinks: portfolio.profile.socialLinks.map((link) => ({
        ...link,
        href: resolveSocialHref(link.id, portfolio.social, portfolio.site),
      })),
    },
  };
}

export function getEnabledSections(): SectionConfig[] {
  return getPortfolio().sections.filter((section) => section.enabled);
}

export function getNavLinks() {
  return getEnabledSections()
    .filter((section) => section.navLabel)
    .map((section) => ({
      label: section.navLabel!,
      href: `#${section.id}`,
    }));
}

export function getSectionConfig(
  id: SectionConfig["id"]
): SectionConfig | undefined {
  return getPortfolio().sections.find((section) => section.id === id);
}

export function getSectionNumber(id: SectionConfig["id"]): string | undefined {
  const numbers: Partial<Record<SectionConfig["id"], string>> = {
    about: "01",
    experience: "02",
    projects: "03",
    "tech-stack": "04",
    skills: "05",
    impact: "06",
    journey: "07",
    contact: "08",
  };
  return numbers[id];
}

export function getProjectInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function enrichProjects(projects: Project[]): (Project & { images: ProjectImage[] })[] {
  return attachProjectImages(
    projects.map((project) => ({
      ...project,
      initials: project.initials ?? getProjectInitials(project.name),
    }))
  );
}

function resolveImpactStats(
  stats: ImpactStat[],
  projects: Project[]
): ImpactStat[] {
  return stats.map((stat) => {
    if (!stat.computed) return stat;

    if (stat.id === "projects") {
      return { ...stat, value: projects.length };
    }

    return stat;
  });
}

function resolveContactChannel(
  channel: ContactChannel,
  data: Portfolio
): ResolvedContactChannel {
  const hrefMap: Record<string, string> = {
    email: `mailto:${data.site.email}`,
    github: data.social.github,
    linkedin: data.social.linkedin,
    instagram: data.social.instagram,
  };

  return {
    ...channel,
    href: hrefMap[channel.id] ?? "#",
    description:
      channel.id === "email" ? data.site.email : channel.description,
  };
}

function resolveSocialHref(
  id: string,
  social: Portfolio["social"],
  site: Portfolio["site"]
): string {
  if (id === "github") return social.github;
  if (id === "linkedin") return social.linkedin;
  if (id === "instagram") return social.instagram;
  if (id === "email") return `mailto:${site.email}`;
  return "#";
}

export interface CodeLine {
  indent: number;
  content: string;
  color: string;
}

export function buildCodeLines(): CodeLine[] {
  const { profile } = getPortfolio();
  const { codeSnippet, displayName, role } = profile;
  const skills = codeSnippet.skills;
  const half = Math.ceil(skills.length / 2);
  const line1 = skills
    .slice(0, half)
    .map((s) => `"${s}"`)
    .join(", ");
  const line2 = skills
    .slice(half)
    .map((s) => `"${s}"`)
    .join(", ");

  const lines: CodeLine[] = [
    { indent: 0, content: `const ${codeSnippet.variableName} = {`, color: "text-secondary" },
    { indent: 1, content: `name: "${displayName}",`, color: "text-text-primary" },
    { indent: 1, content: `role: "${role}",`, color: "text-text-primary" },
    { indent: 1, content: "skills: [", color: "text-text-primary" },
    { indent: 2, content: `${line1}${skills.length > half ? "," : ""}`, color: "text-success" },
  ];

  if (line2) {
    lines.push({ indent: 2, content: line2, color: "text-success" });
  }

  lines.push(
    { indent: 1, content: "],", color: "text-text-primary" },
    { indent: 1, content: codeSnippet.buildLine, color: "text-primary" },
    { indent: 0, content: "};", color: "text-secondary" }
  );

  return lines;
}

export function getDefaultExperienceId(): string | null {
  const item = getPortfolio().experience.find((exp) => exp.defaultOpen);
  return item?.id ?? getPortfolio().experience.at(-1)?.id ?? null;
}

export const siteConfig = {
  get name() {
    return getPortfolio().site.name;
  },
  get title() {
    return getPortfolio().site.title;
  },
  get description() {
    return getPortfolio().site.description;
  },
  get url() {
    return getPortfolio().site.url;
  },
  get email() {
    return getPortfolio().site.email;
  },
  get github() {
    return getPortfolio().social.github;
  },
  get linkedin() {
    return getPortfolio().social.linkedin;
  },
  get instagram() {
    return getPortfolio().social.instagram;
  },
  get cvUrl() {
    return getPortfolio().site.cvUrl;
  },
  get keywords() {
    return getPortfolio().site.keywords;
  },
};
