import type { Metadata } from "next";
import { Suspense } from "react";
import { Sparkles } from "lucide-react";
import { LaserCareSection } from "@/components/sections/laser-care-section";
import { LaserPageFooter } from "@/components/sections/laser-link-section";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const path = "/laser";
const canonical = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "질레이저",
  description:
    "질레이저 질쎄라·모나리자·리비브. 질 탄력·건조·뇨실금 초기 등 비수술 케어. 트리니티여성의원.",
  keywords: ["질레이저", "질쎄라", "모나리자", "리비브", "질 탄력", SITE_NAME],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `질레이저 | ${SITE_NAME}`,
    description: "질쎄라, 모나리자, 리비브 등 질 레이저 시술 안내.",
  },
};

function LaserCareFallback() {
  return (
    <div
      className="min-h-[50vh] animate-pulse border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-20"
      aria-hidden
    />
  );
}

export default function LaserPage() {
  return (
    <>
      <WebPageJsonLd
        path={path}
        name="질레이저"
        description="질쎄라, 모나리자, 리비브 등 질·회음부 레이저 비수술 케어 안내."
      />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <header className="mx-auto max-w-3xl px-4 pb-6 pt-10 text-center md:pb-8 md:pt-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#3E522D]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#3E522D]">
            <Sparkles className="h-3 w-3" aria-hidden />
            Non-Surgical Laser Suite
          </div>
          <h1 className="text-3xl font-bold leading-tight text-[#1A1F16] break-keep md:text-4xl">
            질레이저
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5C5C5C] break-keep md:text-lg">
            질 타이트닝의 또 다른 선택 — 트리니티여성의원은{" "}
            <strong className="text-[#1A1F16]">질쎄라·모나리자 터치·리비브</strong> 등 검증된 레이저
            라인업으로, 수술 부담 없이 탄력과 삶의 질 개선을 함께 상담드립니다.
          </p>
        </header>

        <Suspense fallback={<LaserCareFallback />}>
          <LaserCareSection />
        </Suspense>

        <LaserPageFooter />
      </div>
    </>
  );
}
