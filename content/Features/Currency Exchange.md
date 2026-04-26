---
title: Currency Exchange
tags: [feature, transactions]
---

# Currency Exchange

The core operation of Kedco FX — buying and selling foreign currencies for Philippine Pesos (PHP).

## Transaction Types

| Type | Description |
|------|-------------|
| **BUY** | Kedco buys foreign currency from customer (customer gives USD, gets PHP) |
| **SELL** | Kedco sells foreign currency to customer (customer gives PHP, gets USD) |

## Currencies Handled

Common currencies include USD, EUR, JPY, AUD, GBP, HKD, SGD, CAD, CHF, and others depending on the branch.

## How a Transaction Works

1. [[Roles/Cashier|Cashier]] selects currency and transaction type
2. Enters amount and rate
3. System calculates PHP equivalent
4. Transaction is stamped with:
   - `branch_id` — [[Branches/Branch List|branch]]
   - `terminal_id` — [[Features/Terminal & Branch Select|terminal]]
   - `shift_id` — active [[Features/Shift Management|shift]]
   - Timestamp

## Rate & Averaging

- Each currency has a **buy rate** and **sell rate**
- The [[Business Rules/Averaging|weighted average cost]] is tracked across the day
- This feeds into [[Business Rules/THAN Calculation|THAN]] at EOD

## Related

- [[Business Rules/THAN Calculation]]
- [[Business Rules/Averaging]]
- [[Features/Transaction Log]]
- [[Features/Shift Management]]
- [[Data/Stock Summary]]
