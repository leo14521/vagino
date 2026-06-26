"use client";

import { Suspense } from "react";
import { SiteHeader } from "@/components/layout/site-header";

export function GlobalChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100]">
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
      </div>
      <div className="min-w-0 overflow-x-clip pt-[68px] lg:pt-[112px]">{children}</div>
    </>
  );
}
