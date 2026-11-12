import type { Metadata } from "next";
import GuideLayout from "../_components/guide-layout";

export const metadata: Metadata = {
  title: "미국 틱톡샵 입점 방법: 한국 브랜드가 준비해야 할 것 총정리 | Cosduck",
  description:
    "한국 K-뷰티 브랜드가 미국 틱톡샵에 입점하기 위해 준비해야 할 서류, 절차, 소요 기간을 단계별로 정리했습니다. 실제 운영 경험을 바탕으로 작성했습니다.",
  alternates: { canonical: "/guides/us-tiktok-shop-setup" },
  openGraph: {
    title: "미국 틱톡샵 입점 방법 총정리 | Cosduck",
    description: "한국 브랜드의 미국 틱톡샵 입점 절차와 준비 서류를 단계별로 정리",
    url: "https://cosduck.com/guides/us-tiktok-shop-setup",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "미국 틱톡샵 입점 방법: 한국 브랜드가 준비해야 할 것 총정리",
      author: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com", logo: "https://cosduck.com/cosduck-logo.png" },
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      description: "한국 K-뷰티 브랜드가 미국 틱톡샵에 입점하기 위해 준비해야 할 서류, 절차, 소요 기간을 단계별로 정리",
      url: "https://cosduck.com/guides/us-tiktok-shop-setup",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "가이드", item: "https://cosduck.com/guides" },
        { "@type": "ListItem", position: 3, name: "미국 틱톡샵 입점 방법", item: "https://cosduck.com/guides/us-tiktok-shop-setup" },
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
      title="미국 틱톡샵 입점 방법: 한국 브랜드가 준비해야 할 것 총정리"
      updatedAt="2026년 11월"
      tldr={[
        "미국 틱톡샵 입점은 계정 생성 → 카테고리 인증 → 상품 리스팅 → FBT 입고 순서로 진행되며, 전체 2~4주가 소요됩니다.",
        "한국 법인도 Cross-border Seller로 입점 가능하며, 뷰티 카테고리는 FDA 등록이 필요합니다.",
        "저희가 운영한 브랜드 기준, 입점 세팅을 빠르게 끝낸 브랜드가 초기 매출 성장에서 2~3주 앞서갑니다.",
      ]}
      relatedService={{ href: "/services/setup", label: "틱톡샵 입점·초기세팅 대행 알아보기" }}
      jsonLd={jsonLd}
    >
      <Section title="한국 브랜드도 미국 틱톡샵에 입점할 수 있나요?">
        <p>
          네, 가능합니다. TikTok Shop은 Cross-border Seller 프로그램을 통해 한국 법인이 미국 틱톡샵에 직접 판매할 수 있도록 지원합니다.
          별도의 미국 법인 없이도 입점이 가능하지만, 뷰티·스킨케어 카테고리는 FDA 등록이 필요합니다.
        </p>
        <p>
          저희가 입점을 도와드린 브랜드 중 상당수가 한국 법인 상태로 진행했습니다. 계정 생성부터 첫 판매까지 평균 2~4주가 소요됩니다.
        </p>
      </Section>

      <Section title="입점 전 어떤 서류를 준비해야 하나요?">
        <p>카테고리와 판매 방식에 따라 다르지만, 뷰티 브랜드 기준으로 아래 서류가 필요합니다.</p>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full text-xs">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-bold text-black">서류</th>
                <th className="text-left px-4 py-3 font-bold text-black">비고</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["사업자등록증 (영문)", "한국 법인 기준"],
                ["FDA 시설 등록 확인서", "뷰티·스킨케어 카테고리 필수"],
                ["제품 성분표 (INCI list)", "카테고리 인증 심사에 사용"],
                ["제품 사진 및 상세 정보", "리스팅용, 영문 기준"],
                ["상표등록증 (선택)", "브랜드 보호를 위해 권장"],
              ].map(([doc, note]) => (
                <tr key={doc}>
                  <td className="px-4 py-2.5 font-medium text-black">{doc}</td>
                  <td className="px-4 py-2.5 text-gray-500">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400">
          * 서류 요건은 틱톡샵 정책 변경에 따라 달라질 수 있습니다.
        </p>
      </Section>

      <Section title="입점 절차는 어떻게 되나요?">
        <p>미국 틱톡샵 입점은 크게 4단계로 진행됩니다.</p>
        <div className="space-y-3 mt-2">
          {[
            { step: "1단계", title: "Seller Center 계정 생성 및 비즈니스 정보 등록", time: "1~2일", desc: "TikTok Shop Seller Center에서 계정을 만들고 사업자 정보를 연동합니다." },
            { step: "2단계", title: "카테고리 인증", time: "3~5일", desc: "판매할 카테고리에 맞는 인증 서류를 제출합니다. 뷰티 카테고리는 FDA 등록 확인이 필요하며, 심사에 평균 3~5일이 걸립니다. 반려되는 경우도 있으니 서류를 정확하게 준비해야 합니다." },
            { step: "3단계", title: "상품 리스팅", time: "1~3일", desc: "승인된 카테고리에 상품을 등록합니다. 영문 제품명, 설명, 사진, 가격, 재고 정보를 입력합니다." },
            { step: "4단계", title: "FBT 입고 또는 자체 배송 설정", time: "7~14일 (FBT 기준)", desc: "Fulfilled by TikTok(FBT)을 사용하면 TikTok 물류센터에 재고를 보내고, TikTok이 배송을 처리합니다. 자체 배송도 가능하지만 배송 속도가 노출에 영향을 줄 수 있습니다." },
          ].map((s) => (
            <div key={s.step} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ORANGE}20` }}>{s.step}</span>
                <span className="text-xs font-black text-black">{s.title}</span>
                <span className="text-[10px] text-gray-400 ml-auto">약 {s.time}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="입점 후 바로 매출이 발생하나요?">
        <p>
          입점만으로는 매출이 발생하지 않습니다. 틱톡샵은 크리에이터 어필리에이트 콘텐츠가 매출의 핵심 동력입니다.
          리스팅을 완료한 후 크리에이터에게 인비테이션을 보내고, 샘플을 발송하여 콘텐츠를 확보하는 과정이 필요합니다.
        </p>
        <p>
          저희가 운영한 브랜드 기준, 입점 세팅 완료 후 인비테이션 자동 발송을 시작하면 2주 내에 첫 크리에이터 콘텐츠가 나오기 시작합니다.
          한 브랜드는 입점 4개월 만에 샵티어 T5를 달성하기도 했습니다. (<a href="/cases/us-skincare-t5-in-4-months" className="font-bold underline" style={{ color: ORANGE }}>사례 보기</a>)
        </p>
      </Section>

      <Section title="직접 입점 vs 대행, 어떤 게 나을까요?">
        <p>
          서류와 절차에 익숙하다면 직접 진행할 수 있습니다. 다만 카테고리 인증 반려, FBT 입고 지연 등 예상치 못한 문제가 생기면
          입점까지 2~3주가 더 걸릴 수 있습니다.
        </p>
        <p>
          코스덕은 수십 개 브랜드의 입점을 직접 대행한 경험이 있어, 반려 사유별 대응 방법과 FBT 입고 최적화 노하우를 보유하고 있습니다.
          빠른 입점이 초기 매출 타이밍에 직접적인 영향을 주기 때문에, 시간이 중요한 브랜드에게는 대행을 권장합니다.
        </p>
      </Section>
    </GuideLayout>
  );
}
