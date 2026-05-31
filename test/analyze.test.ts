import { describe, expect, it } from "vitest";
import { analyze } from "../src/analyze.js";
import { sampleTimingSignalIndex } from "../src/data/sampleVerticalBrief.js";

describe("analyze", () => {
  it("returns the expected signal count", () => {
    const report = analyze(sampleTimingSignalIndex, { now: "2026-05-31T18:20:00Z" });
    expect(report.signals).toBe(8);
  });

  it("computes positive pressure and conviction", () => {
    const report = analyze(sampleTimingSignalIndex, { now: "2026-05-31T18:20:00Z" });
    expect(report.averagePressure).toBeGreaterThanOrEqual(60);
    expect(report.averageConviction).toBeGreaterThanOrEqual(60);
  });

  it("counts board-ready windows and stale signals", () => {
    const report = analyze(sampleTimingSignalIndex, { now: "2026-05-31T18:20:00Z" });
    expect(report.boardReadySignals).toBeGreaterThanOrEqual(1);
    expect(report.staleSignals).toBeGreaterThanOrEqual(1);
  });

  it("emits pressure and signal findings", () => {
    const report = analyze(sampleTimingSignalIndex, { now: "2026-05-31T18:20:00Z" });
    expect(report.findingsList.some((finding) => finding.code === "high-pressure")).toBe(true);
    expect(report.findingsList.some((finding) => finding.code === "thin-conviction" || finding.code === "stale-signal")).toBe(true);
  });

  it("rolls up savings relevance", () => {
    const report = analyze(sampleTimingSignalIndex, { now: "2026-05-31T18:20:00Z" });
    expect(report.savingsRelevanceUsd).toBeGreaterThan(0);
  });
});
