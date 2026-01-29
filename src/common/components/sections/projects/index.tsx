"use client";

import React from "react";
import { useSectionInView } from "@/common/lib/hooks";
import { getProjectsData } from "@/common/lib/data-i18n";
import Project from "./_components/project";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import { useTranslations, useLocale } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const projectsData = getProjectsData(locale);
  const { ref } = useSectionInView("projects", 0.25);

  return (
    <section
      className="flex min-h-screen w-full pt-16 sm:pt-0 scroll-mt-16 sm:scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="my-24">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <SectionDivider />
    </section>
  );
}
