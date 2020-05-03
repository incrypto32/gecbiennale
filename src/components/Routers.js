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
          <Route path="/home" exact component={Literature} />
          <Route path="/home/spark"  component={() => <Spark eventName='spark'   collection='spark'/>} />
         <Route path="/home/bethemaker"  component={() => <Spark eventName='bethemaker'   collection='bethemaker'/>} /> 
         <Route path="/home/bookreview"  component={() => <Spark eventName='bookreview'   collection='bookreview'/>} /> 
         <Route path="/home/protogonist"  component={() => <Spark eventName='protogonist'   collection='protogonist'/>} /> 
         <Route path="/home/storyboard"  component={() => <Spark eventName='storyboard'   collection='storyboard'/>} /> 
          <Route path="/home/art" exact  component={Art} />
          <Route path="/home/art/origami" exact  component={() => <Spark eventName='origami'   collection='storyboard'/>} /> 
          
        </Switch>
    </div>
    
  );
}

export default Routers;
