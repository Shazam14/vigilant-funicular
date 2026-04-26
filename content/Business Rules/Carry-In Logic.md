---
title: Carry-In Logic
tags: [business-rules, inventory]
---

# Carry-In Logic

The carry-in is the **opening position** for each currency at the start of a new day — it's the closing position from the previous day.

## How It's Determined

```
Today's Carry-In = Yesterday's Closing Position
Closing Position = Carry-In + Bought - Sold
```

## Carry-In Rate

The carry-in rate is the **weighted average cost** of the carry-in stock. It carries over from the previous day's `carry_in_rate`.

Rate precision matters:
- JPY carry-in rate uses more decimal places (e.g., `0.3707`) than USD
- The [[Features/Stock Summary|stock summary]] rounds weighted avg cost to match this precision

## First Day / New Currency

If a currency has no prior position:
- Carry-in quantity = 0
- Carry-in rate = 0 (or fallback seed rate)

## Important Rules

- Carry-in is **read-only** — it's set from prior day's close, never manually edited
- Double-counting carry-in is a common seeding mistake — each day's carry-in should only be sourced once
- The [[Features/Date Override|date override]] system ensures backdated days chain carry-ins correctly

## Related

- [[Business Rules/THAN Calculation]]
- [[Business Rules/Averaging]]
- [[Data/Daily Positions]]
- [[Features/Stock Summary]]
