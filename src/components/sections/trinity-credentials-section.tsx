import { cn } from "@/lib/utils";
import { publicAsset } from "@/lib/site";

type Credential = {
  no: string;
  title: string;
  description: string;
  /** 없으면 사진 없이 가운데 정렬 텍스트 블록으로 노출 */
  image?: string;
  alt?: string;
};

const CREDENTIALS: Credential[] = [
  {
    no: "01",
    title: "유튜브 채널 운영",
    description:
      "여성 건강 전문 유튜브 채널을 직접 운영하며, 갱년기·자궁근종·여성성형에 대한 올바른 지식을 대중의 눈높이로 꾸준히 소통합니다.",
    image: publicAsset("/images/authority/01-youtube.png"),
    alt: "트리니티여성의원 여성 건강 유튜브 채널 콘텐츠 썸네일",
  },
  {
    no: "02",
    title: "방송 다수 출연",
    description:
      "SBS·JTBC·MBN 등 다수의 여성 건강 프로그램에 자문·출연하며, 풍부한 경험과 전문성으로 올바른 정보를 전합니다.",
    image: publicAsset("/images/authority/02-broadcast.png"),
    alt: "SBS·JTBC·MBN 등 방송에 출연·자문하는 트리니티여성의원 대표원장",
  },
  {
    no: "03",
    title: "IFAAS 국제 교수진 · 술기 전수",
    description:
      "IFAAS(국제 여성성형 학회) 여성성형학부 교수진으로서, 해외 의료진에게 트리니티의 여성성형 술기를 직접 강의하고 전수합니다.",
    image: publicAsset("/images/authority/03-ifaas.png"),
    alt: "IFAAS 국제 여성성형 학회에서 해외 의료진을 교육하는 트리니티 의료진",
  },
  {
    no: "04",
    title: "대한민국 굿닥터 선정",
    description:
      "2021 대한민국 굿닥터 100인 ‘여의사 대표원장’으로 선정되어, 진료 철학과 실력을 객관적으로 공인받았습니다.",
    image: publicAsset("/images/authority/04-gooddoctor.png"),
    alt: "2021 대한민국 굿닥터 100인에 선정된 트리니티여성의원 여의사 대표원장",
  },
  {
    no: "05",
    title: "의사를 가르치는 여성성형 키닥터",
    description:
      "국내외 의료진을 대상으로 강의하는 여성성형 키닥터(Key Doctor)로서, 수술 술기의 기준을 제시하고 후학을 양성합니다.",
    image: publicAsset("/images/authority/05-teaching.png"),
    alt: "의료진을 대상으로 여성성형을 강의하는 트리니티 키닥터",
  },
  {
    no: "06",
    title: "활발한 강연 · 전문서적 출간",
    description:
      "활발한 외부 강연과 전문 서적 출간 등 왕성한 출판 활동으로, 여성 건강에 대한 깊이 있는 지식을 널리 나눕니다.",
    image: publicAsset("/images/authority/06-lecture-book.png"),
    alt: "갱년기 전문서적 《갱년기에 대해 의사가 가장 많이 듣는 27가지 질문》 출간 및 강연 활동",
  },
  {
    no: "07",
    title: "철저한 사후관리",
    description:
      "수술로 끝나지 않습니다. 회복 과정을 꾸준히 체크하고 빠른 회복을 돕는 철저한 사후관리로 마지막까지 책임집니다.",
    image: publicAsset("/images/authority/07-aftercare.png"),
    alt: "수술 후 회복 과정을 꼼꼼히 체크하는 트리니티여성의원 의료진",
  },
];

/**
 * 여성성형 랜딩 공통 — 트리니티 여성성형센터의 권위·신뢰 강조 섹션.
 * 이미지가 있는 항목은 높이가 고정된 프레임(object-contain)으로 크기를 통일하고,
 * 이미지가 없는 항목은 가운데 정렬 텍스트 블록으로 노출한다.
 */
export function TrinityCredentialsSection() {
  let imageIndex = 0;

  return (
    <section
      aria-labelledby="trinity-credentials-heading"
      className="border-t border-[#E9E4DB]/70 bg-[#FDFBF7] py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#3E522D]">
            Trinity Women&apos;s Center
          </p>
          <h2
            id="trinity-credentials-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-[#1A1F16] sm:text-3xl break-keep">
            여성성형, 아무에게나 맡길 수 없습니다
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#5A6354] break-keep">
            트리니티 여성성형센터는 진료실 밖에서도 그 전문성을 증명합니다. 방송·강연·국제
            학회·출판, 그리고 마지막 사후관리까지 이어지는 신뢰를 확인하세요.
          </p>
        </header>

        <div className="mt-14 space-y-12 lg:mt-20 lg:space-y-16">
          {CREDENTIALS.map((item) => {
            if (!item.image) {
              return (
                <article
                  key={item.no}
                  className="mx-auto max-w-2xl border-t border-[#E9E4DB] pt-10 text-center">
                  <span className="font-serif text-3xl font-medium text-[#C9BFA9] sm:text-4xl">
                    {item.no}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-[#1A1F16] sm:text-2xl break-keep">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[1.8] text-[#4A5248] break-keep">
                    {item.description}
                  </p>
                </article>
              );
            }

            const reversed = imageIndex % 2 === 1;
            imageIndex += 1;
            return (
              <article
                key={item.no}
                className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <div className={cn("relative", reversed && "lg:order-2")}>
                  <div className="flex h-56 items-center justify-center overflow-hidden rounded-2xl border border-[#E9E4DB] bg-[#F4F1EA] p-4 sm:h-64 lg:h-72">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.alt ?? item.title}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full w-auto max-w-full object-contain"
                    />
                  </div>
                </div>

                <div className={cn(reversed && "lg:order-1")}>
                  <span className="font-serif text-4xl font-medium text-[#C9BFA9] sm:text-5xl">
                    {item.no}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#1A1F16] sm:text-2xl break-keep">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.8] text-[#4A5248] break-keep">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
