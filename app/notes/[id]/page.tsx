import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';
interface NotePageProps {
  params: Promise<{ id: string }>;
}

export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const client = new QueryClient();
  await client.prefetchQuery({ queryKey: ['note', id], queryFn: () => fetchNoteById(id) });
  return (
    <HydrationBoundary state={dehydrate(client)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
