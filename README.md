# AI DEATHTOLL

Public, sourced ledger of fatalities linked to AI, automation, and algorithmic systems.

Live after Vercel deploy. Edit `data/toll.json` and push to refresh the counter.

## Rules
- Category spines (NHTSA, KOSHA, compiled chatbot research) set the subcounters.
- Named cases are evidence cards, not extra additions on top of those spines.
- 737 MAX / MCAS is tracked but excluded from the headline unless the visitor toggles it on.
- Linkage is not proven sole causation.

## Daily update
1. Review new NHTSA SGO rows, lawsuits, and conflict reporting.
2. Patch `data/toll.json` (`asOf`, category counts, new case objects).
3. Push to `main`.
