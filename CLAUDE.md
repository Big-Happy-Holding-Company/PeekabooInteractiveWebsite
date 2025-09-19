# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Every file you create or edit should start with:
 * 
 * Author: {your model name}  (Example: Claude Code using claude-sonnet-4-20250514)
 * Date: `timestamp`
 * PURPOSE: VERBOSE DETAILS ABOUT HOW THIS WORKS AND WHAT ELSE IT TOUCHES
 * SRP and DRY check: Pass/Fail Is this file violating either? Do these things already exist in the project?  Did you look??
 
## Common Commands
You need to Git add and commit any changes you make to the codebase.  Be detailed in your commit messages.

**Project structure:**
- `client/src/` - React frontend application
  - `pages/` - Route components (home, apps, privacy, etc.)
  - `components/` - Reusable UI components
  - `components/ui/` - shadcn/ui component library
  - `lib/` - Frontend utilities and query client
- `server/` - Express.js backend  TODO: remove this
  - `index.ts` - Main server entry point
  - `routes.ts` - API route definitions
  - `storage.ts` - Database operations
  - `vite.ts` - Vite integration for development
- `shared/` - Code shared between client and server
  - `schema.ts` - Drizzle database schema and Zod validation
