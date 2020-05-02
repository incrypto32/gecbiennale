import React from "react";
import "./css/style.css";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Gec from "./components/Gec";
import Routers from "./components/Routers";

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
