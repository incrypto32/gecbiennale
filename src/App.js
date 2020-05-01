import React from "react";
import "./css/style.css";
import Home from "./components/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
function App() {
  return (
   
    <Router> 
      <NavBar />
    <Switch >
    
    <Route path="/" exact component={Home} />
    </Switch>
    </Router>
 
  );
}

export default App;
