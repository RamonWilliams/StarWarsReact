import React,{useState,useEffect} from 'react';
import axios from 'axios'
import CharacterPortrait from '../../components/CharactersPortrait/CharacterPortrait';
import "./Characters.css"
import Loader from '../../components/Loader/Loader';


const Characters = () => {
  const [characterList,setCharacterList] = useState([]);

  const getCharacter = async () =>{
    const rawData = await axios.get("https://starwars-server.vercel.app/characters");
    console.log(rawData)
    setCharacterList( rawData.data.data.characters)

  }

  useEffect(()=>{
  getCharacter();
  },[])

  
  return (
    <figure >
       
        <div className='characters'>
          {characterList.length  ? characterList.map((character) => <CharacterPortrait character={character}/>):<Loader />}
          
        </div>
    </figure>
  )
}

export default Characters