import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Analytics />

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "10px",
          background: "#fff",
          color: "#1f2937",
        },
      }}
    />
  </StrictMode>
);