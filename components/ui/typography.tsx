import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ElementType } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      // H1 - 62px / 1.2
      h1: "font-medium xl:text-[62px] md:text-[50px] text-[34px]  leading-tight tracking-tight",

      // H2 - 50px / 1.1
      h2: "xl:text-[50px] md:text-[36px] text-[24px] font-medium leading-none tracking-tight text-text-5",

      // H3 - 35px / 1.1
      h3: "text-[18px] md:text-[35px] font-semibold leading-[1.1]",

      // H4 - 26px / 1.1
      h4: "xl:text-[26px] md:text-[17px] text-sm font-normal leading-none tracking-tight text-text-4",

      // H5 - 24px / 1.1
      h5: "text-[16px] md:text-[24px] font-medium leading-[1.1]",

      // H6 - 20px / 1.1
      h6: "xl:text-xl md:text-[15px] text-[13px] font-medium leading-none tracking-tight",

      // P - 18px / 1.4
      p18: "xl:text-lg md:text-[15px] text-[13px]  font-normal text-text-4 leading-tight tracking-tight",

      // P - 16px / 1.4
      p16: "xl:text-base md:text-sm text-xs font-normal text-text-3 leading-[1.4em] -tracking-[0.03em]",

      // P - 14px / 1.4
      p14: "text-sm font-normal leading-[1.4]",
      p13: "text-[13px] leading-tight tracking-tight",
      // P - 12px / 1.4
      p12: "text-xs font-normal leading-[1.4]",
    },
  },
  defaultVariants: {
    variant: "p16",
  },
});

type TypographyProps = VariantProps<typeof typographyVariants> &
  Omit<
    HTMLAttributes<HTMLElement>,
    keyof VariantProps<typeof typographyVariants>
  > & {
    as?: ElementType;
  };

const variantElementMap: Record<string, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p18: "p",
  p16: "p",
  p14: "p",
  p13: "p",
  p12: "p",
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    // Use the provided 'as' prop, or get the element from the variant map, or fallback to 'p'
    const Component =
      as ||
      (variant ? variantElementMap[variant] : variantElementMap["p16"]) ||
      "p";

    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
export type { TypographyProps };
