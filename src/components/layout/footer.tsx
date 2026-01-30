import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#3E522D] text-white py-16 lg:py-24 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif font-bold">{SITE_CONFIG.name}</h2>
            <p className="text-white/70 max-w-sm text-sm leading-relaxed">
              여성의 건강한 아름다움을 위한 프리미엄 의료 서비스를 제공합니다.
              <br />변하지 않는 원칙과 정직함으로 진료합니다.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-[#C5A065]">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>{SITE_CONFIG.contact.phone}</li>
              <li>{SITE_CONFIG.contact.address}</li>
              <li>Kakao: {SITE_CONFIG.contact.kakao}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-[#C5A065]">Information</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">이용약관</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors font-bold">개인정보처리방침</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white hover:underline transition-colors">비급여 진료비 안내</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
          © 2024 {SITE_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}