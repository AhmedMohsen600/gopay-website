# Icons and Fonts Guide

## 📦 Installed Libraries

### Phosphor Icons
Beautiful, flexible icon family for interfaces, diagrams, presentations, and more.

**Package:** `@phosphor-icons/react`  
**Documentation:** https://phosphoricons.com/

### Fonts

#### English - Figtree
Modern, geometric sans-serif font perfect for UI and web.
- **Link:** https://fonts.google.com/specimen/Figtree
- **Weights:** 300, 400, 500, 600, 700, 800, 900

#### Arabic - Tajawal
Clean, professional Arabic font with excellent readability.
- **Link:** https://fonts.google.com/specimen/Tajawal
- **Weights:** 200, 300, 400, 500, 700, 800, 900
- **RTL Support:** ✅ Full support

---

## 🎨 Using Phosphor Icons

### Server-Side Icons (SSR)
For Next.js 15 App Router, use the SSR version:

```tsx
import { House, Lock, Lightning } from "@phosphor-icons/react/dist/ssr";

export default function MyPage() {
  return (
    <div>
      <House size={24} weight="bold" />
      <Lock size={32} weight="duotone" />
      <Lightning size={48} weight="fill" />
    </div>
  );
}
```

### Client Component Icons
For client components:

```tsx
"use client";

import { Heart, Star } from "@phosphor-icons/react";

export default function ClientComponent() {
  return (
    <button>
      <Heart size={20} />
      Like
    </button>
  );
}
```

### Icon Weights

Phosphor icons support 6 different weights:

- `thin` - Lightest stroke
- `light` - Light stroke
- `regular` - Default weight (no prop needed)
- `bold` - Bold stroke
- `fill` - Filled solid
- `duotone` - Two-tone effect

```tsx
<Lock size={32} weight="thin" />
<Lock size={32} weight="light" />
<Lock size={32} weight="regular" />
<Lock size={32} weight="bold" />
<Lock size={32} weight="fill" />
<Lock size={32} weight="duotone" />
```

### Icon Sizes

Icons are SVG-based and can be any size:

```tsx
<House size={16} />   // Small
<House size={24} />   // Default
<House size={32} />   // Medium
<House size={48} />   // Large
<House size={64} />   // Extra Large
```

### Colored Icons

Icons inherit text color by default. Use Tailwind classes:

```tsx
<Lock className="text-primary" size={24} />
<Lightning className="text-yellow-500" size={24} />
<Globe className="text-blue-600" size={24} />
```

### Common Icons Reference

```tsx
// Navigation
import { House, MagnifyingGlass, User, Gear } from "@phosphor-icons/react/dist/ssr";

// Actions
import { Plus, Minus, X, Check, ArrowRight } from "@phosphor-icons/react/dist/ssr";

// Communication
import { Phone, ChatCircle, Envelope, Bell } from "@phosphor-icons/react/dist/ssr";

// Business
import { CreditCard, Money, Briefcase, Bank } from "@phosphor-icons/react/dist/ssr";

// Social
import { Heart, Star, Share, Bookmark } from "@phosphor-icons/react/dist/ssr";

// Media
import { Play, Pause, Camera, Image } from "@phosphor-icons/react/dist/ssr";
```

---

## 🔤 Font Configuration

### How Fonts Work

The fonts are automatically applied based on the current locale:

- **English pages (`/en`)** → Use **Figtree** font
- **Arabic pages (`/ar`)** → Use **Tajawal** font

### Font Variables

The fonts are available as CSS variables:

```css
/* Automatically set based on locale */
font-family: var(--font-figtree);  /* English */
font-family: var(--font-tajawal);  /* Arabic */
```

### Using Fonts in Tailwind

Use the `font-sans` utility class (already applied globally):

```tsx
<h1 className="font-sans">Title</h1>
<p className="font-sans text-lg">Paragraph</p>
```

### Font Weights

Use Tailwind font weight utilities:

```tsx
<p className="font-light">Light (300)</p>
<p className="font-normal">Normal (400)</p>
<p className="font-medium">Medium (500)</p>
<p className="font-semibold">Semibold (600)</p>
<p className="font-bold">Bold (700)</p>
<p className="font-extrabold">Extra Bold (800)</p>
<p className="font-black">Black (900)</p>
```

---

## 💡 Best Practices

### Icons

1. **Use SSR version** in server components for better performance
2. **Consistent sizing** - Stick to 16, 20, 24, 32, 48 for consistency
3. **Semantic weights** - Use `bold` for important actions, `duotone` for featured items
4. **Accessibility** - Add `aria-label` for icon-only buttons

```tsx
<button aria-label="Close dialog">
  <X size={20} />
</button>
```

### Fonts

1. **Don't mix fonts** - The locale automatically handles font selection
2. **Use proper weights** - Regular (400) for body, Bold (700) for headings
3. **RTL Support** - Arabic automatically displays right-to-left
4. **Responsive sizes** - Use Tailwind responsive utilities

```tsx
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>
```

---

## 🌐 RTL Support

Arabic pages automatically have:
- `dir="rtl"` on the HTML element
- Tajawal font applied
- Proper text alignment

No additional configuration needed!

---

## 📚 Resources

- **Phosphor Icons Browser:** https://phosphoricons.com/
- **Figtree Font:** https://fonts.google.com/specimen/Figtree
- **Tajawal Font:** https://fonts.google.com/specimen/Tajawal
- **Tailwind Typography:** https://tailwindcss.com/docs/font-family

