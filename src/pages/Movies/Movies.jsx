import React, { useEffect } from 'react'
import { useState } from 'react'
import"./Movies.css"
import axios from "axios"
import BackGroundMovie from "../../components/BackgroundMovie/BackGroundMovie"
import Loader from '../../components/Loader/Loader'


const Movies = () => {
const [movieList,setMovieList] = useState([]);
  
  const getMovies = async () =>{
    const raw = await axios("https://starwars-server.vercel.app/movies");
     setMovieList(raw.data.data.movies);
  }

useEffect(()=>{
   getMovies();
},[]);

  return (
   <figure className='mainFigure' > 
     {movieList.length > 0 ?( movieList.map((movie)=>(<BackGroundMovie  movie={movie} key={movie._id} />))):(
          <Loader />)}
   </figure>
  
  )      
     }

export default Movies