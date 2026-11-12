import type { Metadata } from "next";
import ServicePageLayout from "../_components/service-page-layout";
import FaqAccordion from "../_components/faq-accordion";

export const metadata: Metadata = {
  title: "미국 틱톡샵 체험단 운영 | 신제품 초기 리뷰 확보",
  description:
    "코스덕 유저 풀을 활용해 미국 틱톡샵 신제품의 초기 리뷰를 확보합니다. 체험단 캠페인 오픈, 유저 참여, 샵 리뷰 작성의 3단계로 진행됩니다.",
  alternates: { canonical: "/services/review-program" },
  openGraph: {
    title: "미국 틱톡샵 체험단 운영 | Cosduck",
    description: "코스덕 유저 풀로 틱톡샵 신제품 초기 리뷰를 확보합니다.",
    url: "https://cosduck.com/services/review-program",
  },
};

const ORANGE = "#F5A623";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "체험단 캠페인 오픈",
    desc: "신제품 출시 시 코스덕 솔루션으로 제품 체험단 캠페인을 엽니다. 브랜드가 원하는 참여 조건과 리뷰 가이드라인을 설정합니다.",
    detail: "캠페인 세팅에 1~2일 소요",
  },
  {
    num: "02",
    icon: "🛒",
    title: "코스덕 유저 참여",
    desc: "캠페인에 참여한 코스덕 유저들이 틱톡샵에서 직접 구매하고 제품을 사용합니다. 실구매 기반이므로 자연스러운 리뷰가 생성됩니다.",
    detail: "참여 모집 3~5일",
  },
  {
    num: "03",
    icon: "⭐",
    title: "샵 리뷰 작성",
    desc: "실사용 후기를 틱톡샵 리뷰로 남기고, 캠페인 현황도 투명하게 관리합니다. 리뷰 품질과 진행 상황을 실시간으로 확인할 수 있습니다.",
    detail: "리뷰 작성 완료까지 약 1~2주",
  },
];

const faqs = [
  {
    q: "체험단 참여 인원은 몇 명인가요?",
    a: "SKU당 최대 25명까지 참여 가능합니다. 브랜드 예산과 목표에 따라 유연하게 조정할 수 있습니다.",
  },
  {
    q: "리뷰 품질은 어떻게 관리하나요?",
    a: "코스덕 유저는 실제로 제품을 구매·사용한 후 솔직한 후기를 작성합니다. 가이드라인을 통해 리뷰 방향을 안내하되, 진정성 있는 리뷰를 유도합니다.",
  },
  {
    q: "진행 기간은 얼마나 걸리나요?",
    a: "캠페인 오픈부터 리뷰 작성 완료까지 평균 2~3주가 소요됩니다. 참여 인원과 배송 기간에 따라 달라질 수 있습니다.",
  },
  {
    q: "미국 외 다른 국가에서도 가능한가요?",
    a: "현재 체험단은 미국(US) 틱톡샵을 중심으로 운영하고 있습니다. 인도네시아 등 다른 국가는 상담을 통해 안내드립니다.",
  },
  {
    q: "비용은 어떻게 산정되나요?",
    a: "참여 인원 수와 캠페인 규모에 따라 견적이 달라집니다. 상담을 통해 브랜드에 맞는 맞춤 견적을 안내드립니다.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "미국 틱톡샵 체험단 운영",
      provider: {
        "@type": "Organization",
        name: "Cosduck (코스덕)",
        url: "https://cosduck.com",
      },
      description:
        "코스덕 유저 풀을 활용해 미국 틱톡샵 신제품의 초기 리뷰를 확보하는 체험단 서비스입니다.",
      areaServed: ["US"],
      url: "https://cosduck.com/services/review-program",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "틱톡샵 체험단 운영", item: "https://cosduck.com/services/review-program" },
      ],
    },
  ],
};

export default function ReviewProgramPage() {
  return (
    <ServicePageLayout
      badge="Review Program"
      title="미국 틱톡샵 체험단 운영"
      intro="코스덕 유저 풀을 활용해 미국에 새로 진출한 K-뷰티 브랜드의 틱톡샵 초기 리뷰를 확보합니다. 실구매 기반 체험단이므로 자연스럽고 신뢰도 높은 리뷰가 쌓이며, 신제품 런칭 초기 전환율 향상에 효과적입니다."
      breadcrumbLabel="틱톡샵 체험단 운영"
      jsonLd={jsonLd}
    >
      {/* 진행 3단계 */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          진행 3단계
        </h2>
        <p className="text-sm text-gray-500 mb-8">캠페인 오픈부터 리뷰 작성까지 3단계로 진행됩니다.</p>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.num} className="border border-gray-200 rounded-xl p-6 bg-white text-center">
              <span className="text-3xl mb-3 block">{s.icon}</span>
              <span
                className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold text-black mb-3"
                style={{ backgroundColor: `${ORANGE}20` }}
              >
                Step {s.num}
              </span>
              <h3 className="text-sm font-black text-black mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
              <span className="text-[10px] text-gray-400">{s.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 참여 조건 & 기간 */}
      <section className="mb-16">
        <h2
          className="text-xl md:text-2xl font-black text-black mb-2"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          참여 조건 및 기간
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <h3 className="text-sm font-black text-black mb-3">브랜드가 준비할 것</h3>
            <ul className="space-y-2">
              {[
                "틱톡샵에 등록된 상품",
                "체험단 참여 인원 수 결정",
                "리뷰 가이드라인 (선택)",
                "체험단용 할인코드 또는 샘플 예산",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                  <span style={{ color: ORANGE }} className="mt-0.5">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 bg-white">
            <h3 className="text-sm font-black text-black mb-3">전체 일정</h3>
            <ul className="space-y-2">
              {[
                { label: "캠페인 세팅", time: "1~2일" },
                { label: "유저 모집", time: "3~5일" },
                { label: "구매 및 사용", time: "5~7일" },
                { label: "리뷰 작성 완료", time: "캠페인 시작 후 약 2~3주" },
              ].map((item) => (
                <li key={item.label} className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="font-bold text-black">{item.time}</span>
                </li>
              ))}
            </ul>
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
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <p className="text-sm text-gray-600 leading-relaxed">
            체험단 비용은 참여 인원 수와 캠페인 규모에 따라 <strong>맞춤 견적</strong>으로 안내드립니다.
            소규모 테스트부터 대규모 캠페인까지 유연하게 진행할 수 있습니다.
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
        <p className="text-sm text-gray-500 mb-6">체험단 운영 관련 궁금한 점을 확인해 보세요.</p>
        <FaqAccordion items={faqs} />
      </section>
    </ServicePageLayout>
  );
}
