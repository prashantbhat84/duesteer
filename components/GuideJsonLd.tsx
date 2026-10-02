import JsonLd from "@/components/JsonLd";
import { guideArticleSchema, guideBreadcrumbSchema } from "@/lib/jsonld";
import type { Guide } from "@/lib/guides";

/**
 * Article + BreadcrumbList structured data for a guide page. Both payloads are
 * derived from the lib/guides.ts entry, so a guide page only has to drop this
 * in beside its registry lookup.
 */
export default function GuideJsonLd({ guide }: { guide: Guide }) {
  return (
    <>
      <JsonLd data={guideArticleSchema(guide)} />
      <JsonLd data={guideBreadcrumbSchema(guide)} />
    </>
  );
}
