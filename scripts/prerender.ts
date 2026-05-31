import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  renderBoardPressure,
  renderDocs,
  renderOverview,
  renderPriorityBands,
  renderSample,
  renderSignalLane,
  renderVerification,
  renderWindowMap
} from "../src/services/render.js";
import {
  boardPressure,
  payload,
  priorityBands,
  riskMap,
  signalLane,
  summary,
  verification,
  windowMap
} from "../src/services/verticalBriefService.js";

const outDir = path.resolve("site");
async function emit(filePath: string, contents: string) {
  const target = path.join(outDir, filePath);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, contents, "utf8");
}
const files: Record<string, string> = {
  "index.html": renderOverview(),
  [path.join("signal-lane", "index.html")]: renderSignalLane(),
  [path.join("window-map", "index.html")]: renderWindowMap(),
  [path.join("board-pressure", "index.html")]: renderBoardPressure(),
  [path.join("priority-bands", "index.html")]: renderPriorityBands(),
  [path.join("verification", "index.html")]: renderVerification(),
  [path.join("docs", "index.html")]: renderDocs(),
  "robots.txt": "User-agent: *\nAllow: /\nSitemap: https://timing.kineticgain.com/sitemap.xml\n",
  "sitemap.xml": `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://timing.kineticgain.com/</loc></url><url><loc>https://timing.kineticgain.com/signal-lane/</loc></url><url><loc>https://timing.kineticgain.com/window-map/</loc></url><url><loc>https://timing.kineticgain.com/board-pressure/</loc></url><url><loc>https://timing.kineticgain.com/priority-bands/</loc></url><url><loc>https://timing.kineticgain.com/verification/</loc></url><url><loc>https://timing.kineticgain.com/docs/</loc></url></urlset>`,
  [path.join("api", "dashboard-summary.json")]: JSON.stringify(summary(), null, 2),
  [path.join("api", "signal-lane.json")]: JSON.stringify(signalLane(), null, 2),
  [path.join("api", "window-map.json")]: JSON.stringify(windowMap(), null, 2),
  [path.join("api", "board-pressure.json")]: JSON.stringify(boardPressure(), null, 2),
  [path.join("api", "priority-bands.json")]: JSON.stringify(priorityBands(), null, 2),
  [path.join("api", "risk-map.json")]: JSON.stringify(riskMap(), null, 2),
  [path.join("api", "verification.json")]: JSON.stringify(verification(), null, 2),
  [path.join("api", "sample.json")]: renderSample(),
  [path.join("api", "payload.json")]: JSON.stringify(payload(), null, 2)
};
for (const [filePath, contents] of Object.entries(files)) {
  await emit(filePath, contents);
}
