import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";
import * as data from "./data";
import { cn } from "@/lib/utils";

const BulletItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Typography
    variant="p16"
    className={cn(
      "leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full",
      className
    )}
  >
    {children}
  </Typography>
);

// Mapping index to specific class for numbered items to avoid dynamic class issues and keep strict typing/Tailwind support
const numberClasses: Record<number, string> = {
  1: "before:content-['1.']",
  2: "before:content-['2.']",
  3: "before:content-['3.']",
  4: "before:content-['4.']",
  5: "before:content-['5.']",
  6: "before:content-['6.']",
  7: "before:content-['7.']",
};

const NumberedItem = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => (
  <Typography
    variant="p16"
    className={cn(
      "leading-[1.4em] text-text-4 pl-5 relative before:absolute before:left-0 before:top-0 before:font-normal",
      numberClasses[index] || ""
    )}
  >
    {children}
  </Typography>
);

export default function DataProtectionPolicyPage() {
  return (
    <div>
      <HeroSection
        badge="Policy"
        variant="secondary"
        className="min-h-[50vh] md:min-h-[50vh] lg:min-h-[60vh] pt-[120px] xl:px-[120px] px-6"
        title={
          <Typography
            variant="h1"
            className="leading-tight tracking-[0em] max-w-[700px] text-center"
          >
            <span className="text-[#F2994A]">GoPay </span>
            <span className="text-[#333333]">
              Personal Data Protection Policy
            </span>
          </Typography>
        }
        description={""}
      />
      <section className="max-w-[1200px] mx-auto px-8 pb-[100px] space-y-16">
        {/* Introduction */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            Introduction
          </Typography>
          <Typography variant="p16" className="text-text-4">
            {data.INTRODUCTION}
          </Typography>
        </div>

        {/* 1. Scope */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            1. Scope
          </Typography>
          <Typography variant="p16" className="text-text-4">
            {data.SCOPE}
          </Typography>
        </div>

        {/* 2. Principles */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            2. Personal Data Protection Principles
          </Typography>
          <div className="space-y-6 mt-6">
            {data.PRINCIPLES.map((principle, index) => (
              <Typography key={index} variant="p16" className="text-text-4">
                <span className="font-bold block">{principle.title}</span>
                {principle.description}
              </Typography>
            ))}
          </div>
        </div>

        {/* 3. Data Collection */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            3. Data We Collect
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            We collect and process various types of personal data to provide and
            improve our services:
          </Typography>
          <div className="space-y-4">
            {data.DATA_COLLECTION.map((section, index) => (
              <div key={index} className="space-y-2">
                <Typography variant="p16" className="font-bold text-text-4">
                  {section.prefix}
                  <span className="ms-2">{section.title}</span>
                </Typography>
                {section.items.map((item, i) => (
                  <BulletItem
                    key={i}
                    className={index === 0 && i === 1 ? "tracking-wide" : ""}
                  >
                    {item}
                  </BulletItem>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Processing */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            4. Processing Your Data
          </Typography>
          <Typography variant="p16" className="text-text-4 mb-5">
            {data.PROCESSING_DATA.intro}
          </Typography>
          <div className="space-y-4">
            <div className="space-y-2">
              {data.PROCESSING_DATA.items.map((item, index) => (
                <BulletItem key={index}>
                  <span className="font-bold me-2">{item.title}</span>{" "}
                  {item.description}
                </BulletItem>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Sharing */}
        <div className="space-y-2 w-[90%]">
          <Typography variant="h3" className="text-text-4">
            5. Sharing Your Data
          </Typography>
          <Typography variant="p16" className="mb-5 text-text-4">
            {data.SHARING_DATA.intro}
          </Typography>
          <div className="">
            {data.SHARING_DATA.items.map((item, index) => (
              <NumberedItem key={index} index={index + 1}>
                {item}
              </NumberedItem>
            ))}
          </div>
        </div>

        {/* 6. Protecting */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            6. Protecting Your Data
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            {data.PROTECTING_DATA.intro}
          </Typography>
          <div className="space-y-2">
            {data.PROTECTING_DATA.items.map((item, index) => (
              <BulletItem key={index}>{item}</BulletItem>
            ))}
          </div>
          <Typography variant="p16" className="mt-4 block text-text-4">
            {data.PROTECTING_DATA.footer}
          </Typography>
        </div>

        {/* 7. Data Retention */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            7. Data Retention
          </Typography>
          <Typography variant="p16" className="text-text-4">
            {data.DATA_RETENTION}
          </Typography>
        </div>

        {/* 8. Your Rights */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            8. Your Rights
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            {data.YOUR_RIGHTS.intro}
          </Typography>
          <div className="space-y-2">
            {data.YOUR_RIGHTS.items.map((item, index) => (
              <BulletItem key={index}>
                <span className="font-bold me-2">{item.title}</span>
                {item.description}
              </BulletItem>
            ))}
          </div>
          <Typography variant="p16" className="mt-4 block text-text-4">
            {data.YOUR_RIGHTS.footer.text}
            <a
              href={`mailto:${data.YOUR_RIGHTS.footer.email}`}
              className="text-primary underline"
            >
              {data.YOUR_RIGHTS.footer.email}
            </a>
            .
          </Typography>
        </div>

        {/* 9. International Data Transfer */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            9. International Data Transfer
          </Typography>
          <Typography variant="p16" className="text-text-4">
            {data.INTERNATIONAL_TRANSFER}
          </Typography>
        </div>

        {/* 10. Policy Updates */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            10. Policy Updates
          </Typography>
          <div>
            <Typography variant="p16" className="text-text-4">
              {data.POLICY_UPDATES.text}
            </Typography>
            <Typography variant="p16" className="text-text-4">
              {data.POLICY_UPDATES.date}
            </Typography>
          </div>
        </div>

        {/* 11. Contact Us */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            11. Contact Us
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            {data.CONTACT_US.intro}
          </Typography>
          <div className="space-y-2">
            {data.CONTACT_US.details.map((detail, index) => (
              <BulletItem key={index}>
                <span className="me-2">{detail.label}</span>
                {detail.isLink ? (
                  <a href={detail.href} className="text-primary underline">
                    {detail.value}
                  </a>
                ) : (
                  detail.value
                )}
              </BulletItem>
            ))}
          </div>
          <Typography variant="p16" className="mt-4 block text-text-4">
            {data.CONTACT_US.footer}
          </Typography>
        </div>
      </section>
    </div>
  );
}
