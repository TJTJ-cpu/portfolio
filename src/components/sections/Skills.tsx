import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";

export default function Skills() {
  const categories = ["Frontend", "Backend", "Tools", "Other"] as const;

  return (
    <section id="skills" className="py-20 max-w-3xl mx-auto px-6">
      <SectionHeading title="Skills" />
      {categories.map((category) => {
        const filtered = skills.filter((skill) => skill.category === category);
        if (filtered.length === 0) return null;
        return (
          <div key={category} className="mb-6">
            <h3 className="text-lg text-gray-300 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {filtered.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
