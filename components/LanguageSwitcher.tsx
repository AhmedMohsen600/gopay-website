"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/ui/typography";

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "عربي" },
];

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export default function LanguageSwitcher({ mobile }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  if (mobile) {
    return (
      <div className="w-full">
        <button
          onClick={toggleOpen}
          className="w-full flex items-center gap-1 xl:gap-2 xl:py-2 text-base font-medium text-text-5 transition-colors"
        >
          <Globe className="size-[24px]" />

          <CaretDown
            size={20}
            weight="bold"
            className={`text-black transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pl-8"
            >
              <div className="flex flex-col gap-2 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`text-left text-base font-medium transition-colors ${
                      locale === lang.code ? "text-secondary" : "text-text-5"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 p-2 rounded-lg">
        <Globe className="text-text-5 size-[22px]" />
        <CaretDown size={16} weight="bold" className="text-text-5" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[140px] bg-white rounded-xl border border-stroke-1 shadow-lg overflow-hidden z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full block px-4 py-3 text-sm font-normal transition-colors text-left ${
                  locale === lang.code
                    ? "bg-secondary text-white hover:bg-secondary hover:text-white"
                    : "text-dark hover:bg-bg-grey hover:text-dark"
                }`}
              >
                <Typography
                  variant="p16"
                  className={locale === lang.code ? "text-white" : "text-dark"}
                >
                  {lang.name}
                </Typography>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
