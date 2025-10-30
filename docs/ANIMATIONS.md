# Animations with Framer Motion

This project uses **Framer Motion** for smooth, production-ready animations that work seamlessly with Next.js 15 and Tailwind CSS v4.

## 🎬 Why Framer Motion?

- ✅ **Declarative animations** - Simple, React-friendly API
- ✅ **Performance** - Hardware-accelerated, 60fps animations
- ✅ **Gestures** - Built-in hover, tap, drag, and pan
- ✅ **Layout animations** - Automatic layout transitions
- ✅ **Server Components compatible** - Works with Next.js App Router
- ✅ **TypeScript support** - Fully typed

## 📦 Installation

Already installed in this project:

```bash
npm install framer-motion
```

## 🚀 Basic Usage

### Simple Fade In

```tsx
"use client";

import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
```

### Slide Up Animation

```tsx
"use client";

import { motion } from "framer-motion";

export function SlideUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### Stagger Children

```tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function StaggerList({ items }: { items: string[] }) {
  return (
    <motion.ul variants={container} initial="hidden" animate="show">
      {items.map((text, i) => (
        <motion.li key={i} variants={item}>
          {text}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

## 🎯 Common Patterns

### Hover Scale Button

```tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ScaleButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button>{children}</Button>
    </motion.div>
  );
}
```

### Page Transition

```tsx
"use client";

import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
```

### Card Hover Effect

```tsx
"use client";

import { motion } from "framer-motion";

export function HoverCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="p-6 border border-stroke-1 rounded-lg bg-surface"
      whileHover={{
        scale: 1.02,
        borderColor: "var(--color-primary)",
        transition: { duration: 0.2 },
      }}
    >
      {children}
    </motion.div>
  );
}
```

### Loading Spinner

```tsx
"use client";

import { motion } from "framer-motion";

export function Spinner() {
  return (
    <motion.div
      className="w-12 h-12 border-4 border-stroke-1 border-t-primary rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}
```

## 🎨 With Tailwind CSS

Combine Framer Motion with Tailwind classes:

```tsx
"use client";

import { motion } from "framer-motion";

export function AnimatedCard() {
  return (
    <motion.div
      className="p-6 bg-primary text-white rounded-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold">Animated Card</h3>
      <p className="text-text-2">With Tailwind styling!</p>
    </motion.div>
  );
}
```

## 🌍 With Custom Colors

Use your custom color system:

```tsx
"use client";

import { motion } from "framer-motion";

export function ColorfulBox() {
  return (
    <motion.div
      className="p-8 bg-surface border border-stroke-1"
      whileHover={{
        backgroundColor: "var(--color-bg-grey)",
        borderColor: "var(--color-link)",
      }}
      transition={{ duration: 0.2 }}
    >
      Hover me!
    </motion.div>
  );
}
```

## ⚡ Performance Tips

### 1. Use `transform` and `opacity`

These properties are GPU-accelerated and perform best:

```tsx
// ✅ Good - Hardware accelerated
<motion.div animate={{ x: 100, opacity: 1 }} />

// ❌ Avoid - Triggers layout recalculation
<motion.div animate={{ left: 100 }} />
```

### 2. Use `layout` prop for automatic animations

```tsx
<motion.div layout>{/* Content that changes size */}</motion.div>
```

### 3. Lazy load animated components

```tsx
import dynamic from "next/dynamic";

const AnimatedHero = dynamic(() => import("@/components/AnimatedHero"), {
  ssr: false, // Only load on client
});
```

## 🎭 Gesture Animations

### Drag

```tsx
<motion.div drag dragConstraints={{ left: 0, right: 200 }}>
  Drag me!
</motion.div>
```

### Tap

```tsx
<motion.button whileTap={{ scale: 0.9 }}>Click me!</motion.button>
```

### Hover

```tsx
<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
  Hover me!
</motion.div>
```

## 🔄 Scroll Animations

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollReveal() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return <motion.div style={{ opacity }}>Fades in on scroll</motion.div>;
}
```

## 📚 Resources

- **Official Docs:** https://www.framer.com/motion/
- **Examples:** https://www.framer.com/motion/examples/
- **API Reference:** https://www.framer.com/motion/component/

## 🎨 Integration with This Project

### With Typography Component

```tsx
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/typography";

const MotionTypography = motion(Typography);

<MotionTypography
  variant="h1"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Animated Heading
</MotionTypography>;
```

### With Button Component

```tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

<MotionButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Animated Button
</MotionButton>;
```

### With Phosphor Icons

```tsx
import { motion } from "framer-motion";
import { Lightning } from "@phosphor-icons/react/dist/ssr";

<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <Lightning size={32} weight="bold" className="text-primary" />
</motion.div>;
```

## ⚠️ Important Notes

### Client Components Only

Framer Motion requires client-side JavaScript, so always add `"use client"` at the top of components using animations:

```tsx
"use client";

import { motion } from "framer-motion";
// ... rest of your component
```

### Next.js App Router

Framer Motion works great with Next.js 15 App Router, but remember:

- Server Components can't use animations directly
- Wrap animated sections in client components
- Use dynamic imports for heavy animations

---

**Ready to animate!** Start adding smooth, professional animations to your GoPay website. 🎬✨
