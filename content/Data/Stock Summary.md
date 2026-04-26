---
title: Stock Summary
tags: [data, inventory]
---

# Stock Summary

The stock summary is the **intraday real-time view** of all currency inventory. Unlike [[Data/Daily Positions|daily positions]] (which are end-of-day snapshots), the stock summary reflects the current state at any point during the day.

## How It's Built

- Computed entirely by the [[Tech Stack/Backend|API]] from live transactions + carry-in data
- The [[Tech Stack/Frontend|frontend]] receives the pre-computed result — it does **not** rebuild it client-side
- Refreshes on each request (no stale cache issues)

## Columns

| Column | Description |
|--------|-------------|
| Currency | Code (USD, EUR, JPY, etc.) |
| Carry-In Qty | From [[Business Rules/Carry-In Logic|carry-in]] |
| Carry-In Rate | Avg cost of opening stock |
| Bought | Purchased today so far |
| Sold | Sold today so far |
| Closing | Current stock on hand |
| Avg Cost Rate | [[Business Rules/Averaging|Weighted average cost]] |
| THAN | Running [[Business Rules/THAN Calculation|profit]] |

## Rate Precision

Avg cost rate precision matches the carry-in rate's own decimal places — not a global setting. Resolved a JPY discrepancy (`0.371` vs `0.3707`) that showed up in Ken's Excel comparisons.

## Related

- [[Business Rules/Averaging]]
- [[Business Rules/THAN Calculation]]
- [[Business Rules/Carry-In Logic]]
- [[Data/Daily Positions]]
- [[Features/Stock Summary]]
