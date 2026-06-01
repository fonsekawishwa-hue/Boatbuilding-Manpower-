# BY WELISARA Manpower Bank

A modern MVP web app for building a searchable nationwide database of skilled boatyard workers.

## MVP Scope

- Authentication screen scaffold
- Worker profiles
- Profession categories
- District/location filtering
- Searchable worker directory
- Admin dashboard
- Worker availability and active/retired status
- Contact details with call and WhatsApp actions
- Map preview from worker coordinates
- Sri Lanka map with town-based worker pins
- Google Maps links and embedded exact worker map on profile
- Basic analytics dashboard
- Printable all-workers summary/status report for PDF export
- Prisma/PostgreSQL schema for the production database

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Database

Copy `.env.example` to `.env` and set `DATABASE_URL`, then run:

```bash
npm run prisma:generate
npm run prisma:migrate
```

The current UI uses sample data from `lib/data.ts` so the MVP can be previewed before wiring database CRUD.

## Next Build Phase

1. Connect Auth.js credentials provider.
2. Replace mock worker data with Prisma queries.
3. Implement POST/PATCH APIs for worker create/edit.
4. Resolve coordinates from town selection before saving workers.
5. Add seed script for Sri Lankan districts, towns, professions, and admin user.
6. Add production map provider, preferably Google Maps or Leaflet with OpenStreetMap.
