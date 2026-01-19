# Neo Library

Neo Library is a **NeoPOP‑inspired React UI library** for product‑driven apps (fashion, commerce, fintech).

**Principles**

* Class‑based theming (no CSS‑in‑JS)
* Physical depth & motion (NeoPOP feel)
* Unopinionated layout
* Small surface area, production‑ready

---

## Installation

```bash
npm install neo-library
```

Import styles once and scope them:

```js
import "neo-library/styles.css";
```

```jsx
<div className="neopop">
  <App />
</div>
```

> Styles are scoped under `.neopop` by design.

---

## Theming

Themes are applied via classes. No providers required.

```html
<div className="neopop theme-olive-wine">
  <App />
</div>
```

Dark mode:

```html
<div className="neopop theme-olive-wine dark">
  <App />
</div>
```

Available themes:

* `theme-olive-wine`
* `theme-olive-wine-warm`
* `theme-olive-wine-bold`

### Customization

Override design tokens via CSS variables:

```css
:root {
  --accent: #7b2cbf;
  --depth-lg: 12px;
}
```

Per‑component override:

```jsx
<Button style={{ "--accent": "#ff006e" }} />
```

---

## Components

```js
import {
  Button,
  Card,
  ImageBanner,
  ProductCard,
  InputText,
  Switch,
  SegmentedControl,
  TabBar,
  Carousel,
  ImageCarousel,
  MovingBanner,
  LoadingScreen,
  ToastProvider,
  useToast
} from "neo-library";
```

### Examples

```jsx
<Button size="big">Buy Now</Button>
```

```jsx
<Card>
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

```jsx
<ProductCard
  title="Vintage Jacket"
  price="2499"
  image="https://images.unsplash.com/photo-1528701800489-20be3c1ea1b2"
/>
```

```jsx
const { addToast } = useToast();
addToast("Added to cart");
```

---

## Compatibility

* React 17+
* Vite, CRA, Next.js
* Client & SSR safe (class‑based)

---

## Roadmap

* Modals / Drawers
* Skeletons
* Carousel controls
* Theme persistence
* Accessibility

---

## License

MIT © Sreejay Reddy
