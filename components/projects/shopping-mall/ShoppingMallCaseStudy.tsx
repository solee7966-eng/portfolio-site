import Link from "next/link";

import { DetailAccordionItem } from "@/components/ui/DetailAccordionItem";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { MetaInfoGrid } from "@/components/ui/MetaInfoGrid";
import { PageSection } from "@/components/ui/PageSection";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TechBadge } from "@/components/ui/TechBadge";
import { TechStackBlock } from "@/components/ui/TechStackBlock";
import { TroubleshootBlock } from "@/components/ui/TroubleshootBlock";

const GITHUB_URL = "https://github.com/solee7966-eng/DeviceMarket";
const SHOPPING_DB_IMAGE = "/projects/shopping-mall/shopping-db.png";

const HERO_TAGS = [
  "Java",
  "JSP",
  "Servlet",
  "MVC2",
  "Oracle",
  "JDBC",
  "FrontController",
  "Command Pattern",
] as const;

const META_ROWS = [
  { label: "개발 기간", value: "2025.12.22 ~ 2026.01.20" },
  { label: "팀 구성", value: "4인 팀 프로젝트" },
  { label: "담당 역할", value: "상품 관리 기능 전반" },
  { label: "핵심 주제", value: "상품·옵션·이미지 분리 설계" },
] as const;

const FEATURE_CARDS: readonly { title: string; description: string }[] = [
  {
    title: "상품코드 중복 확인 기반 등록 분기",
    description:
      "서버에서 상품코드 존재 여부를 먼저 확인하고, 기존 상품이면 옵션 추가 모드로, 신규 상품이면 기본정보·이미지·옵션 등록 흐름으로 분기했습니다. 데이터 무결성 문제를 사전에 줄이는 데 초점을 두었습니다.",
  },
  {
    title: "상품 / 이미지 / 옵션 분리 저장",
    description:
      "상품 기본정보는 PRODUCT, 추가 이미지는 PRODUCT_IMAGE, 색상·용량·재고·추가금은 PRODUCT_DETAIL에 저장했습니다. 다건 이미지와 옵션을 반복 처리 가능한 구조로 구현했습니다.",
  },
  {
    title: "기존 옵션 중복 시 재고 증가 처리",
    description:
      "동일 상품의 같은 색상/용량 옵션이 이미 있으면 INSERT 대신 UPDATE로 재고를 증가시켰습니다. 관리자가 옵션 존재 여부를 직접 확인하지 않아도 재고 보충 흐름으로 처리되도록 설계했습니다.",
  },
  {
    title: "상품 상세 조회 데이터 통합 처리",
    description:
      "상품 기본정보, 옵션 목록, 추가 이미지, 가격 정보를 데이터 성격별 쿼리로 분리해 조회했습니다. 결과를 조합해 상세 페이지에서 옵션 선택에 따라 가격·재고·이미지가 반영되도록 구성했습니다.",
  },
  {
    title: "FrontController 기반 MVC2 구조",
    description:
      "서버 구동 시 properties 기반 URL-Command 매핑을 초기화하고, 요청 URI에 맞는 Command 객체를 실행했습니다. JSP는 View, Controller는 흐름 제어, DAO는 DB 접근으로 역할을 분리했습니다.",
  },
];

const CORE_ROLE_ITEMS = [
  "상품 등록과 옵션 추가 흐름 설계",
  "상품·이미지·옵션 분리 저장 구조 구현",
  "동일 옵션 재고 증가 로직 구현",
] as const;

const LEARNINGS = [
  "JSP/Servlet MVC2 구조와 FrontController 패턴 이해",
  "DAO/DTO 기반 데이터 처리 흐름 학습",
  "상품 옵션처럼 변동성이 큰 데이터를 별도 테이블로 분리하는 설계의 중요성 학습",
  "단순 오류 방지가 아니라 관리자 업무 흐름을 고려한 비즈니스 로직 설계 경험",
  "DB 설계가 화면 UX와 서비스 흐름에 직접 영향을 준다는 점 체감",
] as const;

