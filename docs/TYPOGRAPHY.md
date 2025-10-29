# Typography Component

A flexible, type-safe typography component built with **class-variance-authority** for consistent text styling across your application.

## 📐 Typography Scale

Based on your design system:

| Variant | Size | Line Height | Weight | Element |
|---------|------|-------------|--------|---------|
| `h1` | 62px | 1.2 | Bold | `<h1>` |
| `h2` | 50px | 1.1 | Bold | `<h2>` |
| `h3` | 35px | 1.1 | Semibold | `<h3>` |
| `h4` | 26px | 1.1 | Semibold | `<h4>` |
| `h5` | 24px | 1.1 | Medium | `<h5>` |
| `h6` | 20px | 1.1 | Medium | `<h6>` |
| `p18` | 18px | 1.4 | Normal | `<p>` |
| `p16` | 16px | 1.4 | Normal (Default) | `<p>` |
| `p14` | 14px | 1.4 | Normal | `<p>` |

---

## 🚀 Basic Usage

```tsx
import { Typography } from "@/components/ui/typography";

export default function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Page Title</Typography>
      <Typography variant="p16">Body text content</Typography>
    </div>
  );
}
```

---

## 📝 Examples

### Headings

```tsx
<Typography variant="h1">Main Heading</Typography>
<Typography variant="h2">Section Heading</Typography>
<Typography variant="h3">Subsection Heading</Typography>
<Typography variant="h4">Card Title</Typography>
<Typography variant="h5">Small Heading</Typography>
<Typography variant="h6">Caption Heading</Typography>
```

### Paragraphs

```tsx
{/* Default body text */}
<Typography variant="p16">
  This is standard paragraph text with 16px size.
</Typography>

{/* Large introduction text */}
<Typography variant="p18">
  This is larger text for introductions or emphasis.
</Typography>

{/* Small captions */}
<Typography variant="p14">
  Small text for captions and secondary information.
</Typography>
```

### With Different Weights

Use Tailwind font weight classes to customize:

```tsx
{/* Default weight */}
<Typography variant="p18">Regular text</Typography>

{/* Medium weight */}
<Typography variant="p18" className="font-medium">
  Medium weight text
</Typography>

{/* Semibold weight */}
<Typography variant="p18" className="font-semibold">
  Semibold text
</Typography>

{/* Bold weight */}
<Typography variant="p16" className="font-bold">
  Bold text
</Typography>
```

---

## 🎨 Custom Styling

### Using Tailwind Classes

```tsx
<Typography 
  variant="h2" 
  className="text-primary underline mb-4"
>
  Styled Heading
</Typography>

<Typography 
  variant="p16" 
  className="text-muted-foreground italic"
>
  Muted italic text
</Typography>
```

### Custom Colors

```tsx
<Typography variant="h3" className="text-primary">
  Primary colored heading
</Typography>

<Typography variant="p16" className="text-destructive">
  Error message
</Typography>

<Typography variant="p14" className="text-muted-foreground">
  Secondary information
</Typography>
```

---

## 🔄 Custom Element (Polymorphic)

Use the `as` prop to render a different HTML element while keeping the styling:

```tsx
{/* Render h1 styles but as a div */}
<Typography variant="h1" as="div">
  Div with H1 styling
</Typography>

{/* Render p16 styles but as a span */}
<Typography variant="p16" as="span">
  Inline text
</Typography>

{/* Render h3 styles but as a label */}
<Typography variant="h3" as="label" htmlFor="input">
  Form Label
</Typography>
```

---

## 🌍 Multi-Language Support

The Typography component automatically uses the correct font based on locale:

- **English (`/en`)**: Figtree font
- **Arabic (`/ar`)**: Tajawal font with RTL support

```tsx
{/* Automatically uses Figtree on English pages */}
<Typography variant="h1">Welcome to GoPay</Typography>

{/* Automatically uses Tajawal on Arabic pages */}
<Typography variant="h1">مرحباً بك في جو باي</Typography>
```

---

## 📦 Component API

### Props

```typescript
interface TypographyProps {
  // Typography variant
  variant?: 
    | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    | "p18" | "p16" | "p14";
  
  // Custom HTML element
  as?: ElementType;
  
  // Additional CSS classes (use Tailwind utilities like font-bold, font-medium, etc.)
  className?: string;
  
  // All standard HTML attributes
  ...HTMLAttributes<HTMLElement>;
}
```

