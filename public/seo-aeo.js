(function () {
  "use strict";

  var ORG = {
    "@type": "MedicalClinic",
    "@id": "https://www.trinityclinic.co.kr/#organization",
    name: "트리니티여성의원",
    url: "https://www.trinityclinic.co.kr",
    telephone: "+82-2-512-8875",
    address: {
      "@type": "PostalAddress",
      streetAddress: "서울시 강남구 도산대로 108 렉스타워 3층",
      addressLocality: "강남구",
      addressRegion: "서울",
      addressCountry: "KR",
    },
  };

  function initTrinityAeoAreas() {
    document.querySelectorAll(".trinity-aeo-area").forEach(function (area) {
      if (area.dataset.aeoWired === "1") return;
      area.dataset.aeoWired = "1";

      var btn = area.querySelector(".trinity-aeo-toggle");
      var panel = area.querySelector(".trinity-aeo-content");
      if (!btn || !panel) return;

      btn.addEventListener("click", function () {
        var open = panel.hasAttribute("hidden");
        if (open) {
          panel.removeAttribute("hidden");
          area.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        } else {
          panel.setAttribute("hidden", "");
          area.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  function injectJsonLd(id, data) {
    if (document.getElementById(id)) return;
    var script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  function buildItemList(pageUrl, name, items) {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": pageUrl + "#itemlist",
      name: name,
      itemListElement: items.map(function (item, i) {
        return {
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          description: item.description,
          url: item.url || pageUrl,
          image: item.image || undefined,
        };
      }),
    };
  }

  function buildFaqPage(questions) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map(function (q) {
        return {
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        };
      }),
    };
  }

  function buildMedicalProcedure(pageUrl, name, description, procedureType) {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "@id": pageUrl + "#procedure",
      name: name,
      procedureType: procedureType || "TherapeuticProcedure",
      description: description,
      url: pageUrl,
      provider: { "@id": ORG["@id"] },
      inLanguage: "ko-KR",
    };
  }

  function aeoHtml(id, inner) {
    return (
      '<section class="trinity-aeo-area" aria-label="의료 정보 안내">' +
      '<button type="button" class="trinity-aeo-toggle" aria-expanded="false" aria-controls="' +
      id +
      '">' +
      '의료·시술 정보 더보기 <span class="trinity-aeo-toggle__icon" aria-hidden="true">▼</span>' +
      "</button>" +
      '<div id="' +
      id +
      '" class="trinity-aeo-content" hidden>' +
      inner +
      "</div></section>"
    );
  }

  function insertBeforeFooter(html) {
    if (document.querySelector(".trinity-aeo-area")) return;
    var footer =
      document.querySelector("footer") ||
      document.querySelector("#footer") ||
      document.body.lastElementChild;
    if (!footer) return;
    var wrap = document.createElement("div");
    wrap.innerHTML = html;
    footer.parentNode.insertBefore(wrap.firstElementChild, footer);
    initTrinityAeoAreas();
  }

  function landing2Topic() {
    var path = location.pathname;
    if (/\/sub\/menu3-4/.test(path)) return "laser";
    if (/\/sub\/menu3-5/.test(path)) return "filler";
    if (/\/sub\/menu3-2/.test(path)) return "minora";
    if (/\/sub\/menu3-3/.test(path)) return "labia";
    if (/\/sub\/menu3-3\/clitoris/.test(path)) return "clitoris";
    if (/\/sub\/perineum/.test(path)) return "perineum";
    if (/\/sub\/menu3-1/.test(path)) return "women";
    if (/\/sub\/sling/.test(path)) return "sling";
    if (/\/sub\/menu3-1\/?$/.test(path) || /\/sub\/menu3-1\/index\.html$/.test(path)) return "main";
    return "main";
  }

  var LANDING2 = {
    main: {
      url: "https://www.trinityclinic.co.kr/",
      procedure: {
        name: "질성형수술 (이쁜이수술·질축소수술)",
        description:
          "임신·출산·노화로 이완된 질 점막과 골반기저근을 3중 복원하여 질 이완증을 치료하고 탄력·기능을 회복하는 여성 성형수술",
      },
      itemListName: "트리니티 여성성형센터 주요 시술",
      items: [
        {
          name: "질성형 (질축소수술)",
          description: "골반기저근 3중 복원으로 질 이완·요실금 증상 개선",
          url: "https://www.trinityclinic.co.kr/",
          image: "https://www.trinityclinic.co.kr/sub/images/women/anatomy-before.webp",
        },
        {
          name: "질필러",
          description: "질 점막 보습·탄력 회복, 비수술 질타이트닝",
          url: "https://www.trinityclinic.co.kr/sub/menu3-5/",
        },
        {
          name: "소음순수술",
          description: "소음순 비대·비대칭 교정, 기능·심미 동시 개선",
          url: "https://www.trinityclinic.co.kr/sub/menu3-2/",
        },
        {
          name: "대음순수술",
          description: "대음순 늘어짐·비대칭·색소 개선 맞춤 수술",
          url: "https://www.trinityclinic.co.kr/sub/menu3-3/",
        },
      ],
      faq: [
        {
          q: "질성형수술 수술 시간과 입원 여부가 궁금합니다.",
          a: "질축소수술은 수면마취 또는 국소마취 하에 보통 30~60분 내외로 진행됩니다. 특별한 합병증이 없다면 당일 퇴원이 가능하며, 내원 횟수는 보통 1~2회입니다.",
        },
        {
          q: "질성형 수술을 하면 어떤 점이 좋아지나요?",
          a: "골반기저근을 복원하여 골반 장기 탈출증을 완화하고, 성감 회복과 배변 기능 개선 효과도 기대할 수 있습니다.",
        },
        {
          q: "질필러와 질성형의 차이는 무엇인가요?",
          a: "질필러는 주사 시술로 회복이 빠르고 부담이 적으며, 질성형은 구조적 이완이 뚜렷할 때 근본적 복원에 유리합니다. 상담 시 상태에 맞는 방법을 안내합니다.",
        },
        {
          q: "여성성형 상담은 어떻게 받나요?",
          a: "트리니티여성의원 강남 도산대로에서 여의사 산부인과 전문의가 1:1 비공개 상담을 진행합니다. 전화(02-512-8875) 또는 온라인 예약이 가능합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 여성성형센터 — 질성형·질필러·소음순·대음순</h2>" +
          "<p>강남 트리니티여성의원 여성성형센터는 출산·노화로 인한 질 이완, 요실금, 성감 저하, 외음부 형태 고민을 여의사 산부인과 전문의가 1:1 맞춤으로 진료합니다.</p>" +
          "<h3>질성형 (질축소수술·이쁜이수술)</h3>" +
          "<p>질 점막과 골반기저근을 함께 복원하는 3중 복원 질성형으로 질 탄력·기능 회복을 돕습니다. 수면마취 하 30~60분, 당일 퇴원이 가능한 경우가 많습니다.</p>" +
          "<h3>질필러·질레이저·외음부 성형</h3>" +
          "<ul><li>질필러: 비수술 질타이트닝·보습·탄력 개선</li>" +
          "<li>질쎄라·모나리자·리비브: 질 레이저 시술</li>" +
          "<li>소음순·대음순수술: 비대칭·비대·색소 교정</li></ul>" +
          '<div class="trinity-aeo-faq">' +
          "<details><summary>질성형 후 일상 복귀는 언제 가능한가요?</summary><p>수술 당일부터 가벼운 일상 활동이 가능하나, 성관계·격한 운동은 약 6주 후 의료진 지시에 따라 진행합니다.</p></details>" +
          "<details><summary>여성성형 비용은 어떻게 안내되나요?</summary><p>시술 범위·마취 방법·검사 항목에 따라 달라지므로 상담 후 개인별 견적을 안내드립니다.</p></details>" +
          "<details><summary>질성형과 요실금 치료를 함께 받을 수 있나요?</summary><p>골반기저근 복원 질성형은 요실금 증상 완화에 도움이 될 수 있으며, 동반 증상은 상담 시 통합 계획을 수립합니다.</p></details>" +
          "</div></article>"
        );
      },
    },
    laser: {
      url: "https://www.trinityclinic.co.kr/sub/menu3-4/",
      procedure: {
        name: "질레이저 시술 (질쎄라·모나리자·리비브)",
        description:
          "질 점막 재생과 콜라겐 리모델링을 유도하는 비수술 질레이저 치료로 질 건조·이완·요실금 증상 개선",
      },
      itemListName: "트리니티 질레이저 시술 안내",
      items: [
        { name: "질쎄라 (FemiLift)", description: "CO2 분수 레이저 질 타이트닝·건조 개선" },
        { name: "모나리자터치", description: "질 점막 재생·요실금·성감 개선 레이저" },
        { name: "리비브", description: "질 내 점막 재생·윤활·탄력 회복" },
        { name: "질레이저 통합 상담", description: "증상·연령에 맞는 레이저 프로토콜 설계" },
      ],
      faq: [
        {
          q: "질레이저 시술은 아픈가요?",
          a: "대부분 국소마취 크림으로 통증을 최소화하며, 시술 시간은 장비별 20~40분 내외입니다.",
        },
        {
          q: "질쎄라와 모나리자의 차이는?",
          a: "질쎄라는 CO2 분수 레이저, 모나리자는 Erbium 레이저 기반으로 질 점막 재생을 유도합니다. 상태에 따라 병행 또는 선택합니다.",
        },
        {
          q: "시술 후 바로 일상생활이 가능한가요?",
          a: "대부분 당일 귀가 후 일상생활이 가능하나, 1~2일 가벼운 분비물이 있을 수 있습니다.",
        },
        {
          q: "몇 회 시술이 필요한가요?",
          a: "보통 1~3회 간격 시술을 권하며, 증상·연령·질 상태에 따라 달라집니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 질레이저 — 질쎄라·모나리자·리비브</h2>" +
          "<p>출산·갱년기 이후 질 건조, 이완, 요실금, 성감 저하에 질레이저 비수술 치료를 제공합니다.</p>" +
          "<h3>질쎄라 (FemiLift)</h3><p>CO2 분수 레이저로 질 점막 재생과 타이트닝을 유도합니다.</p>" +
          "<h3>모나리자터치·리비브</h3><p>질 점막 혈류·콜라겐 개선으로 윤활·탄력 회복을 돕습니다.</p>" +
          '<div class="trinity-aeo-faq">' +
          "<details><summary>갱년기 질 건조에도 질레이저가 도움이 되나요?</summary><p>질 점막 위축·건조 증상에 레이저 치료가 보조적으로 도움이 될 수 있으며, 호르몬 치료와 병행 여부는 상담 시 결정합니다.</p></details>" +
          "<details><summary>질레이저와 질필러를 같이 받을 수 있나요?</summary><p>레이저 후 일정 간격을 두고 필러 시술을 병행하는 경우가 있으며, 개인 상태에 맞게 계획합니다.</p></details>" +
          "</div></article>"
        );
      },
    },
    filler: {
      url: "https://www.trinityclinic.co.kr/sub/menu3-5/",
      procedure: {
        name: "질필러 시술",
        description: "히알루론산 기반 질필러로 질 점막 보습·볼륨·탄력을 개선하는 비수술 치료",
      },
      itemListName: "트리니티 질필러·비수술 질타이트닝",
      items: [
        { name: "질필러", description: "질 점막 보습·탄력·이완 개선" },
        { name: "질타이트닝", description: "비수술 질 축소·성감 개선" },
        { name: "외음부 필러", description: "대음순·회음부 볼륨·형태 보완" },
        { name: "질필러 유지관리", description: "정기 관리로 효과 지속" },
      ],
      faq: [
        {
          q: "질필러 효과는 얼마나 지속되나요?",
          a: "제품·개인 차이에 따라 보통 6~12개월 지속되며, 정기 관리로 연장할 수 있습니다.",
        },
        {
          q: "질필러 시술 시간은?",
          a: "상담·준비 포함 30분 내외이며 당일 귀가가 가능합니다.",
        },
        {
          q: "질성형 없이 질필러만으로도 효과가 있나요?",
          a: "경미한 이완·건조에는 도움이 될 수 있으나, 구조적 이완이 크면 질성형 병행을 권할 수 있습니다.",
        },
        {
          q: "부작용은 없나요?",
          a: "일시적 부기·압통이 있을 수 있으며, 이물반응 예방을 위해 정품 필러와 무균 시술을 원칙으로 합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 질필러 — 비수술 질타이트닝</h2>" +
          "<p>수술 부담 없이 질 점막 보습·탄력·이완 개선을 원하는 분께 질필러 시술을 제공합니다.</p>" +
          '<div class="trinity-aeo-faq">' +
          "<details><summary>질필러 시술 후 주의사항은?</summary><p>시술 당일 격한 운동·성관계·온탕은 피하고, 처방에 따라 관리합니다.</p></details>" +
          "<details><summary>출산 후 질필러 시술 가능 시기는?</summary><p>회복 상태에 따라 다르며, 모유 수유 여부도 함께 고려합니다.</p></details>" +
          "</div></article>"
        );
      },
    },
    minora: {
      url: "https://www.trinityclinic.co.kr/sub/menu3-2/",
      procedure: {
        name: "소음순성형수술",
        description: "소음순 비대·비대칭·색소침착을 교정하여 기능과 심미를 함께 개선하는 외음부 성형",
      },
      itemListName: "트리니티 소음순·외음부 성형",
      items: [
        { name: "소음순성형", description: "소음순 비대·비대칭 교정" },
        { name: "소음순 축소술", description: "과도한 조직 제거·윤곽 정리" },
        { name: "음핵성형", description: "음핵 포피·민감도 개선" },
        { name: "외음부 미백·제모", description: "색소·털 관리 통합 케어" },
      ],
      faq: [
        {
          q: "소음순수술 회복 기간은?",
          a: "1~2주 부기가 가라앉고, 완전 회복은 약 4~6주 소요됩니다.",
        },
        {
          q: "수술 흉터가 남나요?",
          a: "외음부 특성에 맞는 봉합으로 흉터를 최소화하며, 개인 피부 타입에 따라 다릅니다.",
        },
        {
          q: "당일 퇴원이 가능한가요?",
          a: "국소·수면 마취 하 당일 귀가가 일반적입니다.",
        },
        {
          q: "소음순과 대음순을 함께 수술할 수 있나요?",
          a: "동시 시술이 가능한 경우가 많으며, 조직량·회복 계획을 고려해 설계합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 소음순성형</h2>" +
          "<p>소음순 비대·비대칭으로 일상 불편·자신감 저하를 겪는 분께 맞춤 소음순성형을 제공합니다.</p>" +
          '<div class="trinity-aeo-faq">' +
          "<details><summary>소음순수술 후 통증은?</summary><p>처방 진통제로 조절 가능하며, 대부분 3~5일 내 일상 활동이 가능합니다.</p></details>" +
          "</div></article>"
        );
      },
    },
    labia: {
      url: "https://www.trinityclinic.co.kr/sub/menu3-3/",
      procedure: {
        name: "대음순성형수술",
        description: "대음순 늘어짐·비대칭·색소를 교정하는 외음부 성형수술",
      },
      itemListName: "트리니티 대음순·외음부 관리",
      items: [
        { name: "대음순성형", description: "늘어짐·비대칭 교정" },
        { name: "외음부 제모", description: "레이저 제모·피부 자극 최소화" },
        { name: "외음부 미백", description: "색소침착·톤 균일 개선" },
        { name: "음핵성형", description: "음핵 포피·형태 교정" },
      ],
      faq: [
        {
          q: "대음순수술은 어떤 경우에 필요한가요?",
          a: "늘어짐으로 인한 마찰·위생 불편·심리적 부담이 있을 때 상담을 권합니다.",
        },
        {
          q: "외음부 미백 효과는?",
          a: "여러 회 시술로 점진적 톤 개선을 기대하며, 피부 타입에 따라 반응이 다릅니다.",
        },
        {
          q: "제모와 수술을 같이 할 수 있나요?",
          a: "회복 일정에 따라 순차 진행을 권하며, 피부 자극을 고려해 계획합니다.",
        },
        {
          q: "수술 후 샤워는 언제부터?",
          a: "봉합 부위 보호를 위해 의료진 지시에 따라 2~3일 후 가벼운 샤워부터 시작합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 대음순·외음부 관리</h2>" +
          "<p>대음순 성형, 외음부 제모·미백까지 통합 외음부 케어를 제공합니다.</p>" +
          '<div class="trinity-aeo-faq">' +
          "<details><summary>대음순수술과 소음순수술 차이는?</summary><p>대음순은 바깥 주름 조직, 소음순은 안쪽 작은 주름 조직으로, 불편 부위에 맞게 시술합니다.</p></details>" +
          "</div></article>"
        );
      },
    },
    perineum: {
      url: "https://www.trinityclinic.co.kr/sub/perineum/",
      procedure: {
        name: "회음부·외음부 통합 케어",
        description: "회음부 제모·미백·소음순·대음순 관리를 포함한 외음부 종합 클리닉",
      },
      itemListName: "트리니티 회음부·외음부 케어",
      items: [
        { name: "외음부 제모", description: "민감 부위 맞춤 레이저 제모" },
        { name: "외음부 미백", description: "색소·톤 균일 관리" },
        { name: "소음순·대음순 관리", description: "형태·기능 맞춤 상담" },
        { name: "회음부 위생 케어", description: "일상 불편 완화 가이드" },
      ],
      faq: [
        {
          q: "외음부 레이저 제모는 몇 회 필요한가요?",
          a: "털 굵기·밀도에 따라 5~8회 전후가 일반적입니다.",
        },
        {
          q: "미백 시술 통증은?",
          a: "국소 마취·쿨링으로 불편을 줄이며, 당일 귀가가 가능합니다.",
        },
        {
          q: "임신·수유 중 시술 가능한가요?",
          a: "시기·시술 종류에 따라 제한이 있으므로 상담이 필요합니다.",
        },
        {
          q: "제모 후 관리 방법은?",
          a: "자극 최소화·보습·자외선 차단을 권하며, 맞춤 사후관리를 안내합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 회음부·외음부 케어</h2>" +
          "<p>민감한 Y존 제모·미백·형태 고민을 여의사 전문의가 1:1 상담합니다.</p>" +
          "</article>"
        );
      },
    },
    women: {
      url: "https://www.trinityclinic.co.kr/sub/menu3-1/",
      procedure: {
        name: "여성성형 통합 상담",
        description: "질·외음부·요실금 관련 여성 고민을 통합 진단하는 여성성형 클리닉",
      },
      itemListName: "트리니티 여성성형 프로그램",
      items: [
        { name: "질성형", description: "질 이완·요실금 구조 복원" },
        { name: "질레이저", description: "질 건조·이완 비수술 치료" },
        { name: "외음부 성형", description: "소음순·대음순 맞춤 수술" },
        { name: "질필러", description: "비수술 타이트닝·보습" },
      ],
      faq: [
        {
          q: "어떤 시술부터 시작해야 할까요?",
          a: "증상·해부학적 상태를 평가한 뒤 수술·비수술 우선순위를 함께 결정합니다.",
        },
        {
          q: "여의사 전문의 상담인가요?",
          a: "네, 여성 고민에 특화된 여의사 산부인과 전문의가 상담합니다.",
        },
        {
          q: "비용 상담은 무료인가요?",
          a: "초진 상담 절차는 병원 정책에 따르며, 시술 범위별 견적을 안내합니다.",
        },
        {
          q: "개인정보는 보호되나요?",
          a: "1:1 비공개 상담실에서 진행하며 개인정보 보호를 준수합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티 여성성형 통합 클리닉</h2>" +
          "<p>질·외음부·요실금 고민을 한곳에서 진단·치료 계획을 수립합니다.</p>" +
          "</article>"
        );
      },
    },
    clitoris: {
      url: "https://www.trinityclinic.co.kr/sub/menu3-3/clitoris/",
      procedure: {
        name: "음핵성형수술",
        description: "음핵 포피 과다·민감도·형태 문제를 개선하는 외음부 미세성형",
      },
      itemListName: "트리니티 음핵·외음부 성형",
      items: [
        { name: "음핵성형", description: "포피·형태·민감도 개선" },
        { name: "소음순성형", description: "연계 외음부 윤곽 교정" },
        { name: "대음순성형", description: "비대칭·늘어짐 교정" },
        { name: "외음부 통합 상담", description: "기능·심미 균형 설계" },
      ],
      faq: [
        {
          q: "음핵성형 목적은 무엇인가요?",
          a: "과도한 포피로 인한 마찰·위생 불편·민감도 저하를 개선하는 것이 목적입니다.",
        },
        {
          q: "회복 기간은?",
          a: "약 2~4주 가벼운 일상 복귀, 완전 회복은 개인차가 있습니다.",
        },
        {
          q: "성감에 영향이 있나요?",
          a: "해부학적 구조를 보존하며 목적에 맞게 시술하며, 회복 후 변화를 관찰합니다.",
        },
        {
          q: "다른 외음부 수술과 병행 가능한가요?",
          a: "조직 범위·회복 계획에 따라 동시 또는 분리 시술을 결정합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 음핵성형</h2>" +
          "<p>음핵 포피·형태 고민을 섬세하게 상담·치료합니다.</p>" +
          "</article>"
        );
      },
    },
    sling: {
      url: "https://www.trinityclinic.co.kr/sub/sling/",
      procedure: {
        name: "요실금·골반저 근육 치료",
        description: "요실금 및 골반기저 기능 저하에 대한 보존적·수술적 치료 상담",
      },
      itemListName: "트리니티 요실금·골반저 프로그램",
      items: [
        { name: "요실금 상담", description: "스트레스·절박성 요실금 평가" },
        { name: "질성형 연계", description: "골반기저근 복원 통한 증상 개선" },
        { name: "질레이저", description: "질 점막·근육 지지 보조" },
        { name: "생활습관 교정", description: "운동·습관 가이드" },
      ],
      faq: [
        {
          q: "요실금은 질성형으로 나아질 수 있나요?",
          a: "골반기저근 약화가 원인일 때 질성형·레이저가 도움이 될 수 있습니다.",
        },
        {
          q: "슬링 수술도 하나요?",
          a: "증상·정도에 따라 보존 치료부터 수술까지 옵션을 설명합니다.",
        },
        {
          q: "갱년기 요실금도 상담 가능한가요?",
          a: "호르몬 변화·근육 약화를 함께 고려한 통합 계획을 수립합니다.",
        },
        {
          q: "검사가 필요한가요?",
          a: "필요 시 요역동학·초음파 등 검사로 원인을 확인합니다.",
        },
      ],
      aeo: function () {
        return (
          "<article>" +
          "<h2>트리니티여성의원 요실금·골반저 클리닉</h2>" +
          "<p>요실금·골반저 근육 약화 고민을 여성 전문의가 진료합니다.</p>" +
          "</article>"
        );
      },
    },
  };

  function hasExistingJsonLdType(type) {
    return Array.prototype.slice
      .call(document.querySelectorAll('script[type="application/ld+json"]'))
      .some(function (s) {
        var raw = s.textContent || "";
        return raw.indexOf('"@type":"' + type + '"') !== -1 || raw.indexOf('"@type": "' + type + '"') !== -1;
      });
  }

  function initLanding2Seo() {
    if (!/\/sub\/menu3-/.test(location.pathname)) return;

    var topicKey = landing2Topic();
    var cfg = LANDING2[topicKey] || LANDING2.main;
    var pageUrl = location.origin + location.pathname.replace(/\/index\.html$/, "/");
    if (!pageUrl.endsWith("/")) pageUrl += "/";

    if (!document.getElementById("trinity-seo-itemlist")) {
      injectJsonLd(
        "trinity-seo-itemlist",
        buildItemList(pageUrl, cfg.itemListName, cfg.items)
      );
    }

    if (!hasExistingJsonLdType("FAQPage") && !document.querySelector('script[data-trinity-faq-aeo="1"]')) {
      var faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.setAttribute("data-trinity-faq-aeo", "1");
      faqScript.textContent = JSON.stringify(buildFaqPage(cfg.faq));
      document.head.appendChild(faqScript);
    }

    if (!hasExistingJsonLdType("MedicalProcedure") && !document.getElementById("trinity-seo-procedure-aeo")) {
      injectJsonLd(
        "trinity-seo-procedure-aeo",
        buildMedicalProcedure(
          pageUrl,
          cfg.procedure.name,
          cfg.procedure.description
        )
      );
    }

    insertBeforeFooter(aeoHtml("trinity-aeo-landing2-" + topicKey, cfg.aeo()));

    // React hydration 후 footer가 늦게 붙는 경우 재시도
    [800, 2000, 4000].forEach(function (ms) {
      setTimeout(function () {
        if (!document.querySelector(".trinity-aeo-area")) {
          insertBeforeFooter(aeoHtml("trinity-aeo-landing2-" + topicKey, cfg.aeo()));
        }
      }, ms);
    });
  }

  function loadSeoCss() {
    if (document.getElementById("trinity-seo-aeo-css")) return;
    var link = document.createElement("link");
    link.id = "trinity-seo-aeo-css";
    link.rel = "stylesheet";
    var scripts = document.getElementsByTagName("script");
  for (var i = scripts.length - 1; i >= 0; i--) {
      var src = scripts[i].getAttribute("src") || "";
      if (src.indexOf("seo-aeo.js") !== -1) {
        link.href = src.replace(/seo-aeo\.js(\?.*)?$/, "seo-aeo.css");
        break;
      }
    }
    if (!link.href) link.href = "/seo-aeo.css";
    document.head.appendChild(link);
  }

  function init() {
    loadSeoCss();
    initTrinityAeoAreas();
    // landing-2는 자체 React SEO 블록(LandingSeo)이 JSON-LD와 화면 블록을 모두
    // 렌더링하므로, 여기서 중복 주입(의료·시술 정보 더보기 + 중복 JSON-LD)하지 않는다.
    if (!/\/sub\/menu3-/.test(location.pathname)) {
      initLanding2Seo();
    }
  }

  window.TrinitySeoAeo = {
    init: init,
    initTrinityAeoAreas: initTrinityAeoAreas,
    ORG: ORG,
    buildItemList: buildItemList,
    buildFaqPage: buildFaqPage,
    buildMedicalProcedure: buildMedicalProcedure,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
