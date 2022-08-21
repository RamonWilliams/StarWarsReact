import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DetailsPlanets from '../../components/DetailsPlanets/DetailsPlanets'
import "./PlanetsDetails.css"
import Loader from '../../components/Loader/Loader'


const PlanetsDetails = () => {
    const {name} = useParams();
    const [planetList, setPlanetList] = useState([]);
     
    const getPlanetList = async () =>{
        const rawData = await axios.get(`https://starwars-server.vercel.app/planets/${name}`);
        console.log(rawData);
        
        setPlanetList(rawData.data.data.planet)
    }

    useEffect(() => {
      getPlanetList()
    },[])

  return (
    <div className='contenedor'>
         {planetList.length ? planetList.map((planet)=> <DetailsPlanets planet={planet}/>): <Loader />}         
</div>
    
    )
}

export default PlanetsDetails