# NoteHub — GoIT HW08

A Next.js App Router application for browsing, creating, and deleting personal notes.
This project continues the accepted HW07 repository at commit
`8a2aa922fcd1c1d8182ff1619591fbc108a056bf`.

## Features

- Server-prefetched notes with TanStack Query hydration, tag filters, search, and pagination
- Canonical note pages and intercepted modal previews
- Dedicated note creation page at `/notes/action/create`
- Zustand draft persistence in browser localStorage, including after reload or Cancel
- Dynamic page and Open Graph metadata for filters and individual notes
- Custom 404 page and Roboto through `next/font/google`

## Setup

```bash
npm install
```

Set `NEXT_PUBLIC_NOTEHUB_TOKEN` in `.env.local` for local development.
Set the same variable in Vercel Production and Preview for deployment.
Never commit its value.

```bash
npm run dev
```

## Routes

- `/` — welcome page
- `/notes/filter/all` — all notes without an API tag parameter
- `/notes/filter/Todo`, `/notes/filter/Work`, `/notes/filter/Personal`,
  `/notes/filter/Meeting`, `/notes/filter/Shopping` — filtered notes
- `/notes/[id]` — canonical note details
- `/notes/action/create` — native creation form with a persisted draft

Soft navigation to a note opens the interception preview. Direct navigation or
reload shows the full detail page. The shared Modal remains in use for previews.
Canceling creation returns to the previous page and keeps the draft. Successful
creation clears it, invalidates note lists, and redirects to all notes.

CSS Modules are from the official
[GoIT hw-08 branch](https://github.com/goitacademy/react-notehub-styles/tree/hw-08).
The custom 404 stylesheet continues from HW07. See `STYLES-LICENSE`.

## Validation

```bash
npm run lint
npm run build
npm run format:check
git diff --check
```
