"use client";

import { motion } from "framer-motion";
import { REVIEWS_DATA } from "@/lib/constants";
import { Star, Quote, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReviewSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#3E522D] font-bold tracking-[0.1em] text-xs uppercase mb-3 block opacity-70">
              Real Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1A1F16]">
              맘카페/커뮤니티<br />
              <span className="relative inline-block text-[#3E522D]">
                검증된 찐후기
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#3E522D]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <Button variant="link" className="text-[#3E522D] font-bold">
               전체 후기 보러가기 <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
          </div>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS_DATA.map((review, index) => (
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
                <h3 className="font-bold text-lg text-[#1A1F16] mb-3 ml-2 line-clamp-1">{review.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed pl-2 line-clamp-3">
                  "{review.content}"
                </p>
              </div>

              {/* 태그 & 작성자 정보 */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.tags.map((tag) => (
                    <span key={tag} className="bg-[#F9F9F9] text-[#6B7264] text-[11px] px-2 py-1 rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs text-[#A1A89A] font-medium pt-3 border-t border-[#F9F9F9]">
                  <span>{review.author}</span>
                  <span>{review.info}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="md:hidden mt-8 text-center">
            <Button variant="outline" className="w-full">
               후기 더보기 <ArrowRight className="ml-2 w-4 h-4" />
             </Button>
        </div>

      </div>
    </section>
  );
}