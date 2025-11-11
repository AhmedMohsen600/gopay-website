import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "./components/contact-form";
import { Typography } from "@/components/ui/typography";

export default async function ContactUsPage() {
  const t = await getTranslations("contact.hero");

  return (
    <div>
      <HeroSection
        badge={t("badge")}
        title={t("title")}
        description={
          <div className="mx-auto flex max-w-[700px] flex-col gap-4 text-center">
            <Typography variant="h5">{t("headline")}</Typography>
            <Typography variant="p18" className="text-text-3">
              {t("body")}
            </Typography>
          </div>
        }
        className="min-h-[60vh] pt-20 md:min-h-[60vh]"
      />
      <section className="relative z-10 px-6 pb-14 md:px-16 md:pb-20 xl:pt-8 xl:pb-[100px]">
        <div className="mx-auto max-w-[800px]">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
