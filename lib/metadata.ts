import type { Metadata } from 'next';

export const SITE_URL = 'https://08-zustand.vercel.app';

const ogImage = {
  url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
  width: 1536,
  height: 1024,
  alt: 'NoteHub application preview',
};

export function createOpenGraph(
  title: string,
  description: string,
  path: string,
): NonNullable<Metadata['openGraph']> {
  return {
    title,
    description,
    url: new URL(path, SITE_URL).toString(),
    images: [ogImage],
  };
}
