import type { Metadata } from "next";
import { LABIA_ROUTES, SITE_NAME, SITE_URL } from "@/lib/site";

export type LabiaTabId = "labia" | "hair-removal" | "whitening" | "clitoris";

export const LABIA_TAB_LABELS: Record<LabiaTabId, string> = {
  labia: "대음순수술",
  "hair-removal": "외음부 제모",
  whitening: "외음부 미백",
  clitoris: "음핵수술",
};

export const LABIA_PAGE_SEO: Record<
  LabiaTabId,
  {
    path: string;
    title: string;
    /** 있으면 타이틀 템플릿(%s | 트리니티여성의원)을 무시하고 이 문자열을 그대로 사용 */
    titleAbsolute?: string;
    description: string;
    keywords: string[];
    procedureType: string;
  }
> = {
  labia: {
    path: LABIA_ROUTES.surgery,
    title: "대음순수술",
    titleAbsolute: "대음순수술 | 주름 제거 및 볼륨 리프팅 - 강남 트리니티여성의원",
    description:
      "트리니티여성의원 대음순수술 클리닉. 노화와 잦은 마찰로 늘어지고 주름진 대음순을 매끄럽게 디자인하고 탄력 볼륨을 채워 동안 Y존을 완성합니다. 흉터 없는 미세 봉합, 여의사 1:1 맞춤 진료.",
    keywords: [
      "대음순수술",
      "대음순성형",
      "대음순주름",
      "대음순볼륨",
      "대음순늘어짐",
      "강남여성의원",
      SITE_NAME,
    ],
    procedureType: "SurgicalProcedure",
  },
  "hair-removal": {
    path: LABIA_ROUTES.hairRemoval,
    title: "외음부 제모",
    description:
      "여성 전문의 시술 외음부 레이저 제모. 브라질리언·비키니 라인 맞춤 — 트리니티여성의원.",
    keywords: ["외음부 제모", "여성 제모", "브라질리언 제모", "비키니 제모", SITE_NAME],
    procedureType: "NoninvasiveProcedure",
  },
  whitening: {
    path: LABIA_ROUTES.whitening,
    title: "외음부 미백",
    description:
      "외음부·소음순 색소 침착 레이저 미백·박피 프로그램. 강남 트리니티여성의원.",
    keywords: ["외음부 미백", "소음순 미백", "여성 미백", SITE_NAME, "강남"],
    procedureType: "NoninvasiveProcedure",
  },
  clitoris: {
    path: LABIA_ROUTES.clitoris,
    title: "음핵수술",
    description:
      "음핵 거상술·포경술 등 음핵 성형수술. 기능·미용 맞춤 상담 — 트리니티여성의원.",
    keywords: ["음핵수술", "음핵성형", "음핵 거상술", SITE_NAME, "강남"],
    procedureType: "SurgicalProcedure",
  },
};

export function buildLabiaMetadata(tab: LabiaTabId): Metadata {
  const seo = LABIA_PAGE_SEO[tab];
  const canonical = `${SITE_URL}${seo.path}`;
  const sharedTitle = seo.titleAbsolute ?? `${seo.title} | ${SITE_NAME}`;
  return {
    title: seo.titleAbsolute ? { absolute: seo.titleAbsolute } : seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: canonical,
      siteName: SITE_NAME,
      title: sharedTitle,
      description: seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: sharedTitle,
      description: seo.description,
    },
  };
}
