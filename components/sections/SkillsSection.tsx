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
          subtitle="프로젝트에서 실제로 사용한 기술을 역할별로 정리했습니다."
        />
        <div className="-mx-4 mt-10 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:overflow-visible md:px-0 md:pb-0">
          <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-5 lg:gap-6">
            {categoryOrder.map((category) => {
              const meta = skillCategories[category];
              const list = getSkillsByCategory(category);
              return (
                <div
                  key={category}
                  className="flex min-w-[280px] snap-start flex-col rounded-lg border border-border bg-surface p-5 shadow-sm transition-colors duration-300 ease-out hover:border-accent/25 md:min-w-0 md:p-6"
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
      </div>
    </section>
  );
}
