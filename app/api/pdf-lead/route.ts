import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { brand, name, contact, brandSite, interest, direction } = await req.json();

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const text = [
    `📄 *서비스 소개서 열람 요청*`,
    ``,
    `• *브랜드명:* ${brand}`,
    `• *담당자:* ${name}`,
    `• *연락처:* ${contact}`,
    `• *브랜드 사이트:* ${brandSite || "미입력"}`,
    `• *관심 서비스:* ${interest}`,
    `• *원하는 방향성:* ${direction}`,
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
