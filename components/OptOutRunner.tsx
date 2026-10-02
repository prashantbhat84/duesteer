"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import OptOutCard from "@/components/OptOutCard";
import {
  OPT_OUT_COPY,
  OPT_OUT_ENDPOINT,
  isOptOutStatus,
  type OptOutStatus,
} from "@/lib/optOut";

/**
 * Performs the opt-out for /opted-out?id=<prospect id>.
 *
 * Email security scanners fetch links automatically, so the opt-out must not
 * happen on the server or on a plain page fetch. The POST is sent only from
 * this effect, i.e. once the page has loaded in a real browser.
 */
export default function OptOutRunner({ id }: { id: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<OptOutStatus | null>(null);
  // Strict mode runs effects twice in development; send the POST only once.
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    async function optOut(): Promise<OptOutStatus> {
      try {
        const response = await fetch(OPT_OUT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });
        const data: unknown = await response.json();
        const result =
          data && typeof data === "object" && "status" in data
            ? data.status
            : undefined;
        return isOptOutStatus(result) ? result : "error";
      } catch {
        // Network failure or a non-JSON response.
        return "error";
      }
    }

    optOut().then((result) => {
      setStatus(result);
      // Drop the id from the URL so a refresh shows the result without
      // sending the opt-out again.
      router.replace(`/opted-out?status=${result}`, { scroll: false });
    });
  }, [id, router]);

  if (!status) {
    return <OptOutCard title="Opting you out…" showButton={false} />;
  }

  const { title, body } = OPT_OUT_COPY[status];
  return <OptOutCard title={title} body={body} />;
}
