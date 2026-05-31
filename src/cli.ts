import { readFile } from "node:fs/promises";
import { analyze } from "./analyze.js";
import { formatJson, formatSummary } from "./format.js";
import type { TimingSignal } from "./types.js";

const [, , filePath = "fixtures/timing-signal-index.json", format = "--format", output = "summary"] = process.argv;

if (format !== "--format" || !["summary", "json"].includes(output)) {
  console.error("usage: timing-signal-index <file> --format <summary|json>");
  process.exit(1);
}

const signals = JSON.parse(await readFile(filePath, "utf8")) as TimingSignal[];
const report = analyze(signals);
console.log(output === "json" ? formatJson(report) : formatSummary(report));
