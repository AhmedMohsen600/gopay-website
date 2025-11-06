import FeatureCard from "./feature-card/feature-card";
export function GoPayFeaturesSection() {
  return (
    <section className="max-w-[1440px] mx-auto xl:px-10 xl:pt-16 xl:pb-[120px] md:px-16 md:py-20 py-14 px-6 ">
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto gap-6">
        <FeatureCard
          isFullRow
          imageVariant="dark-bg"
          features={[
            "Single integration to SADAD (national bill payment rail)",
            "Automated payment references and real-time reconciliation",
            "ERP & API-ready for full automation",
            "SMS/email reminders to reduce overdue invoices",
            "Full ZATCA compliance built-in",
          ]}
        />
        <FeatureCard
          imageVariant="light-1"
          features={[
            "Single integration to SADAD (national bill payment rail)",
            "Automated payment references and real-time reconciliation",
            "ERP & API-ready for full automation",
            "SMS/email reminders to reduce overdue invoices",
            "Full ZATCA compliance built-in",
          ]}
        />
        <FeatureCard
          imageVariant="light-2"
          features={[
            "Single integration to SADAD (national bill payment rail)",
            "Automated payment references and real-time reconciliation",
            "ERP & API-ready for full automation",
            "SMS/email reminders to reduce overdue invoices",
            "Full ZATCA compliance built-in",
          ]}
        />
        <FeatureCard
          imageVariant="light-3"
          imageUrl="https://framerusercontent.com/images/dltRp4qIsFlPJXK0LAtdmFuymU.png?scale-down-to=1024&width=1060&height=394"
          features={[
            "Single integration to SADAD (national bill payment rail)",
            "Automated payment references and real-time reconciliation",
            "ERP & API-ready for full automation",
            "SMS/email reminders to reduce overdue invoices",
            "Full ZATCA compliance built-in",
          ]}
        />
        <FeatureCard
          imageVariant="light-4"
          imageUrl="https://framerusercontent.com/images/pekNvaXoQZmZLXJYvEO1C7vjGU.png?width=548&height=836"
          features={[
            "Single integration to SADAD (national bill payment rail)",
            "Automated payment references and real-time reconciliation",
            "ERP & API-ready for full automation",
            "SMS/email reminders to reduce overdue invoices",
            "Full ZATCA compliance built-in",
          ]}
        />
      </div>
    </section>
  );
}
