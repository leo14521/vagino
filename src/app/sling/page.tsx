// 요실금 미니슬링수술 전용 페이지 (질성형 페이지 구조 참조·발전)

import type { Metadata } from "next";
import { SlingSideNav } from "@/components/sections/sling/SlingSideNav";
import { SlingHeroSection } from "@/components/sections/sling/SlingHeroSection";
import { SlingInsightSection } from "@/components/sections/sling/SlingInsightSection";
import { SlingComparisonSection } from "@/components/sections/sling/SlingComparisonSection";
import { SlingProcedureSection } from "@/components/sections/sling/SlingProcedureSection";
import { SlingFAQSection } from "@/components/sections/sling/SlingFAQSection";
import { ConsultationSection } from "@/components/sections/consultation-section";

export const metadata: Metadata = {
  title: "요실금 미니슬링수술 | 트리니티여성의원",
  description: "최소 침습 요실금 수술, 미니슬링. 짧은 수술 시간과 빠른 회복. 트리니티 여성의원.",
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
        <ConsultationSection />
      </div>
    </main>
  );
}
