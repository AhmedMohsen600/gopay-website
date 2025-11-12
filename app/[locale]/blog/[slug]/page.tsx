"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { blogsData } from "../data";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const t = useTranslations("blog");

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) {
    return null; // Loading state
  }

  // Find the blog item by slug
  const blogItem = blogsData.find((item) => item.slug === slug);
  const blogIndex = blogsData.findIndex((item) => item.slug === slug);

  if (!blogItem || blogIndex === -1) {
    notFound();
  }

  return (
    <div>
      <section className=" pt-[160px] pb-[100px]">
        <div className="max-w-[800px] mx-auto space-y-4">
          {/* Title */}
          <Typography variant="h3" className="text-center ">
            {t(`blog.${blogIndex}.title`)}
          </Typography>

          {/* Description */}
          <Typography
            variant="p18"
            className="text-center text-text-4  max-w-[700px] mx-auto"
          >
            {t(`blog.${blogIndex}.description`)}
          </Typography>

          {/* Date */}
          <Typography variant="p16" className="text-center text-text-3 ">
            {t(`blog.${blogIndex}.date`)}
          </Typography>

          {/* Main Image */}
          <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden  ">
            <Image
              src={blogItem.imageSrc}
              alt={t(`blog.${blogIndex}.imageAlt`)}
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
