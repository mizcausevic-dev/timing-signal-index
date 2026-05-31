export type SignalSector =
  | "AI_PLATFORM"
  | "CLOUD_IDENTITY"
  | "FINTECH"
  | "BIOTECH_DIAGNOSTICS"
  | "NONPROFIT_FOUNDATION"
  | "PROPTECH"
  | "ROBOTICS"
  | "EXECUTIVE_INTELLIGENCE";

export type EvidenceState = "CURRENT" | "STALE" | "MISSING";
export type TimingBand = "ACT_NOW" | "PREPARE" | "WATCH";

export interface TimingSignal {
  id: string;
  theme: string;
  sector: SignalSector;
  targetBuyer: string;
  timingWindow: string;
  timingBand: TimingBand;
  pressureScore: number;
  convictionScore: number;
  savingsRelevanceUsd: number;
  boardRelevanceScore: number;
  evidenceState: EvidenceState;
  signalSummary: string;
  boardStory: string;
  nextRead: string;
  companyTags: string[];
  relatedSurfaces: string[];
}

export interface TimingSignalExport {
  generatedAt: string;
  signals: TimingSignal[];
}

export type FindingCode =
  | "stale-signal"
  | "high-pressure"
  | "thin-conviction"
  | "board-ready"
  | "weak-evidence";

export interface Finding {
  code: FindingCode;
  severity: "high" | "medium" | "low" | "info";
  message: string;
  sector: SignalSector;
  theme: string;
}

export interface TimingSignalReport {
  generatedAt: string;
  signals: number;
  averagePressure: number;
  averageConviction: number;
  boardReadySignals: number;
  staleSignals: number;
  savingsRelevanceUsd: number;
  findingsList: Finding[];
  ok: boolean;
}
