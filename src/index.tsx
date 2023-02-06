import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShopProvider } from "./Context/Context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
