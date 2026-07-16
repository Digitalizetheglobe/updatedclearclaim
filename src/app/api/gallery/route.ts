import { NextRequest, NextResponse } from "next/server";

const CLEARCLAIM_API = process.env.CLEARCLAIM_API_URL ?? "https://api.clearclaim.in";

export const dynamic = "force-static";

export async function GET() {
  try {
    const res = await fetch(`${CLEARCLAIM_API}/api/gallery/active`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch Gallery items" }, { status: res.status });
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load Gallery items" },
      { status: 500 }
    );
  }
}
