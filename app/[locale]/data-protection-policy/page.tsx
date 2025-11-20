import { HeroSection } from "@/components/HeroSection";
import { Typography } from "@/components/ui/typography";

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
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            Introduction
          </Typography>
          <Typography variant="p16" className="text-text-4">
            Inclusive Financial Solutions Company is committed to protecting
            your personal information and ensuring the privacy of your data in
            accordance with applicable laws and regulations, including the
            Personal Data Protection System in the Kingdom of Saudi Arabia. This
            policy clarifies the types of data we collect, the reasons for
            collecting it, how it is used, and your rights as a data subject.
          </Typography>
        </div>
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            1. Scope
          </Typography>
          <Typography variant="p16" className="text-text-4">
            This Personal Data Protection Policy applies to all users of
            Inclusive Financial Solutions Company&apos;s services and platforms,
            including individuals who access the website, mobile applications,
            or use its services.
          </Typography>
        </div>
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
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
          <Typography variant="h3" className="text-text-4">
            3. Data We Collect
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            We collect and process various types of personal data to provide and
            improve our services:
          </Typography>
          <div className="space-y-4">
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
            <div className="space-y-2">
              <Typography variant="p16" className="font-bold text-text-4">
                2.<span className="ms-2">Contact Data:</span>
              </Typography>
              <Typography variant="p16" className="text-text-4">
                Information provided during your communication with customer
                support via chats, phone calls, or email.
              </Typography>
            </div>
            <div className="space-y-2">
              <Typography variant="p16" className="font-bold text-text-4">
                3.<span className="ms-2">Technical Data:</span>
              </Typography>
              <Typography variant="p16" className="text-text-4">
                Cookies and similar technologies to improve website
                functionality and analyze performance.
              </Typography>
            </div>
          </div>
        </div>
        {/* 4. Processing Your Data */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            4. Processing Your Data
          </Typography>
          <Typography variant="p16" className="text-text-4 mb-5">
            The purpose of its processing is only after the explicit consent of
            its owner in accordance with Article (5) of the Personal Data
            Protection System for specific purposes, which include:
          </Typography>
          <div className="space-y-4">
            <div className="space-y-2">
              <Typography
                variant="p16"
                className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
              >
                <span className="font-bold me-2">Service Providers:</span>{" "}
                External companies that help provide our services, such as
                payment processors and cloud storage providers.
              </Typography>
              <Typography
                variant="p16"
                className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
              >
                <span className="font-bold me-2">Regulatory Bodies:</span> To
                comply with legal obligations or based on official requests.
              </Typography>
              <Typography
                variant="p16"
                className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
              >
                <span className="font-bold me-2">Business Partners:</span> When
                needed to complete financial transactions or provide related
                services.
              </Typography>
            </div>
          </div>
        </div>
        {/* 5. Sharing Your Data */}
        <div className="space-y-2 w-[90%]">
          <Typography variant="h3" className="text-text-4">
            5. Sharing Your Data
          </Typography>
          <Typography variant="p16" className="mb-5 text-text-4">
            The client undertakes and declares, being of full legal capacity,
            the following:
          </Typography>
          <div className="space-y-1.5">
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['1.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That they are not legally prohibited from dealing with the
              company, and that all data provided by them is correct, reliable,
              and updated.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['2.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That they are responsible before the competent authorities for
              funds deposited in their account with their knowledge, and those
              deposited in their account without their knowledge, whether they
              personally disposed of them or not, if they do not officially
              report them upon knowing of their presence in their account.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['3.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That the funds deposited in the account are derived from
              legitimate activities and that they are responsible for their
              validity. If{" "}
              <span className="font-bold">
                Inclusive Financial Solutions Company
              </span>{" "}
              receives any illicit or counterfeit funds from them, it is not
              entitled to recover them or be compensated for them.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['4.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That{" "}
              <span className="font-bold">
                Inclusive Financial Solutions Company
              </span>{" "}
              has the right to freeze the account or any of the amounts credited
              to it and notify the competent authorities if there is suspicion
              that the amounts result from financial fraud or illegal operations
              in accordance with applicable regulations and instructions.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['5.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That they are the true beneficiary of the account.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['6.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That they are fully aware and knowledgeable that it is prohibited
              to transfer to unknown persons or entities according to applicable
              regulations and instructions, and that all transfers they make are
              to known persons and entities and for known and legitimate
              commercial purposes.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1.4em] text-text-4 pl-5 relative before:content-['7.'] before:absolute before:left-0 before:top-0 before:font-normal"
            >
              That they have read and understood the terms and conditions set
              forth in this Agreement, and that they will read the terms and
              conditions specific to the services and products associated with
              the account, as published on the company&apos;s website.
            </Typography>
          </div>
        </div>

        {/* 6. Protecting Your Data */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            6. Protecting Your Data
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            We implement strong security measures to protect your data,
            including:
          </Typography>
          <div className="space-y-2">
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              Encrypting sensitive information during transmission.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              Restricting data access based on need.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              Conducting regular security reviews and updates.
            </Typography>
          </div>
          <Typography variant="p16" className="mt-4 block text-text-4">
            In the event of a data breach, affected users will be immediately
            notified in line with applicable regulations.
          </Typography>
        </div>

        {/* 7. Data Retention */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            7. Data Retention
          </Typography>
          <Typography variant="p16" className="text-text-4">
            The company retains your personal data only as long as necessary to
            achieve the purposes outlined in this policy or to comply with legal
            and regulatory obligations.
          </Typography>
        </div>

        {/* 8. Your Rights */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            8. Your Rights
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            Under the Personal Data Protection System, you have the following
            rights:
          </Typography>
          <div className="space-y-2">
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className="font-bold me-2">Access:</span> Request a copy of
              the personal data we hold about you.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className="font-bold me-2">Correction:</span> Request
              correction of inaccurate or incomplete data.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className="font-bold me-2">Deletion:</span> Request deletion
              of your data, unless there are legal obligations preventing this.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className="font-bold me-2">Objection:</span> Object to
              certain processing activities.
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className="font-bold me-2">Withdraw Consent:</span> Revoke
              your consent to the processing of your data (where possible).
            </Typography>
          </div>
          <Typography variant="p16" className="mt-4 block text-text-4">
            To exercise your rights, please contact us via email at{" "}
            <a href="mailto:Care@gopay.sa" className="text-primary underline">
              Care@gopay.sa
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
            The company primarily stores data within the Kingdom of Saudi
            Arabia, and it is not transferred or processed outside the Kingdom.
          </Typography>
        </div>

        {/* 10. Policy Updates */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            10. Policy Updates
          </Typography>
          <Typography variant="p16" className="text-text-4">
            This Privacy Policy may be updated periodically to reflect changes
            in our practices or compliance requirements. The updated version
            will be available on our website, and you will be contacted
            regarding important updates.
          </Typography>
          <Typography variant="p16" className="text-text-4">
            Effective Date: January 7, 2025
          </Typography>
        </div>

        {/* 11. Contact Us */}
        <div className="space-y-2">
          <Typography variant="h3" className="text-text-4">
            11. Contact Us
          </Typography>
          <Typography variant="p16" className="mb-4 text-text-4">
            If you have any inquiries regarding this privacy policy or your
            data:
          </Typography>
          <div className="space-y-2">
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className=" me-2">Email:</span>
              <a href="mailto:Care@gopay.sa" className="text-primary underline">
                Care@gopay.sa
              </a>
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className=" me-2">Phone:</span> 8001180024
            </Typography>
            <Typography
              variant="p16"
              className="leading-[1em] text-text-4 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.4em] before:w-1 before:h-1 before:bg-text-4 before:rounded-full"
            >
              <span className=" me-2">Address:</span> Sultan Business Center, Al
              Ma&apos;athar Al Shamali, Riyadh, Kingdom of Saudi Arabia.
            </Typography>
          </div>
          <Typography variant="p16" className="mt-4 block text-text-4">
            We value your trust and are committed to protecting your privacy at
            all times.
          </Typography>
        </div>
      </section>
    </div>
  );
}
