"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { newsData } from "../data";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const t = useTranslations("news");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) {
    return null; // Loading state
  }

  // Find the news item by slug
  const newsItem = newsData.find((item) => item.slug === slug);
  const newsIndex = newsData.findIndex((item) => item.slug === slug);

  if (!newsItem || newsIndex === -1) {
    notFound();
  }

  return (
    <div>
      <section className="px-6 pt-[100px] pb-16 md:pt-[160px] md:pb-[100px] md:px-16">
        <div className="max-w-[800px] mx-auto space-y-4">
          {/* Title */}
          <Typography
            variant="h3"
            className="text-center max-w-[600px] mx-auto font-medium"
          >
            {t(`news.${newsIndex}.title`)}
          </Typography>

          {/* Description */}
          <Typography
            variant="p16"
            className="text-center   max-w-[600px] mx-auto"
          >
            {t(`news.${newsIndex}.description`)}
          </Typography>

          {/* Date */}
          <Typography variant="p16" className="text-center text-[#1a1d21] ">
            {t(`news.${newsIndex}.date`)}
          </Typography>

          {/* Main Image */}
          <div className="relative w-full min-h-[360px] md:min-h-[480px] rounded-3xl overflow-hidden  ">
            <Image
              src={newsItem.imageSrc}
              alt={t(`news.${newsIndex}.imageAlt`)}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Placeholder Content */}
          <div className="prose prose-lg max-w-none">
            <Typography
              variant="p16"
              className="text-text-4 leading-relaxed mb-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Typography
              variant="p16"
              className="text-text-4 leading-relaxed mb-4"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
            <Typography
              variant="p16"
              className="text-text-4 leading-relaxed mb-4"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
            <Typography variant="p16" className="text-text-4 leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}
