import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "개인 정보, 소개, 학력, 자격증, 훈련 이수 내역",
};

const PROFILE = {
  name: "안태훈",
  role: "신입 웹 개발자",
  mail: "solee7966@naver.com",
  tel: "010-4533-1386",
} as const;

const EDUCATION = [
  "(2017.03~2020.02) 세명대학교 컴퓨터학부 졸업",
  "(2014.03~2017.02) 남한고등학교 졸업",
] as const;

const CERTIFICATES = ["(2024.12) 정보처리기사"] as const;

const TRAINING = [
  "(2025.09~2026.03) AWS와 Docker&Kubernetes를 활용한 Java Full-Stack 개발자 양성 과정(쌍용교육센터)",
] as const;

export default function AboutPage() {
  return (
    <div className="animate-page-enter mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        Profile
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        About
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        개인 정보와 이력, 프로젝트를 통해 쌓은 구현 경험을 정리했습니다.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
        <aside className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-7">
          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-2xl border border-border bg-surface-muted">
            <Image
              src="/profile/profile-main.jpg"
              alt={`${PROFILE.name} 프로필 사진`}
              fill
              priority
              sizes="144px"
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-foreground">
              {PROFILE.name}
            </p>
            <p className="mt-1 text-sm text-muted">{PROFILE.role}</p>
          </div>
          <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
            <div>
              <dt className="font-medium text-foreground">Mail</dt>
              <dd className="mt-1">
                <Link
                  href={siteConfig.links.email}
                  className="text-accent transition-colors duration-300 ease-out hover:text-accent-hover"
                >
                  {PROFILE.mail}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Tel</dt>
              <dd className="mt-1 text-muted">{PROFILE.tel}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">GitHub</dt>
              <dd className="mt-1">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors duration-300 ease-out hover:text-accent-hover"
                >
                  GitHub 바로가기
                </Link>
              </dd>
            </div>
          </dl>
        </aside>

        <div className="space-y-6">
          <section className="rounded-xl border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:p-8 md:text-base">
            <h2 className="text-lg font-semibold text-foreground">소개</h2>
            <div className="mt-4 space-y-4">
              <p>
                Java와 Spring Boot 기반 웹 서비스 구현 경험을 쌓고 있으며,
                프로젝트에서는 기능 구현뿐 아니라 데이터 흐름, 배포 과정, 화면
                개선까지 함께 살펴보는 개발자를 지향합니다.
              </p>
              <p>
                JobFinder에서는 기업 도메인 기능, 결제, 채팅 확장, 배포 흐름을
                경험했고, DeviceMarket에서는 상품 옵션과 재고를 분리한 데이터
                구조를 구현했습니다.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
            <h2 className="text-lg font-semibold text-foreground">이력</h2>
            <div className="mt-5 space-y-6 text-sm leading-relaxed text-muted md:text-base">
              <div className="border-l border-accent/25 pl-4">
                <h3 className="font-semibold text-foreground">학력</h3>
                <ul className="mt-3 space-y-2.5">
                  {EDUCATION.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-l border-accent/25 pl-4">
                <h3 className="font-semibold text-foreground">자격증</h3>
                <ul className="mt-3 space-y-2.5">
                  {CERTIFICATES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border-l border-accent/25 pl-4">
                <h3 className="font-semibold text-foreground">훈련이수</h3>
                <ul className="mt-3 space-y-2.5">
                  {TRAINING.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
