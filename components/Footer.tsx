"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { CTASection } from "./CTASection";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24">
      {/* CTA Section */}
      <CTASection />

      {/* Footer Links Section */}
      <section className="py-12 px-4 bg-primary">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* About GoPay Column */}
            <div>
              <Typography
                variant="h6"
                className="text-white font-bold mb-4 text-lg"
              >
                {t("aboutGoPay.title")}
              </Typography>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("aboutGoPay.whatIsGoPay")}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://app.gopay.sa/registration.html"
                    target="_blank"
                    rel="noopener"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("aboutGoPay.signUp")}
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.gopay.sa/wbiller/#/login"
                    target="_blank"
                    rel="noopener"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("aboutGoPay.signIn")}
                  </a>
                </li>
              </ul>
            </div>

            {/* About IFS Column */}
            <div>
              <Typography
                variant="h6"
                className="text-white font-bold mb-4 text-lg"
              >
                {t("aboutIFS.title")}
              </Typography>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/company"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("aboutIFS.aboutCompany")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("aboutIFS.news")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/location"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("aboutIFS.location")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <Typography
                variant="h6"
                className="text-white font-bold mb-4 text-lg"
              >
                {t("resources.title")}
              </Typography>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/service-license"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("resources.serviceLicense")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("resources.faqs")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("resources.terms")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("resources.dataProtection")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <Typography
                variant="h6"
                className="text-white font-bold mb-4 text-lg"
              >
                {t("contact.title")}
              </Typography>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {t("contact.helpSupport")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Logo Column */}
            <div className="flex flex-col items-start lg:items-center">
              <Logo className="brightness-0 invert" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <Typography variant="p14" className="text-white/60">
              © {currentYear} {t("copyright")}
            </Typography>
          </div>
        </div>
      </section>
    </footer>
  );
}

