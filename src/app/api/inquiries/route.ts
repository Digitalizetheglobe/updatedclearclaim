import { NextRequest, NextResponse } from "next/server";

const CLEARCLAIM_API = process.env.CLEARCLAIM_API_URL ?? "https://api.clearclaim.in";

export async function GET() {
  return NextResponse.json({ ok: true, message: "Inquiries API is running" });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const res = await fetch(`${CLEARCLAIM_API}/api/inquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
