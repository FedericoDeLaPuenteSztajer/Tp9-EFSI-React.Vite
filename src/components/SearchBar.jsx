import './SearchBar.css'

function SearchBar(props) {
  const submit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        props.SearchPokemon(data.get("pokeName"))
    }

  return (
    <>
      <input></input>
      <button onClick={() => SearchPokemon("skorupi")}>Search a Pokemon</button> {/* Harcodeado */}

      <form onSubmit={submit}>
        <label>Nombre del Shiny</label>
        <input type="text" name="pokeName" placeholder="Skorupi" required />
        
        <button type="submit" onClick={() => SearchPokemon("skorupi")}>Search a Pokemon</button>
      </form>
    </>
  )
}

export default SearchBar
