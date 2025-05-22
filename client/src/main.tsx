import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set default theme on application start
if (!document.documentElement.classList.contains('dark') && 
    !document.documentElement.classList.contains('light')) {
  document.documentElement.classList.add('light');
}

createRoot(document.getElementById("root")!).render(
  <App />
);
