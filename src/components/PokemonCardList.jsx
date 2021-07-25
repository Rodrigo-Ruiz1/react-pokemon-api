import PokemonCard from './PokemonCard';

function PokemonCardList(props) {
    return (
        <>
        {/* Component is only used to map through API data, passes it to PokemonCard component */}
        {props.allPokemon.map(pokemon => {
            return (
                // Choosing what to pass into the component (still have no clue what key does, but it stops the error)
                // Also, I choose to pass ALL data rather than specific bits.
                <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                />
            )
        })}
        
        </>
    )
}

export default PokemonCardList;