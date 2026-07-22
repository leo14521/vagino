"use client";

import { FormEvent, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CONTACT_FIELD_NAMES,
  CONTACT_FORM_ACTION,
  CONTACT_FORM_HIDDEN,
  withCategoryTag,
  type ConsultCategory,
} from "@/lib/contact-form";

export function ConsultationSection({
  category = "여성성형클리닉",
}: {
  /** 페이지 주제에 맞는 상담분야 — 메모 맨 앞에 태깅됨 */
  category?: ConsultCategory;
}) {
  const inquiryRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const privacy = e.currentTarget.querySelector<HTMLInputElement>("#privacy");
    if (privacy && !privacy.checked) {
      e.preventDefault();
      alert("개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    if (inquiryRef.current) {
      inquiryRef.current.value = withCategoryTag(category, inquiryRef.current.value);
    }
  };

  return (
    <section
      id="consultation"
      className="py-24 lg:py-32 bg-[#2E3A30] font-pretendard flex items-center justify-center">
      {/* 폰트 설정 */}
      <style>{`
        @font-face {
            font-family: 'GmarketSansBold';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
            font-weight: bold; font-style: normal;
        }
        .font-gmarket-bold { font-family: 'GmarketSansBold', sans-serif; }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="bg-[#FAF9F6] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* [Left] 메시지 영역 */}
          <div className="lg:w-2/5 p-10 lg:p-14 bg-[#F5F2EB] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#EAE8E4]">
            <span className="font-gmarket-bold text-[#2E3A30] tracking-[0.2em] text-[12px] uppercase mb-4 block opacity-60">
              Private Consultation
            </span>
            <h2 className="font-kopub text-2xl md:text-3xl text-[#1A1F16] leading-tight mb-6 break-keep">
              미뤄왔던 고민, <br className="hidden md:block" />
              지금 여기서, <br />
              <span className="text-[#3E4A3D] font-bold">
                끝낼 수 있습니다.
              </span>
            </h2>
            <p className="font-pretendard text-[#5C5C5C] text-lg leading-relaxed mb-10 break-keep">
              &ldquo;정말 수술밖에 답이 없을까요?&rdquo;
              <br />
              불안한 마음까지 헤아리는{" "}
              <strong className="text-[#2E3A30]">
                <br></br>여의사 산부인과
              </strong>
              ,<br />
              트리니티가 그 해답을 드립니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2E3A30]" />
                </div>
                <span className="font-pretendard font-bold text-[#2E3A30] text-sm">
                  누구에게도 말 못한 통증 1:1 심층 상담
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2E3A30]" />
                </div>
                <span className="font-pretendard font-bold text-[#2E3A30] text-sm">
                  내 증상에 딱 맞는 수술/비수술 치료 설계
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-full shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2E3A30]" />
                </div>
                <span className="font-pretendard font-bold text-[#2E3A30] text-sm">
                  사후관리까지 철저하게
                </span>
              </div>
            </div>
          </div>

          {/* [Right] 입력 폼 영역 — 트리니티 Admin DB 연동 */}
          <div className="lg:w-3/5 p-8 lg:p-14 bg-white">
            <form
              action={CONTACT_FORM_ACTION}
              method="post"
              acceptCharset="UTF-8"
              target="_blank"
              rel="noopener noreferrer"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* AM-CMS 숨김 필드 */}
              <input type="hidden" name="_amcmsTkn" value={CONTACT_FORM_HIDDEN._amcmsTkn} />
              <input type="hidden" name="boardContainerId" value={CONTACT_FORM_HIDDEN.boardContainerId} />
              <input type="hidden" name="boardInsideTitle" value={CONTACT_FORM_HIDDEN.boardInsideTitle} />
              <input
                type="hidden"
                name="boardInsideGuestPassword"
                value={CONTACT_FORM_HIDDEN.boardInsideGuestPassword}
              />
              <input type="hidden" name="boardInsideSecret" value={CONTACT_FORM_HIDDEN.boardInsideSecret} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-gmarket-bold text-[10px] text-[#2E3A30] uppercase tracking-widest">
                    성함
                  </label>
                  <input
                    type="text"
                    id="name"
                    name={CONTACT_FIELD_NAMES.name}
                    required
                    placeholder="성함"
                    autoComplete="name"
                    className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="font-gmarket-bold text-[10px] text-[#2E3A30] uppercase tracking-widest">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name={CONTACT_FIELD_NAMES.phone}
                    required
                    placeholder="연락처"
                    autoComplete="tel"
                    className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="inquiry"
                  className="font-gmarket-bold text-[10px] text-[#2E3A30] uppercase tracking-widest">
                  문의내용
                </label>
                <textarea
                  ref={inquiryRef}
                  id="inquiry"
                  name={CONTACT_FIELD_NAMES.memo}
                  rows={4}
                  placeholder="궁금하신 내용을 남겨주세요."
                  className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB] resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  defaultChecked
                  className="mt-1 w-4 h-4 accent-[#2E3A30] cursor-pointer"
                />
                <label
                  htmlFor="privacy"
                  className="text-xs text-[#888] cursor-pointer leading-tight">
                  [필수] 상담을 위해 개인정보를 수집 및 이용하는 것에
                  동의합니다.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-[#3E4A3D] hover:bg-[#2E3A30] text-white font-gmarket-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                상담 신청 완료
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
