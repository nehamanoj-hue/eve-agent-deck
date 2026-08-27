import type { ReactNode } from 'react';
import QRCode from 'react-qr-code';
import { LogoVercel } from '@vercel/geistcn-assets/logos';
import {
  EveLogo,
  EveMark,
  GlyphGitHub,
  GlyphLinear,
  GlyphSlack,
  GlyphStripe,
  IconFile,
  IconFolder,
  IconKey,
  Kicker,
  OpeningFolder,
  Tag,
  Triangle,
  VizAgentLoop,
  VizAiSdk,
  VizChat,
  VizConnections,
  VizFluid,
  VizGateway,
  VizSandbox,
  VizTimeline,
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

const LINKEDIN_URL = 'https://www.linkedin.com/in/neha-manoj/';
const EMAIL = 'Neha.manoj@vercel.com';

/** Reusable presenter identity block used on the opening and closing slides. */
function PresenterCard({ lead }: { lead: ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
      {/* Left: statement + identity */}
      <div className="flex flex-col gap-8">
        <LogoVercel height={30} aria-label="Vercel" className="text-[var(--ds-gray-1000)]" />
        {lead}
        <div className="flex items-center gap-4">
          <img
            src="/neha-manoj.png"
            alt="Neha Manoj"
            className="h-16 w-16 rounded-full object-cover grayscale"
          />
          <div className="flex flex-col">
            <p className="text-copy-24 text-[var(--ds-gray-1000)]">
              Neha Manoj{' '}
              <span className="text-[var(--ds-gray-600)]">· Solutions Architect</span>
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-mono text-label-14 text-[var(--ds-gray-600)]"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* Right: LinkedIn QR */}
      <div className="flex shrink-0 flex-col items-center gap-4">
        <div className="relative">
          <QRCode
            value={LINKEDIN_URL}
            size={300}
            level="H"
            bgColor="#000000"
            fgColor="#ffffff"
            aria-label="LinkedIn QR code for Neha Manoj"
          />
          <div className="absolute left-1/2 top-1/2 flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black">
            <Triangle className="h-10 w-10 text-[var(--ds-gray-1000)]" />
          </div>
        </div>
        <span className="font-mono text-label-14 uppercase tracking-[0.2em] text-[var(--ds-gray-600)]">
          Let&apos;s connect
        </span>
      </div>
    </div>
  );
}

export const slides: SlideDef[] = [
  // 1 - Title / intro
  {
    id: 'intro',
    nav: 'Hello',
    render: () => (
      <Slide>
        <PresenterCard
          lead={
            <div className="flex flex-col gap-4">
              <span className="font-mono text-label-14 uppercase tracking-[0.2em] text-[var(--ds-gray-600)]">
                Vercel · eve
              </span>
              <h1 className="text-balance text-heading-72 leading-[0.95] text-[var(--ds-gray-1000)]">
                Everything you need to build an agent.
              </h1>
            </div>
          }
        />
      </Slide>
    ),
  },

  // 2 - Vercel: then to now
  {
    id: 'vercel',
    nav: 'Vercel',
    render: () => (
      <Slide className="gap-10">
        <div className="flex flex-col gap-6">
          <Kicker index="01" label="Vercel: then to now" />
          <h2 className="flex flex-wrap items-center gap-4 text-heading-56 leading-[1.05] text-[var(--ds-gray-1000)]">
            <LogoVercel height={46} aria-label="Vercel" className="text-[var(--ds-gray-1000)]" />
            <span>then &rarr; now</span>
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            We made building for the web easy, fast, and reliable. Now we&apos;re doing
            the same thing for AI.
          </p>
        </div>

        {/* Animated era timeline */}
        <div className="rounded-xl border border-[var(--ds-gray-400)] bg-[var(--ds-background-100)] px-8 pb-6 pt-8">
          <VizTimeline />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {[
            {
              n: '2016',
              k: 'It started with Next.js',
              d: 'The most popular framework for the web, used by teams from startups to the Fortune 500.',
              tags: ['Open source', 'Millions of developers'],
            },
            {
              n: '2020',
              k: 'Then we built the platform',
              d: 'Push your code and Vercel handles the rest: hosting, scaling, storage, security, and speed.',
              tags: ['Global network', 'Zero servers'],
            },
            {
              n: 'Now',
              k: 'The same, for AI',
              d: 'The tools that made web apps simple now make AI apps and agents just as easy to ship.',
              tags: ['AI Gateway', 'Agents', 'v0'],
              highlight: true,
            },
          ].map((c) => (
            <div
              key={c.k}
              className={`flex flex-col gap-3 rounded-lg border p-6 ${
                c.highlight
                  ? 'border-[var(--ds-blue-700)] bg-[var(--ds-blue-100)]'
                  : 'border-[var(--ds-gray-500)] bg-[var(--ds-background-100)]'
              }`}
            >
              <span
                className={`font-mono text-label-13 ${
                  c.highlight ? 'text-[var(--ds-blue-700)]' : 'text-[var(--ds-gray-600)]'
                }`}
              >
                {c.n}
              </span>
              <span className="text-balance text-heading-24 leading-tight text-[var(--ds-gray-1000)]">
                {c.k}
              </span>
              <span className="text-copy-16 leading-snug text-[var(--ds-gray-700)]">{c.d}</span>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full border px-3 py-1 text-copy-14 ${
                      c.highlight
                        ? 'border-[var(--ds-blue-400)] text-[var(--ds-blue-700)]'
                        : 'border-[var(--ds-gray-500)] text-[var(--ds-gray-700)]'
                    }`}
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

  // 3 - Now we do agentic infra
  {
    id: 'agentic-infra',
    nav: 'Agentic infra',
    render: () => (
      <Slide className="gap-10">
        <div className="flex flex-col gap-5">
          <Kicker index="02" label="The shift" />
          <h2 className="max-w-5xl text-balance text-heading-56 leading-[1.02] text-[var(--ds-gray-1000)]">
            Now we build agentic infrastructure.
          </h2>
          <p className="max-w-4xl text-pretty text-heading-28 font-normal leading-snug text-[var(--ds-gray-800)]">
            Agents need more than a model call. They need compute, durability, memory,
            and a way to reach the outside world &mdash; running reliably in production.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Progression ladder */}
          <div className="flex flex-col gap-3">
            {[
              { k: 'Web apps', d: 'Framework, hosting, scaling, storage.', now: false },
              { k: 'AI apps', d: 'Model access, streaming, edge speed.', now: false },
              {
                k: 'Agents',
                d: 'Durable runtime, sandboxes, channels, connections.',
                now: true,
              },
            ].map((c, i) => (
              <div key={c.k} className="flex items-center gap-4">
                <span className="w-6 shrink-0 text-center font-mono text-label-14 text-[var(--ds-gray-500)]">
                  {i < 2 ? '\u2193' : ''}
                </span>
                <div
                  className={`deck-float flex flex-1 items-center gap-4 rounded-lg border p-5 ${
                    c.now
                      ? 'border-[var(--ds-blue-700)] bg-[var(--ds-blue-100)]'
                      : 'border-[var(--ds-gray-500)] bg-[var(--ds-background-100)]'
                  }`}
                  style={c.now ? undefined : { animation: 'none' }}
                >
                  {c.now ? (
                    <Triangle className="h-5 w-5 shrink-0 text-[var(--ds-blue-700)]" />
                  ) : null}
                  <div className="flex flex-col gap-1">
                    <span className="text-heading-24 text-[var(--ds-gray-1000)]">{c.k}</span>
                    <span className="text-copy-16 leading-snug text-[var(--ds-gray-700)]">
                      {c.d}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Animated agent loop */}
          <div className="flex items-center justify-center rounded-xl border border-[var(--ds-gray-400)] bg-[var(--ds-background-100)] p-8">
            <VizAgentLoop />
          </div>
        </div>
      </Slide>
    ),
  },

  // 4 - What is an agent
  {
    id: 'what-is-agent',
    nav: 'What is an agent',
    render: () => (
      <Slide className="gap-14">
        <div className="flex flex-col gap-6">
          <Kicker index="03" label="Foundations" />
          <h2 className="max-w-5xl text-balance text-heading-64 leading-[1.02] text-[var(--ds-gray-1000)]">
            What is an agent?
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            A model that runs in a loop &mdash; it reads context, decides what to do,
            takes an action with a tool, then repeats until the task is done.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {[
            { k: 'Perceive', d: 'Read the request, context, and history.' },
            { k: 'Reason', d: 'The model decides the next best step.' },
            { k: 'Act', d: 'Call a tool: an API, data, or code.' },
          ].map((c, i, arr) => (
            <div key={c.k} className="flex flex-1 items-center gap-4">
              <div className="flex flex-1 flex-col gap-3 rounded-lg border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] p-7">
                <span className="font-mono text-label-13 text-[var(--ds-gray-600)]">
                  0{i + 1}
                </span>
                <span className="text-heading-24 text-[var(--ds-gray-1000)]">{c.k}</span>
                <span className="text-copy-18 leading-snug text-[var(--ds-gray-700)]">{c.d}</span>
              </div>
              <span className="hidden text-heading-32 text-[var(--ds-gray-600)] lg:inline">
                {i < arr.length - 1 ? '\u2192' : '\u21bb'}
              </span>
            </div>
          ))}
        </div>
        <p className="font-mono text-label-14 uppercase tracking-[0.18em] text-[var(--ds-gray-600)]">
          Loop until done
        </p>

        <div className="flex flex-col gap-3 rounded-xl border border-[var(--ds-blue-700)] bg-[var(--ds-blue-100)] p-7">
          <span className="font-mono text-label-13 uppercase tracking-[0.18em] text-[var(--ds-blue-700)]">
            The way we think about it
          </span>
          <p className="text-balance text-heading-32 font-normal leading-snug text-[var(--ds-gray-1000)]">
            eve is to <span className="font-semibold text-[var(--ds-blue-700)]">agents</span>{' '}
            what <span className="font-semibold">Next.js</span> is to{' '}
            <span className="font-semibold">web apps</span> &mdash; the framework that
            turns a prototype into production.
          </p>
        </div>
      </Slide>
    ),
  },

  // 5 - AI infrastructure / primitives
  {
    id: 'primitives',
    nav: 'AI primitives',
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
        <Slide className="gap-8">
          <div className="flex flex-col gap-3">
            <Kicker index="04" label="We built the AI infrastructure" />
            <h2 className="flex items-center gap-4 text-heading-40 text-[var(--ds-gray-1000)]">
              <Triangle className="h-8 w-8" />
              Agent primitives
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.headline}
                className="flex min-h-[300px] flex-col gap-3 rounded-lg border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] p-6"
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

  // 6 - eve intro
  {
    id: 'eve',
    nav: 'eve',
    render: () => (
      <Slide className="gap-12">
        <div className="flex flex-col gap-8">
          <Kicker index="05" label="The framework" />
          <h2 className="flex flex-wrap items-center gap-4 text-heading-64 leading-tight text-[var(--ds-gray-1000)]">
            <EveLogo className="text-[60px]" />
            <span>is Next.js for agents.</span>
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            It ties every primitive together. You describe what the agent should do,
            and eve compiles the directory into a durable, production agent.
          </p>
        </div>
      </Slide>
    ),
  },

  // 7 - Scaffolding: an agent is a directory (folder opening + tree)
  {
    id: 'scaffolding',
    nav: 'Scaffolding',
    render: () => {
      const files = [
        { name: 'instructions.md', d: 'What the agent does, in Markdown', folder: false },
        { name: 'agent.ts', d: 'Choose a model, configure the runtime', folder: false },
        { name: 'skills/', d: 'Markdown playbooks loaded when relevant', folder: true },
        { name: 'tools/', d: 'TypeScript functions the model can call', folder: true },
        { name: 'sandbox/', d: 'Isolated compute and file tools', folder: true },
        { name: 'channels/', d: 'Slack, Discord, Teams, web', folder: true },
        { name: 'connections/', d: 'Auth for GitHub, Stripe, Linear', folder: true },
        { name: 'subagents/', d: 'Delegate specialized work', folder: true },
        { name: 'schedules/', d: 'Cron jobs, daily digests', folder: true },
      ];
      return (
        <Slide className="gap-10">
          <div className="flex flex-col gap-3">
            <Kicker index="06" label="Scaffolding" />
            <h2 className="text-balance text-heading-48 leading-tight text-[var(--ds-gray-1000)]">
              An agent is a directory.
            </h2>
          </div>

          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
            {/* Opening folder */}
            <div className="flex shrink-0 flex-col items-center gap-4 deck-folder-pop">
              <OpeningFolder />
              <span className="font-mono text-label-14 text-[var(--ds-gray-700)]">my-agent/</span>
            </div>

            {/* File tree, cascading in */}
            <div className="deck-stagger grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2">
              {files.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-3 rounded-md border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] px-4 py-3"
                >
                  {f.folder ? (
                    <IconFolder className="h-4 w-4 shrink-0 text-[var(--ds-gray-1000)]" />
                  ) : (
                    <IconFile className="h-4 w-4 shrink-0 text-[var(--ds-gray-1000)]" />
                  )}
                  <span className="font-mono text-copy-16 text-[var(--ds-gray-1000)]">
                    {f.name}
                  </span>
                  <span className="ml-auto hidden text-copy-14 text-[var(--ds-gray-600)] md:inline">
                    {f.d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Slide>
      );
    },
  },

  // 8 - channels/ folder
  {
    id: 'channels',
    nav: 'Channels',
    render: () => (
      <Slide className="gap-10">
        <div className="flex flex-col gap-3">
          <Kicker index="07" label="channels/" />
          <h2 className="text-balance text-heading-48 leading-tight text-[var(--ds-gray-1000)]">
            One agent codebase, every channel.
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            Drop a file into <span className="font-mono">channels/</span> and the same
            agent shows up wherever your users are.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Folder listing */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-mono text-label-14 text-[var(--ds-gray-700)]">
              <IconFolder className="h-4 w-4 text-[var(--ds-gray-1000)]" /> channels/
            </div>
            <div className="deck-stagger flex flex-col gap-2.5">
              {[
                { f: 'slack.ts', g: <GlyphSlack className="h-4 w-4" /> },
                { f: 'discord.ts', g: <span className="font-mono text-[11px]">D</span> },
                { f: 'teams.ts', g: <span className="font-mono text-[11px]">T</span> },
                { f: 'web.ts', g: <span className="font-mono text-[11px]">W</span> },
              ].map((c) => (
                <div
                  key={c.f}
                  className="flex items-center gap-3 rounded-md border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-[5px] border border-[var(--ds-gray-500)] text-[var(--ds-gray-1000)]">
                    {c.g}
                  </span>
                  <span className="font-mono text-copy-16 text-[var(--ds-gray-1000)]">{c.f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code snippet */}
          <div className="w-full self-start overflow-hidden rounded-lg border border-[var(--ds-gray-400)] bg-black">
            <div className="flex items-center gap-2 border-b border-[var(--ds-gray-400)] px-3 py-2">
              <span className="rounded-[3px] bg-[var(--ds-gray-300)] px-1 font-mono text-[10px] font-medium text-black">
                TS
              </span>
              <span className="font-mono text-[11px] text-[var(--ds-gray-600)]">
                channels/slack.ts
              </span>
            </div>
            <pre className="whitespace-pre px-4 py-4 font-mono text-[12px] leading-[1.8] text-[var(--ds-gray-800)]">
              {`import { connectSlackCredentials } from "@vercel/connect/eve";
import { slackChannel } from "eve/channels/slack";

export default slackChannel({
  credentials: connectSlackCredentials("slack/my-agent"),
});`}
            </pre>
          </div>
        </div>
      </Slide>
    ),
  },

  // 9 - connections/ folder (reach any API)
  {
    id: 'connections',
    nav: 'Connections',
    render: () => (
      <Slide className="gap-8">
        <div className="flex flex-col gap-3">
          <Kicker index="08" label="connections/" />
          <h2 className="text-balance text-heading-48 leading-tight text-[var(--ds-gray-1000)]">
            Reach any API, no keys in your code.
          </h2>
          <p className="max-w-4xl text-pretty text-heading-28 font-normal leading-snug text-[var(--ds-gray-800)]">
            Drop a file into <span className="font-mono">connections/</span> and tools call
            out to GitHub, Stripe, Linear, and Slack &mdash; authenticated with short-lived
            tokens that Vercel Connect mints on every request.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* left: folder + code */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-label-14 text-[var(--ds-gray-700)]">
              <IconFolder className="h-4 w-4 text-[var(--ds-gray-1000)]" /> connections/
            </div>
            <div className="w-full overflow-hidden rounded-lg border border-[var(--ds-gray-400)] bg-black">
              <div className="flex items-center gap-2 border-b border-[var(--ds-gray-400)] px-3 py-2">
                <span className="rounded-[3px] bg-[var(--ds-gray-300)] px-1 font-mono text-[10px] font-medium text-black">
                  TS
                </span>
                <span className="font-mono text-[11px] text-[var(--ds-gray-600)]">
                  connections/github.ts
                </span>
              </div>
              <pre className="whitespace-pre px-4 py-4 font-mono text-[12px] leading-[1.8] text-[var(--ds-gray-800)]">
                {`import { connection } from "eve/connections";

export default connection({
  provider: "github",
  // Connect issues a fresh, short-lived
  // token per request. No secrets stored.
});`}
              </pre>
            </div>
          </div>

          {/* right: animated token flow */}
          <div className="flex items-center justify-center rounded-xl border border-[var(--ds-gray-400)] bg-[var(--ds-background-100)] p-6">
            <VizConnections />
          </div>
        </div>
      </Slide>
    ),
  },

  // 10 - init command
  {
    id: 'init',
    nav: 'Init',
    render: () => (
      <Slide className="items-center justify-center gap-10 text-center">
        <span className="font-mono text-label-14 uppercase tracking-[0.3em] text-[var(--ds-gray-600)]">
          Let me show you
        </span>
        <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-[var(--ds-gray-500)] bg-black text-left">
          <div className="flex items-center gap-2 border-b border-[var(--ds-gray-500)] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[var(--ds-gray-500)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--ds-gray-500)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--ds-gray-500)]" />
            <span className="ml-2 font-mono text-[11px] text-[var(--ds-gray-600)]">terminal</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-8 font-mono text-heading-32">
            <span className="text-[var(--ds-gray-600)]">$</span>
            <span className="text-[var(--ds-gray-1000)]">npx eve@latest init my-agent</span>
            <span className="inline-block h-7 w-[10px] animate-pulse bg-[var(--ds-gray-1000)]" />
          </div>
        </div>
        <p className="max-w-lg text-balance text-copy-20 text-[var(--ds-gray-700)]">
          From an empty directory to a running agent.
        </p>
      </Slide>
    ),
  },

  // 10 - Vercel Connect: no API keys
  {
    id: 'connect',
    nav: 'Connect',
    render: () => (
      <Slide className="gap-10">
        <div className="flex flex-col gap-3">
          <Kicker index="09" label="Vercel Connect" />
          <h2 className="text-balance text-heading-48 leading-tight text-[var(--ds-gray-1000)]">
            No API keys to manage.
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            Connections handle authentication for you. Tools call GitHub, Stripe, Slack,
            and Linear with short-lived tokens &mdash; no secrets in your code.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: 'GitHub', g: <GlyphGitHub className="h-6 w-6" /> },
            { k: 'Stripe', g: <GlyphStripe className="h-6 w-6" /> },
            { k: 'Slack', g: <GlyphSlack className="h-6 w-6" /> },
            { k: 'Linear', g: <GlyphLinear className="h-6 w-6" /> },
          ].map((s) => (
            <div
              key={s.k}
              className="flex flex-col gap-5 rounded-lg border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-[var(--ds-gray-1000)]">{s.g}</span>
                <span className="flex items-center gap-1.5 rounded-full border border-[var(--ds-gray-500)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ds-gray-700)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--ds-gray-1000)]" />
                  Connected
                </span>
              </div>
              <span className="text-heading-24 text-[var(--ds-gray-1000)]">{s.k}</span>
              <div className="flex items-center gap-2 rounded-md border border-[var(--ds-gray-400)] bg-black px-3 py-2">
                <IconKey className="h-3.5 w-3.5 shrink-0 text-[var(--ds-gray-600)]" />
                <span className="font-mono text-[12px] tracking-[0.15em] text-[var(--ds-gray-600)]">
                  sk_live_&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ds-gray-600)]">
                Managed by Connect
              </span>
            </div>
          ))}
        </div>
      </Slide>
    ),
  },

  // 11 - What you get after scaffolding
  {
    id: 'production',
    nav: 'Production',
    render: () => (
      <Slide className="gap-10">
        <div className="flex flex-col gap-3">
          <Kicker index="10" label="Out of the box" />
          <h2 className="text-balance text-heading-48 leading-tight text-[var(--ds-gray-1000)]">
            Built for production, from the start.
          </h2>
          <p className="max-w-4xl text-pretty text-heading-32 font-normal leading-snug text-[var(--ds-gray-800)]">
            Once the scaffolding is in place, the hard infrastructure is already done.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex min-h-[300px] flex-col gap-4 rounded-lg border border-[var(--ds-gray-1000)] bg-[var(--ds-gray-100)] p-8">
            <span className="flex items-center gap-2 text-heading-32 text-[var(--ds-gray-1000)]">
              <EveMark className="h-5 w-5" /> Workflows
            </span>
            <p className="text-copy-18 leading-snug text-[var(--ds-gray-700)]">
              Durable execution. Every step is checkpointed &mdash; agents survive crashes,
              park while waiting, and resume on the next message.
            </p>
            <div className="mt-auto">
              <VizWorkflow />
            </div>
          </div>

          <div className="flex min-h-[300px] flex-col gap-4 rounded-lg border border-[var(--ds-gray-500)] bg-[var(--ds-background-100)] p-8">
            <span className="flex items-center gap-2 text-heading-32 text-[var(--ds-gray-1000)]">
              <Triangle className="h-5 w-5" /> Sandbox
            </span>
            <p className="text-copy-18 leading-snug text-[var(--ds-gray-700)]">
              Isolated VMs on demand. File-system access, bash, and code execution &mdash;
              completely sandboxed from everything else.
            </p>
            <div className="mt-auto">
              <VizSandbox />
            </div>
          </div>
        </div>
      </Slide>
    ),
  },

  // 12 - Closing / connect
  {
    id: 'closing',
    nav: 'Connect',
    render: () => (
      <Slide>
        <PresenterCard
          lead={
            <div className="flex flex-col gap-4">
              <span className="font-mono text-label-14 uppercase tracking-[0.2em] text-[var(--ds-gray-600)]">
                Thank you
              </span>
              <h1 className="text-balance text-heading-72 leading-[0.95] text-[var(--ds-gray-1000)]">
                Let&apos;s build agents.
              </h1>
            </div>
          }
        />
      </Slide>
    ),
  },
];
