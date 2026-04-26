---
title: Security
tags: [tech-stack, security, auth]
---

# Security

Kedco FX uses a layered security model: JWT-based auth, rate limiting on sensitive endpoints, and session timeout on the frontend.

## Authentication — JWT

| Detail | Value |
|--------|-------|
| Library | `python-jose` |
| Token type | Bearer JWT |
| Expiry | Short-lived access tokens |
| Storage | `localStorage` on client |
| Revocation | Pending (tokens valid until expiry) |

All API routes except `/auth/login` require a valid JWT. The [[Roles/Dev|dev role]] has the widest access; [[Roles/Cashier|cashier]] and [[Roles/Rider|rider]] are restricted to their own shift and transaction data.

## Rate Limiting

Implemented via **slowapi** on the [[Tech Stack/Backend|FastAPI backend]]:

- `POST /auth/login` — **5 requests/minute** per IP
- Prevents brute-force password attacks
- Returns HTTP 429 on breach

## Idle Session Timeout

Implemented on the [[Tech Stack/Frontend|frontend]]:

- Tracks user activity via `mousemove`, `keydown`, `click` events
- Uses `localStorage` for timestamp; `visibilitychange` event handles tab switching
- After idle threshold → force logout + redirect to login page
- Works in tandem with JWT expiry (whichever fires first)

## Pending Hardening

| Item | Status |
|------|--------|
| JWT revocation (denylist/blacklist) | Not yet implemented |
| HTTPS enforcement | Nginx handles TLS termination |
| CORS policy | Configured in FastAPI middleware |
| Input sanitization | Pydantic schemas validate all request bodies |

## Related

- [[Tech Stack/Backend]]
- [[Tech Stack/Frontend]]
- [[Roles/Admin]]
- [[Roles/Dev]]
