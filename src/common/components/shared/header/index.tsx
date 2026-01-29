"use client";

import { links } from "@/common/lib/data";
import { smoothScrollTo } from "@/common/lib/utils";
import { useActiveSectionContext } from "@/common/stores/active-section";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/common/theme/mode-toggler";
import { LanguageSwitcher } from "@/common/components/shared/language-switcher";

export default function Header() {
  const t = useTranslations("nav");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    smoothScrollTo({ e, id });
    setActiveSection(id as any);
    setTimeOfLastClick(Date.now());
    setMobileMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="relative z-[99]">
      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <motion.div
          className="fixed left-1/2 top-6 h-[3.25rem] px-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-white/80 dark:bg-gray-950/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        >
          <nav className="h-full flex items-center">
            <ul className="flex items-center justify-center gap-0.5 text-[0.85rem] font-medium">
              {links.map((link) => (
                <motion.li
                  className="relative"
                  key={link.id}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className={`relative z-10 flex items-center justify-center px-4 py-2 rounded-full uppercase transition whitespace-nowrap ${
                      link.id === activeSection
                        ? "text-white dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                    }`}
                    href={link.id}
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {t(link.id as any)}
                  </Link>

                  {link.id === activeSection && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-gray-900 dark:bg-gray-100"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
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
              className="fixed inset-0 top-16 bg-white/98 dark:bg-darkBg/98 backdrop-blur-md z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex h-full flex-col items-center justify-center pb-16 gap-12">
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
                
                {/* Settings section in mobile menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 items-center"
                >
                  <ModeToggle />
                  <LanguageSwitcher />
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
