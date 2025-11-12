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
          <Typography variant="h2">
            <span className="text-secondary">{t("titlePart1")}</span>{" "}
            {t("titlePart2")}
          </Typography>
        }
        description={
          <div className="max-w-[700px] mx-auto text-center">
            <Typography variant="p18" className="tracking-normal">
              {t("description")}
            </Typography>
          </div>
        }
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
