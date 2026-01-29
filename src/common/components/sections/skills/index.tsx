"use client";

import React from "react";
import { skillsData } from "@/common/lib/data";
import { useSectionInView } from "@/common/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/common/components/shared/section-heading";
import SectionDivider from "@/common/components/shared/section-divider";
import { useTranslations } from "next-intl";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const t = useTranslations("skills");
  const { ref } = useSectionInView("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 pb-[100px] sm:pb-[150px] text-center dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <ul className="my-8 sm:my-26 mb-[80px] sm:mb-[150px] flex max-w-[53rem] flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="borderBlack flex items-center justify-center rounded-lg sm:rounded-xl bg-gray-200 px-3 sm:px-4 py-2 sm:py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={skill[1]}
              alt={skill[0]}
              width={20}
              height={20}
              className="mr-2 inline h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
            />
            <span className="text-xs sm:text-sm md:text-base">{skill[0]}</span>
          </motion.li>
        ))}
      </ul>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
