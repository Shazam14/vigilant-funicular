---
title: Shift Management
tags: [feature, operations]
---

# Shift Management

Shifts are the core operational unit in Kedco FX. Every transaction belongs to a shift, and every shift belongs to a [[Roles/Cashier|cashier]] at a specific [[Branches/Branch List|branch]].

## Shift Lifecycle

```
Open Shift → Transactions → (Replenishment?) → Close Shift → EOD Report
```

### Opening a Shift
- Cashier selects their [[Features/Terminal & Branch Select|terminal and branch]]
- System records opening float (cash on hand)
- Date is set from [[Features/Date Override|active date]]

### During a Shift
- Cashier processes [[Features/Currency Exchange|buy/sell transactions]]
- [[Roles/Rider|Riders]] can collect or deliver currency mid-shift
- [[Features/Replenishment|Replenishment]] can be triggered if PHP runs low

### Closing a Shift
- Cashier submits closing float
- System calculates variance (expected vs actual cash)
- Shift is locked — no further edits
- Data feeds into [[Features/EOD Reports|EOD Report]]

## Shift Data

Each shift records:
- `branch_id` — which [[Branches/Branch List|branch]]
- `terminal_id` — which counter (Counter 1–3, Rider Phone, Supervisor Tablet)
- `cashier_id` — which [[Roles/Cashier|cashier]]
- Opening and closing float
- All linked [[Features/Transaction Log|transactions]]

## Related

- [[Roles/Cashier]]
- [[Features/Replenishment]]
- [[Features/EOD Reports]]
- [[Features/Terminal & Branch Select]]
