import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import Project from "./components/Project";
import NavBar from "./components/NavBar";


function App() {
  return (
    
    <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={Project} path='/project' />
          <Route component={About} path='/about' />
  

        </Switch>
        
      
      
    </BrowserRouter>
    

    
  )
}

export default App;
