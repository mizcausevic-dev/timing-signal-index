import type { TimingSignalReport } from "./types.js";

export function formatSummary(report: TimingSignalReport) {
  return [
    `generatedAt: ${report.generatedAt}`,
    `signals: ${report.signals}`,
    `averagePressure: ${report.averagePressure}`,
    `averageConviction: ${report.averageConviction}`,
    `boardReadySignals: ${report.boardReadySignals}`,
    `staleSignals: ${report.staleSignals}`,
    `savingsRelevanceUsd: ${report.savingsRelevanceUsd}`,
    `findings: ${report.findingsList.length}`,
    `ok: ${report.ok}`
  ].join("\n");
}

export function formatJson(report: TimingSignalReport) {
  return JSON.stringify(report, null, 2);
}
