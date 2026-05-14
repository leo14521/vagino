"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionGuideNav } from "@/components/layout/section-guide-nav";

const SECTION_GUIDE_PATHS = new Set(["/women", "/", "/laser"]);

export function GlobalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSectionGuide = SECTION_GUIDE_PATHS.has(pathname);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] shadow-sm">
        <SiteHeader />
        {showSectionGuide && <SectionGuideNav />}
      </div>
      <div
        className={cn(
          "min-w-0 overflow-x-clip",
          showSectionGuide
            ? "pt-[104px] sm:pt-[118px] md:pt-[128px]"
            : "pt-[48px] sm:pt-[52px] md:pt-[56px]"
        )}
      >
        {children}
      </div>
    </>
  );
}
