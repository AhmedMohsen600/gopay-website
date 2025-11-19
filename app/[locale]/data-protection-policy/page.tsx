import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function DataProtectionPolicyPage() {
  const t = useTranslations("dataProtectionPolicy");
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
        <div className="space-y-2">
          <Typography variant="h3">Introduction</Typography>
          <Typography variant="p16">
            Inclusive Financial Solutions Company is committed to protecting
            your personal information and ensuring the privacy of your data in
            accordance with applicable laws and regulations, including the
            Personal Data Protection System in the Kingdom of Saudi Arabia. This
            policy clarifies the types of data we collect, the reasons for
            collecting it, how it is used, and your rights as a data subject.
          </Typography>
        </div>
        <div className="space-y-2">
          <Typography variant="h3">1. Scope</Typography>
          <Typography variant="p16">
            This Personal Data Protection Policy applies to all users of
            Inclusive Financial Solutions Company&apos;s services and platforms,
            including individuals who access the website, mobile applications,
            or use its services.
          </Typography>
        </div>
        <div className="space-y-2">
          <Typography variant="h3">
            2. Personal Data Protection Principles
          </Typography>
          <div className="space-y-6 mt-6">
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle One - Accountability
              </span>
              The privacy policy of the controlling entity must be defined and
              documented, approved by the entity&apos;s chief executive (or
              their delegate), and published to all parties involved in its
              implementation.
            </Typography>

            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Two - Transparency
              </span>
              A notice regarding the privacy policy and procedures of the
              controlling entity must be prepared, clearly and explicitly
              stating the specific purposes for which personal data is
              processed.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Three - Choice and Consent
              </span>
              All possible options for the personal data subject must be
              identified, and consent (express or implicit) obtained regarding
              the collection, use, or disclosure of their data.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Four - Data Collection Limitation
              </span>
              The collection of personal data should be limited to the minimum
              necessary to achieve the purposes specified in the privacy notice.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Five - Limitation of Data Use, Retention, and Disposal
              </span>
              The processing of personal data must be restricted to the purposes
              specified in the privacy notice for which the data subject gave
              their implicit or explicit consent, and it must be retained only
              as long as necessary to achieve the specified purposes or as
              required by applicable laws, regulations, and policies in the
              Kingdom, and disposed of in a secure manner that prevents leakage,
              loss, embezzlement, misuse, or unauthorized access.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Six - Data Access
              </span>
              Means must be identified and provided for data subjects to access
              their personal data for review, updating, and correction.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Seven - Limitation of Data Disclosure
              </span>
              Data disclosure must be limited to parties specified in the
              privacy notice for which the data subject gave consent.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Eight - Data Security
              </span>
              Personal data must be protected from leakage, damage, loss,
              embezzlement, misuse, modification, or unauthorized access, in
              accordance with National Cybersecurity Authority guidelines.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Nine - Data Quality
              </span>
              Personal data must be kept accurate, complete, and directly
              relevant to the specified purposes.
            </Typography>
            <Typography variant="p16" className="text-text-4">
              <span className="font-bold block">
                Principle Ten - Monitoring and Compliance
              </span>
              Compliance with privacy policies and procedures must be monitored,
              and inquiries, complaints, and privacy-related disputes must be
              handled.
            </Typography>
          </div>
        </div>

        {/* 3. Data Collection */}
        <div className="space-y-2">
          <Typography variant="h3">3. Data We Collect</Typography>
          <Typography variant="p16">
            We collect and process various types of personal data to provide and
            improve our services:
          </Typography>
          <div>
            <div className="space-y-2">
              <Typography variant="p16" className="font-bold text-text-4">
                1.<span className="ms-2">Personal Information</span>
              </Typography>
              <Typography
                variant="p16"
                className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
              >
                Account data: Establishment name, establishment type, activity
                type, sector type, commercial name, national address.
              </Typography>
              <Typography
                variant="p16"
                className="leading-[1em] text-text-4 tracking-wide pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
              >
                Identity verification data: Copy of national ID, passport, or
                any other documents necessary for regulatory compliance
                (commercial registration, license, etc.).
              </Typography>
              <Typography
                variant="p16"
                className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
              >
                Bank account data: Name in bank, bank name, account number, bank
                certificate, owner data.
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
