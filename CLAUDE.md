# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (always runs on port 5000)
- `npm run build` - Build for production (builds both client and server)
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes using Drizzle

## Architecture Overview

This is a TypeScript fullstack application with:

### Frontend (client/)
- React 18 with Vite build system
- Wouter for client-side routing
- Tailwind CSS with shadcn/ui components
- TanStack Query for state management
- Framer Motion for animations

### Backend (server/)
- Express.js server that serves both API and static files
- Single-server architecture running on port 5000
- Custom middleware for request logging
- Vite integration for development

### Database
- PostgreSQL with Drizzle ORM
- Schema defined in `shared/schema.ts`
- Database URL configured via environment variable
- Migrations stored in `./migrations/`

### Key File Structure
- `client/src/` - React frontend components and pages
- `server/` - Express server and API routes
- `shared/` - Common schema and utilities
- `attached_assets/` - Static assets accessible via `@assets` alias

## Development Notes

- Server always runs on port 5000 in both development and production
- The server serves both API endpoints (prefixed with `/api`) and the client application
- Vite dev server integration is only enabled in development mode
- Path aliases: `@` maps to `client/src`, `@shared` to `shared/`, `@assets` to `attached_assets/`
- PostgreSQL connection requires `DATABASE_URL` environment variable
- Uses Passport.js for authentication with local strategy

## Database Schema

The application has a simple user authentication system with a `users` table containing:
- `id` (serial primary key)
- `username` (unique text)
- `password` (text)

Schema changes should be made in `shared/schema.ts` and pushed using `npm run db:push`.