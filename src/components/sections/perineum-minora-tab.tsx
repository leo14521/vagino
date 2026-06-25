import Image from "next/image";
import { cn } from "@/lib/utils";

const TC = (id: string) =>
  `https://www.trinityclinic.co.kr/trinity/file/IMAGE/uu/${id}`;

/** CDN 원본 비율 유지 — 고정 width/height로 레이아웃 박스가 늘어나지 않게 */
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

function FlowArrow({ className = "", fileId = "5bd18dcad0f447d7ab992d4bdb91082e" }: { className?: string; fileId?: string }) {
  return (
    <div className={cn("flex shrink-0 items-center justify-center px-1", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={TC(fileId)}
        alt=""
        className="h-6 w-auto rotate-90 object-contain opacity-75 sm:h-7 md:rotate-0"
        aria-hidden
      />
    </div>
  );
}

/** 공식 c01_3: 전·화살표·후 이미지 스트립 (원본 비율 유지) */
function SurgeryDiagramRow({
  ids,
  alt,
}: {
  ids: readonly string[];
  alt: string;
}) {
  const arrowIds = new Set([
    "5bd18dcad0f447d7ab992d4bdb91082e",
    "a9d4a5937c7b41f28da7e70492516c8e",
  ]);

  return (
    <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2 md:gap-3">
      {ids.map((id, index) => {
        if (arrowIds.has(id)) {
          return <FlowArrow key={`${id}-${index}`} fileId={id} />;
        }
        return (
          <div
            key={`${id}-${index}`}
            className="flex min-w-0 max-w-[min(100%,240px)] flex-1 justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TC(id)}
              alt={alt}
              className="h-auto max-h-44 w-auto max-w-full object-contain sm:max-h-52"
              loading="lazy"
              decoding="async"
            />
          </div>
        );
      })}
    </div>
  );
}

function SurgeryInfoBar({
  items,
}: {
  items: readonly { icon: string; label: string; value: string }[];
}) {
  return (
    <ul className="mx-auto mt-10 flex max-w-4xl flex-wrap items-stretch justify-center border-y border-[#957F6A] py-8">
      {items.map((item) => (
        <li key={item.label} className="flex w-1/2 flex-col items-center px-2 text-center sm:w-1/5">
          <div className="relative mb-2 h-8 w-8 sm:h-9 sm:w-9">
            <Image src={TC(item.icon)} alt="" fill className="object-contain" sizes="36px" />
          </div>
          <p className="text-[11px] text-[#C5A065] sm:text-xs">{item.label}</p>
          <span className="mt-1 text-xs font-extrabold text-[#C5A065] whitespace-pre-line sm:text-sm">
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  );
}

function InfoStrip({
  items,
}: {
  items: readonly { icon: string; label: string; value: string }[];
}) {
  const cols =
    items.length >= 6
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-5";

  return (
    <ul className={cn("mx-auto grid max-w-4xl gap-2 sm:gap-3", cols)}>
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

/** menu3-2 소음순성형 — 소음순 수술 · 음핵 성형 */
export function PerineumMinoraTab() {
  return (
    <div className="space-y-16 md:space-y-20">
      {/* ── 소음순 수술 ── */}
      <div id="minora-surgery" className="scroll-mt-28 space-y-12 md:space-y-14">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-xl font-bold leading-snug text-[#1A1F16] md:text-2xl break-keep">
            매끄러운 모양과 자연스러운 주름
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#3E522D]">
            소음순 수술 (모양성형 / 미백)
          </p>
          <p className="mt-5 text-left text-sm leading-relaxed text-[#555D4E] md:text-center md:text-base break-keep">
            <strong className="text-[#1A1F16]">소음순 모양</strong>이 변형되면 삶의 질에도 영향을 줄 수
            있습니다. 선천적 이상이나 후천적 요인으로 변형된 소음순은 질염·방광염·골반염에 노출될
            가능성이 높아지고, 늘어지거나 비대한 모양으로 성관계 시 자신감 저하를 호소하는 분이
            많습니다.
          </p>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {(
            [
              ["3585789670644941b6122ba63a18d305", "정상"],
              ["999eb67df0b24701b684b4163f5b8c53", "편측소음순비대"],
              ["b6494e93f9dc4239b8e9b955f3f928c6", "양측소음순비대"],
              ["d8e743b72b414bc5bcc9c538d31051f7", "편측음핵주름\n소음순비대"],
              ["c114deaa8d5c4e7bab7fb1e63d308917", "양측음핵주름\n소음순비대"],
            ] as const
          ).map(([id, label]) => (
            <li
              key={id}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#E9E4DB] bg-white shadow-sm"
            >
              <div className="flex flex-1 items-center justify-center bg-[#FAF9F6] p-2 sm:p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={TC(id)}
                  alt={label.replace("\n", " ")}
                  className="h-auto max-h-28 w-full object-contain sm:max-h-32 md:max-h-36"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="bg-[#2E3A30] px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white whitespace-pre-line sm:py-3 sm:text-xs">
                {label}
              </p>
            </li>
          ))}
        </ul>

        <div className="rounded-3xl bg-[#EDE6DC]/60 px-6 py-10 md:px-12">
          <h4 className="text-center text-lg font-bold text-[#1A1F16]">소음순 착색</h4>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#5C5C5C] break-keep">
            노화·마찰·질환 등으로 소음순 색이 짙어질 수 있습니다. 건강 이상이 아니더라도 성관계 시
            자신감 저하나 심미적 불만으로 이어질 수 있으며, 소음순 미백으로 맑은 분홍빛 개선을
            기대할 수 있습니다.
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <TcImg
              id="da3cd9238b934662991e4f32445f9136"
              alt="착색된 소음순·대음순"
              maxWidth="max-w-[min(100%,280px)]"
            />
            <FlowArrow />
            <TcImg
              id="de8c857e0e7e40ed82140ff4d3e20b9a"
              alt="레이저 시술 후 개선"
              maxWidth="max-w-[min(100%,280px)]"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#E9E4DB] bg-white">
          <h4 className="bg-[#2E3A30] px-4 py-4 text-center text-lg font-bold text-[#E8E4DC]">
            소음순 고민별 솔루션
          </h4>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-[#E9E4DB] p-6 md:border-b-0 md:border-r">
              <p className="text-center text-base font-bold text-[#3E522D]">레이저 소음순 성형</p>
              <ul className="mt-4 space-y-2 text-center text-sm text-[#5C5C5C]">
                <li>소음순 비대칭</li>
                <li>소음순 비대</li>
                <li>주름지거나 늘어진 소음순</li>
              </ul>
            </div>
            <div className="p-6">
              <p className="text-center text-base font-bold text-[#3E522D]">소음순 미백</p>
              <ul className="mt-4 space-y-2 text-center text-sm text-[#5C5C5C]">
                <li>어두운 소음순</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#2E3A30] px-4 py-10 text-white md:px-8">
          <h4 className="text-center text-lg font-bold md:text-xl">소음순 수술 정보</h4>

          <p className="mt-10 text-center text-sm text-[#E8D4C4]">레이저 클리어 소음순</p>
          <SurgeryDiagramRow
            alt="레이저 클리어 소음순"
            ids={[
              "b0b029d8b612408cb6a17072bf9fa2fa",
              "5bd18dcad0f447d7ab992d4bdb91082e",
              "de8c857e0e7e40ed82140ff4d3e20b9a",
            ]}
          />
          <SurgeryInfoBar
            items={[
              { icon: "4e052efea1f34a6b8208b0ce70756537", label: "수술시간", value: "1시간" },
              { icon: "74c06dd65eea4092a341050ecc6a808e", label: "마취방법", value: "국소마취" },
              { icon: "cfbb10bc909943e391a3c9dbdaa12ce2", label: "회복기간", value: "1주일" },
              { icon: "c15ad14125e84bf69e8b658b734b155c", label: "실밥제거", value: "없음" },
              { icon: "23cbfaa1507341cd87d390b4db06ac82", label: "금욕기간", value: "2~3주" },
            ]}
          />

          <p className="mt-14 text-center text-sm text-[#E8D4C4]">피부 모형도</p>
          <SurgeryDiagramRow
            alt="소음순 수술 피부 모형도"
            ids={[
              "4628ef214c1f4076a2a1476e684120ab",
              "a9d4a5937c7b41f28da7e70492516c8e",
              "32405f2f9cf64715bef2a518871b4ff6",
              "a9d4a5937c7b41f28da7e70492516c8e",
              "5a72fafc78ae42be943aa8a67dbc5066",
            ]}
          />
          <SurgeryInfoBar
            items={[
              { icon: "4e052efea1f34a6b8208b0ce70756537", label: "수술시간", value: "1시간" },
              { icon: "74c06dd65eea4092a341050ecc6a808e", label: "마취방법", value: "국소마취" },
              { icon: "cfbb10bc909943e391a3c9dbdaa12ce2", label: "회복기간", value: "당일퇴원\n1주일" },
              { icon: "c15ad14125e84bf69e8b658b734b155c", label: "실밥제거", value: "-" },
              { icon: "23cbfaa1507341cd87d390b4db06ac82", label: "금욕기간", value: "-" },
            ]}
          />
        </div>

        <div className="rounded-2xl border border-[#E9E4DB] bg-white p-6 md:p-8">
          <h4 className="text-center text-lg font-bold text-[#1A1F16]">이런 분들에게 추천합니다</h4>
          <ul className="mx-auto mt-6 grid max-w-3xl gap-2 sm:grid-cols-2 text-sm text-[#5C5C5C]">
            {[
              "소음순 모양이 부끄럽고 신경 쓰일 때",
              "성관계 시 소음순이 말려들어가 아프거나 불편할 때",
              "소음순 주름이 많아 신경 쓰일 때",
              "질염, 방광염 등 여성질환이 반복될 때",
              "착색된 소음순으로 성관계가 많은 것으로 오해받을까 걱정될 때",
              "잦은 마찰로 인해 어둡게 착색이 있는 분",
              "호르몬 변화, 노화로 색이 진해진 분",
              "진한 소음순 색으로 자신감이 저하되었을 때",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-[#3E522D] shrink-0">·</span>
                <span className="break-keep">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E9E4DB] bg-[#FDFCFB] p-6 md:p-8">
            <h4 className="text-base font-bold text-[#3E522D]">수술 전</h4>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#5C5C5C] break-keep">
              <li>생리 주기에 맞춰 수술 일정을 조절합니다.</li>
              <li>수술 전날은 무리한 행동·음주를 삼가고 휴식을 취합니다.</li>
              <li>수술 당일에는 회음부 압박이 없는 편안한 복장으로 내원합니다.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E9E4DB] bg-white p-6 md:p-8">
            <h4 className="text-base font-bold text-[#3E522D]">수술 후</h4>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#5C5C5C] break-keep">
              <li>재생크림으로 통증 완화·진정·부종 제거를 돕습니다.</li>
              <li>일주일 정도 항생제·소염제 처방이 있을 수 있습니다.</li>
              <li>일주일 정도 따뜻한 물로 좌욕을 합니다.</li>
              <li>일주일 후 내원하여 봉합사를 제거합니다.</li>
              <li>2~3주 이후부터 탕목욕·성관계가 가능합니다.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── 음핵 성형 ── */}
      <div
        id="minora-clitoris"
        className="scroll-mt-28 space-y-12 border-t border-[#E9E4DB]/80 pt-16 md:space-y-14 md:pt-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-xl font-bold leading-snug text-[#1A1F16] md:text-2xl break-keep">
            무감각한 성관계, 계속 이래도 될까?
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#3E522D]">
            음핵 성형으로 오르가즘, 되돌릴 수 있어요
          </p>
          <p className="mt-5 text-sm leading-relaxed text-[#555D4E] break-keep">
            <strong className="text-[#1A1F16]">여성성기능장애(불감증)</strong>은 성에 대한 욕구는
            있으나 성적 자극에 반응이 없거나 오르가즘에 도달하지 못하는 상태입니다. 심리적 요소의
            영향을 많이 받습니다.
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
            어려워 쾌감을 느끼는 데 방해가 될 수 있으며, 음핵 거상술·포경술로 노출 범위를 넓혀
            성감 향상을 기대할 수 있습니다.
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
              음핵이 비정상적인 주변 조직에 덮여 있는 경우, 일부를 노출시켜 성관계 시 마찰을
              증가시키고 민감도를 높이는 수술입니다. 불감증 치료에 도움이 될 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl">
          <h4 className="mb-6 text-center text-lg font-bold text-[#1A1F16]">음핵성형 수술 정보</h4>
          <TcImg
            id="47214e490e72473c89ea88ab0d58b7ca"
            alt="음핵성형 수술 안내"
            maxWidth="max-w-md"
          />
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
    </div>
  );
}
