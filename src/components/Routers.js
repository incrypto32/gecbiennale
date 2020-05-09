import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Literature from "./Literature";
import NavBar from "./NavBar";

import Spark from "./Spark";

function Routers() {
  return (
    <div className="router">
      <NavBar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/home" exact component={Literature} />
        <Route
          path="/home/spark"
          component={() => <Spark eventName="spark" collection="spark" />}
        />
        <Route
          path="/home/bethemaker"
          component={() => (
            <Spark eventName="bethemaker" collection="bethemaker" />
          )}
        />
        <Route
          path="/home/bookreview"
          component={() => (
            <Spark eventName="bookreview" collection="bookreview" />
          )}
        />
        <Route
          path="/home/protogonist"
          component={() => (
            <Spark eventName="protogonist" collection="protogonist" />
          )}
        />
        <Route
          path="/home/storyboard"
          component={() => (
            <Spark eventName="storyboard" collection="storyboard" />
          )}
        />
        <Route
          path="/home/calligraphy"
          component={() => (
            <Spark eventName="calligraphy" collection="calligraphy" />
          )}
        />

        <Route
          path="/home/cartoon"
          component={() => <Spark  collection="cartoon" />}
        />
        <Route
          path="/home/pencildrawing"
          component={() => <Spark  collection="pencildrawing" />}
        />
        <Route
          path="/home/digitalart"
          component={() => <Spark  collection="digitalart" />}
        />
        <Route
          path="/home/watercolour"
          component={() => <Spark  collection="watercolour" />}
        />
      </Switch>
    </div>
  );
}

export default Routers;
