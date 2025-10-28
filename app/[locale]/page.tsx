import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import {
  Lock,
  Lightning,
  Globe,
  House,
  Info,
  Phone,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  return (
    <div className="min-h-screen bg-bg text-text-5">
      {/* Header */}
      <header className="border-b border-stroke-1">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Typography variant="h5" as="div">
            GoPay
          </Typography>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <House size={20} />
              {tc("home")}
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Info size={20} />
              {tc("about")}
            </Link>
            <Link
              href="/services"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Briefcase size={20} />
              {tc("services")}
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <Phone size={20} />
              {tc("contact")}
            </Link>
            <LanguageSwitcher />
          </nav>
          <div className="md:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Typography
            variant="h1"
            className="text-5xl md:text-7xl tracking-tight"
          >
            {t("title")}
          </Typography>
          <Typography variant="p18" className="text-xl md:text-2xl text-text-3">
            {t("subtitle")}
          </Typography>
          <Typography variant="p18" className="text-text-3 max-w-2xl mx-auto">
            {t("description")}
          </Typography>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="px-8">
              {tc("getStarted")}
              <AnimatedArrow />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              {tc("learnMore")}
              <AnimatedArrow className="text-primary" />
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-stroke-1 rounded-lg hover:border-primary transition-colors group">
            <div className="mb-4 text-primary">
              <Lock size={48} weight="duotone" />
            </div>
            <Typography variant="h6" className="mb-2">
              {t("features.security.title")}
            </Typography>
            <Typography variant="p16" className="text-text-3">
              {t("features.security.description")}
            </Typography>
          </div>

          <div className="p-6 border border-stroke-1 rounded-lg hover:border-primary transition-colors group">
            <div className="mb-4 text-primary">
              <Lightning size={48} weight="duotone" />
            </div>
            <Typography variant="h6" className="mb-2">
              {t("features.speed.title")}
            </Typography>
            <Typography variant="p16" className="text-text-3">
              {t("features.speed.description")}
            </Typography>
          </div>

          <div className="p-6 border border-stroke-1 rounded-lg hover:border-primary transition-colors group">
            <div className="mb-4 text-primary">
              <Globe size={48} weight="duotone" />
            </div>
            <Typography variant="h6" className="mb-2">
              {t("features.global.title")}
            </Typography>
            <Typography variant="p16" className="text-text-3">
              {t("features.global.description")}
            </Typography>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-bg-grey border-stroke-1 mt-24">
        <div className="container mx-auto px-4 py-8 text-center">
          <Typography variant="p14" className="text-text-3">
            © {new Date().getFullYear()} GoPay.{" "}
            {useTranslations("footer")("rights")}
          </Typography>
        </div>
      </footer>
    </div>
  );
}
