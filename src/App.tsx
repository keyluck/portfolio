import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { Navigation } from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Projects />} path="/projects" />
        <Route element={<About />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
