/**
 * Renders one JSON-LD block as a native <script type="application/ld+json">.
 *
 * `next/script` is for executable JavaScript; structured data is data, so a
 * plain script tag is the right element here. The `<` escape follows the
 * Next.js guidance for JSON.stringify — it keeps a stray "</script>" inside a
 * string value from closing the tag early.
 *
 * Build the payloads with the helpers in lib/jsonld.ts so every schema keeps
 * sourcing its values from lib/config.ts and the content registries.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
