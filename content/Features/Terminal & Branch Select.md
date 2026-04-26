---
title: Terminal & Branch Select
tags: [feature, configuration]
---

# Terminal & Branch Select

Every device running Kedco FX identifies itself with a **terminal ID** and **branch ID**. These are stamped on every transaction and shift.

## Terminal IDs

Stored in `localStorage` as `kedco_terminal`:

| Terminal | Use Case |
|----------|----------|
| Counter 1 | Main cashier counter |
| Counter 2 | Second cashier counter |
| Counter 3 | Third cashier counter |
| Rider Phone | Mobile rider device |
| Supervisor Tablet | Supervisor/float management |

## Branch Selection

Stored in `localStorage` as `kedco_branch`. Selection is done via a two-step modal on first use or when switching branches.

All [[Branches/Branch List|9 branches]] are available.

## How It Works

- On login, if no terminal/branch is set, a setup modal appears
- Selected values persist in localStorage across sessions
- Every [[Features/Currency Exchange|transaction]], [[Features/Shift Management|shift]], and receipt is stamped with both IDs

## Related

- [[Branches/Branch List]]
- [[Features/Shift Management]]
- [[Features/Currency Exchange]]
