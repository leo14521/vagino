import type { Metadata } from "next";
import { PerineumMinoraSurgerySection } from "@/components/sections/perineum-minora-tab";
import { Return14Hero } from "@/components/sections/return14-hero";
import { Return14MinoraStory } from "@/components/sections/return14-minora-story";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { LandingSeo } from "@/components/seo/landing-seo";
import { MINORA_ROUTES, SITE_NAME, SITE_URL } from "@/lib/site";

const canonical = `${SITE_URL}${MINORA_ROUTES.hub}`;

export const metadata: Metadata = {
  title: {
    absolute: "리턴 14 소음순수술 | 레이저 소음순 성형 - 강남 트리니티여성의원",
  },
  description:
    "리턴 14 소음순수술. 가위가 아닌 미세 레이저로 조각하듯 다듬는 소음순 절제·미백. 비대·비대칭·착색·쓸림 통증 교정, 1:1 맞춤 디자인 — 강남 트리니티여성의원.",
  keywords: [
    "리턴14소음순수술",
    "소음순수술",
    "소음순성형",
    "레이저 소음순 성형",
    "소음순 비대",
    "소음순 미백",
    SITE_NAME,
    "강남",
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `리턴 14 소음순수술 | ${SITE_NAME}`,
    description:
      "미세 레이저로 조각하듯 다듬는 리턴 14 소음순수술 — 비대·착색·쓸림 통증까지 1:1 맞춤 교정.",
  },
  twitter: {
    card: "summary_large_image",
    title: `리턴 14 소음순수술 | ${SITE_NAME}`,
    description:
      "미세 레이저로 조각하듯 다듬는 리턴 14 소음순수술 — 비대·착색·쓸림 통증까지 1:1 맞춤 교정.",
  },
};

export default function MinoraPage() {
  return (
    <>
      <WebPageJsonLd
        path={MINORA_ROUTES.hub}
        name="리턴 14 소음순수술"
        description="리턴 14 소음순수술 — 미세 레이저로 조각하듯 다듬는 소음순 절제·미백. 비대·비대칭·착색·쓸림 통증을 1:1 맞춤 디자인으로 교정하는 트리니티여성의원 소음순 클리닉 안내."
      />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <Return14Hero />

        <Return14MinoraStory />

        <PerineumMinoraSurgerySection />

        <LandingSeo topicId="minora" path={MINORA_ROUTES.hub} procedureType="SurgicalProcedure" />
      </div>
    </>
  );
}
