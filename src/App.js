import React, { useState } from "react";
import Navbar from "./comps/Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
