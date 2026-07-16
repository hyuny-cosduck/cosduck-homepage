import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { brand, name, meetingType, hasTiktokShop, direction } = await req.json();

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const text = [
    `📩 *새 미팅 신청이 들어왔습니다!*`,
    ``,
    `• *브랜드명:* ${brand}`,
    `• *담당자:* ${name}`,
    `• *미팅 선호 방식:* ${meetingType}`,
    `• *틱톡샵 개설 여부:* ${hasTiktokShop}`,
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
