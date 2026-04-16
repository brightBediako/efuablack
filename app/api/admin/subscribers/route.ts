import { NextResponse } from "next/server";
import { requireAdminApi } from "@/lib/admin-api-guard";
import { connectDB } from "@/lib/db";
import { Subscriber } from "@/models/Subscriber";

export async function GET(req: Request) {
  const unauthorized = await requireAdminApi(req);
  if (unauthorized) return unauthorized;

  const format = new URL(req.url).searchParams.get("format");
  await connectDB();
  const rows = await Subscriber.find().sort({ createdAt: -1 }).lean();

  if (format === "csv") {
    const csvRows = ["email,source,createdAt"];
    for (const row of rows) {
      const email = String(row.email ?? "").replaceAll('"', '""');
      const source = String(row.source ?? "").replaceAll('"', '""');
      const createdAt = row.createdAt ? new Date(row.createdAt).toISOString() : "";
      csvRows.push(`"${email}","${source}","${createdAt}"`);
    }
    return new NextResponse(csvRows.join("\n"), {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="subscribers.csv"',
      },
    });
  }

  return NextResponse.json({ ok: true, data: rows });
}

export async function DELETE(req: Request) {
  const unauthorized = await requireAdminApi(req);
  if (unauthorized) return unauthorized;

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ ok: false, message: "Missing id." }, { status: 400 });
  await connectDB();
  const deleted = await Subscriber.findByIdAndDelete(id);
  if (!deleted) return NextResponse.json({ ok: false, message: "Subscriber not found." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
