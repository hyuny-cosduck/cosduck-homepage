import type { Metadata } from "next";
import GuideLayout from "../_components/guide-layout";

export const metadata: Metadata = {
  title: "인도네시아 틱톡샵 화장품 입점 절차와 필요 서류 | Cosduck",
  description:
    "인도네시아 틱톡샵에 화장품을 판매하기 위한 입점 절차, 필수 서류(BPOM, 할랄 인증 등), 소요 기간을 정리했습니다.",
  alternates: { canonical: "/guides/id-tiktok-shop-cosmetics-setup" },
  openGraph: {
    title: "인도네시아 틱톡샵 화장품 입점 절차 | Cosduck",
    description: "인도네시아 틱톡샵 화장품 입점에 필요한 서류와 절차",
    url: "https://cosduck.com/guides/id-tiktok-shop-cosmetics-setup",
  },
};

const ORANGE = "#F5A623";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "인도네시아 틱톡샵 화장품 입점 절차와 필요 서류",
      author: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com" },
      publisher: { "@type": "Organization", name: "Cosduck (코스덕)", url: "https://cosduck.com", logo: "https://cosduck.com/cosduck-logo.png" },
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      description: "인도네시아 틱톡샵에 화장품을 판매하기 위한 입점 절차, 필수 서류, 소요 기간 정리",
      url: "https://cosduck.com/guides/id-tiktok-shop-cosmetics-setup",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://cosduck.com" },
        { "@type": "ListItem", position: 2, name: "가이드", item: "https://cosduck.com/guides" },
        { "@type": "ListItem", position: 3, name: "인도네시아 틱톡샵 화장품 입점", item: "https://cosduck.com/guides/id-tiktok-shop-cosmetics-setup" },
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
      title="인도네시아 틱톡샵 화장품 입점 절차와 필요 서류"
      updatedAt="2026년 11월"
      tldr={[
        "인도네시아 틱톡샵 화장품 입점에는 BPOM(식약청) 등록이 필수이며, 할랄 인증도 사실상 필요합니다.",
        "현지 법인 또는 임포터를 통해 Cross-border 판매가 가능하며, 입점 절차는 평균 3~6주가 소요됩니다.",
        "저희가 운영한 인도네시아 브랜드는 입점 7개월 만에 일 매출 2,000만원을 돌파했습니다.",
      ]}
      relatedService={{ href: "/services/setup", label: "틱톡샵 입점·초기세팅 대행 알아보기" }}
      jsonLd={jsonLd}
    >
      <Section title="인도네시아 틱톡샵, 한국 브랜드도 입점할 수 있나요?">
        <p>
          네, 가능합니다. 인도네시아 틱톡샵은 Cross-border Seller를 지원하므로 한국 법인이 직접 판매할 수 있습니다.
          다만 화장품은 규제가 까다로운 카테고리이기 때문에, BPOM(인도네시아 식약청) 등록이 반드시 필요합니다.
        </p>
        <p>
          인도네시아는 동남아시아에서 틱톡샵 거래량이 가장 큰 시장이며, K-뷰티에 대한 수요가 높아 진출 가치가 큽니다.
          코스덕의 인도네시아 크리에이터 풀은 474,000명 이상으로, 입점 후 빠른 크리에이터 확보가 가능합니다.
        </p>
      </Section>

      <Section title="어떤 서류를 준비해야 하나요?">
        <p>화장품 카테고리 기준으로 아래 서류가 필요합니다.</p>
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
                ["BPOM 등록 확인서", "화장품 필수, 제품별로 등록 필요"],
                ["할랄 인증 (Halal Certificate)", "법적 의무는 아니지만 구매 전환에 큰 영향"],
                ["사업자등록증 (영문)", "한국 법인 기준"],
                ["제품 성분표 (INCI list)", "BPOM 심사 및 카테고리 인증에 사용"],
                ["수입자 정보 (Importer of Record)", "현지 임포터 필요 시"],
                ["제품 사진 및 상세 정보", "인도네시아어(Bahasa) 번역 권장"],
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
          * BPOM 등록은 제품당 수개월이 소요될 수 있으므로, 입점 계획 단계에서 미리 시작하는 것을 권장합니다.
        </p>
      </Section>

      <Section title="입점 절차는 어떻게 되나요?">
        <div className="space-y-3 mt-2">
          {[
            { step: "1단계", title: "BPOM 등록 및 할랄 인증 확인", time: "사전 준비", desc: "이미 등록된 제품이라면 바로 진행 가능합니다. 미등록 시 BPOM 등록 대행 업체를 통해 진행합니다." },
            { step: "2단계", title: "Seller Center 계정 생성", time: "1~2일", desc: "인도네시아 틱톡샵 Seller Center에서 Cross-border Seller로 등록합니다." },
            { step: "3단계", title: "카테고리 인증 및 상품 리스팅", time: "3~7일", desc: "BPOM 확인서를 포함한 서류로 카테고리 인증을 받고, 상품을 등록합니다. 상세 정보는 인도네시아어로 작성하는 것이 전환율에 유리합니다." },
            { step: "4단계", title: "물류 설정 및 첫 판매", time: "7~14일", desc: "현지 물류 파트너를 연결하거나 Cross-border 배송을 설정합니다." },
          ].map((s) => (
            <div key={s.step} className="border border-gray-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ backgroundColor: `${ORANGE}20` }}>{s.step}</span>
                <span className="text-xs font-black text-black">{s.title}</span>
                <span className="text-[10px] text-gray-400 ml-auto">{s.time}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="미국 틱톡샵과 무엇이 다른가요?">
        <p>
          가장 큰 차이는 인증 체계입니다. 미국은 FDA 등록이면 충분하지만, 인도네시아는 BPOM + 할랄이 사실상 필수입니다.
          또한 인도네시아 소비자는 가격 민감도가 높고, 크리에이터 콘텐츠에 대한 반응 속도가 빠릅니다.
        </p>
        <p>
          저희가 운영한 인도네시아 스킨케어 브랜드는 초기부터 인비테이션을 주 2만건 발송하며 크리에이터를 빠르게 확보했고,
          7개월 만에 일 매출 2,000만원을 돌파했습니다. (<a href="/cases/id-beauty-20m-daily-revenue" className="font-bold underline" style={{ color: ORANGE }}>사례 보기</a>)
        </p>
      </Section>

      <Section title="인도네시아 진출, 지금이 적기인 이유는?">
        <p>
          인도네시아는 인구 2.7억 명으로 동남아 최대 시장이며, 틱톡샵 거래량이 빠르게 성장하고 있습니다.
          K-뷰티에 대한 현지 수요가 높지만 아직 진출한 한국 브랜드가 많지 않아, 선점 효과를 기대할 수 있습니다.
        </p>
        <p>
          코스덕은 인도네시아 크리에이터 풀 474,000명 이상을 보유하고 있어, 입점과 동시에 크리에이터 섭외를 시작할 수 있습니다.
        </p>
      </Section>
    </GuideLayout>
  );
}
