import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import VPN from "./pages/VPN"; // Make sure this file exists

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vpn" element={<VPN />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
