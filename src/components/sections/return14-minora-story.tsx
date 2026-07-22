import { Reveal } from "@/components/ui/reveal";

type StoryCard = {
  no: string;
  title: string;
  body: string;
};

const STORY: StoryCard[] = [
  {
    no: "01",
    title: "자연스러운 현상입니다",
    body: "임신, 출산, 노화로 인한 당연한 변화입니다. 절대 자책하지 마세요.",
  },
  {
    no: "02",
    title: "미용이 아닌 치료",
    body: "잦은 질염과 쓸림 통증. 삶의 질을 높이는 필수적인 치료입니다.",
  },
  {
    no: "03",
    title: "프리미엄 미세봉합",
    body: "수술시간이 빠른 건 의미 없습니다. 회복시간이 빨라야 합니다. 프리미엄 미세봉합사로 정교하게 봉합해 회복 속도를 높입니다.",
  },
  {
    no: "04",
    title: "1:1 완벽한 밸런스",
    body: "양쪽 대칭은 물론, 핑크빛 색감까지 고려해 개인 맞춤 디자인합니다.",
  },
];

/**
 * 소음순수술 브랜드 스토리 — 인트로 2줄 + 01~04 카드.
 * 이미지 없이 타이포·인터랙션(워터마크 넘버, 호버 리프트, 확장 라인) 중심.
 * 모바일: 가로 스냅 스크롤 / 데스크톱: 4열 그리드.
 */
export function Return14MinoraStory() {
  return (
    <section
      aria-labelledby="return14-heading"
      className="scroll-mt-28 overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* ── 인트로 (2줄) ── */}
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#3E522D]">
            남들에게 말 못 할 고민
          </p>
          <h2
            id="return14-heading"
            className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-[#1A1F16] lg:text-5xl break-keep">
            이제 당당하게 마주할 시간입니다
          </h2>
        </Reveal>

        {/* ── 01~04 카드 : 모바일 가로 스와이프 / 데스크톱 4열 ── */}
        <Reveal className="mt-14 lg:mt-20">
          <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {STORY.map((card) => (
              <article
                key={card.no}
                className="group relative min-w-[76vw] shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-[#FDFBF7] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_22px_55px_rgb(0,0,0,0.07)] sm:min-w-[52vw] lg:min-w-0">
                {/* 배경 워터마크 넘버 */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-8 font-serif text-[7.5rem] font-medium leading-none text-[#3E522D]/[0.06] transition-all duration-500 group-hover:-top-6 group-hover:text-[#3E522D]/[0.10]">
                  {card.no}
                </span>

                <div className="relative">
                  <span className="font-serif text-2xl font-medium text-[#C9BFA9]">{card.no}</span>
                  <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#1A1F16] break-keep">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5A6354] break-keep">
                    {card.body}
                  </p>
                  <span className="mt-6 block h-0.5 w-8 rounded-full bg-[#3E522D] transition-all duration-500 group-hover:w-16" />
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-[#A1A89A] lg:hidden">좌우로 밀어 보세요 →</p>
        </Reveal>
      </div>
    </section>
  );
}
