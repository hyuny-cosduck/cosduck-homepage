import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { brand, company, name, email, phone, brandSite, interest, startDate } = await req.json();

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const slackText = [
    `📄 *서비스 소개서 열람 요청*`,
    ``,
    `• *기업명:* ${company}`,
    `• *브랜드명:* ${brand}`,
    `• *담당자:* ${name}`,
    `• *이메일:* ${email}`,
    `• *핸드폰:* ${phone}`,
    `• *브랜드 사이트:* ${brandSite || "미입력"}`,
    `• *관심 서비스:* ${interest}`,
    `• *예상 시작날짜:* ${startDate || "미입력"}`,
  ].join("\n");

  const emailHtml = `
<div style="font-family:'Apple SD Gothic Neo','Malgun Gothic',sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;color:#222;line-height:1.8;font-size:15px;">
  <p>안녕하세요 ${name}님!</p>
  <p>코스덕 임현입니다.</p>

  <p>틱톡샵이 참.. 쉽지 않죠ㅜㅜ</p>

  <p>시딩은 해야겠는데 크리에이터는 어디서 찾아야 할지도 모르겠고,<br/>
  콘텐츠 감성은 한국이랑 달라도 너무 다른데,<br/>
  브랜드 이미지도 살리고 제품 소구점도 잡으면서 구매 전환까지 만들어내려면 어떻게 해야 할까!<br/>
  고민이 많으시죠?</p>

  <p>아! 먼저 코스덕 홈페이지를 통해 소개서 열람해주셔서 감사합니다.</p>

  <p>저희 소개서는 마음에 드셨나요? :)</p>

  <p>코스덕은 해외 문화와 크리에이터 생태계에 익숙하고, 실제 크리에이터들과 같은 눈높이에서 소통하는 젊은 팀원들로 구성되어 있습니다.</p>

  <p>특히 저희가 중요하게 생각하는 건 <strong>브랜드와의 빠른 소통, 빠른 의사결정, 그리고 빠른 실험</strong>입니다.</p>

  <p>저희 Full-Funnel 서비스에는 TikTok Shop에서 가장 중요한 어필리에이트 크리에이터 협업부터 커머스 오퍼레이션, Shop 관리까지 전반적인 운영이 모두 포함되어 있습니다.</p>

  <p>소개서를 보시면서 궁금하셨던 부분이나, 현재 TikTok Shop 운영과 관련해 고민하고 계신 부분이 있다면 편하게 말씀 주세요!</p>

  <p>저희가 어떤 방식으로 도움드릴 수 있을지도 함께 이야기 나눠보겠습니다.</p>

  <p>그럼 앞으로 TikTok Shop에서 좋은 성과 만들어가시길 바라겠습니다!</p>

  <p>감사합니다.<br/>임현 드림</p>

  <hr style="border:none;border-top:1px solid #e0e0e0;margin:32px 0 20px;"/>

  <p style="font-size:13px;color:#666;line-height:1.7;">
    코스덕은 TikTok Shop 전문 운영 대행사로, 현재 북미와 인도네시아에서 Full-Funnel 및 Affiliate 운영을 지원하고 있습니다.<br/><br/>
    <strong style="color:#333;">임 &nbsp;현 &nbsp;Hyuny Lim</strong><br/>
    Cosduck | Lead<br/>
    M &nbsp;&nbsp;&nbsp;+82 10-3027-0750<br/>
    A &nbsp;&nbsp;&nbsp;3F, Wausan-ro 121, Mapo-gu, Seoul, Korea (04054)<br/>
    E &nbsp;&nbsp;&nbsp;<a href="mailto:hyuny@cosduck.com" style="color:#1a73e8;">hyuny@cosduck.com</a><br/>
    W &nbsp;&nbsp;&nbsp;<a href="https://www.cosduck.com" style="color:#1a73e8;">www.cosduck.com</a>
  </p>
</div>`;

  // Send Slack notification and auto-email in parallel
  const resend = new Resend(process.env.RESEND_API_KEY);
  const [slackRes] = await Promise.all([
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: slackText }),
    }),
    resend.emails.send({
      from: "임현 | 코스덕 <hyuny@cosduck.com>",
      to: email,
      subject: `${name}님, 코스덕 소개서 열람 감사합니다!`,
      html: emailHtml,
    }).catch((err) => {
      console.error("Resend email error:", err);
    }),
  ]);

  if (!slackRes.ok) {
    return NextResponse.json({ error: "Slack error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
