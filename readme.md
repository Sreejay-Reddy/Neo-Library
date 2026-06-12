# Neo Library

**Live Demo:** https://neo-library-mu.vercel.app

A NeoPOP-inspired React UI component library built for fashion, thrift, fintech, and youth-centric web applications.

Neo Library is built around physical depth, class-based theming, and real-world usability — not demo-only components. It powers Ziftyco, a production e-commerce platform.

---

## Install

```bash
npm install neo-library
```

---

## Quick Start

```jsx
import { ThemeProvider, ToastProvider } from "neo-library";

function App() {
  return (
    <ThemeProvider theme="theme-olive-wine" dark={false}>
      <ToastProvider>
        <YourApp />
      </ToastProvider>
    </ThemeProvider>
  );
}
```

---

## Components

| Component          | Description                                      |
|--------------------|--------------------------------------------------|
| `ThemeProvider`    | Wraps your app, provides theme and dark mode     |
| `ToastProvider`    | Wraps your app, provides toast system            |
| `Button`           | NeoPOP-depth button with size variants           |
| `Card`             | Layout container with physical depth             |
| `ProductCard`      | E-commerce ready product display                 |
| `ImageBanner`      | Hero / promotional banner with CTA               |
| `ImageCarousel`    | Auto-advancing image carousel                    |
| `Carousel`         | Generic component carousel                       |
| `MovingBanner`     | Scrolling announcement banner                    |
| `InputText`        | Styled text input                                |
| `Switch`           | Binary toggle                                    |
| `SegmentedControl` | Multi-option selector                            |
| `TabBar`           | Tab-based navigation                             |
| `LoadingScreen`    | Full-screen loading overlay                      |

---

## Theming

Neo Library uses class-based theming — no CSS-in-JS. Override with CSS variables globally or per component.

```jsx
// Available themes
"theme-olive-wine"
"theme-olive-wine-warm"
"theme-olive-wine-bold"

// Global override
:root {
  --accent: #7b2cbf;
  --depth-lg: 12px;
}

// Per component
<Button style={{ "--accent": "#ff006e" }}>Buy Now</Button>
```

---

## Example Usage

```jsx
import { Button, ProductCard, useToast } from "neo-library";

function StorePage() {
  const { addToast } = useToast();

  return (
    <ProductCard
      title="Vintage Jacket"
      price="2499"
      description="Good condition. Rare piece."
      image="/jacket.jpg"
    />
    <Button onClick={() => addToast("Added to cart")}>
      Add to Cart
    </Button>
  );
}
```

---

## Design Principles

- **Class-based theming** — no CSS-in-JS overhead
- **Physical depth** — NeoPOP shadows and transforms are intentional, don't remove them
- **Unopinionated layout** — you control grids and spacing
- **Lightweight** — minimal animation by design

---

## Roadmap

- Modal and Drawer components
- Skeleton loaders
- Advanced carousel controls
- Theme persistence
- Accessibility improvements
- Docs website

---

## Browser & Framework Support

- React 17+
- Vite, CRA, and Next.js
- SSR-safe (class-based theming)

---

## License

MIT © Sreejay Reddy

