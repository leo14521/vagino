import type { Metadata } from "next";
import { HOME_ROUTE, SITE_NAME, SITE_URL } from "@/lib/site";

export const WOMEN_HOME_PATH = HOME_ROUTE;
export const WOMEN_HOME_CANONICAL = `${SITE_URL}${HOME_ROUTE}`;

export const WOMEN_HOME_TITLE =
  "질성형수술(이쁜이수술·질축소수술) | 3중 복원 질성형 - 트리니티여성의원 강남";

export const WOMEN_HOME_DESCRIPTION =
  "강남 트리니티여성의원 질성형수술·이쁜이수술·질축소수술. 골반기저근 3중 복원, 수면마취·당일 퇴원, 수술 30~60분. 요실금·출산 후 이완·질염 고민, 여의사 1:1 맞춤 상담.";

export const WOMEN_PROCEDURE_NAME = "질성형수술 (이쁜이수술·질축소수술)";
export const WOMEN_PROCEDURE_DESCRIPTION =
  "임신·출산·노화로 이완된 질 점막과 골반기저근을 3중 복원하여 질 이완증을 치료하고 탄력·기능을 회복하는 여성 성형수술";

export const womenHomeMetadata: Metadata = {
  title: { absolute: WOMEN_HOME_TITLE },
  description: WOMEN_HOME_DESCRIPTION,
  keywords: [
    "질성형수술",
    "질축소수술",
    "이쁜이수술",
    "질성형재수술",
    "강남질축소",
    "강남질성형",
    "질성형",
    "질 탄력",
    "요실금",
    SITE_NAME,
    "강남 여성의원",
  ],
  alternates: { canonical: WOMEN_HOME_CANONICAL },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: WOMEN_HOME_CANONICAL,
    siteName: SITE_NAME,
    title: WOMEN_HOME_TITLE,
    description: WOMEN_HOME_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: WOMEN_HOME_TITLE,
    description: WOMEN_HOME_DESCRIPTION,
  },
};
