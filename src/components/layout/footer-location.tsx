import { Clock, MapPin, Map, Phone } from "lucide-react";

const NAVER_MAP_SEARCH =
  "https://map.naver.com/v5/search/%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0%EC%97%AC%EC%84%B1%EC%9D%98%EC%9B%90";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C%20108%20%EB%A0%89%EC%8A%A4%ED%83%80%EC%9B%8C%20%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0%EC%97%AC%EC%84%B1%EC%9D%98%EC%9B%90&hl=ko&z=17&output=embed";

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8+%EA%B0%95%EB%82%A8%EA%B5%AC+%EB%8F%84%EC%82%B0%EB%8C%80%EB%A1%9C+108+%EB%A0%89%EC%8A%A4%ED%83%80%EC%9B%8C+%ED%8A%B8%EB%A6%AC%EB%8B%88%ED%8B%B0%EC%97%AC%EC%84%B1%EC%9D%98%EC%9B%90";

export function FooterLocationSection() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-[#E9E4DB]/50 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#3E522D] font-bold tracking-[0.3em] text-[11px] uppercase mb-4 block">
            Visit Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F16] font-kopub leading-tight">
            진료시간과 <span className="italic text-[#3E522D]">오시는길</span>
          </h2>
          <p className="text-[#6B7264] mt-6 font-medium text-[17px] max-w-xl mx-auto break-keep">
            편안한 방문을 위해 진료 시간과 위치를 안내해 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* 진료시간 (#hours: 사이드내비·직링크 앵커) */}
          <div
            id="hours"
            className="bg-[#FDFCFB] rounded-[2rem] p-8 lg:p-10 border border-[#E9E4DB] shadow-sm scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F1F4ED] flex items-center justify-center text-[#3E522D]">
                <Clock className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F16] font-serif">진료시간</h3>
            </div>
            <ul className="space-y-4 text-[#555D4E] font-medium">
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-[#1A1F16] font-semibold">월요일</span>
                <span>10:00 – 20:00</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-[#1A1F16] font-semibold">화·수·목·금</span>
                <span>10:00 – 19:00</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-[#1A1F16] font-semibold">토요일</span>
                <span>10:00 – 15:00</span>
              </li>
              <li className="flex justify-between items-baseline gap-4">
                <span className="text-[#1A1F16] font-semibold">점심시간</span>
                <span>
                  13:00 – 14:00{" "}
                  <span className="text-[12px] text-[#A1A89A]">(월~금)</span>
                </span>
              </li>
              <li className="flex justify-between items-baseline gap-4 pt-2 border-t border-[#E9E4DB]">
                <span className="text-[#1A1F16] font-semibold">일·공휴일</span>
                <span>휴진</span>
              </li>
            </ul>
          </div>

          {/* 오시는길 */}
          <div className="bg-[#FDFCFB] rounded-[2rem] p-8 lg:p-10 border border-[#E9E4DB] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#F1F4ED] flex items-center justify-center text-[#3E522D]">
                <MapPin className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F16] font-serif">오시는길</h3>
            </div>
            <p className="text-[#555D4E] leading-relaxed mb-6">
              서울시 강남구 도산대로 108 렉스타워 3층 <br />
              <span className="text-[13px] text-[#A1A89A]">
                (신사역 1,2번 출구 사이)
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={NAVER_MAP_SEARCH}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#3E522D] text-white font-bold text-sm hover:bg-[#2D3B1A] transition-colors"
              >
                <Map className="w-4 h-4" aria-hidden />
                지도 보기
              </a>
              <a
                href="tel:02-512-8875"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#E9E4DB] text-[#1A1F16] font-bold text-sm hover:border-[#3E522D] hover:bg-[#F1F4ED] transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden />
                02-512-8875
              </a>
            </div>
          </div>
        </div>

        <div
          id="location"
          className="mt-10 scroll-mt-28 lg:mt-14 rounded-[2rem] overflow-hidden border border-[#E9E4DB] shadow-sm bg-[#F8F6F3]"
        >
          <iframe
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height={400}
            className="border-0 min-h-[320px] block w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="트리니티 여성의원 (도산대로 108 렉스타워 3층)"
          />
          <p className="text-center text-[13px] text-[#A1A89A] py-3 px-4">
            <a
              href={NAVER_MAP_SEARCH}
              target="_blank"
              rel="noopener"
              className="text-[#3E522D] font-semibold underline"
            >
              네이버 지도에서 보기
            </a>
            <span className="mx-2">·</span>
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener"
              className="text-[#3E522D] font-semibold underline"
            >
              길찾기
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
