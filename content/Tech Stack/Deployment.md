---
title: Deployment
tags: [tech-stack, deployment]
---

# Deployment

## Frontend — Vercel

- [[Tech Stack/Frontend|Next.js app]] deployed to Vercel
- Domain: `kedcoforex.com`
- Auto-deploys from `main` branch
- Build requires full PATH (nvm node) to compile correctly

## API — VPS (systemd)

- [[Tech Stack/Backend|FastAPI]] runs as a systemd service
- Restart: `systemctl restart kedco-api`
- Port configured via environment
- The VPS **is** the server — DB queries and restarts can be run directly

## Wiki — Vercel

- This Quartz site deployed to Vercel
- Domain: `wiki.kedcoforex.com`
- Repo: `github.com/Shazam14/vigilant-funicular`

## Git Workflow

- Always commit to `dev` first, never directly to `main`
- Push with `GIT_SSH_COMMAND` for key-based auth
- `main` = production

## Related

- [[Tech Stack/Frontend]]
- [[Tech Stack/Backend]]
- [[Tech Stack/Database]]
