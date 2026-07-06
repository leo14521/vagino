import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVER_BOOKING_URL } from "@/lib/site";
import {
  WONDERFILL_HISTOLOGY_COPY,
  WONDERFILL_IMAGES,
  WONDERFILL_INJECTION_COPY,
  WONDERFILL_INTRO_COPY,
  WONDERFILL_MECHANISM_COPY,
} from "@/data/filler-wonderfill-content";

const ACCENT = "text-[#B8956E]";

function FillerPhoto({
  src,
  alt,
  width,
  height,
  className,
  priority,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-[#E9E4DB]/80 bg-white", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full object-contain bg-[#F4F5F0]"
        sizes="(max-width: 768px) 100vw, 720px"
        priority={priority}
        unoptimized
      />
    </div>
  );
}

function BeforeAfterRow({
  before,
  after,
}: {
  before: (typeof WONDERFILL_IMAGES)[keyof typeof WONDERFILL_IMAGES];
  after: (typeof WONDERFILL_IMAGES)[keyof typeof WONDERFILL_IMAGES];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <div>
        <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-widest text-[#8B7B6E]">
          Before
        </p>
        <FillerPhoto src={before.src} alt={before.alt} width={before.width} height={before.height} />
      </div>
      <ArrowRight className="mx-auto hidden h-5 w-5 text-[#B8956E]/70 sm:block" aria-hidden />
      <div>
        <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-widest text-[#3E522D]">
          After
        </p>
        <FillerPhoto
          src={after.src}
          alt={after.alt}
          width={after.width}
          height={after.height}
          className="border-[#3E522D]/15"
        />
      </div>
    </div>
  );
}

function EffectCompareImage({
  image,
}: {
  image: (typeof WONDERFILL_IMAGES)["effectTissueCompare"] | (typeof WONDERFILL_IMAGES)["effectCollagenCompare"];
}) {
  const { labels } = WONDERFILL_HISTOLOGY_COPY;
  return (
    <div>
      <FillerPhoto
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="mx-auto max-w-3xl"
      />
      <div className="mx-auto mt-3 grid max-w-3xl grid-cols-2 gap-2 text-center text-xs font-semibold text-[#5A6354]">
        <span>{labels.month1}</span>
        <span>{labels.month6}</span>
      </div>
    </div>
  );
}

export function WonderfillLandingSection() {
  const intro = WONDERFILL_INTRO_COPY;
  const mech = WONDERFILL_MECHANISM_COPY;
  const hist = WONDERFILL_HISTOLOGY_COPY;
  const inj = WONDERFILL_INJECTION_COPY;
  const img = WONDERFILL_IMAGES;

  return (
    <div className="bg-[#FDFBF7]">
      {/* Hero + 제품 */}
      <section className="border-b border-[#E9E4DB]/60 bg-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
          <div className="order-2 md:order-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#3E522D]">
              Vaginal Filler
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-[#1A1F16] sm:text-4xl break-keep">
              질필러 · 원더필
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-[#5A6354] break-keep">
              여성 질 전용 ECM 필러로 볼륨·탄력을 보강하는 비수술 시술입니다.
            </p>
            <Link
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex rounded-full bg-[#3E522D] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              상담·예약 문의
            </Link>
          </div>
          <FillerPhoto
            src={img.product.src}
            alt={img.product.alt}
            width={img.product.width}
            height={img.product.height}
            priority
            className="order-1 mx-auto max-w-md shadow-md md:order-2"
          />
        </div>
      </section>

      {/* 원더필 설명 1 — 텍스트만 */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 lg:px-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#957F6A]">About</p>
        <p className="mt-6 text-lg leading-[1.85] text-[#1A1F16] sm:text-xl sm:leading-[2] break-keep">
          {intro.lead}{" "}
          <span className={cn("font-bold", ACCENT)}>{intro.highlight1}</span>{" "}
          <span className={cn("font-bold", ACCENT)}>{intro.highlight2}</span>
          {intro.body}{" "}
          <span className={cn("font-bold", ACCENT)}>{intro.highlight3}</span>
          {intro.tail}
        </p>
      </section>

      {/* 원더필 설명 2 — 텍스트만 */}
      <section className="border-y border-[#E9E4DB]/60 bg-[#F4F5F0] py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-10 px-4 text-center sm:px-6 lg:px-8">
          <div>
            <p className="text-lg leading-[1.85] text-[#1A1F16] sm:text-xl sm:leading-[2] break-keep">
              {mech.wonderfill.before}{" "}
              <span className={cn("font-bold", ACCENT)}>{mech.wonderfill.highlight}</span>{" "}
              {mech.wonderfill.after}
            </p>
          </div>
          <p className="text-base leading-relaxed text-[#5A6354] sm:text-lg break-keep">
            {mech.megafill.text}
          </p>
        </div>
      </section>

      {/* 주입 효과 — 텍스트 + 이미지 */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <header className="text-center">
          <h3 className="text-2xl font-bold text-[#1A1F16] md:text-3xl break-keep">{inj.title}</h3>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5A6354] break-keep">
            {inj.description}
          </p>
        </header>
        <div className="mt-10">
          <BeforeAfterRow before={img.injectionBefore} after={img.injectionAfter} />
        </div>
      </section>

      {/* 주입 비교 2 */}
      <section className="border-t border-[#E9E4DB]/60 bg-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-sm font-semibold text-[#3E522D] break-keep">
            질 점막 주입 전·후 단면 비교
          </p>
          <BeforeAfterRow before={img.injection2Before} after={img.injection2After} />
        </div>
      </section>

      {/* 조직학 1 — 생착 (주입효과1) */}
      <section className="border-y border-[#E9E4DB]/60 bg-[#F4F5F0] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <EffectCompareImage image={img.effectTissueCompare} />
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[#1A1F16] sm:text-lg break-keep">
            {hist.engraftment.text}{" "}
            <strong className={ACCENT}>{hist.engraftment.highlight}</strong>
            {hist.engraftment.tail}
          </p>
        </div>
      </section>

      {/* 조직학 2 — 콜라겐 (주입효과2) */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <EffectCompareImage image={img.effectCollagenCompare} />
        <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[#1A1F16] sm:text-lg break-keep">
          {hist.collagen.text}{" "}
          <strong className={ACCENT}>{hist.collagen.highlight}</strong>
          {hist.collagen.tail}
        </p>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E9E4DB]/60 bg-[#2E3A30] py-16 text-center text-white">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h3 className="text-xl font-bold break-keep">원더필 질필러 맞춤 상담</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75 break-keep">
            주입량·시술 계획은 개인 상태에 따라 달라집니다. 여의사 전문의 1:1 상담을 받아 보세요.
          </p>
          <Link
            href={NAVER_BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex rounded-full bg-[#B8956E] px-8 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            네이버 예약 · 상담
          </Link>
        </div>
      </section>
    </div>
  );
}
