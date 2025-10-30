"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const languageNames: Record<string, string> = {
  en: "English",
  ar: "عربي",
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="w-auto gap-0 border-0 bg-transparent hover:bg-bg-grey p-0">
        <Globe className="text-text-5 size-[22px]" />
      </SelectTrigger>
      <SelectContent className="bg-white shadow-[0px_0px_32px_0px_rgba(0,0,0,0.08)]">
        <SelectItem
          value="en"
          className="data-[state=checked]:bg-secondary data-[state=checked]:text-white cursor-pointer"
        >
          English
        </SelectItem>
        <SelectItem
          value="ar"
          className="data-[state=checked]:bg-secondary data-[state=checked]:text-white cursor-pointer"
        >
          عربي
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
