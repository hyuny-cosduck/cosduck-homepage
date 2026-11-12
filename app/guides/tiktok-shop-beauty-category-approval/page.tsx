import type { Metadata } from "next";
import GuideLayout from "../_components/guide-layout";

export const metadata: Metadata = {
  title: "틱톡샵 뷰티 카테고리 인증, 반려되는 이유와 해결법 | Cosduck",
  description:
    "틱톡샵 뷰티·스킨케어 카테고리 인증 심사에서 자주 반려되는 사유와 해결 방법을 정리했습니다. 실제 대행 경험을 바탕으로 작성했습니다.",
  alternates: { canonical: "/guides/tiktok-shop-beauty-category-approval" },
  openGraph: {
    title: "틱톡샵 뷰티 카테고리 인증 반려 해결법 | Cosduck",
    description: "카테고리 인증 반려 사유별 대응 방법을 실제 경험 기반으로 정리",
    url: "https://cosduck.com/guides/tiktok-shop-beauty-category-approval",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "틱톡샵 뷰티 카테고리 인증, 반려되는 이유와 해결법",
      author: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com", logo: "https://cosduck.com/cosduck-logo.png" },
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      description: "틱톡샵 뷰티·스킨케어 카테고리 인증 심사에서 자주 반려되는 사유와 해결 방법",
      url: "https://cosduck.com/guides/tiktok-shop-beauty-category-approval",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "가이드", item: "https://cosduck.com/guides" },
        { "@type": "ListItem", position: 3, name: "뷰티 카테고리 인증 해결법", item: "https://cosduck.com/guides/tiktok-shop-beauty-category-approval" },
      ],
    },
  ],
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-black text-black mb-3" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
        {title}
      </h2>
      <div className="text-sm text-gray-600 leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  );
}

export default function GuidePage() {
  return (
    <GuideLayout
      title="틱톡샵 뷰티 카테고리 인증, 반려되는 이유와 해결법"
      updatedAt="2026년 11월"
      tldr={[
        "뷰티 카테고리 인증은 FDA 등록 확인서, 성분표, 제품 사진이 핵심이며, 서류 불일치가 반려의 가장 흔한 원인입니다.",
        "반려 시 사유를 정확히 파악하고 해당 서류만 수정해서 재제출하면 대부분 3~5일 내 승인됩니다.",
        "저희가 대행한 브랜드 기준, 첫 제출 시 승인율이 약 70%이며, 나머지 30%도 1회 재제출로 해결됩니다.",
      ]}
      relatedService={{ href: "/services/setup", label: "틱톡샵 입점·초기세팅 대행 알아보기" }}
      jsonLd={jsonLd}
    >
      <Section title="뷰티 카테고리 인증이 왜 필요한가요?">
        <p>
          틱톡샵에서 화장품·스킨케어 제품을 판매하려면, 해당 카테고리에 대한 인증을 먼저 받아야 합니다.
          이 과정에서 제품의 안전성과 합법성을 증명하는 서류를 제출하며, 심사에 평균 3~5일이 소요됩니다.
        </p>
        <p>
          인증 없이는 상품을 리스팅할 수 없으므로, 입점 일정에서 이 단계의 소요 시간을 반드시 고려해야 합니다.
        </p>
      </Section>

      <Section title="어떤 서류를 제출해야 하나요?">
        <p>미국 틱톡샵 뷰티 카테고리 기준으로 아래 서류가 필요합니다.</p>
        <div className="space-y-2 mt-2">
          {[
            { doc: "FDA 시설 등록 확인서", desc: "제조 또는 수입 시설의 FDA 등록 번호가 확인되는 서류입니다." },
            { doc: "제품 성분표 (INCI list)", desc: "전성분이 표기된 목록으로, FDA 등록 내용과 일치해야 합니다." },
            { doc: "제품 라벨 사진", desc: "실제 제품 패키지에 인쇄된 라벨 사진으로, 성분표와 내용이 일치해야 합니다." },
            { doc: "상표등록증 (선택)", desc: "브랜드 보호를 위해 권장되며, 제출 시 브랜드 셀러 배지를 받을 수 있습니다." },
          ].map((item) => (
            <div key={item.doc} className="flex items-start gap-2">
              <span className="mt-0.5" style={{ color: ORANGE }}>✦</span>
              <div>
                <span className="font-bold text-black">{item.doc}</span>
                <span className="text-gray-500"> — {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="반려되는 주요 원인은 무엇인가요?">
        <p>저희가 수십 개 브랜드의 인증을 대행하며 파악한 주요 반려 사유입니다.</p>
        <div className="border border-gray-200 rounded-xl overflow-hidden mt-2">
          <table className="w-full text-xs">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-bold text-black">반려 사유</th>
                <th className="text-left px-4 py-3 font-bold text-black">빈도</th>
                <th className="text-left px-4 py-3 font-bold text-black">해결 방법</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["FDA 등록 번호와 제출 서류 불일치", "가장 흔함", "FDA 사이트에서 최신 등록 정보를 다운로드하여 재제출"],
                ["성분표(INCI)와 라벨 사진 불일치", "흔함", "라벨에 표기된 성분과 INCI list를 정확히 일치시킨 후 재제출"],
                ["제품 사진 품질 미달", "간헐적", "고해상도 사진으로 교체, 라벨이 읽힐 수 있도록 촬영"],
                ["카테고리 분류 오류", "간헐적", "제품 유형에 맞는 세부 카테고리를 정확히 선택"],
                ["서류 유효기간 만료", "드물지만 치명적", "갱신된 서류로 교체 후 재제출"],
              ].map(([reason, freq, fix]) => (
                <tr key={reason}>
                  <td className="px-4 py-2.5 font-medium text-black">{reason}</td>
                  <td className="px-4 py-2.5 text-gray-500">{freq}</td>
                  <td className="px-4 py-2.5 text-gray-500">{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="반려 후 어떻게 대응해야 하나요?">
        <p>
          반려되더라도 당황할 필요 없습니다. Seller Center에서 반려 사유를 확인하고, 해당 서류만 수정해서 재제출하면 됩니다.
          대부분 1회 재제출로 승인되며, 재심사에도 3~5일이 소요됩니다.
        </p>
        <p>
          저희가 대행한 브랜드 기준, 첫 제출 승인율은 약 70%입니다. 나머지 30%도 반려 사유를 정확히 파악하고 수정하면
          1회 재제출로 모두 승인되었습니다. 같은 사유로 2회 이상 반려된 경우는 없었습니다.
        </p>
      </Section>

      <Section title="인증을 빠르게 통과하려면?">
        <p>
          핵심은 <strong>서류 간 일관성</strong>입니다. FDA 등록 내용, INCI 성분표, 제품 라벨 사진이 모두 일치해야 합니다.
          특히 성분 순서나 표기법(영문명 vs 학명)이 서류마다 다르면 반려될 수 있으니, 제출 전에 세 서류를 나란히 놓고 대조하는 것을 권장합니다.
        </p>
        <p>
          카테고리 인증에 시간을 쓰고 싶지 않다면, 코스덕에 입점 대행을 맡기시면 됩니다.
          반려 사유별 대응 매뉴얼을 보유하고 있어 빠르게 처리해 드립니다.
        </p>
      </Section>
    </GuideLayout>
  );
}
