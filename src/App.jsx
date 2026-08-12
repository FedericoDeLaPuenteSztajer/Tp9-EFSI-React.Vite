import { useState, useEffect } from 'react';
import './App.css';
import pokeAPI from './modules/PokeAPI.js';

function App() {

  const async SearchSkorupi = () => {
    const response = await pokeAPI.get("");

    return response.name
  }


  return (
    <>

    </>
  )
}

export default App
