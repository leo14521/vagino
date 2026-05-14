import type { Metadata } from "next";
import { Suspense } from "react";
import { PERINEUM_ROUTES, SITE_NAME, SITE_URL } from "@/lib/site";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { PerineumCareSection } from "@/components/sections/perineum-care-section";

const canonical = `${SITE_URL}${PERINEUM_ROUTES.hub}`;

export const metadata: Metadata = {
  title: "회음부관리",
  description:
    "대음순수술(확대·축소), 회음부 제모, 회음부 미백까지. 트리니티여성의원 회음부 심미·위생 클리닉 안내.",
  keywords: [
    "회음부관리",
    "대음순수술",
    "대음순 확대",
    "대음순 축소",
    "회음부 제모",
    "회음부 미백",
    SITE_NAME,
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `회음부관리 | ${SITE_NAME}`,
    description:
      "대음순 형태 교정, 회음부 레이저 제모, 색소 침착 개선. 맞춤 상담 안내.",
  },
};

function PerineumSectionFallback() {
  return (
    <div
      className="min-h-[50vh] animate-pulse border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-20"
      aria-hidden
    />
  );
}

export default function PerineumPage() {
  return (
    <>
      <WebPageJsonLd
        path={PERINEUM_ROUTES.hub}
        name="회음부관리"
        description="대음순수술, 회음부 제모, 회음부 미백 등 트리니티여성의원 회음부 심미·위생 클리닉 안내."
      />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <header className="mx-auto max-w-3xl px-4 pb-4 pt-10 text-center md:pt-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E522D]">Perineum</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1A1F16] md:text-4xl break-keep">
            회음부관리
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5C5C5C] break-keep">
            대음순 형태 교정, 회음부 제모, 회음부 미백을{" "}
            <strong className="text-[#1A1F16]">아래 탭에서 바로</strong> 확인하실 수 있습니다. 공식
            자료는{" "}
            <a
              href="https://www.trinityclinic.co.kr/sub/menu3-3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#3E522D] underline underline-offset-2 hover:text-[#2D3B1A]"
            >
              트리니티 클리닉
            </a>
            과 동일 계열입니다.
          </p>
        </header>

        <Suspense fallback={<PerineumSectionFallback />}>
          <PerineumCareSection />
        </Suspense>
      </div>
    </>
  );
}
