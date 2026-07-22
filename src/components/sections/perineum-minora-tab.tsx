import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

const TC = (id: string) =>
  `https://www.trinityclinic.co.kr/trinity/file/IMAGE/uu/${id}`;

const ARROW_IDS = new Set([
  "5bd18dcad0f447d7ab992d4bdb91082e",
  "a9d4a5937c7b41f28da7e70492516c8e",
]);

function Kicker({ children, tone = "olive" }: { children: React.ReactNode; tone?: "olive" | "gold" }) {
  return (
    <p
      className={cn(
        "text-sm font-bold uppercase tracking-[0.25em]",
        tone === "olive" ? "text-[#3E522D]" : "text-[#C9BFA9]",
      )}>
      {children}
    </p>
  );
}

/** 얇은 미니멀 화살표 (모바일 아래 방향 / 데스크톱 오른쪽 방향) */
function FlowArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center text-[#C9BFA9]">
      <svg
        className="h-6 w-6 rotate-90 sm:rotate-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        aria-hidden>
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** 전·후 다이어그램 스트립 — 은은한 배경 위 갤러리형 (테두리 없음) */
function DiagramStrip({
  ids,
  alt,
  dark = false,
}: {
  ids: readonly string[];
  alt: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-6 sm:flex-row sm:gap-5">
      {ids.map((id, i) =>
        ARROW_IDS.has(id) ? (
          <FlowArrow key={`arrow-${i}`} />
        ) : (
          <div
            key={`${id}-${i}`}
            className={cn(
              "flex min-w-0 flex-1 items-center justify-center rounded-2xl p-5",
              dark ? "bg-white" : "bg-[#F4F1EA]",
            )}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TC(id)}
              alt={alt}
              className="h-auto max-h-40 w-auto max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ),
      )}
    </div>
  );
}

/** 미니멀 스펙 그리드 — 아이콘 대신 타이포 + 좌측 강조선 */
function SpecGrid({
  items,
  dark = false,
}: {
  items: readonly { label: string; value: string }[];
  dark?: boolean;
}) {
  return (
    <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-5">
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "border-l-2 pl-4",
            dark ? "border-[#C9BFA9]/50" : "border-[#3E522D]",
          )}>
          <dt
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.18em]",
              dark ? "text-[#C9BFA9]" : "text-[#8A907E]",
            )}>
            {item.label}
          </dt>
          <dd
            className={cn(
              "mt-2 whitespace-pre-line text-base font-bold leading-snug",
              dark ? "text-white" : "text-[#1A1F16]",
            )}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

const CONTAINER = "mx-auto w-full max-w-6xl px-6 lg:px-8";

