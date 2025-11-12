"use client";
import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";
import { NewsCard } from "../components";
import { useTranslations } from "next-intl";
import { blogsData } from "./data";

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <div>
      <HeroSection
        className="md:min-h-[75vh]"
        badge={t("badge")}
        title={
          <div className="text center space-y-4">
            <Typography variant="h2" className="text-center">
              <span className="text-secondary">{t("titlePart1")}</span>{" "}
              {t("titlePart2")}
            </Typography>
            <Typography variant="h5" className="text-center leading-[1.1em]">
              {t("subtitlePart1")} <br />
              {t("subtitlePart2")}
            </Typography>
          </div>
        }
        description={t("description")}
      />

      <section className="px-6 md:px-16 xl:pb-[120px] pb-20  pt-6 md:pt-0">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {blogsData.map((news, index) => (
            <NewsCard
              key={index}
              imageSrc={news.imageSrc}
              imageAlt={t(`blog.${index}.imageAlt`)}
              title={t(`blog.${index}.title`)}
              description={t(`blog.${index}.description`)}
              date={t(`blog.${index}.date`)}
              className={news.className}
              imageContainerClassName={news.imageContainerClassName}
              contentContainerClassName={news.contentContainerClassName}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
