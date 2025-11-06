import { Typography } from "@/components/ui/typography";

export function GoPaySolutionsSection() {
  return (
    <section className="xl:px-10 xl:pt-[120px] md:px-16 md:pt-20 px-6 pt-14 ">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-14">
          <Typography variant="h2" className="text-center text-text-5 mb-3">
            <span className="text-[#F2994A]">GoPay</span>
            <span> Solutions</span>
          </Typography>
          <Typography variant="p18" className="text-center  ">
            Discover how GoPay can transform your business
          </Typography>
        </div>
        <div className="grid xl:grid-cols-9"></div>
      </div>
    </section>
  );
}
