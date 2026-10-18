import { notFound } from 'next/navigation';
import type { NoteTag } from '@/types/note';
import { isNoteTag } from '@/lib/noteTags';

export function getFilterTag(slug: string[]): NoteTag | undefined {
  if (slug.length !== 1) notFound();
  if (slug[0] === 'all') return undefined;
  if (isNoteTag(slug[0])) return slug[0];
  notFound();
}
