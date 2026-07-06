import { HeroSection } from "@/components/sections/hero-section";
import { InsightSection } from "@/components/sections/insight-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { AnatomySection } from "@/components/sections/anatomy-section";
import { PainFreeSection } from "@/components/sections/pain-free-section";
import { LaserOptionTeaser } from "@/components/sections/laser-option-teaser";
import { BrandVideoSection } from "@/components/sections/brand-video-section";
import { AuthoritySection } from "@/components/sections/authority-section";
import { ReviewSection } from "@/components/sections/review-section";
import { FAQSection } from "@/components/sections/faq-section";
import { WomenClinicalInfographicSection } from "@/components/women/women-clinical-infographic-section";
import { WomenAeoSection } from "@/components/women/women-aeo-section";
import { FacilityTour } from "@/components/home/FacilityTour";
import { ConsultationSection } from "@/components/sections/consultation-section";

/** 질성형 메인 랜딩 `/` */
export function WomenSurgerySections() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="insight" className="scroll-mt-28">
        <InsightSection />
      </div>
      <div id="comparison" className="scroll-mt-28">
        <ComparisonSection />
      </div>
      <div id="anatomy" className="scroll-mt-28">
        <AnatomySection />
      </div>
      <div id="pain-free" className="scroll-mt-28">
        <PainFreeSection />
      </div>
      <LaserOptionTeaser />
      <div id="brand-video" className="scroll-mt-28">
        <BrandVideoSection />
      </div>
      <div id="doctors" className="scroll-mt-28">
        <AuthoritySection />
      </div>
      <div id="review" className="scroll-mt-28">
        <ReviewSection />
      </div>
      <WomenClinicalInfographicSection />
      <div id="faq" className="scroll-mt-28">
        <FAQSection />
      </div>
      <WomenAeoSection />
      <FacilityTour />
      <div id="consultation" className="scroll-mt-28">
        <ConsultationSection />
      </div>
    </>
  );
}
