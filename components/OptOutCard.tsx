import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";

/**
 * The card shown on /opted-out. Shared by the server page and the client
 * opt-out runner so every state looks the same.
 */
export default function OptOutCard({
  title,
  body,
  showButton = true,
}: {
  title: string;
  body?: string;
  showButton?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl rounded-panel border border-line bg-surface p-6 shadow-card sm:p-10">
      <SectionHeading as="h1" title={title} description={body} align="center" />
      {showButton ? (
        <div className="mt-8 flex justify-center">
          <CtaButton href="/" size="lg">
            Visit duesteer.app
          </CtaButton>
        </div>
      ) : null}
    </div>
  );
}
