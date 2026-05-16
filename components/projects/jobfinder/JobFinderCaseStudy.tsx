import Link from "next/link";

import Image from "next/image";

import { DetailAccordionItem } from "@/components/ui/DetailAccordionItem";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { MetaInfoGrid } from "@/components/ui/MetaInfoGrid";
import { PageSection } from "@/components/ui/PageSection";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TechBadge } from "@/components/ui/TechBadge";
import { TechStackBlock } from "@/components/ui/TechStackBlock";
import { TroubleshootBlock } from "@/components/ui/TroubleshootBlock";

const HERO_TAGS = [
  "Spring Boot",
  "MSA",
  "Oracle",
  "MyBatis",
  "Spring Security",
  "PortOne",
  "WebSocket",
  "STOMP",
  "Docker",
  "Jenkins",
  "AWS EC2",
] as const;

const META_ROWS = [
  { label: "개발 기간", value: "2026.02 ~ 2026.04" },
  { label: "형태", value: "4인 팀 프로젝트 + 개인 확장" },
  {
    label: "담당",
    value: "기업 기능 전체 / 결제 / 스케줄러 / 채팅 확장 / 배포",
  },
  { label: "배포", value: "운영 배포 경험 있음" },
] as const;

const FLOW_STEPS = [
  "Client",
  "Nginx",
  "API Gateway",
  "Eureka Discovery",
  "User Service / Board Service",
  "Oracle DB",
] as const;

/** 팀 본편 Oracle 스키마 설계 관점(채팅 확장 TBL_CHAT_* 와 구분) */
const DB_DESIGN_CARDS: readonly { title: string; description: string }[] = [
  {
    title: "채용 흐름 중심의 관계 설계",
    description:
      "공고 → 지원 → 제안 → 결과로 이어지는 채용 프로세스가 구조에 반영되도록 ERD를 설계했습니다. 지원·제안 응답 상태를 상태값으로 두어 단계별 흐름을 추적할 수 있게 했습니다.",
  },
  {
    title: "사용자 유형 분리",
    description:
      "구직자와 기업은 역할·보유 데이터가 달라 단일 테이블에 몰아넣지 않고, 회원을 기준으로 도메인 데이터를 나눴습니다. 불필요한 컬럼과 복잡한 조건 분기를 줄이는 데 목적을 두었습니다.",
  },
  {
    title: "다대다 관계 정규화",
    description:
      "기술스택·자격증 등 공고·이력서와 다대다로 엮이는 데이터는 중간 테이블로 분리했습니다. 문자열 나열 대신 검색·필터·확장에 유리한 형태를 택했습니다.",
  },
  {
    title: "결제·포인트·배너 도메인 분리",
    description:
      "포인트 충전, 결제 이력, 배너는 채용 공고와 분리된 유료·운영 도메인으로 두었습니다. 테이블을 나눠 이후 기능 확장 시 채용 코어에 미치는 영향을 줄이고자 했습니다.",
  },
  {
    title: "상태 이력 추적",
    description:
      "지원자 상태는 현재값만 덮어쓰지 않고 변경 이력을 별도 테이블에 저장했습니다. 어떤 담당자가 언제 어떤 단계로 바꿨는지 추적할 수 있게 했습니다.",
  },
];

