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

// 메인 첫 화면에서는 기술 나열보다 개발자 방향성과 핵심 경험을 먼저 전달한다.
export function HeroSection() {
  return (
    <section className="border-b border-border bg-linear-to-b from-surface via-background to-background py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              신입 웹 개발자
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <span className="block">서비스 구현부터 배포까지 경험한</span>
              <span className="block">신입 웹 개발자입니다.</span>
            </h1>
            <div className="mt-7 max-w-2xl space-y-3.5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Java와 Spring Boot 기반으로 웹 서비스를 구현하고, Oracle·MyBatis
                데이터 처리와 AWS·Docker·Jenkins 배포 흐름을 경험했습니다.
              </p>
              <p className="text-foreground/90">
                채용 플랫폼 기능 개발, 실시간 채팅 확장, 배포 개선을 진행하며
                문제 정의부터 구조 개선까지 연결해 완성하는 과정을 중요하게
                생각합니다.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                제작 과정 보기
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-transparent px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                GitHub 보기
              </Link>
            </div>
          </div>

          <aside className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-7">
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
                Java·Spring Boot 기반 웹 서비스를 구현하고 배포 경험을 쌓아가고 있습니다.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
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
