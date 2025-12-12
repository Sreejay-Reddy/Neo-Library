import React, { useState } from "react";
import {
  Button,
  Card,
  InputText,
  Switch,
  SegmentedControl,
  TabBar,
  ProductCard,
  useToast
} from "../src/index.js";

export default function Demo() {
  const { addToast } = useToast();

  const [segValue, setSegValue] = useState("opt1");
  const [switchOn, setSwitchOn] = useState(false);
  const [tabValue, setTabValue] = useState("home");

  const [inputValue, setInputValue] = useState("");

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ marginBottom: "40px", fontWeight: "900" }}>
        NeoPOP UI Demo
      </h1>

      {/* ------------------ PRODUCT CARD ------------------ */}
      <Card style={{ marginBottom: "30px" }}>
        <h2>Product Card</h2>

        <ProductCard
          image="https://images.unsplash.com/photo-1616072582135-6ff4591d7d7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Vintage Jacket"
          price="2499"
          onClick={() => addToast("Clicked Product!", 2000)}
        />

        <p style={{ marginTop: "12px" }}>
          This is a standard product card with an image.
        </p>
      </Card>

      {/* ------------------ BUTTONS ------------------ */}
      <Card style={{ marginBottom: "30px" }}>
        <h2>Buttons</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Button>Primary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button size="small">Small</Button>
          <Button size="big">Big</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </Card>

      {/* ------------------ INPUT ------------------ */}
      <Card style={{ marginBottom: "30px" }}>
        <h2>Input</h2>

        <InputText
          placeholder="Type something..."
          size="normal"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <p style={{ marginTop: "10px" }}>Value: {inputValue}</p>
      </Card>

      {/* ------------------ SWITCH ------------------ */}
      <Card style={{ marginBottom: "30px" }}>
        <h2>Switch</h2>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Switch checked={switchOn} onChange={setSwitchOn} />
          <span>{switchOn ? "ON" : "OFF"}</span>
        </div>
      </Card>

      {/* ------------------ SEGMENTED ------------------ */}
      <Card style={{ marginBottom: "30px" }}>
        <h2>Segmented Control</h2>

        <SegmentedControl
          value={segValue}
          onChange={setSegValue}
          options={[
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2" },
            { label: "Option 3", value: "opt3" },
          ]}
        />

        <p style={{ marginTop: "10px" }}>Selected: {segValue}</p>
      </Card>

      {/* ------------------ TAB BAR ------------------ */}
      <Card style={{ marginBottom: "30px" }}>
        <h2>Tab Bar</h2>

        <TabBar
          tabs={[
            { key: "home", label: "Home" },
            { key: "explore", label: "Explore" },
            { key: "profile", label: "Profile" },
          ]}
          active={tabValue}
          onChange={setTabValue}
        />

        <p style={{ marginTop: "10px" }}>Active tab: {tabValue}</p>
      </Card>

      {/* ------------------ TOAST ------------------ */}
      <Card>
        <h2>Toast</h2>
        <Button onClick={() => addToast("This is a NeoPOP Toast!", 2500)}>
          Show Toast
        </Button>
      </Card>
    </div>
  );
}
