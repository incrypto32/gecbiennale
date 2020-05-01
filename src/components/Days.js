import React from 'react'

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
      </div>
    )
}

export default Days
