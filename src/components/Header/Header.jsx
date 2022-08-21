import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"




const Header = () => {     
    return (
    <header>

        <nav> 

        <ul>
            <li className='home'><Link to='/'><b>Home</b></Link></li>
            <li><Link to='/characters'><b>Characters</b></Link></li>
            <li><Link to='/movies'><b>Movies</b></Link></li>
            <li><Link to='/planets'><b>Planets</b></Link></li>
        </ul>             
        
            
        </nav>
    </header>
  )
}

export default Header