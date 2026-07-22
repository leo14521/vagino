/**
 * landing-1(자궁근종용해술) 원본 <footer> 마크업을 1:1 복제한 공통 푸터.
 * class → className 변환 외 원본 구조/클래스명 그대로 유지.
 */
export default function Footer() {
  return (
    <footer className="bg-[#FDFCFB] text-[#5B6D4A] border-t border-[#E9E4DB]/60">
      {/* 병원 정보 푸터 */}
      <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16 border-t border-[#E9E4DB]/50">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-x-12 lg:gap-y-0">
          {/* 로고: Trinity + 트리니티여성의원 한 줄, 간격 충분히 */}
          <div className="lg:justify-self-start">
            <a href="/" className="inline-flex items-baseline gap-3">
              <span className="serif text-2xl font-bold text-[#1A1F16] tracking-tight italic">Trinity</span>
              <span className="text-[#3E522D] font-semibold text-sm tracking-wide">트리니티여성의원</span>
            </a>
          </div>

          {/* 병원 정보: 줄 나눠서 사업자등록번호가 중간에 잘리지 않도록 */}
          <div className="space-y-1.5 lg:min-w-0">
            <p className="text-[13px] leading-snug text-[#6B7562]">
              <span className="text-[#1A1F16] font-semibold">의료기관명칭</span> 트리니티여성의원
              <span className="mx-2 text-[#E9E4DB]">|</span>
              <span className="text-[#1A1F16] font-semibold">대표자</span> 정난희, 양기열
            </p>
            <p className="text-[13px] leading-snug text-[#6B7562]">
              <span className="text-[#1A1F16] font-semibold">사업자등록번호</span> 284-07-01358
            </p>
            <p className="text-[13px] leading-snug text-[#6B7562]">
              <span className="text-[#1A1F16] font-semibold">주소</span> 서울시 강남구 도산대로 108 렉스타워 3층
            </p>
          </div>

          {/* 고객센터: 왼쪽 정렬 (02.512.8875 기준) */}
          <div className="lg:justify-self-start">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#A1A89A]">Customer Center</p>
              <p className="text-[#1A1F16] font-bold text-lg tracking-tight leading-tight">
                <a href="tel:02-512-8875" className="hover:text-[#3E522D] transition-colors">02.512.8875</a>
                <span className="text-[#E9E4DB] mx-2">|</span>
                <a href="tel:010-7408-8875" className="hover:text-[#3E522D] transition-colors">010.7408.8875</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
