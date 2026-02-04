import { NextResponse } from "next/server";

const CLEARCLAIM_API = process.env.CLEARCLAIM_API_URL ?? "https://api.clearclaim.in";

export async function GET() {
  try {
    const res = await fetch(`${CLEARCLAIM_API}/api/inquiries/options`);
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return NextResponse.json(data ?? { error: "Failed to fetch options" }, { status: res.status });
    }
    return NextResponse.json(data ?? {});
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch options" },
      { status: 500 }
    );
  }
}
