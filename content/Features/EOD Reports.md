---
title: EOD Reports
tags: [feature, reporting]
---

# EOD Reports

End-of-day reports are generated at the close of each business day. They summarize all currency positions, cash on hand, and profit (THAN) across the [[Branches/Branch List|branch]].

## What's Included

- **Stock Summary** — Opening carry-in, bought, sold, closing position per currency
- **THAN** — Total profit per currency (see [[Business Rules/THAN Calculation]])
- **PHP Cash** — Physical cash in hand after all transactions
- **Shift Summary** — Per-[[Roles/Cashier|cashier]] transaction breakdown

## How It Works

1. [[Roles/Cashier|Cashier]] closes their [[Features/Shift Management|shift]]
2. System calculates [[Business Rules/THAN Calculation|THAN]] for each currency
3. [[Data/Stock Summary|Stock Summary]] is compiled from all transactions
4. Report is available for [[Roles/Admin|admin]] review and export

## Key Rules

- Demo users (`admintest`, `cashiertest`) are **excluded** from EOD reports
- Reports use the [[Features/Date Override|active date]] — not necessarily today
- [[Business Rules/Carry-In Logic|Carry-in]] values roll over from the previous day's closing position

## Related

- [[Business Rules/THAN Calculation]]
- [[Data/Daily Positions]]
- [[Features/Shift Management]]
- [[Roles/Admin]]
