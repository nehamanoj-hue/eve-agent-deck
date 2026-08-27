import type { ReactNode } from 'react';

/**
 * Black & white deck primitives.
 * Only grayscale tokens are used anywhere: var(--ds-gray-*), black, white.
 * No color tokens (no blue, etc.) appear in this deck.
 */

/** A small uppercase monospace label, the recurring accent of the reference deck. */
export function MonoLabel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-label-13 uppercase tracking-[0.2em] text-[var(--ds-gray-700)] ${className}`}
    >
      {children}
    </span>
  );
}

/** A pill/chip with a subtle border. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ds-gray-500)] px-3 py-1 font-mono text-label-12 uppercase tracking-[0.15em] text-[var(--ds-gray-900)]">
      {children}
    </span>
  );
}

/** A pill/chip with a leading eve triangle, matching the reference eyebrow chips. */
export function TriangleChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--ds-gray-500)] px-4 py-1.5 font-mono text-label-13 uppercase tracking-[0.18em] text-[var(--ds-gray-1000)]">
      <Triangle className="h-2.5 w-2.5" />
      {children}
    </span>
  );
}

/** Section index badge shown top-left of most slides. */
export function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-label-13 text-[var(--ds-gray-600)]">{index}</span>
      <MonoLabel>{label}</MonoLabel>
    </div>
  );
}

/** The solid triangle mark (shared silhouette of Vercel and eve). */
export function Triangle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 115 100" fill="currentColor" aria-hidden="true" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0 115 100H0z" />
    </svg>
  );
}

/** The real eve.dev mark (upward triangle). */
export function EveMark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 115 100"
      fill="currentColor"
      role="img"
      aria-label="eve"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0 115 100H0z" />
    </svg>
  );
}

/** The real eve.dev wordmark, viewBox tightened to the glyph bounds. */
export function EveWordmark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 169 53"
      fill="currentColor"
      role="img"
      aria-label="eve"
      className={className}
    >
      <path d="M169 8.47h-51.39L81.73 53H70.36L113 0H169zM169 44.51v8.47h-45.87V44.5zM45.87 52.98H0V44.5h45.87zM38.66 30.55H0v-8.47h38.66z" />
      <path d="M169 30.55h-38.66v-8.47H169zM75.52 8.47H0V0h75.52z" />
    </svg>
  );
}

/** eve lockup: the real eve.dev logo (triangle mark + "eve" wordmark), inheriting current text color. */
export function EveLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <EveWordmark className="h-[0.78em] w-auto" />
    </span>
  );
}

/** A bordered node in a flow diagram. */
export function FlowBox({
  children,
  filled = false,
  className = '',
}: {
  children: ReactNode;
  filled?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center rounded-lg border px-5 py-4 ${
        filled
          ? 'border-[var(--ds-gray-1000)] bg-[var(--ds-gray-1000)] text-[var(--ds-gray-100)]'
          : 'border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] text-[var(--ds-gray-1000)]'
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Product lockups + mini illustrations for the "Agent primitives" grid.     */
/* -------------------------------------------------------------------------- */

/** A small squared tag, e.g. the "SDK" / "GATEWAY" pill in a product lockup. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-[var(--ds-gray-500)] px-2 py-0.5 font-mono text-label-12 uppercase tracking-[0.12em] text-[var(--ds-gray-900)]">
      {children}
    </span>
  );
}

/* -- provider glyphs for the AI Gateway node ring (monochrome) ------------- */

function GlyphOpenAI({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6 6 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.05 6.05 0 0 0 5.77-4.19 5.98 5.98 0 0 0 4-2.9 6.05 6.05 0 0 0-.75-7.09Zm-9 12.6a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.06v5.58a4.5 4.5 0 0 1-4.5 4.49ZM3.6 18.1a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.78.78 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06L9.73 21.8a4.5 4.5 0 0 1-6.14-1.65Zm-1.26-10.4a4.48 4.48 0 0 1 2.35-1.97v5.68a.78.78 0 0 0 .39.68l5.83 3.36-2.02 1.17a.07.07 0 0 1-.07 0L4.4 19.4a4.5 4.5 0 0 1-2.06-3.7Zm16.6 3.86-5.84-3.37 2.02-1.16a.07.07 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.78.78 0 0 0-.4-.68Zm2.01-3.02-.14-.09-4.77-2.77a.78.78 0 0 0-.79 0L9.63 9.06V6.73a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66ZM8.53 12.3 6.5 11.13a.07.07 0 0 1-.03-.06V5.5a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.78.78 0 0 0-.39.68l-.01 6.73Zm1.1-2.37 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3Z" />
    </svg>
  );
}

function GlyphAnthropic({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14.44 4h-3.02l5.3 16h3.28L14.44 4ZM6.9 4 1.6 20h3.35l1.08-3.4h5.55L12.66 20H16L10.7 4H6.9Zm.05 9.77 1.8-5.68 1.8 5.68h-3.6Z" />
    </svg>
  );
}

function GlyphXai({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M3.4 3h3.9l4.2 6 4.2-6h2.9l-5.65 8.05L20 21h-3.9l-4.6-6.6L6.9 21H4l6.05-8.6L3.4 3Z" />
    </svg>
  );
}

/** AI SDK — a code editor snippet with line numbers. */
export function VizAiSdk() {
  const lines: ReactNode[] = [
    <span key="0" className="text-[var(--ds-gray-500)]">{'// one model string, any provider'}</span>,
    <>await generateText({'{'}</>,
    <>{'  '}model: <span className="text-[var(--ds-gray-1000)]">{"'openai/gpt-5'"}</span>,</>,
    <>{'  '}tools: {'{ getWeather, search }'},</>,
    <>{'  '}prompt: <span className="text-[var(--ds-gray-1000)]">{"'Book my trip'"}</span>,</>,
    <>{'}'})</>,
  ];
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--ds-gray-400)] bg-black">
      <div className="flex items-center gap-2 border-b border-[var(--ds-gray-400)] px-3 py-2">
        <span className="rounded-[3px] bg-[var(--ds-gray-300)] px-1 font-mono text-[10px] font-medium text-black">
          TS
        </span>
        <span className="font-mono text-[11px] text-[var(--ds-gray-600)]">agent.ts</span>
      </div>
      <div className="flex px-3 py-3 font-mono text-[12px] leading-[1.7]">
        <div className="select-none pr-3 text-right text-[var(--ds-gray-500)]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="whitespace-pre text-[var(--ds-gray-800)]">
          {lines.map((l, i) => (
            <div key={i}>{l}</div>
          ))}
        </pre>
      </div>
    </div>
  );
}

/** AI Gateway — concentric rings with provider glyphs radiating from the Vercel mark. */
export function VizGateway() {
  const nodes: Array<{ x: number; y: number; glyph: ReactNode }> = [
    { x: 232, y: 34, glyph: <GlyphOpenAI className="h-4 w-4 text-[var(--ds-gray-1000)]" /> },
    { x: 252, y: 80, glyph: <GlyphAnthropic className="h-4 w-4 text-[var(--ds-gray-1000)]" /> },
    { x: 224, y: 124, glyph: <GlyphXai className="h-4 w-4 text-[var(--ds-gray-1000)]" /> },
  ];
  return (
    <div className="relative h-[160px] w-full">
      <svg viewBox="0 0 280 160" className="h-full w-full" fill="none" aria-hidden="true">
        {/* concentric rings */}
        {[38, 58, 78].map((r) => (
          <circle key={r} cx="90" cy="80" r={r} stroke="var(--ds-gray-400)" strokeWidth="1" />
        ))}
        {/* connectors */}
        {nodes.map((n, i) => (
          <path
            key={i}
            d={`M90 80 C 150 80, 160 ${n.y}, ${n.x} ${n.y}`}
            stroke="var(--ds-gray-500)"
            strokeWidth="1"
          />
        ))}
        {/* hub */}
        <circle cx="90" cy="80" r="20" fill="var(--ds-gray-1000)" />
        <path d="M90 68 L102 90 H78 Z" fill="black" />
      </svg>
      {/* provider nodes as absolutely-positioned chips so glyphs render crisply */}
      {nodes.map((n, i) => (
        <span
          key={i}
          className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--ds-gray-500)] bg-black"
          style={{ left: `${(n.x / 280) * 100}%`, top: `${(n.y / 160) * 100}%` }}
        >
          {n.glyph}
        </span>
      ))}
    </div>
  );
}

/** Chat SDK — a compact chat-window mockup. */
export function VizChat() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--ds-gray-400)] bg-black">
      <div className="flex items-center justify-between border-b border-[var(--ds-gray-400)] px-3 py-2">
        <span className="font-mono text-[11px] text-[var(--ds-gray-600)]">#support</span>
        <span className="flex h-4 w-4 items-center justify-center rounded-[3px] bg-[var(--ds-gray-300)] font-mono text-[9px] font-bold text-black">
          S
        </span>
      </div>
      <div className="flex flex-col gap-2 p-3">
        <span className="h-5 w-3/5 rounded-lg rounded-bl-sm bg-[var(--ds-gray-300)]" />
        <div className="self-end">
          <span className="block h-5 w-1/2 min-w-[96px] rounded-lg rounded-br-sm bg-[var(--ds-gray-1000)]" />
        </div>
        <span className="h-5 w-2/3 rounded-lg rounded-bl-sm bg-[var(--ds-gray-300)]" />
        {/* reaction row */}
        <div className="mt-1 flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-4 w-6 rounded-full border border-[var(--ds-gray-500)]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Fluid Compute — an active/idle billing timeline. */
export function VizFluid() {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--ds-gray-400)] bg-black">
      {/* column headers */}
      <div className="grid grid-cols-[1fr_1.4fr_1fr] border-b border-[var(--ds-gray-400)] font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--ds-gray-600)]">
        <span className="px-2 py-1.5 text-center">Active</span>
        <span className="border-x border-[var(--ds-gray-400)] px-2 py-1.5 text-center">
          idle · no charge
        </span>
        <span className="px-2 py-1.5 text-center">Active</span>
      </div>
      {/* request lines */}
      <div className="relative grid grid-cols-[1fr_1.4fr_1fr] gap-y-2 py-3">
        <span className="pointer-events-none absolute inset-y-0 left-[41.6%] w-px bg-[var(--ds-gray-400)]" />
        <span className="pointer-events-none absolute inset-y-0 left-[71.5%] w-px bg-[var(--ds-gray-400)]" />
        {[
          ['70%', 'dashed'],
          ['55%', 'solid'],
          ['80%', 'dashed'],
        ].map(([w, style], i) => (
          <div key={i} className="col-span-3 flex items-center px-2">
            <span
              className={`h-px ${style === 'solid' ? 'bg-[var(--ds-gray-800)]' : 'border-t border-dashed border-[var(--ds-gray-600)]'}`}
              style={{ width: w as string }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Sandbox — stacked window mockups with a play-demo chip. */
export function VizSandbox() {
  return (
    <div className="relative h-[160px] w-full">
      {/* back window */}
      <div className="absolute right-2 top-0 h-[120px] w-3/4 overflow-hidden rounded-lg border border-[var(--ds-gray-500)] bg-black">
        <div className="flex items-center gap-1.5 border-b border-[var(--ds-gray-500)] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-gray-500)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-gray-500)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-gray-500)]" />
          <span className="ml-2 font-mono text-[9px] text-[var(--ds-gray-600)]">
            remote-sandbox.vercel.run
          </span>
        </div>
      </div>
      {/* front window */}
      <div className="absolute bottom-0 left-2 h-[120px] w-[62%] overflow-hidden rounded-lg border border-[var(--ds-gray-400)] bg-[var(--ds-gray-100)]">
        <div className="flex items-center gap-2 border-b border-[var(--ds-gray-400)] px-2.5 py-1.5">
          <Triangle className="h-2.5 w-2.5 text-[var(--ds-gray-1000)]" />
          <span className="font-mono text-[9px] text-[var(--ds-gray-700)]">Agent</span>
        </div>
        <div className="flex flex-col gap-1.5 p-2.5">
          <span className="h-3 w-full rounded bg-[var(--ds-gray-300)]" />
          <span className="h-3 w-4/5 rounded bg-[var(--ds-gray-300)]" />
          <span className="h-3 w-2/3 rounded bg-[var(--ds-gray-300)]" />
        </div>
      </div>
      {/* play demo chip */}
      <span className="absolute bottom-1 right-2 flex items-center gap-1 rounded-full border border-[var(--ds-gray-500)] bg-black px-2 py-1 font-mono text-[9px] text-[var(--ds-gray-700)]">
        <svg viewBox="0 0 12 12" className="h-2 w-2" fill="currentColor" aria-hidden="true">
          <path d="M3 2l7 4-7 4z" />
        </svg>
        Play demo
      </span>
    </div>
  );
}

/** Workflow — a cascading tree of durable steps with a duration bar. */
export function VizWorkflow() {
  const steps = ['process()', 'parse()', 'transform()', 'enrich()', 'validate()'];
  return (
    <div className="flex w-full flex-col gap-1.5">
      {/* top-level durable workflow bar */}
      <div className="flex items-center justify-between rounded-md border border-[var(--ds-gray-1000)] bg-[var(--ds-gray-1000)] px-2.5 py-1.5">
        <span className="font-mono text-[11px] text-black">workflow()</span>
        <span className="font-mono text-[10px] text-black/70">100ms</span>
      </div>
      {/* cascading steps */}
      {steps.map((s, i) => (
        <div key={s} style={{ marginLeft: `${(i + 1) * 22}px` }}>
          <span className="inline-block rounded-md border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] px-2.5 py-1 font-mono text-[11px] text-[var(--ds-gray-800)]">
            {s}
          </span>
        </div>
      ))}
    </div>
  );
}

/** A round avatar placeholder used on the closing slide. */
export function AvatarDot({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-[var(--ds-gray-500)] bg-[var(--ds-gray-200)] ${className}`}
      aria-hidden
    >
      <Triangle className="h-1/3 w-1/3 text-[var(--ds-gray-700)]" />
    </span>
  );
}