/** 소음순수술 전용 콘텐츠 (프리미엄 리디자인) */
export function PerineumMinoraSurgerySection() {
  return (
    <div id="minora-surgery" className="scroll-mt-28">
      {/* ── 유형 안내 (비대칭 인트로 + 케이스 갤러리) ── */}
      <section className="bg-[#FDFBF7] py-24 lg:py-32">
        <div className={CONTAINER}>
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <Kicker>Shape &amp; Balance</Kicker>
              <h2 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-[#1A1F16] lg:text-5xl break-keep">
                매끄러운 모양과<br className="hidden sm:block" /> 자연스러운 주름
              </h2>
            </div>
            <p className="text-lg leading-loose text-[#4A5248] lg:col-span-5 break-keep">
              선천적 이상이나 후천적 요인으로 변형된 소음순은 질염·방광염·골반염에 노출될 가능성이
              높아지고, 늘어지거나 비대한 모양으로 성관계 시 자신감 저하를 호소하는 분이 많습니다.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mt-20 lg:grid-cols-5 lg:gap-8">
            {(
              [
                ["3585789670644941b6122ba63a18d305", "정상"],
                ["999eb67df0b24701b684b4163f5b8c53", "편측소음순비대"],
                ["b6494e93f9dc4239b8e9b955f3f928c6", "양측소음순비대"],
                ["d8e743b72b414bc5bcc9c538d31051f7", "편측음핵주름\n소음순비대"],
                ["c114deaa8d5c4e7bab7fb1e63d308917", "양측음핵주름\n소음순비대"],
              ] as const
            ).map(([id, label]) => (
              <figure key={id} className="group">
                <div className="flex aspect-square items-center justify-center rounded-[1.75rem] bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_16px_45px_rgb(0,0,0,0.10)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TC(id)}
                    alt={label.replace("\n", " ")}
                    className="max-h-full w-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mt-4 whitespace-pre-line text-center text-sm font-medium leading-snug text-[#4A5248] break-keep">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 소음순 착색 (5:7 비대칭 + 전후 갤러리) ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className={CONTAINER}>
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Kicker>Pigmentation</Kicker>
              <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-[#1A1F16] lg:text-4xl break-keep">
                소음순 착색
              </h2>
              <p className="mt-7 text-lg leading-loose text-[#4A5248] break-keep">
                노화·마찰·질환 등으로 소음순 색이 짙어질 수 있습니다. 건강 이상이 아니더라도 성관계 시
                자신감 저하나 심미적 불만으로 이어질 수 있으며, 소음순 미백으로 맑은 분홍빛 개선을
                기대할 수 있습니다.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col items-center justify-center gap-6 rounded-[2rem] bg-[#F4F1EA] p-8 sm:flex-row lg:p-12">
                <div className="flex flex-1 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TC("da3cd9238b934662991e4f32445f9136")}
                    alt="착색된 소음순·대음순"
                    className="h-auto max-h-72 w-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <FlowArrow />
                <div className="flex flex-1 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={TC("de8c857e0e7e40ed82140ff4d3e20b9a")}
                    alt="레이저 시술 후 개선"
                    className="h-auto max-h-72 w-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 고민별 솔루션 ── */}
      <section className="bg-[#FDFBF7] py-24 lg:py-32">
        <div className={CONTAINER}>
          <Reveal className="max-w-2xl">
            <Kicker>Solutions</Kicker>
            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-[#1A1F16] lg:text-4xl break-keep">
              소음순 고민별 솔루션
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16">
            <div className="rounded-[2rem] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_45px_rgb(0,0,0,0.10)] lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9BFA9]">
                Solution 01
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16]">
                레이저 소음순 성형
              </h3>
              <ul className="mt-8 space-y-4">
                {["소음순 비대칭", "소음순 비대", "주름지거나 늘어진 소음순"].map((t) => (
                  <li
                    key={t}
                    className="border-l-2 border-[#3E522D] pl-4 text-base leading-relaxed text-[#4A5248] break-keep">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_45px_rgb(0,0,0,0.10)] lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9BFA9]">
                Solution 02
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16]">소음순 미백</h3>
              <ul className="mt-8 space-y-4">
                {["어두운 소음순", "잦은 마찰로 인한 착색", "호르몬·노화로 짙어진 색"].map((t) => (
                  <li
                    key={t}
                    className="border-l-2 border-[#3E522D] pl-4 text-base leading-relaxed text-[#4A5248] break-keep">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 수술 정보 (다크 프리미엄 밴드) ── */}
      <section className="bg-white py-16 lg:py-20">
        <div className={CONTAINER}>
          <Reveal className="rounded-[2.5rem] bg-[#1A1F16] px-6 py-20 text-white lg:px-16 lg:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Kicker tone="gold">Surgery Info</Kicker>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                소음순 수술 정보
              </h2>
            </div>

            <div className="mt-20">
              <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#C9BFA9]">
                레이저 클리어 소음순
              </p>
              <DiagramStrip
                dark
                alt="레이저 클리어 소음순"
                ids={[
                  "b0b029d8b612408cb6a17072bf9fa2fa",
                  "5bd18dcad0f447d7ab992d4bdb91082e",
                  "de8c857e0e7e40ed82140ff4d3e20b9a",
                ]}
              />
              <SpecGrid
                dark
                items={[
                  { label: "수술시간", value: "1시간" },
                  { label: "마취방법", value: "국소마취" },
                  { label: "회복기간", value: "1주일" },
                  { label: "실밥제거", value: "없음" },
                  { label: "금욕기간", value: "2~3주" },
                ]}
              />
            </div>

            <div className="mt-24">
              <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#C9BFA9]">
                미백효과
              </p>
              <DiagramStrip
                dark
                alt="소음순 미백 효과"
                ids={[
                  "4628ef214c1f4076a2a1476e684120ab",
                  "a9d4a5937c7b41f28da7e70492516c8e",
                  "32405f2f9cf64715bef2a518871b4ff6",
                  "a9d4a5937c7b41f28da7e70492516c8e",
                  "5a72fafc78ae42be943aa8a67dbc5066",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 추천 대상 (4:8 비대칭 리스트) ── */}
      <section className="bg-[#FDFBF7] py-24 lg:py-32">
        <div className={CONTAINER}>
          <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Kicker>Checklist</Kicker>
              <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-[#1A1F16] lg:text-4xl break-keep">
                이런 분들에게<br className="hidden lg:block" /> 추천합니다
              </h2>
            </div>
            <ul className="grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:col-span-8">
              {[
                "소음순 모양이 부끄럽고 신경 쓰일 때",
                "성관계 시 소음순이 말려들어가 아프거나 불편할 때",
                "소음순 주름이 많아 신경 쓰일 때",
                "질염·방광염 등 여성질환이 반복될 때",
                "착색으로 성관계가 많은 것으로 오해받을까 걱정될 때",
                "잦은 마찰로 어둡게 착색이 있는 분",
                "호르몬 변화·노화로 색이 진해진 분",
                "진한 소음순 색으로 자신감이 저하되었을 때",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 border-b border-[#E9E4DB]/70 py-5 text-base leading-relaxed text-[#4A5248] break-keep">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3E522D]" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 수술 전 / 수술 후 ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className={CONTAINER}>
          <Reveal className="max-w-2xl">
            <Kicker>Before &amp; After Care</Kicker>
            <h2 className="mt-6 text-3xl font-bold leading-[1.15] tracking-tight text-[#1A1F16] lg:text-4xl break-keep">
              수술 전후 관리
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-16">
            <div className="rounded-[2rem] bg-[#FDFBF7] p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9BFA9]">Before</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16]">수술 전</h3>
              <ul className="mt-8 space-y-5">
                {[
                  "생리 주기에 맞춰 수술 일정을 조절합니다.",
                  "수술 전날은 무리한 행동·음주를 삼가고 휴식을 취합니다.",
                  "수술 당일에는 외음부 압박이 없는 편안한 복장으로 내원합니다.",
                ].map((t) => (
                  <li
                    key={t}
                    className="border-l-2 border-[#C9BFA9] pl-4 text-base leading-relaxed text-[#4A5248] break-keep">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-[#FDFBF7] p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9BFA9]">After</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16]">수술 후</h3>
              <ul className="mt-8 space-y-5">
                {[
                  "재생크림으로 통증 완화·진정·부종 제거를 돕습니다.",
                  "일주일 정도 항생제·소염제 처방이 있을 수 있습니다.",
                  "일주일 정도 따뜻한 물로 좌욕을 합니다.",
                  "일주일 후 내원하여 봉합사를 제거합니다.",
                  "2~3주 이후부터 탕목욕·성관계가 가능합니다.",
                ].map((t) => (
                  <li
                    key={t}
                    className="border-l-2 border-[#C9BFA9] pl-4 text-base leading-relaxed text-[#4A5248] break-keep">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-[#A1A89A]">
            시술·수술은 개인 해부·피부 상태에 따라 달라질 수 있습니다. 최종 계획은 면담 후
            결정됩니다.
          </p>
        </div>
      </section>
    </div>
  );
}

/** @deprecated 소음순 전용으로 이름 변경 — PerineumMinoraSurgerySection 사용 */
export const PerineumMinoraTab = PerineumMinoraSurgerySection;
