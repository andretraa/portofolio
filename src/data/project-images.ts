import type { Project, ProjectImage } from "@/types/portfolio";

function projectImages(
  projectId: string,
  items: Omit<ProjectImage, "src">[]
): ProjectImage[] {
  return items.map((item) => ({
    ...item,
    src: `/projects/${projectId}/${item.id}.svg`,
  }));
}

export const projectImageSets: Record<string, ProjectImage[]> = {
  jaksimpus: projectImages("jaksimpus", [
    { id: "dashboard", alt: "JakSimpus Dashboard", caption: "Patient overview dashboard" },
    { id: "records", alt: "Medical Records", caption: "Electronic medical records module" },
    { id: "analytics", alt: "Clinic Analytics", caption: "Healthcare analytics & reporting" },
  ]),
  klikmedis: projectImages("klikmedis", [
    { id: "emr", alt: "KlikMedis EMR", caption: "Electronic medical record interface" },
    { id: "integration", alt: "SATUSEHAT Integration", caption: "National health platform integration" },
    { id: "patient", alt: "Patient Portal", caption: "Patient management & scheduling" },
  ]),
  baytgo: projectImages("baytgo", [
    { id: "marketplace", alt: "BaytGo Marketplace", caption: "Muthowif marketplace homepage" },
    { id: "mobile", alt: "BaytGo Mobile App", caption: "React Native mobile experience" },
    { id: "booking", alt: "Booking Flow", caption: "Pilgrim booking & payment flow" },
  ]),
  webyouneed: projectImages("webyouneed", [
    { id: "homepage", alt: "WebYouNeed Homepage", caption: "Modern company landing page" },
    { id: "services", alt: "Services Section", caption: "Services & portfolio showcase" },
    { id: "cms", alt: "Admin CMS", caption: "Content management backend" },
  ]),
  daksa: projectImages("daksa", [
    { id: "profile", alt: "Daksa Consultant Profile", caption: "Company profile homepage" },
    { id: "team", alt: "Team Section", caption: "Consulting team presentation" },
    { id: "contact", alt: "Contact Page", caption: "Lead generation contact form" },
  ]),
  "packaging-design": projectImages("daksa", [
    { id: "profile", alt: "Packaging Design", caption: "Packaging box design" },
    { id: "team", alt: "Details view", caption: "Box layout print design" },
    { id: "contact", alt: "3D render", caption: "3D packaging mockup render" },
  ]),
};

export function attachProjectImages(
  projects: Project[]
): (Project & { images: ProjectImage[] })[] {
  return projects.map((project) => ({
    ...project,
    images: project.images?.length
      ? project.images
      : projectImageSets[project.id] ?? [],
  }));
}
