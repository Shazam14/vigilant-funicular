---
title: THAN Calculation
tags: [business-rules, profit]
---

# THAN Calculation

THAN is Kedco's core **profit metric** per currency per day. It represents the gain made from buying foreign currency cheap and selling it at a higher PHP rate.

## Formula

```
THAN = (Sold × Sell Rate) - (Sold × Weighted Avg Cost Rate)
```

Where:
- **Sold** = total foreign currency units sold today
- **Sell Rate** = rate at which currency was sold to customers
- **Weighted Avg Cost Rate** = [[Business Rules/Averaging|average cost]] of acquiring that currency

## Key Rules

- THAN is only calculated on **sold** units — you don't realize profit on unsold stock
- Fully-sold currencies (closing position = 0) use a **seeder fallback** for the avg cost rate to avoid division errors
- THAN resets to zero each day — it's a daily metric

## Example

```
USD bought: 1,000 @ ₱55.00 avg cost
USD sold:     800 @ ₱56.50

THAN = (800 × 56.50) - (800 × 55.00)
     = ₱45,200 - ₱44,000
     = ₱1,200
```

## Related

- [[Business Rules/Averaging]]
- [[Business Rules/Carry-In Logic]]
- [[Features/Stock Summary]]
- [[Features/EOD Reports]]
- [[Data/Daily Positions]]
