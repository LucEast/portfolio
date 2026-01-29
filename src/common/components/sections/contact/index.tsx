"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";
import { sendEmail } from "@/common/utils/actions/send-email";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const { ref } = useSectionInView("contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center px-4 sm:px-6 py-16 sm:py-20 pb-32 sm:pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{
        opacity: 0.8,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>{t('title')}</SectionHeading>
      <div className="w-full max-w-[38rem] px-4">
        <p className="mb-12 sm:mb-20 mt-4 sm:mt-6 text-sm sm:text-base text-gray-700 dark:text-white/80">
          {t('description')}{" "}
          <a className="underline break-all" href="mailto:info@luceast.de">
            info@luceast.de
          </a>{" "}
          {t('or')}
        </p>

        <form
          className="mt-6 sm:mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(t('error'));
              return;
            }

            toast.success(t('success'));
          }}
        >
          <input
            className="h-12 sm:h-14 text-sm sm:text-base rounded-lg border bg-gray-50 px-3 sm:px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder={t('form.email')}
          />
          <textarea
            className="my-3 h-40 sm:h-52 text-sm sm:text-base resize-none rounded-lg border bg-gray-50 p-3 sm:p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="message"
            placeholder={t('form.message')}
            required
            maxLength={5000}
          />
          <div className="flex justify-center">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
