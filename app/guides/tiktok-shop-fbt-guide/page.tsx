import type { Metadata } from "next";
import GuideLayout from "../_components/guide-layout";

export const metadata: Metadata = {
  title: "틱톡샵 FBT란? 입고 절차와 일반 배송과의 차이 | Cosduck",
  description:
    "틱톡샵 FBT(Fulfilled by TikTok)의 의미, 입고 절차, 일반 배송과의 차이, 비용 구조를 실제 운영 경험을 바탕으로 정리했습니다.",
  alternates: { canonical: "/guides/tiktok-shop-fbt-guide" },
  openGraph: {
    title: "틱톡샵 FBT 입고 절차 가이드 | Cosduck",
    description: "FBT 입고 절차, 일반 배송과의 차이, 비용 구조를 정리",
    url: "https://cosduck.com/guides/tiktok-shop-fbt-guide",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "틱톡샵 FBT란? 입고 절차와 일반 배송과의 차이",
      author: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com", logo: "https://cosduck.com/cosduck-logo.png" },
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      description: "틱톡샵 FBT(Fulfilled by TikTok)의 의미, 입고 절차, 일반 배송과의 차이, 비용 구조",
      url: "https://cosduck.com/guides/tiktok-shop-fbt-guide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "가이드", item: "https://cosduck.com/guides" },
        { "@type": "ListItem", position: 3, name: "틱톡샵 FBT 가이드", item: "https://cosduck.com/guides/tiktok-shop-fbt-guide" },
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
      title="틱톡샵 FBT란? 입고 절차와 일반 배송과의 차이"
      updatedAt="2026년 11월"
      tldr={[
        "FBT(Fulfilled by TikTok)는 TikTok 물류센터에 재고를 보내면 TikTok이 보관·포장·배송을 처리하는 서비스입니다.",
        "FBT를 사용하면 배송 속도가 빨라져 상품 노출과 전환율에 유리하며, 셀러 티어 상승에도 도움이 됩니다.",
        "저희가 운영한 브랜드 기준, FBT 전환 후 배송 관련 CS가 80% 이상 줄었습니다.",
      ]}
      relatedService={{ href: "/services/setup", label: "틱톡샵 입점·초기세팅 대행 알아보기" }}
      jsonLd={jsonLd}
    >
      <Section title="FBT가 정확히 뭔가요?">
        <p>
          FBT(Fulfilled by TikTok)는 아마존의 FBA(Fulfilled by Amazon)와 유사한 서비스입니다.
          셀러가 TikTok의 물류센터에 재고를 입고하면, 이후 주문이 발생했을 때 TikTok이 포장과 배송을 대신 처리합니다.
        </p>
        <p>
          셀러는 상품 판매와 마케팅에 집중하고, 물류는 TikTok에 맡기는 구조입니다.
          미국 틱톡샵 기준으로 현재 FBT 물류센터가 운영되고 있습니다.
        </p>
      </Section>

      <Section title="FBT를 사용하면 뭐가 좋은가요?">
        <div className="border border-gray-200 rounded-xl overflow-hidden mt-2">
          <table className="w-full text-xs">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 font-bold text-black">항목</th>
                <th className="text-left px-4 py-3 font-bold text-black">FBT</th>
                <th className="text-left px-4 py-3 font-bold text-black">자체 배송</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["배송 속도", "2~5일 (미국 내)", "7~14일 (한국 발송 시)"],
                ["상품 노출", "배송 속도 기반 가산점", "상대적 불리"],
                ["CS 부담", "배송 관련 CS를 TikTok이 처리", "셀러가 직접 대응"],
                ["초기 비용", "입고 비용 + 보관비", "건별 배송비"],
                ["재고 관리", "TikTok 대시보드에서 확인", "자체 관리 필요"],
              ].map(([item, fbt, self]) => (
                <tr key={item}>
                  <td className="px-4 py-2.5 font-medium text-black">{item}</td>
                  <td className="px-4 py-2.5 text-gray-600">{fbt}</td>
                  <td className="px-4 py-2.5 text-gray-500">{self}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          저희가 운영한 브랜드 기준, FBT로 전환한 후 배송 관련 고객 문의가 80% 이상 줄었고,
          배송 속도 개선으로 상품 노출 빈도도 높아졌습니다.
        </p>
      </Section>

      <Section title="FBT 입고는 어떻게 진행하나요?">
        <div className="space-y-3 mt-2">
          {[
            { step: "1단계", title: "Inbound Order 생성", time: "1일", desc: "Seller Center에서 입고할 상품, 수량, 박스 수를 입력하고 Inbound Order를 생성합니다." },
            { step: "2단계", title: "라벨 출력 및 포장", time: "1~2일", desc: "TikTok이 발행한 바코드 라벨을 각 상품과 박스에 부착합니다. 라벨 오류 시 입고가 거부될 수 있으니 정확하게 부착해야 합니다." },
            { step: "3단계", title: "물류센터 배송", time: "5~10일", desc: "지정된 TikTok 물류센터로 재고를 발송합니다. 미국 내 배송은 UPS, FedEx 등을 이용합니다." },
            { step: "4단계", title: "입고 검수 및 재고 반영", time: "2~5일", desc: "물류센터에서 수량과 상태를 검수한 후 재고에 반영됩니다. 문제가 없으면 바로 판매 가능 상태가 됩니다." },
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
        <p className="text-xs text-gray-400 mt-2">
          * 전체 과정은 약 7~14일이 소요되며, 초기 입고 시 검수가 더 꼼꼼하게 진행될 수 있습니다.
        </p>
      </Section>

      <Section title="FBT 비용은 어떻게 되나요?">
        <p>
          FBT 비용은 크게 <strong>입고 처리비</strong>, <strong>보관비</strong>, <strong>출고 처리비</strong>로 나뉩니다.
          정확한 단가는 상품 크기와 무게에 따라 달라지며, TikTok Seller Center에서 시뮬레이션할 수 있습니다.
        </p>
        <p>
          자체 배송 대비 건당 비용이 높아 보일 수 있지만, 배송 속도 개선으로 인한 전환율 상승과 CS 비용 절감을 고려하면
          대부분의 브랜드에서 FBT가 더 효율적입니다. 특히 주문량이 늘어날수록 FBT의 단가 이점이 커집니다.
        </p>
      </Section>

      <Section title="FBT 없이 시작해도 되나요?">
        <p>
          네, 가능합니다. 자체 배송(Seller Fulfilled)으로 시작해서 주문량이 늘어나면 FBT로 전환하는 것도 일반적인 전략입니다.
          다만 배송 속도가 상품 노출과 셀러 티어에 영향을 주기 때문에, 가능하면 초기부터 FBT를 사용하는 것을 권장합니다.
        </p>
        <p>
          FBT 입고 과정이 복잡하게 느껴진다면, 코스덕의 입점 대행 서비스를 통해 Inbound Order 생성부터 입고 검수까지 지원받을 수 있습니다.
        </p>
      </Section>
    </GuideLayout>
  );
}
