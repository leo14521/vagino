import type { Metadata } from "next";
import localFont from "next/font/local";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

// 폰트 설정 (Pretendard는 웹폰트로 대체, Noto Serif는 구글)
const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "Trinity Women's Clinic | True Vaginoplasty",
  description: "여성의 잃어버린 자신감을 되찾아주는 트리니티 여성성형 센터입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* ... (생략) */}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-[#3E522D] selection:text-white",
          notoSerif.variable
        )}
        style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}
      >
        <SmoothScrollProvider>
         
          
          {/* ▼▼▼ [수정된 부분] overflow-x-hidden 삭제, clip-path 추가 ▼▼▼ */}
          <main className="relative flex flex-col w-full min-h-screen"> 
            {children}
          </main>
          
        </SmoothScrollProvider>
      </body>
    </html>
  );
}