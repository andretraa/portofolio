import type { Project, ProjectImage } from "@/types/portfolio";

export const projectImageSets: Record<string, ProjectImage[]> = {
  jaksimpus: [
    { id: "dashboard", src: "/projects/jaksimpus/dashboard.png", alt: "Coffee Shop Branding", caption: "Coffee shop branding identity mockup" }
  ],
  klikmedis: [
    { id: "emr", src: "/projects/klikmedis/emr.png", alt: "Mobile Banking App", caption: "Mobile banking dashboard interface UI/UX" }
  ],
  baytgo: [
    { id: "mobile", src: "/projects/baytgo/mobile.png", alt: "Instagram Feed Design", caption: "Instagram posts feed layout template" }
  ],
  webyouneed: [
    { id: "homepage", src: "/projects/webyouneed/homepage.png", alt: "Landing Page Website", caption: "Landing page website mockup on laptop" }
  ],
  daksa: [
    { id: "profile", src: "/projects/daksa/profile.png", alt: "Fashion Brand Identity", caption: "Shopping bag and package branding boxes" }
  ],
  "packaging-design": [
    { id: "packaging", src: "/projects/daksa/packaging.png", alt: "Packaging Design", caption: "Mats.co packaging box design" }
  ]
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
