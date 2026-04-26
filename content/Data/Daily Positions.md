---
title: Daily Positions
tags: [data, reporting]
---

# Daily Positions

The `daily_positions` table stores the **end-of-day snapshot** for each currency at each branch. It's the backbone of historical reporting and day-to-day carry-in calculation.

## What's Stored Per Row

| Field | Description |
|-------|-------------|
| `date` | The trading date |
| `branch_id` | Which [[Branches/Branch List|branch]] |
| `currency` | Currency code |
| `carry_in_qty` | Opening stock from prior day |
| `carry_in_rate` | Avg cost of carry-in stock |
| `bought_qty` | Total purchased today |
| `sold_qty` | Total sold today |
| `closing_qty` | `carry_in + bought - sold` |
| `closing_rate` | Weighted avg cost at close |
| `than` | [[Business Rules/THAN Calculation|Profit]] for the day |

## How It's Used

- Tomorrow's [[Business Rules/Carry-In Logic|carry-in]] reads today's `closing_qty` and `closing_rate`
- The [[Features/Dashboard|dashboard]] capital trend chart reads 14 days of history
- [[Features/EOD Reports|EOD reports]] are generated from this table

## Historical Seeding

Daily positions have been seeded from March 31, 2026 onward. Seeding uses the same business rules as live operations to ensure consistency.

## Related

- [[Business Rules/Carry-In Logic]]
- [[Business Rules/THAN Calculation]]
- [[Data/Stock Summary]]
- [[Features/EOD Reports]]
- [[Features/Dashboard]]
