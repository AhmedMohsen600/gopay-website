import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

export default function TypographyDemoPage() {
  const t = useTranslations("common");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-border pb-6">
            <Typography variant="h1" className="mb-2">
              Typography System
            </Typography>
            <Typography variant="p16" className="text-muted-foreground">
              Figtree (EN) & Tajawal (AR) font showcase
            </Typography>
          </div>

          {/* Headings Section */}
          <div className="space-y-6">
            <Typography variant="h3" className="text-primary">
              Headings
            </Typography>

            <div className="space-y-4 pl-4 border-l-2 border-border">
              <div>
                <Typography variant="h1">
                  H1 - Heading One (62px/1.2)
                </Typography>
                <Typography
                  variant="p14"
                  className="text-muted-foreground mt-1"
                >
                  font-bold, 62px, line-height: 1.2
                </Typography>
              </div>

              <div>
                <Typography variant="h2">
                  H2 - Heading Two (50px/1.1)
                </Typography>
                <Typography
                  variant="p14"
                  className="text-muted-foreground mt-1"
                >
                  font-bold, 50px, line-height: 1.1
                </Typography>
              </div>

              <div>
                <Typography variant="h3">
                  H3 - Heading Three (35px/1.1)
                </Typography>
                <Typography
                  variant="p14"
                  className="text-muted-foreground mt-1"
                >
                  font-semibold, 35px, line-height: 1.1
                </Typography>
              </div>

              <div>
                <Typography variant="h4">
                  H4 - Heading Four (26px/1.1)
                </Typography>
                <Typography
                  variant="p14"
                  className="text-muted-foreground mt-1"
                >
                  font-semibold, 26px, line-height: 1.1
                </Typography>
              </div>

              <div>
                <Typography variant="h5">
                  H5 - Heading Five (24px/1.1)
                </Typography>
                <Typography
                  variant="p14"
                  className="text-muted-foreground mt-1"
                >
                  font-medium, 24px, line-height: 1.1
                </Typography>
              </div>

              <div>
                <Typography variant="h6">
                  H6 - Heading Six (20px/1.1)
                </Typography>
                <Typography
                  variant="p14"
                  className="text-muted-foreground mt-1"
                >
                  font-medium, 20px, line-height: 1.1
                </Typography>
              </div>
            </div>
          </div>

          {/* Paragraph Section */}
          <div className="space-y-6">
            <Typography variant="h3" className="text-primary">
              Paragraphs
            </Typography>

            <div className="space-y-6 pl-4 border-l-2 border-border">
              <div>
                <Typography variant="p18" className="mb-1 font-semibold">
                  P18 - 18px/1.4
                </Typography>
                <Typography variant="p18" className="text-muted-foreground">
                  This is a paragraph with 18px font size and 1.4 line height.
                  Perfect for large body text and introductions. Use Tailwind
                  classes like font-medium, font-semibold, or font-bold to
                  adjust weight.
                </Typography>
              </div>

              <div>
                <Typography variant="p16" className="mb-1 font-semibold">
                  P16 - 16px/1.4 (Default)
                </Typography>
                <Typography variant="p16" className="text-muted-foreground">
                  This is the default paragraph style with 16px font size and
                  1.4 line height. Great for standard body text. Combine with
                  Tailwind utilities for customization.
                </Typography>
              </div>

              <div>
                <Typography variant="p14" className="mb-1 font-semibold">
                  P14 - 14px/1.4
                </Typography>
                <Typography variant="p14" className="text-muted-foreground">
                  This is a smaller paragraph with 14px font size and 1.4 line
                  height. Useful for captions and secondary text.
                </Typography>
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <Typography variant="p14" className="font-semibold mb-2">
                  Weight Examples:
                </Typography>
                <div className="space-y-2">
                  <Typography variant="p16" className="font-normal">
                    Normal weight (font-normal)
                  </Typography>
                  <Typography variant="p16" className="font-medium">
                    Medium weight (font-medium)
                  </Typography>
                  <Typography variant="p16" className="font-semibold">
                    Semibold weight (font-semibold)
                  </Typography>
                  <Typography variant="p16" className="font-bold">
                    Bold weight (font-bold)
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div className="space-y-6">
            <Typography variant="h3" className="text-primary">
              Usage Example
            </Typography>

            <div className="p-6 border border-border rounded-lg bg-muted/50">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { Typography } from "@/components/ui/typography";

// Basic usage
<Typography variant="h1">Heading</Typography>
<Typography variant="p16">Paragraph text</Typography>

// With custom element
<Typography variant="h3" as="div">
  Div with h3 styling
</Typography>

// With Tailwind weight classes
<Typography variant="p18" className="font-bold">
  Bold paragraph
</Typography>

<Typography variant="p16" className="font-medium text-primary">
  Medium weight with color
</Typography>`}</code>
              </pre>
            </div>
          </div>

          {/* Color Variations */}
          <div className="space-y-6">
            <Typography variant="h3" className="text-primary">
              With Color Variations
            </Typography>

            <div className="space-y-3 pl-4 border-l-2 border-border">
              <Typography variant="h4" className="text-primary">
                Primary Color
              </Typography>
              <Typography variant="h4" className="text-muted-foreground">
                Muted Foreground
              </Typography>
              <Typography variant="h4" className="text-foreground">
                Default Foreground
              </Typography>
              <Typography variant="h4" className="text-destructive">
                Destructive Color
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
