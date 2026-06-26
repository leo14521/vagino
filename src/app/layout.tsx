import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import Script from "next/script"; // [필수] Script 컴포넌트 추가

import Footer from "@/components/layout/footer";
import FloatingBanner from "@/components/layout/floating-banner";
import { GlobalChrome } from "@/components/layout/global-chrome";
import { ClinicOrganizationJsonLd } from "@/components/seo/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 질성형·질레이저·회음부관리`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "트리니티여성의원 질성형, 질레이저(질쎄라·모나리자·리비브), 회음부관리(대음순수술·제모·미백) 안내. 강남 도산대로.",
  keywords: [
    SITE_NAME,
    "질성형",
    "질성형수술",
    "질레이저",
    "질쎄라",
    "모나리자",
    "리비브",
    "회음부관리",
    "대음순수술",
    "회음부 제모",
    "회음부 미백",
    "여성의원",
    "강남",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 질성형·질레이저·회음부관리`,
    description:
      "질성형 수술, 질 레이저, 회음부 대음순·제모·미백 클리닉 안내. 상담·예약.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YNzZSPJkQ4t7maISPeY3S24_D2KHiB1_EYlIfMSpPbs",
  },
  category: "health",
};

// Google Tag Manager — GA4는 GTM 컨테이너에서만 로드 (중복 방지)
const GTM_ID = "GTM-K322C26Q";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <ClinicOrganizationJsonLd />
        {/* 필요한 head 태그 내용이 있다면 여기에 유지 */}

        {/* GTM (Google Tag Manager) — GA4는 GTM 내 태그로만 운영 */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>

      <body className="min-h-screen bg-background font-sans antialiased selection:bg-[#3E522D] selection:text-white">
        {/* GTM Body (noscript) — body 태그 바로 아래 */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <SmoothScrollProvider>
          <GlobalChrome>
            <main className="relative flex w-full min-h-screen min-w-0 flex-col overflow-x-clip">{children}</main>
          </GlobalChrome>

          <Footer />
        </SmoothScrollProvider>

        {/* 4. 플로팅 배너 추가 */}
        {/* 플로팅 요소(fixed)는 스크롤/transform의 영향을 받지 않도록 Provider 밖에 두는 것이 안전합니다. */}
        <FloatingBanner />
      </body>
    </html>
  );
}
