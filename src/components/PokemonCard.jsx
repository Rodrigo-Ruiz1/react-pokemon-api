function PokemonCard(props) {
    return (
        <>
            <div id="pokemonDiv">
                <h3>{props.pokemon.name}</h3>
                <div>
                    <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}></img>
                    <img src={props.pokemon.sprites.front_shiny} alt={props.pokemon.name}></img>
                </div>
                <h4>Types</h4>
                <div>
                    {props.pokemon.types.map(type => {
                        return (
                            <p>{type.type.name}</p>
                        )
                    })}
                </div>
                <p>National Pokedex ID: {props.pokemon.id}</p>
            </div>
        </>
    )
}

export default PokemonCard;