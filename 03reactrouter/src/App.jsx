import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import About_us from "./Components/about-us";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about_us" element={<About_us />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
