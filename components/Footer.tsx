"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { CTASection } from "./CTASection";
import {
  XLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();

  // Check if current route is home
  const isHome = pathname === "/" || pathname.match(/^\/(en|ar)$/);

  const footerColumns = [
    {
      id: "aboutGoPay",
      titleKey: "aboutGoPay.title",
      links: [
        {
          href: "/#product-suite",
          labelKey: "aboutGoPay.whatIsGoPay",
          isInternal: true,
        },
        {
          href: "https://app.gopay.sa/registration.html",
          labelKey: "aboutGoPay.signUp",
          isInternal: true,
        },
        {
          href: "https://app.gopay.sa/wbiller/#/login",
          labelKey: "aboutGoPay.signIn",
          isInternal: true,
        },
      ],
    },
    {
      id: "aboutIFS",
      titleKey: "aboutIFS.title",
      links: [
        {
          href: "https://ifs.sa/",
          labelKey: "aboutIFS.aboutCompany",
         },
        { href: "https://ifs.sa/#news", labelKey: "aboutIFS.news" },
        { href: "https://www.google.com/maps/place/2745+Prince+Sultan+Bin+Abdulaziz+Rd,+6780,+Al+Mathar+Ash+Shamali,+Riyadh+12312/@24.681805,46.6704267,21z/data=!4m5!3m4!1s0x3e2f034b4a5fda9b:0xdaeff1501e331986!8m2!3d24.6819942!4d46.6706919?shorturl=1", labelKey: "aboutIFS.location"},
      ],
    },
    {
      id: "resources",
      titleKey: "resources.title",
      links: [
        {
          href: "/who-we-are",
          labelKey: "resources.serviceLicense",
          isInternal: true,
        },
        { href: "/faq", labelKey: "resources.faqs", isInternal: true },
        { href: "/terms", labelKey: "resources.terms", isInternal: true },
        {
          href: "/data-protection-policy",
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
    <footer
      className={cn(
        " relative flex flex-col gap-10 md:gap-16 xl:gap-20 ",
        isHome ? "bg-bg" : "bg-white"
      )}
    >
      {/* CTA Section */}
      <CTASection />
      {/* Footer Links Section */}
      <section className="p-8 md:pt-14 md:pb-10 md:px-10 bg-primary relative overflow-hidden z-20">
        <div className="container mx-auto max-w-[1200px] mb-12">
          <div className="grid grid-cols-2  md:grid-cols-4 gap-8 lg:gap-12">
            {footerColumns.map((column) => (
              <div key={column.id}>
                <Typography
                  variant="h5"
                  className="text-white font-bold mb-4  "
                >
                  {t(column.titleKey)}
                </Typography>
                <ul className="space-y-1.5">
                  {column.links.map((link, index) => (
                    <li key={index}>
                      {link?.isInternal ? (
                        <Link
                          href={link.href}
                          className="text-white hover:text-white hover:opacity-80 hover:underline transition-colors text-xs md:text-sm  xl:text-base  "
                        >
                          {t(link.labelKey)}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener"
                          className="text-white/80 hover:text-white hover:opacity-80 hover:underline transition-colors text-xs md:text-sm  xl:text-base"
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

        {/* Third row - Address, Get In Touch & Social */}
        <div className="container mx-auto max-w-[1200px] mt-16  ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8  ">
            {/* Address */}
            <div className=" col-span-2">
              <Typography variant="h5" className="text-white font-bold mb-4">
                {t("address")}
              </Typography>
              <Typography variant="p14" className="text-white/80">
                {t("companyInfo.addressText")}
              </Typography>
            </div>

            {/* Get In Touch */}
            <div className="">
              <Typography variant="h5" className="text-white font-bold mb-4">
                {t("getInTouch")}
              </Typography>
              <div>
                <a
                  href={`tel:${t("companyInfo.phone")}`}
                  className="block text-[#96bbff] hover:underline transition-colors text-sm underline sm:text-base"
                >
                  {t("companyInfo.phone")}
                </a>
                <a
                  href={`mailto:${t("companyInfo.email")}`}
                  className="block text-[#96bbff] hover:underline transition-colors text-sm underline sm:text-base"
                >
                  {t("companyInfo.email")}
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="">
              <Typography variant="h5" className="text-white font-bold mb-4">
                {t("socialMedia")}
              </Typography>
              <div className="flex gap-5">
                <a
                  href="https://twitter.com/gopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <XLogoIcon
                    className="size-6 text-white hover:text-white/80"
                    weight="bold"
                  />
                </a>
                <a
                  href="https://instagram.com/gopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-6 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramLogoIcon
                    className="size-6 text-white hover:text-white/80"
                    weight="bold"
                  />
                </a>
                <a
                  href="https://linkedin.com/company/gopay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-6 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinLogoIcon
                    className="size-6 text-white hover:text-white/80"
                    weight="bold"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Gopay ad IFS logos div */}
        <div className="container mx-auto max-w-[1200px] flex items-center  md:justify-between gap-13 border-t border-white/10 mt-16 pt-4">
          <div className="flex-1 flex items-center  ">
            <Image
              src="https://framerusercontent.com/images/XYe5lLtYXj7Q9SIpZmNGSWGEfYc.png?scale-down-to=512&width=3024&height=905"
              alt="IFS Logo"
              width={3024}
              height={905}
              className="md:h-[59px] h-8 w-auto"
            />
          </div>
          {/* Copyright */}
          <div className="mt-8 text-center flex-1">
            <Typography variant="p14" className="text-white text-xs md:text-sm">
              © {t("copyrightText")}
            </Typography>
            <Typography variant="p14" className="text-white text-xs md:text-sm">
              {t("companyName")}
            </Typography>
          </div>
          {/* SADAD Certification Badge */}
          <div className="flex justify-end items-center flex-1">
            <Image
              src="https://framerusercontent.com/images/XloR1snWZTYPShXYFBKP2Qh1Bk.png?width=300&height=300"
              alt="Certified By SADAD"
              width={300}
              height={300}
              className="w-[110px] h-[110px] md:w-[140px] md:h-[140px]"
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
