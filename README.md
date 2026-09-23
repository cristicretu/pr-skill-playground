# pr-skill-playground

A tiny Next.js shop used to test PR-writing skills. Run it with `pnpm i && pnpm dev`.

- `/` product grid with a cart drawer
- `/orders` recent orders (server-rendered), also at `GET /api/orders`
- `lib/db.ts` fakes a database: every query is a 15 ms round trip
