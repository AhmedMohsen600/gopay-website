"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Logo } from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string; highlight?: boolean }>;
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );
  const t = useTranslations("header");
  const pathname = usePathname();
  const locale = useLocale();

  // Navigation items with optional children for dropdowns
  const navItems: NavItem[] = [
    { label: t("home"), href: "/" },
    { label: t("whoWeAre"), href: "/who-we-are" },
    { label: t("features"), href: "/features" },
    {
      label: t("pricing"),
      href: "/pricing",
      children: [
        { label: t("gopay"), href: "/pricing/gopay" },
        { label: t("goInvoices"), href: "/pricing/go-invoices" },
      ],
    },
    { label: t("faq"), href: "/faq" },
    {
      label: t("newsAndBlog"),
      href: "/news",
      children: [
        { label: t("news"), href: "/news" },
        { label: t("blog"), href: "/blog" },
      ],
    },
    { label: t("contactUs"), href: "/contact-us" },
  ];

  const toggleDropdown = (href: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  const setDropdownOpen = (href: string, isOpen: boolean) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [href]: isOpen,
    }));
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname.match(/^\/(en|ar)$/);
    }
    return pathname.includes(href);
  };

  const isRtl = locale === "ar";

  return (
    <>
      {/* Desktop/Tablet Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, y: { duration: 0.5 } }}
        className={`fixed top-6 inset-x-0 mx-auto z-50 w-[95%] xl:rounded-none xl:w-full ${
          isRtl ? "max-w-[1400px]" : "max-w-[1200px]"
        }`}
      >
        <motion.nav
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : "auto",
          }}
          className={`bg-[#FFFFFF80] transition-all duration-300 backdrop-blur-[15px] xl:h-[66.4px] xl:w-full ${
            mobileMenuOpen ? "rounded-xl" : "rounded-xl"
          } ${
            mobileMenuOpen ? "p-4 " : "py-3 px-4"
          } xl:px-6 xl:py-3 flex flex-col xl:flex-row items-start xl:items-center xl:justify-between xl:gap-[10px]`}
        >
          {/* Top Bar - Logo and Menu Toggle */}
          <div className="flex items-center justify-between w-full xl:flex-1 xl:justify-start">
            {/* Brand/Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Logo className="shrink-0 w-[90px] h-[19px] md:w-[117px] xl:h-[24px]" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg transition-colors relative w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 relative flex items-center justify-center">
                {/* Top Line */}
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 0 : -5,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-[22px] rounded-full h-[2.5px] bg-dark absolute"
                  style={{ transformOrigin: "center" }}
                />
                {/* Bottom Line */}
                <motion.span
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? 0 : 5,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-[22px] rounded-full h-[2.5px] bg-dark absolute"
                  style={{ transformOrigin: "center" }}
                />
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div
            className={`hidden xl:flex items-center ${isRtl ? "gap-4.5" : "gap-6"} justify-start`}
          >
            {navItems.map((item) => {
              // Items with dropdown menu
              if (item.children && item.children.length > 0) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.href, true)}
                    onMouseLeave={() => setDropdownOpen(item.href, false)}
                  >
                    <button
                      className={`group flex items-center gap-1 text-base font-${
                        locale === "ar" ? "bold" : "normal"
                      } transition-colors ${
                        isActive(item.href) ? "text-secondary" : "text-text-5"
                      } whitespace-nowrap`}
                    >
                      {item.label}
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={
                          isActive(item.href) ? "text-secondary" : "text-dark"
                        }
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openDropdowns[item.href] && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full start-0 mt-2 min-w-[105px] bg-white rounded-xl border border-stroke-1 shadow-lg overflow-hidden z-50"
                        >
                          {item.children.map((childItem) => (
                            <Link
                              key={childItem.href}
                              href={childItem.href}
                              className="block px-3 py-2 text-sm font-normal transition-colors whitespace-nowrap group"
                            >
                              <Typography
                                variant="p16"
                                className={
                                  isActive(childItem.href) ||
                                  childItem.highlight
                                    ? "text-secondary"
                                    : "text-dark group-hover:text-secondary"
                                }
                              >
                                {childItem.label}
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
                  } whitespace-nowrap`}
                >
                  <motion.span
                    className="relative inline-block overflow-hidden"
                    initial="rest"
                    whileHover="hover"
                  >
                    <motion.span
                      className={`inline-block ${
                        locale === "ar" ? "font-bold" : "font-normal"
                      }`}
                      variants={{
                        rest: { y: 0, opacity: 1 },
                        hover: { y: "-100%", opacity: 0 },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {item.label}
                    </motion.span>
                    <motion.span
                      className={`absolute top-0 start-0 inline-block ${
                        locale === "ar" ? "font-bold" : "font-normal"
                      }`}
                      variants={{
                        rest: { y: "100%", opacity: 0 },
                        hover: { y: 0, opacity: 1 },
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.span>
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex xl:flex-1 items-center justify-end gap-2">
            <Button
              variant="secondary"
              asChild
              className="font-normal whitespace-nowrap"
            >
              <a
                href="https://app.gopay.sa/wbiller-v2/#/sign-in"
                target="_blank"
                rel="noopener"
              >
                {t("signIn")}
              </a>
            </Button>
            <Button asChild className="font-normal whitespace-nowrap">
              <a
                href="https://app.gopay.sa/wbiller-v2/#/kyc"
                target="_blank"
                rel="noopener"
              >
                {t("getStarted")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="xl:hidden w-full overflow-visible"
              >
                <div className="flex flex-col gap-4 pt-4 border-t border-white mt-3">
                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <div key={item.href} className="relative">
                        {item.children && item.children.length > 0 ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(item.href)}
                              className={`flex items-center gap-2 text-base font-medium transition-colors ${
                                isActive(item.href)
                                  ? "text-secondary"
                                  : "text-text-5"
                              }`}
                            >
                              {item.label}
                              <CaretDown
                                size={20}
                                weight="bold"
                                className={`transition-transform ${
                                  isActive(item.href)
                                    ? "text-secondary"
                                    : "text-dark"
                                } ${
                                  openDropdowns[item.href] ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            <AnimatePresence>
                              {openDropdowns[item.href] && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute top-full start-0 mt-2 min-w-[105px] bg-white rounded-xl border border-stroke-1 shadow-lg overflow-hidden z-50"
                                >
                                  {item.children.map((childItem) => (
                                    <Link
                                      key={childItem.href}
                                      href={childItem.href}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setDropdownOpen(item.href, false);
                                      }}
                                      className="block px-3 py-2 text-sm font-normal transition-colors whitespace-nowrap group"
                                    >
                                      <Typography
                                        variant="p16"
                                        className={
                                          isActive(childItem.href) ||
                                          childItem.highlight
                                            ? "text-secondary"
                                            : "text-dark group-hover:text-secondary"
                                        }
                                      >
                                        {childItem.label}
                                      </Typography>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block text-base font-medium transition-colors ${
                              isActive(item.href)
                                ? "text-secondary"
                                : "text-text-5"
                            }`}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  {/* Language Switcher */}
                  <div className="pb-2">
                    <LanguageSwitcher mobile />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row gap-3">
                    <Button
                      variant="secondary"
                      className="flex-1 justify-center"
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
                      className="flex-1 justify-center"
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
    </>
  );
}