/** Horizontal arrow used between flow nodes. */
export function HArrow({ label, className = '' }: { label?: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 ${className}`}>
      {label ? (
        <span className="font-mono text-label-12 text-[var(--ds-gray-700)]">{label}</span>
      ) : null}
      <svg
        viewBox="0 0 80 12"
        className="h-3 w-full text-[var(--ds-gray-600)]"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="6" x2="72" y2="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M70 1 78 6 70 11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scaffolding: an opening folder + file-tree glyphs.                        */
/* -------------------------------------------------------------------------- */

/** A small file glyph. */
export function IconFile({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 1.5h5L13 5.5V14.5H4z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M9 1.5V5.5H13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

/** A small folder glyph. */
export function IconFolder({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path
        d="M1.5 4V13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7.5L6 3.2A1 1 0 0 0 5.2 3H2.5a1 1 0 0 0-1 1Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A key glyph for the Vercel Connect slide. */
export function IconKey({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <circle cx="5" cy="6" r="3.2" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7.3 8.3 13 14M11 12l1.4-1.4M12.4 13.4 14 11.8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** The animated opening-folder graphic used on the scaffolding slide. */
export function OpeningFolder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: '600px' }}
      aria-hidden="true"
    >
      {/* folder back */}
      <div className="relative h-[120px] w-[168px]">
        <div className="absolute inset-0 rounded-md rounded-tl-none border border-[var(--ds-gray-600)] bg-[var(--ds-gray-200)]" />
        {/* tab */}
        <div className="absolute -top-[10px] left-0 h-[14px] w-[64px] rounded-t-md border border-b-0 border-[var(--ds-gray-600)] bg-[var(--ds-gray-200)]" />
        {/* opening front flap */}
        <div
          className="deck-folder-lid absolute bottom-0 left-0 right-0 h-[86px] rounded-b-md border border-[var(--ds-gray-500)] bg-[var(--ds-gray-100)]"
          style={{ transformStyle: 'preserve-3d' }}
        />
        {/* eve triangle inside */}
        <Triangle className="absolute left-1/2 top-[30px] h-6 w-6 -translate-x-1/2 text-[var(--ds-gray-700)]" />
      </div>
    </div>
  );
}

/* -- service glyphs for the Vercel Connect slide (monochrome) -------------- */

export function GlyphGitHub({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function GlyphSlack({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M5.04 15.16a2.02 2.02 0 1 1-2.02-2.02h2.02v2.02Zm1.01 0a2.02 2.02 0 0 1 4.04 0v5.05a2.02 2.02 0 0 1-4.04 0v-5.05ZM8.07 5.04A2.02 2.02 0 1 1 10.09 3v2.02H8.07Zm0 1.01a2.02 2.02 0 0 1 0 4.04H3.02a2.02 2.02 0 0 1 0-4.04h5.05ZM18.96 8.07a2.02 2.02 0 1 1 2.02 2.02h-2.02V8.07Zm-1.01 0a2.02 2.02 0 0 1-4.04 0V3.02a2.02 2.02 0 0 1 4.04 0v5.05ZM15.93 18.96a2.02 2.02 0 1 1-2.02 2.02v-2.02h2.02Zm0-1.01a2.02 2.02 0 0 1 0-4.04h5.05a2.02 2.02 0 0 1 0 4.04h-5.05Z" />
    </svg>
  );
}

export function GlyphStripe({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M11.4 9.6c0-.72.6-1 1.56-1 1.38 0 3.12.42 4.5 1.16V5.7A12 12 0 0 0 12.96 5C9.6 5 7.36 6.76 7.36 9.7c0 4.6 6.32 3.86 6.32 5.84 0 .85-.74 1.12-1.76 1.12-1.5 0-3.42-.62-4.94-1.45v4.13c1.68.72 3.38 1.03 4.94 1.03 3.44 0 5.8-1.7 5.8-4.68 0-4.96-6.36-4.08-6.36-5.96Z" />
    </svg>
  );
}

export function GlyphLinear({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M2.05 13.3a10 10 0 0 0 8.65 8.65L2.05 13.3ZM2 11.02 12.98 22a10.05 10.05 0 0 0 3.02-.7L2.7 8a10.05 10.05 0 0 0-.7 3.02ZM3.6 6.06 17.94 20.4a10.06 10.06 0 0 0 2.06-1.53L5.13 4A10.06 10.06 0 0 0 3.6 6.06ZM6.46 2.94 21.06 17.54A10 10 0 0 0 6.46 2.94Z" />
    </svg>
  );
}

/** The dotted "agents" triangle from the reference title slide, recreated as an SVG. */
export function AgentsTriangle({ className = '' }: { className?: string }) {
  const top = { x: 300, y: 40 };
  const left = { x: 40, y: 460 };
  const right = { x: 560, y: 460 };

  return (
    <svg viewBox="0 0 600 500" className={className} fill="none" aria-hidden="true">
      {[
        [top, left],
        [top, right],
        [left, right],
      ].map(([a, b], i) => (
        <line
          key={i}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="var(--ds-gray-600)"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
      ))}
      {[top, left, right].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="var(--ds-gray-700)" />
      ))}
      <text
        x="150"
        y="250"
        fill="var(--ds-gray-700)"
        className="font-mono"
        fontSize="14"
        letterSpacing="4"
        textAnchor="middle"
        transform="rotate(-59 150 250)"
      >
        FOR CODING AGENTS
      </text>
      <text
        x="450"
        y="250"
        fill="var(--ds-gray-700)"
        className="font-mono"
        fontSize="14"
        letterSpacing="4"
        textAnchor="middle"
        transform="rotate(59 450 250)"
      >
        TO SHIP AGENTS
      </text>
      <text
        x="300"
        y="485"
        fill="var(--ds-gray-700)"
        className="font-mono"
        fontSize="14"
        letterSpacing="4"
        textAnchor="middle"
      >
        AUTOMATED BY AGENTS
      </text>
    </svg>
  );
}
