"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** 질성형 히어로 — 스크롤 핀 없이 즉시 표시 */
export function HeroSection() {
  return (
    <section className="relative border-b border-[#E8E8E8] bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#FAF8F5_0%,#FFFFFF_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-12 text-center sm:py-14 md:py-16 lg:py-20">
        <p className="mb-4 text-[11px] font-extrabold tracking-[0.22em] text-[#957F6A]">
          ANATOMICAL RESTORATION
        </p>
        <h1 className="text-[1.75rem] font-extrabold leading-[1.25] tracking-[-0.03em] text-[#1A1F16] sm:text-[2.5rem] md:text-[3rem] break-keep">
          여성의 몸을,
          <br />
          <span className="text-[#5C5C5C]">여성의 관점에서 </span>
          설계합니다.
        </h1>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#6B7264] md:mt-6 md:text-base break-keep">
          넓어진 질과 골반근육의 해부학적 복원으로 기능과 자신감을 되찾습니다.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <Link
            href="#insight"
            className="inline-flex h-11 items-center gap-2 bg-[#3E522D] px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#2D3B1A] sm:h-12 sm:px-6"
          >
            자가 진단 시작
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="#consultation"
            className="inline-flex h-11 items-center border border-[#D8D2C8] bg-white px-5 text-sm font-extrabold text-[#3E522D] transition-colors hover:bg-[#F5F2EC] sm:h-12 sm:px-6"
          >
            1:1 상담 신청
          </Link>
        </div>
      </div>
    </section>
  );
}
