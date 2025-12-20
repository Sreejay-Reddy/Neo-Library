# 🧱 Neo Library

Neo Library is a **NeoPOP-inspired React UI component library** designed for  
**fashion, thrift, fintech, and youth-centric web applications**.

It focuses on:
- Class-based theming
- Physical depth (NeoPOP feel)
- Minimal but expressive components
- Real-world usability (not demo-only UI)

---

## ✨ Features

- 🎨 Class-based theme system (no CSS-in-JS)
- 🌗 Light & dark modes
- 🧩 Unopinionated layout (you control grids & spacing)
- 📱 Responsive by default
- 🔔 Built-in toast system
- 🖼 Interactive banners
- 🛍 E-commerce ready components

---

## 📦 Installation

```bash
npm install neo-library

---

## Components 

1. ThemeProvider
- Must be wrapped around your app to provide theme

- <ThemeProvider theme="theme-olive-wine" dark={false} >
- <App />
- </ThemeProvider >

- Themes include   "theme-olive-wine",
-                  "theme-olive-wine-warm",
-                  "theme-olive-wine-bold"

- When dark is set to "False" it's light mode and when set to "True" its dark mode

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

2. ToastProvider
- Must be wrapped around your app to provide toast
- import { ToastProvider } from "neo-library";

    <ToastProvider>
        <App />
    </ToastProvider>

- import { useToast } from "neo-library";

  const { addToast } = useToast();

   onClick={() => addToast("Added to cart")}
-- internally UseToast() has to be set to addToast().

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

3. Button
--import { Button } from "neo-library";

 <Button>Default</Button>
 <Button size="small">Small</Button>
 <Button size="big">Big</Button>
 <Button fullWidth>Full Width</Button>

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

4. Imagebanner
 -- Image-based hero / promotional banner.
 --import { ImageBanner } from "neo-library";

 <ImageBanner
    image="https://images.unsplash.com/photo-1521335629791-ce4aec67dd53"
    title="Vintage Drop"
    subtitle="One-of-one thrift pieces"
    cta="Shop Now"
    onClick={() => console.log("Banner clicked")}
 />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

5. Card
-- Layout container with NeoPOP depth.
-- import { Card } from "neo-library";

 <Card>
   <h2>Title</h2>
   <p>Content</p>
 </Card>

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

6. InputText
-- Styled text input.
-- import { InputText } from "neo-library";

 <InputText placeholder="Type something..." />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

7. LoadingScreen
-- Full-screen loading overlay.
--import { LoadingScreen } from "neo-library";

<LoadingScreen text="Loading..." />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

8. MovingBanner
-- Scrolling, interactive text banner (announcements).
-- import { MovingBanner } from "neo-library";

 <MovingBanner
  text="Free shipping over ₹999 • Vintage drop Sunday"
  onClick={() => console.log("Clicked")}
 />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

9. ProductCard
 -- E-commerce ready product display card.
 -- import { ProductCard } from "neo-library";

 <ProductCard
  title="Vintage Jacket"
  price="2499"
  description="Good condition. Rare piece."
  image="https://images.unsplash.com/photo-1528701800489-20be3c1ea1b2"
 />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

10. Switch
-- Binary toggle (on / off).
-- import { Switch } from "neo-library";

 <Switch checked={value} onChange={setValue} />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

11. SegmentedControl
-- Segmented selection control.
-- import { SegmentedControl } from "neo-library";

 <SegmentedControl
  value={value}
  onChange={setValue}
  options={[
    { label: "One", value: "one" },
    { label: "Two", value: "two" }
  ]}
 />

----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------

12. TabBar
-- Tab-based navigation component.
-- import { TabBar } from "neo-library";

 <TabBar
  active={tab}
  onChange={setTab}
  tabs={[
    { key: "home", label: "Home" },
    { key: "profile", label: "Profile" }
  ]}
 />

**--------------------------------------------------------------------------------------**

## 🗺 Roadmap ##

- Modal / Drawer components
- Skeleton loaders
- Carousel & banner groups
- Theme persistence
- Accessibility improvements
- Docs website

---

## 🌍 Browser & Framework Support ##

- React 17+
- Works with Vite, CRA, and Next.js
- SSR-safe (class-based theming)

---

## ⚠️ Known Limitations ##

- No CSS-in-JS (intentional)
- No enforced layout system
- Minimal animation by design

- These trade-offs are intentional to keep the library lightweight.
---

## 📄 License ##

MIT © Sreejay Reddy



