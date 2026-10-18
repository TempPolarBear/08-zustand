import type { NoteTag } from '@/types/note';

export const noteTags: NoteTag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export function isNoteTag(value: string): value is NoteTag {
  return noteTags.some((tag) => tag === value);
}
