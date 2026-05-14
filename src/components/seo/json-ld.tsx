import { CLINIC, SITE_NAME, SITE_URL } from "@/lib/site";
import type { FaqEntry } from "@/data/faq-women";

const ORG_ID = `${SITE_URL}/#organization`;

export function ClinicOrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": ORG_ID,
        name: CLINIC.legalName,
        url: SITE_URL,
        telephone: CLINIC.telephone,
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC.streetAddress,
          addressLocality: "강남구",
          addressRegion: "서울",
          addressCountry: "KR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
        inLanguage: "ko-KR",
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

export function WebPageJsonLd({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": ORG_ID },
    inLanguage: "ko-KR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqPageJsonLd({ entries }: { entries: FaqEntry[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((e) => ({
      "@type": "Question",
      name: e.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: e.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
