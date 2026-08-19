import { useState, useEffect } from 'react';
import pokeAPI from './modules/PokeAPI.js';

import './App.css';

// Componentes
import SearchBar from './components/SearchBar.jsx';
import ItemCard from './components/ItemCard.jsx';

function App() {

  const [pokemon, setPokemon] = useState(null);
  const [logState, setLogState] = useState("Esperando busqueda");

  const SearchPokemon = async (pokemonName) => {
    setLogState("Buscando pokemon...")
    setPokemon(null);

    try {
      const response = await pokeAPI.get("pokemon/" + pokemonName);
      const pokeData = response.data;
      const statsList = []

      pokeData.stats.forEach(pokeStat => {
        statsList.push({
          name: pokeStat.stat.name,
          basePoints: pokeStat.base_stat
        })
      });

      setPokemon({
        name: pokeData.name[0].toUpperCase() + pokeData.name.slice(1),
        sprite: (pokeData.sprites.other["official-artwork"])["front_shiny"],
        types: pokeData.types[0].type.name[0].toUpperCase() + pokeData.types[0].type.name.slice(1) + (pokeData.types[1] ? "/" + pokeData.types[1].type.name[0].toUpperCase() + pokeData.types[1].type.name.slice(1) : ""),
        statsList: statsList
      });

      setLogState("Pokemon encontrado")

    } catch (error) {
      console.log('Error 400: Bad Request detectado');
      setLogState("Pokemon no Encontrado");
    }
  }

  return (
    <>
      <SearchBar SearchPokemon={SearchPokemon} />
      {pokemon ?
        (
          <ItemCard pokemon={pokemon} />
        ) : (
          <div>
            {console.log("This is being seen")}
            <h1>{logState}</h1>
          </div>)}
    </>
  )
}

export default App;
