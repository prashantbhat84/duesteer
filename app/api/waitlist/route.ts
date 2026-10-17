import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import {
  WAITLIST_SOURCE_MAX,
  isValidEmail,
  isWaitlistPlacement,
  toWaitlistPlatform,
  type WaitlistResponse,
} from "@/lib/waitlist";

/*
 * POST /api/waitlist — adds an email to the web-version waitlist.
 *
 * Body: { email, platform, placement, source, company }. `company` is a
 * honeypot: real visitors never see it, so a filled one is a bot and gets a
 * silent success without touching the database.
 *
 * A repeat signup also returns success, so the response never reveals whether
 * an address is already on the list.
 */

/*
 * Rate limit: 5 requests per IP per 10 minutes. Kept in memory, so it is per
 * server instance and resets on cold starts — enough to blunt casual abuse,
 * not a hard guarantee.
 */
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // Drop idle IPs now and then so the map can't grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }

  return recent.length > RATE_LIMIT;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function reply(body: WaitlistResponse, status = 200): Response {
  return Response.json(body, { status });
}

export async function POST(request: Request): Promise<Response> {
  if (isRateLimited(clientIp(request), Date.now())) {
    return reply(
      { ok: false, error: "Too many attempts. Please try again in a few minutes." },
      429,
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("Body is not an object");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return reply({ ok: false, error: "Invalid request." }, 400);
  }

  if (typeof body.company === "string" && body.company.trim() !== "") {
    return reply({ ok: true });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!isValidEmail(email)) {
    return reply({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  if (!isWaitlistPlacement(body.placement)) {
    return reply({ ok: false, error: "Invalid request." }, 400);
  }

  const source =
    typeof body.source === "string"
      ? body.source.trim().slice(0, WAITLIST_SOURCE_MAX) || null
      : null;

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("Waitlist: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 500);
  }

  // A plain insert, not an upsert: the unique index is on lower(email), which
  // an upsert's ON CONFLICT can't target, so a repeat shows up as 23505.
  const { error } = await supabase.from("web_waitlist").insert({
    email,
    platform: toWaitlistPlatform(body.platform),
    placement: body.placement,
    source,
  });

  if (error && error.code !== "23505") {
    console.error("Waitlist insert failed", error);
    return reply({ ok: false, error: "Something went wrong. Please try again." }, 500);
  }

  return reply({ ok: true });
}
