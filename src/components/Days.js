import React from "react";
import { useHistory } from "react-router-dom";

function Days() {
  const history = useHistory();

  // function buttonCreater(item,i){
  //   let colorList=['r','b','g']
  //   console.log(item.toLowerCase().replace(/\s+/g, ''))
  //   switch(i%3)
  //   // return (
        
  //   //     <div
  //   //       className="day r"
  //   //       onClick={function() {
  //   //         history.push("/home/"+item.toLowerCase().replace(/\s+/g, ''));
  //   //       }}
  //   //     >
  //   //       <h2>Spark</h2>
  //   //       <div className="right-arrow">›</div>
  //   //     </div>

  //   // )
  // }
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
          <h2>Be the maker</h2>
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
            history.push("/home/finalcut");
          }}
        >
          <h2>Final Cut</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day g"
          onClick={function() {
            history.push("/home/origami");
          }}
        >
          <h2>Origami</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day b"
          onClick={function() {
            history.push("/home/mcv");
          }}
        >
          <h2>Musical cover video</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day r"
          onClick={function() {
            history.push("/home/craftwork");
          }}
        >
          <h2>Craft work</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day g"
          onClick={function() {
            history.push("/home/calligraphy");
          }}
        >
          <h2>Calligraphy</h2>
          <div className="right-arrow">›</div>
        </div>
        

        <div
          className="day r"
          onClick={function() {
            history.push("/home/cartoon");
          }}
        >
          <h2>Cartoon</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day g"
          onClick={function() {
            history.push("/home/pencildrawing");
          }}
        >
          <h2>Pencil Drawing</h2>
          <div className="right-arrow">›</div>
        </div>

        <div
          className="day b"
          onClick={function() {
            history.push("/home/digitalart");
          }}
        >
          <h2>Digital Art</h2>
          <div className="right-arrow">›</div>
        </div>
        <div
          className="day r"
          onClick={function() {
            history.push("/home/watercolour");
          }}
        >
          <h2>Water Colour</h2>
          <div className="right-arrow">›</div>
        </div>
      </div>

      
    </div>
  );
}

export default Days;
