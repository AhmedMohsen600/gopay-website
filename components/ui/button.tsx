import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-1 xl:gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-link focus-visible:ring-link/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-xs md:text-sm lg:text-base text-white hover:bg-primary/90 py-1.5 px-3 xl:py-2 xl:px-4",
        destructive:
          "bg-dark text-sm xl:text-base text-white hover:bg-dark/90 py-2 px-3 xl:py-2 xl:px-4",
        outline:
          "bg-[#fdfaf9] hover:bg-bg-grey text-sm xl:text-base text-text-5 py-2 px-3 xl:py-2 xl:px-4",
        secondary:
          "bg-secondary text-sm xl:text-base text-white hover:bg-secondary/80 py-2 px-3 xl:py-2 xl:px-4",
        ghost:
          "hover:bg-bg-grey text-sm xl:text-base text-text-5 py-2 px-3 xl:py-2 xl:px-4",
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[28px] md:min-h-[34px] xl:h-[42.4px]",
        sm: "h-[28.8px] rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
