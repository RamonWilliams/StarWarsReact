import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import"./MoviesDetails.css"



const MoviesDetails = () => {
    const {name} = useParams();
    const [movie,setMovie] = useState ({});

    const getMovie = async () =>{
        const raw = await axios.get(`https://starwars-server.vercel.app/movies/${name}`)
        setMovie(raw.data.data.movie);
    }
     useEffect(()=>{
       getMovie();
     },[]);

  return (
    
    <div className='contenedor'>
        <div className='carta'>
         
         <div className='lado frente'>
            <h2>{movie.name}</h2>
            <h3>{movie.year}</h3>
            <p>{movie.crawl}</p>
          </div>

         <div className='lado atras'>
           <img src={movie.poster} alt={movie.name} referrerPolicy='no-referrer' />             
         </div>

         
         </div>
    </div>
  )
}

export default MoviesDetails