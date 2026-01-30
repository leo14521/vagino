export const SITE_CONFIG = {
  name: "Trinity Women's Clinic",
  nameKr: "트리니티 여성의원",
  description: "True Vaginoplasty - Restore your confidence with master precision.",
  contact: {
    phone: "02-512-1234",
    address: "서울시 강남구 도산대로 123 트리니티 타워 4F",
    kakao: "@trinity_clinic",
  },
};

export const NAVIGATION_LINKS = [
  { label: "홈", href: "#hero" },
  { label: "수술 효과", href: "#effect" },
  { label: "자가 진단", href: "#insight" },
  { label: "3중 복원술", href: "#method" },
  { label: "리얼 후기", href: "#reviews" },
  { label: "진료 과정", href: "#process" },
  { label: "시설 안내", href: "#tour" },
];

export const SYMPTOMS_DATA = [
  {
    id: "sexual-discomfort",
    title: "관계 시 불편함",
    icon: "HeartOff",
    description: "질 근육 이완으로 인한 마찰력 감소는 본인과 파트너 모두의 만족도를 저하시킵니다.",
    checkpoints: [
      "관계 중 민망한 소리(질방귀)가 난다",
      "예전과 달리 헐거운 느낌이 든다",
      "성감이 둔화되어 관계를 피하게 된다",
      "출산 후 조임이 예전 같지 않다"
    ]
  },
  {
    id: "daily-life",
    title: "일상생활 불편함",
    icon: "Droplets",
    description: "넓어진 질 입구는 목욕탕 이용이나 운동 시 불편함을 초래하며 자신감을 떨어뜨립니다.",
    checkpoints: [
      "탕 목욕 후 물이 흐르는 느낌이 든다",
      "밑이 빠지는 듯한 묵직한 불쾌감",
      "뛰거나 웃을 때 소변이 샌다 (요실금)",
      "요가/필라테스 동작 시 불편하다"
    ]
  },
  {
    id: "health-issues",
    title: "여성 질환 재발",
    icon: "AlertCircle",
    description: "개방된 질 입구는 외부 세균 침입을 용이하게 하여 만성적인 여성 질환의 원인이 됩니다.",
    checkpoints: [
      "질염이 자주 재발한다",
      "질 건조증이 심해졌다",
      "만성적인 분비물 증가",
      "방광염이 자주 동반된다"
    ]
  }
];

export const METHOD_STEPS = [
  {
    id: "step-01",
    number: "01",
    title: "골반기저근 복원",
    subtitle: "Deep Muscle Restoration",
    description: "단순히 점막만 꿰매는 것이 아닙니다. 손상되고 늘어난 깊은 층의 근육을 찾아 본래의 위치로 당겨 묶어주어 탄탄한 지지대를 만듭니다.",
    image: "/images/method_step1.jpg" 
  },
  {
    id: "step-02",
    number: "02",
    title: "근막 강화 & 주름 형성",
    subtitle: "Fascia Reinforcement",
    description: "질 점막 아래 근막을 한 번 더 강화하고, 자연스러운 주름(Rugae)을 형성하여 기능적 마찰력과 성감을 극대화합니다.",
    image: "/images/method_step2.jpg"
  },
  {
    id: "step-03",
    number: "03",
    title: "회음부 심미 재건",
    subtitle: "Aesthetic Reconstruction",
    description: "기능적 복원 후, 질 입구 부분을 심미적으로 디자인하여 외관상의 만족도까지 완성하는 토탈 솔루션입니다.",
    image: "/images/method_step3.jpg"
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    author: "김*희 님",
    info: "40대 / 다발성 자궁근종",
    rating: 5,
    title: "이쁜이수술 후기 들고 왔어요",
    content: "할까말까 고민하다 결국 하고 왔어요. 강남언니 평점 우수병원이라 그런지 상담도 편안하고 결과도 만족스러워요! 추가 강요도 전혀 없었습니다.",
    tags: ["#고객평가우수", "#추가강요없음"],
    source: "강남언니 재입점 후기"
  },
  {
    id: 2,
    author: "박*은 님",
    info: "30대 / 거대 근종",
    rating: 5,
    title: "저 이쁜이수술 했어요 ㅎ..",
    content: "하기 전에 고민 많이 했는데 하고 후회는 없어요. 여자 원장님이 계신 병원 가고 싶으시면 트리니티 가보세요. 실력도 좋고 친절하셔요.",
    tags: ["#여자원장님", "#후회없는선택"],
    source: "지역 맘카페 댓글"
  },
  {
    id: 3,
    author: "이*진 님",
    info: "30대 / 산후 검진",
    rating: 5,
    title: "병원 어디로 가셨어요?",
    content: "저도 남편이랑 관계가 애매해서 가보려구요.. 원장님이 실력도 좋으시고 공감도 잘해주세요. 상담이라도 한번 받아보세요 ㅎㅎ",
    tags: ["#부부관계개선", "#공감능력최고"],
    source: "커뮤니티 댓글"
  }
];

export const COMPARISON_DATA = [
  {
    category: "수술 범위",
    others: "질 입구만 좁힘 (점막 제거)",
    trinity: "입구 + 안쪽 근육까지 3중 복원",
  },
  {
    category: "유지 기간",
    others: "늘어난 점막이 다시 이완됨 (2~3년)",
    trinity: "근육 자체를 묶어 반영구적 유지",
  },
  {
    category: "통증/회복",
    others: "절개 부위가 넓어 통증 심함",
    trinity: "최소 침습으로 당일 일상생활 가능",
  },
  {
    category: "성감 변화",
    others: "단순 마찰력 증가 (건조증 우려)",
    trinity: "질 주름(Rugae) 복원으로 성감 극대화",
  },
];

export const DOCTOR_STATS = [
  { label: "무사고 수술 건수", value: "3,500+", sub: "건" },
  { label: "산부인과 전문의 경력", value: "18", sub: "년" },
  { label: "학회 초청 강연", value: "50+", sub: "회" },
  { label: "재수술 의뢰 비율", value: "35", sub: "%" },
];