import { useState } from 'react'
import './App.css'
import { PokemonManager } from './components/PokemonManager'

function App() {


  return (
    <div className="App">
      <h1 className="titleApp">Pokemon Team Manager</h1>
      <PokemonManager />
    </div>
  )
}

export default App
