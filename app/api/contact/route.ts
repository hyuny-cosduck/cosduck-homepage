import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { brand, company, name, email, phone, brandSite, meetingType, interest, startDate } = await req.json();

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const text = [
    `📩 *새 미팅 신청이 들어왔습니다!*`,
    ``,
    `• *기업명:* ${company}`,
    `• *브랜드명:* ${brand}`,
    `• *담당자:* ${name}`,
    `• *이메일:* ${email}`,
    `• *전화번호:* ${phone}`,
    `• *브랜드 사이트:* ${brandSite || "미입력"}`,
    `• *미팅 선호 방식:* ${meetingType}`,
    `• *관심 서비스:* ${interest || "미입력"}`,
    `• *예상 시작날짜:* ${startDate || "미입력"}`,
  ].join("\n");

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Slack error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
