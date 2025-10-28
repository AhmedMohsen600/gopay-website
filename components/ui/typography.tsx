import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes, ElementType } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      // H1 - 62px / 1.2
      h1: "text-[62px] font-bold leading-[1.2]",

      // H2 - 50px / 1.1
      h2: "text-[50px] font-bold leading-[1.1]",

      // H3 - 35px / 1.1
      h3: "text-[35px] font-semibold leading-[1.1]",

      // H4 - 26px / 1.1
      h4: "text-[26px] font-semibold leading-[1.1]",

      // H5 - 24px / 1.1
      h5: "text-[24px] font-medium leading-[1.1]",

      // H6 - 20px / 1.1
      h6: "text-[20px] font-medium leading-[1.1]",

      // P - 18px / 1.4
      p18: "text-lg font-normal leading-[1.4]",

      // P - 16px / 1.4
      p16: "text-base font-normal leading-[1.4]",

      // P - 14px / 1.4
      p14: "text-sm font-normal leading-[1.4]",
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
