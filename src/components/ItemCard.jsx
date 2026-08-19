import './ItemCard.css';

function ItemCard(props) {

  const pokemon= props.pokemon;

  return (
    <>
        <h1>{pokemon.name}</h1>
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
