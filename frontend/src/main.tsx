import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css"; // ⭐ This is missing

import { Toaster } from "react-hot-toast";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster position="top-right" />
  </React.StrictMode>
);