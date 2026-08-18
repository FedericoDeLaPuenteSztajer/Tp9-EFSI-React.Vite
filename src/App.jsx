import { useState, useEffect } from 'react';
import './App.css';
import pokeAPI from './modules/PokeAPI.js';

function App() {

  const [pokemon, setPokemon] = useState({});

  const SearchPokemon = async () => {
    const response = await pokeAPI.get("https://pokeapi.co/api/v2/pokemon/ditto");
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
      types: pokeData.types[0].type.name + (pokeData.types[1] ? "/" + pokeData.types[1].type.name : ""),
      statsList: statsList
    });
  }

  return (
    <>
      {pokemon ?
        (<div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprite}></img>
          <h2>{pokemon.types}</h2>
          <ul>
            {pokemon.statsList?.map(stat => (
              <li key={stat.name}>
                {stat.name}: {stat.basePoints}
              </li>
            ))}
          </ul>
          <button onClick={() => SearchPokemon()}></button>
        </div>
        ) : (
          <div>
            <h1>Search a Pokemon</h1>
          </div>)}
    </>
  )
}

export default App
