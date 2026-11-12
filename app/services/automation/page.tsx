import type { Metadata } from "next";
import ServicePageLayout from "../_components/service-page-layout";
import FaqAccordion from "../_components/faq-accordion";

export const metadata: Metadata = {
  title: "틱톡샵 크리에이터 섭외·운영 자동화 솔루션 | Cosduck",
  description:
    "인비테이션 자동 발송, 샘플 자동 수락, 가이드라인 자동 전달, CS 자동 처리, Shop Ads 예산 자동 조절 — 틱톡샵 반복 업무를 AI로 자동화합니다.",
  alternates: { canonical: "/services/automation" },
  openGraph: {
    title: "틱톡샵 크리에이터 섭외·운영 자동화 솔루션 | Cosduck",
    description: "틱톡샵 반복 업무를 AI로 자동화합니다.",
    url: "https://cosduck.com/services/automation",
  },
};

const ORANGE = "#F5A623";

const features = [
  {
    title: "인비테이션 자동 발송",
    manual: "담당자가 크리에이터를 직접 검색·선별하고 하나씩 초대",
    auto: "조건에 맞는 크리에이터에게 자동으로 대량 발송",
    stat: "주 최대 2만건",
  },
  {
    title: "샘플 자동 수락",
    manual: "매일 샘플 요청을 확인하고 수동 승인",
    auto: "조건 충족 시 즉시 자동 수락",
    stat: "주 최대 1,000건",
  },
  {
    title: "콘텐츠용 가이드라인 자동 전달",
    manual: "크리에이터에게 개별 메시지로 가이드 전달",
    auto: "샘플 수락과 동시에 브랜드 가이드라인 자동 발송",
    stat: "100% 전달률",
  },
  {
    title: "Customer Message 자동 CS처리",
    manual: "고객 문의를 매일 수동 확인·응대",
    auto: "AI가 고객 메시지를 분류하고 자동 응대",
    stat: "24시간 대응",
  },
  {
    title: "Shop Ads 예산 자동 조절",
    manual: "광고 성과를 매일 확인하며 수동 조정",
    auto: "ROAS 기반으로 예산을 자동 최적화",
    stat: "실시간 조절",
  },
];

const faqs = [
  {
    q: "자동화 솔루션만 단독으로 이용할 수 있나요?",
    a: "네, 입점 대행 없이 자동화 솔루션만 별도로 이용하실 수 있습니다. 이미 틱톡샵을 운영 중인 브랜드에게 적합합니다.",
  },
  {
    q: "비용은 어떻게 되나요?",
    a: "인비테이션 발송만 이용하실 경우 월 100만 원이며, IM Card 발송과 크리에이터 배치태깅까지 포함한 풀 패키지는 월 190만 원입니다. 그 외 맞춤 서비스는 상담을 통해 안내드립니다.",
  },
  {
    q: "크리에이터 풀은 어떻게 구축되나요?",
    a: "코스덕이 자체적으로 구축한 크리에이터 데이터베이스를 활용합니다. 미국 365,000명 이상, 인도네시아 474,000명 이상의 크리에이터 풀을 보유하고 있습니다.",
  },
  {
    q: "최소 계약 기간이 있나요?",
    a: "기본 계약 기간은 2개월 단위입니다.",
  },
  {
    q: "자동화 도입 후 효과는 언제부터 나타나나요?",
    a: "도입 즉시 반복 업무 시간이 줄어들며, 인비테이션·샘플 물량은 첫 주부터 크게 늘어납니다. 매출 성과는 브랜드와 상품에 따라 다르지만, 평균 4~6주 내에 가시적인 변화가 나타납니다.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "틱톡샵 크리에이터 섭외·운영 자동화 솔루션",
      provider: {
        "@type": "Organization",
        name: "Cosduck (코스덕)",
        url: "https://cosduck.com",
      },
      description:
        "인비테이션 자동 발송, 샘플 자동 수락, 가이드라인 자동 전달, CS 자동 처리, Shop Ads 예산 자동 조절 등 TikTok Shop 반복 업무를 AI로 자동화합니다.",
      areaServed: ["US", "ID"],
      url: "https://cosduck.com/services/automation",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "크리에이터 섭외·운영 자동화", item: "https://cosduck.com/services/automation" },
      ],
    },
  ],
};

export default function AutomationPage() {
  return (
    <ServicePageLayout
      badge="Automation"
      title="크리에이터 섭외·운영 자동화 솔루션"
      intro="틱톡샵 운영에서 가장 시간이 많이 드는 반복 업무 — 크리에이터 초대, 샘플 승인, 가이드라인 전달, CS 처리, 광고 예산 조정 — 를 AI가 자동으로 처리합니다. 수동 대행으로 쌓은 운영 노하우를 그대로 자동화한 솔루션입니다."
      breadcrumbLabel="크리에이터 섭외·운영 자동화"
      jsonLd={jsonLd}
    >
      {/* 자동화 기능 비교 */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          수동 vs 자동화
        </h2>
        <p className="text-sm text-gray-500 mb-8">5가지 핵심 업무를 자동화하여 운영 효율을 극대화합니다.</p>

        <div className="space-y-4">
          {features.map((f) => (
            <div key={f.title} className="border border-gray-200 rounded-xl p-5 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-black text-black">{f.title}</h3>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full text-black"
                  style={{ backgroundColor: `${ORANGE}20` }}
                >
                  {f.stat}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">수동</span>
                  <p className="text-xs text-gray-500 mt-1">{f.manual}</p>
                </div>
                <div className="rounded-lg p-3" style={{ backgroundColor: `${ORANGE}08` }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: ORANGE }}>자동화</span>
                  <p className="text-xs text-black mt-1 font-medium">{f.auto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 크리에이터 풀 */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          크리에이터 풀
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-6 bg-white text-center">
            <p className="text-3xl md:text-4xl font-black text-black" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              365K<span className="text-lg">+</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">미국 (US) 크리에이터</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 bg-white text-center">
            <p className="text-3xl md:text-4xl font-black text-black" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              474K<span className="text-lg">+</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">인도네시아 (ID) 크리에이터</p>
          </div>
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
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Basic</p>
            <p className="text-2xl font-black text-black mb-1">월 100만원</p>
            <p className="text-xs text-gray-500">인비테이션 발송 서비스</p>
          </div>
          <div className="rounded-xl p-6 border-2" style={{ borderColor: ORANGE, backgroundColor: `${ORANGE}08` }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: ORANGE }}>Full Package</p>
            <p className="text-2xl font-black text-black mb-1">월 190만원</p>
            <p className="text-xs text-gray-600">인비테이션 풀 패키지 (IM Card 발송 + 크리에이터 배치태깅 포함)</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          * 그 외 맞춤 서비스는 상담을 통해 안내드립니다.
        </p>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          자주 묻는 질문
        </h2>
        <p className="text-sm text-gray-500 mb-6">자동화 솔루션 관련 궁금한 점을 확인해 보세요.</p>
        <FaqAccordion items={faqs} />
      </section>
    </ServicePageLayout>
  );
}
