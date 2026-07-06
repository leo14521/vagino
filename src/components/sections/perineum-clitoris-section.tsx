import Image from "next/image";
import { cn } from "@/lib/utils";

const TC = (id: string) =>
  `https://www.trinityclinic.co.kr/trinity/file/IMAGE/uu/${id}`;

function TcImg({
  id,
  alt,
  className = "",
  maxWidth = "max-w-2xl",
  frame = true,
}: {
  id: string;
  alt: string;
  className?: string;
  maxWidth?: string;
  frame?: boolean;
}) {
  return (
    <div className={cn("mx-auto w-full", maxWidth, className)}>
      <div
        className={cn(
          "flex justify-center",
          frame && "overflow-hidden rounded-2xl border border-[#E9E4DB] bg-[#FAF9F6] p-2 sm:p-3"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={TC(id)}
          alt={alt}
          className="h-auto max-h-[min(72vh,520px)] w-auto max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function FlowArrow({ className = "" }: { className?: string }) {
  return (
    <div className={cn("flex shrink-0 items-center justify-center px-1", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TC("5bd18dcad0f447d7ab992d4bdb91082e")}
        alt=""
        className="h-6 w-auto rotate-90 object-contain opacity-75 sm:h-7 md:rotate-0"
        aria-hidden
      />
    </div>
  );
}

function InfoStrip({
  items,
}: {
  items: readonly { icon: string; label: string; value: string }[];
}) {
  return (
    <ul className="mx-auto grid max-w-4xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 sm:gap-3">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex flex-col items-center rounded-2xl border border-[#E9E4DB] bg-white px-3 py-4 text-center"
        >
          <div className="relative mb-2 h-9 w-9 sm:h-10 sm:w-10">
            <Image src={TC(item.icon)} alt="" fill className="object-contain" sizes="40px" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-[#957F6A]">{item.label}</p>
          <p className="mt-1 text-[11px] font-semibold leading-snug text-[#1A1F16] whitespace-pre-line sm:text-xs">
            {item.value}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** 음핵수술 전용 콘텐츠 */
export function PerineumClitorisSection() {
  return (
    <div className="space-y-12 md:space-y-16">
      <div className="mx-auto max-w-3xl text-center">
        <h3 className="text-xl font-bold leading-snug text-[#1A1F16] md:text-2xl break-keep">
          무감각한 성관계, 계속 이래도 될까?
        </h3>
        <p className="mt-2 text-sm font-semibold text-[#3E522D]">
          음핵 성형으로 오르가즘, 되돌릴 수 있어요
        </p>
        <p className="mt-5 text-sm leading-relaxed text-[#555D4E] break-keep">
          <strong className="text-[#1A1F16]">여성성기능장애(불감증)</strong>은 성에 대한 욕구는 있으나
          성적 자극에 반응이 없거나 오르가즘에 도달하지 못하는 상태입니다. 심리적 요소의 영향을 많이
          받습니다.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {(
          [
            ["욕구장애", "성욕저하·성혐오증\n성적욕구 결핍"],
            ["흥분기장애", "애무·성적자극에도\n성적 흥분이 없는 경우"],
            ["극치기장애", "삽입 시 오르가즘을\n느끼지 못하는 경우"],
          ] as const
        ).map(([title, body]) => (
          <div
            key={title}
            className="rounded-2xl border border-[#E9E4DB] bg-white px-4 py-6 text-center shadow-sm"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#C5A065]">{title}</p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#1A1F16] whitespace-pre-line break-keep">
              {body}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-[#D5B495]/30 px-4 py-10 md:px-8">
        <h4 className="mb-6 text-center text-lg font-bold text-[#1A1F16]">불감증의 원인</h4>
        <TcImg
          id="3c4359c4486a4f9881802dbe1d927330"
          alt="불감증의 원인 안내 도표"
          maxWidth="max-w-3xl"
          frame={false}
        />
        <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {(
            [
              ["질 근육의 이완", "성감대가 발달하지\n않은 경우"],
              ["기질적 요인", "음부의\n혈류 감소"],
              ["호르몬장애(갱년기)", "생리적 요인\n질건조증, 질염 등의\n질환 증상"],
              ["해부학적 요인", "음핵이 표피에\n덮여 있는 경우"],
              ["소음순 비대", "감각 장애"],
              ["심리적 요인", "자신감 저하,\n성욕 감퇴"],
            ] as const
          ).map(([title, body]) => (
            <li key={title} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={TC("8bd888ddc1d94b65b782486211777535")}
                alt=""
                className="mx-auto mb-1 h-5 w-auto object-contain opacity-80"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
              <div className="flex min-h-[120px] flex-col items-center justify-start gap-1 rounded-br-[20px] bg-[#957F6A] px-2 pt-5 pb-4 text-white sm:min-h-[140px]">
                <p className="text-sm font-semibold md:text-base">{title}</p>
                <span className="text-[11px] leading-snug text-[#EAD4C3] whitespace-pre-line sm:text-xs">
                  {body}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-[#EDE6DC]/60 px-6 py-10 md:px-12">
        <h4 className="text-center text-lg font-bold text-[#1A1F16]">음핵(클리토리스)</h4>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#5C5C5C] break-keep">
          소음순 위쪽에 위치하며 성적 쾌감을 느끼는 신체 부위입니다. 음핵이 덮여 있으면 자극 전달이
          어려워 쾌감을 느끼는 데 방해가 될 수 있으며, 음핵 거상술·포경술로 노출 범위를 넓혀 성감
          향상을 기대할 수 있습니다.
        </p>
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <TcImg
            id="dbcaf780c30d4e778b8e65add662144f"
            alt="음핵 해부 구조 안내"
            maxWidth="max-w-[min(100%,300px)]"
          />
          <FlowArrow />
          <TcImg
            id="9d557136004c4947997ba8ddcee6111a"
            alt="음핵 성형 개념"
            maxWidth="max-w-[min(100%,300px)]"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#E9E4DB] bg-[#2E3A30] p-8 text-white">
          <h4 className="text-xl font-bold">음핵거상술</h4>
          <p className="mt-4 text-sm leading-relaxed text-[#D8D3CC] break-keep">
            음핵 주변 피부가 덮이면서 이완되어 음핵이 아래로 처진 경우 시행합니다. 음핵 포경술을
            병행하는 경우가 많으며, 부부관계 시 성적 자극 증가와 오르가즘·성감 향상에 효과적입니다.
          </p>
        </div>
        <div className="rounded-2xl border border-[#E9E4DB] bg-white p-8">
          <h4 className="text-xl font-bold text-[#1A1F16]">음핵포경술</h4>
          <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C] break-keep">
            음핵이 비정상적인 주변 조직에 덮여 있는 경우, 일부를 노출시켜 성관계 시 마찰을 증가시키고
            민감도를 높이는 수술입니다. 불감증 치료에 도움이 될 수 있습니다.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl">
        <h4 className="mb-6 text-center text-lg font-bold text-[#1A1F16]">음핵성형 수술 정보</h4>
        <TcImg id="47214e490e72473c89ea88ab0d58b7ca" alt="음핵성형 수술 안내" maxWidth="max-w-md" />
        <div className="mt-6">
          <InfoStrip
            items={[
              { icon: "c16a931b438c477293a34ee78d6d2df0", label: "수술시간", value: "20분 내외" },
              { icon: "b565bc56685f4752bfe60e839f5e18f6", label: "마취", value: "수면마취\nor 국소마취" },
              { icon: "4df8132370b84b7f9ba04a870ee33a85", label: "입원", value: "당일퇴원" },
              { icon: "feff1229fa444f99b3dac15a0a83d965", label: "내원", value: "3~4회" },
              { icon: "e77f793c5856485699b3404bcf29c00c", label: "실밥제거", value: "1주 후" },
              { icon: "296ed55f99134cd2b2185585c739b25e", label: "치료기간", value: "2~3주" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
