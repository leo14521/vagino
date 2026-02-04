"use client";

import Link from "next/link";
import { Check, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6 relative overflow-hidden font-pretendard">
      
      {/* 배경 장식 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(#3E522D 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#3E522D]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#C5A065]/10 rounded-full blur-3xl pointer-events-none"></div>

      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @font-face {
            font-family: 'KoPubBatang';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/KoPubBatangMedium.woff') format('woff');
            font-weight: normal; font-style: normal;
        }
        .font-pretendard { font-family: 'Pretendard', sans-serif; }
        .font-kopub { font-family: 'KoPubBatang', serif; }
      `}</style>

      {/* 메인 카드 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white max-w-lg w-full rounded-[2.5rem] shadow-2xl p-10 md:p-14 text-center border border-[#EAE8E4]"
      >
        
        <div className="flex justify-center mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-24 h-24 bg-[#3E522D] rounded-full flex items-center justify-center shadow-lg relative"
          >
            <Check className="w-10 h-10 text-white stroke-[3]" />
            <div className="absolute inset-0 rounded-full border border-[#3E522D] animate-ping opacity-20"></div>
          </motion.div>
        </div>

        <h1 className="font-kopub text-3xl md:text-4xl text-[#1A1F16] font-bold mb-4 leading-tight">
          상담 신청이 <br />
          <span className="text-[#3E522D]">성공적으로 접수</span>되었습니다.
        </h1>

        <p className="text-[#5C5C5C] text-lg leading-relaxed mb-10 break-keep">
          트리니티 여성의원을 믿고 문의해 주셔서 감사합니다.<br />
          남겨주신 연락처로 전문 상담원이<br />
          <strong>빠른 시일 내에 연락드리겠습니다.</strong>
        </p>

        <div className="bg-[#F5F2EB] rounded-2xl p-6 mb-10 text-left">
          <p className="text-[#3E522D] font-bold text-sm mb-2 text-center uppercase tracking-widest">Operating Hours</p>
          <div className="w-8 h-px bg-[#3E522D]/20 mx-auto mb-4"></div>
          <ul className="text-sm text-[#5C5C5C] space-y-1 text-center">
            <li><strong>평일:</strong> 10:00 ~ 19:00</li>
            <li><strong>월/금:</strong> 야간진료 10:00 ~ 20:00</li>
            <li><strong>토요일:</strong> 10:00 ~ 15:00 (점심시간 없음)</li>
            <li><strong>점심시간:</strong> 13:00 ~ 14:00</li>
            <li className="text-xs text-[#A1A89A] mt-2">* 일요일 및 공휴일은 휴진입니다.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/" className="w-full">
            <Button 
              className="w-full h-14 rounded-xl bg-[#3E522D] hover:bg-[#2D3B1A] text-white text-lg font-bold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              홈으로 돌아가기
            </Button>
          </Link>
          
          <div className="flex gap-3 justify-center mt-2">
             <a href="https://pf.kakao.com/_NCAlxb" target="_blank" className="text-[#3E522D] text-sm font-bold border-b border-[#3E522D]/30 pb-0.5 hover:text-[#1A1F16] transition-colors flex items-center gap-1">
               카카오톡 문의하기 <ArrowRight className="w-3 h-3" />
             </a>
          </div>
        </div>

      </motion.div>
    </main>
  );
}