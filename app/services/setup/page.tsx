import type { Metadata } from "next";
import ServicePageLayout from "../_components/service-page-layout";
import FaqAccordion from "../_components/faq-accordion";

export const metadata: Metadata = {
  title: "틱톡샵 입점·초기세팅 대행 | 미국·인도네시아 | Cosduck",
  description:
    "계정 연동부터 카테고리 인증, 상품 리스팅, FBT 입고, 초기 리뷰 부스팅까지 — 틱톡샵 입점 전 과정을 코스덕이 대행합니다. 미국·인도네시아 지원.",
  alternates: { canonical: "/services/setup" },
  openGraph: {
    title: "틱톡샵 입점·초기세팅 대행 | Cosduck",
    description: "틱톡샵 입점 전 과정을 코스덕이 대행합니다.",
    url: "https://cosduck.com/services/setup",
  },
};

const ORANGE = "#F5A623";

const steps = [
  {
    num: "01",
    title: "계정 연동",
    duration: "1~2일",
    prep: "TikTok 비즈니스 계정 정보",
    desc: "TikTok Shop Seller Center 계정을 생성하고 비즈니스 정보를 연동합니다.",
  },
  {
    num: "02",
    title: "카테고리 인증 및 상품 리스팅",
    duration: "3~5일",
    prep: "제품 사진, 상세 정보, FDA 등록서류(미국)",
    desc: "판매할 카테고리의 인증 절차를 진행하고, 상품 정보를 등록합니다.",
  },
  {
    num: "03",
    title: "FBT Inbound Order",
    duration: "7~14일",
    prep: "재고 및 물류 정보",
    desc: "Fulfilled by TikTok 물류를 활용하기 위한 입고 절차를 진행합니다.",
  },
  {
    num: "04",
    title: "Shop Ads 세팅 및 운영",
    duration: "2~3일",
    prep: "광고 예산 기준",
    desc: "Shop Ads 캠페인을 세팅하고 초기 운영 전략을 수립합니다.",
  },
  {
    num: "05",
    title: "데일리 CS 처리 세팅",
    duration: "1일",
    prep: "CS 응대 가이드라인",
    desc: "Customer Message를 통한 고객 문의 처리 체계를 구축합니다.",
  },
  {
    num: "06",
    title: "상시할인가 세팅",
    duration: "1일",
    prep: "할인율 기준",
    desc: "경쟁력 있는 가격을 유지하기 위한 상시 할인가를 설정합니다.",
  },
  {
    num: "07",
    title: "IPPC 서류 등록 및 리셀러 단속",
    duration: "3~7일",
    prep: "IPPC 서류",
    desc: "지식재산권 보호를 위한 IPPC 등록과 무단 리셀러 단속 체계를 마련합니다.",
  },
  {
    num: "08",
    title: "초기 리뷰 부스팅",
    duration: "2~4주",
    prep: "샘플 제품",
    desc: "체험단과 샘플링을 활용하여 신뢰도 높은 초기 리뷰를 확보합니다.",
  },
];

const faqs = [
  {
    q: "어떤 국가에서 입점이 가능한가요?",
    a: "현재 미국(US)과 인도네시아(ID) 틱톡샵 입점을 지원하고 있으며, 그 외 국가도 상담을 통해 안내드립니다.",
  },
  {
    q: "이미 계정이 있는 경우에도 세팅 대행이 가능한가요?",
    a: "네, 기존 계정의 카테고리 인증, 리스팅 보완, Ads 세팅 등 부분 대행도 가능합니다.",
  },
  {
    q: "FBT 입고까지 총 얼마나 걸리나요?",
    a: "계정 연동부터 FBT 입고 완료까지 평균 2~3주가 소요됩니다. 서류 준비 상황에 따라 달라질 수 있습니다.",
  },
  {
    q: "비용은 어떻게 산정되나요?",
    a: "입점 범위와 필요한 세팅 항목에 따라 견적이 달라집니다. 상담을 통해 브랜드 상황에 맞는 맞춤 견적을 안내드립니다.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "틱톡샵 입점·초기세팅 대행",
      provider: {
        "@type": "Organization",
        name: "Cosduck (코스덕)",
        url: "https://cosduck.com",
      },
      description:
        "TikTok Shop 계정 연동, 카테고리 인증, 상품 리스팅, FBT 입고, Shop Ads 세팅, 초기 리뷰 부스팅까지 입점 전 과정을 대행합니다.",
      areaServed: ["US", "ID"],
      url: "https://cosduck.com/services/setup",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "틱톡샵 입점·초기세팅 대행", item: "https://cosduck.com/services/setup" },
      ],
    },
  ],
};

export default function SetupPage() {
  return (
    <ServicePageLayout
      badge="Setup Service"
      title="틱톡샵 입점·초기세팅 대행"
      intro="틱톡샵에 처음 진출하는 K-뷰티 브랜드를 위해, 계정 연동부터 카테고리 인증, 상품 리스팅, FBT 물류 입고, 초기 리뷰 확보까지 입점에 필요한 모든 과정을 코스덕이 대행합니다. 미국과 인도네시아 틱톡샵을 지원합니다."
      breadcrumbLabel="틱톡샵 입점·초기세팅 대행"
      jsonLd={jsonLd}
    >
      {/* 진행 과정 */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          진행 과정
        </h2>
        <p className="text-sm text-gray-500 mb-8">계정 생성부터 초기 리뷰 확보까지 8단계로 진행됩니다.</p>

        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.num} className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-black"
                  style={{ backgroundColor: `${ORANGE}20` }}
                >
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-black text-black mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-3 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                      소요: {s.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                      준비: {s.prep}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 비용 구조 */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          비용 구조
        </h2>
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">
            입점 대행 비용은 브랜드의 상황과 필요한 세팅 범위에 따라 <strong>맞춤 견적</strong>으로 안내드립니다.
            계정 연동만 필요한 경우부터 FBT 입고, 초기 리뷰까지 포함한 풀 패키지까지 유연하게 구성할 수 있습니다.
          </p>
          <p className="text-xs text-gray-400 mt-3">
            * 정확한 견적은 상담을 통해 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          자주 묻는 질문
        </h2>
        <p className="text-sm text-gray-500 mb-6">입점·초기세팅 관련 궁금한 점을 확인해 보세요.</p>
        <FaqAccordion items={faqs} />
      </section>
    </ServicePageLayout>
  );
}
