// src/components/layout/footer.tsx
import { Phone, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#FBFBFA] text-[#A1A89A] py-24 lg:py-32 border-t border-[#E9E4DB]/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F16] mb-12 serif tracking-tighter italic">
            Trinity Women's Clinic
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            {/* 전화 연결 */}
            <a
              href="tel:02-512-8875"
              className="group flex-1 bg-white border border-[#E9E4DB] hover:border-[#3E522D] text-[#3A4035] py-5 px-8 rounded-[2.5rem] transition-all flex flex-col items-center gap-1 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#A1A89A] group-hover:text-[#3E522D] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  트리니티 1:1 전문상담
                </span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                02-512-8875
              </span>
            </a>

            {/* 네이버 예약 */}
            <a
              href="https://booking.naver.com/booking/13/bizes/318986"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 bg-white border border-[#E9E4DB] hover:border-[#3E522D] text-[#3A4035] py-5 px-8 rounded-[2.5rem] transition-all flex flex-col items-center gap-1 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#A1A89A] group-hover:text-[#3E522D] transition-colors">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  24시간 간편 온라인 예약
                </span>
              </div>
              <span className="text-2xl font-black tracking-tight">
                네이버 예약하기
              </span>
            </a>
          </div>
        </div>
      </footer>
      {/* 모바일에서 플로팅 배너에 가려지지 않도록 여백 추가 */}
      <div className="h-[60px] lg:h-0"></div>
    </>
  );
}