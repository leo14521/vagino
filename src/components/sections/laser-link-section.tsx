"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/** 트리니티여성의원 공식 사이트 자산 (menu3-1 등과 동일 경로) */
const TC_IMG = (id: string) =>
  `https://www.trinityclinic.co.kr/trinity/file/IMAGE/uu/${id}`;

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[#E9E4DB] py-4 last:border-0">
      <summary className="cursor-pointer list-none font-semibold text-[#1A1F16] flex items-center justify-between gap-4 pr-1">
        <span>{q}</span>
        <span className="text-[#3E522D] text-sm shrink-0 transition-transform group-open:rotate-180">
          ▼
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] pl-0">{a}</p>
    </details>
  );
}

function ClinicImage({
  fileId,
  alt,
  className = "",
  priority = false,
}: {
  fileId: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[#E9E4DB] bg-[#FAF9F6] ${className}`}
    >
      <Image
        src={TC_IMG(fileId)}
        alt={alt}
        width={1080}
        height={720}
        priority={priority}
        className="h-auto w-full object-contain align-middle"
        sizes="(max-width: 768px) 100vw, 1080px"
      />
    </div>
  );
}

/** 공식 페이지와 동일: 이미지 + 하단 캡션 */
function ClinicFigure({
  fileId,
  alt,
  caption,
  className = "",
}: {
  fileId: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`space-y-3 ${className}`}>
      <ClinicImage fileId={fileId} alt={alt} />
      {caption ? (
        <figcaption className="text-center text-sm leading-relaxed text-[#5C5C5C] break-keep">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** 전후·단계 연결용 — 짧은 점선 SVG (일러스트 밸런스용) */
function FlowArrowHorizontal({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const stroke = tone === "dark" ? "#3f403d" : "rgba(255,255,255,0.55)";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden
    >
      <svg width="22" height="8" viewBox="0 0 22 8" className="block opacity-80">
        <path
          d="M1 4h16"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 3"
          fill="none"
        />
        <path d="M17 4l-4-2v4z" fill={stroke} />
      </svg>
    </span>
  );
}

function MonalisaBfAfRow({
  title,
  beforeFile,
  afterFile,
  afterBadgeText,
  className = "",
}: {
  title: string;
  beforeFile: string;
  afterFile: string;
  afterBadgeText: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-6 text-center text-sm font-medium text-[#E8D4C4] md:text-base">{title}</p>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 md:flex-row md:justify-center md:gap-3 lg:gap-6">
        <div className="w-full min-w-0 max-w-md flex-1">
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#1a1d17] shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <Image
              src={TC_IMG(beforeFile)}
              alt={`${title} 시술 전`}
              width={900}
              height={600}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center py-1 md:py-0 md:px-0.5">
          <FlowArrowHorizontal tone="light" className="rotate-90 md:rotate-0" />
        </div>

        <div className="w-full min-w-0 max-w-md flex-1">
          <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#1a1d17] shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <Image
              src={TC_IMG(afterFile)}
              alt={`${title} ${afterBadgeText}`}
              width={900}
              height={600}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** menu3-1 content02 c02_3: 일러스트 전 | 화살표 | 후 (베이지 박스) */
function ZisellaIllustrationBfAf() {
  return (
    <div className="mx-auto mt-4 max-w-5xl rounded-2xl border border-[#c9bbae]/90 bg-[#EDE6DC] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] md:mt-6 md:p-8">
      <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-3 lg:gap-6">
        <div className="w-full min-w-0 max-w-md flex-1">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-[#FAF7F2] shadow-sm">
            <Image
              src={TC_IMG("cbd83e2753ae431d90c2c503a4801aa5")}
              alt="질쎄라 리프팅 시술 전 개념 일러스트"
              width={900}
              height={600}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-center py-1 md:py-0 md:px-0.5">
          <FlowArrowHorizontal tone="dark" className="rotate-90 md:rotate-0" />
        </div>

        <div className="w-full min-w-0 max-w-md flex-1">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-[#FAF7F2] shadow-sm">
            <Image
              src={TC_IMG("7194ba88709d4274a79b7687c8e04fa7")}
              alt="질쎄라 리프팅 시술 후 개념 일러스트"
              width={900}
              height={600}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ZisellaPanel() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-[#3E522D] text-xs font-bold tracking-[0.25em] uppercase">
          Focused Ultrasound
        </p>
        <h3 className="text-2xl md:text-4xl font-bold text-[#1A1F16] leading-tight break-keep">
          집속형 초음파 에너지로 피부 표면을 거의 손상시키지 않는{" "}
          <span className="text-[#3E522D] italic">질쎄라 리프팅</span>
        </h3>
        <p className="text-[#5C5C5C] text-base md:text-lg leading-relaxed break-keep">
          질쎄라 리프팅은 집속형 초음파 에너지로{" "}
          <strong className="text-[#1A1F16]">점막고유층과 근육층을 자극해 콜라겐 재생</strong>을
          유도하는 시술입니다. 기존 방식보다 깊은 층까지 에너지를 전달해 리프팅 효과를
          기대할 수 있습니다.
        </p>
      </header>

      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-12">
        <ClinicFigure
          fileId="fb8413a6a29a4671b3e8dff84a98fe4a"
          alt="질쎄라 집속형 초음파 에너지 전달 개념"
          caption="기존의 시술방법과 달리 피부 깊숙한 곳까지 에너지를 전달해 더욱 효과적인 리프팅 효과가 나타납니다."
        />
        <ClinicImage
          fileId="08f6eaf5da024d88b3e97f72b06333f8"
          alt="질쎄라 시술 깊이·에너지 분포 안내"
        />
      </div>

      <div className="rounded-3xl border border-[#E9E4DB] bg-white/80 p-4 sm:p-6 md:p-10">
        <h4 className="mb-4 text-center text-base font-bold text-[#1A1F16] sm:mb-6 sm:text-lg">
          시술 방식 비교
        </h4>

        {/* 모바일: 카드 스택 (가로 스크롤 테이블 제거) */}
        <div className="space-y-3 md:hidden">
          {[
            ["출혈", "X", "O", "X"],
            ["시술 깊이", "3~3.5mm", "3mm", "4.5mm"],
            ["시술 시간", "20~30분", "15~20분", "15~20분"],
            ["성관계", "약 1주 회복 후", "약 2~3일 후", "시술 당일 가능"],
            ["유지", "3~6개월", "3개월", "6개월~1년"],
          ].map(([label, rf, co2, zisella]) => (
            <div
              key={label}
              className="rounded-2xl border border-[#E9E4DB] bg-[#FDFCFB] p-4 shadow-sm"
            >
              <p className="mb-3 border-b border-[#E9E4DB] pb-2 text-center text-sm font-bold text-[#1A1F16]">
                {label}
              </p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="min-w-0">
                  <p className="mb-1 text-[9px] font-semibold leading-tight text-[#3E522D] break-words sm:text-[10px]">
                    RF 일반 고주파
                  </p>
                  <p className="rounded-lg bg-white px-1 py-1.5 text-xs font-medium text-[#555D4E]">{rf}</p>
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-[9px] font-semibold leading-tight text-[#3E522D] break-words sm:text-[10px]">
                    CO₂ 프락셀
                  </p>
                  <p className="rounded-lg bg-white px-1 py-1.5 text-xs font-medium text-[#555D4E]">{co2}</p>
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-[9px] font-semibold leading-tight text-[#3E522D] break-words sm:text-[10px]">
                    질쎄라
                  </p>
                  <p className="rounded-lg bg-[#F1F4ED]/80 px-1 py-1.5 text-xs font-semibold text-[#2D3B1A]">
                    {zisella}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 데스크톱: 테이블 */}
        <div className="hidden md:block">
          <table className="w-full border-collapse text-center text-sm">
            <thead>
              <tr className="bg-[#F1F4ED] text-[#3E522D]">
                <th className="w-[20%] border border-[#E9E4DB] p-3 font-semibold" />
                <th className="border border-[#E9E4DB] p-3 font-semibold">RF 일반 고주파</th>
                <th className="border border-[#E9E4DB] p-3 font-semibold">CO₂ 프락셀</th>
                <th className="border border-[#E9E4DB] bg-[#3E522D] p-3 font-semibold text-white">
                  질쎄라 (집속형 초음파)
                </th>
              </tr>
            </thead>
            <tbody className="text-[#555D4E]">
              {[
                ["출혈", "X", "O", "X"],
                ["시술 깊이", "3~3.5mm", "3mm", "4.5mm"],
                ["시술 시간", "20~30분", "15~20분", "15~20분"],
                ["성관계", "약 1주 회복 후", "약 2~3일 후", "시술 당일 가능"],
                ["유지", "3~6개월", "3개월", "6개월~1년"],
              ].map(([label, a, b, c]) => (
                <tr key={label}>
                  <th className="border border-[#E9E4DB] bg-[#FDFCFB] p-3 font-semibold text-[#1A1F16]">
                    {label}
                  </th>
                  <td className="border border-[#E9E4DB] p-3">{a}</td>
                  <td className="border border-[#E9E4DB] p-3">{b}</td>
                  <td className="border border-[#E9E4DB] bg-[#F1F4ED]/50 p-3 font-medium text-[#2D3B1A]">
                    {c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <section className="rounded-3xl bg-[#2E3A30] px-4 py-10 text-white sm:px-8 md:py-14">
        <h4 className="mb-8 text-center text-xl font-bold text-[#F5F2EC] md:mb-12 md:text-2xl">
          질쎄라 리프팅 시술 효과
        </h4>
        <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-3 pb-10 md:grid-cols-3 md:gap-4 md:pb-14">
          {[
            ["01", "질타이트닝"],
            ["02", "성감증대"],
            ["03", "요실금 개선"],
            ["04", "질점막 탄력성 증가"],
            ["05", "성교통 감소"],
            ["06", "혈액순환 개선"],
          ].map(([n, label]) => (
            <li
              key={n}
              className="flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-br-[20px] border border-[#967F6D] px-2 py-4 text-center md:min-h-[90px]"
            >
              <p className="text-xs font-bold text-[#C5A065] md:text-sm">{n}</p>
              <span className="text-[13px] font-semibold leading-snug text-white break-keep md:text-lg">
                {label}
              </span>
            </li>
          ))}
        </ul>

        <ZisellaIllustrationBfAf />

        <p className="pt-10 text-center text-sm font-semibold text-[#EAD4C3] md:pt-16 md:text-base">
          질레이저, 호르몬 치료 전후 비교사진
        </p>

        <div className="mx-auto mt-6 grid max-w-5xl gap-10 md:mt-8 md:grid-cols-2 md:gap-12">
          <figure className="space-y-3">
            <div className="overflow-hidden rounded-lg border border-white/15 bg-[#1a1d17]">
              <Image
                src={TC_IMG("ee0a37360ea5458b8cb833920768d144")}
                alt="질레이저 치료 전 질벽 상태"
                width={440}
                height={440}
                className="h-auto w-full max-h-[min(72vh,480px)] object-contain"
                sizes="(max-width:768px) 100vw, 360px"
              />
            </div>
            <figcaption className="text-sm leading-relaxed text-[#E8E4DC] break-keep md:text-[15px]">
              질레이저 치료 전의 출혈, 위축을 보이는 갱년기 환자의 질벽 사진
            </figcaption>
          </figure>
          <figure className="space-y-3">
            <div className="overflow-hidden rounded-lg border border-white/15 bg-[#1a1d17]">
              <Image
                src={TC_IMG("3d2ec5d3b40f4130b0ace7d8dbc8f4b8")}
                alt="질레이저 치료 후 질벽 상태"
                width={440}
                height={440}
                className="h-auto w-full max-h-[min(72vh,480px)] object-contain"
                sizes="(max-width:768px) 100vw, 360px"
              />
            </div>
            <figcaption className="text-sm leading-relaxed text-[#E8E4DC] break-keep md:text-[15px]">
              질레이저 치료 후의 호전된 상태, 질벽 주름, 질점막이 회복되어 있으며 성교통, 건조증이 호전된
              상태
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-6">
        <h4 className="text-center text-xl font-bold text-[#1A1F16] md:text-2xl">질쎄라 리프팅 POINT</h4>

        <div className="space-y-5">
          <div className="rounded-3xl border border-[#D4CFC4] bg-[#E6E3DC] px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] sm:px-5 sm:py-5 md:px-7 md:py-6">
            <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-center md:gap-3 lg:gap-5">
              <div className="min-w-0 flex-1 md:max-w-[58%]">
                <ClinicImage
                  fileId="5e8349538c2e4583be18b6c0edea2b96"
                  alt="질쎄라 카트리지별 시술 깊이·에너지 전달 개념"
                  className="border-[#C9C3B8] bg-[#F3F1EC]"
                />
              </div>
              <div className="min-w-0 flex-1 md:max-w-[42%]">
                <ClinicImage
                  fileId="b8a1a4ce658e451baee08baa01861999"
                  alt="질쎄라 프로브 구조·조작부 안내"
                  className="border-[#C9C3B8] bg-[#F3F1EC]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {(
              [
                ["출혈 No", "통증 No"],
                ["짧은 시술기간 &", "빠른 회복"],
                ["비침습 방식", "시술"],
                ["뛰어난 질탄력", "개선효과"],
              ] as const
            ).map(([line1, line2]) => (
              <div key={line1} className="flex flex-col items-center">
                <span
                  className="mb-1 h-0 w-0 border-x-[7px] border-x-transparent border-t-[9px] border-t-[#6E5A4A] sm:border-x-8 sm:border-t-[10px]"
                  aria-hidden
                />
                <div className="w-full rounded-lg bg-[#6E5A4A] px-2 py-3 text-center shadow-sm sm:px-3 sm:py-4">
                  <p className="text-[11px] font-semibold leading-snug text-[#FAF7F2] sm:text-xs md:text-[13px]">
                    {line1}
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold leading-snug text-[#FAF7F2] sm:text-xs md:text-[13px]">
                    {line2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rounded-3xl bg-[#2E3A30] px-6 py-10 text-white">
        <h4 className="text-lg font-bold mb-4 text-center text-[#E8E4DC]">이런 분께 추천</h4>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#D8D3CC] leading-relaxed">
          {[
            "성관계 시 감각이 떨어진 경우",
            "출산 후 질 내부가 이완된 경우",
            "질 건조로 통증이 느껴지는 경우",
            "수술은 부담스럽고 탄력만 개선하고 싶은 경우",
            "질 염증·악취가 반복되는 경우",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-[#C5A065]">·</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-2xl mx-auto">
        <h4 className="text-lg font-bold text-center mb-2">질쎄라 리프팅 Q&A</h4>
        <FaqItem
          q="시술 횟수가 궁금해요"
          a="1회 시술 기준 400샷 후 한 달 이내에 200샷을 추가하는 방식 등, 원장님 진단에 따라 달라질 수 있습니다."
        />
        <FaqItem
          q="마취가 필요한가요?"
          a="경미한 통증이 있을 수 있으나 마취 없이 시술이 가능한 경우가 많습니다. 통증에 민감하신 경우 상담 후 마취를 진행합니다."
        />
        <FaqItem
          q="효과는 얼마나 유지되나요?"
          a="개인차가 있으나 약 12~18개월 전후로 안내되는 경우가 많습니다."
        />
      </div>
    </div>
  );
}

export function MonalisaPanel() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-[#3E522D] text-xs font-bold tracking-[0.25em] uppercase">
          CO₂ Fractional
        </p>
        <h3 className="text-2xl md:text-4xl font-bold text-[#1A1F16] leading-tight break-keep">
          질 나이를 되돌려 주는{" "}
          <span className="text-[#3E522D] italic">모나리자 터치</span>
        </h3>
        <p className="text-[#5C5C5C] text-base md:text-lg leading-relaxed break-keep">
          갱년기 비뇨생식기 위축(GSM) 치료를 위해 개발된{" "}
          <strong className="text-[#1A1F16]">10,600nm 프랙셔널 CO₂ 레이저</strong>로,
          주변 조직을 보존하며 D-펄스가 질 내 콜라겐 재생을 유도해 건조·위축된 환경을
          회복하는 데 도움을 줍니다.
        </p>
      </header>

      <ClinicImage fileId="89de44c2cf064684bc4604ecc78b516c" alt="모나리자 터치 장비 및 시술" />
      <div className="flex justify-center">
        <ClinicImage
          fileId="e86a48b223294fc4aaa387235db7967f"
          alt="모나리자 터치 시술 장면"
          className="max-w-2xl"
        />
      </div>

      <section className="rounded-3xl border border-[#E9E4DB] bg-[#F7F7F7] px-4 py-8 sm:px-8 md:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-4 xl:gap-6">
          <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
            <ClinicImage
              fileId="ff805ef613374052879db950ca5ca65d"
              alt="모나리자 터치 시술 전 조직 소개"
              className="max-w-[240px] mx-auto"
            />
            <div className="w-full max-w-[210px] rounded-none bg-[#957F6A] py-2.5 text-sm font-semibold text-white">
              시술 전
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C5C5C] break-keep">
              상피 두께가 얇으며 유두 개수가 적음
              <br />
              활성화된 섬유 아세포가 관찰되지 않음
            </p>
          </div>

          <div className="flex shrink-0 flex-row items-center justify-center gap-2 sm:gap-3">
            <ClinicImage
              fileId="5bd18dcad0f447d7ab992d4bdb91082e"
              alt=""
              className="w-10 opacity-80 sm:w-12"
            />
            <ClinicImage
              fileId="c9aa537755da48259b120bb644a5e201"
              alt="모나리자 터치 시술 전후 비교 도식"
              className="max-w-[200px] sm:max-w-[220px]"
            />
            <ClinicImage
              fileId="5bd18dcad0f447d7ab992d4bdb91082e"
              alt=""
              className="w-10 scale-x-[-1] opacity-80 sm:w-12"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center">
            <ClinicImage
              fileId="3a81efcd45dc4c8db675ec7cb82283f6"
              alt="모나리자 터치 시술 후 조직 변화"
              className="max-w-[240px] mx-auto"
            />
            <div className="w-full max-w-[210px] rounded-none bg-[#3E522D] py-2.5 text-sm font-semibold text-white">
              시술 후
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#5C5C5C] break-keep">
              활성화된 섬유아세포가
              <br />
              뚜렷이 관찰됨
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#5C5C5C] break-keep md:text-[15px]">
          갱년기 여성에서 흔히 생기는 질 건조증, 질 위축을 치료하는 목적은 콜라겐 형성, 섬유아세포의
          활성을 통해, 폐경전과 같은 건강하고 탄력있는 상태를 만드는데 있습니다.
          <br className="hidden sm:block" />
          모나리자 터치는 갱년기 비뇨생식기 위축(Genitourinary Syndrom of Menopause, GSM)을 치료하기
          위해 개발된 10,600nm의 프랙셔널 레이저로 주변조직을 보존하므로 빠른 회복을 특징으로 합니다.
          <br className="hidden sm:block" />
          특수한 D-펄스가 질 내 콜라겐 재생을 유도하여 질 건조증, 위축된 질 환경을 빠르게 회복시킵니다.
        </p>
      </section>

      <section className="rounded-3xl bg-[#2E3A30] px-4 py-10 text-white sm:px-8 md:py-12">
        <h4 className="mb-8 text-center text-xl font-bold text-[#E8E4DC] md:mb-10 md:text-2xl">
          모나리자 터치 레이저 효과
        </h4>
        <div className="mx-auto grid max-w-4xl gap-4 text-center sm:grid-cols-3 sm:gap-6">
          {[
            ["01", "D-펄스로 안전하고 효과적으로 질 건강 개선"],
            ["02", "비수술, 비호르몬, 비마취로 빠른 회복이 장점"],
            ["03", "콜라겐 생성을 촉진하여 질점막 회복에 효과"],
          ].map(([n, t]) => (
            <div
              key={n}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-6"
            >
              <p className="text-sm font-bold text-[#C5A065]">{n}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#D8D3CC] break-keep">{t}</p>
            </div>
          ))}
        </div>

        <MonalisaBfAfRow
          className="mt-14"
          title="질 점막 H&E 검색 결과"
          beforeFile="97694c8ed31545c5b715c5729c5dded0"
          afterFile="654183ae5b214df1bda7da45cbfb530a"
          afterBadgeText="시술 후 2개월"
        />
        <MonalisaBfAfRow
          className="mt-16 md:mt-20"
          title="피부 모형도"
          beforeFile="4f241571bd8a43529afef64b28315805"
          afterFile="fe95054e3c2743cbb6badb829c544f1b"
          afterBadgeText="시술 후"
        />

        <ul className="mx-auto mt-10 max-w-3xl space-y-3 border-t border-white/10 pt-8 text-sm leading-relaxed text-[#D0CBC4]">
          <li>
            · 모나리자 터치는 피부에 CO₂ 프랙셔널 레이저 빔을 조사하여 오래된 손상 조직을 절개하여 미세
            괴사 기둥을 형성합니다.
          </li>
          <li>· 특수한 D-Pulse 기술로 점막에서도 탄화 현상 없이 절제가 가능합니다.</li>
          <li>· 절개된 기둥 사이에 남아있는 피부는 그대로 유지되므로 빠른 회복이 가능합니다.</li>
        </ul>
      </section>

      <div className="rounded-3xl border border-[#E9E4DB] bg-[#FDFCFB] p-8">
        <h4 className="font-bold text-[#1A1F16] mb-4 text-center">이런 분께 추천</h4>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-[#5C5C5C]">
          {[
            "성관계 시 감각 저하",
            "출산 후 질 이완·건조",
            "질 탄력은 개선하고 싶으나 수술은 부담",
            "요실금 초기·회음부 미백 등 복합 고민",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-[#3E522D]">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-2xl mx-auto">
        <h4 className="text-lg font-bold text-center mb-2">모나리자 터치 Q&A</h4>
        <FaqItem q="시술 시간은?" a="약 10분 내외로 안내됩니다." />
        <FaqItem
          q="통증은?"
          a="대부분 거의 느껴지지 않습니다. 질 건조가 있는 경우 팁 삽입 시 약간의 불편감이 있을 수 있습니다."
        />
        <FaqItem
          q="몇 회 받나요?"
          a="한 달에 한 번, 총 3회 권장되는 경우가 많으나 개인 상태에 따라 달라집니다."
        />
        <FaqItem
          q="일상생활은?"
          a="시술 직후 일상생활은 가능하며, 성관계·격한 운동은 약 1주 후로 안내드립니다."
        />
      </div>
    </div>
  );
}

export function RevivePanel() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <header className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-[#3E522D] text-xs font-bold tracking-[0.25em] uppercase">
          RF Tightening
        </p>
        <h3 className="text-2xl md:text-4xl font-bold text-[#1A1F16] leading-tight break-keep">
          수술 없이 고주파로 탄력을 끌어올리는{" "}
          <span className="text-[#3E522D] italic">트리니티 리비브</span>
        </h3>
        <p className="text-[#5C5C5C] text-base md:text-lg leading-relaxed break-keep">
          환자의 질 상태와 목적에 맞춘 <strong>맞춤형 시술</strong>으로 리비브 고주파
          레이저의 출력을 세밀히 조절해, 질 타이트닝과 탄력 개선을 함께 노립니다.
        </p>
      </header>

      <section className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-14">
        <div className="min-w-0 flex-1 space-y-4">
          <div className="mx-auto max-w-xl rounded-2xl border border-[#D4CFC4] bg-[#E8E4DC] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] sm:p-5 md:max-w-2xl lg:mx-0">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-3 md:gap-4">
              <div className="min-w-0 flex-1 sm:max-w-[47%]">
                <ClinicImage
                  fileId="f2350979cc4946249bd78d7d13380101"
                  alt="리비브 시술 전 개념 일러스트"
                  className="border-[#C9C3B8] bg-[#FAF7F2]"
                />
              </div>
              <div className="flex justify-center py-0.5 sm:shrink-0 sm:py-0">
                <FlowArrowHorizontal tone="dark" className="rotate-90 sm:rotate-0" />
              </div>
              <div className="min-w-0 flex-1 sm:max-w-[47%]">
                <ClinicImage
                  fileId="c488fe53050f47d2acaaf65db7186262"
                  alt="리비브 시술 후 개념 일러스트"
                  className="border-[#C9C3B8] bg-[#FAF7F2]"
                />
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#6B7264] break-keep">
            본 그림은 실제 사진을 일러스트로 변환한 전후 참고 이미지입니다. 실제 전후 사진은 병원으로 문의해 주세요.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md shrink-0 lg:mx-0 lg:max-w-[min(100%,420px)] xl:max-w-[480px]">
          <ClinicImage fileId="1b84821c71f54ec2aca9994a82056169" alt="트리니티 리비브 장비" />
        </div>
      </section>

      <div className="rounded-3xl border border-[#E9E4DB] bg-white p-6 md:p-10">
        <h4 className="text-center text-lg font-bold text-[#1A1F16] md:text-xl">
          영상으로 보는 리비브 VS 비비브
        </h4>
        <p className="mb-6 text-center text-sm text-[#957F6A]">
          #트리니티리비브 #질타이트닝 #시술 #즉각적효과
        </p>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/GuQBc06KLus?si=vR7YZVTXeJkM7bPF"
            title="영상으로 보는 리비브 VS 비비브"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <section className="rounded-3xl bg-[#2E3A30] px-4 py-10 text-white sm:px-8 md:py-12">
        <h4 className="mb-10 text-center text-xl font-bold md:mb-12 md:text-2xl">
          트리니티 리비브 시술 효과
        </h4>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {(
            [
              {
                fileId: "4e4094ed973a44ffa86069ac1448f136" as const,
                alt: "리비브 고주파가 피부층에 전달되는 개념",
                n: "POINT 01",
                title: "리비브 고주파 레이저를 활용한 전문 시술",
                body: "트리니티 리비브는 리비브만의 고유한 기기특성을 최대한 활용하여 다층적인 질 개선 효과를 제공합니다. 강력한 고주파 에너지로 콜라겐 생성을 촉진하고, 질 점막부터 근육층까지 동시에 자극하여 탄력과 수축력을 강화합니다.",
              },
              {
                fileId: "cb89b89a0249443a9a93c535751b5ed1" as const,
                alt: "맞춤형 시술 디자인 참고 일러스트",
                n: "POINT 02",
                title: "트리니티만의 프리미엄 맞춤형 디자인 시술",
                body: "모든 시술은 전문 의료진의 세밀한 진단과 상담을 기반으로 진행되며, 환자의 상태와 목표에 따라 1:1 커스터마이징된 솔루션을 제공합니다.",
              },
              {
                fileId: "9ece875d3ffc4955bdc1762e712edc60" as const,
                alt: "전문 의료진 시술 참고 일러스트",
                n: "POINT 03",
                title: "국제적으로 인정받는 여성성형 전문가의 시술",
                body: "국제학회(IFAAS) 비수술 여성성형학부 교수 대표원장이 직접 상담부터 시술까지 책임집니다. 트리니티 리비브는 안전성과 결과를 최우선으로 합니다.",
              },
            ] as const
          ).map((item) => (
            <article
              key={item.n}
              className="flex flex-col rounded-2xl border border-white/15 bg-white/[0.04] px-4 pb-6 pt-5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-5 sm:pb-7 sm:pt-6"
            >
              <div className="mb-5 min-h-0 w-full">
                <ClinicImage
                  fileId={item.fileId}
                  alt={item.alt}
                  className="rounded-lg border-white/12 bg-black/20"
                />
              </div>
              <p className="text-xs font-bold tracking-[0.2em] text-[#C5A065]">{item.n}</p>
              <h5 className="mt-3 text-base font-bold leading-snug text-white break-keep md:text-lg">
                {item.title}
              </h5>
              <p className="mt-3 text-sm leading-relaxed text-[#D0CBC4] break-keep">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="rounded-3xl border border-[#E9E4DB] overflow-hidden">
        <div className="bg-[#2E3A30] text-white text-center py-6 px-4">
          <p className="font-bold text-lg">트리니티 리비브 1:1 솔루션</p>
          <p className="text-sm text-[#D0CBC4] mt-2 max-w-2xl mx-auto leading-relaxed">
            환자의 질 상태에 따라 최적의 에너지를 조절해 시술합니다. 시술 전 상담을 통해
            리비브 레이저 출력을 세밀히 조정합니다.
          </p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-5 gap-0 divide-x divide-y sm:divide-y-0 divide-[#E9E4DB] bg-[#FDFCFB]">
          {[
            ["c16a931b438c477293a34ee78d6d2df0", "시술시간", "약 40분"],
            ["f2469755dc454d208c2488e48b95b8b8", "마취", "수면(필요 시)"],
            ["32bb7d4c4f7148b4873f791c618a6db2", "입원", "당일 퇴원"],
            ["3a648d673d91451b9a220050595d05d5", "장점", "직후 일상 가능"],
            ["48e957394dc1460cbe60be217dd5d7ae", "효과", "즉각·지속 탄력"],
          ].map(([id, label, value]) => (
            <li key={label} className="flex flex-col items-center p-4 text-center">
              <div className="relative h-12 w-12 mb-2">
                <Image
                  src={TC_IMG(id)}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <p className="text-xs font-bold text-[#957F6A]">{label}</p>
              <p className="text-sm font-semibold text-[#1A1F16] mt-1 whitespace-pre-line">
                {value}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold text-center mb-6">Premium Feature</h4>
        <ClinicImage fileId="aa5629a3c75a49c093671749ddc250a4" alt="리비브 고주파 레이저 특징" />
        <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-center">
          {[
            ["고주파 열 에너지", "점막층~근육층까지 깊은 자극"],
            ["콜라겐 촉진", "자연스러운 탄력 개선"],
            ["최소 침습", "고주파 기반 안전 설계"],
            ["빠른 회복", "시술 후 일상 복귀"],
          ].map(([t, d]) => (
            <li
              key={t}
              className="rounded-2xl border border-[#E9E4DB] bg-white px-3 py-5 font-medium text-[#1A1F16]"
            >
              <p className="text-[#3E522D] font-bold mb-1">{t}</p>
              <p className="text-[#6B7264] text-xs leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-[#F4EBE2]/50 border border-[#E9E4DB] p-8">
        <h4 className="font-bold text-[#1A1F16] mb-4 text-center">이런 분께 추천</h4>
        <ul className="grid sm:grid-cols-2 gap-2 text-sm text-[#5C5C5C]">
          {[
            "질방귀 소리가 나는 경우",
            "분만 후 질근육 이완",
            "밑이 빠지는 느낌",
            "질 건조로 인한 성교통",
            "성관계 시 자꾸 빠지는 느낌",
            "경증 요실금",
          ].map((t) => (
            <li key={t}>· {t}</li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl overflow-hidden border border-[#E9E4DB] bg-white flex flex-col">
          <div className="relative h-48">
            <Image
              src={TC_IMG("8f40e7f266f6442fa0107ca55dcabeca")}
              alt="맞춤 진료 환경"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
          <div className="p-5 flex-1">
            <p className="font-bold text-[#1A1F16] mb-2">맞춤 진료 환경</p>
            <p className="text-xs text-[#6B7264] leading-relaxed">
              깔끔한 진료 공간과 프라이빗 회복 공간에서 안심하고 치료받으실 수 있습니다.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#E9E4DB] bg-white flex flex-col">
          <div className="p-5 flex-1 order-2 md:order-1">
            <p className="font-bold text-[#1A1F16] mb-2">체계적 사전 문진</p>
            <p className="text-xs text-[#6B7264] leading-relaxed">
              문진부터 심층 상담·케이스 비교까지 전 과정을 이해하고 진행합니다.
            </p>
          </div>
          <div className="relative h-48 order-1 md:order-2">
            <Image
              src={TC_IMG("61902046323c4d0cb54043fd1d42bce3")}
              alt="상담 및 케이스 분석"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-[#E9E4DB] bg-white flex flex-col">
          <div className="relative h-48">
            <Image
              src={TC_IMG("f9c9c50d7cbc4111931b4d6ce6c099da")}
              alt="대표원장 진료"
              fill
              className="object-cover"
              sizes="400px"
            />
          </div>
          <div className="p-5 flex-1">
            <p className="font-bold text-[#1A1F16] mb-2">대표원장 1:1 책임</p>
            <p className="text-xs text-[#6B7264] leading-relaxed">
              정난희·양기열 대표원장이 직접 책임지고 진행합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <h4 className="text-lg font-bold text-center mb-2">트리니티 리비브 Q&A</h4>
        <FaqItem
          q="성관계는 언제부터 가능한가요?"
          a="개인차가 있으나 보통 시술 후 3~5일 전후부터 안내되는 경우가 많습니다."
        />
        <FaqItem
          q="효과는 얼마나 유지되나요?"
          a="약 6개월~1년 전후로 안내되는 경우가 많으나 개인차가 있습니다."
        />
        <FaqItem
          q="통증·화상 위험은?"
          a="열량 제어 기술로 통증과 화상 위험을 최소화하는 방향으로 시술합니다."
        />
      </div>
    </div>
  );
}

const laserSectionBand =
  "scroll-mt-28 border-t border-[#E9E4DB]/70 py-16 md:py-24 lg:py-28";

export function LaserPageFooter() {
  return (
    <section
      className={`${laserSectionBand} border-b border-[#E9E4DB]/70 bg-[#FDFBF7]`}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <p className="text-center text-sm text-[#6B7264] sm:text-left">
            맞춤 시술 가능 여부는 원장 진단 후 결정됩니다.
          </p>
          <a href="/#consultation">
            <Button
              variant="outline"
              className="group rounded-full border-[#3E522D] px-8 py-6 text-base text-[#3E522D] transition-all hover:bg-[#3E522D] hover:text-white"
            >
              1:1 상담 신청
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-[11px] leading-relaxed text-[#A1A89A]">
          시술명·효과·부작용은 개인마다 다를 수 있습니다. 본 페이지의 이미지·문구는
          트리니티여성의원(trinityclinic.co.kr) 공개 자료를 바탕으로 재구성하였으며, 최종 안내는 면담 시
          이루어집니다.
        </p>
      </div>
    </section>
  );
}
