export interface NewsItem {
  slug: string;
  imageSrc: string;
  imageAltKey: string;
  titleKey: string;
  descriptionKey: string;
  dateKey: string;
  className?: string;
  imageContainerClassName?: string;
  contentContainerClassName?: string;
}

export const newsData: NewsItem[] = [
  {
    slug: "media-coverage-of-gopay-booth-at-school-expo",
    imageSrc:
      "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
    imageAltKey: "news.0.imageAlt",
    titleKey: "news.0.title",
    descriptionKey: "news.0.description",
    dateKey: "news.0.date",
    className: "xl:col-span-3 md:col-span-2 col-span-1",
    imageContainerClassName: "md:min-h-[500px]",
    contentContainerClassName: "md:min-h-[163px]",
  },
  {
    slug: "gopay-participation-in-seamless-exhibition-1",
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAltKey: "news.1.imageAlt",
    titleKey: "news.1.title",
    descriptionKey: "news.1.description",
    dateKey: "news.1.date",
  },
  {
    slug: "gopay-participation-in-seamless-exhibition-2",
    imageSrc:
      "https://framerusercontent.com/images/axzz6ysTvd1Zc4C0TIq1eoKfy28.jpg?width=3936&height=2624",
    imageAltKey: "news.2.imageAlt",
    titleKey: "news.2.title",
    descriptionKey: "news.2.description",
    dateKey: "news.2.date",
  },
  {
    slug: "strategic-partnership-with-paytabs",
    imageSrc:
      "https://framerusercontent.com/images/9ce2k8cqOlGJfrJg6XNTd13Hg.jpg?scale-down-to=1024&width=1344&height=896",
    imageAltKey: "news.3.imageAlt",
    titleKey: "news.3.title",
    descriptionKey: "news.3.description",
    dateKey: "news.3.date",
  },
  {
    slug: "memorandum-of-understanding-with-alinma-bank",
    imageSrc:
      "https://framerusercontent.com/images/IHxbAFonDVAryRhTPcL2nK1d9g.png?width=1024&height=1024",
    imageAltKey: "news.4.imageAlt",
    titleKey: "news.4.title",
    descriptionKey: "news.4.description",
    dateKey: "news.4.date",
  },
  {
    slug: "gopay-participation-in-seamless-exhibition-3",
    imageSrc:
      "https://framerusercontent.com/images/oSm8gjptu9UhI2VAZWmFxtcsc.png?width=1856&height=2464",
    imageAltKey: "news.5.imageAlt",
    titleKey: "news.5.title",
    descriptionKey: "news.5.description",
    dateKey: "news.5.date",
  },
  {
    slug: "memorandum-of-understanding-with-banque-saudi-fransi",
    imageSrc:
      "https://framerusercontent.com/images/ovtVSKkCRIqiatRPO2CwFF3k88.png?scale-down-to=2048&width=1792&height=2688",
    imageAltKey: "news.6.imageAlt",
    titleKey: "news.6.title",
    descriptionKey: "news.6.description",
    dateKey: "news.6.date",
  },
];
