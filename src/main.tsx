import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <App />
    </Worker>
  </React.StrictMode>
);