const MAIN_FEATURES: readonly { title: string; description: string; image?: string; imageAlt?: string; }[] = [
  {
    title: "기업 공고 관리 및 상태 자동화",
    description:
      "기업 사용자가 채용 공고를 등록, 수정, 관리할 수 있는 기능을 구현했습니다. 또한 공고의 시작일, 마감일, 게시 종료일을 기준으로 상태가 자동 변경되도록 설계해 만료되거나 종료된 공고가 사용자 화면에 계속 노출되지 않도록 처리했습니다.",
    image: "/projects/jobfinder/job-management.png",
    imageAlt: "JobFinder 채용 공고 관리 화면",
  },
  {
    title: "지원자 관리",
    description:
      "기업 담당자가 지원서를 열람하고 지원자의 진행 상태를 변경할 수 있는 기능을 구현했습니다. 단순 상태 변경이 아니라 현재 상태를 DB에서 재조회한 뒤 이전 상태와 비교하여 경쟁 상태로 인한 데이터 불일치를 방지했습니다.",
    image: "/projects/jobfinder/applicant-management.png",
    imageAlt: "JobFinder 지원자 관리 화면",
  },
  {
    title: "제안서 발송",
    description:
      "기업이 인재에게 제안서를 발송할 수 있는 기능을 구현했습니다. 소유권, 공고 상태, 만료일, 수신자 유효성, 중복 발송 여부를 서버에서 검증해 잘못된 요청을 차단했습니다.",
    image: "/projects/jobfinder/offer-send.png",
    imageAlt: "JobFinder 제안서 발송 화면",
  },
  {
    title: "포인트 결제 시스템",
    description:
      "PortOne 결제 연동을 통해 포인트 충전 기능을 구현했습니다. 외부 결제와 내부 포인트 적립 사이의 데이터 불일치를 막기 위해 PENDING, VERIFYING, PAID 상태 흐름과 주문번호 기반 재검증 구조를 적용했습니다.",
    image: "/projects/jobfinder/payment-page.png",
    imageAlt: "JobFinder 포인트 결제 화면",
  },
  {
    title: "실시간 채팅 개인 확장",
    description:
      "팀 프로젝트 종료 후 WebSocket, STOMP, SockJS를 활용해 기업과 구직자 간 1:1 채팅 기능을 개인적으로 확장했습니다. 메시지 송수신, 읽음 처리, 안 읽은 메시지 수, 커서 기반 페이징을 구현했습니다.",
  },
];

const CI_CD_POINTS = [
  "GitHub 브랜치 전략",
  "Jenkins Pipeline",
  "Docker image build",
  "Docker Hub push",
  "AWS EC2 배포",
  "docker-compose 기반 서비스 실행",
  "운영/테스트 파이프라인 분리",
  "Slack Webhook 배포 알림",
  "SonarQube 기반 코드 품질 점검",
] as const;

const ROLE_ITEMS = [
  "기업 도메인 기능 설계 및 구현",
  "공고 관리 기능 구현",
  "지원자 관리 및 상태 변경 로직 구현",
  "제안서 발송 및 수신자 검증 로직 구현",
  "인재 검색 기능 구현",
  "배너 등록 및 상태 관리 구현",
  "PortOne 기반 포인트 결제 시스템 구현",
  "결제 상태 검증 및 중복 적립 방지 처리",
  "Spring Scheduler 기반 공고/배너 상태 자동 동기화",
  "MSA 전환 및 서비스 구조 이해",
  "Jenkins, Docker 기반 CI/CD 파이프라인 구성 경험",
  "AWS EC2 운영 환경 배포 경험",
  "WebSocket + STOMP 채팅 기능 개인 확장",
  "Oracle DB 테이블 설계 및 MyBatis Mapper 작성",
  "Swagger 기반 API 문서 관리",
  "SonarQube 기반 코드 품질 개선",
] as const;

const SONAR_IMPROVEMENTS = [
  "System.out 로그를 Logger 기반 로깅으로 전환",
  "포괄적 예외 처리 대신 구체적 예외 타입 사용",
  "결제 상태와 반복 문자열 상수화",
  "DTO 필드 캡슐화",
  "raw type 제거를 통한 타입 안정성 개선",
  "비대한 메서드를 역할별로 분리",
  "공통 로직 메서드 추출",
] as const;


