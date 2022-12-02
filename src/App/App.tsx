import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../Home/Home";
import Documentation from "../Documentation/Documentation";
import "./App.css";

function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
