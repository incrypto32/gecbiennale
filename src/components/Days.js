import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Days() {
  const history = useHistory();
    return (
        <div className="content">
        <div className="days">
         
          <div className="day" onClick={function(){history.push("/home/literature")}}>
            <h2>Literature</h2><div className="right-arrow" >›</div>
          </div>
          
          <div className="day"  to="/art" onClick={function(){history.push("/home/art")}}>
            <h2>Art</h2><div className="right-arrow">›</div>
          </div>
          <div className="day" to="/others" onClick={function(){history.push("/home/others")}}>
            <h2>Others</h2><div className="right-arrow">›</div>
          </div>
        </div>      
      </div>
    )
}

export default Days
