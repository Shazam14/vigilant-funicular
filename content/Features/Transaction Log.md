---
title: Transaction Log
tags: [feature, audit]
---

# Transaction Log

A full audit trail of every [[Features/Currency Exchange|buy/sell transaction]] processed in the system.

## What's Logged

Every transaction records:
- Currency, type (BUY/SELL), amount, rate
- PHP equivalent
- `branch_id`, `terminal_id`, `shift_id`
- Cashier and timestamp
- Commission (if applicable)

## Access

- [[Roles/Admin|Admins]] can view all transactions across all branches
- [[Roles/Cashier|Cashiers]] see transactions within their own [[Features/Shift Management|shift]]

## Filtering

Transactions can be filtered by:
- Date / date range
- [[Branches/Branch List|Branch]]
- Currency
- Transaction type

## Immutability

Once a [[Features/Shift Management|shift is closed]], transactions within it are locked. This preserves integrity of [[Features/EOD Reports|EOD reports]] and [[Business Rules/THAN Calculation|THAN calculations]].

## Related

- [[Features/Currency Exchange]]
- [[Features/Shift Management]]
- [[Roles/Admin]]
- [[Roles/Cashier]]
