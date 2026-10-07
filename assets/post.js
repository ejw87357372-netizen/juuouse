/* juuouse 글 페이지 공통 스크립트: GA4, 복사 버튼, 목차, 진행바, 공유 */
(function () {
  var S = window.SITE || {};
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  if (S.gaId && S.gaId.indexOf("XXXX") < 0) {
    var g = document.createElement("script");
    g.async = true; g.src = "https://www.googletagmanager.com/gtag/js?id=" + S.gaId;
    document.head.appendChild(g);
    gtag("js", new Date()); gtag("config", S.gaId);
  }
  var slug = document.body.dataset.slug || location.pathname;
  var layout = function () { return matchMedia("(min-width:1080px)").matches ? "pc" : "mobile"; };

  var toast = document.createElement("div"); toast.className = "toast"; document.body.appendChild(toast);
  var tt; function say(m){ toast.textContent = m; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(function(){ toast.classList.remove("show"); }, 1600); }
  function copyText(t){ return navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject(); }

  // 복사 버튼
  document.querySelectorAll(".copy").forEach(function (box, i) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = "복사";
    box.appendChild(b);
    b.onclick = function () {
      var text = box.childNodes[0].textContent.trim();
      copyText(text).then(function(){
        b.textContent = "복사됨"; b.classList.add("done"); say("복사했어요 ✨");
        setTimeout(function(){ b.textContent = "복사"; b.classList.remove("done"); }, 1500);
      }).catch(function(){ say("길게 눌러서 복사해 주세요"); });
      gtag("event", "copy_prompt", { post: slug, block: box.dataset.name || ("block_" + (i + 1)), layout: layout() });
    };
  });

  // 목차 자동 생성 + 현재 위치 표시
  var toc = document.querySelector(".toc");
  var hs = [].slice.call(document.querySelectorAll("article h2"));
  if (toc && hs.length) {
    hs.forEach(function (h, i) { if (!h.id) h.id = "s" + (i + 1); });
    toc.innerHTML = "<b>목차</b>" + hs.map(function (h) { return '<a href="#' + h.id + '">' + h.textContent + "</a>"; }).join("");
    var links = toc.querySelectorAll("a");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-80px 0px -70% 0px" });
    hs.forEach(function (h) { io.observe(h); });
  }

  // 읽기 진행바 + 끝까지 읽음 이벤트
  var bar = document.querySelector(".progress"), sent = false;
  addEventListener("scroll", function () {
    var d = document.documentElement, p = d.scrollTop / (d.scrollHeight - d.clientHeight || 1);
    if (bar) bar.style.width = Math.min(100, p * 100) + "%";
    if (!sent && p > .9) { sent = true; gtag("event", "read_complete", { post: slug, layout: layout() }); }
  }, { passive: true });

  // 바깥 링크 클릭 추적
  document.addEventListener("click", function (e) {
    var a = e.target.closest("article a[href^='http'], .end a");
    if (a) gtag("event", "outbound_click", { post: slug, link_url: a.href, layout: layout(), transport_type: "beacon" });
  });

  // 공유
  var sb = document.querySelector("[data-share]");
  if (sb) sb.onclick = function () {
    var url = location.origin + location.pathname;
    if (navigator.share) navigator.share({ title: document.title, url: url }).catch(function(){});
    else copyText(url).then(function(){ say("링크를 복사했어요 ✨"); });
    gtag("event", "share", { post: slug, layout: layout() });
  };
})();
