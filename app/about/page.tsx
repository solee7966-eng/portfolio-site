import type { Metadata } from "next";

import { TechBadge } from "@/components/ui/TechBadge";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "자기소개 및 기술 스택",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        About
      </h1>
      <p className="mt-2 text-muted">자기소개 / 기술 스택 (초안)</p>
      <div className="mt-10 space-y-4 rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:text-base">
        <p>
          <strong className="text-foreground">Placeholder.</strong> 경력 요약,
          관심 분야, 팀 협업 스타일 등을 이어서 작성합니다.
        </p>
        <p>
          아래 배지 목록은{" "}
          <code className="rounded border border-border/60 bg-surface-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
            data/skills.ts
          </code>{" "}
          기준입니다.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechBadge key={skill.name} label={skill.name} />
        ))}
      </div>
    </div>
  );
}
