import type { Project, ProjectImage } from "@/types/portfolio";

export const projectImageSets: Record<string, ProjectImage[]> = {
  jaksimpus: [
    { id: "dashboard", src: "/projects/jaksimpus/dashboard.png", alt: "Coffee Shop Branding - Overview", caption: "Coffee shop branding identity mockup" },
    { id: "records", src: "/projects/jaksimpus/records.png", alt: "Coffee Shop Branding - Details", caption: "Close up look at packaging bag textures" },
    { id: "analytics", src: "/projects/jaksimpus/analytics.png", alt: "Coffee Shop Branding - Stationery", caption: "Stationery and business cards mockup layout" }
  ],
  klikmedis: [
    { id: "emr", src: "/projects/klikmedis/emr.png", alt: "Mobile Banking - Main UI", caption: "Mobile banking dashboard interface UI/UX" },
    { id: "integration", src: "/projects/klikmedis/integration.png", alt: "Mobile Banking - Transaction Details", caption: "Detailed look at finance analytics charts" },
    { id: "patient", src: "/projects/klikmedis/patient.png", alt: "Mobile Banking - Send Money Flow", caption: "Interaction flow of transaction records" }
  ],
  baytgo: [
    { id: "mobile", src: "/projects/baytgo/mobile.png", alt: "Instagram Feed - Layout", caption: "Instagram posts feed layout template" },
    { id: "marketplace", src: "/projects/baytgo/marketplace.png", alt: "Instagram Feed - Story Template", caption: "Cohesive visual identity for branding feeds" },
    { id: "booking", src: "/projects/baytgo/booking.png", alt: "Instagram Feed - Carousel Mockup", caption: "Social media visual brand guidelines" }
  ],
  webyouneed: [
    { id: "homepage", src: "/projects/webyouneed/homepage.png", alt: "Landing Page - Desktop view", caption: "Landing page website mockup on laptop" },
    { id: "services", src: "/projects/webyouneed/services.png", alt: "Landing Page - Tablet & Phone", caption: "Responsive multi-screen mockup" },
    { id: "cms", src: "/projects/webyouneed/cms.png", alt: "Landing Page - Page Details", caption: "Clean typography and modern layout details" }
  ],
  daksa: [
    { id: "profile", src: "/projects/daksa/profile.png", alt: "Fashion Brand - Luxury Bags", caption: "Shopping bag and package branding boxes" },
    { id: "team", src: "/projects/daksa/team.png", alt: "Fashion Brand - Clothes Tags", caption: "Luxury clothes tag accent close up" },
    { id: "contact", src: "/projects/daksa/contact.png", alt: "Fashion Brand - Box Package", caption: "Cardboard package boxes branding mockup" }
  ],
  "packaging-design": [
    { id: "packaging", src: "/projects/daksa/packaging.png", alt: "Packaging Design - Front View", caption: "Mats.co packaging box design" },
    { id: "packaging-2", src: "/projects/daksa/packaging-2.png", alt: "Packaging Design - Stack View", caption: "Cardboard boxes stacked together" },
    { id: "packaging-3", src: "/projects/daksa/packaging-3.png", alt: "Packaging Design - Details Accent", caption: "Close up look at printed box texture" }
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
