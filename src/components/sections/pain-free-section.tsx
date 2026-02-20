"use client";

import { ShieldCheck, Moon, Clock } from "lucide-react";

export function PainFreeSection() {
  return (
    <section className="py-24 bg-[#F4EBE2]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[#3E522D] text-xs font-bold tracking-wider mb-6 inline-block border border-[#3E522D]/10">
              PAIN CONTROL SYSTEM
            </span>
            <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#1A1F16] mb-6 leading-tight">
              수술의 두려움,
              <br />
              <span className="text-[#3E522D]">잠시 꿈꾸는 동안</span> 끝납니다.
            </h2>
            <p className="text-[#6B7264] text-lg leading-relaxed mb-5">
              &quot;아플까 봐 걱정되시나요?&quot;
              <br />
              트리니티는 3단계 통증 케어로<br></br>
              수술 중 통증부담을 최대한 줄여 관리합니다.
              <br></br>자고 일어나면 모든 과정이 끝나있습니다.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 border border-[#E5E0D8] hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-[#F4EBE2] p-3 rounded-full shrink-0 text-[#3E522D]">
                <Moon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">편안한 수면 마취</h4>
                <p className="text-sm text-[#666]">
                  산부인과 전문의가 상주하여 안전하게 모니터링합니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 border border-[#E5E0D8] hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-[#F4EBE2] p-3 rounded-full shrink-0 text-[#3E522D]">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">빠른 당일 회복</h4>
                <p className="text-sm text-[#666]">
                  최소 침습 수술법으로 출혈과 붓기를 줄여 당일 퇴원이
                  가능합니다.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4 border border-[#E5E0D8] hover:-translate-y-1 transition-transform duration-300">
              <div className="bg-[#F4EBE2] p-3 rounded-full shrink-0 text-[#3E522D]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">프라이빗 회복실</h4>
                <p className="text-sm text-[#666]">
                  다른 사람과 마주치지 않는 1인실에서 충분히 안정을 취하세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
