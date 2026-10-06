"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import OptOutCard from "@/components/OptOutCard";
import { ctaButtonClassName } from "@/components/CtaButton";
import { SITE_NAME } from "@/lib/config";
import {
  OPT_OUT_COPY,
  OPT_OUT_ENDPOINT,
  isOptOutStatus,
  type OptOutStatus,
} from "@/lib/optOut";

/**
 * Performs the opt-out for /opted-out?id=<prospect id>.
 *
 * Email security scanners open links automatically, some in headless browsers
 * that run JavaScript, so the opt-out must not happen on the server or on page
 * load. The POST is sent only when the visitor clicks "Confirm opt-out".
 */
export default function OptOutRunner({ id }: { id: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<OptOutStatus | null>(null);
  const [sending, setSending] = useState(false);
  // Guards against a double click sending the POST twice before the
  // disabled state has rendered.
  const sent = useRef(false);

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

  async function handleConfirm() {
    if (sent.current) return;
    sent.current = true;
    setSending(true);

    const result = await optOut();
    setStatus(result);
    // Drop the id from the URL so a refresh shows the result without
    // offering the opt-out again.
    router.replace(`/opted-out?status=${result}`, { scroll: false });
  }

  if (status) {
    const { title, body } = OPT_OUT_COPY[status];
    return <OptOutCard title={title} body={body} />;
  }

  return (
    <OptOutCard
      title={`Opt out of ${SITE_NAME} emails?`}
      body="Confirm below and you won't receive any more emails from us."
      action={
        <button
          type="button"
          onClick={handleConfirm}
          disabled={sending}
          aria-busy={sending}
          className={ctaButtonClassName(
            "primary",
            "lg",
            sending ? "cursor-wait" : "",
          )}
        >
          {sending ? "Opting you out…" : "Confirm opt-out"}
        </button>
      }
    />
  );
}
