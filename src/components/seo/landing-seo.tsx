import { AEO_TOPICS, type AeoTopicId } from "@/lib/seo/aeo-content";
import { CLINIC, SITE_NAME, SITE_URL } from "@/lib/site";
import { LandingSeoBlock } from "@/components/seo/landing-seo-block";
import { TrinityCredentialsSection } from "@/components/sections/trinity-credentials-section";

const ORG_ID = `${SITE_URL}/#organization`;

/** 주제별 JSON-LD 번들 — MedicalClinic · ItemList · FAQPage · MedicalProcedure */
export function LandingSeoJsonLd({
  topicId,
  path,
  procedureType = "MedicalProcedure",
}: {
  topicId: AeoTopicId;
  path: string;
  procedureType?: string;
}) {
  const topic = AEO_TOPICS[topicId];
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${url}#clinic`,
        name: `${SITE_NAME} ${topic.specialty}`,
        url,
        medicalSpecialty: topic.specialty,
        parentOrganization: { "@id": ORG_ID },
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC.streetAddress,
          addressLocality: "강남구",
          addressRegion: "서울",
          addressCountry: "KR",
        },
        telephone: CLINIC.telephone,
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#procedure`,
        name: topic.specialty,
        procedureType,
        description: topic.intro,
        url,
        provider: { "@id": ORG_ID },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#related`,
        name: `${topic.specialty} 관련 시술`,
        itemListElement: topic.procedures.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "MedicalProcedure",
            name: p.name,
            description: p.description,
            provider: { "@id": ORG_ID },
          },
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: topic.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** JSON-LD + 숨김 텍스트 블록을 한 번에 렌더 */
export function LandingSeo({
  topicId,
  path,
  procedureType,
}: {
  topicId: AeoTopicId;
  path: string;
  procedureType?: string;
}) {
  return (
    <>
      <LandingSeoJsonLd topicId={topicId} path={path} procedureType={procedureType} />
      <TrinityCredentialsSection />
      <LandingSeoBlock topicId={topicId} />
    </>
  );
}
