import type { SectionId } from "@/types/portfolio";
import { Hero } from "./hero";
import { About } from "./about";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { TechStack } from "./tech-stack";
import { Skills } from "./skills";
import { EngineeringImpact } from "./engineering-impact";
import { Journey } from "./journey";
import { Contact } from "./contact";

export const sectionRegistry: Record<SectionId, React.ComponentType> = {
  hero: Hero,
  about: About,
  experience: Experience,
  projects: Projects,
  "tech-stack": TechStack,
  skills: Skills,
  impact: EngineeringImpact,
  journey: Journey,
  contact: Contact,
};
