import { useState } from 'react'
import './App.css'
import { ButtonCustom } from './components/ButtonCustom/ButtonCustom'
import { PokemonManager } from './components/PokemonManager'

function App() {


  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Pokemon Team Manager</h1>
      <PokemonManager />
    </div>
  )
}

export default App
