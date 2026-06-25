"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { PerineumMinoraTab } from "@/components/sections/perineum-minora-tab";
import { PERINEUM_ROUTES } from "@/lib/site";

const TC = (id: string) =>
  `https://www.trinityclinic.co.kr/trinity/file/IMAGE/uu/${id}`;

function TcImg({ id, alt }: { id: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E9E4DB] bg-[#FAF9F6]">
      <Image
        src={TC(id)}
        alt={alt}
        width={1080}
        height={720}
        className="h-auto w-full object-contain"
        sizes="(max-width: 768px) 100vw, 900px"
      />
    </div>
  );
}

const TABS = [
  { id: "labia" as const, label: "대음순수술", href: PERINEUM_ROUTES.labia },
  { id: "minora" as const, label: "소음순수술", href: PERINEUM_ROUTES.minora },
  { id: "laser" as const, label: "회음부 제모", href: PERINEUM_ROUTES.hairRemoval },
  { id: "whiten" as const, label: "회음부 미백", href: PERINEUM_ROUTES.whitening },
];

type TabId = (typeof TABS)[number]["id"];

type SearchParamsLike = Pick<URLSearchParams, "get">;

function tabFromSearchParams(sp: SearchParamsLike): TabId {
  const raw = sp.get("tab");
  if (raw === "labia" || raw === "minora" || raw === "laser" || raw === "whiten") return raw;
  if (raw === "hair-removal") return "laser";
  return "labia";
}

