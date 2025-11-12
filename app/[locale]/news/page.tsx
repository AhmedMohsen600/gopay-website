import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";
import { NewsCard } from "../components";

const newsData = [
  {
    imageSrc:
      "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
    imageAlt: "School Expo",
    title: "Media Coverage of GoPay Booth at #School_Expo",
    description:
      "Media coverage of the GoPay booth at #School_Expo, held for four days at Riyadh Front for Conferences and Exhibitions in August.",
    date: "August 24, 2025, 12:00 AM",
    className: "xl:col-span-3 md:col-span-2 col-span-1",
    imageContainerClassName: "md:min-h-[500px]",
    contentContainerClassName: "md:min-h-[163px]",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAlt: "GoPay Participation in Seamless Exhibition",
    title: "GoPay Participation in Seamless Exhibition",
    description:
      "Media coverage of the GoPay booth at #School_Expo, held for four days at Riyadh Front for Conferences and Exhibitions in August.",
    date: "January 9, 2025",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/axzz6ysTvd1Zc4C0TIq1eoKfy28.jpg?width=3936&height=2624",
    imageAlt: "GoPay Participation in Seamless Exhibition",
    title: "GoPay Participation in Seamless Exhibition",
    description:
      "Media coverage of the GoPay booth at #School_Expo, held for four days at Riyadh Front for Conferences and Exhibitions in August.",
    date: "January 9, 2025",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/9ce2k8cqOlGJfrJg6XNTd13Hg.jpg?scale-down-to=1024&width=1344&height=896",
    imageAlt: "Strategic Partnership with PayTabs",
    title: "Strategic Partnership with PayTabs",
    description:
      "GoPay entered into a strategic partnership with PayTabs as part of its participation in the Seamless Exhibition.",
    date: "January 8, 2025",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/IHxbAFonDVAryRhTPcL2nK1d9g.png?width=1024&height=1024",
    imageAlt: "Memorandum of Understanding with Alinma Bank",
    title: "Memorandum of Understanding with Alinma Bank",
    description:
      "GoPay signed a memorandum of understanding with Alinma Bank during its participation in the Seamless",
    date: "January 4, 2025",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/oSm8gjptu9UhI2VAZWmFxtcsc.png?width=1856&height=2464",
    imageAlt: "GoPay Participation in Seamless Exhibition",
    title: "GoPay Participation in Seamless Exhibition",
    description:
      "Media coverage of the GoPay booth at #School_Expo, held for four days at Riyadh Front for Conferences and Exhibitions in August.",
    date: "January 4, 2025",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/ovtVSKkCRIqiatRPO2CwFF3k88.png?scale-down-to=2048&width=1792&height=2688",
    imageAlt: "Memorandum of Understanding with Banque Saudi Fransi",
    title: "Memorandum of Understanding with Banque Saudi Fransi",
    description:
      "GoPay signed a memorandum of understanding with Banque Saudi Fransi, as part of the company's efforts to",
    date: "January 3, 2025",
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

      <section className="px-6 md:px-16 xl:pb-[120px] pb-20  pt-6 md:pt-0">
        <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
