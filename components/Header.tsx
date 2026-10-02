import Wordmark from "./Wordmark";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import NavAppStoreButton from "./NavAppStoreButton";

/**
 * Sticky site header. Desktop shows inline nav + App Store CTA; below `md`
 * it collapses into the MobileNav menu.
 *
 * The App Store CTA goes through NavAppStoreButton, which hides it on the
 * routes that carry no marketing (see lib/marketing.ts).
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <NavLinks />
        </nav>

        <div className="hidden md:block">
          <NavAppStoreButton note={false} />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
