---
title: Replenishment
tags: [feature, operations]
---

# Replenishment

A replenishment is an **operational PHP top-up within a shift** — not new capital injection.

## What It Is

When a [[Roles/Cashier|cashier]] runs low on PHP cash mid-shift, a replenishment transfers additional PHP to keep operations running. This is distinct from capital changes.

## Why It Matters

- Replenishments must be tracked separately to keep **variance honest**
- If treated as income, it distorts the [[Business Rules/THAN Calculation|THAN]] and float calculations
- The closing variance check compares: `(opening float + replenishments + sales) - purchases` vs actual cash

## Who Triggers It

- [[Roles/Admin|Admin]] or supervisor authorizes
- [[Roles/Rider|Rider]] may physically carry the PHP between locations

## Related

- [[Features/Shift Management]]
- [[Roles/Rider]]
- [[Roles/Admin]]
- [[Business Rules/THAN Calculation]]
