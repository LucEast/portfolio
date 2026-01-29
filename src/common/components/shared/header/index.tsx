"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    smoothScrollTo({ e, id });
    setActiveSection(id as any);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-[99]">
      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <motion.div
          className="fixed left-1/2 top-6 h-[3.25rem] w-auto min-w-[36rem] max-w-[48rem] rounded-full border border-lightPrimary dark:border-darkPrimary border-opacity-40 bg-white/80 dark:bg-darkBg/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="fixed left-1/2 top-[1.7rem] flex h-[initial] -translate-x-1/2 py-0">
          <ul className="flex items-center justify-center gap-2 text-[0.85rem] font-medium transition-colors md:gap-3 lg:gap-4">
            {links.map((link) => (
              <motion.li
                className="relative flex items-center justify-center text-black dark:text-white"
                key={link.id}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="flex items-center justify-center px-3 py-3 uppercase transition whitespace-nowrap"
                  href={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {t(link.id as any)}

                  {link.id === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-full bg-lightPrimary dark:bg-darkPrimary"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <motion.div
          className="fixed left-0 right-0 top-0 h-16 border-b border-lightPrimary dark:border-darkPrimary border-opacity-40 bg-white/95 dark:bg-darkBg/95 shadow-sm backdrop-blur-[0.5rem]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="flex h-full items-center justify-between px-4">
            <Link href="home" onClick={(e) => handleLinkClick(e, "home")} className="text-lg font-bold">
              LO
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="z-50 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 top-16 bg-white/98 dark:bg-darkBg/98 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex h-full flex-col items-center justify-center pb-16">
                <ul className="flex flex-col gap-6 text-center">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative"
                    >
                      <Link
                        className="block px-8 py-3 text-2xl font-medium uppercase tracking-wide transition-colors hover:text-lightPrimary dark:hover:text-darkPrimary"
                        href={link.id}
                        onClick={(e) => handleLinkClick(e, link.id)}
                      >
                        {t(link.id as any)}
                        {link.id === activeSection && (
                          <motion.div
                            className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-lightPrimary dark:bg-darkPrimary"
                            layoutId="activeSectionMobile"
                          />
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
