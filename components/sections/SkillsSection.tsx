import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  getSkillsByCategory,
  skillCategories,
  type SkillCategory,
} from "@/data/skills";

const categoryOrder: SkillCategory[] = [
  "frontend",
  "backend",
  "tooling",
  "collaboration",
];

export function SkillsSection() {
  return (
    <section className="border-y border-border bg-surface-muted/80 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          title="Skills & tools"
          subtitle="기술 스택은 /about 페이지에서 카테고리별로 정리해 확장할 수 있습니다."
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {categoryOrder.map((category) => {
            const meta = skillCategories[category];
            const list = getSkillsByCategory(category);
            return (
              <div key={category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  {meta.label}
                </h3>
                <p className="mt-1 text-sm text-muted">{meta.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <TechBadge key={skill.name} label={skill.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
