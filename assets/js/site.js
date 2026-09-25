/* ============================================================
   SITE.JS — renders the page from window.CONTENT (content.js)
   and handles the theme toggle. All presentation lives in
   assets/css/style.css. Edit words in content.js, not here.
   ============================================================ */
(function () {
  "use strict";

  var C = window.CONTENT;
  if (!C) return;

  function put(id, html) {
    var node = document.getElementById(id);
    if (node) node.innerHTML = html;
  }

  /* External links open in a new tab */
  function ext(href) {
    return /^https?:/i.test(href) ? ' target="_blank" rel="noopener"' : "";
  }

  /* ---------- page metadata ---------- */
  if (C.meta && C.meta.title) document.title = C.meta.title;
  if (C.meta && C.meta.description) {
    var d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute("content", C.meta.description);
    var og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute("content", C.meta.description);
  }

  /* ---------- theme toggle ---------- */
  var rootEl = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = rootEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
      rootEl.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode */ }
    });
  }

  /* ---------- header brand + nav ---------- */
  var brand = document.getElementById("brand");
  if (brand) brand.textContent = C.hero.name;

  put("nav",
    C.nav.map(function (n) {
      return '<li><a href="' + n.href + '">' + n.label + "</a></li>";
    }).join("") +
    '<li><a class="nav-cta" href="' + C.navCta.href + '">' + C.navCta.label + "</a></li>"
  );

  /* ---------- hero ---------- */
  (function () {
    var h = C.hero;
    put("sec-hero", `
      <div class="container hero-inner">
        <p class="eyebrow"><span class="sq" aria-hidden="true"></span>${h.eyebrow}</p>
        <h1>${h.name}</h1>
        <p class="hero-role">${h.role} · <span class="hero-org">${h.org}</span></p>
        <div class="hero-cols">
          <p class="hero-tagline">${h.tagline}</p>
          ${h.photo && h.photo.src ? `
            <figure class="hero-photo">
              <img src="${h.photo.src}" alt="${h.photo.alt}">
              ${h.photo.caption ? `<figcaption>${h.photo.caption}</figcaption>` : ""}
            </figure>` : ""}
        </div>
        <div class="hero-ctas">
          ${h.ctas.map(function (b) {
            return `<a class="btn ${b.primary ? "btn-primary" : "btn-ghost"}" href="${b.href}"${ext(b.href)}>${b.label}</a>`;
          }).join("")}
        </div>
      </div>`);
  })();

  /* ---------- about ---------- */
  (function () {
    var a = C.about;
    put("sec-about", `
      <div class="container">
        <h2 class="section-title">${a.heading}</h2>
        <div class="staff" aria-hidden="true"></div>
        <div class="about-copy">
          ${a.paragraphs.map(function (p, i) {
            return `<p${i === 0 ? ' class="lead"' : ""}>${p}</p>`;
          }).join("")}
        </div>
      </div>`);
  })();

  /* ---------- off the clock (pink block) ---------- */
  (function () {
    var o = C.offclock;
    put("sec-offclock", `
      <div class="container">
        <h2 class="section-title">${o.heading}</h2>
        <p class="section-lede">${o.lede}</p>
        <ul class="offclock-grid">
          ${o.items.map(function (it) {
            return `<li><h3>${it.name}</h3><p>${it.text}</p></li>`;
          }).join("")}
        </ul>
      </div>`);
  })();

  /* ---------- experience ---------- */
  (function () {
    var e = C.experience;
    put("sec-experience", `
      <div class="container">
        <h2 class="section-title">${e.heading}</h2>
        <p class="section-lede">${e.lede}</p>
        <ol class="timeline">
          ${e.entries.map(function (en) {
            var pillars = en.pillars ? en.pillars.map(function (p) {
              return `<h4 class="pillar">${p.title}</h4>
                <ul>${p.bullets.map(function (b) { return `<li>${b}</li>`; }).join("")}</ul>`;
            }).join("") : "";
            var plain = en.bullets ? `<ul>${en.bullets.map(function (b) { return `<li>${b}</li>`; }).join("")}</ul>` : "";
            return `
          <li class="tl-entry">
            <div class="tl-head">
              ${en.logo ? `<img class="org-logo" src="${en.logo}" alt="" loading="lazy">` : ""}
              <h3>${en.title}</h3>
              <span class="tl-date">${en.date}</span>
            </div>
            ${en.sub ? `<p class="tl-sub">${en.sub}</p>` : ""}
            ${pillars}${plain}
          </li>`;
          }).join("")}
        </ol>
      </div>`);
  })();

  /* ---------- projects ---------- */
  (function () {
    var p = C.projects;
    put("sec-projects", `
      <div class="container">
        <h2 class="section-title">${p.heading}</h2>
        <p class="section-lede">${p.lede}</p>
        <ol class="proj-list">
          ${p.items.map(function (it, i) {
            return `
          <li class="proj-row">
            <span class="proj-index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
            <div class="proj-body">
              <h3>${it.name}</h3>
              <p class="proj-meta">${it.meta}</p>
              <p class="proj-desc">${it.description}</p>
              <ul class="chips">${it.tags.map(function (t) { return `<li>${t}</li>`; }).join("")}</ul>
            </div>
          </li>`;
          }).join("")}
        </ol>
      </div>`);
  })();

  /* ---------- skills (pink block) ---------- */
  (function () {
    var s = C.skills;
    put("sec-skills", `
      <div class="container">
        <h2 class="section-title">${s.heading}</h2>
        <p class="section-lede">${s.lede}</p>
        <div class="skills-grid">
          ${s.groups.map(function (g) {
            var chips = g.chips.map(function (c) {
              if (typeof c === "string") return `<li>${c}</li>`;
              return `<li class="chip-note">${c.label}${c.note ? `<span>${c.note}</span>` : ""}</li>`;
            }).join("");
            return `
          <div class="skill-group">
            <h3>${g.name}</h3>
            <ul class="chips">${chips}</ul>
          </div>`;
          }).join("")}
        </div>
      </div>`);
  })();

  /* ---------- publications & awards ---------- */
  (function () {
    var pb = C.publications;
    put("sec-publications", `
      <div class="container">
        <h2 class="section-title">${pb.heading}</h2>
        <div class="staff" aria-hidden="true"></div>
        <div class="pub-grid">
          <article class="pub-card">
            ${pb.paper.logo ? `<img class="org-logo org-logo-lg" src="${pb.paper.logo}" alt="" loading="lazy">` : ""}
            <p class="mono-tag">${pb.paper.tag}</p>
            <h3>${pb.paper.title}</h3>
            <p class="pub-authors">${pb.paper.authors}</p>
            <p class="pub-venue">${pb.paper.venue}${pb.paper.doi ? ` · <a href="${pb.paper.doi.href}" target="_blank" rel="noopener">${pb.paper.doi.label}</a>` : ""}</p>
            <p class="pub-note">${pb.paper.note}</p>
          </article>
          <div class="awards">
            <h3>${pb.awards.heading}</h3>
            <ul>
              ${pb.awards.items.map(function (w) {
                return `<li><strong>${w.title}</strong><span class="award-date">${w.date}</span><p>${w.text}</p></li>`;
              }).join("")}
            </ul>
          </div>
        </div>
      </div>`);
  })();

  /* ---------- footer ---------- */
  (function () {
    var f = C.footer;
    put("sec-footer", `
      <div class="container footer-inner">
        <p class="footer-name">${f.name}</p>
        <ul class="footer-links">
          <li><a href="mailto:${f.email}">${f.email}</a></li>
          <li><a href="${f.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="${f.github}" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
        <div class="eggs" aria-hidden="true">
          <svg class="coffee" viewBox="0 0 24 24" width="18" height="18"><path class="steam s1" d="M9 3c0 1.5-1.5 1.5-1.5 3S9 7.5 9 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path class="steam s2" d="M14 3c0 1.5-1.5 1.5-1.5 3S14 7.5 14 9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6 12h11v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M17 13h1.5a2 2 0 0 1 0 4H17" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
          <span class="egg-game">&gt; player one</span>
        </div>
        <p class="footer-note">${f.colophon}</p>
        <p class="footer-note">${f.note}</p>
      </div>`);
  })();

})();
