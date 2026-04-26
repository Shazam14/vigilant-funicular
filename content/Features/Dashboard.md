---
title: Dashboard
tags: [feature, overview]
---

# Dashboard

The branch dashboard gives [[Roles/Admin|admins]] a real-time overview of the branch's financial health.

## What's Shown

### PHP Cash
- Live total of PHP cash across all active [[Features/Shift Management|shifts]] and [[Roles/Rider|riders]]
- 30-second cache refresh
- Sources: cashier floats + rider holdings

### Capital Trend
- 14-day area chart of total branch capital
- Pulled from [[Data/Daily Positions|daily_positions]] table
- Shows growth/decline over time

### Currency Positions
- Current stock per currency
- Derived from [[Data/Stock Summary|stock summary]]

### Active Shifts
- Which [[Roles/Cashier|cashiers]] are currently active
- Transactions processed per shift

## Related

- [[Data/Daily Positions]]
- [[Data/Stock Summary]]
- [[Features/Shift Management]]
- [[Roles/Admin]]
