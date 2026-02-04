// src/app/page.tsx

import { SideNav } from "@/components/sections/side-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { InsightSection } from "@/components/sections/insight-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { AnatomySection } from "@/components/sections/anatomy-section";
import { PainFreeSection } from "@/components/sections/pain-free-section";

// [추가됨] 새로 만든 질레이저 장비 섹션 불러오기
import { LaserLinkSection } from "@/components/sections/laser-link-section";

import { BrandVideoSection } from "@/components/sections/brand-video-section";
import { AuthoritySection } from "@/components/sections/authority-section";
import { ReviewSection } from "@/components/sections/review-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FacilityTour } from "@/components/home/FacilityTour";
import { ConsultationSection } from "@/components/sections/consultation-section";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FDFBF7] relative">
      
      {/* 사이드 내비게이션 */}
      <SideNav />

      {/* 1. Hook */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* 2. Problem & Solution (스토리텔링 + 자가진단) */}
      <div id="insight">
        <InsightSection />
      </div>

      {/* 3. Solution Contrast */}
      <div id="comparison">
        <ComparisonSection />
      </div>

      {/* 4. Evidence (3D) */}
      <div id="anatomy">
        <AnatomySection />
      </div>

      {/* 5. Pain Free (통증 관리) */}
      <div id="pain-free">
        <PainFreeSection />
      </div>

      {/* [NEW] 6. Laser Tightening (장비 소개) */}
      {/* 통증 관리 설명 후, 구체적인 장비 솔루션을 보여줍니다. */}
      <div id="laser-link">
        <LaserLinkSection />
      </div>

      {/* 7. Brand Film */}
      <div id="brand-video">
        <BrandVideoSection />
      </div>

      {/* 8. Authority */}
      <div id="authority">
        <AuthoritySection />
      </div>

      {/* 9. Review */}
      <div id="review">
        <ReviewSection />
      </div>

      {/* 10. FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* 11. Facility Tour */}
      <div id="tour">
        <FacilityTour />
      </div>

      {/* 12. Consultation (마지막 Call to Action) */}
      <div id="consultation">
        <ConsultationSection />
      </div>

    </main>
  );
}