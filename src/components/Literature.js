import React from "react";
import { useHistory } from "react-router-dom";

function Literature() {
    const history = useHistory()
  return (
    <div className="catpage litpage">
      <h1>Literature</h1>
      <div
        className="event"
        onClick={function() {
          history.push("/home/literature/spark");
        }}
      >
        <h2>Spark</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/literature/bethewriter");
        }}
      >
        <h2>Be the writer</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/literature/bookreview");
        }}
      >
        <h2>Book review</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/literature/protogonist");
        }}
      >
        <h2>Your Protogonist</h2>
      </div>
      <div
        className="event"
        onClick={function() {
          history.push("/home/literature/storyboard");
        }}
      >
        <h2>Story Board</h2>
      </div>
    </div>
  );
}

export default Literature;
