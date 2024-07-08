import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { initBrowserWorker } from "./app/mocks/browser.ts";

if (import.meta.env.DEV === true) {
  await initBrowserWorker();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
