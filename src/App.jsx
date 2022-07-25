import { useState } from 'react'
import logo from './logo.svg'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import UserInput from './components/UserInput'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <HashRouter>
        <Routes>
          <Route path='/' element={<UserInput/>}/>
          {/* <Route element={<ProtectedRoutes/>}> */}
            <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:id' element={<PokemonDetail/>}/>
          {/* </Route> */}
          

        </Routes>
      </HashRouter>
      
    </div>
  )
}

export default App
