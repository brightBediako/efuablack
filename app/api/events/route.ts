import { NextResponse } from "next/server";
import { listEvents } from "@/services/eventService";
import { connectDB } from "@/lib/db";
import { EventRegistration } from "@/models/EventRegistration";

export async function GET() {
  const rows = await listEvents();
  await connectDB();
  const registrationCounts = await EventRegistration.aggregate<{ _id: string; count: number }>([
    { $group: { _id: "$eventId", count: { $sum: 1 } } },
  ]);
  const countByEvent = new Map<string, number>(
    registrationCounts.map((x) => [String(x._id), x.count]),
  );
  const data = rows.map((row) => ({
    ...row,
    registrations: countByEvent.get(String(row._id)) ?? 0,
  }));
  return NextResponse.json({ ok: true, data });
}
