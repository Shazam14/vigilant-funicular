---
title: Testing
tags: [tech-stack, testing]
---

# Testing

Kedco FX uses two test layers: Playwright for E2E and pytest for unit/integration tests.

## Playwright (E2E)

- Tests the full [[Tech Stack/Frontend|frontend]] flow in a real browser
- Uses `page.route()` for mocking API responses (not `resetMockState()`)
- Always mocks shift and edit-requests
- Uses camelCase in transaction intercepts
- Covers: login, shift open/close, transaction flow, branch/terminal modal

## pytest (Unit + Integration)

- Tests [[Tech Stack/Backend|API]] logic, business rules, seeder scripts
- Covers: [[Business Rules/THAN Calculation|THAN calculation]], [[Business Rules/Carry-In Logic|carry-in logic]], [[Business Rules/Averaging|averaging]]

## Demo Users

- `admintest`, `cashiertest`, `ridertest`, `devtest` exist in real DB
- Fixed passwords, `is_demo = true`
- Excluded from [[Features/EOD Reports|EOD reports]] — safe to use in tests without polluting real data

## Related

- [[Tech Stack/Frontend]]
- [[Tech Stack/Backend]]
- [[Roles/Dev]]
