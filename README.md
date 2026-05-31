# Timing Signal Index

Recurring signal index for timing windows, board pressure, savings relevance, conviction, and next-read sequencing across the Kinetic Gain executive-intelligence estate.

- Live: `http://timing.kineticgain.com/`
- Status: `v0.1-shipped`

## What it does

- signal lane covering theme, target buyer, timing band, and next read
- window map tying pressure, conviction, and savings relevance to recurring market signals
- board-pressure layer showing which themes are strongest for the next memo
- priority-band view rolling signals into `act now`, `prepare`, and `watch` clusters
- reproducible CLI and static site from the same sample signal export

## Local run

```powershell
cd timing-signal-index
npm install
npm run verify
npm run prerender
```

Then open:

- `/`
- `/signal-lane`
- `/window-map`
- `/board-pressure`
- `/priority-bands`
- `/verification`
- `/docs`

## CLI

```powershell
npx timing-signal-index fixtures/timing-signal-index.json --format summary
npx timing-signal-index fixtures/timing-signal-index-clean.json --format json
```

## Notes

- synthetic sample data only
- signal timing and pressure values are modeled, not live CRM or market feeds
- footer links point to GitHub, LinkedIn, and Kinetic Gain
