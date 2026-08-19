import './ItemCard.css';

function ItemCard(props) {

  const pokemon = props.pokemon;
  const favoritesList = props.favoritesList;
  const setFavoritesList = props.setFavoritesList;


  const ChangeFavorite = () => {
    if (!favoritesList.find(f => f === pokemon.name)) {
      setFavoritesList([...favoritesList, pokemon.name]);
    } else {
      setFavoritesList(favoritesList.filter(f => f !== pokemon.name));
    }
  };

  return (
    <>
      <h1>{pokemon.name}</h1>

      <button onClick={() => ChangeFavorite()}>
        {favoritesList.find(f => f === pokemon.name) ? "❤️" : "🖤"}
      </button>

      {/*HEART BUTTON WITH EMOJI*/}
      <img src={pokemon.sprite}></img>
      <h2>{pokemon.types}</h2>
      <ul>
        {pokemon.statsList?.map(stat => (
          <li key={stat.name}>
            {stat.name}: {stat.basePoints}
          </li>
        ))}
      </ul>

    </>
  )
}

export default ItemCard;
