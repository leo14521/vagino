"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const DOCTORS = [
  {
    id: "jung",
    name: "Dr. 정난희",
    role: "REPRESENTATIVE DIRECTOR",
    // [Dr. Jung] 고려대 의학박사 + 국제 학회 교수 + 하이푸/RFA 마스터 + 방송 자문
    tags: ["UNIVERSITY PROFESSOR", "GLOBAL KEY DOCTOR", "의학박사"],
    quote: "대학병원 교수 출신의 풍부한 수술 경험으로, 안전을 최우선으로 하는 원칙 진료를 약속합니다.",
    imageSrc: "/images/dr-jung.jpg", 
    careers: [
      "고려대학교 의과대학 졸업 및 의학박사",
      "스웨덴 Uppsala Univ. 생식생물학센터(CRB) 연수",
      "IFAAS (국제피부미용학회) 비수술여성성형부 교수", // 추가
      "몽골/대만 RFA(고주파 절제술) 마스터 클래스 진행", // 추가
      "대한산부인과의사회 학술이사 / 하이푸연구회 총무이사", // 추가
      "방송: TV조선 <유레카>, 채널A 등 여성건강 자문" // 추가
    ]
  },
  {
    id: "yang",
    name: "Dr. 양기열",
    role: "REPRESENTATIVE DIRECTOR",
    // [Dr. Yang] 경희대 의학박사 + 갱년기/자궁근종 저자 + 방송 자문 + 로컬 수술 경험
    tags: ["AESTHETIC SPECIALIST", "BEST SELLING AUTHOR", "의학박사"],
    quote: "여성의 자신감을 되찾아드리는 섬세한 디자인, 기능과 미용을 동시에 충족시킵니다.",
    imageSrc: "/images/dr-yang.jpg", 
    careers: [
      "경희대학교 의과대학 졸업 및 의학박사",
      "경희대학교 의과대학 외래교수 / 산부인과 전문의", // 추가
      "前 라마드레 / 애플 산부인과 원장 (풍부한 집도 경험)",
      "대한폐경학회 폐경 전문 과정 이수 (인증의)", // 추가
      "저서: <갱년기에 대해 의사가 가장 많이 듣는 질문>", // 추가
      "방송: tvN <슈퍼푸드>, MBN <특집다큐> 자궁근종 자문" // 추가
    ]
  }
];

export function AuthoritySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#121412] text-[#EAE8E4] overflow-hidden">
      
      {/* 배경 조명 효과 */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3E522D]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#A89B8C]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        
        <div className="mb-16 lg:mb-20 max-w-3xl">
          <span className="font-sans text-[#A89B8C] font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Trinity Experts
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
            대표원장 2인 소개
          </h2>
          <p className="font-sans text-[#EAE8E4]/60 text-lg leading-relaxed">
            화려한 이력서보다 확실한 증명은 현장에 있습니다. <br className="hidden md:block"/>
            수천 건의 시술 경험을 보유한 두 명의 마스터가 직접 집도합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {DOCTORS.map((doctor) => (
            <div key={doctor.id} className="relative group">
              <div className="relative rounded-[2.5rem] overflow-hidden bg-[#1A1F16] border border-[#A89B8C]/20 shadow-2xl hover:border-[#A89B8C]/50 transition-colors duration-500 h-full flex flex-col">
                
                {/* 상단 이미지 영역 */}
                <div className="relative aspect-[4/5] md:aspect-[16/10] bg-[#0A0C0A] shrink-0 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F16] via-transparent to-transparent opacity-90 z-20" />
                  
                  {/* 실제 이미지 컴포넌트 */}
                  <Image 
                    src={doctor.imageSrc}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                    priority
                  />

                  {/* 태그 */}
                  <div className="absolute bottom-4 left-6 z-30 flex flex-wrap gap-2">
                    {doctor.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 rounded-full bg-[#3E522D] text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 하단 텍스트 정보 */}
                <div className="p-8 md:p-10 pt-6 bg-[#1A1F16] flex-grow flex flex-col">
                  <p className="text-[#A89B8C] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                    {doctor.role}
                  </p>
                  <h3 className="text-3xl md:text-4xl text-white font-serif mb-6">
                    {doctor.name}
                  </h3>

                  <div className="relative pl-5 border-l-2 border-[#A89B8C]/30 mb-8">
                    <p className="text-[#EAE8E4]/80 text-sm md:text-base italic leading-relaxed font-serif">
                      "{doctor.quote}"
                    </p>
                  </div>

                  <div className="space-y-2 mt-auto">
                    <p className="text-[10px] font-bold text-[#A89B8C] uppercase tracking-widest mb-3">
                      Major Careers
                    </p>
                    <ul className="space-y-2"> 
                      {doctor.careers.map((career, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs md:text-sm text-[#EAE8E4]/70 font-light leading-snug">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#A89B8C] shrink-0" />
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}