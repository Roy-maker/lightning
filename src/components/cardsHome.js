import React from 'react'
import CardHome from './cardHome'
import './css/cardsHome.css'

function cardsHome() {
  return (
    <div className='CardsContainer'>
      <CardHome
        title="Card 1"
        content=" El pararrayos es un dispositivo esencial que protege edificaciones y estructuras al desviar descargas eléctricas de manera segura hacia el suelo."
      />
      <CardHome
        title="Card 2"
        content="Con un pararrayos instalado, puedes prevenir daños causados por rayos, protegiendo tanto la infraestructura como a las personas en su interior."
      />
      <CardHome
        title="Card 3"
        content="Los pararrayos modernos garantizan la protección eficiente frente a rayos, ofreciendo seguridad y tranquilidad ante tormentas eléctricas."
      />
    </div>
  )
}

export default cardsHome