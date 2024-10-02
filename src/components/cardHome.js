import React from 'react'
import './css/cardHome.css'
import img1 from '../images/logo.jpeg'

function cardHome({ title, content}) {
  return (
    <div className='cardStyle'>
      <img src={img1} alt='' className="cardImage"></img>
      <div className='cardContent'>
        <h1>{title}</h1>
        <p>
          {content}
        </p>
        <a href='#!'>Go To Website</a>
      </div>
    </div>
  )
}

export default cardHome