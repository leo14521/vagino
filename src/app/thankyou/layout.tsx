import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "상담 접수 완료",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
