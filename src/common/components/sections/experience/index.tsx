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
import SectionDivider from '@/common/components/shared/section-divider';
import { useTranslations } from 'next-intl';
import { getExperiencesData } from '@/common/lib/data-i18n';

export default function Experience() {
  const t = useTranslations();
  const experiencesData = getExperiencesData(t);
  const { ref } = useSectionInView('experience');
  const { theme } = useTheme();
  const ihasMounted = useHasMounted();

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full px-4 sm:px-6 scroll-mt-20 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>{t('experience.title')}</SectionHeading>
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
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
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
                      ? '0 0 0 4px var(--icon-shadow)'
                      : '0 0 0 4px var(--icon-shadow)',
                  fontSize: '1.2rem',
                }}
              >
                <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                <p className="!mt-0 text-sm sm:text-base font-normal">{item.location}</p>
                <p className="!mt-1 text-sm sm:text-base !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
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