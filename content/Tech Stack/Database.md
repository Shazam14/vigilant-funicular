---
title: Database
tags: [tech-stack]
---

# Database

Kedco FX uses **PostgreSQL** for all persistent data.

## Key Tables

| Table | Description |
|-------|-------------|
| `transactions` | Every [[Features/Currency Exchange|buy/sell transaction]] |
| `teller_shifts` | [[Features/Shift Management|Shift]] records per cashier |
| `daily_positions` | [[Data/Daily Positions|End-of-day positions]] per currency |
| `users` | All system users with roles |
| `branches` | [[Branches/Branch List|Branch]] reference data |

## Columns of Note

- `branch_id` — on `transactions` + `teller_shifts` (migration `7841469622fd`)
- `terminal_id` — device identifier per transaction/shift
- `is_demo` — flags demo users excluded from [[Features/EOD Reports|EOD reports]]

## Migrations

Managed via Alembic. Migration files in the API repo.

## Related

- [[Tech Stack/Backend]]
- [[Data/Daily Positions]]
- [[Data/Stock Summary]]
