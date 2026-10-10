# NoteHub — GoIT HW07

A Next.js application for viewing, searching, creating, and deleting personal notes.

## Features

- Notes list with search, pagination, and note creation
- Tag filters in a parallel sidebar and a validated catch-all route
- Note deletion, canonical detail pages, and intercepted note previews
- Server-side data prefetching and client-side TanStack Query hydration
- Loading and error states for note pages

## Technologies

- Next.js
- React
- TypeScript
- TanStack Query
- Axios
- Formik and Yup
- CSS Modules

## Getting Started

### Installation

```bash
npm install
```

### Environment variables

Create `.env.local` and set:

```env
NEXT_PUBLIC_NOTEHUB_TOKEN=
```

### Development

```bash
npm run dev
```

## Routes

- `/` — welcome page
- `/notes/filter/all` — all notes (the API receives no tag)
- `/notes/filter/Todo`, `/notes/filter/Work`, `/notes/filter/Personal`,
  `/notes/filter/Meeting`, `/notes/filter/Shopping` — filtered notes
- `/notes/[id]` — note details

Soft navigation from a list opens `app/@modal/(.)notes/[id]` over that list.
Closing the shared modal uses `router.back()`, preserving the originating filter,
search, and page. Direct navigation or reload renders the full detail page.
Unknown routes and invalid filters use the custom 404 page.

## Implementation

Based on the accepted HW06 `main` commit
`fd9381a770cb40a39fec8b467b47595f518a6ce4` from
[TempPolarBear/06_notehub_nextjs](https://github.com/TempPolarBear/06_notehub_nextjs).
Next.js remains at `16.3.8`.

Server prefetch and client queries share the key
`['notes', page, perPage, search, tag]` and hydrate through `HydrationBoundary`.
Search is debounced by 350 ms and resets pagination. Changing the tag remounts
the list state. Creation and deletion invalidate all notes queries.

CSS Modules come from the official
[GoIT hw-07 branch](https://github.com/goitacademy/react-notehub-styles/tree/hw-07).
The branch does not provide a separate 404 stylesheet, so that page reuses its
Home styles in a dedicated CSS Module. See `STYLES-LICENSE`.

## Validation

```bash
npm run lint
npm run build
npm run format:check
git diff --check
```

Set `NEXT_PUBLIC_NOTEHUB_TOKEN` in Vercel Production and Preview before deploying.
Keep `.env.local`, `.next`, `node_modules`, and `.vercel` out of Git.
