---
title: Date Override
tags: [feature, operations]
---

# Date Override

The date override feature allows the system to operate as if it's a different date. Used primarily for **catch-up backdating** when data entry falls behind.

## How It Works

- A `mock_date.txt` file on the server sets the active date
- When present, all transactions, shifts, and EOD reports use this date
- When absent, the system uses the real current date

## Typical Workflow

```
Set mock_date.txt to "2026-04-01"
→ Enter all April 1 transactions
→ Run EOD for April 1
→ Update mock_date.txt to "2026-04-02"
→ Repeat...
→ Delete mock_date.txt when caught up to today
```

## Files Affected

All key system files check the active date:
- Transaction timestamps
- Shift open/close dates
- [[Data/Daily Positions|daily_positions]] entries
- [[Features/EOD Reports|EOD report]] date references

## Important

- Only one date can be active at a time
- Clearing the file immediately restores real-date mode
- Used carefully — backdating past already-seeded days can cause duplicate entries

## Related

- [[Features/EOD Reports]]
- [[Data/Daily Positions]]
- [[Features/Shift Management]]
