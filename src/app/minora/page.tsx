import type { Metadata } from "next";
import { PerineumMinoraSurgerySection } from "@/components/sections/perineum-minora-tab";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { MINORA_ROUTES, SITE_NAME, SITE_URL } from "@/lib/site";

const canonical = `${SITE_URL}${MINORA_ROUTES.hub}`;

export const metadata: Metadata = {
  title: "소음순수술",
  description:
    "소음순 모양성형·미백, 레이저 클리어 소음순. 비대·비대칭·착색 개선. 트리니티여성의원 강남.",
  keywords: ["소음순수술", "소음순성형", "소음순 미백", "소음순 비대", SITE_NAME, "강남"],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `소음순수술 | ${SITE_NAME}`,
    description: "소음순 모양·색 개선 수술 및 레이저 시술 안내.",
  },
};

export default function MinoraPage() {
  return (
    <>
      <WebPageJsonLd
        path={MINORA_ROUTES.hub}
        name="소음순수술"
        description="소음순 모양성형, 미백, 레이저 클리어 소음순 등 트리니티여성의원 소음순 클리닉 안내."
      />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <header className="mx-auto max-w-3xl px-4 pb-4 pt-10 text-center md:pt-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E522D]">Minora</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1A1F16] md:text-4xl break-keep">
            소음순수술
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5C5C5C] break-keep">
            매끄러운 모양과 자연스러운 주름 — 소음순 모양성형·미백 전문 안내입니다.
          </p>
        </header>

        <section className="scroll-mt-28 border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-16 md:py-24 lg:py-28">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <PerineumMinoraSurgerySection />
            <p className="mx-auto mt-12 max-w-2xl text-center text-[11px] leading-relaxed text-[#A1A89A]">
              시술·수술은 개인 해부·피부 상태에 따라 달라질 수 있습니다. 최종 계획은 면담 후
              결정됩니다.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