### Default Variant

If no variant is specified, the component defaults to `p16` (16px regular text).

```tsx
<Typography>Default text (p16)</Typography>
```

---

## 🎯 Common Use Cases

### Hero Section

```tsx
<div className="text-center">
  <Typography variant="h1" className="mb-4">
    Transform Your Business
  </Typography>
  <Typography variant="p18" className="text-muted-foreground mb-8">
    Fast, secure, and simple payment solutions
  </Typography>
  <button>Get Started</button>
</div>
```

### Card Component

```tsx
<div className="card">
  <Typography variant="h4" className="mb-2">
    Card Title
  </Typography>
  <Typography variant="p16" className="text-muted-foreground mb-4">
    Card description goes here with standard body text.
  </Typography>
  <Typography variant="p14Semibold" className="text-primary">
    Read more →
  </Typography>
</div>
```

### Form Labels

```tsx
<div>
  <Typography variant="p14Semibold" as="label" htmlFor="email" className="mb-2 block">
    Email Address
  </Typography>
  <input id="email" type="email" />
  <Typography variant="p14" className="text-muted-foreground mt-1">
    We'll never share your email
  </Typography>
</div>
```

### Navigation

```tsx
<nav>
  <Typography variant="p16Semibold" as="a" href="/">
    Home
  </Typography>
  <Typography variant="p16Medium" as="a" href="/about">
    About
  </Typography>
</nav>
```

---

## 📊 Typography Demo

View all typography variants in action:

**Visit:** `/typography-demo`

Or directly:
- English: http://localhost:3000/en/typography-demo
- Arabic: http://localhost:3000/ar/typography-demo

---

## 🎓 Best Practices

### 1. **Use Semantic Variants**
Match the variant to the content's semantic meaning:
```tsx
{/* Good */}
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Title</Typography>
<Typography variant="p16">Body content</Typography>

{/* Avoid */}
<Typography variant="h1">Small text</Typography> {/* Wrong size */}
```

### 2. **Override Element When Needed**
Use `as` prop for styling purposes:
```tsx
{/* Style as h1 but render as div for semantic HTML */}
<Typography variant="h1" as="div">
  Hero Title
</Typography>
```

### 3. **Combine with Tailwind**
Extend styles with Tailwind utilities:
```tsx
<Typography 
  variant="h2" 
  className="text-primary mb-6 underline hover:no-underline"
>
  Interactive Heading
</Typography>
```

### 4. **Use Tailwind Font Weights**
Combine variants with Tailwind font utilities:
```tsx
<Typography variant="p18" className="font-bold">Strong emphasis</Typography>
<Typography variant="p18" className="font-medium">Medium emphasis</Typography>
<Typography variant="p18">Regular text</Typography>
```

### 5. **Responsive Typography**
Use Tailwind responsive utilities:
```tsx
<Typography 
  variant="h1" 
  className="text-[32px] md:text-[50px] lg:text-[62px]"
>
  Responsive Heading
</Typography>
```

---

## 🔧 Customization

### Adding New Variants

Edit `components/ui/typography.tsx`:

```typescript
const typographyVariants = cva("", {
  variants: {
    variant: {
      // Add your custom variant
      customVariant: "text-[22px] font-bold leading-[1.3]",
      // ... rest of variants
    },
  },
});

// Update the element map
const variantElementMap: Record<string, ElementType> = {
  customVariant: "h3",
  // ... rest of mappings
};
```

---

## 📚 Related Documentation

- [Icons & Fonts Guide](./ICONS_AND_FONTS.md)
- [Tailwind CSS Typography](https://tailwindcss.com/docs/font-size)
- [CVA Documentation](https://cva.style/)

---

## 🐛 Troubleshooting

### Font Not Loading

The fonts are configured in `app/[locale]/layout.tsx`. Make sure:
- Figtree and Tajawal are imported from `next/font/google`
- Font variables are applied to the body element

### Wrong Element Rendering

Check the `variantElementMap` to ensure the variant maps to the correct HTML element.

### TypeScript Errors

Make sure you import the correct types:
```tsx
import { Typography, type TypographyProps } from "@/components/ui/typography";
```

