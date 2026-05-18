import Link from "next/link";

import { SectionTitle } from "@/components/ui/SectionTitle";

const WORK_STEPS = [
  {
    title: "문제 정의",
    description:
      "사용자 흐름과 데이터 구조에서 먼저 해결할 문제를 정리합니다.",
  },
  {
    title: "구조 설계",
    description:
      "페이지 구조와 데이터 흐름을 잡고 구현 범위를 작게 나눕니다.",
  },
  {
    title: "구현·검증",
    description:
      "기능 구현 후 테스트와 화면 검수를 반복하며 완성도를 높입니다.",
  }
] as const;

// 메인에서는 특정 도구보다 문제 정의→설계→구현·검증이라는 개발 태도를 요약한다.
export function ProcessPreview() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionTitle
          title="작업 방식"
          subtitle="문제를 먼저 정리하고, 구조를 설계한 뒤 구현과 검증을 반복하며 프로젝트를 개선합니다."
        />
        <div className="mt-7 rounded-lg border border-border bg-surface p-5 shadow-sm md:p-6">
          <div className="grid gap-3 md:grid-cols-3">
            {WORK_STEPS.map((step) => (
              <div
                key={step.title}
                className="rounded-lg border border-border bg-surface p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/process"
            className="mt-6 inline-flex text-sm font-medium text-accent hover:text-accent-hover"
          >
            작업 방식 자세히 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
