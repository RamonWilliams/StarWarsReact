import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home/Home'
import Characters from './pages/Characters/Characters'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import Movies from './pages/Movies/Movies'
import Planets from './pages/Planets/Planets'
import MoviesDetails from './pages/MoviesDetails/MoviesDetails'
import PlanetsDetails from '../src/pages/PlanetsDetails/PlanetsDetails'

const  App = () => {  
  return ( 

    <div className="App">
   
      <Router>
     
       <Header/>

        <Routes>       
         <Route path="/" element={<Home/>} />
         <Route path="/characters" element={<Characters/>}/>
         <Route path="characters/:id" element={<CharacterDetail/>} />
         <Route path="/movies" element={<Movies/>}/>
         <Route path="/movies/:name" element={<MoviesDetails />} />
         <Route path="/planets" element={<Planets/>}/>
         <Route path="/planets/:name" element={<PlanetsDetails />}/>
        </Routes>
       <Footer />
      
    </Router>
  
    </div>
  )
}

export default App
