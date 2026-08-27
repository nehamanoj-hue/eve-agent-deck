'use client';

import { useCallback, useEffect, useState } from 'react';
import { LogoVercel } from '@vercel/geistcn-assets/logos';
import {
  IconArrowLeft,
  IconArrowRight,
  IconFullscreen,
} from '@vercel/geistcn-assets/icons';
import { slides } from './slides';

export function Deck() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  // keep a ref so keyboard handlers always read the latest index
  const indexRef = useRefLatest(index);

  const goto = useCallback(
    (target: number) => {
      setIndex((prev) => {
        const clamped = Math.max(0, Math.min(count - 1, target));
        return clamped === prev ? prev : clamped;
      });
    },
    [count],
  );

  const next = useCallback(() => goto(indexRef.current + 1), [goto, indexRef]);
  const prev = useCallback(() => goto(indexRef.current - 1), [goto, indexRef]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          next();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          prev();
          break;
        case 'Home':
          e.preventDefault();
          goto(0);
          break;
        case 'End':
          e.preventDefault();
          goto(count - 1);
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev, goto, count]);

  const toggleFullscreen = useCallback(() => {
    if (typeof document === 'undefined') return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void document.documentElement.requestFullscreen?.();
    }
  }, []);

  const current = slides[index];

  return (
    <main
      className="dark-theme relative h-[100dvh] w-full select-none overflow-hidden bg-black text-[var(--ds-gray-1000)]"
      aria-roledescription="carousel"
      aria-label="Presentation slides"
    >
      {/* Click zones for navigation (behind content) */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute inset-y-0 left-0 z-0 w-[28%] cursor-w-resize outline-none"
        tabIndex={-1}
      />
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute inset-y-0 right-0 z-0 w-[72%] cursor-e-resize outline-none"
        tabIndex={-1}
      />

      {/* Slide content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-stretch">
        <div key={current.id} className="deck-slide-enter h-full w-full">
          {current.render()}
        </div>
      </div>

      {/* Top chrome */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-8 py-6">
        <LogoVercel height={18} aria-label="Vercel" className="opacity-80" />
        <span className="font-mono text-label-12 uppercase tracking-[0.2em] text-[var(--ds-gray-600)]">
          {current.nav}
        </span>
      </div>

      {/* Bottom chrome: progress rail + counter + controls */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between gap-6 px-8 py-6">
        <div className="flex flex-1 items-center gap-2" aria-hidden>
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goto(i)}
              aria-label={`Go to ${s.nav}`}
              className="group h-6 flex-1 max-w-16"
            >
              <span
                className={`block h-[3px] w-full rounded-full transition-colors ${
                  i <= index
                    ? 'bg-[var(--ds-gray-1000)]'
                    : 'bg-[var(--ds-gray-400)] group-hover:bg-[var(--ds-gray-600)]'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-label-13 tabular-nums text-[var(--ds-gray-700)]">
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1">
            <IconButton onClick={prev} disabled={index === 0} label="Previous slide">
              <IconArrowLeft />
            </IconButton>
            <IconButton
              onClick={next}
              disabled={index === count - 1}
              label="Next slide"
            >
              <IconArrowRight />
            </IconButton>
            <IconButton onClick={toggleFullscreen} label="Toggle fullscreen">
              <IconFullscreen />
            </IconButton>
          </div>
        </div>
      </div>
    </main>
  );
}

function IconButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--ds-gray-400)] text-[var(--ds-gray-900)] transition-colors hover:bg-[var(--ds-gray-200)] disabled:cursor-not-allowed disabled:opacity-30"
    >
      {children}
    </button>
  );
}

// tiny helper: a ref that always mirrors the latest value
function useRefLatest<T>(value: T) {
  const [ref] = useState(() => ({ current: value }));
  ref.current = value;
  return ref;
}
