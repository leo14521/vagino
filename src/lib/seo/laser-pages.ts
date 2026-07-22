import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { LASER_ROUTES } from "@/lib/site";

export type LaserTabId = "zisella" | "monalisa" | "revive";

export const LASER_TAB_LABELS: Record<LaserTabId, string> = {
  zisella: "질쎄라",
  monalisa: "모나리자 터치",
  revive: "리비브",
};

export const LASER_PAGE_SEO: Record<
  LaserTabId,
  { path: string; title: string; description: string; keywords: string[]; procedureType: string }
> = {
  zisella: {
    path: LASER_ROUTES.zisella,
    title: "질쎄라 질레이저",
    description:
      "질쎄라(CO2 레이저) 질 타이트닝·질 건조 개선. 비수술 질레이저 시술 안내 — 트리니티여성의원 강남.",
    keywords: ["질쎄라", "질레이저", "질 타이트닝", "질 건조", SITE_NAME, "강남"],
    procedureType: "NoninvasiveProcedure",
  },
  monalisa: {
    path: LASER_ROUTES.monalisa,
    title: "모나리자 터치 질레이저",
    description:
      "모나리자 터치(MonaLisa Touch) 질 점막 재생·요실금·질 건조 케어. 강남 트리니티여성의원.",
    keywords: ["모나리자", "모나리자 터치", "질레이저", "질 건조", "요실금", SITE_NAME],
    procedureType: "NoninvasiveProcedure",
  },
  revive: {
    path: LASER_ROUTES.revive,
    title: "리비브 질레이저",
    description:
      "리비브 고주파 질레이저로 질 탄력·콜라겐 재생. 비수술 질 타이트닝 — 트리니티여성의원.",
    keywords: ["리비브", "질레이저", "고주파", "질 탄력", "콜라겐", SITE_NAME],
    procedureType: "NoninvasiveProcedure",
  },
};

export function buildLaserMetadata(tab: LaserTabId): Metadata {
  const seo = LASER_PAGE_SEO[tab];
  const canonical = `${SITE_URL}${seo.path}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: canonical,
      siteName: SITE_NAME,
      title: `${seo.title} | ${SITE_NAME}`,
      description: seo.description,
    },
  };
}