export function JobFinderCaseStudy() {
  return (
    <div>
      <header className="border-b border-border pb-10 sm:pb-12">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Spring Boot 기반 MSA 채용 플랫폼
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          JobFinder
        </h1>
        <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted md:text-lg">
          구직자와 기업 사용자를 연결하는 채용 플랫폼입니다. 기업 사용자의 공고
          관리, 지원자 관리, 제안서 발송, 포인트 결제 기능을 중심으로
          구현했으며, 팀 프로젝트 종료 후 WebSocket 기반 실시간 채팅 기능을
          개인적으로 확장했습니다. 단순 기능 구현을 넘어 MSA 전환, CI/CD,
          Docker 배포, 운영 DB 관리까지 경험한 프로젝트입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {HERO_TAGS.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
        <MetaInfoGrid rows={META_ROWS} />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="http://52.78.3.125/user-service/index"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            서비스 바로가기
          </Link>
          <Link
            href="https://github.com/stars/solee7966-eng/lists/jobfinder-%EC%B1%84%EC%9A%A9%EA%B3%B5%EA%B3%A0-%ED%94%8C%EB%9E%AB%ED%8F%BC"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/10"
          >
            GitHub 보기
          </Link>
        </div>

        <ProjectImage
          src="/projects/jobfinder/jobfinder-main.png"
          alt="JobFinder 메인 화면"
          caption="JobFinder 메인 화면"
          priority
          className="mt-10"
        />
      </header>

      <div className="divide-y divide-border">
        <PageSection
          id="overview"
          title="프로젝트 개요"
          subtitle="팀 본편과 개인 확장의 범위, 전환 과정을 정리했습니다."
        >
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              JobFinder는 구직자와 기업 사용자가 채용 공고, 지원, 제안, 결제,
              채팅 기능을 통해 연결되는 채용 플랫폼입니다.
            </p>
            <p>
              <span className="block">본 프로젝트에서 저는 기업 사용자 도메인을 중심으로 공고 관리,
              지원자 관리, 제안서 발송, 인재 검색, 배너 등록,</span>
              <span className="block">포인트 결제 시스템을 담당했습니다.</span>
            </p>
            <p>
              <span className="block">또한 프로젝트 후반에는 Monolithic 구조에서 MSA 구조로 전환하고,
              Jenkins와 Docker 기반 CI/CD 파이프라인을</span> 
              <span className="block">구성하며 실제 운영 환경에 가까운 배포 흐름을 경험했습니다.</span>
              
            </p>
            <p>
              <span className="block">팀 프로젝트 종료 후 기존 서비스에서 부족했던 기업-구직자 간
              소통 기능을 보완하기 위해 WebSocket + STOMP 기반</span> 
              <span className="block">실시간 채팅 기능을 개인적으로 확장했습니다.</span>
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-foreground">
              기술 스택
            </h3>
            <p className="mt-1 text-sm text-muted">
              실제 코드·배포에 사용한 기술입니다.
            </p>
            <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <TechStackBlock
                heading="Frontend"
                items={["Thymeleaf", "HTML5", "CSS3", "JavaScript"]}
              />
              <TechStackBlock
                heading="Backend"
                items={[
                  "Java",
                  "Spring Boot",
                  "Spring Security",
                  "MyBatis",
                  "WebSocket",
                  "STOMP",
                  "SockJS",
                  "JWT",
                ]}
              />
              <TechStackBlock heading="Database" items={["Oracle DB"]} />
              <TechStackBlock
                heading="Infra / DevOps"
                items={[
                  "AWS EC2",
                  "Docker",
                  "Docker Compose",
                  "Jenkins",
                  "Docker Hub",
                  "Nginx",
                  "SonarQube",
                  "Slack Webhook",
                ]}
              />
              <TechStackBlock
                heading="Architecture"
                items={[
                  "MSA",
                  "Eureka Discovery",
                  "API Gateway",
                  "User Service",
                  "Board Service",
                  "Oracle Database",
                ]}
              />
            </div>
          </div>
        </PageSection>

        <PageSection
          id="db-design"
          title="DB 설계"
          subtitle="팀 본편에서 다룬 Oracle 스키마입니다. 개인 확장 채팅(TBL_CHAT_*)은 아래 「개인 확장」 섹션에서 정리했습니다."
        >
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              JobFinder는 회원, 기업, 채용공고, 이력서, 지원, 제안서, 결제,
              포인트, 배너 등 여러 도메인이 연결되는 채용 플랫폼입니다.
            </p>
            <p>
              초기 설계 단계에서 구직자와 기업 사용자를 하나의 구조로
              단순화할지, 역할과 데이터 특성에 따라 분리할지 검토했고, 두
              사용자 유형의 보유 데이터와 서비스 흐름이 다르다고 판단해 역할별
              도메인을 분리하는 방향으로 설계했습니다.
            </p>
          </div>

          <ProjectImage
            src="/projects/jobfinder/jobfinder-erd.png"
            alt="JobFinder 본편 ERD"
            caption="JobFinder 본편 Oracle DB ERD"
            className="mt-8"
            aspectRatio="auto"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {DB_DESIGN_CARDS.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          id="features"
          title="주요 담당 기능"
          subtitle="기업 도메인과 확장 기능을 중심으로 구현한 범위입니다."
        >
          <div className="grid gap-6">
            {MAIN_FEATURES.map((f) => (
              <article
                key={f.title}
                className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
              >
                {f.image && (
                  <div className="border-b border-border bg-white">
                    <Image
                      src={f.image}
                      alt={f.imageAlt ?? f.title}
                      width={1200}
                      height={700}
                      className="h-auto w-full"
                    />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          id="architecture"
          title="아키텍처"
          subtitle="요청 흐름과 MSA 전환 배경, 트레이드오프를 함께 정리했습니다."
        >
          {/* 아래의 이미지로 대체 완료
          <FlowDiagram steps={FLOW_STEPS} />
          */}

          <ProjectImage
            src="/projects/jobfinder/jobfinder-architecture.png"
            alt="JobFinder MSA 시스템 아키텍처"
            caption="Nginx, Gateway, Eureka, 서비스, Oracle DB로 이어지는 MSA 구조"
            className="mt-8"
            aspectRatio="auto"
          />

          <div className="mt-8 max-w-4xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              초기에는 단일 Spring Boot 애플리케이션으로 개발을 시작했지만,
              구직자 서비스와 기업 서비스가 독립적인 도메인을 가지고 있고 향후
              기능 확장을 고려할 필요가 있어 MSA 구조로 전환했습니다.
            </p>
            <p>
              Discovery Service는 서비스 등록과 탐색을 담당하고, Gateway
              Service는 클라이언트 요청의 진입점 역할을 수행합니다. User
              Service는 회원, 기업 기능, 결제, 채팅 등 주요 비즈니스 기능을
              담당하고, Board Service는 게시판 관련 기능을 담당하도록
              분리했습니다.
            </p>
            <p>
              다만 현재 프로젝트 규모에서 MSA는 다소 과한 선택일 수 있다는 점도
              인지했고, 서비스 간 통신 복잡도와 배포 난이도가 증가하는
              트레이드오프를 함께 경험했습니다.
            </p>
          </div>
        </PageSection>

        <PageSection
          id="implementation"
          title="핵심 구현 상세"
          subtitle="동시성·검증·결제 일관성·스케줄링에 집중한 구현입니다. 긴 설명은 아코디언으로 접어 두었습니다."
        >
          <div className="space-y-3">
            <DetailAccordionItem title="동시성 문제를 고려한 지원자 상태 변경">
              <p>
                지원자 상태 변경 시 화면에서 전달된 상태값만 신뢰하지 않고, DB에서
                현재 상태를 다시 조회한 뒤 이전 상태와 비교했습니다. 두 명의
                담당자가 동시에 같은 지원자의 상태를 변경하려는 상황에서 데이터
                불일치가 생기지 않도록 방어 로직을 적용했습니다.
              </p>
              <p>
                또한 미열람 상태에서 바로 합격/불합격으로 변경되지 않도록 상태
                전이 규칙을 서비스 레이어에서 관리했습니다. 상태 변경 후에는
                이력을 별도 테이블에 저장해 어떤 담당자가 언제 어떤 단계로
                변경했는지 추적할 수 있도록 했습니다.
              </p>
            </DetailAccordionItem>
            <DetailAccordionItem title="검증 중심의 제안서 발송 구조">
              <p>
                제안서 발송 전 소유권, 공고 상태, 만료일, 수신자 유효성, 중복
                발송 여부를 단계적으로 검증했습니다. 클라이언트에서 전달된 값을
                그대로 신뢰하지 않고 서버에서 재검증하여 비정상 요청이나 화면
                조작으로 인한 잘못된 발송을 차단했습니다.
              </p>
              <p>
                발송 시점의 공고 정보를 스냅샷으로 저장해 이후 공고가 수정되거나
                마감되어도 발송 당시 조건을 추적할 수 있도록 설계했습니다.
              </p>
            </DetailAccordionItem>
            <DetailAccordionItem title="외부 결제와 내부 포인트 적립의 일관성 보장">
              <p>
                포인트 충전은 외부 PG사 결제와 내부 DB 적립이 분리되어 있기
                때문에 데이터 불일치 가능성이 있었습니다. 이를 해결하기 위해
                결제창 호출 전 PENDING 상태의 주문 레코드를 먼저 생성하고, 결제
                완료 후에는 서버가 PortOne API를 직접 호출해 주문번호, 결제번호,
                금액을 재검증하도록 구현했습니다.
              </p>
              <p>
                이미 처리된 주문은 PAID 상태로 판별하여 중복 적립을 차단했고,
                결제 완료 처리, 포인트 적립, 거래내역 저장은 하나의 트랜잭션으로
                묶어 일부만 반영되는 상황을 방지했습니다.
              </p>
            </DetailAccordionItem>
            <DetailAccordionItem title="공고 및 배너 상태 자동 동기화">
              <p>
                공고 마감일과 게시 종료일이 지나도 상태가 자동으로 바뀌지 않으면
                마감된 공고가 사용자 화면에 계속 노출될 수 있습니다. 이를 해결하기
                위해 Spring Scheduler를 활용해 공고와 배너 상태를 주기적으로
                갱신했습니다.
              </p>
              <p>
                삭제, 마감, 대기, 진행중 순서로 상태를 갱신해 동시에 여러 조건에
                해당하는 공고가 잘못된 상태로 처리되지 않도록 우선순위를
                명확히 했습니다.
              </p>
            </DetailAccordionItem>
          </div>
        </PageSection>

        <PageSection
          id="chat-extension"
          title="개인 확장: WebSocket 기반 실시간 채팅"
          subtitle="팀 프로젝트 종료 이후(2026.04) 단독으로 설계·구현한 기능입니다."
        >
          <div className="mb-8 rounded-lg border border-accent/25 bg-surface p-4 text-sm shadow-sm sm:p-5">
            <p className="font-semibold text-foreground">
              팀 본편(2026.02.24 ~ 2026.03.31) 이후 · 개인 확장(2026.04)
            </p>
            <p className="mt-2 text-muted">
              아래 내용은 4인 팀 산출물과 별도로, 기존 MSA·인증 구조에 맞춰
              개인적으로 확장한 채팅 도메인에 대한 설명입니다.
            </p>
          </div>
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              팀 프로젝트 종료 후 기존 JobFinder 서비스에 기업과 구직자 간 직접
              소통 수단이 부족하다는 점을 발견했습니다. 지원 이후 합격/불합격
              처리까지의 과정에서 양측이 대화할 수 있는 채널이 필요하다고
              판단하여, 기존 코드베이스와 MSA 구조를 분석한 뒤 채팅 기능을
              개인적으로 설계하고 구현했습니다.
            </p>
          </div>
          <h4 className="mt-8 text-sm font-semibold text-foreground">
            기술 선택
          </h4>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted md:text-base">
            <li>
              <strong className="text-foreground/90">WebSocket:</strong> 서버가
              클라이언트에 실시간으로 메시지를 전달하기 위해 사용
            </li>
            <li>
              <strong className="text-foreground/90">STOMP:</strong> 메시지
              발행/구독 구조를 명확히 하기 위해 사용
            </li>
            <li>
              <strong className="text-foreground/90">SockJS:</strong> WebSocket
              미지원 환경에 대한 fallback을 위해 사용
            </li>
            <li>
              <strong className="text-foreground/90">In-Memory Broker:</strong>{" "}
              단일 서버 환경에서 오버엔지니어링을 피하기 위해 선택
            </li>
            <li>
              <strong className="text-foreground/90">REST + WebSocket 혼합:</strong>{" "}
              채팅방 생성, 메시지 조회, 읽음 처리는 REST로 처리하고 실시간
              송수신과 읽음 이벤트 전파는 WebSocket으로 처리
            </li>
          </ul>
          <h4 className="mt-8 text-sm font-semibold text-foreground">
            채팅 DB 설계
          </h4>

          <ProjectImage
            src="/projects/jobfinder/jobfinder-chat-db.png"
            alt="WebSocket 채팅 확장 DB 구조"
            caption="개인 확장으로 설계한 WebSocket 채팅 도메인 DB 구조"
            className="mt-4"
            aspectRatio="auto"
          />

          <ul className="mt-6 list-inside list-disc space-y-2 text-sm text-muted md:text-base">
            <li>
              <strong className="text-foreground/90">TBL_CHAT_ROOM:</strong> 지원
              관계 기반 1:1 채팅방
            </li>
            <li>
              <strong className="text-foreground/90">TBL_CHAT_MESSAGE:</strong>{" "}
              append-only 메시지 저장
            </li>
            <li>
              <strong className="text-foreground/90">TBL_CHAT_READ:</strong> 사용자별
              마지막 읽음 메시지 ID 저장
            </li>
          </ul>
          <h4 className="mt-8 text-sm font-semibold text-foreground">
            핵심 기능
          </h4>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-muted md:text-base">
            <li>지원 관계 기반 채팅방 생성</li>
            <li>동일 지원 건에 대한 중복 채팅방 생성 방지</li>
            <li>STOMP 기반 실시간 메시지 송수신</li>
            <li>채팅방 목록 마지막 메시지 실시간 갱신</li>
            <li>lastReadMessageId 기반 읽음 처리</li>
            <li>안 읽은 메시지 수 계산</li>
            <li>
              message_id &lt; lastMessageId 조건의 커서 기반 메시지 페이징
            </li>
            <li>기존 Spring Security + JWT 인증 체계와 연동</li>
            <li>
              @MessageMapping 핸들러에서 Principal 기반 로그인 사용자 식별
            </li>
          </ul>
        </PageSection>

        <PageSection
          id="cicd"
          title="Docker와 Jenkins 기반 배포 파이프라인"
          subtitle="브랜치·파이프라인·컨테이너 실행까지의 흐름입니다."
        >
          <div className="max-w-4xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              브랜치 전략에 따라 main 브랜치는 운영 배포용, 개인 브랜치는 테스트
              환경으로 분리했습니다. Jenkins를 통해 Docker 이미지를 빌드하고
              Docker Hub에 푸시한 뒤, AWS EC2 서버에서 docker-compose로 서비스를
              실행하는 파이프라인을 구성했습니다.
            </p>
            <p>
              이를 통해 개발 중인 코드가 운영 배포에 영향을 주지 않도록 배포
              흐름을 분리했고, Docker 기반 MSA 서비스 운영 경험을 쌓았습니다.
            </p>
          </div>

          <ProjectImage
            src="/projects/jobfinder/jobfinder-pipeline.png"
            alt="GitHub Jenkins Docker Hub EC2 배포 파이프라인"
            caption="GitHub, Jenkins, Docker Hub, AWS EC2로 이어지는 CI/CD 배포 파이프라인"
            className="mt-8"
            aspectRatio="auto"
          />

          <ul className="mt-8 list-inside list-disc space-y-2 text-sm text-muted md:text-base">
            {CI_CD_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </PageSection>

        <PageSection
          id="troubleshooting"
          title="트러블슈팅"
          subtitle="운영·배포·채팅 확장 과정에서 겪은 대표 이슈입니다."
        >
          <div className="space-y-8">
            <TroubleshootBlock
              title="외부 결제 성공 이후 내부 포인트 반영 실패"
              problem="PortOne 결제는 정상 완료되었지만 서버 내부 예외로 인해 DB 포인트 적립이 실패하는 문제가 발생했습니다. 사용자는 결제를 완료했지만 서비스 내부에는 포인트가 반영되지 않는 데이터 불일치 상황이었습니다."
              cause="PG사 결제와 내부 DB 적립은 서로 다른 시스템에서 처리되기 때문에, 서버 내부 트랜잭션 롤백이 외부 결제 결과까지 되돌릴 수 없는 구조적 한계가 있었습니다."
              solution="결제 상태에 VERIFYING 단계를 추가하고, 주문번호 기반 재검증 API를 도입했습니다. 서버가 PortOne API를 직접 호출해 결제 결과를 확인한 뒤 포인트를 반영하도록 개선했으며, 조건부 업데이트와 상태값 검증으로 중복 적립을 방지했습니다."
              learning="외부 시스템 연동에서는 단순 성공/실패 처리보다 멱등성, 상태 기반 설계, 재검증 흐름이 중요하다는 점을 경험했습니다."
            />
            <TroubleshootBlock
              title="Docker 내부 네트워크 설정 문제"
              problem="AWS EC2 환경에서 Docker 기반 MSA 배포 중 컨테이너는 정상 실행되었지만 서비스 간 통신이 실패했습니다. Eureka 등록이 되지 않았고 API 호출 시 500 에러가 반복되었습니다."
              cause="각 컨테이너가 서로 다른 네트워크에 배치되어 있어 DNS 기반 통신이 불가능한 상태였습니다. 컨테이너 실행 여부와 서비스 간 네트워크 연결은 별개의 문제였습니다."
              solution="docker-compose로 공통 네트워크를 구성하고 모든 서비스 컨테이너를 동일 네트워크에 배치했습니다. 서비스 간 통신 주소도 컨테이너 호스트명을 기준으로 변경해 Eureka 등록과 API 호출을 정상화했습니다."
              learning="MSA 환경에서는 애플리케이션 코드뿐 아니라 컨테이너 네트워크, 서비스 디스커버리, 실행 순서까지 함께 고려해야 한다는 점을 배웠습니다."
            />
            <TroubleshootBlock
              title="운영 배포와 테스트 배포가 섞이는 파이프라인 문제"
              problem="초기에는 단일 Jenkins 파이프라인으로 모든 브랜치를 처리해 개발 중인 코드가 운영 배포에 영향을 줄 수 있는 위험이 있었습니다."
              cause="브랜치 전략과 Jenkinsfile이 명확히 분리되어 있지 않아 운영 배포와 테스트 배포의 경계가 불명확했습니다."
              solution="main 브랜치는 운영 배포용 파이프라인으로, 개인 브랜치는 테스트 배포용 파이프라인으로 분리했습니다. Jenkinsfile도 별도로 관리해 개발과 운영 환경이 독립적으로 동작하도록 구성했습니다."
              learning="형상관리는 코드 버전 관리뿐 아니라 배포 흐름과 운영 안정성까지 포함하는 관리 영역이라는 점을 이해했습니다."
            />
            <TroubleshootBlock
              title="채팅 메시지 읽음 상태 관리"
              problem="실시간 채팅에서 단순 메시지 송수신뿐 아니라 상대방이 어디까지 읽었는지를 표시해야 했습니다."
              cause="메시지마다 읽음 여부를 개별 저장하면 데이터가 불필요하게 증가하고, 채팅방별 읽음 상태 계산도 복잡해질 수 있었습니다."
              solution="TBL_CHAT_READ 테이블에 사용자별 lastReadMessageId를 저장하는 구조로 설계했습니다. 안 읽은 메시지 수는 message_id &gt; last_read_message_id 조건으로 계산하고, 읽음 이벤트는 WebSocket으로 같은 채팅방 구독자에게 전파했습니다."
              learning="실시간 기능은 메시지 전송뿐 아니라 읽음 상태, 목록 갱신, 페이징, 데이터 증가 방식까지 함께 고려해야 한다는 점을 배웠습니다."
            />
          </div>
        </PageSection>

        <PageSection
          id="quality"
          title="SonarQube 기반 코드 리팩토링"
          subtitle="정적 분석 결과를 바탕으로 협업과 유지보수에 맞게 정리했습니다."
        >
          <p className="max-w-4xl text-sm leading-relaxed text-muted md:text-base">
            SonarQube 정적 분석을 통해 코드 품질을 점검하고, 유지보수성과 협업을
            고려한 구조로 개선했습니다.
          </p>
          <h4 className="mt-8 text-sm font-semibold text-foreground">
            개선 항목
          </h4>
          <ul className="mt-3 max-w-4xl list-inside list-disc space-y-2 text-sm text-muted md:text-base">
            {SONAR_IMPROVEMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <ProjectImage
              src="/projects/jobfinder/sonarqube-prev.png"
              alt="SonarQube 코드 품질 개선 전"
              caption="SonarQube 개선 전"
              aspectRatio="auto"
            />
            <ProjectImage
              src="/projects/jobfinder/sonarqube-next.png"
              alt="SonarQube 코드 품질 개선 후"
              caption="SonarQube 개선 후"
              aspectRatio="auto"
            />
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-lg border border-border bg-surface p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Code Smell
              </p>
              <p className="mt-1 text-2xl font-semibold tabular-nums text-foreground">
                324{" "}
                <span className="text-base font-normal text-muted">→</span> 212
              </p>
              <p className="mt-1 text-sm text-muted">약 35% 개선</p>
            </div>
            <ul className="text-sm text-muted sm:max-w-xs sm:text-right">
              <li>코드 가독성 및 유지보수성 향상</li>
              <li>팀원 간 코드 리뷰 이해도 향상</li>
            </ul>
          </div>
        </PageSection>

        <PageSection
          id="roles"
          title="담당 역할"
          subtitle="팀 본편과 개인 확장을 통틀어 수행한 작업입니다."
        >
          <ul className="max-w-4xl list-inside list-disc space-y-2 text-sm leading-relaxed text-muted md:text-base">
            {ROLE_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </PageSection>

        <PageSection id="closing" title="마무리">
          <div className="rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:p-8 md:text-base">
            <p>
              JobFinder 프로젝트를 통해 단순 CRUD 구현을 넘어 채용 서비스의 실제
              업무 흐름을 데이터 구조와 비즈니스 로직으로 표현하는 경험을
              했습니다.
            </p>
            <p className="mt-4">
              특히 기업 도메인의 공고, 지원자, 제안서, 결제 기능을 담당하며 상태
              관리와 검증 로직의 중요성을 배웠고, MSA 전환과 Docker/Jenkins 기반
              배포를 경험하며 서비스 운영 관점의 개발 흐름을 익혔습니다.
            </p>
            <p className="mt-4">
              팀 프로젝트 이후에는 WebSocket 기반 채팅 기능을 개인적으로 확장하며
              기존 코드베이스를 분석하고 새로운 기능을 자연스럽게 통합하는 경험을
              쌓았습니다. 이 과정을 통해 백엔드 중심 풀스택 개발자로서 기능 구현,
              데이터 설계, 배포, 운영, 개선까지 연결되는 전체 흐름을 이해할 수
              있었습니다.
            </p>
          </div>
        </PageSection>
      </div>
    </div>
  );
}