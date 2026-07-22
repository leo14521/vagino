"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LASER_ROUTES } from "@/lib/site";
import { LASER_TAB_LABELS, type LaserTabId } from "@/lib/seo/laser-pages";

const TABS: { id: LaserTabId; href: string; label: string }[] = [
  { id: "zisella", href: LASER_ROUTES.zisella, label: LASER_TAB_LABELS.zisella },
  { id: "monalisa", href: LASER_ROUTES.monalisa, label: LASER_TAB_LABELS.monalisa },
  { id: "revive", href: LASER_ROUTES.revive, label: LASER_TAB_LABELS.revive },
];

function isLaserTabActive(pathname: string, tab: LaserTabId) {
  if (tab === "zisella")
    return pathname === LASER_ROUTES.zisella || pathname === `${LASER_ROUTES.zisella}/`;
  if (tab === "monalisa") return pathname.startsWith(LASER_ROUTES.monalisa);
  if (tab === "revive") return pathname.startsWith(LASER_ROUTES.revive);
  return false;
}

export function LaserTabNav({ currentLabel }: { currentLabel: string }) {
  const pathname = usePathname();

  return (
    <>
      <nav aria-label="breadcrumb" className="mb-8 text-center text-sm text-[#6B7264]">
        <ol className="inline-flex flex-wrap items-center justify-center gap-1.5">
          <li>
            <Link href={LASER_ROUTES.hub} className="hover:text-[#3E522D] hover:underline">
              질레이저
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
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="질레이저 시술 종류"
      >
        {TABS.map((t) => {
          const on = isLaserTabActive(pathname, t.id);
          return (
            <Link
              key={t.id}
              href={t.href}
              scroll={false}
              role="tab"
              aria-selected={on}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-bold transition-all md:px-8 md:py-3 md:text-base",
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
