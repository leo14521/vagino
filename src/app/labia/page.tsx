import type { Metadata } from "next";
import { Suspense } from "react";
import { LabiaCareSection } from "@/components/sections/perineum-care-section";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { LABIA_ROUTES, SITE_NAME, SITE_URL } from "@/lib/site";

const canonical = `${SITE_URL}${LABIA_ROUTES.hub}`;

export const metadata: Metadata = {
  title: "대음순수술",
  description:
    "대음순 확대·축소 수술, 회음부 제모·미백, 음핵수술(거상술·포경술). 트리니티여성의원 강남.",
  keywords: [
    "대음순수술",
    "대음순 확대",
    "대음순 축소",
    "회음부 제모",
    "회음부 미백",
    "음핵수술",
    "음핵성형",
    SITE_NAME,
    "강남",
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `대음순수술 | ${SITE_NAME}`,
    description: "대음순 형태 교정, 회음부 레이저 제모·미백 프로그램 안내.",
  },
};

function LabiaSectionFallback() {
  return (
    <div
      className="min-h-[50vh] animate-pulse border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-20"
      aria-hidden
    />
  );
}

export default function LabiaPage() {
  return (
    <>
      <WebPageJsonLd
        path={LABIA_ROUTES.hub}
        name="대음순수술"
        description="대음순 확대·축소, 회음부 제모·미백 등 트리니티여성의원 대음순 클리닉 안내."
      />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <header className="mx-auto max-w-3xl px-4 pb-4 pt-10 text-center md:pt-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E522D]">Labia</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1A1F16] md:text-4xl break-keep">
            대음순수술
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5C5C5C] break-keep">
            대음순 형태 교정, 회음부 제모·미백, 음핵수술을{" "}
            <strong className="text-[#1A1F16]">아래 탭에서</strong> 확인하실 수 있습니다.
          </p>
        </header>

        <Suspense fallback={<LabiaSectionFallback />}>
          <LabiaCareSection />
        </Suspense>
      </div>
    </>
  );
}
