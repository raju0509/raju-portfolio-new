# Raju Jilla Portfolio — V2

V2 keeps the existing React + Flask + PostgreSQL + Docker architecture and refreshes the frontend visual system with brighter blue/cyan accents, richer cards, stronger contrast, and a corrected DevOps delivery flow.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

If `node_modules` was copied from another OS/environment, remove it first:

```bash
rm -rf node_modules
npm install
npm run build
```

The frontend continues to use the existing Flask API endpoints under `/api`.
