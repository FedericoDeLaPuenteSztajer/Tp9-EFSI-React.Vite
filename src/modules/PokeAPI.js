import axios from 'axios';
//API page: https://pokeapi.co/
//API key= none
//Example: https://pokeapi.co/api/v2/pokemon-species/ditto => returns all ditto data

const pokeAPI = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default pokeAPI;
