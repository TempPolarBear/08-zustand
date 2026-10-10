'use client';
import { useEffect, useSyncExternalStore, type MouseEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  label?: string;
}

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Modal({ children, onClose, label = 'Create note' }: ModalProps) {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  if (!mounted) return null;
  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      onClick={(event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    document.body,
  );
}
