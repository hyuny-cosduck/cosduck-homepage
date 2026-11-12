import type { Metadata } from "next";
import CaseLayout from "../_components/case-layout";

export const metadata: Metadata = {
  title: "미국 틱톡샵 6주 만에 T4 달성한 색조 브랜드 사례 | Cosduck",
  description:
    "미국 진출 색조 브랜드가 체험단과 인비테이션 자동화를 활용해 틱톡샵 6주 만에 샵티어 T4를 달성한 사례입니다.",
  alternates: { canonical: "/cases/us-beauty-t4-in-6-weeks" },
  openGraph: {
    title: "미국 틱톡샵 6주 만에 T4 달성 사례 | Cosduck",
    description: "체험단 + 자동화로 6주 만에 샵티어 T4를 달성한 과정",
    url: "https://cosduck.com/cases/us-beauty-t4-in-6-weeks",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "미국 틱톡샵 6주 만에 T4 달성한 색조 브랜드 사례",
      author: { "@type": "Organization", name: "Cosduck (코스덕)" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      description: "체험단과 인비테이션 자동화를 활용해 틱톡샵 6주 만에 샵티어 T4를 달성한 사례",
      url: "https://cosduck.com/cases/us-beauty-t4-in-6-weeks",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "케이스 스터디", item: "https://cosduck.com/cases" },
        { "@type": "ListItem", position: 3, name: "6주 만에 T4 달성", item: "https://cosduck.com/cases/us-beauty-t4-in-6-weeks" },
      ],
    },
  ],
};

const timeline = [
  { time: "런칭", desc: "TikTok Shop 오픈", detail: "코스덕이 계정 세팅부터 리스팅까지 초기 입점을 완료했습니다." },
  { time: "2주차", desc: "체험단 100건 진행", detail: "코스덕 유저 풀을 통해 체험단 100건을 진행하여 초기 리뷰를 빠르게 확보했습니다." },
  { time: "4주차", desc: "인비테이션 주 7,000건 발송", detail: "자동화 솔루션으로 인비테이션을 대량 발송하며 크리에이터 어필리에이트를 본격 확대했습니다." },
  { time: "5주차", desc: "샘플 주 500건 발송", detail: "인비테이션에 반응한 크리에이터에게 샘플을 자동 발송하여 콘텐츠 생산을 가속했습니다." },
  { time: "6주차", desc: "샵티어 T4 달성", detail: "체험단 리뷰 + 크리에이터 콘텐츠의 시너지로 6주 만에 T4를 달성했습니다.", highlight: true },
];

export default function CasePage() {
  return (
    <CaseLayout
      badge="Brand B · US"
      title="미국 틱톡샵 6주 만에 T4 달성"
      summary="미국 진출 색조 브랜드가 코스덕의 체험단과 인비테이션 자동화를 동시에 활용하여, 틱톡샵 런칭 6주 만에 샵티어 T4를 달성한 사례입니다. 체험단으로 초기 리뷰를 확보하고, 자동화로 크리에이터 볼륨을 빠르게 키운 전략이 핵심이었습니다."
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
              <p className="font-bold text-black">틱톡샵 신규 런칭</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              틱톡샵을 처음 오픈하는 색조 브랜드로, 리뷰가 전혀 없는 상태에서 시작했습니다.
              초기 신뢰도 확보와 빠른 매출 성장이 핵심 과제였습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 코스덕이 한 일 */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-black mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          코스덕이 한 일
        </h2>
        <p className="text-sm text-gray-500 mb-8">런칭부터 T4 달성까지 6주간의 주별 진행 과정입니다.</p>

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
            { label: "달성 티어", value: "T4" },
            { label: "소요 기간", value: "6주" },
            { label: "체험단", value: "100건" },
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
            체험단으로 초기 리뷰를 빠르게 깔고, 동시에 인비테이션 자동화로 크리에이터 볼륨을 키운 병렬 전략이 6주 만의 T4 달성을 가능하게 했습니다.
          </p>
        </div>
      </section>
    </CaseLayout>
  );
}
