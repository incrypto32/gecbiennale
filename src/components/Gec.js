import React from 'react'
import logo from '../assets/images/maniwith.png'
import gec from '../assets/images/bienn.svg'
import dots from '../assets/images/dots.svg'
import { Link } from 'react-router-dom'
function Gec() {
    return (
        <div className="gec">
            <div className="gec-inner">
                {/* <img src={gec} alt="Gec" className="gec-logo" /> */}
                <object data={gec} type="image/svg+xml" alt="Gec" className="gec-logo"></object>
                <img src={logo} alt="Logo" className="main-logo" />
            </div>
            <div className="dots" ><object data={dots} type="image/svg+xml"></object></div>
            
            <div className="go-button"><Link to='/home' style={{textDecoration:"none"}}><h2>›</h2></Link></div>
            
        </div>
    )
}

export default Gec
