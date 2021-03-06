import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import './InfoBar.css'

function InfoBar({ room }) {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img src={onlineIcon} alt="Online Icon" className='on line icon' />
                <h3>{room}</h3>
            </div>
            <div className="rightInnerContainer">
                <a href="/"> <img src={closeIcon} alt="Close Icon" /></a>
            </div>
        </div>
    )
}

export default InfoBar
