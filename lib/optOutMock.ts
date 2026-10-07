import type { OptOutResponse } from "@/lib/optOut";

// Ids whose opt-out has already failed once on this page load.
const failedOnce = new Set<string>();

/**
 * DEVELOPMENT ONLY. Stands in for the opt-out Edge Function on localhost,
 * where the real one answers 403 because of CORS. Imported only behind a
 * `process.env.NODE_ENV === "development"` check in lib/optOut.ts, so it is
 * never part of a production build.
 *
 * Special ids for clicking through the other paths:
 * - /opted-out?id=mock-already       the check reports "already"
 * - /opted-out?id=mock-optout-fail   the first opt-out attempt fails to send;
 *                                    trying again succeeds
 * - /opted-out?id=mock-reason-409    the reason is rejected with 409
 * - /opted-out?id=mock-reason-400    the reason is rejected with 400
 * - /opted-out?id=mock-reason-403    the reason is rejected with 403 (CORS)
 * - /opted-out?id=mock-reason-offline  the reason request fails to send
 * Any other id behaves like a prospect who hasn't opted out yet.
 */
export async function mockOptOut(body: object): Promise<OptOutResponse> {
  // Long enough to see the in-flight states.
  await new Promise((resolve) => setTimeout(resolve, 600));

  const request = body as { id?: string; check?: boolean; reason?: string };
  const id = request.id ?? "";
  console.info("[opt-out mock]", body);

  if (request.check) {
    return {
      httpStatus: 200,
      status: id === "mock-already" ? "already" : "pending",
    };
  }

  if (request.reason === undefined) {
    if (id === "mock-optout-fail" && !failedOnce.has(id)) {
      failedOnce.add(id);
      console.error("[opt-out mock] simulated opt-out failure");
      return { httpStatus: null, status: undefined };
    }
    return { httpStatus: 200, status: "done" };
  }

  switch (id) {
    case "mock-reason-409":
      return { httpStatus: 409, status: "not_opted_out" };
    case "mock-reason-400":
      return { httpStatus: 400, status: "invalid" };
    case "mock-reason-403":
      return { httpStatus: 403, status: undefined };
    case "mock-reason-offline":
      console.error("[opt-out mock] simulated network failure");
      return { httpStatus: null, status: undefined };
    default:
      return { httpStatus: 200, status: "reason_saved" };
  }
}
