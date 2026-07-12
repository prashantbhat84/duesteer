import type { ReactNode } from "react";

/**
 * Constrains content to a readable max width with responsive horizontal
 * padding. Used to keep every section aligned to the same grid.
 */
export default function PageContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
