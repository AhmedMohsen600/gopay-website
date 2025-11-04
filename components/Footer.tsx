"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { CTASection } from "./CTASection";
import { GoPayLogo } from "@/components/GoPayLogo";
import {
  XLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  const t = useTranslations("footer");

  const footerColumns = [
    {
      id: "aboutGoPay",
      titleKey: "aboutGoPay.title",
      links: [
        {
          href: "/about",
          labelKey: "aboutGoPay.whatIsGoPay",
          isInternal: true,
        },
        {
          href: "https://app.gopay.sa/registration.html",
          labelKey: "aboutGoPay.signUp",
          isInternal: false,
        },
        {
          href: "https://app.gopay.sa/wbiller/#/login",
          labelKey: "aboutGoPay.signIn",
          isInternal: false,
        },
      ],
    },
    {
      id: "aboutIFS",
      titleKey: "aboutIFS.title",
      links: [
        {
          href: "/company",
          labelKey: "aboutIFS.aboutCompany",
          isInternal: true,
        },
        { href: "/news", labelKey: "aboutIFS.news", isInternal: true },
        { href: "/location", labelKey: "aboutIFS.location", isInternal: true },
      ],
    },
    {
      id: "resources",
      titleKey: "resources.title",
      links: [
        {
          href: "/service-license",
          labelKey: "resources.serviceLicense",
          isInternal: true,
        },
        { href: "/faq", labelKey: "resources.faqs", isInternal: true },
        { href: "/terms", labelKey: "resources.terms", isInternal: true },
        {
          href: "/privacy",
          labelKey: "resources.dataProtection",
          isInternal: true,
        },
      ],
    },
    {
      id: "contact",
      titleKey: "contact.title",
      links: [
        { href: "/contact", labelKey: "contact.helpSupport", isInternal: true },
      ],
    },
  ];

  return (
    <footer className=" relative">
      {/* CTA Section */}
      <CTASection />

      {/* Footer Links Section */}
      <section className="p-8 md:py-16 md:px-10 bg-primary relative overflow-hidden z-20">
        {/* Gopay ad IFS logos div */}
        <div className="container mx-auto max-w-[1200px] mb-8 flex items-center  md:justify-between gap-13">
          <GoPayLogo className="md:h-9 w-auto h-7" />
          <Image
            src="https://framerusercontent.com/images/XYe5lLtYXj7Q9SIpZmNGSWGEfYc.png?scale-down-to=512&width=3024&height=905"
            alt="IFS Logo"
            width={3024}
            height={905}
            className="md:h-14 h-8 w-auto"
          />
        </div>
        <div className="container mx-auto max-w-[1200px] mb-12">
          <div className="grid grid-cols-2  md:grid-cols-4 gap-8 lg:gap-12">
            {footerColumns.map((column) => (
              <div key={column.id}>
                <Typography
                  variant="p16"
                  className="text-white font-bold mb-4 xl:text-base md:text-sm text-xs"
                >
                  {t(column.titleKey)}
                </Typography>
                <ul className="space-y-1.5">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      {link.isInternal ? (
                        <Link
                          href={link.href}
                          className="text-white hover:text-white transition-colors md:text-sm text-[13px]  "
                        >
                          {t(link.labelKey)}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          className="text-white/80 hover:text-white transition-colors text-sm"
                        >
                          {t(link.labelKey)}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Third row - Company Info & Social */}
        <div className="container mx-auto max-w-[1200px] mt-12  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:justify-items-center justify-items-start">
            {/* Company Information */}
            <div className="">
              <Typography
                variant="p14"
                className="text-[#7e8195] font-semibold text-xs sm:text-sm"
              >
                {t("companyInfo.name")}
              </Typography>
              <Typography
                variant="p14"
                className="text-[#7e8195] text-xs sm:text-sm"
              >
                {t("companyInfo.commercialReg")}
              </Typography>
              <Typography
                variant="p14"
                className="text-[#7e8195] text-xs sm:text-sm"
              >
                {t("companyInfo.license")}
              </Typography>
              <div className="pt-2.5 space-y-2.5">
                <a
                  href={`tel:${t("companyInfo.phone")}`}
                  className="block text-[#0059ff] hover:text-[#3A7BC8] transition-colors text-xs sm:text-sm underline"
                >
                  {t("companyInfo.phone")}
                </a>
                <a
                  href={`mailto:${t("companyInfo.email")}`}
                  className="block text-[#0059ff] hover:text-[#3A7BC8] transition-colors text-xs sm:text-sm"
                >
                  {t("companyInfo.email")}
                </a>
              </div>
            </div>

            {/* SADAD Certification Badge */}
            <div className="flex justify-center items-start">
              <Image
                src="https://framerusercontent.com/images/XloR1snWZTYPShXYFBKP2Qh1Bk.png?width=300&height=300"
                alt="Certified By SADAD"
                width={300}
                height={300}
                className="w-[110px] h-[110px] md:w-[150px] md:h-[150px]"
              />
            </div>

            {/* Social Media Links */}
            <div className="flex md:justify-end items-end justify-self-end">
              <div className="flex gap-5">
                <a
                  href="https://twitter.com/gopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] flex items-center justify-center   transition-colors"
                  aria-label="Twitter"
                >
                  <XLogoIcon
                    className="size-[17px] text-white hover:text-white/80"
                    weight="bold"
                  />
                </a>
                <a
                  href="https://instagram.com/gopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] flex items-center justify-center   transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogoIcon
                    className="size-[17px] text-white hover:text-white/80"
                    weight="bold"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/gopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] flex items-center justify-center   transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon
                    className="w-5 h-5 text-white hover:text-white/80"
                    weight="bold"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <Typography
            variant="p14"
            className="text-[#7e8195] text-xs md:text-sm"
          >
            © {t("copyright")}
          </Typography>
        </div>
      </section>
    </footer>
  );
}
