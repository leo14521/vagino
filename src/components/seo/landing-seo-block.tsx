"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AEO_TOPICS, type AeoTopicId } from "@/lib/seo/aeo-content";
import { cn } from "@/lib/utils";

/**
 * <footer> 위 SEO/AEO 텍스트 블록 (H2/H3 본문 + <details> FAQ)
 * - 전체를 숨기는 최상위 토글은 두지 않고 항상 노출한다.
 * - 상세 정보(의료시술정보)와 자주 묻는 질문은 "항목별로만" 접고 펼친다.
 */
export function LandingSeoBlock({ topicId }: { topicId: AeoTopicId }) {
  const topic = AEO_TOPICS[topicId];
  const [openBlock, setOpenBlock] = useState<number | null>(null);

  return (
    <section
      aria-labelledby={`seo-${topicId}-heading`}
      className="border-t border-[#E9E4DB]/60 bg-[#FDFCFB] py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#3E522D]">
            Clinical Guide
          </p>
          <h2
            id={`seo-${topicId}-heading`}
            className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16] sm:text-3xl break-keep">
            {topic.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#5A6354] break-keep">
            {topic.intro}
          </p>
        </header>

        <div className="mt-10">
          <h3 className="mb-3 text-base font-bold text-[#1A1F16] sm:text-lg">
            의료 시술 정보
          </h3>
          <article className="space-y-3">
            {topic.blocks.map((block, i) => {
              const open = openBlock === i;
              return (
                <div
                  key={block.title}
                  className="overflow-hidden rounded-2xl border border-[#E9E4DB] bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenBlock(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5">
                    <h4 className="text-base font-bold text-[#1A1F16] sm:text-lg break-keep">
                      {block.title}
                    </h4>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-[#3E522D] transition-transform duration-300",
                        open && "rotate-45",
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-in-out",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}>
                    <div className="overflow-hidden">
                      <div className="space-y-4 border-t border-[#E9E4DB]/80 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        {block.paragraphs.map((p, pi) => (
                          <p
                            key={pi}
                            className="text-[15px] leading-[1.75] text-[#4A5248] break-keep">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-base font-bold text-[#1A1F16] sm:text-lg">
            자주 묻는 질문
          </h3>
          <div className="space-y-2">
            {topic.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E9E4DB] bg-white px-5 py-3.5 open:shadow-sm sm:px-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-semibold text-[#1A1F16] marker:content-none break-keep">
                  {faq.question}
                  <Plus
                    className="h-4 w-4 shrink-0 text-[#3E522D] transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-[14px] leading-[1.75] text-[#4A5248] break-keep">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
