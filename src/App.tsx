import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Root } from "./components/Root";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Root>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Projects />} path="/projects" />
          <Route element={<About />} path="/about" />
        </Routes>
      </Root>
    </BrowserRouter>
  );
};

export default App;
