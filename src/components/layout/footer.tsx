// src/components/layout/footer.tsx
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#FDFCFB] text-[#5B6D4A] border-t border-[#E9E4DB]/60">
        {/* 문의/예약 CTA 섹션: Trinity Women's Clinic + 전화/네이버 예약 버튼 */}
        <div className="max-w-4xl mx-auto px-6 pt-16 lg:pt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F16] mb-12 serif tracking-tighter italic">
            Trinity Women&apos;s Clinic
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:02-512-8875"
              className="group flex-1 bg-white border border-[#E9E4DB] hover:border-[#3E522D] text-[#3A4035] py-5 px-8 rounded-[2.5rem] transition-all flex flex-col items-center gap-1 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-[#A1A89A] group-hover:text-[#3E522D] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  트리니티 1:1 전문상담
                </span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#1A1F16]">
                02-512-8875
              </span>
            </a>
            <a
              href="https://booking.naver.com/booking/13/bizes/318986"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 bg-white border border-[#E9E4DB] hover:border-[#3E522D] text-[#3A4035] py-5 px-8 rounded-[2.5rem] transition-all flex flex-col items-center gap-1 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-[#A1A89A] group-hover:text-[#3E522D] transition-colors">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  24시간 간편 온라인 예약
                </span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#1A1F16]">
                네이버 예약하기
              </span>
            </a>
          </div>
        </div>

        {/* 병원 정보 3열 그리드 */}
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          {/* PC: 3열 그리드, 상단 정렬·간격 축소로 균형 */}
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-x-12 lg:gap-y-0">
            {/* 로고: Trinity + 트리니티여성의원 한 줄, 간격 충분히 */}
            <div className="lg:justify-self-start">
              <Link
                href="/"
                className="inline-flex items-baseline gap-3 hover:opacity-80 transition-opacity"
              >
                <span className="serif text-2xl font-bold text-[#1A1F16] tracking-tight italic">
                  Trinity
                </span>
                <span className="text-[#3E522D] font-semibold text-sm tracking-wide">
                  트리니티여성의원
                </span>
              </Link>
            </div>

            {/* 병원 정보: 줄 나눠서 사업자등록번호가 중간에 잘리지 않도록 */}
            <div className="space-y-1.5 lg:min-w-0">
              <p className="text-[13px] leading-snug text-[#6B7562]">
                <span className="text-[#1A1F16] font-semibold">의료기관명칭</span>{" "}
                트리니티여성의원
                <span className="mx-2 text-[#E9E4DB]">|</span>
                <span className="text-[#1A1F16] font-semibold">대표자</span> 정난희,
                양기열
              </p>
              <p className="text-[13px] leading-snug text-[#6B7562]">
                <span className="text-[#1A1F16] font-semibold">사업자등록번호</span>{" "}
                284-07-01358
              </p>
              <p className="text-[13px] leading-snug text-[#6B7562]">
                <span className="text-[#1A1F16] font-semibold">주소</span> 서울시
                강남구 도산대로 108 렉스타워 3층
              </p>
            </div>

            {/* 고객센터: 왼쪽 정렬 (02.512.8875 기준) */}
            <div className="lg:justify-self-start">
              <div className="flex flex-col items-start gap-1">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#A1A89A]">
                  Customer Center
                </p>
                <p className="text-[#1A1F16] font-bold text-lg tracking-tight leading-tight">
                  <a
                    href="tel:02-512-8875"
                    className="hover:text-[#3E522D] transition-colors"
                  >
                    02.512.8875
                  </a>
                  <span className="text-[#E9E4DB] mx-2">|</span>
                  <a
                    href="tel:010-7408-8875"
                    className="hover:text-[#3E522D] transition-colors"
                  >
                    010.7408.8875
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* 모바일에서 플로팅 배너에 가려지지 않도록 여백 추가 */}
      <div className="h-[60px] lg:h-0" aria-hidden="true" />
    </>
  );
}
