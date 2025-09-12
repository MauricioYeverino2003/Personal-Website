import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function bad(msg: string, status = 422) {
  return NextResponse.json({ error: msg }, { status });
}

export async function POST(req: Request) {
  if (req.headers.get("content-type")?.includes("application/json") !== true) {
    return bad("content-type must be application/json", 415);
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return bad("invalid JSON", 400);
  }

  const { kind, title, description, recommended_by } = body ?? {};

  const table =
    kind === "film" ? "films" :
    kind === "book" ? "books" :
    kind === "song" ? "songs" : null;
  if (!table) return bad("invalid kind", 400);

  if (typeof title !== "string" || !title.trim()) return bad("title is required");
  if (title.trim().length > 100) return bad("title too long (max 100)");

  if (typeof description !== "string" || !description.trim()) return bad("description is required");
  if (description.trim().length > 500) return bad("description too long (max 500)");

  if (typeof recommended_by !== "string" || !recommended_by.trim()) return bad("recommended_by is required");
  if (recommended_by.trim().length > 100) return bad("recommended_by too long (max 100)");

  const payload = {
    title: title.trim(),
    description: description.trim(),
    recommended_by: recommended_by.trim(),
  };

  const { error } = await supabase.from(table).insert(payload);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ ok: true });
}
