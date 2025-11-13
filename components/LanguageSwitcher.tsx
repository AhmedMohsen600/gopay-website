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

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

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
