import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { Router, Switch, Route } from "react-router-dom";
import Literature from "./Literature";

function Routers() {
  return (
    
      
      <div className="router">
        <NavBar />
        <Switch>
          <Route path="/home" exact  component={Home} />
          <Route path="/home/literature"  component={Literature} />
        </Switch>
    </div>
    
  );
}

export default Routers;
