import { HeroSection } from "@/components/HeroSection";
import { ContactForm } from "./components/contact-form";
import { Typography } from "@/components/ui/typography";

export default function ContactUsPage() {
  return (
    <div>
      <HeroSection
        badge="Have A Question?"
        title="Contact Us"
        description={
          <div className="flex flex-col gap-4 text-center max-w-[700px] mx-auto">
            <Typography variant="h5">
              The future of your business is in safe hands.
            </Typography>
            <Typography variant="p18" className="text-text-3">
              We are delighted by your trust and the opportunity to provide our
              innovative services and solutions, and to be part of your
              ecosystem as we work together to achieve your goals.
            </Typography>
          </div>
        }
        className="md:min-h-[60vh] pt-20  min-h-[60vh]"
      />
      <section className="relative z-10  px-6 pb-14 md:px-16 md:pb-20 xl:pt-8 xl:pb-[100px]">
        <div className="mx-auto max-w-[800px]">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
