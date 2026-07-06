import type { Metadata } from "next";
import { WonderfillLandingSection } from "@/components/sections/wonderfill-landing-section";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { FILLER_ROUTES, SITE_NAME, SITE_URL } from "@/lib/site";

const canonical = `${SITE_URL}${FILLER_ROUTES.hub}`;

export const metadata: Metadata = {
  title: "질필러 · 원더필",
  description:
    "원더필 질필러 — 콜라겐 기반 비수술 질 탄력·볼륨 시술. 당일 시술, 1cc 99만원~. 강남 트리니티여성의원.",
  keywords: [
    "질필러",
    "원더필",
    "질 필러",
    "질 탄력",
    "비수술 질성형",
    "원더필 가격",
    SITE_NAME,
    "강남",
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: `질필러 원더필 | ${SITE_NAME}`,
    description: "원더필 질필러 시술 원리, 효과, 가격 안내.",
  },
};

export default function FillerPage() {
  return (
    <>
      <WebPageJsonLd
        path={FILLER_ROUTES.hub}
        name="질필러 원더필"
        description="원더필 질필러 — 콜라겐 재생 기반 비수술 질 탄력·볼륨 시술 안내."
      />
      <div className="relative flex min-h-screen flex-col">
        <WonderfillLandingSection />
      </div>
    </>
  );
}
