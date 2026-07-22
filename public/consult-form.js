(function () {
  "use strict";

  var CONTACT_ACTION = "https://www.trinityclinic.co.kr/board/contact/write";
  var HIDDEN = {
    _amcmsTkn:
      "1783390947437_54c79d96bf6c8df3848392e2eac8180adf0a35cd9e5fbaea60aa235eb1b7d058",
    boardContainerId: "contact",
    boardInsideGuestPassword: "12321",
    boardInsideSecret: "true",
  };

  function getTopicFromPath() {
    var path = location.pathname;
    if (/\/landing-1(\/|$)/.test(path) || /\/sub\/menu2-4(\/|$)/.test(path)) return "자궁근종·용해술";
    if (/\/landing-3(\/|$)/.test(path) || /\/sub\/menu2-5(\/|$)/.test(path)) return "난소낭종·경화술";
    if (/\/sub\/menu3-4/.test(path)) return "질레이저";
    if (/\/sub\/menu3-5/.test(path)) return "질필러";
    if (/\/sub\/menu3-2/.test(path)) return "소음순성형";
    if (/\/sub\/menu3-3/.test(path)) return "대음순성형";
    if (/\/sub\/menu3-3\/clitoris/.test(path)) return "음핵성형";
    if (/\/sub\/perineum/.test(path)) return "외음부·회음부 케어";
    if (/\/sub\/sling/.test(path)) return "요실금·골반저";
    if (/\/sub\/menu3-/.test(path)) return "여성성형 (질성형)";
    return "온라인 상담";
  }

  function getTitleFromPath() {
    var topic = getTopicFromPath();
    return topic + " 랜딩 상담 문의";
  }

  function val(form, name) {
    var el = form.querySelector('[name="' + name + '"]');
    if (!el) return "";
    return (el.value || "").trim();
  }

  function withTopicPrefix(topic, memo) {
    var text = memo || "-";
    var prefix = "[" + topic + "] ";
    if (text.indexOf(prefix) === 0) return text;
    return prefix + text;
  }

  function submitTrinityContact(data) {
    var form = document.createElement("form");
    form.method = "post";
    form.action = CONTACT_ACTION;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    var payload = {
      _amcmsTkn: HIDDEN._amcmsTkn,
      boardContainerId: HIDDEN.boardContainerId,
      boardInsideTitle: data.title || getTitleFromPath(),
      boardInsideGuestPassword: HIDDEN.boardInsideGuestPassword,
      boardInsideSecret: HIDDEN.boardInsideSecret,
      boardInsideGuestName: data.name,
      boardInsideExtraField1: data.phone,
      boardInsideHtml: data.html,
    };

    Object.keys(payload).forEach(function (key) {
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = payload[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  function isLegacyConsultForm(form) {
    if (form.id === "google-sheet-form") return true;
    if (!form.closest("#consultation")) return false;
    return !!(form.querySelector('[name="name"]') && form.querySelector('[name="phone"]'));
  }

  function isTrinityDbForm(form) {
    return (
      form.getAttribute("data-trinity-db") === "1" ||
      form.id === "tg-sticky-consult-form" ||
      (form.getAttribute("action") || "").indexOf("/board/contact/write") !== -1 &&
        form.querySelector('[name="boardInsideGuestName"]')
    );
  }

  function handleLegacySubmit(form) {
    var topic = form.getAttribute("data-trinity-topic") || getTopicFromPath();
    var name = val(form, "boardInsideGuestName") || val(form, "성함") || val(form, "name");
    var phone =
      val(form, "boardInsideExtraField1") || val(form, "연락처") || val(form, "phone");
    var memo =
      val(form, "boardInsideHtml") || val(form, "문의내용") || val(form, "inquiry");

    var privacy =
      form.querySelector("#privacy-agree, #tg-sticky-privacy, [type='checkbox'][required]");
    if (privacy && !privacy.checked) {
      alert("개인정보 수집·이용에 동의해 주세요.");
      return;
    }

    if (!name) {
      alert("이름을 입력해 주세요.");
      return;
    }
    if (!phone) {
      alert("연락처를 입력해 주세요.");
      return;
    }

    submitTrinityContact({
      title: form.getAttribute("data-trinity-title") || getTitleFromPath(),
      name: name,
      phone: phone,
      html: withTopicPrefix(topic, memo),
    });
  }

  function onDocumentSubmit(e) {
    var form = e.target;
    if (!(form instanceof HTMLFormElement)) return;

    if (isTrinityDbForm(form)) {
      if (form.getAttribute("data-trinity-skip-topic-prefix") === "1") return;
      var topic = form.getAttribute("data-trinity-topic") || getTopicFromPath();
      var memo = form.querySelector('[name="boardInsideHtml"]');
      if (memo) {
        memo.value = withTopicPrefix(topic, memo.value.trim());
      }
      return;
    }

    if (!isLegacyConsultForm(form)) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    handleLegacySubmit(form);
  }

  function upgradeLanding1Form() {
    var form = document.getElementById("google-sheet-form");
    if (!form || form.getAttribute("data-trinity-db") === "1") return;

    form.id = "trinity-consult-form";
    form.setAttribute("data-trinity-db", "1");
    form.setAttribute("data-trinity-topic", "자궁근종·용해술");
    form.setAttribute("data-trinity-title", "자궁근종·용해술 랜딩 상담 문의");
    form.setAttribute("action", CONTACT_ACTION);
    form.setAttribute("method", "post");
    form.setAttribute("accept-charset", "UTF-8");

    var hiddenHtml =
      '<input type="hidden" name="_amcmsTkn" value="' +
      HIDDEN._amcmsTkn +
      '" />' +
      '<input type="hidden" name="boardContainerId" value="' +
      HIDDEN.boardContainerId +
      '" />' +
      '<input type="hidden" name="boardInsideTitle" value="자궁근종·용해술 랜딩 상담 문의" />' +
      '<input type="hidden" name="boardInsideGuestPassword" value="' +
      HIDDEN.boardInsideGuestPassword +
      '" />' +
      '<input type="hidden" name="boardInsideSecret" value="' +
      HIDDEN.boardInsideSecret +
      '" />';

    form.insertAdjacentHTML("afterbegin", hiddenHtml);

    var nameInput = form.querySelector('[name="성함"]');
    if (nameInput) {
      nameInput.setAttribute("name", "boardInsideGuestName");
      nameInput.id = "boardInsideGuestName";
    }

    var phoneInput = form.querySelector('[name="연락처"]');
    if (phoneInput) {
      phoneInput.setAttribute("name", "boardInsideExtraField1");
      phoneInput.id = "boardInsideExtraField1";
    }

    var memoInput = form.querySelector('[name="문의내용"]');
    if (memoInput) {
      memoInput.setAttribute("name", "boardInsideHtml");
      memoInput.id = "boardInsideHtml";
    }
  }

  function init() {
    document.addEventListener("submit", onDocumentSubmit, true);
    upgradeLanding1Form();
  }

  window.TrinityConsultForm = {
    init: init,
    submitTrinityContact: submitTrinityContact,
    getTopicFromPath: getTopicFromPath,
    withTopicPrefix: withTopicPrefix,
    CONTACT_ACTION: CONTACT_ACTION,
    HIDDEN: HIDDEN,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
