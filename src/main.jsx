import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Predict from "./components/Predict/Predict";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
