# GoPay Website

A modern payment website built with Next.js 15 and Tailwind CSS v4.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Utility-first CSS framework with new features
- **shadcn/ui** - Re-usable component library
- **TypeScript** - Type-safe JavaScript
- **Turbopack** - Fast bundler for development and production
- **next-intl** - Internationalization (i18n) with English and Arabic support
- **Phosphor Icons** - Beautiful, flexible icon library
- **Google Fonts** - Figtree (EN) and Tajawal (AR)

## Tailwind CSS v4 Configuration

This project uses **Tailwind CSS v4**, which introduces a new CSS-first configuration approach:

### Key Features

- ✅ **@theme** directive in `globals.css` for design tokens
- ✅ **@import "tailwindcss"** instead of @tailwind directives
- ✅ CSS variables with OKLCH color space
- ✅ No traditional `tailwind.config.js` required (theme in CSS)
- ✅ Optimized for Next.js 15 with Turbopack

### Configuration Files

- `app/globals.css` - Tailwind v4 theme and design tokens (via @theme directive)
- `postcss.config.mjs` - PostCSS with @tailwindcss/postcss plugin

**Note:** Tailwind v4 does NOT use `tailwind.config.js/ts` - all configuration is in CSS!

## Internationalization (i18n)

This project supports multiple languages out of the box:

### Supported Languages

- 🇬🇧 **English** (en) - Default
- 🇸🇦 **Arabic** (ar) - RTL support

### Features

- ✅ Automatic language detection
- ✅ URL-based locale routing (`/en`, `/ar`)
- ✅ RTL support for Arabic
- ✅ Language switcher component
- ✅ Type-safe translations with TypeScript

### Adding Translations

1. Add your content to `messages/{locale}.json`
2. Use the `useTranslations` hook in your components:

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');
  return <h1>{t('title')}</h1>;
}
```

### Adding New Languages

1. Add the locale code to `i18n/routing.ts`
2. Create a new translation file `messages/{locale}.json`
3. Update the language switcher flags in `components/LanguageSwitcher.tsx`
4. Add appropriate font in `app/[locale]/layout.tsx`

## Icons and Fonts

### 🎨 Phosphor Icons

Beautiful, flexible icons with multiple weights and styles:

```tsx
import { Lock, Lightning, Globe } from "@phosphor-icons/react/dist/ssr";

<Lock size={24} weight="duotone" />
<Lightning size={32} weight="bold" />
<Globe size={48} weight="fill" />
```

**Available Weights:** `thin`, `light`, `regular`, `bold`, `fill`, `duotone`

**Browse icons:** https://phosphoricons.com/

### 🔤 Fonts

- **English (EN):** Figtree - Modern geometric sans-serif
- **Arabic (AR):** Tajawal - Clean, professional Arabic font with full RTL support

Fonts are **automatically applied** based on the current locale. No manual configuration needed!

📚 **Complete Guide:** See [docs/ICONS_AND_FONTS.md](docs/ICONS_AND_FONTS.md) for detailed usage examples.

## Color System

Custom color palette with semantic naming for consistent design:

**Brand Colors:** `primary`, `secondary`  
**Text Colors:** `text-5`, `text-4`, `text-3`, `text-2`, `text-white`  
**Backgrounds:** `surface`, `grey`  
**Strokes:** `stroke-1`, `stroke-2`  
**Interactive:** `link`

```tsx
<div className="bg-primary text-white">Primary button</div>
<p className="text-text-3">Body text</p>
<div className="bg-surface border border-stroke-1">Card</div>
```

📚 **Full Color Guide:** [docs/COLORS.md](docs/COLORS.md)

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

**Test different languages:**
- English: [http://localhost:3000/en](http://localhost:3000/en)
- Arabic: [http://localhost:3000/ar](http://localhost:3000/ar) (RTL)

### Build

```bash
npm run build
npm start
```

### Linting & Type Checking

```bash
npm run lint
npm run type-check
```

## Typography Component

A powerful, type-safe Typography component with your custom design system:

```tsx
import { Typography } from "@/components/ui/typography";

<Typography variant="h1">Main Heading</Typography>
<Typography variant="p16">Body text</Typography>
<Typography variant="p18" className="font-bold">Emphasized text</Typography>
```

**Variants:** `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p18`, `p16`, `p14`  
**Weights:** Use Tailwind classes (`font-medium`, `font-bold`, etc.)

**Demo Page:** Visit `/typography-demo` to see all variants

📚 **Full Documentation:** [docs/TYPOGRAPHY.md](docs/TYPOGRAPHY.md)

## Adding Components

Use shadcn/ui to add pre-built components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Project Structure

```
gopay-website/
├── app/
│   ├── [locale]/         # Localized routes
│   │   ├── layout.tsx    # Locale layout with i18n provider
│   │   └── page.tsx      # Localized home page
│   ├── globals.css       # Tailwind v4 theme
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Root redirect to default locale
├── components/
│   ├── LanguageSwitcher.tsx  # Language switcher dropdown
│   └── ui/               # shadcn/ui components (future)
├── i18n/
│   ├── request.ts        # i18n configuration
│   └── routing.ts        # Routing configuration
├── messages/             # Translation files
│   ├── en.json          # English translations
│   └── ar.json          # Arabic translations
├── lib/
│   └── utils.ts         # Utility functions
├── middleware.ts        # Locale detection middleware
└── public/              # Static assets
```
