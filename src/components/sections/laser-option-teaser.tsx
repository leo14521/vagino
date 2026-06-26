"use client";

import Link from "next/link";
import { LASER_ROUTES } from "@/lib/site";

const OPTIONS = [
  { href: "/women#consultation", label: "질필러" },
  { href: LASER_ROUTES.revive, label: "비비브" },
  { href: LASER_ROUTES.monalisa, label: "모나리자터치" },
  { href: LASER_ROUTES.revive, label: "리비브" },
  { href: LASER_ROUTES.zisella, label: "질쎄라" },
] as const;

/** 홈(질성형) 랜딩 — 비수술 옵션 안내 후 `/laser` 등으로 유도 (원본 카피 기준) */
export function LaserOptionTeaser() {
  return (
    <section
      id="laser-link"
      className="scroll-mt-28 border-y border-[#E9E4DB]/70 bg-[#F1F4ED]/40 py-20 md:py-28"
    >
      <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#3E522D]">
          Non-Surgical Option
        </p>
        <h2 className="mt-4 font-serif text-2xl font-bold leading-snug text-[#1A1F16] break-keep md:text-4xl">
          &quot;탄력만 빠르게 채우고 싶다면?&quot;
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#5C5C5C] break-keep md:text-lg">
          시간과 비용이 부담되시나요? 트리니티는{" "}
          <strong className="text-[#1A1F16]">리비브, 모나리자터치</strong> 등 최상급 레이저 장비도 완비하고
          있습니다.
          <br />
          부담 없는 질 타이트닝 효과를 경험해 보세요.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {OPTIONS.map((o) => (
            <Link
              key={`${o.label}-${o.href}`}
              href={o.href}
              className="rounded-full border border-[#3E522D]/25 bg-white px-4 py-2.5 text-sm font-bold text-[#3E522D] shadow-sm transition-colors hover:border-[#3E522D] hover:bg-[#3E522D] hover:text-white"
            >
              {o.label}
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm font-semibold text-[#957F6A]">1 Day 간편시술 문의</p>
      </div>
    </section>
  );
}
