import type { Finding, TimingSignal, TimingSignalExport, TimingSignalReport } from "./types.js";

function finding(
  item: TimingSignal,
  code: Finding["code"],
  severity: Finding["severity"],
  message: string
): Finding {
  return {
    code,
    severity,
    message,
    sector: item.sector,
    theme: item.theme
  };
}

function evaluate(item: TimingSignal): Finding[] {
  const findings: Finding[] = [];

  if (item.evidenceState !== "CURRENT") {
    findings.push(
      finding(
        item,
        "stale-signal",
        item.evidenceState === "MISSING" ? "high" : "medium",
        "Signal freshness is weak, so this timing window should not be treated as board-ready until evidence is refreshed."
      )
    );
  }

  if (item.pressureScore >= 80) {
    findings.push(
      finding(
        item,
        "high-pressure",
        "high",
        "Timing pressure is high enough that leadership should decide whether to act now or miss the window."
      )
    );
  }

  if (item.convictionScore < 68) {
    findings.push(
      finding(
        item,
        "thin-conviction",
        "medium",
        "The signal is directionally interesting, but conviction is still too thin for aggressive positioning."
      )
    );
  }

  if (item.boardRelevanceScore >= 78 && item.timingBand === "ACT_NOW") {
    findings.push(
      finding(
        item,
        "board-ready",
        "high",
        "This signal is strong enough to support the next board or investor discussion."
      )
    );
  }

  if (item.evidenceState === "CURRENT" && item.convictionScore < 60) {
    findings.push(
      finding(
        item,
        "weak-evidence",
        "low",
        "Evidence exists, but the narrative still needs stronger market validation."
      )
    );
  }

  return findings;
}

export function analyze(signals: TimingSignal[], options: { now?: string } = {}): TimingSignalReport {
  const generatedAt = options.now ?? new Date().toISOString();
  const findingsList = signals.flatMap(evaluate);
  const count = signals.length;
  const averagePressure = Math.round(signals.reduce((sum, item) => sum + item.pressureScore, 0) / count);
  const averageConviction = Math.round(signals.reduce((sum, item) => sum + item.convictionScore, 0) / count);
  const boardReadySignals = signals.filter((item) => item.timingBand === "ACT_NOW" && item.boardRelevanceScore >= 78).length;
  const staleSignals = signals.filter((item) => item.evidenceState !== "CURRENT").length;
  const savingsRelevanceUsd = signals.reduce((sum, item) => sum + item.savingsRelevanceUsd, 0);
  const highFindings = findingsList.filter((item) => item.severity === "high").length;
  const penalty = staleSignals * 4 + highFindings * 2;

  return {
    generatedAt,
    signals: count,
    averagePressure,
    averageConviction,
    boardReadySignals,
    staleSignals,
    savingsRelevanceUsd,
    findingsList,
    ok: averageConviction >= 70 && penalty < 24
  };
}

export function toExport(signals: TimingSignal[], now?: string): TimingSignalExport {
  return {
    generatedAt: now ?? new Date().toISOString(),
    signals
  };
}
