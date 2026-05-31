import { rm, writeFile } from "node:fs/promises";
import { sampleTimingSignalIndex } from "../src/data/sampleVerticalBrief.js";

async function main() {
  const clean = sampleTimingSignalIndex.map((item) => ({
    ...item,
    evidenceState: "CURRENT" as const,
    convictionScore: Math.max(item.convictionScore, 74),
    boardRelevanceScore: Math.max(item.boardRelevanceScore, 72),
    timingBand: item.timingBand === "WATCH" ? "PREPARE" as const : item.timingBand,
    timingWindow: item.timingBand === "WATCH" ? "Next quarter" : item.timingWindow
  }));

  await writeFile("fixtures/timing-signal-index.json", JSON.stringify(sampleTimingSignalIndex, null, 2) + "\n");
  await writeFile("fixtures/timing-signal-index-clean.json", JSON.stringify(clean, null, 2) + "\n");

  for (const file of ["fixtures/deal-radar.json", "fixtures/deal-radar-clean.json"]) {
    try {
      await rm(file);
    } catch {
      // Ignore missing copied fixtures during scaffold cleanup.
    }
  }
}

await main();
