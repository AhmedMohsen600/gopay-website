import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/gopay-logo.svg"
      alt="GoPay"
      width={117}
      height={24}
      className={className}
      priority
    />
  );
}
