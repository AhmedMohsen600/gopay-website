# Header Component

The **Header** is a fixed, glassmorphic navigation bar that appears on all 7 pages of the GoPay website.

## 🎨 Design

### Visual Style
- **Position:** Fixed at top with 16px margin (centered)
- **Background:** Glassmorphic (white 50% opacity + 20px blur)
- **Border:** Subtle stroke-1 border
- **Rounded corners:** 12px
- **Width:** 95% of viewport (max-width: 1280px)
- **Z-index:** 50 (always on top)

### Animation
- **Initial load:** Fade in from top (opacity 0 → 1, y: -20 → 0)
- **Duration:** 500ms
- **Mobile menu:** Slide down animation with backdrop blur

## 📱 Responsive Behavior

### Desktop (md and above)
```
┌────────────────────────────────────────────────┐
│  [Logo]              [Lang] [Sign In] [Get →] │
└────────────────────────────────────────────────┘
```

- Logo on left
- Actions aligned right
- Language switcher
- Two action buttons (Sign In, Get Started)
- Horizontal layout

### Mobile (below md)
```
┌────────────────────────────────────────┐
│  [Logo]                      [☰ Menu]  │
└────────────────────────────────────────┘

When menu opened:
┌────────────────────────────────────────┐
│  Language                              │
│  ├─ Language Switcher                 │
│  ────────────────────────────────      │
│  [Sign In (Full Width)]               │
│  [Get Started → (Full Width)]         │
└────────────────────────────────────────┘
```

- Logo on left
- Hamburger menu on right
- Tapping menu opens modal drawer
- Modal contains: Language switcher + Action buttons
- Backdrop blur overlay when open

## 🔧 Technical Implementation

### Location
```
components/Header.tsx
```

### Usage
The Header is automatically included in the root layout:

```tsx
// app/[locale]/layout.tsx
import { Header } from "@/components/Header";

export default async function LocaleLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
```

**Note:** The `pt-24` (padding-top: 96px) on `<main>` prevents content from being hidden under the fixed header.

### Component Structure

```tsx
<Header>
  {/* Desktop/Tablet Header */}
  <motion.header> {/* Fixed positioning + animation */}
    <nav> {/* Glassmorphic container */}
      
      {/* Brand/Logo */}
      <Link href="/">
        <Typography>GoPay</Typography>
      </Link>

      {/* Desktop Actions */}
      <div className="hidden md:flex">
        <LanguageSwitcher />
        <Button variant="secondary">Sign In</Button>
        <Button>Get started →</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden">
        {open ? <X /> : <List />}
      </button>
    </nav>
  </motion.header>

  {/* Mobile Menu (AnimatePresence) */}
  {mobileMenuOpen && (
    <>
      <motion.div /> {/* Backdrop */}
      <motion.div> {/* Menu Panel */}
        <LanguageSwitcher />
        <Button>Sign In</Button>
        <Button>Get started →</Button>
      </motion.div>
    </>
  )}
</Header>
```

## 🌍 Internationalization

The Header uses translations from `messages/{locale}.json`:

### English (`en.json`)
```json
{
  "header": {
    "brand": "GoPay",
    "signIn": "Sign In",
    "getStarted": "Get started",
    "language": "Language"
  }
}
```

### Arabic (`ar.json`)
```json
{
  "header": {
    "brand": "جو باي",
    "signIn": "تسجيل الدخول",
    "getStarted": "ابدأ الآن",
    "language": "اللغة"
  }
}
```

### RTL Support
The header automatically adapts to RTL (Right-to-Left) for Arabic:
- Logo moves to right
- Actions move to left
- Menu icon flips to left
- All animations respect RTL direction

## 🎯 Action Buttons

### Sign In
- **Variant:** `secondary` (Orange background)
- **Size:** `sm`
- **Link:** `https://app.gopay.sa/wbiller/#/login`
- **Opens in:** New tab

### Get Started
- **Variant:** `default` (Primary purple background)
- **Size:** `sm`
- **Icon:** Animated arrow (slides on hover)
- **Link:** `https://app.gopay.sa/registration.html`
- **Opens in:** New tab

## 🔄 State Management

```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

**Mobile menu state:**
- `false` (default) - Menu closed, hamburger icon visible
- `true` - Menu open, X icon visible, backdrop + drawer rendered

**Closing triggers:**
- Tap on X icon
- Tap on backdrop
- Tap on any menu item (button)

## 🎬 Animations

### Header Entry (Page Load)
```tsx
<motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

### Mobile Menu Entry
```tsx
// Backdrop
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
/>

// Menu Panel
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
/>
```

## 🎨 Styling Classes

### Header Container
```tsx
className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
```
- `fixed` - Stays at top while scrolling
- `top-4` - 16px from top
- `left-1/2 -translate-x-1/2` - Horizontally centered
- `z-50` - Above all content
- `w-[95%]` - 95% of viewport width
- `max-w-7xl` - Max 1280px wide

### Nav Bar (Glassmorphic)
```tsx
className="backdrop-blur-xl bg-white/50 rounded-xl border border-stroke-1 px-6 py-4"
style={{ backdropFilter: "blur(20px)" }}
```
- `backdrop-blur-xl` - 24px blur
- `bg-white/50` - 50% white
- `border-stroke-1` - Custom stroke color
- Inline `backdropFilter` for Safari support

## 🔍 Accessibility

- **Hamburger button:** `aria-label="Toggle menu"`
- **Keyboard navigation:** All buttons focusable
- **Focus states:** Custom ring color (link blue)
- **Semantic HTML:** `<header>`, `<nav>`, proper button elements
- **Screen readers:** Icon descriptions, proper ARIA labels

## 📦 Dependencies

```tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { AnimatedArrow } from "@/components/ui/animated-arrow";
import { Typography } from "@/components/ui/typography";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { List, X } from "@phosphor-icons/react/dist/ssr";
```

## 🚀 Usage Across Pages

The Header is **automatically included** on all 7 pages:

1. ✅ Home Page
2. ✅ Solutions Page
3. ✅ Pricing Page
4. ✅ About Page
5. ✅ Features Page
6. ✅ Contact Page
7. ✅ FAQ Page

No need to import or add it manually - it's in the layout!

## 💡 Customization

### Changing the Logo
Update the Typography text in the Brand section:

```tsx
<Typography variant="h5" className="text-primary font-bold">
  YourBrand
</Typography>
```

Or replace with an image:

```tsx
<Link href="/">
  <Image src="/logo.svg" alt="Logo" width={120} height={24} />
</Link>
```

### Adding Navigation Links
For desktop navigation (currently hidden for simplicity):

```tsx
<nav className="hidden md:flex gap-6">
  <Link href="/solutions">Solutions</Link>
  <Link href="/pricing">Pricing</Link>
  <Link href="/about">About</Link>
</nav>
```

### Changing Button Links
Update the `href` attributes:

```tsx
<Button asChild>
  <a href="YOUR_CUSTOM_LINK" target="_blank" rel="noopener">
    Get started
    <AnimatedArrow />
  </a>
</Button>
```

---

**Ready to use!** The Header is production-ready and works beautifully across all devices. 🎨✨

