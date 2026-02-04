"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// [수정됨] 질성형 수술 위주의 리얼 후기 데이터
const REAL_REVIEWS = [
  {
    id: 1,
    source: "수술 후기",
    rating: 5,
    title: "40대 이후 고민이던 헐거운 느낌, 수술 후 해결되었습니다",
    content: "40대가 된 후 관계 중 헐거운 느낌이 들어 수술을 결심했습니다. 생각 외로 과정이 간단했고(수면마취), 통증도 별로 없었습니다. 수술 후 이틀 지나서 바로 대중교통 이용, 회사 출근 등 일상생활이 편하게했습니다.",
    tags: ["40대여성성형", "질축소수술", "통증최소화"],
    author: "40대 직장인님",
    info: "질성형 수술 19일차"
  },
  {
    id: 2,
    source: "자필 후기",
    rating: 5,
    title: "아이 둘 낳고 떨어진 자신감, 남편이 더 좋아해요",
    content: "자연분만 후 예전 같지 않은 느낌 때문에 늘 위축되어 있었어요. 수술이라 겁이 났지만 원장님 상담 후 확신이 생겨 진행했습니다. 흉터도 전혀 안 보이고, 무엇보다 부부관계가 신혼 때로 돌아간 것 같아 너무 만족스럽습니다.",
    tags: ["출산후성형", "골반근육복원", "부부관계개선"],
    author: "30대 주부님",
    info: "질성형/골반근육재건 3개월차"
  },
  {
    id: 3,
    source: "재수술 후기",
    rating: 5,
    title: "타 병원 수술 후 불만족, 트리니티에서 해결했습니다",
    content: "예전에 다른 곳에서 수술받았는데 효과가 금방 사라져서 재수술을 알아보고 왔어요. 확실히 트리니티는 입구만 좁히는 게 아니라 안쪽까지 꼼꼼하게 잡아주는 게 느껴졌습니다.",
    tags: ["질성형재수술", "이쁜이수술", "안쪽까지탄탄"],
    author: "50대 여성님",
    info: "고난이도 재수술 1개월차"
  }
];

export function ReviewSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-white">
      <div className="container px-10 md:px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#3E522D] font-bold tracking-[0.1em] text-xs uppercase mb-3 block opacity-70">
              Real Stories
            </span>
            <h2 className="text-3xl lg:text-3xl font-serif font-bold text-[#1A1F16]">
              환자분들이 남겨주신<br />
              <span className="relative inline-block text-[#3E522D]">
                진솔한 자필 후기
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3E522D]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          
          {/* [Desktop] 전체 후기 보러가기 버튼 (링크 적용됨) */}
          <div className="hidden md:block text-right">
             <a 
               href="https://www.trinityclinic.co.kr/board/trinity_review" 
               target="_blank" 
               rel="noopener noreferrer"
             >
               <Button variant="link" className="text-[#3E522D] font-bold text-lg p-0 hover:no-underline hover:opacity-70 transition-opacity">
                 전체 후기 보러가기 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
             </a>
          </div>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REAL_REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E0D8] flex flex-col hover:shadow-xl hover:border-[#3E522D]/30 transition-all duration-300"
            >
              {/* 헤더: 소스 정보 */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F4EBE2]">
                <div className="w-10 h-10 rounded-full bg-[#3E522D]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#3E522D]" />
                </div>
                <div>
                  <p className="text-xs text-[#A1A89A] font-bold mb-0.5">{review.source}</p>
                  <div className="flex text-[#C5A065]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>

              {/* 본문: 인용구 스타일 */}
              <div className="relative mb-6 flex-grow">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[#3E522D]/10 fill-current" />
                <h3 className="font-bold text-lg text-[#1A1F16] mb-3 ml-2 break-keep leading-snug">
                  {review.title}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed pl-2 break-keep line-clamp-4">
                  "{review.content}"
                </p>
              </div>

              {/* 태그 & 작성자 정보 */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.tags.map((tag) => (
                    <span key={tag} className="bg-[#F9F9F9] text-[#6B7264] text-[11px] px-2 py-1 rounded font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-[#A1A89A] font-medium pt-3 border-t border-[#F9F9F9]">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{review.author}</span>
                  </div>
                  <span className="text-[#3E522D]">{review.info}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* [Mobile] 후기 더보기 버튼 (링크 적용됨) */}
        <div className="md:hidden mt-8 text-center">
            <a 
              href="https://www.trinityclinic.co.kr/board/trinity_review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="outline" className="w-full py-6 text-base font-bold border-[#3E522D] text-[#3E522D] hover:bg-[#3E522D] hover:text-white transition-colors">
                 후기 더보기 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </a>
        </div>

      </div>
    </section>
  );
}