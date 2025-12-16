import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Cursor from "./components/cursor/cursor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Cursor/>
    <App />
  <Cursor />
  </StrictMode>
);
