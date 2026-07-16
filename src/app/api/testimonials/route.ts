import { NextResponse } from "next/server";

const CLEARCLAIM_API = process.env.CLEARCLAIM_API_URL ?? "https://apicms.clearclaim.in";

export const dynamic = "force-static";

export async function GET() {
  try {
    const res = await fetch(`${CLEARCLAIM_API}/api/testimonials`);
    const data = await res.json().catch(() => ([]));
    if (!res.ok) {
      return NextResponse.json(data, { status: res.status });
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
