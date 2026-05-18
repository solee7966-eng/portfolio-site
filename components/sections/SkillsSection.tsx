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
];

// 단순 기술 목록이 아니라 실제 사용 맥락이 보이도록 카테고리 설명을 둔다.
export function SkillsSection() {
  return (
    <section className="border-y border-border bg-surface-muted/80 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          title="Skills & tools"
          subtitle="프로젝트에서 실제로 사용했거나 포트폴리오 제작 과정에서 다룬 기술을 맥락별로 정리했습니다."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {categoryOrder.map((category) => {
            const meta = skillCategories[category];
            const list = getSkillsByCategory(category);
            return (
              <div
                key={category}
                className="rounded-lg border border-border bg-surface p-5 shadow-sm md:p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {meta.label}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                  {meta.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
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
