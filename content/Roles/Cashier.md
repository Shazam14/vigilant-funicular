---
title: Cashier
tags: [roles]
---

# Cashier

Cashiers are the front-line operators of Kedco FX. They process all foreign exchange transactions.

## Responsibilities

- Open and close [[Features/Shift Management|shifts]]
- Process [[Features/Currency Exchange|buy/sell transactions]]
- Manage cash float (opening and closing)
- Handle [[Features/Replenishment|replenishments]] when PHP runs low

## Workflow

```
Login → Select Terminal & Branch → Open Shift → Transact → Close Shift
```

## Access

- Own shifts and transactions only
- Cannot view other cashiers' data
- Cannot edit locked (closed) shifts

## Demo User

`cashiertest` — fixed password, `is_demo = true`, excluded from [[Features/EOD Reports|EOD reports]]

## Related

- [[Features/Shift Management]]
- [[Features/Currency Exchange]]
- [[Features/Transaction Log]]
- [[Features/Terminal & Branch Select]]
- [[Roles/Admin]]
