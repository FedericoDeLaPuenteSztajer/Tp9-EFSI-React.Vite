import { useState, useEffect } from 'react';
import pokeAPI from './modules/PokeAPI.js';

import './App.css';

// Componentes
import SearchBar from './components/SearchBar.js';

function App() {

  const [pokemon, setPokemon] = useState({});
  const [logState, setLogState] = useState("Esperando busqueda");

  const SearchPokemon = async (pokemonName) => {
    setLogState("Buscando pokemon...")

    const response = await pokeAPI.get("pokemon/" + pokemonName);
    const pokeData = response.data;
    const statsList = []

    pokeData.stats.forEach(pokeStat => {
      statsList.push({
        name: pokeStat.stat.name,
        basePoints: pokeStat.base_stat
      })

    setLogState("Pokemon encontrado")
    });

    setPokemon({
      name: pokeData.name[0].toUpperCase() + pokeData.name.slice(1),
      sprite: (pokeData.sprites.other["official-artwork"])["front_shiny"],
      types: pokeData.types[0].type.name[0].toUpperCase() + pokeData.types[0].type.name.slice(1) + (pokeData.types[1] ? "/" + pokeData.types[1].type.name[0].toUpperCase() + pokeData.types[1].type.name.slice(1) : ""),
      statsList: statsList
    });
  }

  return (
    <>
      {pokemon ?
        (
        <SearchBar SearchPokemon={SearchPokemon}/>
        ) : (
          <div>
            <h1>logState</h1>
          </div>)}
    </>
  )
}

export default App
