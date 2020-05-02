import React from "react";
import "./css/style.css";
import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Gec from "./components/Gec";
import Routers from "./components/Routers";
import Literature from "./components/Literature";
function App() {
  return (
   
    
    <Router> 
  {/* <NavBar /> */}
   <Switch >
   <Route path="/" exact component={Gec} />
   <Route path="/home" component={Routers} />
   {/* <Route path="/literature" component={Literature} /> */}
   </Switch>
   </Router>
  );
}

export default App;
