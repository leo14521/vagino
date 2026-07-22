"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LABIA_ROUTES } from "@/lib/site";
import { LABIA_TAB_LABELS, type LabiaTabId } from "@/lib/seo/labia-pages";

const TABS: { id: LabiaTabId; href: string; label: string }[] = [
  { id: "labia", href: LABIA_ROUTES.surgery, label: LABIA_TAB_LABELS.labia },
  { id: "hair-removal", href: LABIA_ROUTES.hairRemoval, label: LABIA_TAB_LABELS["hair-removal"] },
  { id: "whitening", href: LABIA_ROUTES.whitening, label: LABIA_TAB_LABELS.whitening },
  { id: "clitoris", href: LABIA_ROUTES.clitoris, label: LABIA_TAB_LABELS.clitoris },
];

function isLabiaTabActive(pathname: string, tab: LabiaTabId) {
  if (tab === "labia")
    return pathname === LABIA_ROUTES.surgery || pathname === `${LABIA_ROUTES.surgery}/`;
  if (tab === "hair-removal") return pathname.startsWith(LABIA_ROUTES.hairRemoval);
  if (tab === "whitening") return pathname.startsWith(LABIA_ROUTES.whitening);
  if (tab === "clitoris") return pathname.startsWith(LABIA_ROUTES.clitoris);
  return false;
}

export function LabiaTabNav({ currentLabel }: { currentLabel: string }) {
  const pathname = usePathname();

  return (
    <>
      <nav aria-label="breadcrumb" className="mb-8 text-center text-sm text-[#6B7264]">
        <ol className="inline-flex flex-wrap items-center justify-center gap-1.5">
          <li>
            <Link href={LABIA_ROUTES.hub} className="hover:text-[#3E522D] hover:underline">
              대음순수술
            </Link>
          </li>
          <li aria-hidden className="text-[#C4C0B8]">
            /
          </li>
          <li className="font-semibold text-[#1A1F16]" aria-current="page">
            {currentLabel}
          </li>
        </ol>
      </nav>

      <div
        className="mb-10 grid max-w-lg grid-cols-2 gap-2 mx-auto sm:max-w-2xl md:mx-0 md:flex md:max-w-none md:flex-wrap md:justify-center"
        role="tablist"
        aria-label="대음순 케어 종류"
      >
        {TABS.map((t) => {
          const on = isLabiaTabActive(pathname, t.id);
          return (
            <Link
              key={t.id}
              href={t.href}
              scroll={false}
              role="tab"
              aria-selected={on}
              className={cn(
                "rounded-full px-4 py-2.5 text-center text-[13px] font-bold transition-all md:px-8 md:py-3 md:text-base",
                on
                  ? "bg-[#3E522D] text-white shadow-md"
                  : "border border-[#E9E4DB] bg-white text-[#6B7264] hover:border-[#3E522D]/35"
              )}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
