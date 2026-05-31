import express from "express";
import {
  renderBoardPressure,
  renderDocs,
  renderOverview,
  renderPriorityBands,
  renderSample,
  renderSignalLane,
  renderVerification,
  renderWindowMap
} from "./services/render.js";
import {
  boardPressure,
  payload,
  priorityBands,
  riskMap,
  signalLane,
  summary,
  verification,
  windowMap
} from "./services/verticalBriefService.js";

export function createApp() {
  const app = express();

  app.get("/", (_req, res) => res.type("html").send(renderOverview()));
  app.get("/signal-lane", (_req, res) => res.type("html").send(renderSignalLane()));
  app.get("/window-map", (_req, res) => res.type("html").send(renderWindowMap()));
  app.get("/board-pressure", (_req, res) => res.type("html").send(renderBoardPressure()));
  app.get("/priority-bands", (_req, res) => res.type("html").send(renderPriorityBands()));
  app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
  app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

  app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
  app.get("/api/signal-lane", (_req, res) => res.json(signalLane()));
  app.get("/api/window-map", (_req, res) => res.json(windowMap()));
  app.get("/api/board-pressure", (_req, res) => res.json(boardPressure()));
  app.get("/api/priority-bands", (_req, res) => res.json(priorityBands()));
  app.get("/api/risk-map", (_req, res) => res.json(riskMap()));
  app.get("/api/verification", (_req, res) => res.json(verification()));
  app.get("/api/sample", (_req, res) => res.type("application/json").send(renderSample()));
  app.get("/api/payload", (_req, res) => res.json(payload()));

  return app;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT ?? "3000");
  createApp().listen(port, () => {
    console.log(`timing-signal-index listening on http://127.0.0.1:${port}`);
  });
}
