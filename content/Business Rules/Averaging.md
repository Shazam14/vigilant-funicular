---
title: Averaging
tags: [business-rules, rates]
---

# Averaging (Weighted Average Cost)

The weighted average cost rate is how Kedco tracks the **true cost** of its currency inventory across multiple purchases at different rates.

## Formula

```
Weighted Avg Rate = Total PHP Spent / Total Units Held

Total PHP Spent = (Carry-In Qty × Carry-In Rate) + Σ(Each Purchase × Its Rate)
Total Units Held = Carry-In Qty + Total Bought
```

## Why It Matters

Without averaging, you can't know the true profit on a sale. If you bought 500 USD at ₱55 and another 500 at ₱56, your avg cost is ₱55.50. Selling at ₱57 gives ₱1.50 profit per unit — not ₱2.00 or ₱1.00.

## Rate Precision

- The result rounds to the **same decimal precision as the carry-in rate** for that currency
- This is not a blanket rule — it follows the carry-in rate's own precision
- Example: if carry-in rate is `0.3707` (4 decimal places), avg cost is also 4 decimal places

## Fully-Sold Currencies

When closing position = 0 (all units sold):
- Standard averaging would divide by zero or produce noise
- The system uses a **seeder fallback rate** to avoid this edge case
- This affects [[Business Rules/THAN Calculation|THAN]] accuracy for those currencies

## Related

- [[Business Rules/THAN Calculation]]
- [[Business Rules/Carry-In Logic]]
- [[Features/Stock Summary]]
