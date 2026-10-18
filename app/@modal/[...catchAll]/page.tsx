import type { Metadata } from 'next';
import { metadata as notFoundMetadata } from '@/app/not-found';

interface ModalCatchAllProps {
  params: Promise<{ catchAll: string[] }>;
}

export async function generateMetadata({ params }: ModalCatchAllProps): Promise<Metadata> {
  const { catchAll } = await params;
  return catchAll[0] === 'notes' ? {} : notFoundMetadata;
}

export default function ModalCatchAll() {
  return null;
}