/** 회음부 미백: 저해상도 삽화 대신 미니멀 UI */
function PerineumWhiteningProcess() {
  return (
    <div className="rounded-[2rem] border border-[#E9E4DB]/90 bg-[#FDFCFB] p-6 shadow-sm md:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-6">
        {/* Before */}
        <div className="flex flex-col rounded-2xl border border-[#E9E4DB] bg-[#FAF7F3] p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#957F6A]">Before</p>
          <h4 className="mt-2 text-lg font-bold leading-snug text-[#1A1F16] break-keep">
            색소 침착이 신경 쓰이는 경우
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-[#6B6560] break-keep">
            소음순·대음순 등 회음부 라인은 마찰·호르몬·노화에 따라 톤이 어두워질 수 있습니다.
          </p>
          <div className="relative mt-6 flex min-h-[140px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#EDE4DC]">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(ellipse 85% 70% at 35% 45%, rgba(110, 82, 68, 0.42) 0%, transparent 58%), radial-gradient(ellipse 70% 55% at 72% 58%, rgba(88, 64, 52, 0.28) 0%, transparent 52%), linear-gradient(165deg, #e5d8cf 0%, #dccfc4 100%)",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)]" aria-hidden />
            <span className="relative z-[1] max-w-[12rem] text-center text-[11px] font-semibold leading-relaxed text-[#4A3F38]/90 break-keep">
              멜라닌 침착 · 톤 불균형
            </span>
          </div>
        </div>

        {/* Connector */}
        <div className="flex items-center justify-center py-2 md:min-w-[5rem] md:flex-col md:justify-center md:py-0">
          <div className="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row md:gap-0">
            <div className="hidden h-px w-10 shrink-0 bg-gradient-to-r from-transparent to-[#3E522D]/22 md:block" />
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#3E522D]/20 bg-white text-[#3E522D] shadow-sm"
              aria-hidden
            >
              <ArrowRight className="hidden h-5 w-5 md:block" strokeWidth={1.75} />
              <ArrowDown className="h-5 w-5 md:hidden" strokeWidth={1.75} />
            </div>
            <div className="hidden h-px w-10 shrink-0 bg-gradient-to-l from-transparent to-[#3E522D]/22 md:block" />
          </div>
          <p className="mt-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#A1A89A] md:mt-3">
            Care
          </p>
        </div>

        {/* After */}
        <div className="flex flex-col rounded-2xl border border-[#3E522D]/15 bg-white p-6 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3E522D]">After</p>
          <h4 className="mt-2 text-lg font-bold leading-snug text-[#1A1F16] break-keep">
            맞춤 프로그램으로 톤·결 개선
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-[#5C5C5C] break-keep">
            트리니티 회음부 미백 프로그램 — 레이저 미백·박피, 필요 시 절개까지 상태에 따라 단계적으로
            안내합니다.
          </p>
          <div className="relative mt-6 flex min-h-[140px] flex-1 items-center justify-center overflow-hidden rounded-xl bg-[#F5EBE3]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 75% at 50% 48%, rgba(255, 236, 228, 0.95) 0%, rgba(245, 228, 218, 0.55) 45%, rgba(236, 218, 208, 0.35) 100%)",
              }}
              aria-hidden
            />
            <div
              className="absolute inset-0 opacity-[0.45]"
              style={{
                background:
                  "radial-gradient(circle at 30% 35%, rgba(255, 255, 255, 0.55) 0%, transparent 42%), radial-gradient(circle at 75% 65%, rgba(255, 255, 255, 0.35) 0%, transparent 38%)",
              }}
              aria-hidden
            />
            <div className="relative z-[1] flex flex-col items-center gap-1.5 px-4 text-center">
              <Sparkles className="h-5 w-5 text-[#3E522D]/70" strokeWidth={1.5} aria-hidden />
              <span className="text-[11px] font-semibold leading-relaxed text-[#3E522D] break-keep">
                균일하고 맑은 톤을 목표로
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PerineumCareSection() {
  const searchParams = useSearchParams();
  const tab = useMemo(() => tabFromSearchParams(searchParams), [searchParams]);

  return (
    <section
      id="perineum-care"
      className="scroll-mt-28 border-y border-[#E9E4DB]/70 bg-[#F6F3EE] py-16 md:py-24 lg:py-28"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <nav aria-label="breadcrumb" className="mb-8 text-center text-sm text-[#6B7264]">
          <ol className="inline-flex flex-wrap items-center justify-center gap-1.5">
            <li>
              <Link href={PERINEUM_ROUTES.hub} className="hover:text-[#3E522D] hover:underline">
                회음부관리
              </Link>
            </li>
            <li aria-hidden className="text-[#C4C0B8]">
              /
            </li>
            <li className="font-semibold text-[#1A1F16]" aria-current="page">
              {TABS.find((t) => t.id === tab)?.label}
            </li>
          </ol>
        </nav>

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="회음부 케어 종류"
        >
          {TABS.map((t) => {
            const on = tab === t.id;
            return (
              <Link
                key={t.id}
                href={t.href}
                scroll={false}
                prefetch
                role="tab"
                aria-selected={on}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-bold transition-all md:px-8 md:py-3 md:text-base",
                  on
                    ? "bg-[#3E522D] text-white shadow-md"
                    : "border border-[#E9E4DB] bg-white text-[#6B7264] hover:border-[#3E522D]/35"
                )}
              >
                {t.label}
              </Link>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
            className="space-y-12 md:space-y-16"
          >
            {tab === "labia" && (
              <>
                <div className="mx-auto max-w-3xl text-center">
                  <h3 className="text-xl font-bold leading-snug text-[#1A1F16] md:text-2xl break-keep">
                    빈약하거나 튀어나온 대음순을 매끄럽고 이상적인 라인으로
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3E522D]">
                    대음순 수술 (확대술 / 축소술)
                  </p>
                  <p className="mt-5 text-left text-sm leading-relaxed text-[#555D4E] md:text-center md:text-base break-keep">
                    <strong className="text-[#1A1F16]">대음순</strong>은 소음순 바깥을 감싸는 지방 조직으로
                    소음순과 음핵을 보호합니다. 노화로 주름이 심해지거나 비대·비대칭인 경우 부부관계에서의
                    자신감 저하, 소음순 보호 부족으로 이어질 수 있어 맞춤 교정이 도움이 됩니다.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      img: "a6a39cbf1ab1498caf62c06d9ca48b2a",
                      title: "꺼지거나 빈약한 대음순",
                      sub: "지방이식, 필러",
                    },
                    {
                      img: "a16ff520affb40a9b44e5c6f82b8c0a9",
                      title: "주름진 대음순",
                      sub: "필러, 대음순 거상술",
                    },
                    {
                      img: "a3a6eaf5c6724fa7878e44ed5539db75",
                      title: "비대칭 / 비대한 대음순",
                      sub: "대음순 축소술",
                    },
                  ].map((c) => (
                    <div
                      key={c.img}
                      className="overflow-hidden rounded-2xl border border-[#E9E4DB] bg-white shadow-sm"
                    >
                      <TcImg id={c.img} alt={c.title} />
                      <div className="bg-[#2E3A30] px-4 py-4 text-center">
                        <p className="text-base font-bold text-white">{c.title}</p>
                        <p className="mt-1 text-sm text-[#D4C6B5]">{c.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-[#EDE6DC]/60 px-6 py-10 md:px-12">
                  <h4 className="text-center text-lg font-bold text-[#1A1F16]">
                    대음순의 모양·크기·색은 선천적으로도 다를 수 있습니다
                  </h4>
                  <div className="mx-auto mt-8 max-w-3xl">
                    <TcImg id="3cc0805122d242539f15d7b59d728c6f" alt="대음순 형태 안내" />
                  </div>
                  <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#5C5C5C] break-keep">
                    지방 부족으로 보호가 어렵거나 성관계 시 통증, 돌출·주름으로 인한 스트레스가 있는
                    경우 트리니티에서 상태를 평가한 뒤 확대·축소 등 적합한 방법을 안내합니다.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#E9E4DB] bg-[#2E3A30] p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#C5A065]">
                      빈약한 대음순
                    </p>
                    <h4 className="mt-2 text-xl font-bold">대음순 확대술</h4>
                    <p className="mt-4 text-sm leading-relaxed text-[#D8D3CC] break-keep">
                      지방이 빈약해 쿠션 역할이 부족하고 미관적 콤플렉스가 심한 경우, 자가지방 채취 후
                      대음순에 이식해 볼륨을 보강합니다.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#E9E4DB] bg-white p-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#957F6A]">
                      비대한 대음순
                    </p>
                    <h4 className="mt-2 text-xl font-bold text-[#1A1F16]">대음순 축소술</h4>
                    <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] break-keep">
                      주름·늘어짐, 양쪽 불균형에는 지방흡입 또는 절제를 통한 축소술로 라인을 정리합니다.
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 md:gap-3">
                  {[
                    ["c16a931b438c477293a34ee78d6d2df0", "수술시간", "1시간 이내"],
                    ["b565bc56685f4752bfe60e839f5e18f6", "마취", "수면·국소"],
                    ["4df8132370b84b7f9ba04a870ee33a85", "입원", "당일퇴원"],
                    ["feff1229fa444f99b3dac15a0a83d965", "내원", "1회"],
                    ["296ed55f99134cd2b2185585c739b25e", "치료기간", "2~3주"],
                  ].map(([img, label, val]) => (
                    <li
                      key={label}
                      className="flex flex-col items-center rounded-2xl border border-[#E9E4DB] bg-white p-4 text-center"
                    >
                      <div className="relative mb-2 h-10 w-10">
                        <Image src={TC(img)} alt="" fill className="object-contain" sizes="40px" />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#957F6A]">
                        {label}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-[#1A1F16] whitespace-pre-line">
                        {val}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "대음순 주름 정리",
                    "성관계 시 고민 완화",
                    "피부 탄력",
                    "내적 만족감",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#3E522D]/20 bg-white px-4 py-2 text-sm font-medium text-[#3E522D]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}

            {tab === "minora" && <PerineumMinoraTab />}

            {tab === "laser" && (
              <>
                <div className="mx-auto max-w-3xl text-center">
                  <h3 className="text-xl font-bold text-[#1A1F16] md:text-2xl break-keep">
                    여성의료진 · 전용 공간 · 첨단 레이저
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3E522D]">회음부 제모</p>
                  <p className="mt-5 text-sm leading-relaxed text-[#555D4E] md:text-base break-keep">
                    위생과 심미를 함께 챙기는 회음부 제모. 피부 자극은 낮추고 제모 효과는 높이는
                    방향으로 시술을 설계합니다.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    ["ae95dfd264fc42dab540917163bab0e3", "여성의료진"],
                    ["0ca00024d13348bbab532a73f8ea9171", "첨단 레이저장비"],
                    ["e94e08ca93a74c51a6ead9f0ab025816", "제모 전용공간"],
                    ["1ef521b0fe134e10a1781ade1b007542", "자극 Down / 효과 Up"],
                  ].map(([id, cap]) => (
                    <div key={id} className="text-center">
                      <TcImg id={id} alt={cap} />
                      <p className="mt-2 text-sm font-semibold text-[#1A1F16]">{cap}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-[#2E3A30] px-6 py-12 text-white">
                  <h4 className="text-center text-xl font-bold text-[#E8E4DC]">회음부 제모 종류</h4>
                  <div className="mt-10 grid gap-8 md:grid-cols-3">
                    {[
                      {
                        img: "7fb323c52c594e4b9762aa297903c7d5",
                        title: "브라질리언 제모",
                        body: "여성 성기 부위와 항문을 포함하는 올 누드 제모 개념입니다.",
                      },
                      {
                        img: "94f0fa5dba6a42498609e4b34dc4f768",
                        title: "비키니 제모",
                        body: "수영복 라인·속옷에 맞춘 제모로 위생 관리에도 도움이 되어 인기가 많습니다.",
                      },
                      {
                        img: "4371ffe0181c4e96a5b53d9377a8f0f3",
                        title: "세미브라질리언",
                        body: "일부 모근을 남기는 방식으로, 주기적 관리를 원하시는 분께 안내됩니다.",
                      },
                    ].map((b) => (
                      <div key={b.img} className="text-center">
                        <div className="overflow-hidden rounded-2xl border border-white/10">
                          <Image
                            src={TC(b.img)}
                            alt={b.title}
                            width={640}
                            height={420}
                            className="h-auto w-full object-cover"
                            sizes="(max-width:768px) 100vw, 33vw"
                          />
                        </div>
                        <p className="mt-4 text-lg font-bold">{b.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[#C8C3BC] break-keep">{b.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E9E4DB] bg-white p-6 md:p-8">
                  <h4 className="text-center text-lg font-bold text-[#1A1F16]">레이저 제모 후 주의사항</h4>
                  <ul className="mx-auto mt-6 max-w-2xl space-y-3 text-sm text-[#5C5C5C]">
                    {[
                      "당일 샤워는 가능하나 사우나·찜질방·수영장은 피해 주세요.",
                      "자외선 차단제 사용을 권장합니다.",
                      "남은 털은 자연 탈락되므로 왁싱은 피해 주세요.",
                      "건조 시 보습제로 피부를 보호해 주세요.",
                      "지나치게 타이트한 복장은 자제해 주세요.",
                    ].map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="text-[#3E522D]">·</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {tab === "whiten" && (
              <>
                <div className="mx-auto max-w-3xl text-center">
                  <h3 className="text-xl font-bold text-[#1A1F16] md:text-2xl break-keep">
                    심미적 만족도를 높여 보세요
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[#3E522D]">회음부 미백</p>
                  <p className="mt-5 text-sm leading-relaxed text-[#555D4E] md:text-base break-keep">
                    임신·출산, 마찰, 노화로 어두워진 회음부는 자신감에 영향을 줄 수 있습니다. 멜라닌
                    색소에 작용하는 레이저·박피, 필요 시 절개 등{" "}
                    <strong className="text-[#1A1F16]">프로그램을 개인 상태에 맞게</strong> 안내합니다.
                  </p>
                </div>

                <PerineumWhiteningProcess />

                <div className="rounded-3xl bg-[#2E3A30] px-6 py-10 text-white md:px-12">
                  <h4 className="text-center text-xl font-bold text-[#E8E4DC]">
                    트리니티 회음부 미백 프로그램
                  </h4>
                  <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#D0CBC4] break-keep">
                    <strong className="text-[#E8D4C4]">레이저 미백술</strong>은 색소 침착 부위에 레이저를
                    반복 조사하는 방식으로, 횟수는 피부 상태에 따라 달라집니다.{" "}
                    <strong className="text-[#E8D4C4]">레이저 박피술</strong>은 소음순 미백에 자주
                    쓰이며 절개가 없어 회복이 비교적 짧은 편입니다.{" "}
                    <strong className="text-[#E8D4C4]">대음순 절개술</strong>은 착색·주름이 심할 때
                    선택할 수 있는 방법입니다.
                  </p>
                  <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {[
                      ["STEP 1", "착색 부위 진단 및 치료 계획 수립"],
                      ["STEP 2", "프렉셔널 모드로 착색 부위에 레이저를 고르게 조사"],
                      ["STEP 3", "밝고 탄력 있는 톤으로의 개선을 기대"],
                    ].map(([step, desc]) => (
                      <div
                        key={step}
                        className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center"
                      >
                        <p className="text-xs font-bold text-[#C5A065]">{step}</p>
                        <p className="mt-3 text-sm leading-relaxed text-[#D8D3CC] break-keep">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#E9E4DB] bg-white">
                  {/* 모바일: 시술별 카드 */}
                  <div className="divide-y divide-[#E9E4DB] md:hidden">
                    {[
                      {
                        name: "레이저 미백술",
                        pairs: [
                          ["마취", "피부마취"],
                          ["시술 시간", "10분 내외"],
                          ["실밥", "X"],
                          ["내원", "개인별 상이"],
                          ["회복·성관계", "일상 즉시 · 성관계 약 1주 후"],
                        ],
                      },
                      {
                        name: "레이저 박피술",
                        pairs: [
                          ["마취", "부분+수면"],
                          ["시술 시간", "약 30분"],
                          ["실밥", "X"],
                          ["내원", "약 2회 전후"],
                          ["회복·성관계", "일상 즉시 · 성관계 약 2주 후"],
                        ],
                      },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className={cn("p-4", row.name === "대음순 절개술" && "bg-[#F1F4ED]/40")}
                      >
                        <p className="mb-3 text-center text-sm font-bold text-[#1A1F16]">{row.name}</p>
                        <dl className="space-y-2 text-xs">
                          {row.pairs.map(([k, v]) => (
                            <div key={k} className="flex justify-between gap-3 border-b border-[#E9E4DB]/60 pb-2 last:border-0 last:pb-0">
                              <dt className="shrink-0 font-semibold text-[#957F6A]">{k}</dt>
                              <dd className="min-w-0 text-right leading-snug text-[#555D4E]">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                  {/* 데스크톱: 테이블 */}
                  <table className="hidden w-full border-collapse text-center text-sm md:table">
                    <thead>
                      <tr className="bg-[#F1F4ED] text-[#3E522D]">
                        <th className="border border-[#E9E4DB] p-3 font-semibold" />
                        <th className="border border-[#E9E4DB] p-3 font-semibold">마취</th>
                        <th className="border border-[#E9E4DB] p-3 font-semibold">시술 시간</th>
                        <th className="border border-[#E9E4DB] p-3 font-semibold">실밥</th>
                        <th className="border border-[#E9E4DB] p-3 font-semibold">내원</th>
                        <th className="border border-[#E9E4DB] p-3 font-semibold">회복·성관계</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#555D4E]">
                      <tr>
                        <th className="border border-[#E9E4DB] bg-[#FDFCFB] p-3 text-[#1A1F16]">
                          레이저 미백술
                        </th>
                        <td className="border border-[#E9E4DB] p-2">피부마취</td>
                        <td className="border border-[#E9E4DB] p-2">10분 내외</td>
                        <td className="border border-[#E9E4DB] p-2">X</td>
                        <td className="border border-[#E9E4DB] p-2">개인별 상이</td>
                        <td className="border border-[#E9E4DB] p-2 text-xs">
                          일상 즉시 · 성관계 약 1주 후
                        </td>
                      </tr>
                      <tr>
                        <th className="border border-[#E9E4DB] bg-[#FDFCFB] p-3 text-[#1A1F16]">
                          레이저 박피술
                        </th>
                        <td className="border border-[#E9E4DB] p-2">부분+수면</td>
                        <td className="border border-[#E9E4DB] p-2">약 30분</td>
                        <td className="border border-[#E9E4DB] p-2">X</td>
                        <td className="border border-[#E9E4DB] p-2">약 2회 전후</td>
                        <td className="border border-[#E9E4DB] p-2 text-xs">
                          일상 즉시 · 성관계 약 2주 후
                        </td>
                      </tr>
                      <tr>
                        <th className="border border-[#E9E4DB] bg-[#F1F4ED]/80 p-3 text-[#1A1F16]">
                          대음순 절개술
                        </th>
                        <td className="border border-[#E9E4DB] p-2">부분+수면</td>
                        <td className="border border-[#E9E4DB] p-2">약 1시간</td>
                        <td className="border border-[#E9E4DB] p-2">2주 뒤</td>
                        <td className="border border-[#E9E4DB] p-2">약 2회 전후</td>
                        <td className="border border-[#E9E4DB] p-2 text-xs">
                          일상 즉시 · 성관계 약 3주 후
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="mx-auto mt-12 max-w-2xl text-center text-[11px] leading-relaxed text-[#A1A89A]">
          시술·수술은 개인 해부·피부 상태에 따라 달라질 수 있습니다. 본문의 이미지·설명은
          트리니티여성의원 공개 자료를 참고하였으며, 최종 계획은 면담 후 결정됩니다.
        </p>
      </div>
    </section>
  );
}
