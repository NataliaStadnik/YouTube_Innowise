import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./normalize.css";
import "./main.css";
import "./media.css";

export const MobileContext = createContext(false);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
