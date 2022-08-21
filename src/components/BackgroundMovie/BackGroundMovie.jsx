import React from 'react'
import"./BackGroundMovie.css"
import { Link } from 'react-router-dom'

const BackGroundMovie = ({movie}) => {
  return (
     
    <Link to={`/movies/${movie.name}`}>
    <figure className='photo'>
       <img src={movie.poster} alt={movie.name} referrerPolicy='no-referrer' />
    </figure>
    </Link>
  )
}

export default BackGroundMovie