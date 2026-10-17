import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client authenticated with the service role key, which
 * bypasses RLS. The `server-only` import makes the build fail if this module
 * is ever pulled into a client component, so the key can't reach the browser.
 *
 * Returns null when the env vars are missing, so callers can answer with a
 * clean error instead of throwing.
 */
let client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  client = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return client;
}
