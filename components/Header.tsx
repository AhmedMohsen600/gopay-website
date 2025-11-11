"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Logo } from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { List, X, CaretDown } from "@phosphor-icons/react/dist/ssr";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();

  // Navigation items
  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("whoWeAre"), href: "/who-we-are" },
    { label: t("features"), href: "/features" },
    { label: t("pricing"), href: "/pricing", hasDropdown: true },
    { label: t("faq"), href: "/faq" },
    { label: t("newsAndBlog"), href: "/news", hasDropdown: true },
    { label: t("contactUs"), href: "/contact" },
  ];

  // Pricing dropdown items
  const pricingDropdownItems = [
    { label: t("gopay"), href: "/pricing/gopay" },
    { label: t("goInvoices"), href: "/pricing/go-invoices" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname.match(/^\/(en|ar)$/);
    }
    return pathname.includes(href);
  };

  return (
    <>
      {/* Desktop/Tablet Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, y: { duration: 0.5 } }}
        className="fixed top-6 inset-x-0 mx-auto z-50 w-full max-w-[1200px]"
      >
        <nav
          className="backdrop-blur-xl h-[66.4px] bg-white/24 lg:w-[1200px] lg:rounded-xl px-6 py-3 flex items-center sm:justify-between gap-[10px]"
          style={{ backdropFilter: "blur(20px)" }}
        >
          {/* Brand/Logo */}
          <Link href="/" className="flex flex-1 items-center shrink-0">
            <Logo className="shrink-0" />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 justify-start">
            {navItems.map((item) => {
              // Special handling for Pricing dropdown
              if (item.hasDropdown && item.href === "/pricing") {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setPricingDropdownOpen(true)}
                    onMouseLeave={() => setPricingDropdownOpen(false)}
                  >
                    <button
                      className={`group flex items-center gap-1 text-base font-normal transition-colors ${
                        isActive(item.href) ? "text-secondary" : "text-text-5"
                      }`}
                    >
                      {item.label}
                      <CaretDown
                        size={16}
                        weight="bold"
                        className="text-text-5"
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {pricingDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[200px] bg-white rounded-xl border border-stroke-1 shadow-lg overflow-hidden z-50"
                        >
                          {pricingDropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm font-normal text-text-5 hover:bg-bg-grey transition-colors"
                            >
                              <Typography
                                variant="p16"
                                className={
                                  dropdownItem.href === "/pricing/gopay"
                                    ? "text-secondary"
                                    : "text-dark"
                                }
                              >
                                {dropdownItem.label}
                              </Typography>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular navigation items
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center gap-1 text-base font-normal transition-colors ${
                    isActive(item.href) ? "text-secondary" : "text-text-5"
                  }`}
                >
                  {!item.hasDropdown ? (
                    <motion.span
                      className="relative inline-block overflow-hidden"
                      initial="rest"
                      whileHover="hover"
                    >
                      <motion.span
                        className="inline-block"
                        variants={{
                          rest: { y: 0, opacity: 1 },
                          hover: { y: "-100%", opacity: 0 },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {item.label}
                      </motion.span>
                      <motion.span
                        className="absolute top-0 left-0 inline-block"
                        variants={{
                          rest: { y: "100%", opacity: 0 },
                          hover: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        {item.label}
                      </motion.span>
                    </motion.span>
                  ) : (
                    <>
                      {item.label}
                      <CaretDown
                        size={16}
                        weight="bold"
                        className="text-text-5"
                      />
                    </>
                  )}
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex lg:flex-1 items-center justify-end gap-2">
            <Button
              variant="secondary"
              asChild
              className="font-normal whitespace-nowrap"
            >
              <a
                href="https://app.gopay.sa/wbiller/#/login"
                target="_blank"
                rel="noopener"
              >
                {t("signIn")}
              </a>
            </Button>
            <Button asChild className="font-normal whitespace-nowrap">
              <a
                href="https://app.gopay.sa/registration.html"
                target="_blank"
                rel="noopener"
              >
                {t("getStarted")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-bg-grey transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} weight="bold" className="text-dark" />
            ) : (
              <List size={24} weight="bold" className="text-dark" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-md z-50 lg:hidden"
            >
              <div className="backdrop-blur-xl bg-white/95 rounded-xl border border-stroke-1 p-6 shadow-lg">
                <div className="flex flex-col gap-4">
                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-2 pb-4 border-b border-stroke-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-bg-grey ${
                          isActive(item.href)
                            ? "text-primary bg-bg-grey"
                            : "text-text-5"
                        }`}
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <CaretDown
                            size={16}
                            weight="bold"
                            className="text-text-3"
                          />
                        )}
                      </Link>
                    ))}
                  </nav>

                  {/* Language Switcher */}
                  <div className="pb-4 border-b border-stroke-1">
                    <Typography variant="p14" className="text-text-3 mb-2">
                      {t("language")}
                    </Typography>
                    <LanguageSwitcher />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="secondary"
                      className="w-full justify-center"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a
                        href="https://app.gopay.sa/wbiller/#/login"
                        target="_blank"
                        rel="noopener"
                      >
                        {t("signIn")}
                      </a>
                    </Button>
                    <Button
                      className="w-full justify-center"
                      asChild
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a
                        href="https://app.gopay.sa/registration.html"
                        target="_blank"
                        rel="noopener"
                      >
                        {t("getStarted")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
