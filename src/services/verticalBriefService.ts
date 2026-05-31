import { analyze } from "../analyze.js";
import { sampleTimingSignalIndex } from "../data/sampleVerticalBrief.js";

const report = analyze(sampleTimingSignalIndex, { now: "2026-05-31T18:20:00Z" });

export function summary() {
  const highFindings = report.findingsList.filter((item) => item.severity === "high").length;
  return {
    signals: report.signals,
    averagePressure: report.averagePressure,
    averageConviction: report.averageConviction,
    boardReadySignals: report.boardReadySignals,
    staleSignals: report.staleSignals,
    savingsRelevanceUsd: report.savingsRelevanceUsd,
    highFindings,
    recommendation:
      "Act now on AI governance, platform margin, FinTech, and the board-intelligence meta-story; keep biotech as the strongest prepared follow-on."
  };
}

export function signalLane() {
  return sampleTimingSignalIndex.map((item) => ({
    theme: item.theme,
    targetBuyer: item.targetBuyer,
    timingBand: item.timingBand,
    pressureScore: item.pressureScore,
    convictionScore: item.convictionScore,
    signalSummary: item.signalSummary,
    nextRead: item.nextRead
  }));
}

export function windowMap() {
  return sampleTimingSignalIndex.map((item) => ({
    theme: item.theme,
    timingWindow: item.timingWindow,
    evidenceState: item.evidenceState,
    boardRelevanceScore: item.boardRelevanceScore,
    companyTags: item.companyTags,
    relatedSurfaces: item.relatedSurfaces
  }));
}

export function boardPressure() {
  return sampleTimingSignalIndex.map((item) => ({
    theme: item.theme,
    targetBuyer: item.targetBuyer,
    boardStory: item.boardStory,
    pressureScore: item.pressureScore,
    convictionScore: item.convictionScore
  }));
}

export function priorityBands() {
  return sampleTimingSignalIndex.map((item) => ({
    theme: item.theme,
    timingBand: item.timingBand,
    savingsRelevanceUsd: item.savingsRelevanceUsd,
    nextRead: item.nextRead
  }));
}

export function riskMap() {
  const order = { high: 0, medium: 1, low: 2, info: 3 } as const;
  return report.findingsList.sort((a, b) => order[a.severity] - order[b.severity] || a.code.localeCompare(b.code));
}

export function verification() {
  return [
    "Synthetic signal data only - no live CRM, investor, or market-feed records are included.",
    "Pressure, conviction, board relevance, and savings relevance values are modeled from the sample signal set in this repo.",
    "This surface is read-only and designed to show how the executive-intelligence estate can become a recurring timing index.",
    "Company tags and related surfaces are synthetic decision aids rather than audited market datasets.",
    "Every route and packet is reproducible from the included sample export."
  ];
}

export function payload() {
  return {
    generatedAt: report.generatedAt,
    summary: summary(),
    signalLane: signalLane(),
    windowMap: windowMap(),
    boardPressure: boardPressure(),
    priorityBands: priorityBands(),
    riskMap: riskMap(),
    verification: verification(),
    sample: sampleTimingSignalIndex
  };
}
