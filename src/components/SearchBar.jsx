import './SearchBar.css'

function SearchBar() {

  return (
    <>
      <input></input>
      <button onClick={() => SearchPokemon("skorupi")}>Search a Pokemon</button> {/* Harcodeado */}
    </>
  )
}

export default SearchBar
