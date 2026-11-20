# Nexora HQ

A role-based digital work and approval web app.

## Stack

- Next.js
- TypeScript
- Prisma
- SQLite for local development
- Supabase PostgreSQL for production
- Password authentication
- Mock AI Manager reviews

## Approval Flow

Department Head submits work → AI Manager reviews → CEO approves decisions, spending, and deployments.

## Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and configure `DATABASE_URL`.

## Status

Initial repository scaffold.
