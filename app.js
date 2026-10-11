/* =====================================================================
   APP.JS  ·  the engine that builds the page from content.js
   ---------------------------------------------------------------------
   You shouldn't need to edit this file. All the words, photos, colors
   and links are in content.js.
   ===================================================================== */
(function () {
  const S = window.SITE;
  const CAST = S.characters;
  const BY = Object.fromEntries(CAST.map(c => [c.id, c]));
  const KEYS = CAST.map(c => c.id);
  const LETTER = { a: "allie", m: "margo", s: "scarlet" };
  const AGREE = ["Strongly agree", "Somewhat agree", "Somewhat disagree", "Strongly disagree"];
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const HEART = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.5 4.5 7 4.5c2 0 3.3 1.1 5 3 1.7-1.9 3-3 5-3 3.5 0 5.6 3.5 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/></svg>';
  const hexA = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; };
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ---------- header + static sections ---------- */
  document.title = S.pageTitle;
  $("smallLabel").textContent = S.smallLabel;
  $("title").innerHTML = `${esc(S.title)} <i>${esc(S.titlePretty)}</i>`;
  $("intro").textContent = S.intro;
  $("twitchBtn").href = S.twitch.url;
  $("twitchBtnText").textContent = S.twitch.button;
  $("twitchHandle").textContent = S.twitch.handle;
  $("favTitle").textContent = S.favorites.title;
  $("favText").textContent = S.favorites.text;
  $("quizTitle").textContent = S.quiz.title;
  $("quizText").textContent = S.quiz.text;
  $("join").innerHTML = `<p><b>${esc(S.discord.title)}</b>${esc(S.discord.text)}</p><a class="pill solid" href="${esc(S.discord.url)}" target="_blank" rel="noopener">${esc(S.discord.button)}</a>`;
  const A = S.about;
  $("aboutTitle").textContent = A.title;
  $("about").innerHTML = `<img class="mono" src="${esc(A.photo)}" alt="MJ">
    <div>${A.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}
      <dl>${A.details.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      <div class="row">${A.links.map(([t, u], i) => `<a class="pill${i === 0 ? " solid" : ""}" href="${esc(u)}" target="_blank" rel="noopener">${esc(t)}</a>`).join("")}</div>
    </div>`;
  $("footer").innerHTML = `<span>${esc(S.footerLeft)} · <a href="${esc(S.twitch.url)}" target="_blank" rel="noopener">${esc(S.twitch.handle)}</a></span><span>${esc(S.footerRight)}</span>`;

  /* ---------- background moods (one layer per girl) ---------- */
  $("moods").insertAdjacentHTML("afterbegin", CAST.map(c => `<div class="mood" id="mood-${c.id}" style="background:
    radial-gradient(900px 520px at 80% -60px,${hexA(c.color, .36)},transparent 70%),
    radial-gradient(800px 560px at 10% 20%,${hexA(c.color2, .18)},transparent 70%),
    linear-gradient(180deg,${hexA(c.color, .14)} 0%,${c.background} 55%,${c.background} 100%)"></div>`).join(""));

  /* ---------- character cards ---------- */
  $("picker").innerHTML = CAST.map(c => `
   <article class="pcard" id="p-${c.id}" style="--c:${c.color}">
    <div class="pin">
     <button class="pick" data-sel="${c.id}" aria-label="Show ${esc(c.name)}">
      <img src="${esc(c.cardPhoto)}" alt="${esc(c.name)}" style="object-position:50% 30%">
      <span class="badge">${esc(c.tag)}</span>
      <span class="lbl"><span class="nm">${esc(c.name)}</span><span class="rl">${esc(c.role)}</span></span>
     </button>
     <div class="pfoot"><span class="hint">Tap to view</span><button class="heart" data-heart="${c.id}" aria-pressed="false" aria-label="Favorite ${esc(c.name)}">${HEART}<span class="ct"></span></button></div>
    </div>
   </article>`).join("");

  function extras(c) {
    let h = "";
    if (c.box) h += `<div class="extra box"><b>${esc(c.box.title)}</b><p>${esc(c.box.text)}</p><ul>${c.box.list.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>`;
    if (c.file) h += `<div class="extra file"><div class="fh">${esc(c.file.title)}</div><dl>${c.file.rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></div>`;
    if (c.photos && c.photos.length) h += `<div><p class="block-h">${esc(c.photosTitle || "Photos")}</p><div class="gallery">${c.photos.map(p => `<figure${p.wide ? ' class="wide"' : ""}><img src="${esc(p.src)}" alt="${esc(p.caption)}" loading="lazy"><figcaption>${esc(p.caption)}</figcaption></figure>`).join("")}</div></div>`;
    return h;
  }
  function renderProfile(c) {
    $("profile").innerHTML = `
     <aside class="side">
      <img class="portrait" src="${esc(c.profilePhoto)}" alt="${esc(c.name)}" style="object-position:50% 30%">
      <dl class="facts">${c.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
     </aside>
     <div class="main">
      <div class="ptitle"><div class="eyebrow">${esc(c.role)}</div><h2>${esc(c.name)}</h2><p class="tagline">“${esc(c.tagline)}”</p></div>
      <div class="bio"><p>${esc(c.intro)}</p></div>
      <div class="backstory"><p class="block-h">Backstory</p><p>${esc(c.backstory)}</p></div>
      ${extras(c)}
     </div>`;
  }

  let current = BY[store.get("cc-sel")] ? store.get("cc-sel") : KEYS[0];
  function select(id, scroll) {
    const c = BY[id]; current = id; store.set("cc-sel", id);
    const b = document.body;
    b.style.setProperty("--accent", c.color);
    b.style.setProperty("--accent-2", c.color2);
    b.style.backgroundColor = c.background;
    b.classList.toggle("police", !!c.policeLights);
    document.querySelectorAll(".mood").forEach(m => m.classList.toggle("on", m.id === "mood-" + id));
    document.querySelectorAll(".pcard").forEach(p => p.classList.toggle("on", p.id === "p-" + id));
    document.querySelectorAll("[data-sel]").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.sel === id)));
    renderProfile(c); setParticles(c);
    if (scroll) $("profile").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  $("picker").addEventListener("click", e => {
    const h = e.target.closest("[data-heart]"); if (h) { toggleHeart(h.dataset.heart); return; }
    const s = e.target.closest("[data-sel]"); if (s) select(s.dataset.sel, false);
  });

  /* ---------- floating sprinkles / sparkles / embers ---------- */
  const cv = $("sprinkles"), cx = cv.getContext("2d");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let parts = [], mode = "sparkles", W = 0, H = 0, lastC = null;
  function size() { W = cv.width = innerWidth * devicePixelRatio; H = cv.height = innerHeight * devicePixelRatio; }
  size(); addEventListener("resize", () => { size(); if (lastC) setParticles(lastC); });
  function setParticles(c) {
    lastC = c; mode = c.sparkles || "sparkles";
    const pal = [c.color, c.color2, "#ffffff"], n = mode === "sprinkles" ? 46 : mode === "sparkles" ? 34 : 22, d = devicePixelRatio;
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H, r: (mode === "sprinkles" ? 3 : 1.6 + Math.random() * 2.4) * d, len: (7 + Math.random() * 5) * d,
      a: Math.random() * Math.PI, va: (Math.random() - .5) * .02, vy: (mode === "embers" ? -.15 : .25 + Math.random() * .35) * d, vx: (Math.random() - .5) * .2 * d,
      c: pal[Math.floor(Math.random() * pal.length)], o: .2 + Math.random() * .45, t: Math.random() * 6
    }));
    if (reduce) draw();
  }
  function draw() {
    cx.clearRect(0, 0, W, H);
    for (const p of parts) {
      cx.globalAlpha = p.o; cx.fillStyle = p.c;
      if (mode === "sprinkles") { cx.save(); cx.translate(p.x, p.y); cx.rotate(p.a); cx.beginPath(); if (cx.roundRect) cx.roundRect(-p.len / 2, -p.r / 2, p.len, p.r, p.r / 2); else cx.rect(-p.len / 2, -p.r / 2, p.len, p.r); cx.fill(); cx.restore(); }
      else if (mode === "sparkles") { cx.globalAlpha = p.o * (.5 + .5 * Math.sin(p.t)); cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 7); cx.fill(); }
      else { cx.beginPath(); cx.arc(p.x, p.y, p.r * .8, 0, 7); cx.fill(); }
    }
    cx.globalAlpha = 1;
  }
  function tick() {
    for (const p of parts) { p.y += p.vy; p.x += p.vx; p.a += p.va; p.t += .03; if (p.y > H + 20) p.y = -20; if (p.y < -20) p.y = H + 20; if (p.x > W + 20) p.x = -20; if (p.x < -20) p.x = W + 20; }
    draw(); requestAnimationFrame(tick);
  }

  /* ---------- hearts (saved on each viewer's device) ---------- */
  let mine = Object.fromEntries(KEYS.map(k => [k, false]));
  try { const s = JSON.parse(store.get("cc-hearts") || "null"); if (s) KEYS.forEach(k => mine[k] = !!s[k]); } catch (e) {}
  let counts = null, writable = false;
  const saveLocal = () => store.set("cc-hearts", JSON.stringify(mine));
  function renderHearts() {
    document.querySelectorAll("[data-heart]").forEach(b => { const k = b.dataset.heart; b.setAttribute("aria-pressed", String(mine[k])); b.querySelector(".ct").textContent = counts ? String(counts[k]) : ""; });
    const max = counts ? Math.max(1, ...KEYS.map(k => counts[k])) : 1;
    $("fav").innerHTML = CAST.map(c => {
      const w = counts ? counts[c.id] / max * 100 : (mine[c.id] ? 100 : 0);
      const n = counts ? `${counts[c.id]} ♥` : (mine[c.id] ? "♥" : "");
      return `<div class="bar" style="--c:${c.color}"><span class="label">${esc(c.shortName)}</span><div class="track"><div class="fill" style="width:${w}%"></div></div><span class="n">${n}</span></div>`;
    }).join("");
  }
  function pushHearts() {}
  function toggleHeart(k) {
    mine[k] = !mine[k]; saveLocal();
    if (counts && !writable) counts[k] += mine[k] ? 1 : -1;
    renderHearts();
    if (mine[k]) document.querySelectorAll(`[data-heart="${k}"]`).forEach(b => { b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop"); });
    pushHearts();
  }

  /* ---------- quiz ---------- */
  const Q = S.quiz.questions, quizEl = $("quiz");
  let step = 0, answers = [], last = null;
  function renderQuiz() {
    if (step < Q.length) {
      const q = Q[step], opts = q.agree ? AGREE.map((t, i) => [t, q.agree[i]]) : q.answers;
      quizEl.innerHTML = `<div class="progress" aria-hidden="true">${Q.map((_, i) => `<span class="${i <= step ? "on" : ""}"></span>`).join("")}</div>
        <div class="qnum">${step + 1} of ${Q.length} · ${esc(q.label)}</div>
        <p class="q">${esc(q.question)}</p>
        <div class="opts">${opts.map(([t], i) => `<button class="opt" id="q${step}-o${i}" data-pick="${i}"><span class="k">${"ABCD"[i]}</span><span>${esc(t)}</span></button>`).join("")}</div>
        ${step > 0 ? '<div><button class="pill" id="back">Back</button></div>' : ""}`;
    } else {
      const tot = Object.fromEntries(KEYS.map(k => [k, 0]));
      answers.forEach(w => Object.entries(w).forEach(([k, v]) => { const id = LETTER[k] || k; if (id in tot) tot[id] += v; }));
      const sum = Math.max(1, KEYS.reduce((s, k) => s + tot[k], 0));
      const pct = {}; KEYS.forEach(k => pct[k] = Math.round(tot[k] / sum * 100));
      const order = [...KEYS].sort((x, y) => tot[y] - tot[x]), best = order[0], c = BY[best];
      last = { best, pct, order };
      quizEl.innerHTML = `<div class="result">
        <img src="${esc(c.cardPhoto)}" alt="${esc(c.name)}" style="border-color:${c.color}">
        <div><div class="you">You're most like</div><h3 style="color:${c.color}">${esc(c.name)}</h3><p>${esc(S.quiz.results[best])}</p>
        <div class="fav" style="gap:8px;margin-bottom:18px">${order.map(k => `<div class="bar" style="--c:${BY[k].color};grid-template-columns:80px minmax(0,1fr) 48px"><span class="label" style="font-size:17px">${esc(BY[k].shortName)}</span><div class="track"><div class="fill" style="width:${pct[k]}%"></div></div><span class="n">${pct[k]}%</span></div>`).join("")}</div>
        <div class="row"><button class="pill solid" data-view="${best}" style="background:${c.color};border-color:${c.color}">Meet ${esc(c.shortName)}</button><button class="pill" id="copy">Copy my result</button><button class="pill" id="retake">Take it again</button></div>
        <div class="toast" id="toast"></div></div></div>`;
    }
  }
  quizEl.addEventListener("click", e => {
    const o = e.target.closest("[data-pick]");
    if (o) { const q = Q[step], i = +o.dataset.pick; answers[step] = q.agree ? q.agree[i] : q.answers[i][1]; step++; renderQuiz(); return; }
    if (e.target.closest("#back")) { step--; answers.length = step; renderQuiz(); return; }
    const v = e.target.closest("[data-view]"); if (v) { select(v.dataset.view, true); return; }
    if (e.target.closest("#copy") && last) {
      const txt = `I'm ${last.pct[last.best]}% ${BY[last.best].name} on mjheart's Cloud City quiz (${last.order.map(k => BY[k].shortName + " " + last.pct[k] + "%").join(", ")}). Which one are you?`;
      const t = $("toast");
      try { navigator.clipboard.writeText(txt).then(() => { t.textContent = "Copied. Paste it in chat!"; }, () => { t.textContent = txt; }); } catch (err) { t.textContent = txt; }
      return;
    }
    if (e.target.closest("#retake")) { step = 0; answers = []; last = null; renderQuiz(); }
  });

  select(current, false);
  if (!reduce) requestAnimationFrame(tick);
  renderHearts();
  renderQuiz();
})();
