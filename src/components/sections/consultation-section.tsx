"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "styled-jsx/style";

// 발급받으신 URL (그대로 유지)
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_EDmaxOwxVvVWun4MQLB8lETrUPrt8lTTYPTTR_hQhUPpb0PQYNKTP_XU2UT9xbHgNQ/exec";

export function ConsultationSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      alert("관리자 설정: Google Script URL이 연결되지 않았습니다.");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // [수정 핵심] 구글 시트 1행의 '헤더 이름'과 똑같은 키값을 사용해야 합니다.
      const data = {
        성함: formData.get("name") as string,
        연락처: formData.get("phone") as string,
        문의내용: formData.get("inquiry") as string,
        // 개인정보 동의 여부도 시트에 저장하려면 시트 1행 E열에 '개인정보동의'라고 적고 아래 주석을 푸세요.
        // '개인정보동의': formData.get("privacy") ? "동의" : "미동의",
      };

      // URL 파라미터로 변환 (한글 깨짐 방지 자동 처리됨)
      const queryString = new URLSearchParams(data).toString();

      await fetch(`${GOOGLE_SCRIPT_URL}?${queryString}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // 성공 처리
      // alert("상담 신청이 정상적으로 접수되었습니다."); // alert가 굳이 필요 없다면 주석 처리
      window.location.href = "/thankyou"; // [수정] 땡큐 페이지로 강제 이동
    } catch (error) {
      console.error("Error:", error);
      alert("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="consultation"
      className="py-24 lg:py-32 bg-[#2E3A30] font-pretendard flex items-center justify-center">
      {/* 폰트 설정 */}
      <style>{`
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
              "정말 수술밖에 답이 없을까요?"
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

          {/* [Right] 입력 폼 영역 */}
          <div className="lg:w-3/5 p-8 lg:p-14 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    name="name"
                    required
                    placeholder="성함"
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
                    name="phone"
                    required
                    placeholder="연락처"
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
                  id="inquiry"
                  name="inquiry"
                  rows={4}
                  placeholder="궁금하신 내용을 남겨주세요."
                  className="w-full px-4 py-4 rounded-xl border border-[#EAE8E4] bg-[#FDFBF7] focus:outline-none focus:border-[#2E3A30] focus:ring-1 focus:ring-[#2E3A30] transition-all placeholder:text-[#BBB] resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
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
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[#3E4A3D] hover:bg-[#2E3A30] text-white font-gmarket-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin w-5 h-5" /> 접수 중...
                  </span>
                ) : (
                  "상담 신청 완료"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
