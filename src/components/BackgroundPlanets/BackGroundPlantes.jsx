import React from 'react'
import { Link } from 'react-router-dom'

import "./BackGroundPlanets.css"



const BackGroundPlantes = ({planet}) => {
    
  return (

    <Link to={`/planets/${planet.name}`}>
    <figure className='planetContainer'>
    <img src={planet.image} alt={planet.name}  referrerPolicy='no-referrer' />    
    </figure>
    </Link>

  )
}

export default BackGroundPlantes