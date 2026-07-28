'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLocale } from '@/common/stores/locale';
import type { CaseStudyContent } from '@/common/lib/case-studies/types';

const labels = {
  de: {
    back: '← Zurück zum Portfolio',
    problem: 'Problem',
    context: 'Kontext & Rahmenbedingungen',
    responsibility: 'Meine Verantwortung',
    approach: 'Lösungsweg & Architektur',
    decisions: 'Wichtige Entscheidungen & Trade-offs',
    outcome: 'Ergebnis',
    retrospective: 'Was ich heute anders machen würde',
    links: 'Links',
  },
  en: {
    back: '← Back to portfolio',
    problem: 'Problem',
    context: 'Context & constraints',
    responsibility: 'My responsibility',
    approach: 'Approach & architecture',
    decisions: 'Key decisions & trade-offs',
    outcome: 'Outcome',
    retrospective: "What I'd do differently today",
    links: 'Links',
  },
} as const;

type CaseStudyProps = {
  content: CaseStudyContent;
  liveDownloads?: number;
};

export default function CaseStudy({ content, liveDownloads }: CaseStudyProps) {
  const { locale } = useLocale();
  const t = labels[locale];
  const s = content.sections;

  const downloadsText =
    liveDownloads !== undefined
      ? liveDownloads.toLocaleString(locale === 'de' ? 'de-DE' : 'en-US')
      : locale === 'de'
        ? '17.000'
        : '17,000';

  const outcomeText = s.outcome[locale].replace('{{downloads}}', downloadsText);

  return (
    <main className="flex w-full flex-col items-center px-4 py-28 dark:bg-darkBg dark:text-white">
      <div className="w-full max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:text-white/60 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        <h1 className="text-3xl font-bold sm:text-4xl">{content.title}</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-white/75">
          {content.subtitle[locale]}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {content.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-lightPrimary px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-darkPrimary"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-10">
          <section>
            <h2 className="text-xl font-semibold">{t.problem}</h2>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
              {s.problem[locale]}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.context}</h2>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
              {s.context[locale]}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.responsibility}</h2>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
              {s.responsibility[locale]}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.approach}</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700 dark:text-white/80">
              {s.approach[locale].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.decisions}</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-gray-700 dark:text-white/80">
              {s.decisions[locale].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.outcome}</h2>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
              {outcomeText}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.retrospective}</h2>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
              {s.retrospective[locale]}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">{t.links}</h2>
            <ul className="mt-2 space-y-1">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lightPrimary underline dark:text-darkPrimary"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
