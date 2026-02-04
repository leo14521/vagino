"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ConsultationSection() {
  return (
    // 1. 배경색: Dark Green (#2E3A30) 적용
    <section id="consultation" className="py-24 lg:py-32 bg-[#2E3A30] font-pretendard flex items-center justify-center">
      
      {/* 폰트 로드 */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @font-face {
            font-family: 'GmarketSansBold';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
            font-weight: bold; font-style: normal;
        }
        @font-face {
            font-family: 'KoPubBatang';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KoPubBatangMedium.woff') format('woff');
            font-weight: normal; font-style: normal;
        }
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
        .font-gmarket-bold { font-family: 'GmarketSansBold', sans-serif; }
        .font-kopub { font-family: 'KoPubBatang', serif; }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* 2. 메인 카드 (White Box with Rounded Corners) */}
        <div className="bg-[#FAF9F6] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Branding & Message Area [수정된 부분] */}
          <div className="lg:w-2/5 p-10 lg:p-14 bg-[#F5F2EB] flex flex-col justify-center">
            
            {/* 영문 키커 (Premium & Private 느낌 강조) */}
            <span className="font-gmarket-bold text-[#2E3A30] tracking-[0.2em] text-[15px] uppercase mb-4 block opacity-60">
                여의사 대표원장 1:1 상담
            </span>

            {/* 메인 헤드라인 (3040 타겟 페인 포인트 자극) */}
            <h2 className="font-kopub text-2xl md:text-3xl text-[#1A1F16] leading-tight mb-6 break-keep">
              미뤄왔던 고민, <br className="hidden md:block"/> 
              지금 여기서, <br />
              <span className="text-[#3E4A3D] font-bold">끝낼 수 있습니다.</span>
            </h2>
            
            {/* 서브 카피 (공감 + 여의사 강점 강조) */}
            <p className="font-pretendard text-[#5C5C5C] text-lg leading-relaxed mb-10 break-keep">
              "정말 수술밖에 답이 없을까요?"<br/>
              불안한 마음까지 헤아리는 <strong className="text-[#2E3A30]"><br></br>여의사 산부인과</strong>,<br/>
              트리니티가 당신의 자궁을 지키는 <br></br>해답을 드립니다.
            </p>

            {/* 체크리스트 (구체적 이득 제시) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E3A30] flex-shrink-0" />
                <span className="font-pretendard font-bold text-[#2E3A30] text-sm">누구에게도 말 못한 통증 1:1 심층 상담</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E3A30] flex-shrink-0" />
                <span className="font-pretendard font-bold text-[#2E3A30] text-sm">내 증상에 딱 맞는 비수술 치료 설계</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2E3A30] flex-shrink-0" />
                <span className="font-pretendard font-bold text-[#2E3A30] text-sm">비용 및 실비 보험 적용 여부 확인</span>
              </div>
            </div>
          </div>


          {/* Right: Input Form Area (기존 유지) */}
          <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="font-gmarket-bold text-[10px] text-[#2E3A30] uppercase tracking-widest">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="성함"
                    className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB]"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-gmarket-bold text-[10px] text-[#2E3A30] uppercase tracking-widest">
                    Phone
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="연락처"
                    className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB]"
                  />
                </div>
              </div>

              {/* Inquiry Textarea */}
              <div className="space-y-2">
                <label htmlFor="inquiry" className="font-gmarket-bold text-[10px] text-[#2E3A30] uppercase tracking-widest">
                  Inquiry
                </label>
                <textarea 
                  id="inquiry" 
                  rows={4}
                  placeholder="궁금하신 내용을 남겨주세요."
                  className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB] resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                className="w-full h-14 rounded-xl bg-[#3E4A3D] hover:bg-[#2E3A30] text-white font-gmarket-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                상담 신청 완료
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}