import type { Metadata } from "next";
import CaseLayout from "../_components/case-layout";

export const metadata: Metadata = {
  title: "미국 틱톡샵 4개월 만에 T5 달성한 색조 브랜드 사례 | Cosduck",
  description:
    "미국 진출 색조 브랜드가 코스덕과 함께 틱톡샵 런칭 4개월 만에 샵티어 T5를 달성한 과정을 공유합니다.",
  alternates: { canonical: "/cases/us-skincare-t5-in-4-months" },
  openGraph: {
    title: "미국 틱톡샵 4개월 만에 T5 달성 사례 | Cosduck",
    description: "색조 브랜드가 4개월 만에 샵티어 T5를 달성한 과정",
    url: "https://cosduck.com/cases/us-skincare-t5-in-4-months",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "미국 틱톡샵 4개월 만에 T5 달성한 색조 브랜드 사례",
      author: { "@type": "Organization", name: "Cosduck (코스덕)" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      description: "미국 진출 색조 브랜드가 코스덕과 함께 틱톡샵 런칭 4개월 만에 샵티어 T5를 달성한 과정",
      url: "https://cosduck.com/cases/us-skincare-t5-in-4-months",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "케이스 스터디", item: "https://cosduck.com/cases" },
        { "@type": "ListItem", position: 3, name: "4개월 만에 T5 달성", item: "https://cosduck.com/cases/us-skincare-t5-in-4-months" },
      ],
    },
  ],
};

const timeline = [
  { time: "런칭", desc: "TikTok Shop 오픈", detail: "계정 연동, 카테고리 인증, 상품 리스팅, FBT 입고까지 코스덕이 전 과정을 세팅했습니다." },
  { time: "2주차", desc: "샘플 주 500건 발송 시작", detail: "코스덕 자동화 솔루션으로 조건에 맞는 크리에이터에게 샘플을 대량 발송하며 어필리에이트 콘텐츠를 본격 확보했습니다." },
  { time: "1개월", desc: "어필리에이트 콘텐츠 광고 부스팅", detail: "크리에이터가 제작한 콘텐츠 중 성과가 좋은 영상을 Shop Ads로 부스팅하여 전환율을 높였습니다." },
  { time: "3개월", desc: "샵티어 T4 달성", detail: "꾸준한 샘플링과 광고 최적화로 T4 기준 매출을 돌파했습니다." },
  { time: "4개월", desc: "샵티어 T5 달성", detail: "인비테이션 물량 확대와 콘텐츠 광고 고도화로 T5에 진입했습니다.", highlight: true },
];

export default function CasePage() {
  return (
    <CaseLayout
      badge="Brand A · US"
      title="미국 틱톡샵 4개월 만에 T5 달성"
      summary="미국에 새로 진출한 색조 브랜드가 코스덕의 입점 대행과 자동화 솔루션을 활용하여, 틱톡샵 런칭 4개월 만에 최고 등급인 샵티어 T5를 달성한 사례입니다."
      jsonLd={jsonLd}
    >
      {/* 시작 시점 */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-black mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          시작 시점
        </h2>
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">시장</p>
              <p className="font-bold text-black">미국 (US)</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">카테고리</p>
              <p className="font-bold text-black">색조</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">초기 상태</p>
              <p className="font-bold text-black">틱톡샵 미개설 (신규 진출)</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              미국 시장에 처음 진출하는 K-뷰티 색조 브랜드로, 틱톡샵 계정이 없는 상태에서 시작했습니다.
              오프라인·아마존 위주로 판매하던 브랜드가 틱톡샵 채널을 새로 열며 코스덕에 운영을 맡겼습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 코스덕이 한 일 */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-black mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          코스덕이 한 일
        </h2>
        <p className="text-sm text-gray-500 mb-8">런칭부터 T5 달성까지 4개월간의 월별 진행 과정입니다.</p>

        <div className="space-y-4">
          {timeline.map((t) => (
            <div
              key={t.time}
              className="border rounded-xl p-5 bg-white"
              style={{ borderColor: t.highlight ? ORANGE : "#e5e7eb" }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 px-3 py-1 rounded-full text-xs font-black"
                  style={{
                    backgroundColor: t.highlight ? ORANGE : "#f3f4f6",
                    color: t.highlight ? "black" : "#6b7280",
                  }}
                >
                  {t.time}
                </span>
                <div>
                  <h3 className="text-sm font-black text-black mb-1">{t.desc}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 결과 */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-black mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          결과
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "달성 티어", value: "T5" },
            { label: "소요 기간", value: "4개월" },
            { label: "주간 샘플", value: "500건" },
          ].map((r) => (
            <div key={r.label} className="border border-gray-200 rounded-xl p-5 bg-white text-center">
              <p className="text-2xl md:text-3xl font-black text-black" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                {r.value}
              </p>
              <p className="text-xs text-gray-500 mt-1">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 시사점 */}
      <section className="mb-16">
        <div className="rounded-xl p-6 border-2" style={{ borderColor: ORANGE, backgroundColor: `${ORANGE}08` }}>
          <h2 className="text-sm font-black text-black mb-2">시사점</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            초기 세팅을 빠르게 완료하고, 샘플 대량 발송으로 어필리에이트 콘텐츠를 조기에 확보한 것이 핵심이었습니다.
            크리에이터 콘텐츠를 Shop Ads로 바로 전환하는 전략이 T4 → T5 단기 점프를 가능하게 했습니다.
          </p>
        </div>
      </section>
    </CaseLayout>
  );
}
