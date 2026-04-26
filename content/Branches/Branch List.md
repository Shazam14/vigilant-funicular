---
title: Branch List
tags: [branches]
---

# Branch List

Kedco FX operates across **9 branches** in Cebu, Philippines.

| Code | Name | Address |
|------|------|---------|
| **MAIN** | Main | ML Quezon National Highway, Pusok, Lapu Lapu City, Cebu |
| **CTS** | CTS | A-218 City Timesquare, Mantawe Ave., Mandaue City, Cebu |
| **BAI** | Bai | Bai Hotel, Piano Avenue COR C.D. Seno St., Mantuyong, Mandaue City |
| **SM** | SM | Gspot Food Park, Kaohsiung St., Mabolo, Cebu City |
| **GOLD** | Gold | Sitio Seabreeze, Pusok, Lapu-Lapu City |
| **JMALL** | Jmall | V. Albino St. Bakilid, Mandaue City, Cebu |
| **ESY2** | ESY 2 | ML Quezon National Highway, Pusok, Lapu Lapu City, Cebu |
| **DATAG** | Monekat Datag | Maribago, City of Lapu-Lapu, Cebu |
| **MOBO** | Monekat Mobo | Basdiot, Moalboal, Cebu |

## Branch in the System

Each branch has a unique `branch_id` code (e.g. `MAIN`, `CTS`). This is stored in:
- Device `localStorage` as `kedco_branch` (set once per device via modal)
- Stamped on every [[Features/Currency Exchange|transaction]] and [[Features/Shift Management|shift]]
- Shown on [[Features/Transaction Log|receipts]] alongside the branch address

## Terminals per Branch

Each branch can have up to 5 device types (see [[Features/Terminal & Branch Select]]):
- Counter 1, Counter 2, Counter 3
- Rider Phone
- Supervisor Tablet

## Related

- [[Features/Terminal & Branch Select]]
- [[Features/Shift Management]]
- [[Roles/Admin]]
