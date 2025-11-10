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
      answer: (
        <>
          It is a centralized system for presenting and paying bills through the
          local banking network. The system&apos;s infrastructure was developed
          by the Saudi Central Bank to enable businesses to issue invoices and
          financial claims and link them with banking systems, allowing
          customers to pay and settle their outstanding amounts.
          <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            for more help, please click
          </a>
        </>
      ),
    },
    {
      question:
        "Is GoPay limited to providing payment services through the “SADAD” system, or does it also support other electronic payment services?",
      answer:
        "GoPay is specialized in offering payment services through the “SADAD” system. However, it can also provide other electronic payment services upon a separate request, in which the business specifies the types of payment services required in order to integrate additional payment options into the system.",
    },
    {
      question: "What are the features of the GoPay service?",
      answer: (
        <>
          You can find information about the service features through the link
          <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            click here
          </a>
          .
        </>
      ),
    },
    {
      question: "How can I use the GoPay service?",
      answer: (
        <>
          You can use GoPay by opening a payments account and subscribing to the
          service.
          <br />
          <a href="#" target="_blank" rel="noopener noreferrer">
            For more details on how to join, Click here.
          </a>
        </>
      ),
    },
    {
      question:
        "What documents are required from the business to obtain the GoPay service?",
      answer: (
        <ol className="space-y-0!">
          <li>
            A copy of the authorization letter – for assistance and more
            details,{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Click here.
            </a>
          </li>
          <li>A copy of the authorized person&apos;s ID.</li>
          <li>
            A copy of the company&apos;s registration document. For assistance
            and more details,{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Click here.
            </a>
          </li>
          <li>
            A copy of the national address – for assistance and more details,{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              Click here.
            </a>
          </li>
          <li>
            A copy of the bank certificate – for assistance and more details,
            <a href="#" target="_blank" rel="noopener noreferrer">
              Click here.
            </a>
          </li>
        </ol>
      ),
    },
    {
      question:
        "Does the GoPay service require any setup or software installation on the company's servers?",
      answer:
        "You can use GoPay by opening a payments account and subscribing to the service.",
    },
    {
      question: "How can I carry out transactions through GoPay?",
      answer: (
        <div className="space-y-2">
          <p>
            You can execute transactions through GoPay using one of the
            following options:
          </p>
          <p>
            - Via the service&apos;s website (Web Portal) using your username
            and password to access the system.
          </p>
          <p>
            - Through electronic integration (APIs) between the GoPay system and
            your company&apos;s system.
          </p>
        </div>
      ),
    },
    {
      question: "How does GoPay work in bill payments and financial claims?",
      answer: (
        <>
          You can find information about the bill payment process through this
          link <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            Click here.
          </a>
        </>
      ),
    },
    {
      question: "What is the pricing mechanism for GoPay?",
      answer: (
        <>
          You can find information about the pricing mechanism through this link{" "}
          <br />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block"
          >
            Click here.
          </a>
        </>
      ),
    },
    {
      question:
        "Can GoPay be directly integrated with the company's internal system?",
      answer:
        "Yes, GoPay allows electronic integration (APIs) between the GoPay system and your company's system.",
    },
    {
      question: "What languages does the GoPay service support?",
      answer: "The GoPay system supports both Arabic and English.",
    },
    {
      question: "Does GoPay operate throughout the week?",
      answer:
        "Yes, GoPay operates throughout the week. However, settlement and transfer of collected amounts are processed during official working days and hours (Sunday to Thursday).",
    },
    {
      question:
        "Is a commercial registration or freelance license required to obtain the service?",
      answer:
        "Yes, to open a payments account and register for GoPay, you need to provide your business identification documents (Commercial Registration, License, Ministerial Resolution, Freelance License, etc.).",
    },
    {
      question:
        "Will the customer be notified of the invoice or financial claim via SMS?",
      answer:
        "Yes, customers are notified of invoices and financial claims through the SMS notification service.",
    },
    {
      question: "Is there a testing environment for trying GoPay services?",
      answer:
        "Yes, GoPay provides businesses that wish to open an account with a testing environment for electronic integration (APIs). This allows them to perform integration, test transactions, and ensure that all selected features are activated.",
    },
    {
      question: "Does GoPay offer the ability to issue recurring invoices?",
      answer:
        "Yes, GoPay enables businesses to issue recurring invoices to their customers in a unique and innovative way, helping them manage billing and collections efficiently.",
    },
    {
      question:
        "What is the difference between issuing a one-time invoice and a recurring invoice?",
      answer: `One-time invoice:
These are invoices or payment claims issued with a variable SADAD number that can be used only once. The SADAD number expires once the customer settles the invoice.
(Examples: invoices for “purchases of goods” such as cars, construction materials, furniture, etc.)

Recurring invoice:
These are invoices or payment claims issued with a fixed SADAD number assigned by the biller to the customer. This allows the customer to register the SADAD number in their bank account to regularly view and settle outstanding amounts.
(Examples: invoices for “services and subscriptions” such as electricity, water, telecommunications, etc.)`,
    },
    {
      question:
        "If a customer pays only part of the invoice, will the remaining amount be added to the next invoice?",
      answer: `For one-time invoices:
The unpaid amount will remain under the same SADAD number until the invoice or payment claim is fully settled.

For recurring invoices:
The outstanding amount will accumulate under the customer's SADAD number, either as a debit or credit balance, depending on the due invoices and amounts already paid.`,
    },
    {
      question:
        "How long does it take for settlements and collected payments to be transferred to the company's bank account?",
      answer:
        "GoPay settles and transfers amounts collected from customers into the company's bank account one business day after receiving the payment from the SADAD system. (Settlement duration may vary depending on the nature of the business and contractual arrangements with the company.)",
    },
    {
      question: "Does GoPay allow partial payments for customers?",
      answer:
        "Yes. GoPay provides the option for partial payments of invoices and claims. Businesses can enable this feature and set the minimum amount allowed for settling the issued invoice or claim.",
    },
    {
      question:
        "How can the end-customer know the remaining balance if payments are made partially?",
      answer:
        "The customer can access the invoice or payment link sent by the business to view details of all outstanding and settled invoices. They can also download the GoPay mobile app to get all related account information.",
    },
    {
      question:
        "Will the company's name appear in the customer's bank account when searching with the SADAD number?",
      answer:
        "No. The company's name appears only in the SMS and email notifications sent to the customer. Customers can match the invoice or claim amount with the figure shown in their bank account when searching by the SADAD number provided.",
    },
    {
      question:
        "How can the company view details of the amounts deposited into its bank account?",
      answer:
        "The company is provided with daily settlement reports that include full details of deposited amounts, fees, and deducted taxes.",
    },
    {
      question: "Why is GoPay considered secure?",
      answer:
        "GoPay processes payments and collections through secure, authorized banking channels supervised by the Saudi Central Bank. The SADAD system collects the payments into a central account, and GoPay then transfers these amounts directly into the companies' bank accounts.",
    },
    {
      question:
        "What amounts are deducted from the collected payments of the business?",
      answer: `GoPay deducts the service fee along with the Value Added Tax (VAT) for each transaction executed, in addition to a SARIE transfer fee if the business's bank account is outside Riyad Bank. 
(All executed transactions are consolidated at the end of each day and transferred in one batch to the business's bank account.)`,
    },
    {
      question: "Is there a technical guide for integrating with GoPay?",
      answer:
        "Yes, GoPay provides businesses with a comprehensive integration guide for direct electronic integration with the service.",
    },
    {
      question:
        "What are the required steps for direct electronic integration with GoPay?",
      answer: `Open a payments account and subscribe to the service.

Select the services and features required for direct integration.

Pay the electronic integration service fee.

Receive access credentials for the testing environment to begin integration.

Provide a dedicated link from the business’s software platform to receive payment notifications.

Apply security standards for receiving payment notifications (Digital Signature).

Conduct testing to verify that payments are processed correctly.

Connect to the live production environment to receive payments from the SADAD system.`,
    },
    {
      question: "Does GoPay provide a graphical interface for billers?",
      answer:
        "Yes, GoPay provides a graphical user interface (GUI) that allows billers to create and manage payment claims, as well as access detailed reports on payments and claims.",
    },
    {
      question:
        "Can GoPay split collected amounts and transfer them into multiple bank accounts for the business?",
      answer:
        "Yes, GoPay offers a feature that allows businesses to add multiple bank accounts so that collected amounts can be transferred and deposited according to the setup defined during service registration.",
    },
    {
      question:
        "Can the business raise invoices and collect payments through SADAD, while also using other SADAD services, without direct electronic integration?",
      answer:
        "Yes, once a payments account is opened with GoPay, the business can issue invoices and collect payments through the SADAD system and benefit from all other services and features, without the need for direct electronic integration with SADAD.",
    },
    {
      question: "Does GoPay provide a tax invoice for transaction fees?",
      answer:
        "Yes, GoPay issues and sends tax invoices to businesses on a bi-monthly basis.",
    },
    {
      question:
        "Does GoPay schedule payments for the customer, so that the system automatically issues the invoice or payment claim on the due date?",
      answer:
        "Yes, GoPay provides the technology to automatically issue invoices and payment claims once they become due.",
    },
    {
      question:
        "Can the SADAD number be changed to match the company's contract numbers?",
      answer:
        "No, the SADAD number cannot be changed. However, GoPay can provide alternative solutions that allow the company to link the SADAD number with its contract number, making it easier to track and search for all transactions generated by the system.",
    },
    {
      question:
        "If the customer registers their SADAD number in their bank account, will it appear across other banks?",
      answer:
        "If the company issues the invoice or payment claim and attaches the customer's identity information, the number may be recognized in some banks that support this feature.",
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
