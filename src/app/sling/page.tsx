// 요실금 미니슬링수술 전용 페이지 (질성형 페이지 구조 참조·발전)

import type { Metadata } from "next";
import { SlingSideNav } from "@/components/sections/sling/SlingSideNav";
import { SlingHeroSection } from "@/components/sections/sling/SlingHeroSection";
import { SlingInsightSection } from "@/components/sections/sling/SlingInsightSection";
import { SlingComparisonSection } from "@/components/sections/sling/SlingComparisonSection";
import { SlingProcedureSection } from "@/components/sections/sling/SlingProcedureSection";
import { SlingFAQSection } from "@/components/sections/sling/SlingFAQSection";
import { ConsultationSection } from "@/components/sections/consultation-section";
import { LandingSeo } from "@/components/seo/landing-seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const path = "/sling";
const canonical = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "요실금 미니슬링수술",
  description:
    "요실금 미니슬링 최소침습 수술. 복압성 요실금, 짧은 수술·당일 퇴원. 트리니티여성의원.",
  keywords: ["요실금", "미니슬링", "요실금 수술", "스트레스성 요실금", SITE_NAME],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `요실금 미니슬링 | ${SITE_NAME}`,
    description: "최소 침습 요실금 미니슬링 수술 안내.",
  },
};

export default function SlingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FDFBF7] relative">
      <SlingSideNav />

      <div id="hero">
        <SlingHeroSection />
      </div>
      <div id="insight">
        <SlingInsightSection />
      </div>
      <div id="comparison">
        <SlingComparisonSection />
      </div>
      <div id="procedure">
        <SlingProcedureSection />
      </div>
      <div id="faq">
        <SlingFAQSection />
      </div>
      <div id="consultation">
        <ConsultationSection category="갱년기·요실금클리닉" />
      </div>

      <LandingSeo topicId="sling" path={path} procedureType="SurgicalProcedure" />
    </main>
  );
}
