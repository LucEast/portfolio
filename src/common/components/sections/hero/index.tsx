"use client";

// import "next-cloudinary/dist/cld-video-player.css";
import SectionDivider from "@/common/components/shared/section-divider";
import TextAnimation from "./_components/text-animation";
import { useSectionInView } from "@/common/lib/hooks";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { smoothScrollTo } from "@/common/lib/utils";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <>
      <section
        className="relative flex h-screen w-full scroll-mt-36 flex-col items-center justify-center bg-lightBg dark:bg-darkBg"
        id="home"
        ref={ref}
      >
        {/* Animated Background Blobs */}
        {/* Lava Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink-500 opacity-40 blur-[100px] animate-blob" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-purple-500 opacity-40 blur-[100px] animate-blob animation-delay-2000" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-30 blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="container flex flex-col items-center justify-center text-center tracking-wide text-black dark:text-white">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hey!<br />
            I'm Lucas 👋
          </motion.h1>

          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Kubernetes · DevSecOps · IaC & Automation Enthusiast
          </motion.p>

          <motion.div
            className="mt-6 mb-10 w-full px-4 text-center text-2xl font-bold text-primary min-h-[56px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <TextAnimation delay={1.2} baseText={`My favorite tools are code, Git & coffee ☕`} />
          </motion.div>

          <motion.div
            className="z-10 flex flex-wrap justify-center gap-4 px-4 text-sm font-medium lg:text-lg"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <a
              className="group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full 
                        bg-zinc-900 text-white hover:bg-lightPrimary 
                        dark:bg-white dark:text-black dark:hover:bg-darkPrimary
                        px-7 py-3 outline-none transition sm:w-auto"
              onClick={(e) => {
                smoothScrollTo({ e, id: "contact" });
                setActiveSection("contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span>Contact me here</span>
            </a>

            <a
              className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-gray-100 dark:bg-white/20 dark:text-white dark:hover:bg-white/50 sm:w-auto"
              href="/CV_Lucas_Ostmann.pdf"
              download
            >
              <span>Download CV</span>
            </a>

            <div className="flex gap-2">
              <a
                className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/20 dark:text-white/60 dark:hover:bg-white/50"
                href="https://www.linkedin.com/in/luceast/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a
                className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/20 dark:text-white/60 dark:hover:bg-white/50"
                href="https://github.com/LucEast"
                target="_blank"
              >
                {/* Lightmode Icon */}
                <Image
                  width={25}
                  height={25}
                  src={"/svgs/github-dark.svg"}
                  alt="github icon"
                  className="block dark:hidden"
                />
                {/* Darkmode Icon */}
                <Image
                  width={25}
                  height={25}
                  src={"/svgs/github-light.svg"}
                  alt="github icon (dark)"
                  className="hidden dark:block"
                />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 animate-bounce text-sm text-gray-500 dark:text-gray-400">
          ↓ Scroll down
        </div>
      </section>

      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </>
  );
}
