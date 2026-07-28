'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from 'next-themes';
import { useHasMounted, useSectionInView } from '@/common/lib/hooks';
import SectionHeading from '@/common/components/shared/section-heading';
import { experiencesData } from '@/common/lib/data';
import SectionDivider from '@/common/components/shared/section-divider';
import { useLocale } from '@/common/stores/locale';

const sectionHeading = {
  de: 'Erfahrung',
  en: 'My experience',
} as const;

export default function Experience() {
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();
  const { locale } = useLocale();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>{sectionHeading[locale]}</SectionHeading>
      <VerticalTimeline animate={false} lineColor={theme === 'light' ? '#9ca3af' : '#e5e7eb'}>
        {ihasMounted &&
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                  borderRadius: '1rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #9ca3af',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === 'light' ? '#f3f4f6' : '#1a1f2b',
                  boxShadow:
                    theme === 'light'
                      ? '0 0 0 4px var(--icon-shadow)' // z. B. Tailwind "indigo-500"
                      : '0 0 0 4px var(--icon-shadow)', // dein Darkmode Primary
                  fontSize: '1.5rem',
                }}
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="!mt-0 font-normal">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description[locale]}
                </p>
                {'highlights' in item && item.highlights && (
                  <ul className="!mt-3 list-disc space-y-1 pl-4 text-sm !font-normal text-gray-700 dark:text-white/75">
                    {item.highlights[locale].map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
      </VerticalTimeline>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}