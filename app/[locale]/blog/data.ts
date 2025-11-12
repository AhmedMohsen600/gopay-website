export interface BlogItem {
  imageSrc: string;
  imageAltKey: string;
  titleKey: string;
  descriptionKey: string;
  dateKey: string;
  className?: string;
  imageContainerClassName?: string;
  contentContainerClassName?: string;
}

export const blogsData: BlogItem[] = [
  {
    imageSrc:
      "https://framerusercontent.com/images/pwOCQ86eV6uTDBY7fWUfJB09WU.jpg",
    imageAltKey: "blog.0.imageAlt",
    titleKey: "blog.0.title",
    descriptionKey: "blog.0.description",
    dateKey: "blog.0.date",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/hjAP4425jhk2cRYV1pkS6Z2y70.jpg",
    imageAltKey: "blog.1.imageAlt",
    titleKey: "blog.1.title",
    descriptionKey: "blog.1.description",
    dateKey: "blog.1.date",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/9ce2k8cqOlGJfrJg6XNTd13Hg.jpg?scale-down-to=1024&width=1344&height=896",
    imageAltKey: "blog.2.imageAlt",
    titleKey: "blog.2.title",
    descriptionKey: "blog.2.description",
    dateKey: "blog.2.date",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/IHxbAFonDVAryRhTPcL2nK1d9g.png?width=1024&height=1024",
    imageAltKey: "blog.3.imageAlt",
    titleKey: "blog.3.title",
    descriptionKey: "blog.3.description",
    dateKey: "blog.3.date",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/oSm8gjptu9UhI2VAZWmFxtcsc.png?width=1856&height=2464",
    imageAltKey: "blog.4.imageAlt",
    titleKey: "blog.4.title",
    descriptionKey: "blog.4.description",
    dateKey: "blog.4.date",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/ovtVSKkCRIqiatRPO2CwFF3k88.png?scale-down-to=2048&width=1792&height=2688",
    imageAltKey: "blog.5.imageAlt",
    titleKey: "blog.5.title",
    descriptionKey: "blog.5.description",
    dateKey: "blog.5.date",
  },
];
