"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { Accordion } from "@/components/ui/accordion";
import { HeroSection } from "@/components/HeroSection";

export default function FAQPage() {
  const t = useTranslations("faq");

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Get FAQ items from translations
  const faqItems = [
    {
      question: "What is GoPay Service?",
      answer: t(
        "It is an electronic payment gateway provided by Inclusive Financial Solutions Company, offering invoicing and payment collection services through the SADAD payment system."
      ),
    },
    {
      question: "Is GoPay licensed by the Saudi Central Bank?",
      answer:
        "Yes, GoPay is one of the services provided by nclusive Financial Solutions Company, authorized by the Saudi Central Bank (SAMA) to offer it to the targeted segments in the Saudi market.",
    },
    {
      question: "Who is the target audience of GoPay?",
      answer:
        "GoPay targets all businesses of various sizes and sectors in the Saudi market.",
    },
    {
      question: "What is the difference between the Biller and the Customer?",
      answer: `Biller: The business, merchant, or service provider who issues invoices and financial claims and collects payments from customers through the available electronic payment methods in the Saudi market.  

Customer: The end-user who receives the (service or product) from the biller and settles the invoices and financial claims through the available electronic payment channels in the Saudi market.`,
    },
    {
      question: 'What is the "SADAD" payment system?',
      answer:
        "It is a centralized system for presenting and paying bills through the local banking network. The system’s infrastructure was developed by the Saudi Central Bank to enable businesses to issue invoices and financial claims and link them with banking systems, allowing customers to pay and settle their outstanding amounts.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        badge="FAQ"
        title={
          <Typography
            variant="h1"
            className="text-center leading-tight tracking-tight"
          >
            <span className="text-secondary">Frequently </span> <br /> Asked
            Questions
          </Typography>
        }
        description={""}
      />

      {/* FAQ Accordion Section */}
      <section className=" px-6 pb-20 md:px-16 xl:pb-[120px] xl:px-[120px]">
        <div className="container mx-auto max-w-[800px] ">
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Accordion items={faqItems} allowMultiple={true} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
