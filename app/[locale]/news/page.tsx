import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";
import { NewsCard } from "../components";

const newsData = [
  {
    imageSrc:
      "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
    imageAlt: "School Expo",
    title: "School Expo",
    description: "School Expo",
    date: "2025-01-01",
    className: "col-span-3",
    imageContainerClassName: "min-h-[500px]",
    contentContainerClassName: "md:min-h-[163px]",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
    imageAlt: "School Expo",
    title: "School Expo",
    description: "School Expo",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "Seamless Exhibition",
    title: "Seamless Exhibition",
    description: "Seamless Exhibition",
    date: "2025-01-01",
  },
];

export default function NewsPage() {
  return (
    <div>
      <HeroSection
        className="md:min-h-[75vh]"
        badge="Our News"
        title={
          <Typography variant="h2">
            <span className="text-secondary">GoPay</span> Latest News
          </Typography>
        }
        description={
          <div className="max-w-[700px] mx-auto text-center">
            <Typography variant="p18" className="tracking-normal">
              Follow the latest GoPay news, new partnerships, and official
              updates on our e-payment, billing, and collection services.
              Whether you&apos;re our biller or a partner, contributors to this
              page provide up-to-date content that has proven its mettle in the
              Saudi market.
            </Typography>
          </div>
        }
      />

      <section>
        <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              imageSrc={news.imageSrc}
              imageAlt={news.imageAlt}
              title={news.title}
              description={news.description}
              date={news.date}
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
