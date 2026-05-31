import { describe, expect, it } from "vitest";
import { boardPressure, payload, priorityBands, riskMap, signalLane, summary, verification, windowMap } from "./verticalBriefService.js";

describe("timing signal index service", () => {
  it("returns an executive summary", () => {
    expect(summary().signals).toBeGreaterThan(0);
  });

  it("returns the signal lane", () => {
    expect(signalLane()[0]?.theme).toBeTruthy();
  });

  it("returns the window map", () => {
    expect(windowMap()[0]?.timingWindow).toBeTruthy();
  });

  it("returns board pressure entries", () => {
    expect(boardPressure()[0]?.boardStory).toBeTruthy();
  });

  it("returns priority bands", () => {
    expect(priorityBands()[0]?.savingsRelevanceUsd).toBeGreaterThan(0);
  });

  it("returns the risk map", () => {
    expect(riskMap().length).toBeGreaterThan(0);
  });

  it("returns verification notes", () => {
    expect(verification().length).toBeGreaterThan(0);
    expect(payload().verification.length).toBeGreaterThan(0);
  });
});
