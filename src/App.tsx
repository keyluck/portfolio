import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Nav } from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Projects />} path="/projects" />
        <Route element={<About />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
