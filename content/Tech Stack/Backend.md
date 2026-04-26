---
title: Backend
tags: [tech-stack]
---

# Backend

The Kedco FX API is built with **FastAPI** (Python), running as a systemd service.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | FastAPI |
| Language | Python |
| ORM | SQLAlchemy |
| Auth | JWT (python-jose) |
| Rate Limiting | slowapi (5 req/min on login) |
| Server | uvicorn behind nginx |

## Key Responsibilities

- Serve all transaction, shift, and EOD data to the [[Tech Stack/Frontend|frontend]]
- Compute [[Features/Stock Summary|stock summary]] and [[Business Rules/THAN Calculation|THAN]] server-side
- Handle [[Features/Date Override|date override]] via `mock_date.txt`
- Enforce role-based access ([[Roles/Admin|admin]], [[Roles/Cashier|cashier]], [[Roles/Rider|rider]], [[Roles/Dev|dev]])

## Deployment

- Runs as a `systemd` service on the VPS
- Port managed via environment config
- Restarted via `systemctl restart kedco-api`

## Security

- Rate limiting on login endpoint
- Idle session timeout (frontend + JWT expiry)
- JWT revocation: pending

## Related

- [[Tech Stack/Database]]
- [[Tech Stack/Frontend]]
- [[Tech Stack/Deployment]]
