const state = { data: null, filter: "all", includeAviation: false };
const $ = (id) => document.getElementById(id);
function pad(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
function animateCount(el, to) {
  const t0 = performance.now();
  const tick = (now) => {
    const p = Math.min(1, (now - t0) / 1400);
    el.textContent = pad(Math.round((to) * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
function catSum(ids) {
  return state.data.categories.filter((c) => ids.includes(c.id)).reduce((s, c) => s + (c.count || 0), 0);
}
function lanes() {
  const closed = catSum(["military", "robots"]) + (state.includeAviation ? catSum(["aviation"]) : 0);
  const signed = catSum(["hitl"]);
  const advisory = catSum(["vehicles", "chatbots", "medical"]);
  return { closed, signed, advisory, floor: closed + signed + advisory };
}
function headlineTotal() { return lanes().floor; }
function renderDivisions() {
  if (!state.data.divisions) return;
  const war = state.data.overall?.war ?? 0;
  const civil = state.data.overall?.civil ?? 0;
  let html = `<section class="divisions"><h2>MAIN DIVISIONS</h2><div class="overall-totals">
    <article class="overall war"><div class="head-name">TERRORISM / WAR / GENOCIDE</div><div class="head-n">${pad(war)}</div><p>Military division total</p></article>
    <article class="overall civil"><div class="head-name">CIVIL</div><div class="head-n">${pad(civil)}</div><p>Non-military division total</p></article>
  </div><div class="div-grid">`;
  state.data.divisions.forEach((d) => {
    html += `<article class="division" style="border-color:${d.color}66">
      <h3>${d.short} <span style="color:${d.color}">${pad(d.count)}</span></h3>
      <p class="div-label">${d.label}</p>
      <div class="subs">`;
    d.subs.forEach((s) => {
      html += `<div class="sub"><b>${s.short}</b><span class="sub-n">${pad(s.count)}</span><p>${s.tone}</p></div>`;
    });
    html += `</div></article>`;
  });
  html += `</div></section>`;
  const existing = document.getElementById("divisions-root");
  if (existing) existing.innerHTML = html;
  else {
    const el = document.createElement("div");
    el.id = "divisions-root";
    el.innerHTML = html;
    document.querySelector("main").insertBefore(el, document.querySelector(".cats"));
  }
}
function renderCats() {
  $("cats").innerHTML = state.data.categories.map((c) => `
    <article class="cat ${c.emerging ? "emerging" : ""}" style="border-color:${c.color}44">
      <h3>${c.short}</h3>
      <div class="n" style="color:${c.color}">${pad(c.count)}</div>
      ${c.split ? `<div class="split">${c.split}</div>` : ""}
      <p>${c.tone}</p>
    </article>`).join("");
}
function renderStats() {
  $("stats").innerHTML = state.data.supportingStats.map((s) => `
    <article class="stat"><b>${s.stat}</b><span>${s.label}</span><div><a href="${s.url}" target="_blank" rel="noopener">${s.source}</a></div></article>`).join("");
}
function renderLog() {
  const rows = state.data.cases.filter((c) => state.filter === "all" || c.category === state.filter).sort((a, b) => b.date.localeCompare(a.date));
  $("log").innerHTML = rows.map((c) => `
    <article class="card">
      <div class="meta"><span>${c.date}</span><span>${c.category.toUpperCase()}</span><span>${c.fatalities} dead</span><span class="grade">GRADE ${c.grade}</span><span>${c.status}</span></div>
      <h3>${c.title}</h3><p>${c.summary}</p>
      <p style="margin-top:8px;color:#9a8882">${c.location}</p>
      <div class="sources">${c.sources.map((s) => `<a href="${s.url}" target="_blank" rel="noopener">↗ ${s.name}</a>`).join("")}</div>
    </article>`).join("");
}
function renderHeads() {
  const L = lanes();
  const cards = [
    { id: "closed", name: "CLOSED-LOOP", sub: "Machine finished the kill", hint: "Autonomous weapons + factory robots" + (state.includeAviation ? " + 737 MAX" : ""), n: L.closed },
    { id: "signed", name: "HUMAN-SIGNED", sub: "Man approved the AI target first", hint: "Lavender / Maven-style lists. Human still released the strike.", n: L.signed },
    { id: "advisory", name: "ADVISORY AI", sub: "AI shaped a human act", hint: "ADAS crashes, chatbot-linked deaths, alleged medical algorithms.", n: L.advisory },
    { id: "floor", name: "DOCUMENTED FLOOR", sub: "Lower bound · not a ceiling", hint: "Sum of the three heads with no double count. Floor = smallest number we can defend today, not the true total and not a verdict.", n: L.floor }
  ];
  $("heads").innerHTML = cards.map((h) => `
    <article class="head ${h.id}">
      <div class="head-name">${h.name}</div>
      <div class="head-n">${pad(h.n)}</div>
      <div class="head-sub">${h.sub}</div>
      <p>${h.hint}</p>
    </article>`).join("");
}
function renderHeadline() {
  const total = headlineTotal();
  animateCount($("headline-count"), total);
  $("headline-label").textContent = "DOCUMENTED FLOOR · الحد الأدنى الموثَّق";
  $("headline-note").textContent = "Floor here means lower bound, not a building floor and not a ceiling. Closed-Loop = the machine completed the act. Human-Signed = a person approved an AI-built target before the strike. Advisory = a human acted after an AI suggestion. Documented Floor = those three added once, no double count, not a court verdict.";
  const high = state.includeAviation ? state.data.headline.linkedHigh + 346 : state.data.headline.linkedHigh;
  $("headline-range").textContent = `DOCUMENTED FLOOR ${pad(total)}  ·  COMPILED UPPER ${pad(high)}`;
  renderHeads();
}
function toastEmerging() {
  state.data.categories.filter((c) => c.emerging).forEach((c, i) => {
    setTimeout(() => {
      const t = document.createElement("div");
      t.className = "toast";
      t.innerHTML = `<b>+ ${c.short}</b><span>Emerging category live · ${c.count} counted</span>`;
      $("toast-layer").appendChild(t);
      setTimeout(() => t.remove(), 4200);
    }, 900 + i * 1600);
  });
}
function tickClock() {
  $("clock").textContent = new Date().toISOString().replace("T", " ").slice(0, 19) + "Z";
}
async function boot() {
  if (window.TOLL) state.data = window.TOLL;
  else state.data = await (await fetch("data/toll.json?ts=" + Date.now(), { cache: "no-store" })).json();
  $("as-of").textContent = "AS OF " + (state.data.asOf || (state.data.meta && state.data.meta.asOf) || "—");
  $("disclaimer").textContent = state.data.meta.disclaimer;
  renderHeadline(); renderDivisions(); renderCats(); renderStats(); renderLog(); toastEmerging();
  tickClock(); setInterval(tickClock, 1000);
  document.querySelectorAll(".chip").forEach((btn) => {
    btn.onclick = () => {
      document.querySelectorAll(".chip").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.filter = btn.dataset.filter;
      renderLog();
    };
  });
  $("include-aviation").onchange = (e) => { state.includeAviation = e.target.checked; renderHeadline(); };
}
boot().catch((err) => { $("headline-note").textContent = "Failed to load ledger: " + err.message; });
