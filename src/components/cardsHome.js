import React from 'react'
import CardHome from './cardHome'
import './css/cardsHome.css'

function cardsHome() {
  return (
    <div className='first'>
      <CardHome/>
      <CardHome/>
      <CardHome/>
    </div>
  )
}

export default cardsHome