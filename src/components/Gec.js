import React from 'react'
import logo from '../assets/images/maniwith.png'
import gec from '../assets/images/bienn.svg'
import dots from '../assets/images/dots.svg'
import { Link } from 'react-router-dom'
function Gec() {
    return (
        <div className="gec">
            <div className="gec-inner">
                <img src={gec} alt="Gec" className="gec-logo" />
                <img src={logo} alt="Logo" className="main-logo" />
            </div>
            <div className="dots" ><img src={dots} /></div>
            <Link to='/home'>
            <div className="go-button"><h2>›</h2></div>
            </Link>
        </div>
    )
}

export default Gec
