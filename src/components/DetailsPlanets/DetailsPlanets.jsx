import React from 'react'
import { Link } from 'react-router-dom'


const DetailsPlanets = ({planet}) => {
  return (
    
    <Link to={`/planets/${planet.name}`}>
    <div className='carta'>
        <div className='lado frente'>  
        <h2>{planet.name}</h2>
        <h3>{planet.region}</h3>
       <p>oruscant (pronounced /'kɔɹəsɑnt/), 
           also known as Imperial Center during the rule of the Galactic Empire, 
           was an ecumenopolis—a city-covered planet, collectively known as Imperial 
           City— in the Coruscant system of the Core Worlds. Though debated by historians, 
           it was generally believed that Coruscant was the original homeworld of humanity.
            Coruscant was at one point also historically the home of the ancient Taung and Zhell.
             Noted for its cosmopolitan culture and towering skyscrapers, Coruscant's population consisted 
             of trillions of citizens hailing from a vast array of both humanoid and alien species. In addition, Coruscant's strategic
              location at the end of several major trade routes enabled it to grow in power and influence, causing the city-planet to surpass 
              its early rivals and become the hub of galactic culture, education, finance, fine arts, politics and technology. 
              It was the location of several major landmarks, including the Jedi Temple, Monument Plaza, and the Senate Building.</p>
       

        </div>
        <div className='lado atras'>
            <img src={planet.image} alt={planet.name} />

        </div>
    </div>
    </Link>
  )
}

export default DetailsPlanets