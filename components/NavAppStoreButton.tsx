"use client";

import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import AppStoreButton from "./AppStoreButton";
import { showsAppStoreCta } from "@/lib/marketing";

/**
 * The App Store CTA as it appears in the site chrome (header and mobile menu),
 * hidden on the routes that deliberately carry no marketing.
 *
 * A client component so it can read the current route — the same approach
 * NavLinks already uses to highlight the active section.
 */
export default function NavAppStoreButton(
  props: ComponentProps<typeof AppStoreButton>,
) {
  const pathname = usePathname();

  if (!showsAppStoreCta(pathname)) {
    return null;
  }

  return <AppStoreButton {...props} />;
}
