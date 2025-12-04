import type { Metadata } from "next";
import { Figtree, Tajawal } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ZohoChat } from "@/components/ZohoChat";
import "../globals.css";

// English font - Figtree
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// Arabic font - Tajawal
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GoPay - Fast, Secure Payment Solutions",
  description:
    "Transform your business with modern payment solutions. Accept payments from anywhere in the world.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${figtree.variable} ${tajawal.variable}`}
    >
      <body
        className="antialiased bg-white text-text-5"
        style={{
          fontFamily:
            locale === "ar" ? "var(--font-tajawal)" : "var(--font-figtree)",
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>

        {/* Zoho Guided Conversations Chat Widget */}
        <ZohoChat />
      </body>
    </html>
  );
}
