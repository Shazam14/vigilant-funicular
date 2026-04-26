---
title: Frontend
tags: [tech-stack]
---

# Frontend

The Kedco FX frontend is a **Next.js** app (React) deployed on Vercel.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Charts | Recharts (AreaChart for capital trend) |
| Auth | JWT via HTTP-only cookies |
| Testing | Playwright E2E |

## Key Shells

- **CounterShell** — Main cashier interface; handles [[Features/Terminal & Branch Select|branch + terminal selection]], [[Features/Shift Management|shift management]], [[Features/Currency Exchange|transactions]]
- **RiderShell** — Rider interface; branch modal, pickup/delivery
- **AdminShell** — Admin dashboard, [[Features/EOD Reports|EOD reports]], [[Features/Transaction Log|transaction log]]

## State

- Branch and terminal stored in `localStorage`
- Auth state via JWT cookie
- No global state manager — server components + fetch

## Domain

- Production: `kedcoforex.com`
- Wiki: `wiki.kedcoforex.com` (this site)

## Related

- [[Tech Stack/Backend]]
- [[Tech Stack/Testing]]
- [[Tech Stack/Deployment]]
