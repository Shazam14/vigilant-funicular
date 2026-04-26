---
title: Replenishment Rules
tags: [business-rules, operations, cashier]
---

# Replenishment Rules

Replenishment is an **operational PHP cash top-up within a running shift**. It is not a capital injection — it restores PHP working capital that a cashier needs to continue buying foreign currency from customers.

## Core Rule

> Replenishment = PHP in, no foreign currency received.
> It must be tracked separately and never counted as income.

## Variance Formula

A cashier's closing variance check is:

```
Expected closing cash = opening_float + replenishments + forex_sales_PHP - forex_purchases_PHP
Variance = actual_cash_on_hand - expected_closing_cash
```

If replenishment is missed or double-counted, variance will be wrong — making it appear the cashier is short or over.

## Who Can Authorize

- [[Roles/Admin|Admin]] or supervisor must approve each replenishment
- Only a logged-in authorized user can record one in the system

## Who Physically Carries It

- [[Roles/Rider|Rider]] typically transports the PHP between locations (e.g. Main office → branch cashier)
- The rider's own trip log may record the delivery

## What It Is NOT

| ❌ Not this | ✅ It is this |
|------------|--------------|
| New capital from owners | Operational top-up within a shift |
| Revenue | Cash movement between accounts |
| THAN-relevant | Below-the-line cash management |

## System Behavior

- Recorded as a separate `replenishment` entry linked to the active shift
- Shown on [[Features/Shift Management|shift close]] summary so the expected float is accurate
- Does **not** affect [[Business Rules/THAN Calculation|THAN]] — THAN is purely forex margin

## Related

- [[Features/Replenishment]]
- [[Features/Shift Management]]
- [[Business Rules/THAN Calculation]]
- [[Business Rules/Carry-In Logic]]
- [[Roles/Admin]]
- [[Roles/Rider]]
- [[Roles/Cashier]]
