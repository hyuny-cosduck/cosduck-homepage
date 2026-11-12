import type { Metadata } from "next";
import CaseLayout from "../_components/case-layout";

export const metadata: Metadata = {
  title: "미국 틱톡샵 주간 샘플 1,000건 달성한 스킨케어 브랜드 사례 | Cosduck",
  description:
    "미국 진출 스킨케어 브랜드가 6개월간 단계적 자동화를 통해 주간 샘플 인입 1,000건을 달성한 과정을 공유합니다.",
  alternates: { canonical: "/cases/us-cosmetics-1000-samples-weekly" },
  openGraph: {
    title: "주간 샘플 1,000건 달성 사례 | Cosduck",
    description: "6개월간 단계적 자동화로 주간 샘플 인입 1,000건 달성",
    url: "https://cosduck.com/cases/us-cosmetics-1000-samples-weekly",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "미국 틱톡샵 주간 샘플 1,000건 달성한 스킨케어 브랜드 사례",
      author: { "@type": "Organization", name: "Cosduck (코스덕)" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      description: "6개월간 단계적 자동화를 통해 주간 샘플 인입 1,000건을 달성한 과정",
      url: "https://cosduck.com/cases/us-cosmetics-1000-samples-weekly",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "케이스 스터디", item: "https://cosduck.com/cases" },
        { "@type": "ListItem", position: 3, name: "주간 샘플 1,000건", item: "https://cosduck.com/cases/us-cosmetics-1000-samples-weekly" },
      ],
    },
  ],
};

const timeline = [
  { time: "런칭", desc: "TikTok Shop 오픈", detail: "코스덕이 초기 세팅을 완료하고 운영을 시작했습니다." },
  { time: "2주차", desc: "체험단 60건 진행", detail: "코스덕 유저 풀로 체험단 60건을 진행하여 초기 리뷰 기반을 마련했습니다." },
  { time: "4주차", desc: "인비테이션 주 7,000건 발송", detail: "자동화 솔루션으로 인비테이션을 대량 발송하며 크리에이터 네트워크를 확장했습니다." },
  { time: "3개월", desc: "샘플 주 200건 + 체험단 50건 진행", detail: "인비테이션 효과로 샘플 요청이 증가하면서 체험단도 병행하여 콘텐츠 볼륨을 키웠습니다." },
  { time: "4개월", desc: "인비테이션 주 2만건 발송", detail: "자동화 물량을 대폭 확대하여 크리에이터 유입을 가속했습니다." },
  { time: "6개월", desc: "샘플 주 1,000건 인입", detail: "크리에이터가 자발적으로 샘플을 신청하는 선순환 구조가 만들어졌습니다.", highlight: true },
];

export default function CasePage() {
  return (
    <CaseLayout
      badge="Brand C · US"
      title="6개월 만에 주간 샘플 1,000건 인입"
      summary="미국 진출 스킨케어 브랜드가 체험단과 인비테이션 자동화를 단계적으로 확대하여, 6개월 만에 크리에이터 샘플 신청이 주 1,000건에 도달한 사례입니다. 자동화 물량을 점진적으로 키우며 자발적 샘플 신청이 발생하는 선순환 구조를 만들었습니다."
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
              <p className="font-bold text-black">스킨케어</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">초기 상태</p>
              <p className="font-bold text-black">틱톡샵 신규 런칭</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500 leading-relaxed">
              미국 시장에 새로 진출한 스킨케어 브랜드로, 크리에이터 네트워크가 전혀 없는 상태에서 시작했습니다.
              장기적으로 크리에이터가 자발적으로 찾아오는 구조를 만드는 것이 목표였습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 코스덕이 한 일 */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-black mb-2" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          코스덕이 한 일
        </h2>
        <p className="text-sm text-gray-500 mb-8">런칭부터 주간 샘플 1,000건까지 6개월간의 진행 과정입니다.</p>

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
            { label: "주간 샘플 인입", value: "1,000건" },
            { label: "소요 기간", value: "6개월" },
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
            인비테이션 물량을 단계적으로 키우면서 브랜드 인지도가 쌓이자, 크리에이터가 직접 샘플을 신청하는 선순환 구조가 형성되었습니다.
            단기 성과보다 장기 크리에이터 네트워크 구축에 초점을 맞춘 전략이 주효했습니다.
          </p>
        </div>
      </section>
    </CaseLayout>
  );
}
