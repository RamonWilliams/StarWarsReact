import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import BackGroundPlantes from '../../components/BackgroundPlanets/BackGroundPlantes';
import Loader from '../../components/Loader/Loader';
import"./Planets.css"

const Planets = () => {
   const [planetsList,setPlanetList] = useState([]);

    const getPlanetList = async () =>{
      const raw = await axios.get("https://starwars-server.vercel.app/planets");     
      setPlanetList(raw.data.data.planets);
    }   

   useEffect(()=>{
       getPlanetList();
   },[]);


  return (
    <figure className='mainFigure'>
      {planetsList.length > 0 ? planetsList.map((planet)=><BackGroundPlantes key={planet._id} planet={planet} />)
      :(<Loader />)}
    </figure>
  )
}

export default Planets