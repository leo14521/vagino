"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { LASER_ROUTES } from "@/lib/site";
import { MonalisaPanel, RevivePanel, ZisellaPanel } from "@/components/sections/laser-link-section";

const TABS = [
  { id: "zisella" as const, label: "질쎄라", href: LASER_ROUTES.zisella },
  { id: "monalisa" as const, label: "모나리자 터치", href: LASER_ROUTES.monalisa },
  { id: "revive" as const, label: "리비브", href: LASER_ROUTES.revive },
] as const;

type TabId = (typeof TABS)[number]["id"];

type SearchParamsLike = Pick<URLSearchParams, "get">;

function tabFromSearchParams(sp: SearchParamsLike): TabId {
  const raw = sp.get("tab");
  if (raw === "zisella" || raw === "monalisa" || raw === "revive") return raw;
  return "zisella";
}

export function LaserCareSection() {
  const searchParams = useSearchParams();
  const tab = useMemo(() => tabFromSearchParams(searchParams), [searchParams]);

  return (
    <section
      id="laser-care"
      className="scroll-mt-28 border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-16 md:py-24 lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
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
              {TABS.find((t) => t.id === tab)?.label}
            </li>
          </ol>
        </nav>

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="질레이저 시술 종류"
        >
          {TABS.map((t) => {
            const on = tab === t.id;
            return (
              <Link
                key={t.id}
                href={t.href}
                scroll={false}
                prefetch
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

        <div key={tab} role="tabpanel" className="space-y-12 md:space-y-16">
            {tab === "zisella" && <ZisellaPanel />}
            {tab === "monalisa" && <MonalisaPanel />}
            {tab === "revive" && <RevivePanel />}
          </div>
      </div>
    </section>
  );
}