export function ShoppingMallCaseStudy() {
  return (
    <div>
      <header className="border-b border-border pb-12 sm:pb-14">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          JSP/Servlet 기반 휴대폰 쇼핑몰 서비스
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          DeviceMarket 쇼핑몰
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          상품 등록, 옵션 관리, 재고 처리, 상품 상세 조회 흐름을 담당하며
          상품·옵션·이미지를 분리한 데이터 구조를 기반으로 옵션별 가격과 재고를
          관리했습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {HERO_TAGS.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>
        <MetaInfoGrid rows={META_ROWS} />
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {CORE_ROLE_ITEMS.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-accent/15 bg-accent/4 p-4 text-sm font-medium leading-relaxed text-foreground/90 shadow-sm sm:p-5"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            GitHub 보기
          </Link>
        </div>
      </header>

      <div className="divide-y divide-border">
        <PageSection
          id="overview"
          title="프로젝트 개요"
          subtitle="운영/배포보다 상품 옵션 설계와 비즈니스 로직에 초점을 둔 팀 프로젝트입니다."
        >
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              DeviceMarket은 전자기기 상품을 등록하고, 색상·용량 같은 옵션별
              가격과 재고를 관리할 수 있도록 만든 쇼핑몰 서비스입니다.
            </p>
            <p>
              저는 상품 관리 기능 전반을 담당하며 상품 기본정보, 옵션, 이미지가
              함께 등록·조회되는 흐름을 설계하고 구현했습니다.
            </p>
            <p>
              단순 CRUD 구현보다 관리자 입장에서 상품코드 중복 여부를 확인하고,
              기존 상품에는 옵션만 추가하거나 동일 옵션이면 재고를 증가시키는
              업무 흐름을 코드로 표현하는 데 집중했습니다.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="text-sm font-semibold text-foreground">
              기술 스택
            </h3>
            <p className="mt-1 text-sm text-muted">
              JSP/Servlet 기반 MVC2 구조로 구성했습니다.
            </p>
            <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <TechStackBlock
                heading="Frontend"
                items={["JSP", "HTML5", "CSS3", "JavaScript"]}
              />
              <TechStackBlock
                heading="Backend"
                items={["Java", "Servlet", "JDBC", "DAO/DTO"]}
              />
              <TechStackBlock heading="Database" items={["Oracle DB"]} />
              <TechStackBlock
                heading="Architecture"
                items={[
                  "MVC2",
                  "FrontController Pattern",
                  "Command Pattern",
                ]}
              />
              <TechStackBlock heading="Tooling" items={["Eclipse", "GitHub"]} />
            </div>
          </div>
        </PageSection>

        <PageSection
          id="problem"
          title="문제 정의"
          subtitle="용량부터 색상까지 다양한 휴대폰 옵션을 어떻게 관리할 것인가?"
        >
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              휴대폰 쇼핑몰은 같은 상품이라도 색상과 저장용량에 따라 가격과
              재고가 달라집니다. 단일 상품 테이블만으로 관리하면 옵션 조합이
              늘어날수록 재고 관리와 상세 조회 로직이 복잡해집니다.
            </p>
            <p>
              따라서 상품 기본정보, 옵션, 이미지를 분리해 관리하고, 관리자
              입장에서는 기존 상품에 옵션만 추가하거나 동일 옵션 등록 시 재고를
              증가시키는 흐름이 필요하다고 판단했습니다.
            </p>
          </div>
        </PageSection>

        <PageSection
          id="db-design"
          title="DB 설계"
          subtitle="상품·옵션·이미지를 분리해 옵션 단위 장바구니/주문 흐름까지 이어지도록 설계했습니다."
        >
          <ProjectImage
            src={SHOPPING_DB_IMAGE}
            alt="DeviceMarket 쇼핑몰 ERD"
            caption="상품·옵션·이미지·장바구니·주문 흐름을 분리한 ERD"
            aspectRatio="wide"
            className="mb-10"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard
              title="PRODUCT"
              description="상품명, 브랜드, 대표 이미지, 기본 가격 등 공통 상품 정보를 저장합니다."
            />
            <FeatureCard
              title="PRODUCT_DETAIL"
              description="색상, 저장용량, 옵션별 재고, 추가금을 관리합니다. 장바구니와 주문은 옵션 단위를 기준으로 연결됩니다."
            />
            <FeatureCard
              title="PRODUCT_IMAGE"
              description="상품별 추가 이미지를 별도 테이블에 저장해 상품 기본정보와 다건 이미지를 분리했습니다."
            />
            <FeatureCard
              title="CART / ORDER_DETAIL"
              description="OPTION_ID를 기준으로 연결해 사용자가 선택한 구체적인 옵션 단위로 장바구니와 주문 흐름을 처리합니다."
            />
          </div>
        </PageSection>

        <PageSection
          id="features"
          title="주요 담당 기능"
          subtitle="상품 옵션 관리 시스템을 중심으로 담당 범위를 정리했습니다."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURE_CARDS.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          id="implementation"
          title="구현 구조"
          subtitle="MVC2, FrontController, DAO/DTO를 기준으로 역할을 분리했습니다."
        >
          <div className="space-y-4">
            <DetailAccordionItem title="FrontController와 Command 매핑">
              <p>
                서버 구동 시 properties 파일을 읽어 URL과 Command 객체의 매핑을
                초기화했습니다. 요청 URI에 해당하는 Command를 찾아 실행하고,
                결과에 따라 forward 또는 redirect 흐름으로 분기했습니다.
              </p>
              <p>
                이 구조를 통해 Servlet이 직접 모든 분기 처리를 갖지 않도록 하고,
                기능별 Command에 흐름 제어 책임을 나눴습니다.
              </p>
            </DetailAccordionItem>
            <DetailAccordionItem title="DAO/DTO 기반 데이터 처리">
              <p>
                JSP는 화면 표현, Command는 요청 흐름, DAO는 SQL 실행, DTO는 데이터
                전달 역할을 맡도록 분리했습니다. 상품 상세 조회에서는 상품,
                옵션, 이미지 데이터를 각각 조회한 뒤 화면에서 사용할 형태로
                조합했습니다.
              </p>
            </DetailAccordionItem>
          </div>
        </PageSection>

        <PageSection
          id="troubleshooting"
          title="트러블슈팅"
          subtitle="상품 옵션 관리와 관리자 등록 흐름에서 겪은 대표 이슈입니다."
        >
          <div className="space-y-9">
            <TroubleshootBlock
              title="옵션 조회 정렬 문제"
              problem="용량 값이 문자열로 저장되어 일반 ORDER BY 사용 시 1TB, 256GB, 512GB 순서가 의도와 다르게 노출되었습니다."
              cause="숫자처럼 보이는 값도 DB에서는 문자열 기준으로 정렬되었기 때문에 사용자 기준의 용량 순서와 달라졌습니다."
              solution="SQL CASE WHEN으로 256GB, 512GB, 1TB 순서 우선순위를 명시해 옵션 목록이 의도한 순서대로 조회되도록 조정했습니다."
              learning="데이터 타입과 정렬 기준은 화면 UX에 직접 영향을 주며, 문자열 데이터라도 서비스 관점의 정렬 규칙을 SQL에 명확히 반영해야 한다는 점을 배웠습니다."
            />
            <TroubleshootBlock
              title="상품코드 중복 등록 문제"
              problem="이미 존재하는 상품코드로 등록할 경우 중복 상품 데이터가 생길 수 있었습니다."
              cause="등록 전에 상품코드 존재 여부를 확인하지 않고 INSERT 흐름으로만 처리하면 같은 상품이 여러 번 등록될 수 있었습니다."
              solution="서버에서 상품코드 중복 여부를 먼저 조회하고, 신규 등록과 옵션 추가 흐름으로 분기했습니다."
              learning="데이터 무결성을 유지하려면 화면 입력값을 그대로 저장하기보다 서버에서 현재 데이터 상태를 확인하고 업무 흐름에 맞게 분기해야 한다는 점을 경험했습니다."
            />
          </div>
        </PageSection>

        <PageSection
          id="learning"
          title="배운 점"
          subtitle="첫 MVC2 기반 팀 프로젝트에서 설계와 비즈니스 로직 중심으로 얻은 경험입니다."
        >
          <ul className="max-w-2xl list-inside list-disc space-y-2.5 text-sm leading-relaxed text-muted md:text-base">
            {LEARNINGS.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </PageSection>

        <PageSection id="closing" title="마무리">
          <div className="rounded-lg border border-border bg-surface p-6 text-sm leading-relaxed text-muted shadow-sm md:p-8 md:text-base">
            <p>
              DeviceMarket은 상품 옵션 관리처럼 쇼핑몰에서 자주 발생하는 데이터
              구조 문제를 직접 다뤄본 프로젝트입니다. 상품, 옵션, 이미지를
              분리하고 관리자 등록 흐름을 고려하면서 DB 설계가 화면 UX와 서비스
              로직에 어떻게 연결되는지 체감할 수 있었습니다.
            </p>
            <p className="mt-4">
              JobFinder가 배포와 운영 경험을 보여주는 프로젝트라면, DeviceMarket은
              MVC2 구조와 비즈니스 로직, 데이터 모델링 경험을 보여주는 프로젝트로
              정리했습니다.
            </p>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
