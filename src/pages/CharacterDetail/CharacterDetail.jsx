import React from 'react'
import "./CharacterDetail.css"
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "./CharacterDetail.css";
import Loader from '../../components/Loader/Loader';


const CharacterDetail = () => {
    const {id} = useParams();
  const [character,setCharacter] = useState({});

  const getCharacter = async () =>{
      const raw = await axios(`https://starwars-server.vercel.app/characters/${id}`)
      setCharacter(raw.data.data.characters);
  }


  useEffect(()=>{
    getCharacter();
  },[]);


  return (  
    
    
   <figure className='characterContainer'>
     {character !== false ? <> <img src={character.image} alt={character.name} />
       
       <div className='characterInfo'> 
       <h2>{character.name}</h2>
        <h3> <span>Origin: </span>{character.origin}</h3>
        <p>{character.role}</p>
        <p>{character.description}</p>
        </div></> : <Loader />}
        
       </figure>
  )
}

export default CharacterDetail