import React from 'react'
import bg from "../assets/images/bg.svg"
function Days() {
    return (
        <div className="content">
        <div className="days">
         
          <div className="day" onClick={function(){console.log("Clicked Pwoliyeee")}}>
            <h2>day 1</h2><div className="right-arrow">›</div>
          </div>
          <div className="day" onClick={function(){console.log("Clicked Pwoliyeee")}}>
            <h2>day 2</h2><div className="right-arrow">›</div>
          </div>
          <div className="day" onClick={function(){console.log("Clicked Pwoliyeee")}}>
            <h2>day 3</h2><div className="right-arrow">›</div>
          </div>
        </div>
        {/* <div className="bg"><img src={bg}></img></div> */}
      </div>
    )
}

export default Days
