import type { ReactNode } from 'react';
import QRCode from 'react-qr-code';
import { LogoVercel } from '@vercel/geistcn-assets/logos';
import {
  EveLogo,
  EveMark,
  Kicker,
  Tag,
  Triangle,
  VizAiSdk,
  VizChat,
  VizFluid,
  VizGateway,
  VizSandbox,
  VizWorkflow,
} from './primitives';

/** Shared full-bleed slide layout. */
function Slide({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-center px-10 py-20 md:px-20 lg:px-28 ${className}`}
    >
      {children}
    </div>
  );
}

export type SlideDef = {
  id: string;
  nav: string;
  render: () => ReactNode;
};

const LINKEDIN_URL = 'https://linkedin.com/in/evan-eissler-19098510a';

export const slides: SlideDef[] = [
  // 1 - Hello, I'm Evan
  {
    id: 'intro',
    nav: 'Hello',
    render: () => (
      <Slide>
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
          {/* Left: Vercel-focused statement */}
          <div className="flex flex-col gap-8">
            <LogoVercel height={32} aria-label="Vercel" className="text-[var(--ds-gray-1000)]" />
            <h1 className="text-balance text-heading-72 leading-[0.95] text-[var(--ds-gray-1000)]">
              Building agents on Vercel.
            </h1>
            <div className="flex items-center gap-4">
              <img
                src="/evan-eissler.png"
                alt="Evan Eissler"
                className="h-14 w-14 rounded-full object-cover grayscale"
              />
              <p className="text-copy-24 text-[var(--ds-gray-700)]">
                Evan Eissler{' '}
                <span className="text-[var(--ds-gray-600)]">· Solutions Architect</span>
              </p>
            </div>
          </div>

          {/* Right: QR only */}
          <div className="flex shrink-0 flex-col items-center gap-4">
            <div className="relative">
              <QRCode
                value={LINKEDIN_URL}
                size={320}
                level="H"
                bgColor="#000000"
                fgColor="#ffffff"
                aria-label="LinkedIn QR code for Evan Eissler"
              />
              <div className="absolute left-1/2 top-1/2 flex h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black">
                <Triangle className="h-11 w-11 text-[var(--ds-gray-1000)]" />
              </div>
            </div>
            <span className="font-mono text-label-14 uppercase tracking-[0.2em] text-[var(--ds-gray-600)]">
              Let&apos;s connect
            </span>
          </div>
        </div>
      </Slide>
    ),
  },

  // 2 - What is Vercel
  {
    id: 'vercel',
    nav: 'Vercel',
    render: () => (
      <Slide className="gap-12">
        <div className="flex flex-col gap-8">
          <Kicker index="01" label="What is Vercel?" />
          <h2 className="flex flex-wrap items-center gap-4 text-heading-64 leading-[1.05] text-[var(--ds-gray-1000)]">
            <LogoVercel height={52} aria-label="Vercel" className="text-[var(--ds-gray-1000)]" />
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            We make building for the web easy, fast, and reliable. Now we&apos;re doing
            the same thing for AI.
          </p>
        </div>

        {/* Three-beat story */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[
            {
              n: '01',
              k: 'It started with Next.js',
              d: 'We built the most popular framework for the web, used by teams from startups to the Fortune 500.',
              tags: ['Open source', 'Millions of developers'],
            },
            {
              n: '02',
              k: 'Then we built the platform',
              d: 'Push your code and Vercel handles the rest: hosting, scaling, databases, storage, security, and speed.',
              tags: ['Global network', 'Zero servers to manage'],
            },
            {
              n: '03',
              k: 'Now, the same for AI',
              d: 'The tools that made web apps simple now make AI apps and agents just as easy to build and run.',
              tags: ['AI Gateway', 'Agents', 'v0'],
              highlight: true,
            },
          ].map((c) => (
            <div
              key={c.n}
              className={`flex flex-col gap-4 rounded-lg border p-7 ${
                c.highlight
                  ? 'border-[var(--ds-gray-1000)] bg-[var(--ds-gray-100)]'
                  : 'border-[var(--ds-gray-500)] bg-[var(--ds-background-100)]'
              }`}
            >
              <span className="font-mono text-label-13 text-[var(--ds-gray-600)]">{c.n}</span>
              <span className="text-balance text-heading-24 leading-tight text-[var(--ds-gray-1000)]">
                {c.k}
              </span>
              <span className="text-copy-18 leading-snug text-[var(--ds-gray-700)]">{c.d}</span>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--ds-gray-500)] px-3 py-1 text-copy-14 text-[var(--ds-gray-700)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    ),
  },

  // 3 - eve overview
  {
    id: 'eve',
    nav: 'eve',
    render: () => (
      <Slide className="gap-14">
        <div className="flex flex-col gap-8">
          <Kicker index="02" label="The framework" />
          <h2 className="flex flex-wrap items-center gap-4 text-heading-64 leading-tight text-[var(--ds-gray-1000)]">
            <EveLogo className="text-[60px]" />
            <span>is Next.js for agents.</span>
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            The fastest way to build an AI agent. You describe what it should do in plain
            English, and eve builds the rest for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              k: 'Instructions',
              d: 'Plain language tells the agent what to do.',
              e: '"Answer support questions."',
            },
            {
              k: 'Tools',
              d: 'Give it real actions like APIs, data, and code.',
              e: 'Look up an order, send an email.',
            },
            {
              k: 'Anywhere',
              d: 'Runs in Slack, on the web, or on a schedule.',
              e: 'Meet users where they are.',
            },
          ].map((c) => (
            <div
              key={c.k}
              className="flex flex-col gap-3 rounded-lg border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] p-7"
            >
              <span className="flex items-center gap-2 text-heading-32 text-[var(--ds-gray-1000)]">
                <EveMark className="h-4 w-4 shrink-0" />
                {c.k}
              </span>
              <span className="text-copy-18 leading-snug text-[var(--ds-gray-700)]">{c.d}</span>
              <span className="mt-auto pt-2 font-mono text-label-13 text-[var(--ds-gray-600)]">
                {c.e}
              </span>
            </div>
          ))}
        </div>
      </Slide>
    ),
  },

  // 4 - Agent primitives
  {
    id: 'primitives',
    nav: 'Primitives',
    render: () => {
      const cards = [
        {
          lockup: (
            <span className="flex items-center gap-2 text-heading-24 font-semibold text-[var(--ds-gray-1000)]">
              AI <Tag>SDK</Tag>
            </span>
          ),
          headline: 'Toolkit for unified model access',
          viz: <VizAiSdk />,
        },
        {
          lockup: (
            <span className="flex items-center gap-2 text-heading-24 font-semibold text-[var(--ds-gray-1000)]">
              AI <Tag>Gateway</Tag>
            </span>
          ),
          headline: 'Hundreds of AI models. Zero API keys.',
          viz: <VizGateway />,
        },
        {
          lockup: (
            <span className="flex items-center gap-2 text-heading-24 font-semibold text-[var(--ds-gray-1000)]">
              Chat <Tag>SDK</Tag>
            </span>
          ),
          headline: 'One codebase, every chat platform',
          viz: <VizChat />,
        },
        {
          lockup: (
            <span className="text-heading-24 font-semibold leading-tight text-[var(--ds-gray-1000)]">
              Fluid Compute
            </span>
          ),
          headline: 'Active CPU pricing. Pay for what you actually use.',
          viz: <VizFluid />,
        },
        {
          lockup: (
            <span className="flex items-center gap-2 text-heading-24 font-semibold text-[var(--ds-gray-1000)]">
              <Triangle className="h-5 w-5" /> Sandbox
            </span>
          ),
          headline: 'Fast, secure code execution',
          viz: <VizSandbox />,
        },
        {
          lockup: (
            <span className="flex items-center gap-2 text-heading-24 font-semibold text-[var(--ds-gray-1000)]">
              <EveMark className="h-4 w-4" /> Workflow
            </span>
          ),
          headline: 'Make any TypeScript function durable',
          viz: <VizWorkflow />,
        },
      ];

      return (
        <Slide className="gap-10">
          <h2 className="flex items-center gap-4 text-heading-40 text-[var(--ds-gray-1000)]">
            <Triangle className="h-8 w-8" />
            Agent primitives
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.headline}
                className="flex min-h-[320px] flex-col gap-3 rounded-lg border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] p-6"
              >
                {c.lockup}
                <p className="text-pretty text-copy-18 text-[var(--ds-gray-800)]">{c.headline}</p>
                <div className="mt-auto flex min-h-[140px] items-center justify-center">
                  {c.viz}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      );
    },
  },

  // 5 - Demo
  {
    id: 'demo',
    nav: 'Demo',
    render: () => (
      <Slide className="relative items-center justify-center overflow-hidden text-center">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              'linear-gradient(var(--ds-gray-500) 1px, transparent 1px), linear-gradient(90deg, var(--ds-gray-500) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden
        />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <span className="flex items-center gap-3 font-mono text-label-14 uppercase tracking-[0.3em] text-[var(--ds-gray-1000)]">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-[var(--ds-gray-1000)]" />
            Live
          </span>
          <h2 className="flex items-center gap-5 text-heading-72 leading-none text-[var(--ds-gray-1000)]">
            <Triangle className="h-14 w-14" />
            Let&apos;s build one.
          </h2>
          <p className="max-w-lg text-balance text-copy-20 text-[var(--ds-gray-700)]">
            From an empty directory to a running agent — right now.
          </p>
        </div>
      </Slide>
    ),
  },
];
