/** @format */

var i18n = {
  lng: "en",
  resources: {},

  init: function (options) {
    this.lng = options.lng || this.lng;
    this.resources = options.resources || this.resources;
  },

  applyTranslation: function () {
    var elements = document.querySelectorAll("[data-translate]");
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute("data-translate");
      elements[i].textContent = this.resources[this.lng].translation[key];
    }
  }
};

function changeLanguage(lang) {
  i18n.lng = lang;
  i18n.applyTranslation();

  var link = document.getElementsByClassName("intro-play-content1-0")[0];
  var period = document.getElementsByClassName("intro-info-time")[0];
  var snapshot = document.getElementsByClassName("intro-reward-content1")[0];
  if (lang === "ko") {
    link.href = "https://twitter.com/ainetwork_kr";
    period.innerText = "기한: 7월 28일(금) - 8월 4일(금) 12:00 (KST)";
    snapshot.innerText =
      "8월 4일(금) 18:00(KST)의 AIN/USDT 가격(MEXC 거래소 기준)을 가장 근접하게 맞춘 Top 1위부터 3위 (AIN 홀더가 아닌 경우는 제외 됩니다)";
    console.log(snapshot.innerText);
    return;
  }
  link.href = "https://twitter.com/ainetwork_ai";
  period.innerText = "Period: July 28th - August 4th 03:00 (UTC)";
  snapshot.innerText =
    "Top 1 to 3 that most closely match the AIN/USDT price (based on the MEXC exchange) at 09:00(UTC) on August 4 (Fri) (excluding non-AIN holders)";
}
