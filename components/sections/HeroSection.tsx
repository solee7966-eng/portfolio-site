import Link from "next/link";

import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-surface via-background to-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Backend & Fullstack Developer
        </p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          <span className="block">서비스 구현부터 배포·운영까지</span>
          <span className="block">
            경험을 쌓아가는 백엔드 중심 풀스택 개발자
          </span>
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
          <p>
            Spring Boot 기반 프로젝트(JobFinder 등)를 AWS EC2, Docker, Jenkins,
            Nginx 환경에서 배포하며 실무에 가까운 개발·배포 흐름을
            익혔습니다. Java, Oracle, MyBatis로 웹 서비스를 구성하는 과정에
            집중해 왔습니다.
          </p>
          <p>
            이 포트폴리오는 Next.js, TypeScript, Tailwind로 직접 구성했고,
            ChatGPT·Cursor AI와 역할을 나누는 MCP 멀티에이전트 협업 방식도
            함께 정리했습니다.
          </p>
          <p className="text-foreground/90">
            단순 구현을 넘어 문제 해결·배포·개선의 과정을 기록하며 성장하는
            개발자 안태훈입니다.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            프로젝트 보기
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-surface-muted"
          >
            협업 과정 보기
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-surface-muted"
          >
            GitHub 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
