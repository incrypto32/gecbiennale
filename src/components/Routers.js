import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import {  Switch, Route } from "react-router-dom";
import Literature from "./Literature";
import Art from "./Art";
import Spark from "./Spark";

function Routers() {
  return (
    
      
      <div className="router">
        <NavBar />
        <Switch>
          <Route path="/home" exact  component={Home} />
          <Route path="/home/literature" exact component={Literature} />
          <Route path="/home/literature/spark"  component={Spark} />
          <Route path="/home/art"  component={Art} />
        </Switch>
    </div>
    
  );
}

export default Routers;
