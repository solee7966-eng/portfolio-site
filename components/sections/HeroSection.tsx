import Image from "next/image";
import Link from "next/link";

import { TechBadge } from "@/components/ui/TechBadge";
import { siteConfig } from "@/data/site";

const PROFILE_SKILLS = [
  "Java",
  "Spring Boot",
  "Oracle",
  "AWS",
  "Docker",
] as const;

export function HeroSection() {
  return (
    <section className="border-b border-border bg-gradient-to-b from-surface via-background to-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              신입 웹 개발자
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <span className="block">서비스를 구현하고 개선하는</span>
              <span className="block">신입 웹 개발자입니다.</span>
            </h1>
            <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
              <p>
                <span className="block">
                  Java, Spring Boot, Oracle, MyBatis를 중심으로 웹 서비스를
                  구현해 왔습니다.
                </span>
                <span className="block">
                  {" "}
                  JobFinder에서는 기업 기능, PortOne 결제, 스케줄러, WebSocket
                  채팅 확장과 Docker·Jenkins·AWS EC2 기반 배포·운영까지 직접
                  다뤘습니다.
                </span>
              </p>
              <p>
                <span className="block">
                  이 포트폴리오 사이트는 Next.js, TypeScript, Tailwind CSS로
                  제작했습니다.
                </span>
                <span className="block">
                  ChatGPT와 Cursor를 활용한 MCP 멀티에이전트 협업 방식도 /process
                  페이지에서 보조적으로 정리했습니다.
                </span>
              </p>
              <p className="text-foreground/90">
                구현·배포·개선 과정을 기록하며 성장하는 신입 웹 개발자입니다.
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

          <aside className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
              <div className="mx-auto relative h-28 w-28 overflow-hidden rounded-2xl border border-border bg-surface-muted">
                <Image
                  src="/profile/profile-main.jpg"
                  alt={`${siteConfig.name} 프로필 사진`}
                  fill
                  priority
                  sizes="112px"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <p className="mt-4 text-center text-lg font-semibold text-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-1 text-center text-sm text-muted">
                신입 웹 개발자
              </p>
              <p className="mt-3 text-center text-sm leading-relaxed text-muted">
                Java·Spring Boot 기반 웹 서비스를 구현하고 배포 경험을 쌓아가고
                있습니다.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {PROFILE_SKILLS.map((skill) => (
                  <TechBadge key={skill} label={skill} />
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:justify-center">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-surface-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  GitHub
                </Link>
                <Link
                  href={siteConfig.links.email}
                  className="inline-flex items-center justify-center rounded-md border border-border bg-surface-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  Email
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
