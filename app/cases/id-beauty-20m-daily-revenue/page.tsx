import type { Metadata } from "next";
import CaseLayout from "../_components/case-layout";

export const metadata: Metadata = {
  title: "인도네시아 틱톡샵 일 매출 2,000만원 돌파 사례 | Cosduck",
  description:
    "인도네시아 틱톡샵에 진출한 스킨케어 브랜드가 인비테이션 자동화를 활용해 7개월 만에 일 매출 2,000만원을 돌파한 사례입니다.",
  alternates: { canonical: "/cases/id-beauty-20m-daily-revenue" },
  openGraph: {
    title: "인도네시아 틱톡샵 일 매출 2,000만원 돌파 사례 | Cosduck",
    description: "인비테이션 자동화로 7개월 만에 일 매출 2,000만원 돌파",
    url: "https://cosduck.com/cases/id-beauty-20m-daily-revenue",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "인도네시아 틱톡샵 일 매출 2,000만원 돌파 사례",
      author: { "@type": "Organization", name: "Cosduck (코스덕)" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      description: "인비테이션 자동화를 활용해 7개월 만에 일 매출 2,000만원을 돌파한 과정",
      url: "https://cosduck.com/cases/id-beauty-20m-daily-revenue",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "케이스 스터디", item: "https://cosduck.com/cases" },
        { "@type": "ListItem", position: 3, name: "일 매출 2,000만원 돌파", item: "https://cosduck.com/cases/id-beauty-20m-daily-revenue" },
      ],
    },
  ],
};

const timeline = [
  { time: "런칭", desc: "TikTok Shop 오픈 (인도네시아)", detail: "인도네시아 틱톡샵 계정을 개설하고 현지 시장에 맞는 상품 리스팅을 완료했습니다." },
  { time: "초기", desc: "인비테이션 주 2만건 발송", detail: "인도네시아 크리에이터 풀(474K+)을 활용하여 초기부터 인비테이션을 대량 발송하며 빠르게 크리에이터를 확보했습니다." },
  { time: "7개월", desc: "일 매출 2,000만원 돌파", detail: "크리에이터 어필리에이트 콘텐츠가 꾸준히 누적되면서 일 매출 2,000만원을 돌파했습니다.", highlight: true },
];

export default function CasePage() {
  return (
    <CaseLayout
      badge="Brand D · Indonesia"
      title="인도네시아 틱톡샵 일 매출 2,000만원 돌파"
      summary="인도네시아에 진출한 스킨케어 브랜드가 코스덕의 인비테이션 자동화를 활용하여, 7개월 만에 일 매출 2,000만원을 돌파한 사례입니다. 코스덕의 인도네시아 크리에이터 풀 474,000명 이상을 적극 활용한 것이 핵심이었습니다."
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
              <p className="font-bold text-black">인도네시아 (ID)</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">카테고리</p>
              <p className="font-bold text-black">스킨케어</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">초기 상태</p>
              <p className="font-bold text-black">인도네시아 틱톡샵 신규 진출</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              인도네시아 시장에 처음 진출하는 K-스킨케어 브랜드로, 현지 크리에이터 네트워크가 없는 상태에서 시작했습니다.
              인도네시아 틱톡샵의 빠른 성장세를 활용하여 조기에 시장을 선점하는 것이 목표였습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 코스덕이 한 일 */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-black mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          코스덕이 한 일
        </h2>
        <p className="text-sm text-gray-500 mb-8">런칭부터 일 매출 2,000만원까지 7개월간의 진행 과정입니다.</p>

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
            { label: "일 매출", value: "2,000만원+" },
            { label: "소요 기간", value: "7개월" },
            { label: "주간 인비테이션", value: "2만건" },
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
            인도네시아는 크리에이터 풀이 크고 반응 속도가 빠른 시장입니다.
            초기부터 인비테이션을 주 2만건 규모로 대량 발송하며 크리에이터를 빠르게 확보한 것이 일 매출 2,000만원 돌파의 핵심이었습니다.
          </p>
        </div>
      </section>
    </CaseLayout>
  );
}
