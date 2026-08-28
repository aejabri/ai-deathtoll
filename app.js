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
    { id: "floor", name: "LINKED FLOOR", sub: "All three · no double count", hint: "Closed-Loop + Human-Signed + Advisory.", n: L.floor }
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
  $("headline-label").textContent = "LINKED FLOOR";
  $("headline-note").textContent = "Four ledgers, one floor. Closed-Loop = the machine completed the act. Human-Signed = a person approved an AI-built target before execution. Advisory = a human acted after an AI suggestion. Linked Floor is the sum with no double counting.";
  const high = state.includeAviation ? state.data.headline.linkedHigh + 346 : state.data.headline.linkedHigh;
  $("headline-range").textContent = `CURATED FLOOR ${pad(total)}  ·  COMPILED UPPER ${pad(high)}`;
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
  renderHeadline(); renderCats(); renderStats(); renderLog(); toastEmerging();
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
