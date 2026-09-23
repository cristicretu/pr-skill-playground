import { NextResponse } from "next/server";
import { recentOrdersWithCustomers } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function GET() {
  const started = performance.now();
  const orders = await recentOrdersWithCustomers();
  return NextResponse.json(orders, {
    headers: { "Server-Timing": `orders;dur=${(performance.now() - started).toFixed(1)}` },
  });
}
