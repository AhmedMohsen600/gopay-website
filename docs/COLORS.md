# GoPay Color System

Complete color palette for the GoPay website with Tailwind utility classes.

---

## 🎨 Brand Colors

### Primary

- **Hex:** `#282D4E`
- **Tailwind:** `bg-primary`, `text-primary`, `border-primary`
- **Usage:** Primary buttons, headers, important elements

```tsx
<div className="bg-primary text-primary-foreground">Primary Button</div>
```

### Secondary

- **Hex:** `#EC9510`
- **Tailwind:** `bg-secondary`, `text-secondary`, `border-secondary`
- **Usage:** Accent elements, secondary buttons, highlights

```tsx
<div className="bg-secondary text-secondary-foreground">Secondary Button</div>
```

---

## 🖤 Base Colors

### Black

- **Hex:** `#000000`
- **Tailwind:** `bg-black`, `text-black`

```tsx
<p className="text-black">Black text</p>
```

### Dark

- **Hex:** `#1A1D21`
- **Tailwind:** `bg-dark`, `text-dark`

```tsx
<div className="bg-dark">Dark background</div>
```

### White

- **Hex:** `#FFFFFF`
- **Tailwind:** `bg-white`, `text-white`

```tsx
<div className="bg-white text-foreground">White card</div>
```

---

## 🎯 Background Colors

### Surface (Primary Background)

- **Hex:** `#F4F4FA`
- **Tailwind:** `bg-background`, `bg-surface`
- **Usage:** Main page background

```tsx
<main className="bg-background">Content</main>
<div className="bg-surface">Surface background</div>
```

### Grey

- **Hex:** `#FAFAFA`
- **Tailwind:** `bg-grey`
- **Usage:** Secondary background, subtle sections

```tsx
<section className="bg-grey">Section</section>
```

---

## 📝 Text Colors

### Text 5 (Darkest)

- **Hex:** `#0C0E17`
- **Tailwind:** `text-text-5`
- **Usage:** Primary headings, important text

```tsx
<h1 className="text-text-5">Main Heading</h1>
```

### Text 4

- **Hex:** `#20243E`
- **Tailwind:** `text-text-4`
- **Usage:** Subheadings, secondary text

```tsx
<h2 className="text-text-4">Subheading</h2>
```

### Text 3

- **Hex:** `#535771`
- **Tailwind:** `text-text-3`
- **Usage:** Body text, paragraphs

```tsx
<p className="text-text-3">Body content</p>
```

### Text 2 (Lighter)

- **Hex:** `#7E8195`
- **Tailwind:** `text-text-2`
- **Usage:** Captions, metadata, secondary info

```tsx
<span className="text-text-2">Caption text</span>
```

### Text White

- **Hex:** `#FFFFFF`
- **Tailwind:** `text-text-white`
- **Usage:** Text on dark backgrounds

```tsx
<div className="bg-primary text-text-white">White text on dark</div>
```

---

## 🔲 Stroke/Border Colors

### Stroke 1 (Light)

- **Hex:** `#E9EAED`
- **Tailwind:** `border-stroke-1`
- **Usage:** Primary borders, card outlines

```tsx
<div className="border border-stroke-1">Card</div>
```

### Stroke 2

- **Hex:** `#C2C2C2`
- **Tailwind:** `border-stroke-2`
- **Usage:** Stronger borders, dividers

```tsx
<hr className="border-stroke-2" />
```

---

## 🔗 Interactive Colors

### Link

- **Hex:** `#2F4CF4`
- **Tailwind:** `text-link`, `hover:text-link`
- **Usage:** Links, interactive elements

```tsx
<a className="text-link hover:underline">Click here</a>
```

---

## 🎨 Semantic Colors

### Muted

- **Tailwind:** `bg-muted`, `text-muted-foreground`
- **Usage:** Subtle backgrounds, disabled states

```tsx
<div className="bg-muted text-muted-foreground">Muted section</div>
```

### Accent

- **Tailwind:** `bg-accent`, `text-accent-foreground`
- **Usage:** Hover states, highlighted sections

```tsx
<button className="hover:bg-accent">Hover me</button>
```

### Destructive

- **Tailwind:** `bg-destructive`, `text-destructive`
- **Usage:** Error messages, delete actions

```tsx
<button className="bg-destructive text-white">Delete</button>
```

---

## 💡 Usage Examples

### Card with Border

```tsx
<div className="bg-white border border-stroke-1 rounded-lg p-6">
  <h3 className="text-text-5 font-bold mb-2">Card Title</h3>
  <p className="text-text-3">Card description goes here</p>
</div>
```

### Primary Button

```tsx
<button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90">
  Get Started
</button>
```

### Secondary Button

```tsx
<button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90">
  Learn More
</button>
```

### Link

```tsx
<a href="#" className="text-link hover:underline">
  Read documentation
</a>
```

### Text Hierarchy

```tsx
<div>
  <h1 className="text-text-5 text-4xl font-bold">Main Heading</h1>
  <h2 className="text-text-4 text-2xl font-semibold mt-4">Subheading</h2>
  <p className="text-text-3 text-base mt-2">Body text goes here</p>
  <span className="text-text-2 text-sm mt-1">Caption or metadata</span>
</div>
```

### Bordered Section

```tsx
<section className="bg-surface border border-stroke-1 rounded-lg p-8">
  <h2 className="text-text-5 text-2xl font-bold mb-4">Section Title</h2>
  <p className="text-text-3">Section content</p>
</section>
```

---

## 🌙 Dark Mode

All colors automatically adapt to dark mode! The color system includes dark mode variants:

```tsx
{
  /* This will automatically adjust in dark mode */
}
<div className="bg-background text-foreground">
  Content that adapts to dark mode
</div>;
```

---

## ✅ Color Usage Guidelines

### Do's ✅

- Use `text-text-5` for main headings
- Use `text-text-3` for body text
- Use `bg-primary` for primary CTAs
- Use `bg-secondary` for secondary actions
- Use `border-stroke-1` for subtle borders
- Use `text-link` for all links

### Don'ts ❌

- Don't use raw hex values in components
- Don't mix color systems (use the design tokens)
- Don't use hardcoded opacity values (use the defined colors)

---

## 🔧 Extending Colors

To add new colors, update `app/globals.css`:

```css
:root {
  --your-new-color: oklch(...);
}

@theme inline {
  --color-your-new-color: var(--your-new-color);
}
```

Then use: `bg-your-new-color`, `text-your-new-color`, etc.

---

## 📚 Related Documentation

- [Typography System](./TYPOGRAPHY.md)
- [Icons & Fonts](./ICONS_AND_FONTS.md)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
