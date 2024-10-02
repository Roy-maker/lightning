import React from 'react'
import './css/carouselProtect.css'
import img1 from '../images/logo.jpeg';

function carouselProtect() {
    return (
        <div>
            <h1>Protección Efectiva</h1>
            <div className='sel'>
                <img src={img1} alt='' />
                <h3>Los Santos Custom Best Mechanic of the world</h3>
            </div>
        </div>
    )
}

export default carouselProtect