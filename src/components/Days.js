import React from "react";
import { useHistory } from "react-router-dom";

function Days() {
  const history = useHistory();
  return (
    <div className="content">
      <div className="days">
        <div
          className="day r"
          onClick={function() {
            history.push("/home/spark");
          }}
        >
          <h2>Spark</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day g"
          to="/art"
          onClick={function() {
            history.push("/home/bethemaker");
          }}
        >
          <h2>Be the writer</h2>
          <div className="right-arrow">›</div>
        </div>
        <div
          className="day b"
          to="/others"
          onClick={function() {
            history.push("/home/bookreview");
          }}
        >
          <h2>Book review</h2>
          <div className="right-arrow">›</div>
        </div>
        <div
          className="day r"
          to="/others"
          onClick={function() {
            history.push("/home/protogonist");
          }}
        >
          <h2>Your Protogonist</h2>
          <div className="right-arrow">›</div>
        </div>
        <div
          className="day g"
          to="/others"
          onClick={function() {
            history.push("/home/storyboard");
          }}
        >
          <h2>Story Board</h2>
          <div className="right-arrow">›</div>
        </div>
        <div
          className="day r"
          onClick={function() {
            history.push("/home/spark");
          }}
        >
          <h2>Story</h2>
          <div className="right-arrow">›</div>
        </div>
      </div>
    </div>
  );
}

export default Days;
