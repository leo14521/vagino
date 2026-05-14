import type { Metadata } from "next";
import { WomenSurgerySections } from "@/components/women/women-surgery-sections";
import { FaqPageJsonLd, WebPageJsonLd } from "@/components/seo/json-ld";
import { WOMEN_FAQ_ENTRIES } from "@/data/faq-women";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const path = "/women";
const canonical = `${SITE_URL}${path}`;

export const metadata: Metadata = {
  title: "질성형",
  description:
    "질성형수술 원리, 통증 케어, 의료진·후기·FAQ·상담. 골반저근 복원·탄력. 트리니티여성의원 강남.",
  keywords: ["질성형", "질성형수술", "질 탄력", "질축소", SITE_NAME, "강남 여성의원"],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `질성형 | ${SITE_NAME}`,
    description: "질성형 수술 원리·통증 케어·의료진·후기·상담 안내.",
  },
};

export default function WomenSpecialtyPage() {
  return (
    <>
      <WebPageJsonLd
        path={path}
        name="질성형"
        description="질성형 수술 원리, 통증 케어, 의료진·후기·FAQ·상담 안내."
      />
      <FaqPageJsonLd entries={WOMEN_FAQ_ENTRIES} />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <WomenSurgerySections />
      </div>
    </>
  );
}
