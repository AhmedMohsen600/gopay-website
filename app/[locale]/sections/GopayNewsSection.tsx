"use client";

import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { NewsCard } from "../components";

export function GopayNewsSection() {
  const t = useTranslations("home.news");

  const newsItems = [
    {
      id: "schoolExpo",
      imageSrc:
        "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
      imageAlt: t("items.schoolExpo.imageAlt"),
      title: t("items.schoolExpo.title"),
      description: t("items.schoolExpo.description"),
      date: t("items.schoolExpo.date"),
    },
    {
      id: "seamlessExhibition",
      imageSrc:
        "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
      imageAlt: t("items.seamlessExhibition.imageAlt"),
      title: t("items.seamlessExhibition.title"),
      description: t("items.seamlessExhibition.description"),
      date: t("items.seamlessExhibition.date"),
    },
  ];

  return (
    <section className="md:py-[120px] py-14 bg-white px-6 md:px-10">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center justify-center">
          <Typography className="mb-3 font-semibold" variant="h2">
            <span className="text-secondary">{t("title.highlight")}</span>{" "}
            {t("title.rest")}
          </Typography>
          <Typography variant="p18">{t("subtitle")}</Typography>
        </div>

        <div className="grid gap-6 mx-auto max-w-[1000px] md:grid-cols-2">
          {newsItems.map((item) => (
            <NewsCard
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
