import type { Metadata } from 'next';
import { createOpenGraph } from '@/lib/metadata';
import css from './not-found.module.css';

const title = '404 - Page not found | NoteHub';
const description = 'The page you are looking for does not exist.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: createOpenGraph(title, description, '/'),
};

export default function NotFound() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>404 - Page not found</h1>
        <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
      </div>
    </main>
  );
}
