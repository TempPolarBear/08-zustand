import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import type { NoteTag } from '@/types/note';
import { NOTES_PER_PAGE, notesQueryOptions } from '@/lib/queries';
import NotesClient from './Notes.client';

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export const dynamic = 'force-dynamic';

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  if (slug.length !== 1) notFound();
  const filter = slug[0];
  let tag: NoteTag | undefined;
  switch (filter) {
    case 'all':
      tag = undefined;
      break;
    case 'Todo':
    case 'Work':
    case 'Personal':
    case 'Meeting':
    case 'Shopping':
      tag = filter;
      break;
    default:
      notFound();
  }

  const client = new QueryClient();
  await client.prefetchQuery(
    notesQueryOptions({ page: 1, perPage: NOTES_PER_PAGE, search: '', tag }),
  );
  return (
    <HydrationBoundary state={dehydrate(client)}>
      <NotesClient key={filter} tag={tag} />
    </HydrationBoundary>
  );
}
