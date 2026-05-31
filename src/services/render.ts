import {
  boardPressure,
  payload,
  priorityBands,
  signalLane,
  summary,
  verification,
  windowMap
} from "./verticalBriefService.js";

function layout(title: string, active: string, body: string) {
  const nav = [
    { href: "/", label: "Overview" },
    { href: "/signal-lane", label: "Signal Lane" },
    { href: "/window-map", label: "Window Map" },
    { href: "/board-pressure", label: "Board Pressure" },
    { href: "/priority-bands", label: "Priority Bands" },
    { href: "/verification", label: "Verification" },
    { href: "/docs", label: "Docs" }
  ];
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>${title}</title><style>
  :root{--bg:#070a0f;--panel:#0b1220;--line:rgba(120,255,170,.18);--line2:rgba(120,255,170,.10);--text:#e9f3ff;--muted:rgba(233,243,255,.72);--muted2:rgba(233,243,255,.55);--good:#37ff8b;--cyan:#19c7ff;--warn:#ffcc66;--bad:#ff5c7a;--shadow:0 18px 60px rgba(0,0,0,.55);--mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--sans:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial}
  *{box-sizing:border-box}body{margin:0;font-family:var(--sans);color:var(--text);background:radial-gradient(1200px 600px at 20% -10%, rgba(55,255,139,.18), transparent 60%),radial-gradient(900px 520px at 90% 0%, rgba(25,199,255,.16), transparent 55%),linear-gradient(180deg,#05070c 0%,#070a0f 35%,#05070c 100%)} .wrap{max-width:1280px;margin:0 auto;padding:24px 22px 80px}
  .topbar{display:flex;justify-content:space-between;gap:14px;border-bottom:1px solid var(--line2);padding-bottom:14px;margin-bottom:22px;font-family:var(--mono);font-size:11px;letter-spacing:.16em;color:var(--muted);text-transform:uppercase}.topbar .left{color:var(--good)}.topbar .right{text-align:right}
  .hero{border-radius:22px;padding:28px;border:1px solid var(--line);border-top:2px solid var(--cyan);background:linear-gradient(180deg, rgba(11,18,32,.95), rgba(8,14,26,.92));box-shadow:var(--shadow)} .hero h1{font-size:54px;line-height:.98;margin:0 0 14px;font-weight:800} .hero p{color:var(--muted);font-size:15px;line-height:1.55;max-width:760px}
  .chiprow,.navrow,.footer-links{display:flex;flex-wrap:wrap;gap:8px}.meta-chip,.navchip{font-family:var(--mono);font-size:11px;color:var(--muted);padding:8px 12px;border-radius:999px;border:1px solid var(--line);background:rgba(6,10,18,.4);text-decoration:none}.navchip.active{color:#071017;background:linear-gradient(135deg,var(--good),var(--cyan));font-weight:700}
  .section{margin-top:34px}.sh{display:flex;justify-content:space-between;gap:14px;padding-bottom:10px;border-bottom:1px solid var(--line2);margin-bottom:14px}.sh h2{margin:0;font-size:24px}.note{font-family:var(--mono);font-size:11px;color:var(--muted2);letter-spacing:.16em;text-transform:uppercase}
  .kpis,.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}@media (max-width:1000px){.kpis,.grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:640px){.kpis,.grid{grid-template-columns:1fr}} .kpi,.card{border:1px solid var(--line);border-radius:14px;padding:16px;background:linear-gradient(180deg, rgba(11,18,32,.85), rgba(8,14,26,.65))}
  .kpi .v{font-family:var(--mono);font-size:26px;color:var(--cyan)}.kpi .lbl{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}.kpi .h,.card p{font-size:13px;color:var(--muted);line-height:1.55}
  .card .name{font-family:var(--mono);font-size:11px;color:var(--good);letter-spacing:.18em;text-transform:uppercase}.card h3{margin:8px 0;font-size:20px}.status{font-family:var(--mono);font-size:10px;padding:4px 9px;border-radius:6px;border:1px solid currentColor;display:inline-block}.red{color:var(--bad)}.yellow{color:var(--warn)}.green{color:var(--good)}
  table{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--line);border-radius:14px;overflow:hidden} th,td{padding:13px 14px;text-align:left;font-size:13.5px;vertical-align:top;color:var(--muted)} thead th{font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted2);border-bottom:1px solid var(--line);background:rgba(11,18,32,.5)}
  .footer{margin-top:30px;padding-top:14px;border-top:1px dashed var(--line2);display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-family:var(--mono);font-size:11px;color:var(--muted2)}
  </style><meta name="description" content="Timing Signal Index is the recurring executive market map for timing windows, board pressure, savings relevance, and conviction across Kinetic Gain’s strongest lanes."><meta property="og:type" content="website"><meta property="og:title" content="Timing Signal Index"><meta property="og:description" content="Signal-index surface for AI governance, platform margin, FinTech, biotech, and board-intelligence timing windows."><meta property="og:url" content="https://timing.kineticgain.com/"><meta property="og:site_name" content="Kinetic Gain"></head><body><div class="wrap"><div class="topbar"><div class="left">Kinetic Gain · Timing Signal Index</div><div class="right"><div>recurring market map · synthetic sample data only</div><div>timing · pressure · conviction · board relevance</div></div></div><section class="hero"><div class="chiprow"><span class="meta-chip">Recurring market map</span><span class="meta-chip">Board and investor timing surface</span><span class="meta-chip">Synthetic sample data only</span></div><h1>One recurring index that shows which timing windows are heating up, which themes are board-ready now, and which stories still belong in prepare or watch mode.</h1><p>Timing Signal Index sits after the scorecards, briefs, diligence packs, vertical brief, governance registry, and deal radar. It keeps the strongest recurring signals in one map so leadership can revisit timing without rebuilding the full story from scratch.</p><div class="navrow">${nav.map((link) => `<a class="navchip${active === link.href ? " active" : ""}" href="${link.href}">${link.label}</a>`).join("")}</div></section>${body}<div class="footer"><div>timing-signal-index · synthetic sample data only</div><div class="footer-links"><a class="meta-chip" href="https://github.com/mizcausevic-dev/">GitHub</a><a class="meta-chip" href="https://www.linkedin.com/in/mirzacausevic/">LinkedIn</a><a class="meta-chip" href="https://kineticgain.com/">Kinetic Gain</a></div></div></div></body></html>`;
}

const sev = (band: string) => band === "ACT_NOW" ? "red" : band === "PREPARE" ? "yellow" : "green";

export function renderOverview() {
  const s = summary();
  return layout("Timing Signal Index", "/", `<section class="section"><div class="sh"><h2>Index Snapshot</h2><div class="note">timing · conviction · board relevance</div></div><div class="kpis"><div class="kpi"><div class="v">${s.signals}</div><div class="lbl">signals</div><div class="h">Recurring timing signals currently in the index.</div></div><div class="kpi"><div class="v">${s.averagePressure}</div><div class="lbl">average pressure</div><div class="h">How urgently leadership should revisit these windows.</div></div><div class="kpi"><div class="v">${s.averageConviction}</div><div class="lbl">average conviction</div><div class="h">How strong the signal story is today.</div></div><div class="kpi"><div class="v">${s.boardReadySignals}</div><div class="lbl">board-ready</div><div class="h">Signals strong enough for the next memo now.</div></div><div class="kpi"><div class="v">${s.staleSignals}</div><div class="lbl">stale signals</div><div class="h">Signals that still need fresher proof before escalation.</div></div><div class="kpi"><div class="v">$${Math.round(s.savingsRelevanceUsd/1000)}k</div><div class="lbl">savings relevance</div><div class="h">Modeled savings relevance across the index.</div></div></div></section><section class="section"><div class="sh"><h2>What the index resolves</h2><div class="note">recurring read · no reinvention</div></div><div class="grid"><div class="card"><div class="name">priority</div><h3>Where leadership should look next</h3><p>${s.recommendation}</p></div><div class="card"><div class="name">timing</div><h3>Which windows are warming up again</h3><p>The index is for recurring signal checks, not one-time launch decisions. It keeps the timing read alive between larger deliverables.</p></div><div class="card"><div class="name">board angle</div><h3>Which themes are memo-ready now</h3><p>Board relevance stays attached to the signal itself instead of floating away into vague positioning claims.</p></div><div class="card"><div class="name">sequence</div><h3>What to refresh before escalation</h3><p>This layer helps leadership decide whether to act now, prepare the story, or keep a theme on watch.</p></div></div></section>`);
}

export function renderSignalLane() {
  return layout("Timing Signal Index — Signal Lane", "/signal-lane", `<section class="section"><div class="sh"><h2>Signal Lane</h2><div class="note">buyer · band · next read</div></div><table><thead><tr><th>Theme</th><th>Buyer</th><th>Band</th><th>Pressure</th><th>Conviction</th><th>Signal</th><th>Next read</th></tr></thead><tbody>${signalLane().map((item) => `<tr><td><b>${item.theme}</b></td><td>${item.targetBuyer}</td><td><span class="status ${sev(item.timingBand)}">${item.timingBand}</span></td><td>${item.pressureScore}</td><td>${item.convictionScore}</td><td>${item.signalSummary}</td><td>${item.nextRead}</td></tr>`).join("")}</tbody></table></section>`);
}

export function renderWindowMap() {
  return layout("Timing Signal Index — Window Map", "/window-map", `<section class="section"><div class="sh"><h2>Window Map</h2><div class="note">window · evidence · tags</div></div><table><thead><tr><th>Theme</th><th>Window</th><th>Evidence</th><th>Board relevance</th><th>Company tags</th><th>Related surfaces</th></tr></thead><tbody>${windowMap().map((item) => `<tr><td><b>${item.theme}</b></td><td>${item.timingWindow}</td><td>${item.evidenceState}</td><td>${item.boardRelevanceScore}</td><td>${item.companyTags.join(" · ")}</td><td>${item.relatedSurfaces.join("<br />")}</td></tr>`).join("")}</tbody></table></section>`);
}

export function renderBoardPressure() {
  return layout("Timing Signal Index — Board Pressure", "/board-pressure", `<section class="section"><div class="sh"><h2>Board Pressure</h2><div class="note">story · pressure · conviction</div></div><div class="grid">${boardPressure().map((item) => `<div class="card"><div class="name">${item.targetBuyer}</div><h3>${item.theme}</h3><p>${item.boardStory}</p><p>Pressure ${item.pressureScore} · Conviction ${item.convictionScore}</p></div>`).join("")}</div></section>`);
}

export function renderPriorityBands() {
  return layout("Timing Signal Index — Priority Bands", "/priority-bands", `<section class="section"><div class="sh"><h2>Priority Bands</h2><div class="note">act now · prepare · watch</div></div><div class="grid">${priorityBands().map((item) => `<div class="card"><div class="name">${item.timingBand} · $${Math.round(item.savingsRelevanceUsd/1000)}k</div><h3>${item.theme}</h3><p>${item.nextRead}</p></div>`).join("")}</div></section>`);
}

export function renderVerification() {
  return layout("Timing Signal Index — Verification", "/verification", `<section class="section"><div class="sh"><h2>Verification</h2><div class="note">index-safe claims only</div></div><div class="grid">${verification().map((item) => `<div class="card"><div class="name">verification</div><h3>${item}</h3><p>The index stays bounded to synthetic market and portfolio signals.</p></div>`).join("")}</div></section>`);
}

export function renderDocs() {
  return layout("Timing Signal Index — Docs", "/docs", `<section class="section"><div class="sh"><h2>Docs</h2><div class="note">cli · apis · recurring signal layer</div></div><div class="grid"><div class="card"><div class="name">cli</div><h3>Offline index generation</h3><p><code>npx timing-signal-index fixtures/timing-signal-index.json --format summary</code> renders the same posture the dashboard exposes.</p></div><div class="card"><div class="name">apis</div><h3>Machine-readable payloads</h3><p>Use <code>/api/dashboard/summary</code>, <code>/api/signal-lane</code>, <code>/api/window-map</code>, and <code>/api/board-pressure</code> as the canonical JSON layers.</p></div><div class="card"><div class="name">product role</div><h3>Recurring timing layer after the radar</h3><p>This index keeps the strongest recurring market signals readable between larger board, diligence, and registry updates.</p></div></div></section>`);
}

export function renderSample() {
  return JSON.stringify(payload().sample, null, 2);
}
