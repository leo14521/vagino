import { buildLabiaMetadata, LABIA_PAGE_SEO } from "@/lib/seo/labia-pages";
import { LabiaCareSection } from "@/components/sections/perineum-care-section";
import {
  BreadcrumbJsonLd,
  MedicalProcedureJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { LandingSeo } from "@/components/seo/landing-seo";
import type { AeoTopicId } from "@/lib/seo/aeo-content";
import { HOME_ROUTE, LABIA_ROUTES } from "@/lib/site";
import type { LabiaTabId } from "@/lib/seo/labia-pages";

const LABIA_TOPIC_MAP: Record<LabiaTabId, AeoTopicId> = {
  labia: "labia",
  "hair-removal": "labia-hair-removal",
  whitening: "labia-whitening",
  clitoris: "labia-clitoris",
};

export function buildLabiaPage(tab: LabiaTabId) {
  const seo = LABIA_PAGE_SEO[tab];
  return {
    metadata: buildLabiaMetadata(tab),
    Page: function LabiaSubPage() {
      const isHub = tab === "labia";
      const breadcrumb = isHub
        ? [
            { name: "홈", path: HOME_ROUTE },
            { name: "여성성형센터", path: HOME_ROUTE },
            { name: "대음순수술", path: LABIA_ROUTES.hub },
          ]
        : [
            { name: "홈", path: HOME_ROUTE },
            { name: "여성성형센터", path: HOME_ROUTE },
            { name: "대음순수술", path: LABIA_ROUTES.hub },
            { name: seo.title, path: seo.path },
          ];
      return (
        <>
          <WebPageJsonLd path={seo.path} name={seo.title} description={seo.description} />
          <MedicalProcedureJsonLd
            path={seo.path}
            name={seo.title}
            procedureType={seo.procedureType}
            description={seo.description}
            bodyLocation="외음부"
          />
          <BreadcrumbJsonLd items={breadcrumb} />
          <div className="relative flex min-h-screen flex-col bg-[#FDFBF7]">
            <header className="mx-auto max-w-3xl px-4 pb-4 pt-10 text-center md:pt-14">
              {!isHub && (
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E522D]">Labia</p>
              )}
              <h1 className="mt-2 text-3xl font-bold leading-tight text-[#1A1F16] md:text-4xl break-keep">
                {isHub ? "대음순수술" : seo.title}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#5C5C5C] break-keep">
                {isHub ? (
                  <>
                    대음순 형태 교정, 외음부 제모·미백, 음핵수술을{" "}
                    <strong className="text-[#1A1F16]">아래 탭에서</strong> 확인하실 수 있습니다.
                  </>
                ) : (
                  seo.description
                )}
              </p>
            </header>

            <LabiaCareSection activeTab={tab} />
            <LandingSeo
              topicId={LABIA_TOPIC_MAP[tab]}
              path={seo.path}
              procedureType={seo.procedureType}
            />
          </div>
        </>
      );
    },
  };
}
