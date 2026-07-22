import { Sparkles } from "lucide-react";
import { LaserCareSection } from "@/components/sections/laser-care-section";
import { LaserPageFooter } from "@/components/sections/laser-link-section";
import {
  BreadcrumbJsonLd,
  MedicalProcedureJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { LandingSeo } from "@/components/seo/landing-seo";
import { buildLaserMetadata, LASER_PAGE_SEO } from "@/lib/seo/laser-pages";
import { LASER_ROUTES } from "@/lib/site";
import type { LaserTabId } from "@/lib/seo/laser-pages";

export function buildLaserPage(tab: LaserTabId) {
  const seo = LASER_PAGE_SEO[tab];
  return {
    metadata: buildLaserMetadata(tab),
    Page: function LaserSubPage() {
      const isHub = tab === "zisella";
      return (
        <>
          <WebPageJsonLd path={seo.path} name={seo.title} description={seo.description} />
          <MedicalProcedureJsonLd
            path={seo.path}
            name={seo.title}
            procedureType={seo.procedureType}
            description={seo.description}
          />
          <BreadcrumbJsonLd
            items={[
              { name: "질레이저", path: LASER_ROUTES.hub },
              { name: seo.title, path: seo.path },
            ]}
          />
          <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
            <header className="mx-auto max-w-3xl px-4 pb-6 pt-10 text-center md:pb-8 md:pt-14">
              {isHub && (
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#3E522D]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#3E522D]">
                  <Sparkles className="h-3 w-3" aria-hidden />
                  Non-Surgical Laser Suite
                </div>
              )}
              <h1 className="text-3xl font-bold leading-tight text-[#1A1F16] break-keep md:text-4xl">
                {isHub ? "질레이저" : seo.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#5C5C5C] break-keep md:text-lg">
                {isHub ? (
                  <>
                    질 타이트닝의 또 다른 선택 — 트리니티여성의원은{" "}
                    <strong className="text-[#1A1F16]">질쎄라·모나리자 터치·리비브</strong> 등 검증된
                    레이저 라인업으로, 수술 부담 없이 탄력과 삶의 질 개선을 함께 상담드립니다.
                  </>
                ) : (
                  seo.description
                )}
              </p>
            </header>

            <LaserCareSection activeTab={tab} />
            <LandingSeo topicId="laser" path={seo.path} procedureType={seo.procedureType} />
            <LaserPageFooter />
          </div>
        </>
      );
    },
  };
}
