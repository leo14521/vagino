import type { Metadata } from "next";
// import localFont from "next/font/local"; // 사용하지 않는다면 주석 처리
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
// import { Header } from "@/components/layout/header"; // 헤더가 필요 없다면 주석 처리
import { cn } from "@/lib/utils";

// 1. 새로 만든 컴포넌트 임포트
import Footer from "@/components/layout/footer"; 
import FloatingBanner from "@/components/layout/floating-banner";

// 폰트 설정 (기존 설정 유지)
const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif",
});

// 2. 메타데이터 업데이트 (RFA 센터 내용으로 변경)
export const metadata: Metadata = {
  title: "질성형수술 | 건강한 탄력복원을 중심으로",
  description: "이쁜이수술도 역시 트리니티 여성의원",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* 필요한 head 태그 내용이 있다면 여기에 유지 */}
        <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K322C26Q');</script>
<!-- End Google Tag Manager -->
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-[#3E522D] selection:text-white",
          notoSerif.variable
        )}
        style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
      >
        <SmoothScrollProvider>
          
          {/* 메인 콘텐츠 영역 */}
          {/* 기존 clip-path 등의 설정 유지 */}
          <main className="relative flex flex-col w-full min-h-screen">
            {children}
          </main>

          {/* 3. 푸터 추가 */}
          {/* 푸터는 페이지 흐름의 맨 마지막에 위치하므로 ScrollProvider 안, main 뒤에 둡니다. */}
          <Footer />

        </SmoothScrollProvider>

        {/* 4. 플로팅 배너 추가 */}
        {/* 플로팅 요소(fixed)는 스크롤/transform의 영향을 받지 않도록 Provider 밖에 두는 것이 안전합니다. */}
        <FloatingBanner />
        <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K322C26Q"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
      </body>
    </html>
  );
}