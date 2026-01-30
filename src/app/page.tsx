// src/app/page.tsx

import { SideNav } from "@/components/sections/side-nav";
// Footer는 보통 layout.tsx에 있지만, 여기서 사용하지 않는다면 지워도 됩니다.
// import { Footer } from "@/components/layout/footer"; 

// Sections Import
import { HeroSection } from "@/components/sections/hero-section";
import { InsightSection } from "@/components/sections/insight-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { AnatomySection } from "@/components/sections/anatomy-section";
import { PainFreeSection } from "@/components/sections/pain-free-section";
import { BrandVideoSection } from "@/components/sections/brand-video-section";
import { AuthoritySection } from "@/components/sections/authority-section";
import { ReviewSection } from "@/components/sections/review-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FacilityTour } from "@/components/home/FacilityTour"; // 새로 추가한 컴포넌트
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

      {/* 2. Problem */}
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

      {/* 5. Pain Free */}
      <div id="pain-free">
        <PainFreeSection />
      </div>

      {/* 6. Brand Film */}
      <div id="brand-video">
        <BrandVideoSection />
      </div>

      {/* 7. Authority */}
      <div id="authority">
        <AuthoritySection />
      </div>

      {/* 8. Review */}
      <div id="review">
        <ReviewSection />
      </div>

      {/* 9. FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* 10. Facility Tour (새로 추가된 위치) */}
      {/* FAQ 다음에 시설 안내가 나오고, 마지막에 상담 예약으로 이어지는 흐름입니다 */}
      <div id="tour">
        <FacilityTour />
      </div>

      {/* 11. Consultation (마지막 Call to Action) */}
      <div id="consultation">
        <ConsultationSection />
      </div>

    </main>
  );
}