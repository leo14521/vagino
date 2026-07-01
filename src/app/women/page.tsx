import type { Metadata } from "next";
import { WomenSurgerySections } from "@/components/women/women-surgery-sections";
import {
  FaqPageJsonLd,
  MedicalProcedureJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { WOMEN_FAQ_ENTRIES } from "@/data/faq-women";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const path = "/women";
const canonical = `${SITE_URL}${path}`;

const PAGE_TITLE =
  "질축소수술(이쁜이수술) | 3중 복원 질성형 - 트리니티여성의원 강남";

const PAGE_DESCRIPTION =
  "단순한 질성형이 아닌 골반기저근까지 복원하는 트리니티여성의원 질축소수술(이쁜이수술). 통증을 최소화한 수면마취와 당일 퇴원, 여의사 전문의 1:1 맞춤 진료를 경험하세요.";

const PROCEDURE_NAME = "질축소수술 (이쁜이수술)";
const PROCEDURE_DESCRIPTION =
  "늘어진 질 점막과 약해진 골반기저근을 3중으로 복원하여 질 이완증을 치료하고 탄력을 회복하는 여성성형 수술";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "질축소수술",
    "이쁜이수술",
    "질성형재수술",
    "강남질축소",
    "질성형",
    "질성형수술",
    "질 탄력",
    SITE_NAME,
    "강남 여성의원",
  ],
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: canonical,
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function WomenSpecialtyPage() {
  return (
    <>
      <WebPageJsonLd path={path} name={PAGE_TITLE} description={PAGE_DESCRIPTION} />
      <MedicalProcedureJsonLd
        path={path}
        name={PROCEDURE_NAME}
        procedureType="TherapeuticProcedure"
        description={PROCEDURE_DESCRIPTION}
      />
      <FaqPageJsonLd entries={WOMEN_FAQ_ENTRIES} />
      <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
        <WomenSurgerySections />
      </div>
    </>
  );
}
