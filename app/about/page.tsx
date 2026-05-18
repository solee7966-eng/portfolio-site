import type { Metadata } from "next";

import { TechBadge } from "@/components/ui/TechBadge";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "자기소개 및 기술 스택",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        About
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        구현 경험과 기술 스택을 중심으로 정리한 소개입니다.
      </p>
      <div className="mt-10 space-y-4 rounded-xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:p-8 md:text-base">
        <p>
          Java와 Spring Boot 기반 웹 서비스 구현 경험을 쌓고 있으며,
          프로젝트에서는 기능 구현뿐 아니라 데이터 흐름, 배포 과정, 화면
          개선까지 함께 살펴보는 개발자를 지향합니다.
        </p>
        <p>
          JobFinder에서는 기업 도메인 기능과 결제, 채팅 확장, 배포 흐름을
          경험했고, DeviceMarket에서는 상품 옵션과 재고를 분리한 데이터 구조를
          구현했습니다.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2.5 rounded-xl border border-border bg-surface p-5 shadow-sm md:p-6">
        {skills.map((skill) => (
          <TechBadge key={skill.name} label={skill.name} />
        ))}
      </div>
    </div>
  );
}
