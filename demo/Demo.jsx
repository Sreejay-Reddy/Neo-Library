import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  InputText,
  Switch,
  ProductCard,
  SegmentedControl,
  TabBar,
  LoadingScreen,
  MovingBanner,
  ImageBanner,
  useToast,
  Carousel,
  ImageCarousel
} from "../src/index.js";

export default function Demo() {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);
  const [segment, setSegment] = useState("one");
  const [tab, setTab] = useState("home");

  // Fake loading screen
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const { addToast } = useToast();

  // Theme toggle (class-based)
  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  if (loading) {
    return <LoadingScreen text="Neo Library" />;
  }

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "auto" }}>
      <h1 style={{ fontWeight: 900, marginBottom: 24 }}>
        Neo Library Demo
      </h1>

      <Button onClick={() => addToast("Toast works!")}>
        Test Toast
      </Button>


      <ImageBanner
        image="https://images.unsplash.com/photo-1765651998297-c5f862ac0a53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Vintage Drop"
        subtitle="One-of-one thrift pieces"
        cta="Shop Now"
        onClick={() => addToast("Added to cart")}
      />

      {/* THEME TOGGLE */}
      <Card style={{ marginBottom: 32 }}>
        <h2>Theme</h2>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Switch checked={dark} onChange={setDark} />
          <span>{dark ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </Card>

      <MovingBanner
        text="♻️ Thrift responsibly • New vintage drop this Sunday • Free shipping over ₹999"
        onClick={() => alert("Banner clicked!")}
      />


      {/* BUTTONS */}
      <Card style={{ marginBottom: 32 }}>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Button>Default</Button>
          <Button size="small">Small</Button>
          <Button size="big">Big</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </Card>

      {/* INPUT */}
      <Card style={{ marginBottom: 32 }}>
        <h2>Input</h2>
        <InputText placeholder="Type something..." />
      </Card>

      {/* SWITCH */}
      <Card style={{ marginBottom: 32 }}>
        <h2>Switch</h2>
        <Switch checked={dark} onChange={setDark} />
      </Card>

      {/* SEGMENTED CONTROL */}
      <Card style={{ marginBottom: 32 }}>
        <h2>Segmented Control</h2>
        <SegmentedControl
          value={segment}
          onChange={setSegment}
          options={[
            { label: "Option One", value: "one" },
            { label: "Option Two", value: "two" },
            { label: "Option Three", value: "three" }
          ]}
        />
        <p style={{ marginTop: 8 }}>Selected: {segment}</p>
      </Card>

      {/* TAB BAR */}
      <Card style={{ marginBottom: 32 }}>
        <h2>Tab Bar</h2>
        <TabBar
          active={tab}
          onChange={setTab}
          tabs={[
            { key: "home", label: "Home" },
            { key: "explore", label: "Explore" },
            { key: "profile", label: "Profile" }
          ]}
        />
        <p style={{ marginTop: 8 }}>Active tab: {tab}</p>
      </Card>

      {/* CAROUSEL */}
      <Carousel>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Carousel>

      {/* IMAGE CAROUSEL */}
      <ImageCarousel
        interval={6000}
        items={[
          {
            image: "https://images.unsplash.com/photo-1766133238998-b6813eaea76f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Winter Drop",
            subtitle: "Vintage jackets just landed",
            cta: "Explore"
          },
          {
            image: "https://images.unsplash.com/photo-1765651998297-c5f862ac0a53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Street Archive",
            subtitle: "90s silhouettes",
            cta: "Shop Now"
          },
          {
            image: "https://images.unsplash.com/photo-1766546407207-4b2a236edda6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Rare Finds",
            subtitle: "One-of-one pieces",
            cta: "View"
          }
        ]}
      />



      {/* PRODUCT CARD */}
      <Card>
        <h2>Product Card</h2>
        <ProductCard
          title="Vintage Jacket"
          price="2499"
          description="Good condition. Rare piece."
          image="https://images.unsplash.com/photo-1765651998297-c5f862ac0a53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Card>
    </div>
  );
}
