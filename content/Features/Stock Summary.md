---
title: Stock Summary
tags: [feature, inventory]
---

# Stock Summary

Real-time inventory of all foreign currencies held by the branch.

## Columns

| Column | Description |
|--------|-------------|
| **Currency** | Currency code (USD, EUR, JPY, etc.) |
| **Carry-In** | Opening stock from previous day (see [[Business Rules/Carry-In Logic]]) |
| **Bought** | Total purchased from customers today |
| **Sold** | Total sold to customers today |
| **Closing** | `Carry-In + Bought - Sold` |
| **Avg Cost Rate** | [[Business Rules/Averaging|Weighted average cost]] |
| **THAN** | Profit for this currency (see [[Business Rules/THAN Calculation]]) |

## Rate Precision

- Weighted average cost rounds to the **same decimal precision** as the carry-in rate
- JPY, for example, uses more decimal places than USD

## Data Source

- Computed by the API from transactions + carry-in data
- Frontend receives pre-computed `stock_summary` — does not rebuild it client-side

## Related

- [[Business Rules/Carry-In Logic]]
- [[Business Rules/Averaging]]
- [[Business Rules/THAN Calculation]]
- [[Data/Daily Positions]]
- [[Features/EOD Reports]]
