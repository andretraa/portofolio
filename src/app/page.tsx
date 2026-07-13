import { getEnabledSections } from "@/lib/portfolio";
import { sectionRegistry } from "@/components/sections/registry";

export default function Home() {
  const sections = getEnabledSections();

  return (
    <>
      {sections.map((section) => {
        const Component = sectionRegistry[section.id];
        return <Component key={section.id} />;
      })}
    </>
  );
}
