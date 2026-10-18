import type { Metadata } from 'next';
import { createOpenGraph } from '@/lib/metadata';
import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';

const title = 'Create note | NoteHub';
const description = 'Create a new note and keep your ideas organized with NoteHub.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: createOpenGraph(title, description, '/notes/action/create'),
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
