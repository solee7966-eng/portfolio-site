import Link from "next/link";

import { siteConfig } from "@/data/site";

const SERVICE_FLOW = [
  "요구사항 정리",
  "기능 구현",
  "DB 연동",
  "Docker/Jenkins 배포",
  "검증 및 개선",
] as const;

// 메인 첫 화면에서는 기술 나열보다 개발자 방향성과 핵심 경험을 먼저 전달한다.
export function HeroSection() {
  return (
    <section className="border-b border-border bg-linear-to-b from-surface via-background to-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-14">
          <div className="max-w-3xl">
            <p className="animate-hero-enter hero-delay-1 text-sm font-medium uppercase tracking-widest text-accent">
              신입 웹 개발자
            </p>
            <h1 className="animate-hero-enter hero-delay-2 mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <span className="block">서비스 구현부터 배포까지 경험한</span>
              <span className="block">신입 웹 개발자입니다.</span>
            </h1>
            <div className="animate-hero-enter hero-delay-3 mt-7 max-w-3xl space-y-3.5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Java와 Spring Boot 기반 웹 서비스를 구현하고, Oracle·MyBatis
                데이터 처리와 AWS·Docker·Jenkins 배포 흐름을 경험했습니다.
              </p>
              <p className="text-foreground/90">
                프로젝트의 기능 구현뿐 아니라 데이터 흐름, 배포, 검증 과정을 함께
                정리합니다.
              </p>
            </div>
            <div className="animate-hero-enter hero-delay-4 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md sm:w-auto"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/process"
                className="inline-flex w-full items-center justify-center rounded-md border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-muted transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/40 hover:bg-surface hover:text-foreground sm:w-auto"
              >
                제작 과정 보기
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2.5 text-sm font-medium text-muted transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-surface hover:text-foreground sm:w-auto"
              >
                GitHub 보기
              </Link>
            </div>
          </div>

          <aside className="animate-hero-enter hero-delay-5 rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Service Flow
            </p>
            <ol className="mt-5 space-y-3">
              {SERVICE_FLOW.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/8 font-mono text-xs font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-5 rounded-lg border border-border bg-surface-muted px-3 py-2 font-mono text-xs leading-relaxed text-muted">
              focus: service · deploy · improve
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
