import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Nav from "./components/Nav";
import ProjectsNew from "./components/ProjectsNew";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Projects} path="/projects" />
        <Route component={About} path="/about" />
        <Route component={ProjectsNew} path="/projectsnew" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
