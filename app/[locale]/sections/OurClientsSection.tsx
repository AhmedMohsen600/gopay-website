"use client";

import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";

const clientLogos = [
  {
    src: "https://framerusercontent.com/images/ZGXekz2SbwsanSSV6IAY9mtyc.png?scale-down-to=512&width=914&height=273",
    alt: "Saudi Finance Company",
  },
  {
    src: "https://framerusercontent.com/images/Lcj0LwR6PdG9wIwE3Uf9nSMwsQ.png?scale-down-to=512&width=862&height=312",
    alt: "King Faisal School",
  },
  {
    src: "https://framerusercontent.com/images/BZ5sJ2p6lBLEWvpBmjiLZj8Zd0.png?scale-down-to=512&width=1474&height=356",
    alt: "Energy Tech",
  },
  {
    src: "https://framerusercontent.com/images/L6hgPNJ3xpgF93Wkj9gBhLv0.png?scale-down-to=512&width=670&height=395",
    alt: "Tabadul",
  },
  {
    src: "https://framerusercontent.com/images/c5vOTMFCdUMkzbrtku3R4CPhvY.png?scale-down-to=512&width=1660&height=376",
    alt: "Saudi Diesel Equipment",
  },
  {
    src: "https://framerusercontent.com/images/1hxCdHcmn6V3cjWEZoQcDzfHc0.png?scale-down-to=512&width=1921&height=1081",
    alt: "Kayan",
  },
  {
    src: "https://framerusercontent.com/images/IZSGveDTbIDhCi9IvWmk77b9A.png?scale-down-to=512&width=1921&height=1081",
    alt: "Royal Commission for AlUla",
  },
  {
    src: "https://framerusercontent.com/images/6A6laD6Edx83nZn2IsH3998Eoc.png?scale-down-to=512&width=1920&height=1081",
    alt: "Tawzea Aquapor",
  },
  {
    src: "https://framerusercontent.com/images/D6AI4ZRysdaZIvEc2OZU5iTT4g.png?scale-down-to=512&width=662&height=223",
    alt: "Gulf Health Council",
  },
  {
    src: "https://framerusercontent.com/images/IGIej5nDpb5zc3tgvLN0KGzrvMg.png?width=400&height=400",
    alt: "Obekan Digital Solutions",
  },
  {
    src: "https://framerusercontent.com/images/0GUl24oECz88GQh6SEKqnIRe8e4.png?scale-down-to=512&width=722&height=308",
    alt: "Hala Hala",
  },
  {
    src: "https://framerusercontent.com/images/twewF3Px4rvl9nOwEwx4WSsstS4.png?scale-down-to=512&width=1920&height=1081",
    alt: "Sayara",
  },
  {
    src: "https://framerusercontent.com/images/Kob5cVGwXFIwlfdI7pmd1hOrDM.png?scale-down-to=512&width=1921&height=1081",
    alt: "Dalah",
  },
  {
    src: "https://framerusercontent.com/images/FlQunIZqjfebLdGMR3xDYucEE.png?width=400&height=221",
    alt: "Four Winds Saudi Arabia",
  },
  {
    src: "https://framerusercontent.com/images/IfNQS26Iqfi6OM4o9tYhcEyyxc.png?scale-down-to=512&width=620&height=403",
    alt: "AgriServ",
  },
  {
    src: "https://framerusercontent.com/images/RTsbG1m1XpyabN2HTGaLhSrrc.png?scale-down-to=512&width=1920&height=1080",
    alt: "Riyad Bank",
  },
  {
    src: "https://framerusercontent.com/images/6fh5BaVm8Ul4uSLjrGWV63v17g.png?scale-down-to=512&width=1920&height=1081",
    alt: "Moyasar",
  },
  {
    src: "https://framerusercontent.com/images/jwCpb73eFoHGox3cfH5ntFYaKA.png?scale-down-to=512&width=1633&height=888",
    alt: "PayTabs",
  },
  {
    src: "https://framerusercontent.com/images/1RSftnXeJUgSVSCTSJvrN2xPgjA.png?scale-down-to=512&width=600&height=81",
    alt: "Foodics",
  },
  {
    src: "https://framerusercontent.com/images/DgwN66giW57lciwQUWj8rqMYyFY.png?scale-down-to=512&width=1921&height=1081",
    alt: "Tawteen",
  },
  {
    src: "https://framerusercontent.com/images/9Gld5P9CS3xesOxMF80IDz8zc.png?width=500&height=250",
    alt: "Urway Payment Gateway",
  },
  {
    src: "https://framerusercontent.com/images/YkZIN6u1hLxgwivWa67bcC9VWlc.png?width=479&height=105",
    alt: "Payments",
  },
];

export function OurClientsSection() {
  const t = useTranslations("home.clients");

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-semibold tracking-tight">
            {t("title")}
          </Typography>
        </div>

        {/* Clients Grid - Centered with flex wrap for proper centering of last row */}
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-7 md:gap-x-16 md:gap-y-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)] lg:w-[calc(20%-3.2rem)]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={90}
                  className="w-full h-auto max-h-[60px] md:max-h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
