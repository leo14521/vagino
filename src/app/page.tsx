// src/app/page.tsx

import { SideNav } from "@/components/sections/side-nav";

// [수정 완료] HeroSection은 hero-section 파일에서 가져옵니다.
import { HeroSection } from "@/components/sections/hero-section";

// [핵심 수정] InsightSection은 방금 만드신 "insight-section.tsx" 파일에서 가져와야 합니다!
import { InsightSection } from "@/components/sections/insight-section"; 

// 나머지 섹션들은 그대로 유지
import { ComparisonSection } from "@/components/sections/comparison-section";
import { AnatomySection } from "@/components/sections/anatomy-section";
import { PainFreeSection } from "@/components/sections/pain-free-section";
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
        {/* 이제 insight-section.tsx의 내용(스토리텔링+체크리스트)이 여기에 뜹니다 */}
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